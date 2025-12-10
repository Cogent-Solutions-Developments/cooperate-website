"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { AnimatedTooltip } from "./imports/AnimatedTooltip";
import Antigravity from "./imports/Antigravity";
import Box from "./imports/Orbits";

export default function ServicesHeroDemo() {
  const stats = [
    { number: 500, suffix: "+", label: "Events Delivered" },
    { number: 200, suffix: "+", label: "Industry Partners" },
    { number: 15, suffix: "+", label: "Countries Reached" },
  ];

  const people = [
    {
      id: 1,
      name: "",
      designation: "",
      image: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/02-nvidia-logo-color-grn-500x200-4c25-p@2x.png",
    },
    {
      id: 2,
      name: "",
      designation: "",
      image: "https://images.seeklogo.com/logo-png/10/1/oracle-logo-png_seeklogo-103836.png",
    },
    {
      id: 3,
      name: "",
      designation: "",
      image: "https://toppng.com/uploads/preview/coca-cola-logo-transparent-png-11659434553ffz5jgamkh.png",
    },
    {
      id: 4,
      name: "",
      designation: "",
      image: "https://i.tracxn.com/logo/company/byteplus.com_Logo_ee8544f1-f730-42da-bf47-a7b712bd39bb.jpg",
    },
    {
      id: 5,
      name: "",
      designation: "",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5jqY91GEsxQe-NWpFY7EcSO4NyackqgPcw&s",
    },
  ];

  // Orbital items - mix of images and emojis
  const orbitalItems = [
    "/images/regtech_logo.png",
    "🎯",
    "/images/2nd-water-management.png",
    "🚀",
    "/images/asset-integrity-mgmt.png",
    "✨",
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1D309D 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Main Wrapper */}
      <div className="relative z-10 w-full min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-0">

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

            {/* === LEFT SIDE: Text Content === */}
            <div className="flex-1 lg:max-w-xl text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl font-semibold text-neutral-900 leading-[1.1]"
              >
                What We Deliver
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-6 text-base sm:text-md text-neutral-600 max-w-lg mx-auto lg:mx-0"
              >
                We Craft High Impact Experiences That Connect Decision Makers,
                Ideas, and Industries Empowering Organizations to Collaborate,
                Innovate, and Grow.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-10 flex flex-row justify-center lg:justify-start gap-8 sm:gap-10 md:gap-12"
              >
                {stats.map((s, i) => (
                  <StatCounter
                    key={i}
                    value={s.number}
                    suffix={s.suffix}
                    label={s.label}
                    delay={0.3 + i * 0.15}
                  />
                ))}
              </motion.div>

              {/* Trusted By */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-5"
              >
                <p className="text-sm text-neutral-700 font-semibold leading-snug text-center sm:text-left">
                  We are Trusted by <br />
                  <span className="text-[#1D309D]">Industry Leaders</span>
                </p>
                <div className="hidden sm:block h-8 w-px bg-neutral-300" />
                <div className="flex -space-x-3">
                  <AnimatedTooltip items={people} />
                </div>
              </motion.div>
            </div>

            {/* === RIGHT SIDE: Card with Antigravity + Orbital === */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex-1 flex justify-center lg:justify-end"
            >
              <div
                className="
      relative
      w-full max-w-[500px]
      h-[520px] sm:h-[560px] lg:h-[500px]
      rounded-[32px]
      overflow-hidden
      bg-white
    "
                style={{
                  background:
                    "linear-gradient(180deg, #ffffff 0%, #fafafa 60%, #f5f5f5 100%)",
                  border: "1px solid rgba(0,0,0,0.05)",

                }}
              >

                {/* Clerk-style top glow arc */}
                <div
                  className="absolute top-0 left-0 w-full h-[160px]"
                  style={{
                    background:
                      "radial-gradient(circle at 50% -40px, rgba(255,255,255,0.9), rgba(255,255,255,0.2), transparent 70%)",
                  }}
                />

                {/* Hairline inner border for the subtle depth */}
                <div className="absolute inset-0 rounded-[32px] border border-white/70 " />

                {/* === Antigravity Background (unchanged) === */}
                {/* <div className="absolute inset-0 opacity-[0.2]">
      <Antigravity
        count={600}
        magnetRadius={4}
        ringRadius={8}
        waveSpeed={0.3}
        waveAmplitude={0.8}
        particleSize={0.5}
        lerpSpeed={0.04}
        color={"#1D309D"}
        autoAnimate={true}
        particleVariance={2}
        particleShape={"capsule"}
      />
    </div> */}

                {/* === Orbital Rings Content (unchanged) === */}
                <div className="absolute inset-0 flex items-start justify-center z-10">
                  <Box
                    size={1.5}
                    color="#1D309D"
                    items={orbitalItems}
                  />
                </div>
                {/* CTA BELOW ORBIT */}
                <div className="absolute bottom-8 left-0 right-0 z-20 flex flex-col items-center px-6 text-center">
                  <p className="text-[13px] text-neutral-600 font-medium mb-3">
                    Powering Global Conferences & Industry Impact
                  </p>

                  <button
                    className="
      px-6 py-2.5 rounded-full 
      bg-[#1D309D] text-white font-medium text-sm
      shadow-md shadow-[#1D309D]/20
      transition-all duration-300
      hover:bg-[#16226e]
      hover:shadow-lg hover:shadow-[#1D309D]/30
      active:scale-95
    "
                  >
                    Learn More
                  </button>
                </div>


                {/* Bottom fade like Clerk UI */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-32 "
                  style={{
                    background:
                      "linear-gradient(to top, rgba(255,255,255,0.9), rgba(255,255,255,0))",
                  }}
                />
              </div>
            </motion.div>


          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ STAT COUNTER ============ */
function StatCounter({
  value,
  suffix,
  label,
  delay = 0,
}: {
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}) {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      delay,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return controls.stop;
  }, [count, value, delay]);

  return (
    <div className="flex flex-col items-center lg:items-start">
      <span className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-semibold text-[#1D309D] tracking-tight leading-none">
        {display}
        {suffix}
      </span>
      <span className="text-xs sm:text-sm text-neutral-600 font-medium mt-1.5 whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}