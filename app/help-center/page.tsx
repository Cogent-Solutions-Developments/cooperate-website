// app/help-center/page.tsx
"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import NavBar from "@/components/layout/NavBar";
import BreadcrumbVisual from "@/components/navigation/BreadcrumbVisual";
import {
  ShieldCheck,
  Search,
  Mail,
  ChevronRight,
  ScrollText,
  Info,
} from "lucide-react";

/* ================================
   Content (edit freely)
================================== */
const SECTIONS_PRIVACY = [
  {
    id: "overview",
    title: "Privacy Policy Overview",
    content: `
      <p><strong>Cogent Solutions™</strong> respects your privacy. This policy explains what we collect, why we collect it, and how we use and protect your data across our conference, boardroom, and media platforms.</p>
      <p>By registering for or engaging with our events, you consent to this policy and our Terms, including sharing limited business contact details with event partners in line with GDPR and applicable UAE regulations.</p>
    `,
  },
  {
    id: "data-we-collect",
    title: "Data We Collect",
    content: `
      <ul class="list-disc pl-6 space-y-1">
        <li>Identity & contact (name, email, phone, job title, company)</li>
        <li>Event preferences, session selections, dietary/access needs (optional)</li>
        <li>Payment and invoicing details for paid services</li>
        <li>Usage data: site/app interactions, device/browser information</li>
        <li>Media captured at events (photos/video)</li>
      </ul>
    `,
  },
  {
    id: "how-we-use",
    title: "How We Use Your Data",
    content: `
      <ul class="list-disc pl-6 space-y-1">
        <li>Event operations (badging, communications, logistics, certificates)</li>
        <li>Partner networking and lead delivery (only business-relevant fields)</li>
        <li>Customer support and service improvement</li>
        <li>Legal, compliance, and security</li>
      </ul>
      <p class="mt-2 text-sm">We do not sell personal data. Processing is based on consent, contract, or legitimate interest.</p>
    `,
  },
  {
    id: "your-rights",
    title: "Your Rights",
    content: `
      <p>You may request access, correction, deletion, or restriction. You can also withdraw consent where processing is consent-based.</p>
      <p class="mt-1 text-sm">To exercise rights, email <a class="underline" href="mailto:info@cogentsolutions.ae">info@cogentsolutions.ae</a>.</p>
    `,
  },
  {
    id: "security",
    title: "Security & Retention",
    content: `
      <p>We apply administrative, technical, and physical safeguards. Data retention aligns with legal, tax, and operational requirements. Media captured at events may be retained for archival and promotional purposes.</p>
    `,
  },
  {
    id: "terms",
    title: "Terms & Conditions (Summary)",
    content: `
      <ul class="list-disc pl-6 space-y-1">
        <li>Invoices payable within stated terms; access may be withheld for non-payment.</li>
        <li>No cancellations/refunds after confirmation; postponements allow date change or credit.</li>
        <li>Agenda/speakers/format may change; IP and recording restrictions apply.</li>
        <li>Jurisdiction: Dubai Courts, UAE law.</li>
      </ul>
    `,
  },
];

const SECTIONS_HELP = [
  {
    id: "what-is",
    title: "What is Event Management?",
    content: `
      <p>It’s the end-to-end planning and execution of professional events—venue, agenda, speakers, logistics, registration, production, and post-event reporting.</p>
    `,
  },
  {
    id: "specialization",
    title: "What does Cogent Solutions specialize in?",
    content: `
      <p>High-grade B2B platforms: conferences, invitation-only boardrooms, and curated media—focused on measurable outcomes and senior stakeholder engagement.</p>
    `,
  },
  {
    id: "platforms",
    title: "Platforms We Support",
    content: `
      <ul class="list-disc pl-6 space-y-1">
        <li>Physical conferences and closed-door boardrooms</li>
        <li>Hybrid and virtual activations</li>
        <li>CS Podcasts and content partnerships</li>
      </ul>
    `,
  },
  {
    id: "sponsor",
    title: "How do I sponsor or exhibit?",
    content: `
      <p>Email <a class="underline" href="mailto:partnerships@cogentsolutions.ae">partnerships@cogentsolutions.ae</a> with your objectives (audience, geography, outcomes). We’ll recommend a fit—e.g., main conference, boardroom series, or content package.</p>
    `,
  },
  {
    id: "delegate",
    title: "Delegate & Registration Support",
    content: `
      <p>For delegate queries, logistics, or certificates, write to <a class="underline" href="mailto:info@cogentsolutions.ae">info@cogentsolutions.ae</a> with your event name and details.</p>
    `,
  },
];

/* ================================
   Helpers
================================== */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => e.isIntersecting && setActive(id));
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

