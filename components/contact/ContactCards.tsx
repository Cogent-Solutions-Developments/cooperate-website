// components/contact/ContactCards.tsx
"use client";

import { Phone, AtSign, Inbox } from "lucide-react";

const items = [
    {
        title: "Call Us",
        subtitle: "+971 4 576 1039 / +971 50 643 5244",
        href: "tel:+97145761039",
        icon: Phone,
    },
    {
        title: "Partner With Us",
        subtitle: "partnerships@cogentsolutions.ae",
        href: "mailto:partnerships@cogentsolutions.ae",
        icon: AtSign,
    },
    {
        title: "General Enquiries",
        subtitle: "info@cogentsolutions.ae",
        href: "mailto:info@cogentsolutions.ae",
        icon: Inbox,
    },
];

export default function ContactCards() {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 text-gray-900">
            {items.map(({ title, subtitle, href, icon: Icon }) => (
                <a
                    key={title}
                    href={href}
                    className="group rounded-2xl border border-gray/10 bg-gray/5 p-6 backdrop-blur hover:bg-gray/10 transition shadow-lg ring-1 ring-black/5"
                >
                    <div className="flex items-start gap-4">
                        <div className="rounded-xl bg-gray/10 p-3 ring-1 ring-gray/15">
                            <Icon className="h-5 w-5 text-gray" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray">{title}</h3>
                            <p className="mt-1 text-sm text-gray/70">{subtitle}</p>
                        </div>
                    </div>
                    <div className="mt-4 text-xs text-gray/50">
                        Click to {title.toLowerCase()}
                    </div>
                </a>
            ))}
        </div>
    );
}
