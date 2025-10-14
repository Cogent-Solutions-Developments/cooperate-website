// components/contact/illustrations/SupportIllustration.tsx
"use client";

import { motion } from "framer-motion";

export default function SupportIllustration() {
    return (
        <motion.svg
            viewBox="0 0 560 240"
            className="w-full h-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <defs>
                <linearGradient id="s1" x1="0" x2="1">
                    <stop offset="0" stopColor="#34D399" />
                    <stop offset="1" stopColor="#06B6D4" />
                </linearGradient>
                <linearGradient id="s2" x1="0" x2="1">
                    <stop offset="0" stopColor="#60A5FA" />
                    <stop offset="1" stopColor="#6366F1" />
                </linearGradient>
            </defs>
            <circle cx="420" cy="110" r="90" fill="url(#s2)" opacity=".12" />
            {/* monitor */}
            <rect x="230" y="40" rx="14" width="180" height="120" fill="#fff" />
            <rect x="230" y="40" rx="14" width="180" height="120" fill="none" stroke="#E5E7EB" />
            <rect x="300" y="164" width="40" height="10" rx="5" fill="#94A3B8" />
            {/* agent */}
            <g transform="translate(80,45)">
                <circle cx="60" cy="40" r="20" fill="#0F172A" />
                <rect x="38" y="60" width="44" height="48" rx="12" fill="url(#s1)" />
                <circle cx="38" cy="44" r="8" fill="#0F172A" />
                <rect x="26" y="40" width="8" height="26" rx="4" fill="#0F172A" />
                <rect x="30" y="88" width="16" height="10" rx="5" fill="#fff" opacity=".9" />
            </g>
            {/* chat bubbles */}
            {[
                { x: 370, y: 60 }, { x: 410, y: 100 }, { x: 340, y: 120 },
            ].map((p, i) => (
                <motion.circle key={i} cx={p.x} cy={p.y} r="8" fill="url(#s2)"
                    initial={{ scale: 0.6, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 * i }} />
            ))}
        </motion.svg>
    );
}
