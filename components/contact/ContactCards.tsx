// components/contact/ContactCards.tsx
"use client";

import { motion } from "framer-motion";
import { Phone, AtSign, Inbox } from "lucide-react";

const items = [
    {
        title: "Call Us",
        subtitle: "+971 4 576 1039 / +971 50 643 5244",
        href: "tel:+97145761039",
        icon: Phone,
        accent: "from-sky-500 to-indigo-600",
    },
    {
        title: "Partner With Us",
        subtitle: "partnerships@cogentsolutions.ae",
        href: "mailto:partnerships@cogentsolutions.ae",
        icon: AtSign,
        accent: "from-fuchsia-500 to-rose-500",
    },
    {
        title: "General Enquiries",
        subtitle: "info@cogentsolutions.ae",
        href: "mailto:info@cogentsolutions.ae",
        icon: Inbox,
        accent: "from-emerald-500 to-teal-600",
    },
];

export default function ContactCards() {
    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 text-neutral-900">
            {items.map(({ title, subtitle, href, icon: Icon, accent }) => (
                <motion.a
                    key={title}
                    href={href}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="group relative rounded-2xl p-[1px] bg-gradient-to-tr from-neutral-200 to-neutral-100 hover:from-neutral-300 hover:to-neutral-200 transition"
                >
                    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 group-hover:shadow-xl group-hover:-translate-y-1 transition">
                        <div className="flex items-start gap-4">
                            <div
                                className={`rounded-xl bg-gradient-to-br ${accent} p-[10px] text-white shadow-md`}
                            >
                                <Icon className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">{title}</h3>
                                <p className="mt-1 text-sm text-neutral-600">{subtitle}</p>
                            </div>
                        </div>
                        <div className="mt-4 text-xs text-neutral-500">Click to {title.toLowerCase()}</div>
                    </div>
                </motion.a>
            ))}
        </div>
    );
}
