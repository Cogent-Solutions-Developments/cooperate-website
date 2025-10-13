// components/contact/Offices.tsx
"use client";

type Office = {
    region: string;
    lines: string[];
    mapSrc?: string; // iframe src
    comingSoon?: boolean;
};

const offices: Office[] = [
    {
        region: "Middle East & Africa HQ",
        lines: [
            "Office No: 209, The Metropolis Tower",
            "Business Bay, Dubai, United Arab Emirates",
        ],
        // Replace with your actual map embed if you have a specific place ID
        mapSrc:
            "https://www.google.com/maps?q=The%20Metropolis%20Tower%20Business%20Bay%20Dubai&output=embed",
    },
    {
        region: "Asia Pacific HQ",
        lines: ["2nd Floor, Green Lanka Tower", "Colombo 02, Sri Lanka"],
        mapSrc:
            "https://www.google.com/maps?q=Green%20Lanka%20Tower%20Colombo%2002&output=embed",
    },
    {
        region: "Saudi Arabia HQ",
        lines: ["Riyadh (Coming Soon...)"],
        comingSoon: true,
    },
];

export default function Offices() {
    return (
        <div className="grid gap-6 md:grid-cols-2">
            {offices.map((o) => (
                <div
                    key={o.region}
                    className="rounded-2xl border border-gray/10 bg-gray/5 p-6 backdrop-blur ring-1 ring-black/5"
                >
                    <h3 className="text-xl font-semibold text-gray">{o.region}</h3>
                    <div className="mt-2 space-y-1 text-gray/70">
                        {o.lines.map((l) => (
                            <p key={l}>{l}</p>
                        ))}
                    </div>

                    {o.mapSrc && (
                        <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-gray/10">
                            <iframe
                                src={o.mapSrc}
                                className="h-56 w-full"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    )}

                    {o.comingSoon && (
                        <div className="mt-4 inline-flex rounded-full bg-gray/8 px-3 py-1 text-xs font-semibold text-gray/70 ring-1 ring-gray/15">
                            Coming soon
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
