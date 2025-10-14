"use client";

import { motion, type Variants } from "framer-motion";
import { PhoneCall, Mail, MessageSquare } from "lucide-react";
import DirectionsPro from "./illustrations/DirectionsPro";
import Tilt from "@/components/ui/Tilt";

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];
const float: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: (i: number = 0) => ({
        opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.15, duration: 0.7, ease: easeOut },
    }),
};

export default function ContactHero() {
    return (
        <header className="relative overflow-hidden py-10 sm:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7, ease: easeOut }}
                    className="relative rounded-[32px] overflow-hidden shadow-2xl ring-1 ring-white/15 bg-gradient-to-br from-[#0a1330] via-[#0E1D3B] to-[#091021]"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_-10%_-10%,#2b7cff33,transparent),radial-gradient(800px_400px_at_110%_120%,#e6394630,transparent)]" />

                    <div className="relative grid items-center gap-8 md:grid-cols-2 px-8 py-12 sm:px-14 md:px-16">
                        {/* text */}
                        <div>
                            <motion.p variants={float} initial="hidden" animate="show"
                                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white/70 ring-1 ring-white/20">
                                Let’s talk
                            </motion.p>
                            <motion.h1 variants={float} initial="hidden" animate="show" custom={1}
                                className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                                Get in Touch with Cogent Solutions<span className="text-white/70">™</span>
                            </motion.h1>
                            <motion.p variants={float} initial="hidden" animate="show" custom={2}
                                className="mt-5 max-w-xl text-base sm:text-lg text-white/75">
                                Partnerships, media, speaking, or general enquiries — we’ll route your message to the right team and get back quickly.
                            </motion.p>

                            <motion.div variants={float} initial="hidden" animate="show" custom={3}
                                className="mt-7 flex flex-wrap items-center gap-3">
                                <a href="tel:+97145761039"
                                    className="group inline-flex items-center gap-2 rounded-xl bg-white text-neutral-900 px-4 py-2 text-sm font-semibold shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all">
                                    <PhoneCall className="h-4 w-4" /> Call: +971 4 576 1039
                                </a>
                                <a href="mailto:partnerships@cogentsolutions.ae"
                                    className="group inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/20 hover:-translate-y-1 transition-all">
                                    <Mail className="h-4 w-4" /> partnerships@cogentsolutions.ae
                                </a>
                                <a href="https://wa.me/971506435244" target="_blank" rel="noreferrer"
                                    className="group inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-emerald-400/10 hover:-translate-y-1 transition-all">
                                    <MessageSquare className="h-4 w-4" /> WhatsApp: +971 50 643 5244
                                </a>
                            </motion.div>
                        </div>

                        {/* illustration with tilt + glare */}
                        <Tilt glare className="rounded-3xl">
                            <div className="rounded-3xl bg-white/5 p-3">
                                <DirectionsPro />
                            </div>
                        </Tilt>
                    </div>
                </motion.div>
            </div>
        </header>
    );
}
