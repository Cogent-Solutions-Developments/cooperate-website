"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, Users, Sparkles, Mic2 } from "lucide-react";

const serviceCards = [
  {
    icon: <Briefcase size={18} />,
    title: "Conferences & Exhibitions",
    subtitle: "Global Platforms",
  },
  {
    icon: <Users size={18} />,
    title: "Executive Boardrooms",
    subtitle: "Exclusive Connections",
  },
  {
    icon: <Sparkles size={18} />,
    title: "Experiential Events",
    subtitle: "Immersive Experiences",
  },
  {
    icon: <Mic2 size={18} />,
    title: "CS Podcasts",
    subtitle: "Voices of Leadership",
  },
];

export default function ServicesBreaker() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-[#F8F9FB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Split container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-white/70 backdrop-blur-md border border-[#E6E9F2] shadow-[0_8px_40px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col lg:flex-row relative"
        >
          {/* === LEFT SIDE === */}
          <div className="relative w-full lg:w-1/2 p-10 md:p-14 bg-gradient-to-br from-white via-[#F9FAFC] to-[#EEF1FB] flex flex-col justify-start">
            {/* Top Header */}
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3 leading-tight">
                Precision Across{" "}
                <span className="text-[#1D309D]">Every Vertical</span>
              </h2>
              <p className="text-neutral-600 text-base leading-relaxed max-w-md">
                Cogent operates through four distinct divisions — each crafted
                with strategic insight and operational excellence to deliver
                measurable impact for our partners worldwide.
              </p>
            </div>

            {/* Mini stacked cards */}
            <div className="flex flex-col gap-3 mt-35 relative z-10">
            </div>

            {/* Box Image at bottom-left */}
            <div className="absolute lg:bottom-[-110px] lg:left-[110px] bottom-[-50px] left-25 lg:scale-100 scale-125 opacity-90 pointer-events-none select-none">
              <Image
                src="/images/services/box.png" // replace with your actual box path
                alt="Cogent Box"
                width={380}
                height={260}
                className="object-contain"
              />
            </div>
          </div>

          {/* === RIGHT SIDE (Unchanged) === */}
          <div className="w-full lg:w-1/2 z-40 grid bg-white grid-cols-1 sm:grid-cols-2 border-t lg:border-t-0 lg:border-l border-[#E6E9F2]">
            {serviceCards.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group flex flex-col justify-center p-8 border-b sm:border-b-0 sm:border-r border-[#E6E9F2] hover:bg-[#F5F7FF]/60 transition-all duration-300"
              >
                <div className="text-[#1D309D] mb-4">{s.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold text-neutral-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {s.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
