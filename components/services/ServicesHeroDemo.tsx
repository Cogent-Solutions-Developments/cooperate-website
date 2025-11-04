"use client";

import React from "react";
import CardSwap, { Card } from "./imports/CardSwap";
import { motion } from "framer-motion";

export default function ServicesHeroDemo() {
  const stats = [
    { number: "500+", label: "Events Delivered" },
    { number: "200+", label: "Industry Partners" },
    { number: "15+", label: "Countries Reached" },
  ];

  return (
    <section
      className="
        relative w-full min-h-screen flex items-center overflow-hidden
        bg-white
        before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_left,rgba(29,48,157,0.12)_0%,transparent_70%)]
        before:w-full before:h-full before:opacity-90 before:pointer-events-none
      "
    >
      {/* === Outer Container (aligned with navbar padding) === */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 grid md:grid-cols-2 items-center justify-between gap-16 md:gap-20 h-full">
        
        {/* === LEFT SIDE TEXT === */}
        <div className="flex flex-col justify-center md:pr-10 text-center md:text-left relative z-10">
          <h1 className="text-5xl md:text-6xl font-semibold text-neutral-900 leading-tight">
            Our Services
          </h1>
          <p className="mt-5 text-base md:text-md text-neutral-600 max-w-xl mx-auto md:mx-0">
            We craft experiences that connect decision-makers, ideas, and stories
            empowering industries to collaborate, innovate, and grow through our global platforms.
          </p>

          {/* === Sleek One-Line Corporate Stats === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="
              mt-12 flex flex-wrap md:flex-nowrap items-center justify-center md:justify-start gap-x-10 gap-y-2
            "
          >
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center md:items-start">
                <span className="text-4xl md:text-5xl font-semibold text-[#1D309D] tracking-tight leading-none">
                  {s.number}
                </span>
                <span className="text-[15px] md:text-base text-neutral-700 font-medium mt-1 whitespace-nowrap">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

             {/* === Button === */}
          <div className="mt-8">
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
              Explore All
            </button>
          </div>


        </div>

        {/* === RIGHT SIDE (Cards) === */}
        <div className="flex justify-end items-center relative z-10">
          <div className="relative w-full flex items-center justify-center md:justify-end">
            <div
              className="relative md:mr-[15%] sm:mr-0 flex items-center justify-center"
              style={{
                height: "400px",
                maxWidth: "520px",
              }}
            >
              <CardSwap
                width={440}
                height={320}
                cardDistance={55}
                verticalDistance={65}
                delay={5000}
                pauseOnHover={false}
              >
                <Card className="flex items-center justify-center text-white text-xl font-semibold bg-[#0A1E75]">
                  <div className="p-8 text-center">
                    <h3 className="text-2xl mb-2">Boardrooms</h3>
                    <p className="text-sm">
                      Exclusive leadership meetings for high-level decision-makers.
                    </p>
                  </div>
                </Card>

                <Card className="flex items-center justify-center text-white text-xl font-semibold bg-[#111827]">
                  <div className="p-8 text-center">
                    <h3 className="text-2xl mb-2">Podcasts</h3>
                    <p className="text-sm">
                      We bring your brand stories to life through engaging conversations and interviews.
                    </p>
                  </div>
                </Card>

                <Card className="flex items-center justify-center text-white text-xl font-semibold bg-[#8d1b3d]">
                  <div className="p-8 text-center">
                    <h3 className="text-2xl mb-2">Conference Series</h3>
                    <p className="text-sm">
                      Global industries converge for collaboration and innovation.
                    </p>
                  </div>
                </Card>

                <Card className="flex items-center justify-center text-white text-xl font-semibold bg-[#04502f]">
                  <div className="p-8 text-center">
                    <h3 className="text-2xl mb-2">Exhibitions</h3>
                    <p className="text-sm">
                      Immersive showcases connecting innovators with investors and leaders.
                    </p>
                  </div>
                </Card>
              </CardSwap>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