/* ================================
   Page
================================== */
export default function HelpCenterPage() {
  const [tab, setTab] = useState<"privacy" | "help">("privacy");
  const [q, setQ] = useState("");

  const base = tab === "privacy" ? SECTIONS_PRIVACY : SECTIONS_HELP;
  const sections = useMemo(() => {
    if (!q.trim()) return base;
    const t = q.toLowerCase();
    return base.filter((s) => (s.title + s.content).toLowerCase().includes(t));
  }, [q, base]);

  const ids = sections.map((s) => s.id);
  const active = useActiveSection(ids);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* NavBar (site-wide) */}
      <NavBar />
      <div className="h-20 md:h-[84px]" />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <BreadcrumbVisual
          auto
          rootLabel="Home"
          segmentLabels={{ "help-center": "Help Center" }}
        />
      </div>

      {/* Hero – dark blue banner with image + gradient (matches Contact/Explore) */}
      <header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-[#0A1E75]/15 bg-[#0A1E75] text-white shadow-lg"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/bg1.jpg"
              alt="Help Center"
              fill
              className="object-cover opacity-80"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1E75]/85 via-[#0A1E75]/65 to-transparent" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1.15fr,0.85fr] items-center gap-6 px-6 py-10 sm:px-10 lg:px-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
                <ShieldCheck className="h-4 w-4" />
                Support & Privacy
              </div>
              <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
                Help Center
              </h1>
              <p className="mt-2 max-w-2xl text-sm sm:text-base text-white/90">
                All the essentials on one page: FAQs and the Privacy Policy,
                with fast search and on-page navigation.
              </p>

              {/* Tabs */}
              <div className="mt-5 inline-flex rounded-xl bg-white/10 p-1">
                <button
                  onClick={() => setTab("privacy")}
                  className={`px-4 py-2 text-sm rounded-lg transition ${
                    tab === "privacy"
                      ? "bg-white text-[#0A1E75]"
                      : "text-white/85 hover:bg-white/10"
                  }`}
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => setTab("help")}
                  className={`px-4 py-2 text-sm rounded-lg transition ${
                    tab === "help"
                      ? "bg-white text-[#0A1E75]"
                      : "text-white/85 hover:bg-white/10"
                  }`}
                >
                  FAQs
                </button>
              </div>
            </div>

            {/* Search */}
            <div className="md:w-[380px] w-full">
              <label className="relative block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder={`Search ${tab === "privacy" ? "policy" : "help"}…`}
                  className="w-full rounded-xl border border-white/25 bg-white/10 pl-11 pr-4 py-3 text-white placeholder:text-white/70 outline-none focus:ring-4 ring-white/30"
                />
              </label>
              <p className="mt-2 text-xs text-white/75">
                Tip: try “refund”, “agenda”, or “deletion”.
              </p>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Main two-column layout */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 grid grid-cols-1 lg:grid-cols-[240px,1fr] gap-6">
        {/* TOC (sticky) */}
        <aside className="hidden lg:block sticky top-24 self-start">
          <div className="rounded-2xl border bg-white shadow p-4">
            <p className="px-2 pb-2 text-xs font-semibold text-[#254EDA] uppercase tracking-wide">
              On this page
            </p>
            <ul className="space-y-1">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={`group flex items-center gap-2 rounded-lg px-2 py-2 text-sm transition ${
                      active === s.id
                        ? "bg-[var(--darkblue-100)] text-[var(--darkblue-800)] font-semibold"
                        : "hover:bg-slate-100"
                    }`}
                  >
                    <ChevronRight
                      className={`h-4 w-4 transition ${
                        active === s.id
                          ? "text-[var(--darkblue-600)]"
                          : "text-slate-400"
                      }`}
                    />
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
              <h2 className="text-xl font-semibold text-[var(--darkblue-800)] mb-2">
                {s.title}
              </h2>
              <div
                className="prose prose-slate max-w-none"
                dangerouslySetInnerHTML={{ __html: s.content }}
              />
            </motion.article>
          ))}

          {/* CTA card */}
          <div className="rounded-2xl border border-slate-200 bg-[var(--darkblue-50)] p-6">
            <h3 className="text-lg font-semibold text-[var(--darkblue-800)] mb-1">
              Still need help?
            </h3>
            <p className="text-slate-700 mb-3">
              Contact our team for privacy requests or general support.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href="mailto:info@cogentsolutions.ae"
                className="inline-flex items-center gap-2 bg-[var(--darkblue-700)] text-white rounded-full px-3 py-2 hover:bg-[var(--darkblue-600)]"
              >
                <Mail className="h-4 w-4" /> info@cogentsolutions.ae
              </a>
              <a
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-[var(--darkblue-600)] text-white rounded-full px-3 py-2 hover:bg-[var(--darkblue-500)]"
              >
                <ScrollText className="h-4 w-4" /> Contact Form
              </a>
              <span className="inline-flex items-center gap-2 text-slate-600 px-3 py-2">
                <Info className="h-4 w-4" /> Response within 1 - 2 business days
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile quick-nav chips */}
      <div className="lg:hidden sticky bottom-4 inset-x-0 px-4">
        <div className="mx-auto max-w-2xl rounded-2xl border bg-white shadow-lg p-3">
          <div className="flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-xs shrink-0 px-3 py-1.5 rounded-full border hover:bg-slate-50"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Theme tokens (shared with other pages) */}
      <style jsx global>{`
        :root {
          --darkblue-50: #f0f5ff;
          --darkblue-100: #d6e4ff;
          --darkblue-300: #84a9ff;
          --darkblue-400: #6691ff;
          --darkblue-500: #4778ff;
          --darkblue-600: #3366ff;
          --darkblue-700: #254eda;
          --darkblue-800: #1939b7;
          --darkblue-900: #102693;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
