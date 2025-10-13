// components/contact/ContactForm.tsx
"use client";

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

        // basic honeypot check
        if ((data.get("company_website") as string) !== "") {
            setState("success"); // silently succeed for bots
            setMessage("Thanks! We’ll be in touch shortly.");
            form.reset();
            return;
        }

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                body: data,
            });

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
            <div className="rounded-3xl border border-gray/10 bg-gray/5 p-6 sm:p-8 backdrop-blur ring-1 ring-black/5">
                <h3 className="text-2xl font-bold text-gray">Send us a message</h3>
                <p className="mt-2 text-sm text-gray/70">
                    Tell us a bit about your enquiry. We’ll route it to the right team.
                </p>

                <form onSubmit={onSubmit} className="mt-6 space-y-4">
                    {/* Honeypot */}
                    <input
                        type="text"
                        name="company_website"
                        className="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                    />

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                            <label className="block text-sm font-medium text-gray">Full Name</label>
                            <input
                                name="name"
                                required
                                placeholder="Jane Doe"
                                className="mt-1 w-full rounded-xl border border-gray/10 bg-gray/10 px-3 py-2 text-gray placeholder-gray/40 ring-1 ring-gray/10 focus:outline-none focus:ring-2 focus:ring-gray/30"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray">Work Email</label>
                            <input
                                name="email"
                                type="email"
                                required
                                placeholder="name@company.com"
                                className="mt-1 w-full rounded-xl border border-gray/10 bg-gray/10 px-3 py-2 text-gray placeholder-gray/40 ring-1 ring-gray/10 focus:outline-none focus:ring-2 focus:ring-gray/30"
                            />
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                            <label className="block text-sm font-medium text-gray">Company</label>
                            <input
                                name="company"
                                placeholder="Company Inc."
                                className="mt-1 w-full rounded-xl border border-gray/10 bg-gray/10 px-3 py-2 text-gray placeholder-gray/40 ring-1 ring-gray/10 focus:outline-none focus:ring-2 focus:ring-gray/30"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray">Phone</label>
                            <input
                                name="phone"
                                placeholder="+971 50 000 0000"
                                className="mt-1 w-full rounded-xl border border-gray/10 bg-gray/10 px-3 py-2 text-gray placeholder-gray/40 ring-1 ring-gray/10 focus:outline-none focus:ring-2 focus:ring-gray/30"
                            />
                        </div>
                    </div>

                    <div>
                        <div>
                            <label className="block text-sm font-medium text-gray">Purpose</label>
                            <select
                                name="purpose"
                                className="mt-1 w-full rounded-xl border border-gray/10 bg-gray/10 px-3 py-2 text-gray ring-1 ring-gray/10 focus:outline-none focus:ring-2 focus:ring-gray/30"
                                defaultValue="General enquiry"
                            >
                                <option>General enquiry</option>
                                <option>Partnership / Sponsorship</option>
                                <option>Speaking / Media</option>
                                <option>Delegate Registration</option>
                                <option>Vendor / Operations</option>
                            </select>
                        </div>

                        {/* <div>
                            <label className="block text-sm font-medium text-gray">
                                Approx. Budget (optional)
                            </label>
                            <input
                                name="budget"
                                type="range"
                                min={0}
                                max={100}
                                defaultValue={0}
                                className="mt-3 w-full"
                            />
                            <p className="mt-1 text-xs text-gray/50">Drag to indicate rough scale</p>
                        </div> */}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray">Message</label>
                        <textarea
                            name="message"
                            required
                            rows={5}
                            placeholder="How can we help?"
                            className="mt-1 w-full rounded-xl border border-gray/10 bg-gray/10 px-3 py-2 text-gray placeholder-gray/40 ring-1 ring-gray/10 focus:outline-none focus:ring-2 focus:ring-gray/30"
                        />
                    </div>

                    <div className="flex items-center gap-3">
                        <input
                            id="consent"
                            name="consent"
                            type="checkbox"
                            required
                            className="h-4 w-4 rounded border-gray/20 bg-gray/10 text-gray focus:ring-gray/30"
                        />
                        <label htmlFor="consent" className="text-sm text-gray/70">
                            I agree to be contacted about my enquiry.
                        </label>
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={state === "loading"}
                            className="inline-flex w-full items-center justify-center rounded-xl bg-gray px-4 py-2 font-semibold text-[#0B1222] shadow hover:shadow-lg transition disabled:opacity-60 sm:w-auto"
                        >
                            {state === "loading" ? "Sending…" : "Send Message"}
                        </button>
                    </div>

                    {state !== "idle" && (
                        <p
                            className={`mt-3 text-sm ${state === "success" ? "text-emerald-300" : "text-rose-300"
                                }`}
                        >
                            {message}
                        </p>
                    )}
                </form>
            </div>

            {/* Helpful extras */}
            <aside className="space-y-4">
                <div className="rounded-2xl border border-gray/10 bg-gray/5 p-6 ring-1 ring-black/5">
                    <h4 className="text-lg font-semibold text-gray">Response times</h4>
                    <p className="mt-1 text-sm text-gray/70">
                        We typically respond within 1–2 business days. For urgent matters, call or WhatsApp.
                    </p>
                </div>

                <div className="rounded-2xl border border-gray/10 bg-gray/5 p-6 ring-1 ring-black/5">
                    <h4 className="text-lg font-semibold text-gray">Direct lines</h4>
                    <ul className="mt-2 space-y-2 text-sm text-gray/70">
                        <li>Partnerships: partnerships@cogentsolutions.ae</li>
                        <li>General: info@cogentsolutions.ae</li>
                        <li>Phone: +971 4 576 1039</li>
                    </ul>
                </div>
            </aside>
        </div>
    );
}
