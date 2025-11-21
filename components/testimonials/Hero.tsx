"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CometCard } from "./imports/comet-card";

export default function Hero() {
  return (
    <section className="w-full bg-white min-h-[calc(100vh-80px)] flex items-center">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-6 gap-10">

        {/* LEFT SIDE */}
        <div className="leading-tight max-w-3xl pt-16 md:pt-24">

          {/* LINE 1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[12vw] md:text-[6.25vw] font-semibold tracking-tight whitespace-nowrap leading-[1.2]"
          >
            <span className="text-black">What </span>
            <span className="text-neutral-900">Our</span>
          </motion.h1>

          {/* LINE 2 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-[12vw] md:text-[6.25vw] font-semibold tracking-tight whitespace-nowrap leading-[0.9]"
          >
            <span className="text-[#2f53bd]">Sponsors </span>
            <span className="text-black">& </span>
            <span className="text-[#2f53bd]">Partners</span>
          </motion.h1>

          {/* LINE 3 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="text-[12vw] md:text-[6.25vw] font-semibold tracking-tight flex items-center gap-4 whitespace-nowrap leading-[1.5]"
          >
            <motion.div
              whileHover={{
                rotate: -3,
                scale: 1.05,
                y: -4,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 12,
              }}
              className="w-[115px] -rotate-2 h-[75px] overflow-hidden rounded-3xl border-[4px] border-[#dcdcdc] bg-white shadow-[0px_10px_35px_rgba(0,0,0,0.08)] cursor-pointer"
            >
              <Image
                src="/images/hand3.webp"
                alt="decor"
                width={1000}
                height={1000}
                className="object-cover w-full h-full rounded-2xl"
              />
            </motion.div>

            <span className="text-[#000000]">Say</span>
          </motion.h1>

          {/* MINI PARAGRAPH */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-6 text-[4vw] md:text-[1.10vw] text-[#444] font-medium leading-relaxed max-w-3xl"
          >
            Leaders across government, industry, and our global event ecosystem including speakers, sponsors, and strategic partners share their professional experiences with Cogent Solutions. Here’s what they say about working with us.
          </motion.p>

        </div>

        {/* RIGHT SIDE — COMET CARD with VIDEO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex-shrink-0 pt-16 md:pt-24"
        >
          <CometCard>
            <button
              type="button"
              className="flex w-72 md:w-80 flex-col items-stretch rounded-[16px] bg-black p-3"
            >
              <div className="mx-2 flex-1">
                <div className="relative mt-2 aspect-[3/4] w-full rounded-[16px] overflow-hidden">

                  {/* ⭐ VIDEO HERE */}
                  <video
                    src="/videos/sponsor-clip.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover rounded-[16px]"
                  />

                </div>
              </div>

              <div className="mt-3 flex items-center justify-between p-4 font-mono text-white">
                <div className="text-xs">Sponsor Insight</div>
                <div className="text-xs opacity-50">AIM Qatar</div>
              </div>
            </button>
          </CometCard>
        </motion.div>

      </div>
    </section>
  );
}
