"use client";

import { motion } from "framer-motion";
import Orb from "./imports/Orb";
import Link from "next/link";

export default function HelpCenterHero() {
  const NAV_HEIGHT = 88;

  return (
    <section
      className="relative w-full bg-black overflow-hidden"
      style={{ ["--nav-h" as any]: `${NAV_HEIGHT}px` }}
    >
       {/* === ORB ABOVE BG BUT BEHIND CONTENT === */}

      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            transform: "scale(3)", // ⬅ bigger orb
            top: "-100%",
            transformOrigin: "center", // keep it centered
          }}
        >
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
        </div>
      </div>

      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            transform: "scale(1.8)", // ⬅ bigger orb
            top: "70%",
            transformOrigin: "center", // keep it centered
          }}
        >
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
        </div>
      </div>

      {/* Spacer for navbar */}
      <div className="h-[var(--nav-h)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* FULL CENTERING */}
        <div
          className="
            min-h-[calc(100vh-var(--nav-h))]
            flex flex-col items-center justify-center text-center gap-4
          "
        >
          {/* === TITLE === */}
          <h1 className="relative text-4xl sm:text-7xl font-semibold text-white/90 leading-tight">
            Policy, FAQ & Support Centre
          </h1>

          {/* === SUBTEXT === */}
          <p className="relative mx-auto max-w-3xl text-white/80 text-[16px] leading-relaxed">
            Your Central Hub for Documentation, Policies, FAQs and Essential
            Support Resources Designed to Offer Clarity, Transparency and Smooth
            Navigation.
          </p>
<button className="glass-button">
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
      className="button__icon-svg button__icon-svg--copy"
    >
      <path
        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
        fill="currentColor"
      ></path>
    </svg>
  </span>
  Contact Support
</button>

          

          

        
        </div>
      </div>
    </section>
  );
}
