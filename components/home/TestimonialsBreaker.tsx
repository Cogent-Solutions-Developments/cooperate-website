"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// 1. Define the interface for the testimonial object
interface Testimonial {
  logo: string;
  quote: string;
  name: string;
  title: string;
}

const testimonials: Record<string, Testimonial[]> = {
  col1: [
    {
      logo: "/images/testimonials/Emirates-Hospitals-Group.webp",
      quote:
        "Really good attendees, constructive thought-provoking discussions. Well done Cogent Solutions Team.",
      name: "MR. ADAM WOOLFORD",
      title: "SVP Digital Platform First, Abu Dhabi Bank",
    },
    {
      logo: "/images/testimonials/Emirates-Hospitals-Group.webp",
      quote:
        "Professional Team. Great coordination from start. I had a great experience and would recommend CS Events to colleagues in the industry.",
      name: "MR. MOHAMED ROUSDHY",
      title: "Member – Arab Monetary Fund & Fintech Bazaar",
    },
  ],
  col2: [
    {
      logo: "/images/testimonials/Emirates-Hospitals-Group.webp",
      quote:
        "Really good experience. Well organized. Event platform was user-friendly.",
      name: "MR. MOHAMMED IDRIS",
      title: "Senior Solution Architect, Red Hat",
    },
    {
      logo: "/images/testimonials/Emirates-Hospitals-Group.webp",
      quote: "Great experience. A special one for me.",
      name: "MR. AHMED SABRI EL-SHANAWANY",
      title: "Head of Financial Inclusion, Arab Bank",
    },
    {
      logo: "/images/testimonials/Emirates-Hospitals-Group.webp",
      quote:
        "Great experience. A special one for me. I have already recommended Cogent Solutions to many of my colleagues.",
      name: "MR. AHMED SABRI EL-SHANAWANY",
      title: "Head of Financial Inclusion, Arab Bank",
    },
  ],
  col3: [
    {
      logo: "/images/testimonials/Emirates-Hospitals-Group.webp",
      quote:
        "2nd time working with CS Events and I was very pleased. New and innovative approach to discuss industry challenges. Rich experience.",
      name: "MR. WAEL SAIKALY",
      title: "Head of AML / CFT, Creditbank SAL",
    },
    {
      logo: "/images/testimonials/Emirates-Hospitals-Group.webp",
      quote:
        "A highly motivated group. Champions in the event management arena. Highly professional, timely, and with high-quality speakers.",
      name: "MR. RAMAKRISHNAN NATARAJAN",
      title: "Member – Arab Monetary Fund & Fintech Bazaar",
    },
  ],
};

export default function WallOfTrust() {
  // Merge all testimonials for mobile view
  const mergedMobile = [
    ...testimonials.col1,
    ...testimonials.col2,
    ...testimonials.col3,
  ];

  return (
    <section className="relative py-14 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold text-white mb-3">
            Wall of Trust
          </h2>
          <p className="text-gray-300 text-[15px] font-medium max-w-xl mx-auto">
            Hear what our clients and partners have to say about their
            experience with Cogent Solutions delivering impact that goes
            beyond the conference hall.
          </p>
        </div>

        {/* Cards Wrapper */}
        <div className="relative max-h-[750px] overflow-hidden">

          {/* Fade masks (dark mode) */}
          <div className="pointer-events-none absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black via-black/95 to-transparent z-20" />
          <div className="pointer-events-none absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black via-black/95 to-transparent z-20" />

          {/* Desktop = 3 Columns | Mobile = Hidden */}
          <div className="hidden sm:flex relative z-0 flex-row justify-center gap-6 sm:gap-8 pb-24">
            
            {/* Column 1 */}
            <motion.div
              className="flex-1 space-y-8 mt-20"
              animate={{ y: ["0%", "-50%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              {[...testimonials.col1, ...testimonials.col1].map((t, i) => (
                <Card key={`col1-${i}`} t={t} />
              ))}
            </motion.div>

            {/* Column 2 */}
            <motion.div
              className="flex-1 space-y-8"
              animate={{ y: ["-50%", "0%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {[...testimonials.col2, ...testimonials.col2].map((t, i) => (
                <Card key={`col2-${i}`} t={t} />
              ))}
            </motion.div>

            {/* Column 3 */}
            <motion.div
              className="flex-1 space-y-8 mt-20"
              animate={{ y: ["0%", "-50%"] }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            >
              {[...testimonials.col3, ...testimonials.col3].map((t, i) => (
                <Card key={`col3-${i}`} t={t} />
              ))}
            </motion.div>

          </div>

          {/* Mobile = ONE Column Infinite Scroll */}
          <div className="sm:hidden relative z-0 pb-24">
            <motion.div
              className="space-y-6"
              animate={{ y: ["0%", "-50%"] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            >
              {[...mergedMobile, ...mergedMobile].map((t, i) => (
                <Card key={`m-${i}`} t={t} />
              ))}
            </motion.div>
          </div>

        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <a
            href="/testimonials"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300"
          >
            View More Testimonials
          </a>
        </div>

      </div>
    </section>
  );
}

// 2. Use the interface in the component props
function Card({ t }: { t: Testimonial }) {
  return (
    <div
      className="
        relative
        rounded-2xl
        border border-white/10
        p-8
        text-left
        transition-all
        duration-300
        overflow-hidden
        backdrop-blur-md
        bg-gradient-to-br from-white/[0.06] to-white/[0.02]
        shadow-[0_0_20px_rgba(255,255,255,0.04)]
        hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
        hover:-translate-y-[2px]
      "
    >
      <div className="absolute inset-0 bg-gradient-radial from-white/10 to-transparent opacity-30"></div>

      <div className="relative z-10">
        <div className="mb-5 w-28 h-12 relative">
          <Image
            src={t.logo}
            alt={`${t.name} logo`}
            fill
            className="object-contain"
          />
        </div>

        <p className="text-gray-200 text-[15px] leading-relaxed mb-6">“{t.quote}”</p>

        <p className="font-semibold text-white text-sm tracking-wide">{t.name}</p>
        <p className="text-gray-400 text-xs">{t.title}</p>
      </div>
    </div>
  );
}