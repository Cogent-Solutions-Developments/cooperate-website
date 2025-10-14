// components/contact/Offices.tsx
"use client";

import { motion } from "framer-motion";

type Office = {
    region: string;
    lines: string[];
    mapSrc?: string;
    comingSoon?: boolean;
    accent?: string;
};

const offices: Office[] = [
    {
        region: "Middle East & Africa HQ",
        lines: [
            "Office No: 209, The Metropolis Tower",
            "Business Bay, Dubai, United Arab Emirates",
        ],
        mapSrc:
            "https://www.google.com/maps?q=The%20Metropolis%20Tower%20Business%20Bay%20Dubai&output=embed",
        accent: "from-sky-500 to-indigo-600",
    },
    {
        region: "Asia Pacific HQ",
        lines: ["2nd Floor, Green Lanka Tower", "Colombo 02, Sri Lanka"],
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4698.242292325022!2d79.8502226!3d6.919568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259539eea673b%3A0xc3fe2ad2878e87a8!2sCogent%20Solutions%20Event%20Management%20(PVT)%20LTD!5e1!3m2!1sen!2slk!4v1760345064777!5m2!1sen!2slk",
        accent: "from-emerald-500 to-teal-600",
    },
    {
        region: "Saudi Arabia HQ",
        lines: ["Riyadh (Coming Soon...)"],
        comingSoon: true,
        accent: "from-amber-500 to-orange-600",
    },
];

export default function Offices() {
    return (
        <div className="grid gap-6 md:grid-cols-2">
            {offices.map((o, idx) => (
                <motion.div
                    key={o.region}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.05 }}
                    className="rounded-2xl p-[1px] bg-gradient-to-tr from-neutral-200 to-neutral-100"
                >
                    <div className="rounded-2xl bg-white p-6 ring-1 ring-neutral-200 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${o.accent}`} />
                            <h3 className="text-xl font-semibold text-neutral-900">{o.region}</h3>
                        </div>

                        <div className="mt-2 space-y-1 text-neutral-600">
                            {o.lines.map((l) => (
                                <p key={l}>{l}</p>
                            ))}
                        </div>

                        {o.mapSrc && (
                            <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-neutral-200">
                                <iframe
                                    src={o.mapSrc}
                                    className="h-56 w-full"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        )}

                        {o.comingSoon && (
                            <span className="mt-4 inline-flex rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700 ring-1 ring-neutral-200">
                                Coming soon
                            </span>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
