"use client";
import { motion } from "framer-motion";

export default function SupportAgentPro() {
    return (
        <motion.svg
            viewBox="0 0 760 360"
            className="w-full h-auto"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <defs>
                <linearGradient id="gA" x1="0" x2="1">
                    <stop offset="0" stopColor="#10B981" />
                    <stop offset="1" stopColor="#06B6D4" />
                </linearGradient>
                <linearGradient id="gB" x1="0" x2="1">
                    <stop offset="0" stopColor="#60A5FA" />
                    <stop offset="1" stopColor="#6366F1" />
                </linearGradient>
                <filter id="blur" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="12" />
                </filter>
            </defs>

            {/* glow */}
            <g opacity=".25" filter="url(#blur)">
                <circle cx="620" cy="120" r="110" fill="url(#gB)" />
                <circle cx="260" cy="260" r="80" fill="url(#gA)" />
            </g>

            {/* monitor */}
            <g transform="translate(280,60)">
                <rect x="0" y="0" rx="18" width="260" height="160" fill="#fff" />
                <rect x="0" y="0" rx="18" width="260" height="160" fill="none" stroke="#E5E7EB" />
                <rect x="100" y="168" width="60" height="10" rx="5" fill="#94A3B8" />
                <motion.rect
                    x="16" y="20" rx="10" width="228" height="18" fill="url(#gB)"
                    initial={{ width: 0 }} animate={{ width: 228 }} transition={{ delay: 0.3, duration: 0.8 }}
                />
                <motion.rect
                    x="16" y="48" rx="8" width="200" height="10" fill="#E5E7EB"
                    initial={{ width: 0 }} animate={{ width: 200 }} transition={{ delay: 0.4, duration: 0.7 }}
                />
                <motion.rect
                    x="16" y="66" rx="8" width="160" height="10" fill="#E5E7EB"
                    initial={{ width: 0 }} animate={{ width: 160 }} transition={{ delay: 0.5, duration: 0.6 }}
                />
            </g>

            {/* agent */}
            <g transform="translate(90,70)">
                <circle cx="70" cy="40" r="22" fill="#111827" />
                <rect x="44" y="66" width="54" height="90" rx="14" fill="url(#gA)" />
                <rect x="30" y="40" width="8" height="28" rx="4" fill="#111827" />
                <circle cx="30" cy="54" r="8" fill="#111827" />
                <rect x="52" y="94" width="28" height="12" rx="6" fill="#fff" opacity=".95" />
            </g>

            {/* floating chat icons */}
            {[
                { x: 520, y: 70 }, { x: 580, y: 110 }, { x: 520, y: 155 }, { x: 620, y: 140 },
            ].map((p, i) => (
                <motion.circle
                    key={i}
                    cx={p.x}
                    cy={p.y}
                    r="10"
                    fill="url(#gB)"
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 * i }}
                />
            ))}
        </motion.svg>
    );
}
