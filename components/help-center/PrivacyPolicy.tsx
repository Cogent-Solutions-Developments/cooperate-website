"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type SectionType = {
  id: string;
  title: string;
  body: string;
};

const sections: SectionType[] = [
  {
    id: "consent",
    title: "Registration Consent",
    body: `By filling out the registration form to attend our event, you agree and consent to Cogent Solutions™ sharing your personal contact details, in accordance with GDPR guidelines, with our sponsors and partners.`,
  },
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    body: `By signing, registering, attending, sponsoring, or otherwise engaging with Cogent Solutions Event Management LLC ("Cogent Solutions"), you agree to be legally bound by these Terms & Conditions, our Privacy Policy, and applicable laws including UAE Federal Decree-Law No. 45 of 2021 and GDPR (EU Regulation 2016/679).`,
  },
  {
    id: "privacy",
    title: "2. Data Privacy & Consent",
    body: `You consent to the collection, use, and international transfer of your personal data (including email, contact, billing, and professional details) for the purposes of event management, business communication, and marketing. Withdrawal of consent must be provided in writing and may be subject to legal or contractual obligations.`,
  },
  {
    id: "payment",
    title: "3. Payment Terms",
    body: `All fees are due as invoiced and must be settled within the stated timeframe (typically within 2 business days unless otherwise specified). Cogent reserves the right to deny event access for non-payment. VAT is applicable as per UAE law and must be borne by the client.`,
  },
  {
    id: "cancellation",
    title: "4. Cancellation Policy",
    body: `No cancellations or refunds are permitted after confirmation.

If Cogent postpones or reschedules an event, you may choose to attend on the new date or request a credit voucher valid for one year.`,
  },
  {
    id: "modifications",
    title: "5. Event Modifications",
    body: `Cogent reserves the right to alter the event format (virtual, hybrid, or in-person), agenda, speakers, or venue at its discretion for operational or legal reasons. Changes will be communicated in advance where feasible.`,
  },
  {
    id: "likeness",
    title: "6. Use of Likeness & Materials",
    body: `Attendees and sponsors grant Cogent the right to use photographs, video, and audio taken at events for promotional purposes. Materials submitted for event use may be published unless explicitly marked “Confidential.”`,
  },
  {
    id: "ip",
    title: "7. Intellectual Property",
    body: `All content provided by Cogent or event participants remains the intellectual property of the respective owner. Unauthorized recording, reproduction, or distribution is strictly prohibited without prior written consent.`,
  },
  {
    id: "liability",
    title: "8. Limitation of Liability",
    body: `Cogent shall not be held liable for indirect or consequential losses, including travel or accommodation costs. Total liability, if any, shall not exceed the total fees paid by the client.`,
  },
  {
    id: "indemnification",
    title: "9. Indemnification",
    body: `Clients, sponsors, and delegates agree to indemnify and hold harmless Cogent from any claims, damages, or legal actions arising out of their participation, data misuse, or contractual breach.`,
  },
  {
    id: "jurisdiction",
    title: "10. Jurisdiction",
    body: `This agreement shall be governed by and construed in accordance with the laws of the United Arab Emirates. All disputes shall be submitted to the exclusive jurisdiction of the Dubai Courts.`,
  },
  {
    id: "communication",
    title: "11. Communication & Policy Acceptance",
    body: `By engaging with Cogent Solutions, you acknowledge that you have read, understood, and accepted our Privacy Policy, Terms, and this Agreement, and consent to be contacted with event-related and marketing information.`,
  },
];


export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState<string>("acceptance");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // detect which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    Object.values(sectionRefs.current).forEach((sec) => {
      if (sec) observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    window.scrollTo({
      top: el.offsetTop - 100,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-white py-4">
      <div className="max-w-7xl mx-auto px-6">

        {/* PAGE HEADER */}
        <h1 className="text-4xl sm:text-5xl font-semibold text-neutral-900 mb-4">
          Privacy Policy & General Terms
        </h1>

        <p className="text-neutral-500 max-w-3xl mb-16 leading-relaxed">
          These policies outline how Cogent Solutions™ manages personal data, event participation,
          communication, legal responsibilities, and general terms for all delegates, sponsors,
          speakers, and partners.
        </p>

        {/* FIXED GRID — RIGHT COLUMN NOW STRETCHES NATURALLY */}
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-16 mx-auto">

          {/* LEFT SIDEBAR */}
          <div className="sticky top-28 hidden md:block self-start">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">On this page</h3>

            <ul className="space-y-3">
              {sections.map((sec) => (
                <li key={sec.id}>
                  <button
                    onClick={() => scrollToSection(sec.id)}
                    className={`
                      text-sm transition-all text-left
                      ${
                        activeSection === sec.id
                          ? "text-[#1D309D] font-semibold"
                          : "text-neutral-500 hover:text-neutral-800"
                      }
                    `}
                  >
                    {sec.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* MAIN CONTENT — NOW FULLY STRETCHED */}
          <div className="space-y-16 w-full">
            {sections.map((sec, idx) => (
              <motion.div
                key={sec.id}
                id={sec.id}
                ref={(el) => {
                  sectionRefs.current[sec.id] = el;
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.04 }}
              >
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                  {sec.title}
                </h2>

                <p className="text-neutral-600 leading-relaxed text-[16px]">
                  {sec.body}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
