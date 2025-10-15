"use client";

import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Search,
    Mail,
    PhoneCall,
    ChevronRight,
    CheckCircle2,
    ExternalLink,
    FileText,
    ScrollText,
    Home,
} from "lucide-react";

/**
 * Single‑Page Help Center (Privacy Policy + Help FAQs)
 * Theme: White with Dark Blue accents
 * Drop into: app/help-center/page.tsx (or any route) — no extra files needed.
 */

// --- Replace these with real copy from your refs when ready ---
const SECTIONS_PRIVACY = [
    {
        id: "overview",
        title: "Overview",
        content: `
        <p>
            <strong><em>Privacy Policy</em> Statement for Cogent Solutions Events Management LLC</strong> & it’s Events At cseventmanagement.com, accessible from <strong><a class='underline' href='https://cogentsolutions.ae/'>https://cogentsolutions.ae/</a></strong>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Cogentsolutions.ae and Cogent Solutions Events Management LLC reserves the right to use it.
        </p><br>
        <p>
           By filling out the registration form to attend our event, you agree and consent to Cogent Solutions™ sharing your personal contact details, in accordance with GDPR guidelines, with our sponsors and partners.
        </p>
        `,
    },
    {
        id: "General",
        title: "Privacy Policies and General Terms & Conditions",
        content: `
        <ol class="list-decimal pl-6 space-y-2">
            <li>
                <strong>Acceptance of Terms</strong><br>
                By signing, registering, attending, sponsoring, or otherwise engaging with Cogent Solutions Event Management LLC ("Cogent Solutions"), you agree to be legally bound by these Terms & Conditions, our Privacy Policy, and applicable laws including UAE Federal Decree-Law No. 45 of 2021 and GDPR (EU Regulation 2016/679).
            </li>
            <li>
                <strong>Data Privacy & Consent</strong><br>
                You consent to the collection, use, and international transfer of your personal data (including email, contact, billing, and professional details) for the purposes of event management, business communication, and marketing. Withdrawal of consent must be provided in writing and may be subject to legal or contractual obligations.
            </li>
            <li>
                <strong>Payment Terms</strong><br>
                All fees are due as invoiced and must be settled within the stated timeframe (typically within 2 business days unless otherwise specified). Cogent reserves the right to deny event access for non-payment. VAT is applicable as per UAE law and must be borne by the client.
            </li>
            <li>
                <strong>Cancellation Policy</strong><br>
                <ul class="list-disc pl-6 space-y-2">
                    <li>No cancellations or refunds are permitted after confirmation.</li>
                    <li>If Cogent postpones or reschedules an event, you may choose to attend on the new date or request a credit voucher valid for one year.</li>
                </ul>
            </li>
            <li>
                <strong>Event Modifications</strong><br>
                Cogent reserves the right to alter the event format (virtual, hybrid, or in-person), agenda, speakers, or venue at its discretion for operational or legal reasons. Changes will be communicated in advance where feasible.
            </li>
            <li>
                <strong>Use of Likeness & Materials</strong><br>
                Attendees and sponsors grant Cogent the right to use photographs, video, and audio taken at events for promotional purposes. Materials submitted for event use may be published unless explicitly marked “Confidential.”
            </li>
            <li>
                <strong>Intellectual Property</strong><br>
                All content provided by Cogent or event participants remains the intellectual property of the respective owner. Unauthorized recording, reproduction, or distribution is strictly prohibited without prior written consent.
            </li>
            <li>
                <strong>Limitation of Liability</strong><br>
                Cogent shall not be held liable for indirect or consequential losses, including travel or accommodation costs. Total liability, if any, shall not exceed the total fees paid by the client.
            </li>
            <li>
                <strong>Indemnification</strong><br>
                Clients, sponsors, and delegates agree to indemnify and hold harmless Cogent from any claims, damages, or legal actions arising out of their participation, data misuse, or contractual breach.
            </li>
            <li>
                <strong>Jurisdiction</strong><br>
                This agreement shall be governed by and construed in accordance with the laws of the United Arab Emirates. All disputes shall be submitted to the exclusive jurisdiction of the Dubai Courts.
            </li>
            <li>
                <strong>Communication & Policy Acceptance</strong><br>
                By engaging with Cogent Solutions, you acknowledge that you have read, understood, and accepted our Privacy Policy, Terms, and this Agreement, and consent to be contacted with event-related and marketing information.
            </li>
        </ol>
        `
    },
    { 
        id: "Conditions", 
        title: "Terms and Conditions", 
        content: `
        <p>Payment terms of Cogent Solutions Event Management LLC: Payment of the agreed amount to be made within 5 working days. The payment terms of Cogent Solutions Event Management LLC cannot be changed after agreeing or signing a legal contract and must be honored. Under no circumstances will the sponsor be allowed to an event without the full payments having cleared through Cogent Solutions Event Management’s LLC bank account as per agreed payment terms.</p><br>

        <ul class="list-disc pl-6 space-y-2">
            <li>
                <strong>Client Information Due Date:</strong><br>
                Please ensure to provide all the needed information about your company, and speaker(s), if applicable, brand identity and other applicable material no later than 10 days of your official confirmation, to ensure receiving maximum benefits from your participation.
            </li>
            <li>
                <strong>Cancellation Policy:</strong><br>
                <p class="mb-2">The client cannot cancel this contract under any circumstances. There will be no refunds given to the customer if they cancel this contract for any internal or financial reasons or conflicts of schedule, lack of speaker availability, etc. It is the full responsibility of the client to ensure their full ability to execute and fulfill their obligations set in the agreed contract. If the client chooses to cancel their participation at the event due to any reasons, they are still required to make the full payment of the contract price.</p>

                <p class="mb-2">If Cogent Solutions Event Management cancel the event, client will get a full refund within 20 days. If Cogent Solutions Event Management change the dates of the event the sponsor can choose to: 1) Participate at the event in its new dates or, 2) Request for a credit voucher for the amount paid by the client.</p>

                <p class="mb-2">Client agrees that Cogent Solutions Event Management reserves the right to make changes to the event as seen and deemed necessary for the successful execution of the event after discussion with the client. Client also acknowledges that speakers, sessions, and other elements of the event can and may change in months leading up to the event as per any event proceedings.</p>
            </li>

            <li>
                <strong>Miscellaneous:</strong><br>
                <p class="mb-2">Client agrees that all its material shared with Cogent Solutions Event Management LLC can be published on the event marketing collateral prior, during and after the event for promotional purposes. Should the client wish for any of its shared material to be treated as confidential, this needs to be clearly indicated to Cogent Solutions Event Management LLC in writing.</p>
                <p class="mb-2">Client agrees that all the material, documents and data shared by Cogent Solutions Event Management LLC is strictly confidential material, and cannot be sold, duplicated, replicated, or shared by the sponsor with any third party for any purposes. In case of any dispute(s), the matters will be referred to Dubai Courts and will be dealt with in accordance with the UAE laws.</p>
            </li>
        </ul>` 
    },
    { 
        id: "payment", 
        title: "Payment Policy", 
        content: `
        <p>Payment of the agreed amount to be made within 5 working days. The payment terms of Cogent Solutions Event Management LLC cannot be changed after agreeing or signing a legal contract and must be honored. Under no circumstances will the sponsor be allowed to an event without the full payments having cleared through Cogent Solutions Event Management’s LLC bank account as per agreed payment terms.</p>` 
    },
];

