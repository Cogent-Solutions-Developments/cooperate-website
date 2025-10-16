"use client";

import { motion } from "framer-motion";
import BreadcrumbVisual from "../../components/navigation/BreadcrumbVisual";
import { ArrowUpRight, CheckCircle2, Sparkles, Building2, Users, Network } from "lucide-react";
import Image from "next/image";
import React from "react";

/**
 * Services Page (image-only, modern, stylish)
 * - Uses images for service cards (no videos).
 * - Relative import for BreadcrumbVisual to avoid alias issues.
 * - Dark-blue token system matches other pages.
 */

/* --------------------------------- types --------------------------------- */

type CoreService = {
  key: string;
  title: string;
  blurb: string;
  detail: string;
  imageSrc: string;
  cta: { label: string; href: string };
  badge: string;
};

/* ---------------------------- content (editable) ---------------------------- */
const CORE_SERVICES: Readonly<CoreService[]> = [
  {
    key: "conf-exhibitions",
    title: "Conferences & Exhibitions",
    blurb:
      "As a renowned industry leader, we offer comprehensive services encompassing the conceptualization, planning, and onsite execution of B2B conferences and exhibitions. Leveraging our seasoned team's expertise, we craft impactful events that foster business growth and position your value offerings to the right target market.",
    detail:
      "Through close collaboration with clients, we align on objectives and audiences, then develop a strategic roadmap, curate compelling content, secure premium venues and vendors, and coordinate with authorities, speakers, sponsors, and exhibitors — ensuring a flawlessly orchestrated experience for all participants.",
    imageSrc: "/images/services/conferences.jpg",
    cta: { label: "Discuss a Conference", href: "/contact-us" },
    badge: "Flagship",
  },
  {
    key: "executive-boardrooms",
    title: "Executive Boardrooms",
    blurb:
      "Our exclusive private executive boardroom approach connects companies with precisely matched decision‑makers in a luxurious 5‑star environment.",
    detail:
      "We handpick attendees using BANT criteria (budget, authority, need, timing) for relevance and intent. We commit to delivering the desired audience in your preferred geography and back it with a contractual guarantee.",
    imageSrc: "/images/services/conferences.jpg",
    cta: { label: "Plan a Boardroom", href: "/contact-us" },
    badge: "Private",
  },
  {
    key: "experiential-events",
    title: "Experiential Events",
    blurb:
      "We combine cutting‑edge technology, captivating storytelling, and meticulous production to deliver immersive experiences that leave a lasting impression.",
    detail:
      "From interactive installations and themed environments to gamification and live performances — every concept is tailored to your brand, goals, and audience to transform ordinary moments into extraordinary ones.",
    imageSrc: "/images/services/conferences.jpg",
    cta: { label: "Design an Experience", href: "/contact-us" },
    badge: "Immersive",
  },
];

const FUTURE_SERVICES = [
  { icon: <Network className="h-5 w-5" />, title: "Delegate Acquisition & VIP Hosting", note: "High‑intent attendee curation, VIP concierge, white‑glove outreach." },
  { icon: <Users className="h-5 w-5" />, title: "Speaker & Content Studio", note: "Topic research, agenda craft, moderators, and thought‑leadership playbooks." },
  { icon: <Building2 className="h-5 w-5" />, title: "Venue & Vendor Management", note: "A‑to‑Z contracting, floorplans, builds, staging, and production oversight." },
  { icon: <Sparkles className="h-5 w-5" />, title: "Branding & Creative", note: "Identity systems, stage visuals, print/digital collateral, motion." },
] as const;

/* ----------------------------- media renderer ----------------------------- */
function ServiceMedia({ item }: { item: CoreService }) {
  const src = item.imageSrc;
  return (
    <div className="relative h-48 w-full overflow-hidden">
      <Image src={src} alt={item.title} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
    </div>
  );
}

/* ---------------------------------- page ---------------------------------- */
export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
        <BreadcrumbVisual auto rootLabel="Home" segmentLabels={{ services: "Services" }} />
      </div>

      {/* header strip (no hero) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-3xl text-white p-6 sm:p-8 shadow-lg"
          style={{ background: "linear-gradient(135deg, var(--darkblue-900), var(--darkblue-700))" }}
        >
          <div className="flex items-center gap-2 text-xs sm:text-[13px] font-semibold bg-white/15 rounded-full px-3 py-1 w-fit">
            <Sparkles className="h-4 w-4" /> Our Services
          </div>
          <h1 className="mt-3 text-[clamp(24px,3.4vw,40px)] font-bold leading-tight">
            B2B Conferences, Executive Boardrooms & Experiential Events
          </h1>
          <p className="mt-2 max-w-3xl text-sm/relaxed text-white/90">
            Strategy, content, production, and audience — delivered end‑to‑end with precision and creativity.
          </p>
        </motion.div>
      </section>

      {/* core services (image per card) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CORE_SERVICES.map((s, idx) => (
            <motion.article
              key={s.key}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <ServiceMedia item={s} />

              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-darkblue-700 ring-1 ring-darkblue-300">
                <CheckCircle2 className="h-4 w-4" /> {s.badge}
              </div>

              <div className="p-5 space-y-2">
                <h3 className="text-lg font-bold text-neutral-900">{s.title}</h3>
                <p className="text-sm text-neutral-700">{s.blurb}</p>
                <p className="text-sm text-neutral-600">{s.detail}</p>

                <a
                  href={s.cta.href}
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-darkblue-700 hover:text-darkblue-900"
                >
                  {s.cta.label}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              {/* hover ribbon */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-darkblue-600 via-darkblue-700 to-darkblue-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </section>

      {/* future services grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">More ways we help (future‑ready)</h2>
          <span className="text-xs font-semibold text-darkblue-700 bg-darkblue-50 ring-1 ring-darkblue-300 rounded-full px-3 py-1">
            Add/edit in code — no design changes needed
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FUTURE_SERVICES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-darkblue-50 px-2.5 py-1 text-[11px] font-semibold text-darkblue-800 ring-1 ring-darkblue-300">
                {f.icon}
                <span>New Service</span>
              </div>
              <h3 className="mt-2 text-[15px] font-semibold text-neutral-900">{f.title}</h3>
              <p className="mt-1 text-[13px] text-neutral-600">{f.note}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="rounded-3xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white p-5 sm:p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900">Ready to build your next event?</h3>
              <p className="text-sm text-neutral-600">Tell us your objective and ideal audience — we’ll propose the right format and plan.</p>
            </div>
            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-xl bg-darkblue-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-darkblue-600"
            >
              Talk to our team <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* shared dark‑blue tokens */}
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
        .ring-darkblue-300 { --tw-ring-color: var(--darkblue-300); }
      `}</style>
    </div>
  );
}
