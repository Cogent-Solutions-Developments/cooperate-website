"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import localFont from "next/font/local";

const dhyana = localFont({
  src: "../../public/fonts/dhyana-bold.ttf",
  weight: "700",
  style: "normal",
  variable: "--font-dhyana",
});

export default function TestimonialsHero() {
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-b from-[#1D309D] via-[#1A2A84] to-[#0F1B64]">
      
      {/* === Background giant quote mark (move freely) === */}
      <div
        className={`${dhyana.className} absolute 
          text-white/10 text-[65vw] font-bold select-none leading-none 
          top-[70%] left-[50%] -translate-x-1/2 -translate-y-1/2`}
      >
        ”
      </div>

      {/* === Glass testimonial bar (move freely) === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute z-10 
          top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2
          w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]
          bg-white/5 backdrop-blur-md border border-white/30 rounded-[30px]
          shadow-[0_8px_40px_rgba(0,0,0,0.25)] p-10 md:p-8
          flex flex-col rotate-[-2deg] items-center justify-center text-center"
      >
        <p className="text-center text-white text-lg md:text-xl font-medium leading-relaxed max-w-8xl">
          " A highly motivated group. Champions in the event management arena.
          <br className="hidden md:block" />
          Highly Professional. Very timely. High quality speakers "
        </p>
      </motion.div>

      {/* === Reviewer Info (outside the card) === */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        className="absolute z-20
          top-[68%] left-[50%] -translate-x-1/2
          flex flex-col items-center justify-center text-center"
      >
        {/* Circular logo */}
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/40 mb-4">
          <Image
            src="/images/testimonials/Emirates-Hospitals-Group.webp" // replace with your image path
            alt="Mr. Ramakrishnan Natarajan"
            width={80}
            height={80}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Name + Designation */}
        <div className="text-white text-center">
          <p className="font-semibold text-base md:text-lg">
            Mr. Ramakrishnan Natarajan
          </p>
          <p className="text-white/70 text-sm md:text-base">
            Member – Arab Monetary Fund & Fintech Bazaar
          </p>
        </div>
      </motion.div>

      {/* bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-[180px] bg-gradient-to-t from-[#0F1B64] to-transparent" />
    </section>
  );
}
