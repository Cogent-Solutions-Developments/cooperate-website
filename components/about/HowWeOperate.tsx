"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function HowWeOpe() {
  const steps = [
    {
      num: "01",
      desc:
        "Conducting extensive research and developing tailored content to ensure that your value message resonates with your target audience.",
    },
    {
      num: "02",
      desc:
        "Thoroughly researching and identifying prospects that align with your products and services.",
    },
    {
      num: "03",
      desc:
        "Pre-qualifying attendees based on your specific requirements to ensure relevance and fit.",
    },
    {
      num: "04",
      desc:
        "Confirming the attendance of all pre-qualified individuals using your defined parameters.",
    },
    {
      num: "05",
      desc:
        "Organizing your event for the right pre-qualified audience, ensuring maximum impact.",
    },
  ];

  const [active, setActive] = useState(2);
  const [hover, setHover] = useState(-1);

  return (
    <section className="w-full bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* ========= TITLE ========= */}
        <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 text-center tracking-tight">
          How We Operate
        </h2>

        <p className="text-lg md:text-xl text-neutral-600 text-center mt-6 max-w-3xl mx-auto leading-relaxed">
          A streamlined five-step operational framework designed for maximum impact.
        </p>

        {/* ========= TIMELINE ========= */}
        <div className="relative mt-24">

          {/* LEFT fade */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-[10px] bg-gradient-to-r from-white to-transparent z-30 pointer-events-none" />
          {/* RIGHT fade */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-[10px] bg-gradient-to-l from-white to-transparent z-30 pointer-events-none" />

          {/* BASE TRACK */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[4px] bg-neutral-200 rounded-full" />

          {/* FLUID BAR (UNCHANGED) */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[10px] rounded-full overflow-hidden">
            <motion.div
              animate={{ x: ["-10%", "10%", "-10%"] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 top-0 w-[120%] h-full 
                bg-gradient-to-r from-[#172573] via-[#3A4FBF] to-[#7AA2FF]
                opacity-[0.65] blur-[12px]"
            />
            <motion.div
              animate={{ x: ["5%", "-5%", "5%"] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 top-0 w-[130%] h-full 
                bg-gradient-to-r from-[#7AA2FF] via-[#3A4FBF] to-[#172573]
                opacity-[0.55] blur-[14px]"
            />
            <motion.div
              animate={{ x: ["-15%", "15%", "-15%"] }}
              transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 top-0 w-[140%] h-full 
                bg-gradient-to-r from-[#3A4FBF] via-[#172573] to-[#7AA2FF]
                opacity-[0.50] blur-[16px]"
            />
            <motion.div
              animate={{ x: ["8%", "-8%", "8%"] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 top-0 w-[160%] h-full 
                bg-gradient-to-r from-[#172573] via-[#3A4FBF] to-[#7AA2FF]
                opacity-[0.45] blur-[18px]"
            />

            {/* END FADES */}
            <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-20" />
            <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-20" />
          </div>

          {/* ========= STEPS ========= */}
          <div className="grid grid-cols-5 relative">
            {steps.map((step, i) => {

              // distance from the middle (index 2)
              const dist = Math.abs(i - 2);

              // new base sizes (bigger)
              const baseSize = 80 - dist * 12; // 80 → 68 → 56

              // hover enlargement
              const hoverBoost = hover === i ? 6 : 0;
              const activeBoost = active === i ? 4 : 0;

              const finalSize = baseSize + hoverBoost + activeBoost;

              return (
                <div
                  key={i}
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(-1)}
                  onClick={() => setActive(i)}
                  className="flex flex-col items-center text-center relative cursor-pointer select-none"
                >
                  <div
                    className="
                      absolute top-1/2 -translate-y-1/2
                      bg-white border rounded-full flex items-center justify-center
                      text-neutral-800 font-semibold
                    "
                    style={{
                      width: `${finalSize}px`,
                      height: `${finalSize}px`,
                      fontSize: `${20 - dist * 2}px`,
                      borderColor:
                        active === i ? "#172573" : "rgb(209 213 219)",
                      color: active === i ? "#172573" : "rgb(87 87 87)",
                      transition: "all 0.25s ease"
                    }}
                  >
                    {step.num}
                  </div>

                  <p className="text-neutral-800 font-medium text-sm mt-28">
                    Step {step.num}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========= DESCRIPTION ========= */}
        <motion.p
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-20 max-w-3xl mx-auto text-center text-neutral-700 text-[17px] leading-relaxed"
        >
          {steps[active].desc}
        </motion.p>
      </div>
    </section>
  );
}
