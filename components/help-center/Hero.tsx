"use client";

import { motion } from "framer-motion";
import Orb from "./imports/Orb";
import Link from "next/link";
import { AnimatedTooltip } from "./imports/AnimatedTooltip";

export default function HelpCenterHero() {
  const people = [
    {
      id: 1,
      name: "General",
      designation: "info@cogentsolutions.com",
      image:
        "https://plus.unsplash.com/premium_photo-1681487874673-976050b1dcab?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Marketing",
      designation: "marketing@cogentsolutions.com",
      image:
        "https://plus.unsplash.com/premium_photo-1681487872232-fa622a6dd59e?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Sales",
      designation: "sales@cogentsolutions.com",
      image:
        "https://plus.unsplash.com/premium_photo-1681488188364-20b8f14db588?q=80&w=1542&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Delegates",
      designation: "delegates@cogentsolutions.com",
      image:
        "https://plus.unsplash.com/premium_photo-1726797756953-30e3edeea563?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

  ];

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">

      {/* === ORBS === */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            transform: "scale(3)",
            top: "-100%",
            transformOrigin: "center",
          }}
        >
          <Orb hoverIntensity={0.5} rotateOnHover={true} hue={0} forceHoverState={false} />
        </div>
      </div>

      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            transform: "scale(1.8)",
            top: "70%",
            transformOrigin: "center",
          }}
        >
          <Orb hoverIntensity={0.5} rotateOnHover={true} hue={0} forceHoverState={false} />
        </div>
      </div>

      {/* === CONTENT WRAPPER === */}
      <div className="relative mt-8 z-10 mx-auto max-w-6xl px-6 h-full">
        <div
          className="
            h-full
            flex flex-col items-center justify-center
            text-center gap-3
          "
        >

          {/* === SUPPORT LINE + AVATARS === */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="
              flex flex-col md:flex-row
              items-center justify-center
              gap-4 md:gap-6
            "
          >
            <p className="text-sm md:text-base text-white/90 font-semibold leading-snug text-center md:text-left">
              We're Here to, <br />
              <span className="text-[#f4f4f4]">Guide You Through</span>
            </p>

            <div className="hidden md:block h-6 w-px bg-gray-300/60" />

            <div className="flex -space-x-4">
              <AnimatedTooltip items={people} />
            </div>
          </motion.div>

          {/* === TITLE === */}
          <h1 className="relative text-4xl sm:text-[80px] font-semibold text-white/90 leading-tight">
            Policy, FAQ & Support Centre
          </h1>

          {/* === SUBTEXT === */}
          <p className="relative mt-5 mx-auto max-w-3xl text-white/80 text-[16px] leading-relaxed">
            Your Central Hub for Documentation, Policies, FAQs and Essential
            Support Resources Designed to Offer Clarity, Transparency and Smooth
            Navigation.
          </p>

          {/* === GLASS BUTTON === */}
          <button className="glass-button mt-4">
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
