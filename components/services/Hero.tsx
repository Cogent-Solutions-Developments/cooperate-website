"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, animate, useTime, useTransform } from "framer-motion";
import { AnimatedTooltip } from "./imports/AnimatedTooltip";

// --- TYPES ---
interface OrbitalItem {
  src: string;
  angle: number;
  ring: number;
  size: number;
}

// --- CONSTANTS ---
const RINGS = [
  { radius: 420 }, // Ring 1
  { radius: 500 }, // Ring 2
  { radius: 580 }, // Ring 3
];

const ORBITAL_ITEMS: OrbitalItem[] = [
  { src: "/images/regtech_logo.png", angle: 0, ring: 1, size: 70 },
  { src: "/images/2nd-water-management.png", angle: 45, ring: 2, size: 65 },
  { src: "/images/asset-integrity-mgmt.png", angle: 120, ring: 3, size: 45 },
  { src: "/images/regtech_logo.png", angle: 135, ring: 1, size: 55 },
  { src: "/images/2nd-water-management.png", angle: 200, ring: 2, size: 75 },
  { src: "/images/asset-integrity-mgmt.png", angle: 260, ring: 3, size: 58 },
  { src: "/images/regtech_logo.png", angle: 270, ring: 1, size: 65 },
  { src: "/images/2nd-water-management.png", angle: 320, ring: 2, size: 50 },
  { src: "/images/asset-integrity-mgmt.png", angle: 350, ring: 3, size: 80 },
];

const PEOPLE = [
  { id: 1, name: "Nvidia", designation: "Tech Partner", image: "/images/nvidea.png" },
  { id: 2, name: "Oracle", designation: "Cloud Partner", image: "/images/oracle.png" },
  { id: 3, name: "Coca Cola", designation: "Brand Partner", image: "/images/cocacola.png" },
  { id: 4, name: "BytePlus", designation: "AI Partner", image: "/images/byteplus.jpg" },
  { id: 5, name: "Google", designation: "Search Partner", image: "/images/aramco.jpeg" },
];

const STATS = [
  { number: 500, suffix: "+", label: "Events Delivered" },
  { number: 200, suffix: "+", label: "Industry Partners" },
  { number: 15, suffix: "+", label: "Countries Reached" },
];

const COLOR = "#1D309D";

export default function ServicesHeroDemo() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white hero">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${COLOR} 1px, transparent 0)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Subtle background blobs */}
      <div 
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(29, 48, 157, 0.06) 0%, transparent 70%)`,
        }}
      />
      <div 
        className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(29, 48, 157, 0.07) 0%, transparent 70%)`,
        }}
      />
      <div 
        className="absolute top-[30%] right-[10%] w-[400px] h-[400px] rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(29, 48, 157, 0.04) 0%, transparent 70%)`,
        }}
      />
      <div 
        className="absolute bottom-[20%] left-[5%] w-[350px] h-[350px] rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(29, 48, 157, 0.035) 0%, transparent 70%)`,
        }}
      />

      {/* Main Container */}
      <div className="relative w-full min-h-screen flex items-center justify-center">

        {/* ========= ORBITAL RINGS SYSTEM ========= */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-full h-full max-w-[1200px] max-h-[1200px]">
            {/* Render Rings */}
            {RINGS.map((ring, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: ring.radius * 2,
                  height: ring.radius * 2,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  // UPDATED STYLE FOR "CUT" EFFECT
                  border: `1px solid rgba(29, 48, 157, 0.05)`, 
                  boxShadow: `
                    inset 0px 3px 6px rgba(0,0,0,0.08), 
                    0px 1px 0px rgba(255,255,255,0.8)
                  `,
                }}
              />
            ))}
          </div>
        </div>

        {/* ========= FLOATING ORBITAL ITEMS (OPTIMIZED) ========= */}
        <div className="absolute inset-0 pointer-events-none">
          {ORBITAL_ITEMS.map((item, i) => (
            <OrbitingIcon 
              key={i} 
              item={item} 
              radius={RINGS[item.ring - 1]?.radius || 400} 
            />
          ))}
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 flex flex-row justify-center gap-8 sm:gap-12 md:gap-16"
          >
            {STATS.map((s, i) => (
              <StatCounter
                key={i}
                value={s.number}
                suffix={s.suffix}
                label={s.label}
                delay={0.3 + i * 0.15}
              />
            ))}
          </motion.div>

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
              <AnimatedTooltip items={PEOPLE} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10"
          >
            <button
              className="button relative z-[10000]"
              // FIX 1: Cast style object to CSSProperties to handle custom properties
              style={{ "--clr": "#2f53bd" } as React.CSSProperties}
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

        {/* Edge Fades */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}

// ==============================================
// 1. NEW OPTIMIZED ORBIT COMPONENT WITH RADAR PULSE
// ==============================================

// FIX 2: Replaced 'any' with OrbitalItem interface
function OrbitingIcon({ item, radius }: { item: OrbitalItem; radius: number }) {
  // Use Framer Motion's time hook (returns ms)
  const time = useTime();
  
  // Determine direction: Odd rings clockwise, Even rings counter-clockwise
  const direction = item.ring % 2 === 0 ? 1 : -1;
  const speed = 0.006; // Degrees per millisecond (Adjust for speed)

  // Transform time into a continuous rotation angle (0 -> 360)
  // We add the item.angle as the starting offset
  const rotate = useTransform(time, (t) => {
    const rawAngle = (t * speed * direction) + item.angle;
    return rawAngle; 
  });

  // Calculate X and Y based on the rotation angle using trigonometry
  // This runs on the animation frame, not the React render cycle
  const x = useTransform(rotate, (angle) => {
    return Math.cos((angle * Math.PI) / 180) * radius;
  });
  
  const y = useTransform(rotate, (angle) => {
    return Math.sin((angle * Math.PI) / 180) * radius;
  });

  return (
    <motion.div
      className="absolute cursor-pointer pointer-events-auto"
      style={{
        width: item.size,
        height: item.size,
        // Center the orbit origin
        left: "50%", 
        top: "50%",
        // Apply the calculated X/Y
        x,
        y,
      }}
      // Use standard translate to center the element on its own anchor point
      initial={{ translateX: "-50%", translateY: "-50%" }} 
      whileHover={{ scale: 1.3, zIndex: 50 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Subtle Radar Pulse Ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="absolute rounded-full animate-ping"
          style={{
            width: item.size + 10,
            height: item.size + 10,
            border: "1px solid rgba(29, 48, 157, 0.08)",
            animationDuration: "3s",
          }}
        />
      </div>

      {/* Main Image */}
      <div
        className="relative w-full h-full rounded-full overflow-hidden bg-white z-10"
        style={{
          border: "3px solid white",
          boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
          backgroundImage: `url(${item.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </motion.div>
  );
}

// ==============================================
// 2. STAT COUNTER
// ==============================================
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