"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HelpCenterHero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-between px-16 py-24 bg-[#F7F8FC] overflow-hidden">

      {/* ==== BACKGROUND SPOTLIGHT ==== */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_70%,rgba(0,0,0,0.06),transparent_60%)]" />

      {/* ==== FLOATING SHAPE RIGHT ==== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="absolute right-24 top-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[380px] h-[380px]"
        >
          {/* Glow behind shape */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2C3ACD]/20 to-transparent blur-3xl" />

          <Image
            src="/images/3d-icons/privacy.png" // replace with any cube
            alt="Help Center Icon"
            width={380}
            height={380}
            className="object-contain relative z-10"
          />
        </motion.div>
      </motion.div>

      {/* ==== LEFT CONTENT ==== */}
      <div className="relative z-10 w-[50%]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[72px] leading-[74px] font-semibold text-[#0C123B] tracking-tight"
        >
          HELP CENTRE
        </motion.h1>

        {/* Blue animated bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "140px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="h-[5px] bg-[#2C3ACD] rounded-full mt-4"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[18px] leading-relaxed text-[#1b1b1b]/75 mt-8 max-w-xl"
        >
          Your central hub for all support guidance, policies, and key information.
          Access everything you need in one structured and transparent space.
        </motion.p>
      </div>
    </section>
  );
}
