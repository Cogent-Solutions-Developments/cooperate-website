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
    <section className="relative w-full bg-white py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* === Header === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-[-5rem]">
            Wall of Trust
          </h2>
        </motion.div>

        {/* === Cards wrapper (with fade effect limited to this area) === */}
        <div className="relative max-h-[750px] overflow-hidden mt-20">
          {/* Fades only on card region */}
          <div className="pointer-events-none absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white via-white/95 to-transparent z-20" />
          <div className="pointer-events-none absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white via-white/95 to-transparent z-20" />

          {/* 3-column layout with staggered heights */}
          <div className="relative z-0 flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 pb-24">
            {/* Column 1 */}
            <div className="flex-1 space-y-8 mt-20">
              {testimonials.col1.map((t, i) => (
                <Card key={`col1-${i}`} t={t} delay={i * 0.05} />
              ))}
            </div>

            {/* Column 2 (center, higher) */}
            <div className="flex-1 space-y-8 mt-0">
              {testimonials.col2.map((t, i) => (
                <Card key={`col2-${i}`} t={t} delay={i * 0.05} />
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex-1 space-y-8 mt-20">
              {testimonials.col3.map((t, i) => (
                <Card key={`col3-${i}`} t={t} delay={i * 0.05} />
              ))}
            </div>
          </div>
        </div>

        {/* === CTA buttons === */}
        <div className="mt-10 flex justify-center flex-wrap gap-4">
          <button className="bg-gray-100 text-gray-800 text-sm px-5 py-3 rounded-full hover:bg-gray-200 transition-all">
            View the impact on our clients
          </button>
          <button className="bg-black text-white text-sm px-6 py-3 rounded-full hover:bg-gray-800 transition-all">
            Browse customer stories
          </button>
        </div>
      </div>
    </section>
  );
}

/* === Reusable Card Component === */
function Card({
  t,
  delay,
}: {
  t: { logo: string; quote: string; name: string; title: string };
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="bg-white border border-gray-200 rounded-2xl p-8 text-left transition-all duration-500"
    >
      <div className="mb-5 w-28 h-12 relative">
        <Image
          src={t.logo}
          alt={`${t.name} logo`}
          fill
          className="object-contain"
        />
      </div>

      <p className="text-gray-800 text-[15px] leading-relaxed mb-6">
        “{t.quote}”
      </p>

      <p className="font-semibold text-gray-900 text-sm tracking-wide">
        {t.name}
      </p>
      <p className="text-gray-500 text-xs">{t.title}</p>
    </motion.div>
  );
}
