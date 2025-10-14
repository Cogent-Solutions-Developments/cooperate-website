// components/contact/ContactForm.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
    const [state, setState] = useState<FormState>("idle");
    const [message, setMessage] = useState("");

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setState("loading");
        const form = e.currentTarget;
        const data = new FormData(form);

        if ((data.get("company_website") as string) !== "") {
            setState("success");
            setMessage("Thanks! We’ll be in touch shortly.");
            form.reset();
            return;
        }

        try {
            const res = await fetch("/api/contact", { method: "POST", body: data });
            if (!res.ok) throw new Error("Network error");
            setState("success");
            setMessage("Thanks! We’ve received your message and will respond shortly.");
            form.reset();
        } catch {
            setState("error");
            setMessage("Something went wrong. Please try again or email us directly.");
        }
    }

    return (
        <div className="grid items-start gap-8 lg:grid-cols-2">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="rounded-3xl p-[1px] bg-gradient-to-tr from-neutral-200 to-neutral-100"
            >
                <div className="rounded-3xl bg-white p-6 sm:p-8 ring-1 ring-neutral-200 shadow-sm">
                    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500/10 to-indigo-600/10 px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-600/20">
                        Contact form
                    </div>
                    <h3 className="mt-3 text-2xl font-bold text-neutral-900">Send us a message</h3>
                    <p className="mt-2 text-sm text-neutral-600">
                        Tell us a bit about your enquiry. We’ll route it to the right team.
                    </p>

                    <form onSubmit={onSubmit} className="mt-6 space-y-4">
                        <input type="text" name="company_website" className="hidden" tabIndex={-1} />

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                                <label className="block text-sm font-medium text-neutral-800">Full Name</label>
                                <input
                                    name="name"
                                    required
                                    placeholder="Jane Doe"
                                    className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-sky-500/60"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-neutral-800">Work Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="name@company.com"
                                    className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-sky-500/60"
                                />
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                                <label className="block text-sm font-medium text-neutral-800">Company</label>
                                <input
                                    name="company"
                                    placeholder="Company Inc."
                                    className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-sky-500/60"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-neutral-800">Phone</label>
                                <input
                                    name="phone"
                                    placeholder="+971 50 000 0000"
                                    className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-sky-500/60"
                                />
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                                <label className="block text-sm font-medium text-neutral-800">Purpose</label>
                                <select
                                    name="purpose"
                                    defaultValue="General enquiry"
                                    className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-sky-500/60"
                                >
                                    <option>General enquiry</option>
                                    <option>Partnership / Sponsorship</option>
                                    <option>Speaking / Media</option>
                                    <option>Delegate Registration</option>
                                    <option>Vendor / Operations</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-neutral-800">Attachment (optional)</label>
                                <input
                                    type="file"
                                    name="file"
                                    className="mt-1 block w-full text-sm text-neutral-600 file:mr-3 file:rounded-lg file:border-0 file:bg-gradient-to-r file:from-sky-500 file:to-indigo-600 file:px-3 file:py-2 file:text-white hover:file:brightness-110"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-neutral-800">Message</label>
                            <textarea
                                name="message"
                                required
                                rows={5}
                                placeholder="How can we help?"
                                className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-sky-500/60"
                            />
                        </div>

                        <div className="flex items-center gap-3">
                            <input
                                id="consent"
                                name="consent"
                                type="checkbox"
                                required
                                className="h-4 w-4 rounded border-neutral-300 text-sky-600 focus:ring-sky-500/60"
                            />
                            <label htmlFor="consent" className="text-sm text-neutral-700">
                                I agree to be contacted about my enquiry.
                            </label>
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={state === "loading"}
                                className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 px-4 py-2 font-semibold text-white shadow hover:brightness-110 transition disabled:opacity-60 sm:w-auto"
                            >
                                {state === "loading" ? "Sending…" : "Send Message"}
                            </button>
                        </div>

                        {state !== "idle" && (
                            <p
                                className={`mt-3 text-sm ${state === "success" ? "text-emerald-600" : "text-rose-600"
                                    }`}
                            >
                                {message}
                            </p>
                        )}
                    </form>
                </div>
            </motion.div>

            <motion.aside
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
                className="space-y-4"
            >
                <div className="rounded-2xl bg-white p-6 ring-1 ring-neutral-200 shadow-sm">
                    <h4 className="text-lg font-semibold text-neutral-900">Response times</h4>
                    <p className="mt-1 text-sm text-neutral-600">
                        We typically respond within 1–2 business days. For urgent matters, call or WhatsApp.
                    </p>
                </div>

                <div className="rounded-2xl bg-white p-6 ring-1 ring-neutral-200 shadow-sm">
                    <h4 className="text-lg font-semibold text-neutral-900">Direct lines</h4>
                    <ul className="mt-2 space-y-2 text-sm text-neutral-600">
                        <li>Partnerships: partnerships@cogentsolutions.ae</li>
                        <li>General: info@cogentsolutions.ae</li>
                        <li>Phone: +971 4 576 1039</li>
                    </ul>
                </div>
            </motion.aside>
        </div>
    );
}