const SECTIONS_HELP = [
    { 
        id: "hc-what-is", 
        title: "What is Event Management?", 
        content: `
        <p>Event management refers to the comprehensive process of planning, organizing, and executing a wide range of professional events. This multifaceted discipline involves meticulous coordination of various elements to ensure the smooth and successful execution of each event. Event management tasks include selecting suitable venues, managing logistics, creating budgets, implementing marketing strategies, coordinating with vendors, and overseeing on-site operations.</p>` 
    },
    { 
        id: "hc-which-type", 
        title: "Which types of events does Cogent Solutions specialize in?", 
        content: `
        <p>Cogent Solutions Event Management's expertise lies in the organization of professional, B2B events such as conferences, exhibitions and boardrooms. We dedicate ourselves to promoting new discussions covering industry insights and emerging trends, facilitating networking opportunities and creating valuable connections among attendees, as we recognize the importance of bringing together individuals and fostering meaningful collaborations. Cogent Solutions Event Management aims to create remarkable experiences through our events, leaving a lasting impression and providing a platform for networking and professional growth.</p>` 
    },
    { 
        id: "hc-what-type", 
        title: "What types of event platforms can Cogent Solutions provide?", 
        content: `
        <p>Cogent Solutions has experience in a wide range of customized events across physical, virtual, and hybrid platforms. We understand that each event has unique specifications, and our team is dedicated to delivering a seamless experience across all platforms. By leveraging our expertise and versatility, we strive to create events that precisely match your vision, and we are committed to ensuring that we can accommodate all your needed preferences and requirements.</p>` 
    },
    { 
        id: "hc-interested", 
        title: "I'm interested in sponsoring or exhibiting at one of Cogent Solutions' events, how can I start?", 
        content: `<p>If you're interested in becoming one of Cogent Solutions' distinguished sponsors or exhibitors, you can contact our team to learn more at: <a class='underline' href='mailto:partnerships@csevents.ae'>partnerships@csevents.ae</a></p>` 
    },
];

