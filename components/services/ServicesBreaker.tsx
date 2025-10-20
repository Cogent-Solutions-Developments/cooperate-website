"use client";

import { motion } from "framer-motion";
import { MessageSquare, Lightbulb, Repeat, Rocket } from "lucide-react";

const steps = [
  {
    icon: <MessageSquare size={28} />,
    title: "Discovery",
    description:
      "We begin by understanding your business objectives, audience, and goals to ensure your event strategy aligns perfectly with your vision.",
  },
  {
    icon: <Lightbulb size={28} />,
    title: "Concept",
    description:
      "Based on insights, we craft innovative event concepts and engagement strategies that elevate your brand and message.",
  },
  {
    icon: <Repeat size={28} />,
    title: "Refine",
    description:
      "Through collaboration, we refine logistics, content, and experience details to ensure precision, creativity, and flawless execution.",
  },
  {
    icon: <Rocket size={28} />,
    title: "Launch",
    description:
      "We deliver world-class events that exceed expectations — driving measurable outcomes and lasting business relationships.",
  },
];

export default function ProcessBreaker() {
  return (
    <section className="relative py-24 bg-white text-center">
      {/* === Header === */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-6 mb-14"
      >
        <span className="inline-flex items-center gap-2 text-sm text-[#1D309D]/80 font-medium">
          <span className="w-2 h-2 rounded-full bg-[#1D309D]"></span>
          Clear Steps for Better Results
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mt-4">
          Cogent’s Way to <span className="text-[#1D309D]">Deliver Success</span>
        </h2>
        <p className="mt-4 text-neutral-600 text-sm md:text-base leading-relaxed">
          Every collaboration follows a proven step-by-step framework — ensuring precision, creativity, and excellence from ideation to execution.
        </p>
      </motion.div>

      {/* === Steps === */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group p-8 rounded-2xl border border-[#1D309D]/20 hover:border-[#1D309D] transition-all duration-500 bg-white hover:shadow-[0_4px_25px_rgba(29,48,157,0.08)] text-left"
          >
            <div className="mb-5 text-[#1D309D]">{step.icon}</div>
            <h3 className="text-lg md:text-xl font-semibold text-neutral-900 mb-3">
              {step.title}
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Optional Divider / CTA */}
      <div className="mt-14">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-[#1D309D] hover:bg-[#16287A] text-white text-sm font-medium px-6 py-3 rounded-full transition"
        >
          Let’s Build Your Event Strategy
        </a>
      </div>
    </section>
  );
}
