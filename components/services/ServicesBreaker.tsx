"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Sparkles, Mic2 } from "lucide-react";

const services = [
  {
    icon: <Briefcase size={22} />,
    title: "Conferences & Exhibitions",
    desc: "Large-scale B2B gatherings engineered to build influence and foster growth.",
  },
  {
    icon: <Users size={22} />,
    title: "Executive Boardrooms",
    desc: "Invitation-only sessions connecting decision-makers in focused environments.",
  },
  {
    icon: <Sparkles size={22} />,
    title: "Experiential Events",
    desc: "Immersive brand experiences merging creativity, strategy, and technology.",
  },
  {
    icon: <Mic2 size={22} />,
    title: "CS Podcasts",
    desc: "Original conversations amplifying leadership, innovation, and insight.",
  },
];

export default function ServicesBreaker() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* === Section Wrapper (split layout) === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-white/70 backdrop-blur-md border border-[#E6E9F2] shadow-[0_8px_40px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col lg:flex-row"
        >
          {/* === Left Content === */}
          <div className="w-full lg:w-1/2 p-10 md:p-14 flex flex-col justify-center bg-gradient-to-br from-white via-[#F9FAFC] to-[#EEF1FB]">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 leading-tight">
              Precision Across{" "}
              <span className="text-[#1D309D]">Every Vertical</span>
            </h2>
            <p className="text-neutral-600 text-base leading-relaxed max-w-md">
              Cogent operates through four distinct divisions — each crafted
              with strategic insight and operational excellence to deliver
              measurable impact for our partners worldwide.
            </p>
          </div>

          {/* === Right Grid of Services === */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 border-t lg:border-t-0 lg:border-l border-[#E6E9F2]">
            {services.map((s, i) => (
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
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* === Subtle CTA === */}
        <div className="text-center mt-10">
          <p className="text-sm text-neutral-500">
            Scroll down to explore each division in depth.
          </p>
        </div>
      </div>
    </section>
  );
}
