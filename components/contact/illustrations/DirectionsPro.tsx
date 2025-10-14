"use client";
import { motion } from "framer-motion";

export default function DirectionsPro() {
    return (
        <motion.svg
            viewBox="0 0 760 520"
            className="w-full h-auto"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <defs>
                <linearGradient id="bgA" x1="0" x2="1">
                    <stop offset="0" stopColor="#1E40AF" />
                    <stop offset="1" stopColor="#7C3AED" />
                </linearGradient>
                <linearGradient id="pinA" x1="0" x2="1">
                    <stop offset="0" stopColor="#F59E0B" />
                    <stop offset="1" stopColor="#EF4444" />
                </linearGradient>
                <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="10" />
                </filter>
                <pattern id="grid" width="22" height="22" patternUnits="userSpaceOnUse">
                    <path d="M22 0H0V22" fill="none" stroke="#E5E7EB" strokeWidth="1" />
                </pattern>
            </defs>

            {/* glow discs behind */}
            <g opacity=".25" filter="url(#soft)">
                <circle cx="610" cy="140" r="110" fill="url(#bgA)" />
                <circle cx="170" cy="380" r="90" fill="#22C55E" />
            </g>

            {/* device card */}
            <g transform="translate(70,60)">
                <motion.g
                    initial={{ rotateX: 16, rotateY: -12 }}
                    animate={{ rotateX: 0, rotateY: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <rect x="0" y="0" rx="28" ry="28" width="540" height="360" fill="#0B1222" />
                    <rect x="6" y="6" rx="24" width="528" height="348" fill="white" />
                    <rect x="6" y="6" rx="24" width="528" height="348" fill="url(#grid)" />
                    <rect x="6" y="6" rx="24" width="528" height="348" fill="none" stroke="#CBD5E1" />

                    {/* diagonal clusters */}
                    <path d="M40 300 L520 80" stroke="#CBD5E1" />
                    <path d="M40 100 L520 300" stroke="#E5E7EB" />
                    <path d="M120 40 L120 330 M260 40 L260 330 M400 40 L400 330" stroke="#EEF2F7" />

                    {/* animated route */}
                    <motion.path
                        d="M90 270 C180 200, 280 200, 350 240 S480 300, 500 210"
                        fill="none"
                        stroke="url(#bgA)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray="4 12"
                        animate={{ strokeDashoffset: [80, 0] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
                    />

                    {/* main pin */}
                    <g transform="translate(500,210)">
                        <path d="M0 0 C-38 0 -38 60 0 108 C38 60 38 0 0 0Z" fill="url(#pinA)" />
                        <circle cx="0" cy="30" r="12" fill="#fff" />
                        <circle cx="0" cy="110" r="10" fill="#FCA5A5" opacity=".25" />
                    </g>

                    {/* small pins */}
                    {[{ x: 350, y: 240 }, { x: 260, y: 200 }, { x: 160, y: 250 }].map((p, i) => (
                        <motion.g
                            key={i}
                            transform={`translate(${p.x},${p.y})`}
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                        >
                            <path d="M0 0 C-20 0 -20 35 0 62 C20 35 20 0 0 0Z" fill="#22C55E" />
                            <circle cx="0" cy="19" r="7" fill="#fff" />
                        </motion.g>
                    ))}
                </motion.g>
            </g>

            {/* person w/ depth */}
            <g transform="translate(22,290)">
                <ellipse cx="90" cy="100" rx="64" ry="18" fill="#0F172A" opacity=".15" />
                <circle cx="90" cy="24" r="18" fill="#111827" />
                <rect x="68" y="42" width="44" height="70" rx="12" fill="url(#bgA)" />
                <rect x="52" y="96" width="20" height="14" rx="6" fill="#1F2937" />
                <rect x="106" y="96" width="20" height="14" rx="6" fill="#1F2937" />
                <rect x="76" y="56" width="28" height="10" rx="5" fill="#fff" opacity=".9" />
            </g>
        </motion.svg>
    );
}