function useActiveSection(ids: string[]) {
    const [active, setActive] = useState(ids[0] ?? "");
    useEffect(() => {
        const observers: IntersectionObserver[] = [];
        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                (entries) => {
                    entries.forEach((e) => {
                        if (e.isIntersecting) setActive(id);
                    });
                },
                { rootMargin: "-40% 0px -55% 0px", threshold: [0, 1] }
            );
            obs.observe(el);
            observers.push(obs);
        });
        return () => observers.forEach((o) => o.disconnect());
    }, [ids.join("|")]);
    return active;
}

export default function HelpCenterSinglePage() {
    const [tab, setTab] = useState<"privacy" | "help">("privacy");
    const [q, setQ] = useState("");

    const baseSections = tab === "privacy" ? SECTIONS_PRIVACY : SECTIONS_HELP;
    const sections = useMemo(() => {
        if (!q.trim()) return baseSections;
        const t = q.toLowerCase();
        return baseSections.filter((s) => (s.title + s.content).toLowerCase().includes(t));
    }, [q, baseSections]);

    const ids = sections.map((s) => s.id);
    const active = useActiveSection(ids);

    return (
        <div className="min-h-screen bg-white text-slate-800">
            {/* Breadcrumb */}
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-6">
                <nav className="text-sm text-slate-500 flex items-center gap-2" aria-label="Breadcrumb">
                    <Home className="h-4 w-4 text-darkblue-600" />
                    <span className="opacity-60">/</span>
                    <span className="font-medium text-darkblue-700">Help Center</span>
                </nav>
            </div>

            {/* Header + Tabs */}
            <header className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative overflow-hidden rounded-3xl p-6 sm:p-8 shadow-lg bg-darkblue-900 text-white"
                >
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 text-xs">
                                <ShieldCheck className="h-4 w-4" /> Help Center
                            </div>
                            <h1 className="mt-3 text-3xl sm:text-4xl font-semibold">Support & Privacy</h1>
                            <p className="mt-2 max-w-2xl text-sm opacity-90">All the essentials on one page: FAQs and the Privacy Policy, with search and in‑page navigation.</p>

                            {/* Tabs (mobile/desktop) */}
                            <div className="mt-4 inline-flex rounded-xl bg-white/10 p-1">
                                <button
                                    onClick={() => setTab("privacy")}
                                    className={`px-4 py-2 text-sm rounded-lg transition ${tab === "privacy" ? "bg-white text-darkblue-900" : "text-white/80 hover:bg-white/10"}`}
                                >
                                    Privacy Policy
                                </button>
                                <button
                                    onClick={() => setTab("help")}
                                    className={`px-4 py-2 text-sm rounded-lg transition ${tab === "help" ? "bg-white text-darkblue-900" : "text-white/80 hover:bg-white/10"}`}
                                >
                                    FAQs
                                </button>
                            </div>
                        </div>

                        {/* Search */}
                        <div className="md:w-[360px] w-full">
                            <label className="relative block">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                                <input
                                    value={q}
                                    onChange={(e) => setQ(e.target.value)}
                                    placeholder={`Search ${tab === "privacy" ? "policy" : "help"}...`}
                                    className="w-full rounded-xl border border-darkblue-300 bg-white pl-11 pr-4 py-3 text-slate-800 outline-none focus:ring-4 ring-darkblue-300"
                                />
                            </label>
                            <p className="mt-2 text-xs text-white/70">Tip: try “refund”, “agenda”, or “deletion”.</p>
                        </div>
                    </div>
                </motion.div>
            </header>

            {/* Main two‑column layout (TOC + content) */}
            <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16 grid grid-cols-1 lg:grid-cols-[240px,1fr] gap-6">
                {/* TOC */}
                <aside className="hidden lg:block sticky top-6 self-start">
                    <div className="rounded-2xl border bg-white shadow p-4">
                        <p className="px-2 pb-2 text-xs font-semibold text-darkblue-700 uppercase tracking-wide">On this page</p>
                        <ul className="space-y-1">
                            {sections.map((s) => (
                                <li key={s.id}>
                                    <a
                                        href={`#${s.id}`}
                                        className={`group flex items-center gap-2 rounded-lg px-2 py-2 text-sm transition ${active === s.id ? "bg-darkblue-100 text-darkblue-800 font-semibold" : "hover:bg-slate-100"}`}
                                    >
                                        <ChevronRight className={`h-4 w-4 transition ${active === s.id ? "text-darkblue-600" : "text-slate-400"}`} />
                                        {s.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* Content */}
                <section className="space-y-6">
                    {sections.map((s, idx) => (
                        <motion.article
                            id={s.id}
                            key={s.id}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10% 0px" }}
                            transition={{ duration: 0.45, ease: "easeOut", delay: idx * 0.02 }}
                            className="rounded-2xl border border-slate-200 bg-white shadow p-6"
                        >
                            <h2 className="text-xl font-semibold text-darkblue-800 mb-2">{s.title}</h2>
                            <div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: s.content }} />
                        </motion.article>
                    ))}

                    {/* CTA */}
                    <div className="rounded-2xl border border-slate-200 bg-darkblue-50 p-6">
                        <h3 className="text-lg font-semibold text-darkblue-800 mb-1">Still need help?</h3>
                        <p className="text-slate-700 mb-3">Contact our team for privacy requests or general support.</p>
                        <div className="flex flex-wrap gap-3 text-sm">
                            <a href="mailto:info@cogentsolutions.ae" className="inline-flex items-center gap-2 bg-darkblue-700 text-white rounded-full px-3 py-2 hover:bg-darkblue-600"><Mail className="h-4 w-4" /> info@cogentsolutions.ae</a>
                            <a href="tel:+971000000" className="inline-flex items-center gap-2 bg-white border border-darkblue-700 text-darkblue-700 rounded-full px-3 py-2 hover:bg-darkblue-100"><PhoneCall className="h-4 w-4" /> Call Support</a>
                            <a href="/contact-us" className="inline-flex items-center gap-2 bg-darkblue-600 text-white rounded-full px-3 py-2 hover:bg-darkblue-500"><ScrollText className="h-4 w-4" /> Contact Form</a>
                        </div>
                    </div>
                </section>
            </main>

            {/* Mobile sticky quick‑nav chips for current tab */}
            <div className="lg:hidden sticky bottom-4 inset-x-0 px-4">
                <div className="mx-auto max-w-2xl rounded-2xl border bg-white shadow-lg p-3">
                    <div className="flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
                        {sections.map((s) => (
                            <a key={s.id} href={`#${s.id}`} className="text-xs shrink-0 px-3 py-1.5 rounded-full border hover:bg-slate-50">
                                {s.title}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx global>{`
        :root {
          --darkblue-50: #f0f5ff;
          --darkblue-100: #d6e4ff;
          --darkblue-300: #84a9ff;
          --darkblue-600: #3366ff;
          --darkblue-700: #254eda;
          --darkblue-800: #1939b7;
          --darkblue-900: #102693;
        }
        .text-darkblue-600 { color: var(--darkblue-600); }
        .text-darkblue-700 { color: var(--darkblue-700); }
        .text-darkblue-800 { color: var(--darkblue-800); }
        .bg-darkblue-50 { background-color: var(--darkblue-50); }
        .bg-darkblue-100 { background-color: var(--darkblue-100); }
        .bg-darkblue-600 { background-color: var(--darkblue-600); }
        .bg-darkblue-700 { background-color: var(--darkblue-700); }
        .bg-darkblue-900 { background-color: var(--darkblue-900); }
        .border-darkblue-300 { border-color: var(--darkblue-300); }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
        </div>
    );
}
