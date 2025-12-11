"use client";

import { motion } from "framer-motion";
import Orb from "./imports/Orb";
import { AnimatedTooltip } from "./imports/AnimatedTooltip";

export default function HelpCenterHero() {
  const people = [
    {
      id: 1,
      name: "General",
      designation: "info@cogentsolutions.com",
      image:
        "/images/general.jpeg",
    },
    {
      id: 2,
      name: "Marketing",
      designation: "marketing@cogentsolutions.com",
      image:
        "/images/marketing.jpeg",
    },
    {
      id: 3,
      name: "Sales",
      designation: "sales@cogentsolutions.com",
      image:
        "/images/sales.jpeg",
    },
    {
      id: 4,
      name: "Delegates",
      designation: "delegates@cogentsolutions.com",
      image:
        "/images/delegates.jpeg",
    },
  ];

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">

      {/* === TOP ORB === */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        {/* Mobile version */}
        <div
          className="block lg:hidden w-full h-full relative"
          style={{
            transform: "scale(3)",
            top: "-60%",
            transformOrigin: "center",
          }}
        >
          <Orb hoverIntensity={0.5} rotateOnHover={true} hue={0} forceHoverState={false} />
        </div>
        {/* Desktop version */}
        <div
          className="hidden lg:block w-full h-full relative"
          style={{
            transform: "scale(3)",
            top: "-100%",
            transformOrigin: "center",
          }}
        >
          <Orb hoverIntensity={0.5} rotateOnHover={true} hue={0} forceHoverState={false} />
        </div>
      </div>

      {/* === BOTTOM ORB === */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        {/* Mobile version */}
        <div
          className="block lg:hidden w-full h-full relative"
          style={{
            transform: "scale(2)",
            top: "50%",
            transformOrigin: "center",
          }}
        >
          <Orb hoverIntensity={0.5} rotateOnHover={true} hue={0} forceHoverState={false} />
        </div>
        {/* Desktop version */}
        <div
          className="hidden lg:block w-full h-full relative"
          style={{
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
              We&apos;re Here to, <br />
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