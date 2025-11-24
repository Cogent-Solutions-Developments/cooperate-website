"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = {
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
  return (
    <section className="relative py-14 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title + Subtitle (same as Upcoming Events section) */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold text-gray-900 mb-3">
            Wall of Trust
          </h2>
          <p className="text-gray-600 text-[15px] font-medium max-w-xl mx-auto">
            Hear what our clients and partners have to say about their
            experience with Cogent Solutions delivering impact that goes
            beyond the conference hall.
          </p>
        </div>

        {/* === Cards wrapper === */}
        <div className="relative max-h-[750px] overflow-hidden">
          {/* Fade masks */}
          <div className="pointer-events-none absolute top-0 inset-x-0 h-25 bg-gradient-to-b from-white via-white/95 to-transparent z-20" />
          <div className="pointer-events-none absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white via-white/95 to-transparent z-20" />

          {/* === Columns === */}
          <div className="relative z-0 flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 pb-24">
            {/* Column 1 – Upward */}
            <motion.div
              className="flex-1 space-y-8 mt-20"
              animate={{ y: ["0%", "-50%"] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...testimonials.col1, ...testimonials.col1].map((t, i) => (
                <Card key={`col1-${i}`} t={t} />
              ))}
            </motion.div>

            {/* Column 2 – Downward */}
            <motion.div
              className="flex-1 space-y-8 mt-0"
              animate={{ y: ["-50%", "0%"] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...testimonials.col2, ...testimonials.col2].map((t, i) => (
                <Card key={`col2-${i}`} t={t} />
              ))}
            </motion.div>

            {/* Column 3 – Upward */}
            <motion.div
              className="flex-1 space-y-8 mt-20"
              animate={{ y: ["0%", "-50%"] }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...testimonials.col3, ...testimonials.col3].map((t, i) => (
                <Card key={`col3-${i}`} t={t} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* === CTA Button (same design as Upcoming Events) === */}
        <div className="flex justify-center mt-10">
          <a
            href="/testimonials"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-900 transition-all duration-300"
          >
            View More Testimonials
          </a>
        </div>
      </div>
    </section>
  );
}

/* === Card Component === */
function Card({ t }: { t: { logo: string; quote: string; name: string; title: string } }) {
  return (
    <div
      className="
        relative
        bg-white
        rounded-2xl
        border
        border-[#e8e8e8]
        p-8
        text-left
        transition-all
        duration-300
        overflow-hidden
        shadow-[0_2px_4px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,0.8)]
        hover:shadow-[0_4px_12px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.8)]
        hover:-translate-y-[2px]
      "
      style={{
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(245,245,245,0.95))",
      }}
    >
      {/* subtle light overlay for a clean tech feel */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none [mask-image:linear-gradient(to_bottom,white_70%,transparent)] bg-white/20" />

      <div className="relative z-10">
        <div className="mb-5 w-28 h-12 relative">
          <Image src={t.logo} alt={`${t.name} logo`} fill className="object-contain" />
        </div>

        <p className="text-gray-800 text-[15px] leading-relaxed mb-6">“{t.quote}”</p>

        <p className="font-semibold text-gray-900 text-sm tracking-wide">{t.name}</p>
        <p className="text-gray-500 text-xs">{t.title}</p>
      </div>
    </div>
  );
}
