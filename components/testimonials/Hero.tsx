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
          {/* LINE 1 — What The World + Image */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[12vw] md:text-[5.9vw] font-semibold tracking-tight flex items-center gap-4 whitespace-nowrap leading-[1.1]"
          >
            <span className="text-black">What </span>
            <span className="text-neutral-900">The</span>
            <span className="text-[#2f53bd]">World</span>
          </motion.h1>

          {/* LINE 2 — Says About Us */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-[12vw] md:text-[5.9vw] font-semibold tracking-tight whitespace-nowrap leading-[1.1]"
          >
            <span className="text-black">Says About </span>
            <span className="text-neutral-900">Us</span>
          </motion.h1>

          {/* MINI PARAGRAPH */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-6 text-[4vw] md:text-[1.15vw] text-[#444] font-medium leading-relaxed max-w-3xl"
          >
            Leaders across government, industry, and our global event ecosystem
            including speakers, sponsors, and strategic partners share their
            professional experiences with Cogent Solutions. Here’s what they say
            about working with us.
          </motion.p>

          {/* BUTTON WITH SAME MOTION EFFECT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
            className="mt-6"
          >
            <button
              className="button relative z-[10000]"
              style={{ ["--clr" as any]: "#2f53bd" }}
            >
              <span className="button__icon-wrapper">
                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="button__icon-svg"
                  width="11"
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  ></path>
                </svg>

                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  width="11"
                  xmlns="http://www.w3.org/2000/svg"
                  className="button__icon-svg button__icon-svg--copy"
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              Explore Our Partners
            </button>
          </motion.div>
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
