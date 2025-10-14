"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    PhoneCall,
    Mail,
    MapPin,
    Copy,
    Check,
    Globe,
} from "lucide-react";

/* -------------------- utils -------------------- */
const cx = (...a: (string | false | null | undefined)[]) => a.filter(Boolean).join(" ");

function useViewportVH() {
    useEffect(() => {
        const set = () =>
            document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
        set();
        window.addEventListener("resize", set);
        return () => window.removeEventListener("resize", set);
    }, []);
}

/* Tilt for the illustration card */
function Tilt({
    children,
    max = 8,
    glare = true,
    className,
}: {
    children: React.ReactNode;
    max?: number;
    glare?: boolean;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const onMove = (e: React.MouseEvent) => {
        const el = ref.current!;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        el.style.transform = `perspective(900px) rotateX(${(py - 0.5) * -max}deg) rotateY(${(px - 0.5) * max}deg)`;
        if (glare) {
            (el.style as any).setProperty("--glx", `${px * 100}%`);
            (el.style as any).setProperty("--gly", `${py * 100}%`);
        }
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
                "will-change-transform",
                glare &&
                "relative after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-[radial-gradient(180px_180px_at_var(--glx,50%)_var(--gly,50%),rgba(11,27,74,.08),transparent_60%)]",
                className
            )}
        >
            {children}
        </div>
    );
}

/* toast */
function Toast({ show, text }: { show: boolean; text: string }) {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="fixed bottom-4 left-1/2 z-[60] -translate-x-1/2 rounded-xl bg-neutral-900/90 px-4 py-2 text-sm text-white shadow-lg"
                >
                    {text}
                </motion.div>
            )}
        </AnimatePresence>
    );
}

