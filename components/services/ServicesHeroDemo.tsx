"use client";

import React, { useState, useEffect } from "react";
import CardSwap, { Card } from "./imports/CardSwap";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { AnimatedTooltip } from "./imports/AnimatedTooltip";

export default function ServicesHeroDemo() {
  const stats = [
    { number: 500, suffix: "+", label: "Events Delivered" },
    { number: 200, suffix: "+", label: "Industry Partners" },
    { number: 15, suffix: "+", label: "Countries Reached" },
  ];

  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section
      className="
    relative w-full min-h-screen flex 
    items-start md:items-center
    pt-35 md:pt-0
    overflow-hidden bg-white
    before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_left,rgba(29,48,157,0.12)_0%,transparent_70%)]
    before:w-full before:h-full before:opacity-90 before:pointer-events-none
  "
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-8 grid md:grid-cols-2 items-center justify-between gap-16 md:gap-20 h-full">
        {/* === LEFT SIDE === */}
        <div className="flex flex-col justify-center md:pr-10 text-center md:text-left relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-semibold text-neutral-900 leading-tight whitespace-nowrap"
          >
            What We Deliver
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-5 text-base md:text-md text-neutral-600 max-w-xl mx-auto md:mx-0"
          >
            We Craft High Impact Experiences That Connect Decision Makers,
            Ideas, and Industries Empowering Organizations to Collaborate,
            Innovate, and Grow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="
              mt-12
              flex
              flex-row
              items-center
              justify-center md:justify-start
              gap-x-10
              whitespace-nowrap
              overflow-x-auto
              no-scrollbar
            "
          >
            {stats.map((s, i) => (
              <StatCounter
                key={i}
                value={s.number}
                suffix={s.suffix}
                label={s.label}
                delay={i * 0.3}
              />
            ))}
          </motion.div>

          {/* === Trusted By Row — HIDDEN ON MOBILE === */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="
              hidden md:flex
              mt-8 flex-col md:flex-row
              items-center justify-center md:justify-start
              gap-4 md:gap-4
            "
          >
            <p className="text-sm text-neutral-700 font-semibold leading-snug text-center md:text-left">
              We are Trusted by <br />
              <span className="text-[#1D309D]">Industry Leaders</span>
            </p>

            <div className="hidden md:block h-5 w-px bg-gray-300/60" />

            <div className="flex -space-x-4">
              <AnimatedTooltip items={people} />
            </div>
          </motion.div>
        </div>

        {/* === RIGHT SIDE (Cards) — Visible on all screens now === */}
        <div className="flex justify-end items-center relative z-10">
          <div className="relative w-full flex items-center justify-center md:justify-end">
            <div
              className="relative lg:mr-0 mr-0 lg:scale-100 scale-[1.75] lg:mt-0 mt-[-70%] flex items-center justify-center"
              style={{
                height: "400px",
                maxWidth: "520px",
              }}
            >
              <CardSwap
                width={460}
                height={340}
                cardDistance={55}
                verticalDistance={65}
                delay={5000}
                pauseOnHover={false}
              >
                <Card className="flex flex-col items-center justify-end text-white text-xl font-semibold overflow-hidden">
                  <img
                    src="/images/explore/hero/h4.jpeg"
                    alt="Boardrooms"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />
                </Card>

                <Card className="flex flex-col items-center justify-end text-white text-xl font-semibold overflow-hidden">
                  <img
                    src="/images/explore/hero/h3.jpeg"
                    alt="Podcasts"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />
                </Card>

                <Card className="flex flex-col items-center justify-end text-white text-xl font-semibold overflow-hidden">
                  <img
                    src="/images/explore/hero/h6.png"
                    alt="Conference Series"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />
                </Card>

                <Card className="flex flex-col items-center justify-end text-white text-xl font-semibold overflow-hidden">
                  <img
                    src="/images/explore/hero/h5.webp"
                    alt="Exhibitions"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />
                </Card>
              </CardSwap>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* === Counter Component === */
function StatCounter({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      delay: delay ?? 0,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return controls.stop;
  }, [count, value, delay]);

  return (
    <motion.div
      className="flex flex-col items-center md:items-start"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <span className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#1D309D] tracking-tight leading-none">
        {display}
        {suffix}
      </span>

      <span className="text-xs sm:text-sm md:text-base text-neutral-700 font-medium mt-1 whitespace-nowrap">
        {label}
      </span>
    </motion.div>
  );
}
