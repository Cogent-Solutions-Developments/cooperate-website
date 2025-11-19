"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CometCard } from "./imports/comet-card";

export default function Hero() {
  return (
    <section className="relative w-full bg-white min-h-[calc(100vh-80px)] flex items-center justify-center px-6">
      <div className="text-center leading-tight">

        {/* LINE 1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[10vw] md:text-[6.5vw] font-semibold tracking-tight"
        >
          <span className="text-[#000000]">What</span>{" "}
          <span className="text-neutral-900">Our</span>
        </motion.h1>

        {/* LINE 2 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-[10vw] md:text-[6.5vw] font-semibold tracking-tight"
        >
          <span className="text-neutral-900">Sponsors</span>{" "}
          <span className="text-[#000000]">&</span>{" "}
          <span className="text-neutral-900">Partners</span>
        </motion.h1>

        {/* LINE 3 — SQUARE image + Say */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="text-[10vw] md:text-[6.5vw] font-semibold tracking-tight flex items-center justify-center gap-4"
        >

          {/* SQUARE IMAGE WRAPPER */}
          <div className="w-[100px] h-[75px] overflow-hidden rounded-3xl border-[6px] border-[#d9d9d9]">
            <Image
              src="/images/BI1.jpeg"
              alt="Decor"
              width={2000}
              height={2000}
              className="object-cover rounded-2xl w-full h-full"
            />
          </div>

          <span className="text-[#d3d3d3]">Say</span>
        </motion.h1>

      </div>

      
    </section>
  );
}
