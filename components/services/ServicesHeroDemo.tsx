"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { AnimatedTooltip } from "./imports/AnimatedTooltip";

export default function ServicesHeroDemo() {
  const [angleOffset, setAngleOffset] = useState(0);

  // Animate the angle offset
  useEffect(() => {
    const interval = setInterval(() => {
      setAngleOffset((prev) => prev + 0.15); // Slow rotation
    }, 50);
    return () => clearInterval(interval);
  }, []);

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

  // Orbital items positioned on the outer rings
  const orbitalItems = [
    { src: "/images/regtech_logo.png", angle: 5, ring: 1, size: 70 },
    { src: "/images/2nd-water-management.png", angle: 35, ring: 2, size: 60 },
    { src: "/images/asset-integrity-mgmt.png", angle: 190, ring: 3, size: 45 },
    { src: "/images/regtech_logo.png", angle: 135, ring: 1, size: 55 },
    { src: "/images/2nd-water-management.png", angle: 160, ring: 2, size: 72 },
    { src: "/images/asset-integrity-mgmt.png", angle: 225, ring: 3, size: 58 },
    { src: "/images/regtech_logo.png", angle: 270, ring: 1, size: 62 },
    { src: "/images/2nd-water-management.png", angle: 335, ring: 2, size: 50 },
  ];

  // 3 rings at outer edges - pushed further out
  const rings = [
    { radius: 420 },  // Ring 1
    { radius: 500 },  // Ring 2
    { radius: 580 },  // Ring 3
  ];

  const color = "#1D309D";

  const getItemPosition = (angle: number, ringIndex: number) => {
    const ring = rings[ringIndex - 1] || rings[0];
    // Add angleOffset for subtle movement, alternate direction per ring
    const direction = ringIndex % 2 === 0 ? 1 : -1;
    const animatedAngle = angle + (angleOffset * direction);
    const angleRad = (animatedAngle * Math.PI) / 180;
    const x = Math.cos(angleRad) * ring.radius;
    const y = Math.sin(angleRad) * ring.radius;
    return { x, y };
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${color} 1px, transparent 0)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Main Container - Full screen centered */}
      <div className="relative w-full min-h-screen flex items-center justify-center">

        {/* ========= ORBITAL RINGS SYSTEM ========= */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

          {/* Rings Container with fade mask */}
          <div
            className="relative"
            style={{
              width: "100%",
              height: "100%",
              maxWidth: 1200,
              maxHeight: 1200,
            }}
          >
            {/* Render all rings */}
            {rings.map((ring, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: ring.radius * 2,
                  height: ring.radius * 2,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  border: `1px solid ${color}`,
                  opacity: 0.15,
                }}
              />
            ))}

            {/* Animated glow sweep */}
            <div
              className="absolute rounded-full animate-spin"
              style={{
                width: rings[1].radius * 2,
                height: rings[1].radius * 2,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: `conic-gradient(from 0deg, transparent 0deg, rgba(29,48,157,0.1) 60deg, transparent 120deg)`,
                filter: "blur(40px)",
                animationDuration: "25s",
              }}
            />
          </div>
        </div>

        {/* ========= FLOATING ORBITAL ITEMS ========= */}
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            {orbitalItems.map((item, i) => {
              const pos = getItemPosition(item.angle, item.ring);

              return (
                <motion.div
                  key={i}
                  className="absolute cursor-pointer"
                  style={{
                    width: item.size,
                    height: item.size,
                    left: `calc(50% + ${pos.x}px)`,
                    top: `calc(50% + ${pos.y}px)`,
                    x: "-50%",
                    y: "-50%",
                    zIndex: 20,
                  }}
                  whileHover={{ 
                    scale: 1.3,
                    zIndex: 50,
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }}
                >
                  <div
                    className="w-full h-full rounded-full overflow-hidden"
                    style={{
                      border: "3px solid white",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                      backgroundColor: "#fff",
                      backgroundImage: `url(${item.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ========= CENTER CONTENT ========= */}
        <div className="relative z-30 flex flex-col items-center text-center px-4 max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-semibold text-neutral-900 leading-[1.1]"
          >
            What We Deliver
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-base sm:text-md text-neutral-600 max-w-xl"
          >
            We Craft High Impact Experiences That Connect Decision Makers,
            Ideas, and Industries Empowering Organizations to Collaborate,
            Innovate, and Grow.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 flex flex-row justify-center gap-8 sm:gap-12 md:gap-16"
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-5"
          >
            <p className="text-xs text-neutral-700 font-semibold leading-snug text-center sm:text-left">
              We are Trusted by <br />
              <span className="text-[#1D309D]">Industry Leaders</span>
            </p>
            <div className="hidden sm:block h-8 w-px bg-neutral-300" />
            <div className="flex -space-x-3">
              <AnimatedTooltip items={people} />
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10"
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
              Explore Our Events
            </button>
          </motion.div>
        </div>

        {/* Edge fades */}
        <div
          className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, white 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background: "linear-gradient(to top, white 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute top-0 bottom-0 left-0 w-32 pointer-events-none"
          style={{
            background: "linear-gradient(to right, white 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute top-0 bottom-0 right-0 w-32 pointer-events-none"
          style={{
            background: "linear-gradient(to left, white 0%, transparent 100%)",
          }}
        />
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
    <div className="flex flex-col items-center">
      <span className="text-3xl sm:text-4xl md:text-4xl font-semibold text-[#1D309D] tracking-tight leading-none">
        {display}
        {suffix}
      </span>
      <span className="text-xs sm:text-xs text-neutral-600 font-medium mt-1.5 whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}