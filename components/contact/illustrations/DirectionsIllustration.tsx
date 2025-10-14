// components/contact/illustrations/DirectionsIllustration.tsx
"use client";

import { motion } from "framer-motion";

export default function DirectionsIllustration() {
    return (
        <motion.svg
            viewBox="0 0 560 420"
            className="w-full h-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
            <defs>
                <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0" stopColor="#60A5FA" />
                    <stop offset="1" stopColor="#6366F1" />
                </linearGradient>
                <linearGradient id="pin" x1="0" x2="1">
                    <stop offset="0" stopColor="#F97316" />
                    <stop offset="1" stopColor="#EF4444" />
                </linearGradient>
                <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="1.5" cy="1.5" r="1.5" fill="#CBD5E1" opacity="0.35" />
                </pattern>
            </defs>

            {/* big circle backdrop */}
            <motion.circle
                cx="360"
                cy="180"
                r="140"
                fill="url(#g1)"
                opacity="0.15"
                initial={{ scale: 0.9 }}
                animate={{ scale: [0.95, 1, 0.95] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* phone / map board */}
            <g transform="translate(60,40)">
                <rect x="40" y="10" rx="18" ry="18" width="360" height="280" fill="#ffffff" />
                <rect x="40" y="10" rx="18" ry="18" width="360" height="280" fill="url(#dots)" />
                <rect x="40" y="10" rx="18" ry="18" width="360" height="280" fill="none" stroke="#E5E7EB" />

                {/* map grid */}
                <path d="M60 70 L380 70 M60 120 L380 120 M60 170 L380 170 M60 220 L380 220"
                    stroke="#E5E7EB" />
                <path d="M90 40 L120 290 M180 40 L210 290 M270 40 L300 290"
                    stroke="#E5E7EB" />

                {/* routes */}
                <path
                    d="M90 230 C160 210, 220 180, 300 200"
                    stroke="url(#g1)" strokeWidth="6" fill="none" strokeLinecap="round"
                />
                <motion.path
                    d="M120 120 C180 130, 240 110, 320 140"
                    stroke="url(#g1)" strokeWidth="6" fill="none" strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.6, ease: "easeInOut", delay: 0.4 }}
                />

                {/* map pins */}
                {[
                    { x: 300, y: 105, s: 1 },
                    { x: 220, y: 190, s: 0.75 },
                    { x: 140, y: 150, s: 0.65 },
                ].map((p, i) => (
                    <motion.g key={i} transform={`translate(${p.x},${p.y}) scale(${p.s})`}
                        initial={{ y: -8, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 + i * 0.12 }}>
                        <path d="M0 0 C-30 0 -30 45 0 80 C30 45 30 0 0 0Z" fill="url(#pin)" />
                        <circle cx="0" cy="25" r="10" fill="#fff" />
                    </motion.g>
                ))}
            </g>

            {/* character */}
            <motion.g
                transform="translate(40,220)"
                initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.7 }}
            >
                <path d="M30 100 h70 a10 10 0 0 1 10 10 v8 h-90z" fill="#0F172A" opacity=".1" />
                <circle cx="60" cy="30" r="18" fill="#0F172A" />
                <rect x="42" y="45" width="36" height="55" rx="10" fill="url(#g1)" />
                <rect x="30" y="95" width="18" height="12" rx="6" fill="#1F2937" />
                <rect x="78" y="95" width="18" height="12" rx="6" fill="#1F2937" />
                <rect x="45" y="55" width="30" height="10" rx="5" fill="#fff" opacity=".9" />
            </motion.g>
        </motion.svg>
    );
}
