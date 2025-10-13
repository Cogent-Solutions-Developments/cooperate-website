// components/contact/ContactHero.tsx
"use client";

import { motion } from "framer-motion";
import { PhoneCall, Mail, MessageSquare } from "lucide-react";

export default function ContactHero() {
    return (
        <header className="relative overflow-hidden py-12 sm:py-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Hero container */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative rounded-[30px] bg-gradient-to-br from-[#081226] via-[#0E1D3B] to-[#060C17] shadow-2xl ring-1 ring-white/10 overflow-hidden flex flex-col justify-center min-h-[400px] p-10 sm:p-16"
                >
                    {/* Floating gradient lights */}
                    <div className="pointer-events-none absolute -top-40 -left-32 h-[300px] w-[300px] rounded-full bg-[#2b7cff]/30 blur-[120px]" />
                    <div className="pointer-events-none absolute -bottom-40 -right-32 h-[300px] w-[300px] rounded-full bg-[#e63946]/30 blur-[120px]" />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white/70 ring-1 ring-white/15 w-fit"
                    >
                        Let’s talk
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
                    >
                        Get in Touch with <br className="hidden sm:block" /> Cogent Solutions
                        <span className="text-white/70">™</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="mt-5 max-w-2xl text-base sm:text-lg text-white/70"
                    >
                        Partnerships, media, speaking, or general enquiries — we’ll route your
                        message to the right team and get back quickly.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="mt-8 flex flex-wrap items-center gap-3"
                    >
                        <a
                            href="tel:+97145761039"
                            className="group inline-flex items-center gap-2 rounded-xl bg-white text-[#0B1222] px-4 py-2 text-sm font-semibold shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all"
                        >
                            <PhoneCall className="h-4 w-4" />
                            Call: +971 4 576 1039
                        </a>

                        <a
                            href="mailto:partnerships@cogentsolutions.ae"
                            className="group inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/20 hover:-translate-y-1 transition-all"
                        >
                            <Mail className="h-4 w-4" />
                            partnerships@cogentsolutions.ae
                        </a>

                        <a
                            href="https://wa.me/971506435244"
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-[#25D366]/10 hover:-translate-y-1 transition-all"
                        >
                            <MessageSquare className="h-4 w-4" />
                            WhatsApp: +971 50 643 5244
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </header>
    );
}
