"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Lanyard = dynamic(() => import("./imports/Lanyard"), { ssr: false });

export default function ContactHero() {
  return (
    <section className="relative w-full min-h-screen lg:h-screen bg-white text-black overflow-hidden hero">
      {/* 2-column layout, stacks on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full max-w-7xl mx-auto px-6 lg:px-12 gap-0 lg:gap-8">
        {/* === Left: 3D card placeholder === */}
        <div className="relative order-1 lg:order-1 h-[90vh] lg:h-full w-full z-40"></div>
        
        {/* Lanyard - absolute positioned */}
        <div className="absolute z-500 inset-0 pointer-events-none h-screen lg:h-full">
          <Lanyard position={[0, 0, 11]} gravity={[0, -40, 0]} />
        </div>

        {/* === Text content === */}
        <div className="relative order-2 lg:order-2 flex flex-col items-center lg:items-start justify-start lg:justify-center text-center lg:text-left px-0 pb-0 lg:pb-0">
          <div className="pointer-events-auto">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-tight"
            >
              <span className="text-[#1D309D]">We&apos;re Here to</span>{" "}
              <br className="hidden sm:block" />
              <span className="text-black">Support You</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
              className="mt-5 max-w-xl text-neutral-700 text-base sm:text-lg md:text-[17px] leading-relaxed mx-auto lg:mx-0"
            >
              Tell Us What You&apos;re Looking For Partnerships, Event Collaborations, Speaker Information, Or General Inquiries. Our Team Ensures Your Message Reaches The Right Experts.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}