/* -------------------- page -------------------- */
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
        { key: "ksa", label: "Saudi Arabia", lines: ["Riyadh — Coming Soon"], map: "" },
    ] as const;

    const [activeOffice, setActiveOffice] = useState<(typeof offices)[number]["key"]>("dxb");
    const [copied, setCopied] = useState<string | null>(null);
    const [sending, setSending] = useState(false);
    const [toast, setToast] = useState<{ show: boolean; text: string }>({ show: false, text: "" });

    const INPUT =
        "w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0B1B4A]/30";

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
            setToast({ show: true, text: "Sent locally. If email isn’t wired, call or WhatsApp us." });
        } finally {
            setSending(false);
            setTimeout(() => setToast((t) => ({ ...t, show: false })), 1500);
        }
    }

    return (
        <div className="relative min-h-screen bg-neutral-50">
            {/* equal-height split on lg+; stack on mobile */}
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-6 px-4 py-6 sm:px-6 lg:grid-cols-2 lg:py-8">
                {/* LEFT COLUMN */}
                <motion.section
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex flex-col rounded-3xl border border-neutral-200 bg-white p-5 sm:p-6 shadow-sm"
                >
                    {/* header */}
                    <div className="space-y-3">
                        <p className="inline-flex items-center gap-2 rounded-full bg-[#0B1B4A]/5 px-3 py-1 text-xs font-semibold text-[#0B1B4A] ring-1 ring-[#0B1B4A]/10">
                            Let’s talk
                        </p>

                        {/* illustration now on LEFT to occupy the remaining space */}
                        <div className="mt-3">
                            <Tilt className="rounded-2xl border border-neutral-200 p-3">
                                <div className="relative w-full overflow-hidden rounded-xl bg-neutral-50">
                                    <img
                                        src="/undraw/directions.svg"
                                        alt="Directions"
                                        className="h-40 w-full object-contain sm:h-44"
                                        draggable={false}
                                        onError={(e) => {
                                            (e.currentTarget.parentElement as HTMLElement).innerHTML =
                                                '<div class="h-40 w-full rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100"></div>';
                                        }}
                                    />
                                </div>
                            </Tilt>
                        </div>

                        <h1 className="text-[clamp(24px,3.2vw,34px)] font-extrabold tracking-tight text-neutral-900">
                            Contact Cogent Solutions<span className="text-neutral-500">™</span>
                        </h1>

                        <p className="max-w-xl text-[13.5px] leading-relaxed text-neutral-600">
                            Partnerships, media, speaking, registrations, or operations - we’ll route your message
                            to the right team and respond quickly.
                        </p>

                        <div className="flex flex-wrap gap-2">
                            <a
                                href="tel:+97145761039"
                                className="inline-flex items-center gap-2 rounded-xl bg-[#0B1B4A] px-3 py-2 text-xs sm:text-sm font-semibold text-white shadow hover:brightness-110 transition"
                            >
                                <PhoneCall className="h-4 w-4" />
                                +971 4 576 1039
                            </a>
                            <a
                                href="tel:+97150645244"
                                className="inline-flex items-center gap-2 rounded-xl bg-[#0B1B4A] px-3 py-2 text-xs sm:text-sm font-semibold text-white shadow hover:brightness-110 transition"
                            >
                                <PhoneCall className="h-4 w-4" />
                                +971 5 064 5244
                            </a>
                            <a
                                href="mailto:partnerships@cogentsolutions.ae"
                                className="inline-flex items-center gap-2 rounded-xl bg-[#0B1B4A]/5 px-3 py-2 text-xs sm:text-sm font-semibold text-[#0B1B4A] ring-1 ring-[#0B1B4A]/10 hover:bg-[#0B1B4A]/10 transition"
                            >
                                <Mail className="h-4 w-4" />
                                partnerships@cogentsolutions.ae
                            </a>
                        </div>
                    </div>

                    {/* tabs + address + map */}
                    <div className="mt-4">
                        <div className="flex flex-wrap gap-2">
                            {offices.map((o) => (
                                <button
                                    key={o.key}
                                    onClick={() => setActiveOffice(o.key)}
                                    className={cx(
                                        "rounded-full px-3 py-1 text-xs font-semibold ring-1 transition",
                                        activeOffice === o.key
                                            ? "bg-[#0B1B4A] text-white ring-[#0B1B4A]"
                                            : "bg-[#0B1B4A]/5 text-[#0B1B4A] ring-[#0B1B4A]/10 hover:bg-[#0B1B4A]/10"
                                    )}
                                >
                                    {o.label}
                                </button>
                            ))}
                        </div>

                        <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <div className="rounded-2xl border border-neutral-200 p-4">
                                <div className="flex items-center gap-2 text-neutral-900">
                                    <MapPin className="h-4 w-4 text-[#0B1B4A]" />
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

                            {/* map slightly taller to help fill left side */}
                            <div className="overflow-hidden rounded-2xl border border-neutral-200">
                                {offices.find((o) => o.key === activeOffice)?.map ? (
                                    <iframe
                                        src={offices.find((o) => o.key === activeOffice)!.map}
                                        className="h-36 w-full sm:h-40"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                ) : (
                                    <div className="flex h-36 w-full items-center justify-center bg-neutral-100 text-xs text-neutral-500 sm:h-40">
                                        Map coming soon
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* RIGHT COLUMN (form + quick contacts only) */}
                <motion.section
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 }}
                    className="flex flex-col rounded-3xl border border-neutral-200 bg-white p-5 sm:p-6 shadow-sm"
                >
                    {/* header row */}
                    <div className="mb-3 flex items-center justify-between">
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#0B1B4A]/5 px-3 py-1 text-xs font-semibold text-[#0B1B4A] ring-1 ring-[#0B1B4A]/10">
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

                        <div className="grid grid-cols-1 gap-2 rounded-xl border border-neutral-200 bg-neutral-50 p-3">
                            <CopyRow
                                id="phone"
                                icon={<PhoneCall className="h-4 w-4 text-[#0B1B4A]" />}
                                label="+971 4 576 1039"
                                onCopy={() => copy("+971 4 576 1039", "phone")}
                                copied={copied === "phone"}
                            />
                            <CopyRow
                                id="phone2"
                                icon={<PhoneCall className="h-4 w-4 text-[#0B1B4A]" />}
                                label="+971 5 064 5244"
                                onCopy={() => copy("+971 5 064 5244", "phone2")}
                                copied={copied === "phone2"}
                            />
                            <CopyRow
                                id="partnerships"
                                icon={<Mail className="h-4 w-4 text-[#0B1B4A]" />}
                                label="partnerships@cogentsolutions.ae"
                                onCopy={() => copy("partnerships@cogentsolutions.ae", "partnerships")}
                                copied={copied === "partnerships"}
                            />
                            <CopyRow
                                id="general"
                                icon={<InboxIcon className="h-4 w-4 text-[#0B1B4A]" />}
                                label="info@cogentsolutions.ae"
                                onCopy={() => copy("info@cogentsolutions.ae", "general")}
                                copied={copied === "general"}
                            />
                        </div>

                        <div className="mt-1 flex items-center justify-between gap-3">
                            <label className="inline-flex items-center gap-2 text-xs text-neutral-700">
                                <input type="checkbox" required className="h-4 w-4 rounded border-neutral-300" /> I
                                agree to be contacted about my enquiry.
                            </label>
                            <button
                                disabled={sending}
                                className="inline-flex items-center justify-center rounded-xl bg-[#0B1B4A] px-4 py-2 text-sm font-semibold text-white shadow hover:brightness-110 transition disabled:opacity-60"
                            >
                                {sending ? "Sending…" : "Send Message"}
                            </button>
                        </div>
                    </form>
                </motion.section>
            </div>

            <Toast show={toast.show} text={toast.text} />
        </div>
    );
}

/* -------------------- subs -------------------- */
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
