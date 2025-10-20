// app/contact-us/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "@/components/layout/NavBar";
import BreadcrumbVisual from "@/components/navigation/BreadcrumbVisual";
import {
  PhoneCall,
  Mail,
  MapPin,
  Copy,
  Check,
  Globe,
  Clock,
  Shield,
  SendHorizonal,
} from "lucide-react";

/* ================================
   Small utilities
================================== */
const cx = (...a: (string | false | null | undefined)[]) =>
  a.filter(Boolean).join(" ");

function useViewportVH() {
  useEffect(() => {
    const set = () =>
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    set();
    window.addEventListener("resize", set);
    return () => window.removeEventListener("resize", set);
  }, []);
}

/* Tilt (subtle) for the illustration block */
function Tilt({
  children,
  max = 8,
  className,
}: {
  children: React.ReactNode;
  max?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(900px) rotateX(${
      (py - 0.5) * -max
    }deg) rotateY(${(px - 0.5) * max}deg)`;
    (el.style as any).setProperty("--glx", `${px * 100}%`);
    (el.style as any).setProperty("--gly", `${py * 100}%`);
  };
  const reset = () => {
    const el = ref.current!;
    el.style.transform = "";
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={cx(
        "will-change-transform relative after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-[radial-gradient(160px_160px_at_var(--glx,50%)_var(--gly,50%),rgba(255,255,255,.12),transparent_55%)]",
        className
      )}
    >
      {children}
    </div>
  );
}

/* Toast */
function Toast({ show, text }: { show: boolean; text: string }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed bottom-4 left-1/2 z-[90] -translate-x-1/2 rounded-xl bg-neutral-900/90 px-4 py-2 text-sm text-white shadow-lg"
        >
          {text}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ================================
   Page
================================== */
export default function ContactUsPage() {
  useViewportVH();

  const offices = [
    {
      key: "dxb",
      label: "Dubai HQ",
      lines: [
        "Office 209, The Metropolis Tower",
        "Business Bay, Dubai, United Arab Emirates",
      ],
      map: "https://www.google.com/maps?q=The%20Metropolis%20Tower%20Business%20Bay%20Dubai&output=embed",
    },
    {
      key: "apac",
      label: "APAC HQ",
      lines: ["2nd Floor, Green Lanka Tower", "Colombo 02, Sri Lanka"],
      map: "https://www.google.com/maps?q=Green%20Lanka%20Tower%20Colombo%2002&output=embed",
    },
    { key: "ksa", label: "Saudi Arabia", lines: ["Riyadh - Coming Soon"], map: "" },
  ] as const;

  const [activeOffice, setActiveOffice] =
    useState<(typeof offices)[number]["key"]>("dxb");
  const [copied, setCopied] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; text: string }>({
    show: false,
    text: "",
  });

  const INPUT =
    "w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 ring-darkblue-300";

  const copy = (val: string, id: string) =>
    navigator.clipboard.writeText(val).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(null), 1100);
    });

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const data = new FormData(e.currentTarget);
    try {
      const r = await fetch("/api/contact", { method: "POST", body: data });
      if (!r.ok) throw new Error();
      setToast({ show: true, text: "Thanks! We’ll get back to you shortly." });
      (e.currentTarget as HTMLFormElement).reset();
    } catch {
      setToast({
        show: true,
        text: "Sent locally. If email isn’t wired, call or WhatsApp us.",
      });
    } finally {
      setSending(false);
      setTimeout(() => setToast((t) => ({ ...t, show: false })), 1600);
    }
  }

  return (
    <div className="relative min-h-[calc(var(--vh,1vh)*100)] bg-white text-[color:var(--foreground)]">
      {/* Nav (aligned with other pages) */}
      <NavBar />

      {/* Top spacing under fixed navbar */}
      <div className="h-20 md:h-[84px]" />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <BreadcrumbVisual
          auto
          rootLabel="Home"
          segmentLabels={{ "contact-us": "Contact Us" }}
        />
      </div>

      {/* Hero banner aligned with Explore/Partners look */}
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
              alt="Contact banner"
              fill
              className="object-cover opacity-80"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1E75]/85 via-[#0A1E75]/65 to-transparent" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1.2fr,0.8fr] items-center gap-6 px-6 py-10 sm:px-10 lg:px-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
                <Shield className="h-4 w-4" />
                Get in Touch
              </div>
              <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
                Contact Cogent Solutions<span className="opacity-90">™</span>
              </h1>
              <p className="mt-2 max-w-2xl text-sm sm:text-base text-white/90">
                Partnerships, media, speaking, registrations, or operations—we’ll
                route your message to the right team and respond quickly.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href="tel:+97145761039"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-[#0A1E75] shadow hover:scale-[1.02] transition"
                >
                  <PhoneCall className="h-4 w-4" />
                  +971 4 576 1039
                </a>
                <a
                  href="tel:+971506435244"
                  className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs sm:text-sm font-semibold text-[#0A1E75] shadow hover:scale-[1.02] transition"
                >
                  <PhoneCall className="h-4 w-4" />
                  +971 50 643 5244
                </a>
                <a
                  href="mailto:partnerships@cogentsolutions.ae"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-2 text-xs sm:text-sm font-semibold text-white ring-2 ring-white/20 hover:bg-white/20 transition"
                >
                  <Mail className="h-4 w-4" />
                  partnerships@cogentsolutions.ae
                </a>
              </div>
            </div>

            <div className="hidden md:block">
              <Tilt className="rounded-2xl border border-white/20 p-3 bg-white/10 backdrop-blur">
                <div className="relative w-full overflow-hidden rounded-xl bg-white/10">
                  <img
                    src="/undraw/directions.svg"
                    alt="Directions"
                    className="h-44 w-full object-contain"
                    draggable={false}
                    onError={(e) => {
                      (e.currentTarget.parentElement as HTMLElement).innerHTML =
                        '<div class="h-44 w-full rounded-xl bg-gradient-to-br from-white/20 to-white/5"></div>';
                    }}
                  />
                </div>
              </Tilt>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Main content: two columns like your other pages */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT: Office selector + address + map */}
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex flex-col rounded-3xl border border-neutral-200 bg-white p-5 sm:p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-full bg-darkblue-50 px-3 py-1 text-xs font-semibold text-darkblue-800 ring-1 ring-darkblue-300">
                <MapPin className="h-4 w-4 text-darkblue-700" />
                Offices
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs text-neutral-500">
                <Clock className="h-4 w-4" />
                Mon–Fri, 9:00–18:00 (GST)
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-4 flex flex-wrap gap-2">
              {offices.map((o) => (
                <button
                  key={o.key}
                  onClick={() => setActiveOffice(o.key)}
                  className={cx(
                    "rounded-full px-3 py-1 text-xs font-semibold ring-1 transition",
                    activeOffice === o.key
                      ? "bg-darkblue-700 text-white ring-darkblue-700"
                      : "bg-darkblue-50 text-darkblue-700 ring-darkblue-300 hover:bg-darkblue-100"
                  )}
                >
                  {o.label}
                </button>
              ))}
            </div>

            {/* Address + Map */}
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-neutral-200 p-4">
                <div className="flex items-center gap-2 text-neutral-900">
                  <MapPin className="h-4 w-4 text-darkblue-700" />
                  <span className="text-sm font-semibold">
                    {offices.find((o) => o.key === activeOffice)?.label}
                  </span>
                </div>
                <ul className="mt-2 space-y-1 text-xs text-neutral-600">
                  {offices
                    .find((o) => o.key === activeOffice)!
                    .lines.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                </ul>
              </div>

              <div className="overflow-hidden rounded-2xl border border-neutral-200">
                {offices.find((o) => o.key === activeOffice)?.map ? (
                  <iframe
                    src={offices.find((o) => o.key === activeOffice)!.map}
                    className="h-40 w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                ) : (
                  <div className="flex h-40 w-full items-center justify-center bg-neutral-100 text-xs text-neutral-500">
                    Map coming soon
                  </div>
                )}
              </div>
            </div>

            {/* Quick copy rows */}
            <div className="mt-3 grid grid-cols-1 gap-2 rounded-xl border border-neutral-200 bg-neutral-50 p-3">
              <CopyRow
                id="phone"
                icon={<PhoneCall className="h-4 w-4 text-darkblue-700" />}
                label="+971 4 576 1039"
                onCopy={() => copy("+971 4 576 1039", "phone")}
                copied={copied === "phone"}
              />
              <CopyRow
                id="phone2"
                icon={<PhoneCall className="h-4 w-4 text-darkblue-700" />}
                label="+971 50 643 5244"
                onCopy={() => copy("+971 50 643 5244", "phone2")}
                copied={copied === "phone2"}
              />
              <CopyRow
                id="partnerships"
                icon={<Mail className="h-4 w-4 text-darkblue-700" />}
                label="partnerships@cogentsolutions.ae"
                onCopy={() => copy("partnerships@cogentsolutions.ae", "partnerships")}
                copied={copied === "partnerships"}
              />
              <CopyRow
                id="general"
                icon={<InboxIcon className="h-4 w-4 text-darkblue-700" />}
                label="info@cogentsolutions.ae"
                onCopy={() => copy("info@cogentsolutions.ae", "general")}
                copied={copied === "general"}
              />
            </div>
          </motion.section>

          {/* RIGHT: Contact form (matches card style across site) */}
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
            className="flex flex-col rounded-3xl border border-neutral-200 bg-white p-5 sm:p-6 shadow-sm"
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-full bg-darkblue-50 px-3 py-1 text-xs font-semibold text-darkblue-800 ring-1 ring-darkblue-300">
                <SendHorizonal className="h-4 w-4 text-darkblue-700" />
                Contact form
              </div>
              <a
                href="/"
                className="inline-flex items-center gap-1 text-xs text-neutral-600 hover:text-neutral-900"
              >
                <Globe className="h-3.5 w-3.5" /> Main site
              </a>
            </div>

            <form onSubmit={submit} className="grid grid-cols-1 gap-3">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Field label="Full Name">
                  <input name="name" required placeholder="Jane Doe" className={INPUT} />
                </Field>
                <Field label="Work Email">
                  <input name="email" type="email" required placeholder="name@company.com" className={INPUT} />
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Field label="Company">
                  <input name="company" placeholder="Company Inc." className={INPUT} />
                </Field>
                <Field label="Phone">
                  <input name="phone" placeholder="+971 50 000 0000" className={INPUT} />
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Field label="Purpose">
                  <select name="purpose" defaultValue="General enquiry" className={INPUT}>
                    <option>General enquiry</option>
                    <option>Partnership / Sponsorship</option>
                    <option>Speaking / Media</option>
                    <option>Delegate Registration</option>
                    <option>Vendor / Operations</option>
                  </select>
                </Field>
                <Field label="Attachment (optional)">
                  <input
                    type="file"
                    name="file"
                    className="block w-full text-xs text-neutral-700 file:mr-3 file:rounded-lg file:border file:border-neutral-200 file:bg-white file:px-3 file:py-1.5 file:text-neutral-900 hover:file:brightness-105"
                  />
                </Field>
              </div>

              <Field label="Message">
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="How can we help?"
                  className={cx(INPUT, "min-h-[110px] resize-y")}
                />
              </Field>

              <div className="mt-1 flex items-center justify-between gap-3">
                <label className="inline-flex items-center gap-2 text-xs text-neutral-700">
                  <input type="checkbox" required className="h-4 w-4 rounded border-neutral-300" /> I agree to be
                  contacted about my enquiry.
                </label>
                <button
                  disabled={sending}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-darkblue-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-darkblue-600 transition disabled:opacity-60"
                >
                  {sending ? "Sending…" : "Send Message"}
                </button>
              </div>
            </form>
          </motion.section>
        </div>
      </main>

      <Toast show={toast.show} text={toast.text} />

      {/* Shared dark-blue theme tokens (same system used across other pages) */}
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
        .border-darkblue-300 { border-color: var(--darkblue-300); }
      `}</style>
    </div>
  );
}

/* ================================
   Subcomponents
================================== */
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold text-neutral-800">{label}</span>
      {children}
    </label>
  );
}

function CopyRow({
  id,
  icon,
  label,
  onCopy,
  copied,
}: {
  id: string;
  icon: React.ReactNode;
  label: string;
  onCopy: () => void;
  copied: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3 text-xs">
      <div className="inline-flex items-center gap-2 text-neutral-900">
        {icon}
        <span>{label}</span>
      </div>
      <button
        onClick={onCopy}
        className="inline-flex items-center gap-1 rounded-lg bg-white px-2 py-1 text-neutral-800 ring-1 ring-neutral-200 hover:bg-neutral-50 transition"
        aria-label={`Copy ${id}`}
      >
        {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

function InboxIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M3 7l9 6 9-6" strokeWidth="2" />
      <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2" />
    </svg>
  );
}
