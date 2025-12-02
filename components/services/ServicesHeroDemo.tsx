"use client";

import React, { useState, useEffect } from "react";
import CardSwap, { Card } from "./imports/CardSwap";
import { motion, useMotionValue, animate } from "framer-motion";
import { AnimatedTooltip } from "./imports/AnimatedTooltip";

export default function ServicesHeroDemo() {
  const [cardConfig, setCardConfig] = useState({
    width: 420,
    height: 310,
    cardDistance: 50,
    verticalDistance: 60,
  });

  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth;

      if (w >= 1280) {
        setCardConfig({ width: 420, height: 310, cardDistance: 50, verticalDistance: 60 });
      } else if (w >= 1024) {
        setCardConfig({ width: 360, height: 270, cardDistance: 44, verticalDistance: 54 });
      } else if (w >= 768) {
        setCardConfig({ width: 320, height: 240, cardDistance: 38, verticalDistance: 48 });
      } else if (w >= 640) {
        setCardConfig({ width: 280, height: 210, cardDistance: 32, verticalDistance: 42 });
      } else {
        setCardConfig({ width: 240, height: 180, cardDistance: 26, verticalDistance: 36 });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

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
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const cardImages = [
    { src: "/images/explore/hero/h4.jpeg", alt: "Boardrooms" },
    { src: "/images/explore/hero/h3.jpeg", alt: "Podcasts" },
    { src: "/images/explore/hero/h6.png", alt: "Conference Series" },
    { src: "/images/explore/hero/h5.webp", alt: "Exhibitions" },
  ];

  /*
    Container sizing:
    - Width needs to be cardWidth + (cardDistance * 2) to align last card with right edge
    - This accounts for the visual centering of the card stack
  */
  const halfWidth = cardConfig.width / 2;
  const halfHeight = cardConfig.height / 2;
  const stackOffsetX = cardConfig.cardDistance * 3;
  const stackOffsetY = cardConfig.verticalDistance * 3;

  // Container width = cardWidth + cardDistance * 1.6 (empirically determined to align correctly)
  const totalWidth = cardConfig.width + Math.round(cardConfig.cardDistance * 1.6);
  const totalHeight = cardConfig.height + stackOffsetY;

  const centerOffsetX = halfWidth;
  const centerOffsetY = halfHeight + stackOffsetY;

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at left, rgba(29,48,157,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Main Wrapper */}
      <div className="relative z-10 w-full min-h-screen flex items-center">
        {/* Container with equal padding */}
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-16 md:py-0">
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-8">
            
            {/* ===== LEFT: Content ===== */}
            <div className="order-2 lg:order-1 text-center lg:text-left lg:max-w-xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-neutral-900 leading-[1.1]"
              >
                What We Deliver
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-5 lg:mt-6 text-base lg:text-lg text-neutral-600 max-w-lg mx-auto lg:mx-0"
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
                className="mt-10 lg:mt-12 flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-10"
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

              {/* Trusted By - Desktop Only */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                className="hidden lg:flex mt-10 items-center gap-5"
              >
                <p className="text-sm text-neutral-700 font-semibold leading-snug">
                  We are Trusted by <br />
                  <span className="text-[#1D309D]">Industry Leaders</span>
                </p>
                <div className="h-8 w-px bg-neutral-300" />
                <div className="flex -space-x-3">
                  <AnimatedTooltip items={people} />
                </div>
              </motion.div>
            </div>

            {/* ===== RIGHT: Cards ===== */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Container sized for proper alignment */}
                <div
                  className="relative"
                  style={{
                    width: totalWidth,
                    height: totalHeight,
                  }}
                >
                  <div
                    className="absolute"
                    style={{
                      left: centerOffsetX,
                      top: centerOffsetY,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <CardSwap
                      width={cardConfig.width}
                      height={cardConfig.height}
                      cardDistance={cardConfig.cardDistance}
                      verticalDistance={cardConfig.verticalDistance}
                      delay={5000}
                      pauseOnHover={false}
                    >
                      {cardImages.map((img, i) => (
                        <Card
                          key={i}
                          className="flex flex-col items-center justify-end text-white text-xl font-semibold overflow-hidden"
                        >
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="absolute inset-0 w-full h-full object-cover opacity-80"
                          />
                        </Card>
                      ))}
                    </CardSwap>
                  </div>
                </div>
              </motion.div>
            </div>

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
      <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1D309D] tracking-tight leading-none">
        {display}
        {suffix}
      </span>
      <span className="text-sm lg:text-base text-neutral-600 font-medium mt-1.5">
        {label}
      </span>
    </div>
  );
}