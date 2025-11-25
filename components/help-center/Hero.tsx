"use client";

import { motion } from "framer-motion";
import Orb from "./imports/Orb";
import Link from "next/link";
import { AnimatedTooltip } from "./imports/AnimatedTooltip";


export default function HelpCenterHero() {
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
            flex flex-col items-center justify-center text-center gap-3
          "
        >
               {/* === NEW Trusted By Row === */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="
              mt-8 flex flex-col md:flex-row
              items-center justify-center md:justify-start
              gap-4 md:gap-6
            "
          >
            <p className="text-sm md:text-base text-white/90 font-semibold leading-snug text-center md:text-left">
              We're Here to <br />
              <span className="text-[#f4f4f4]">Help You</span>
            </p>

            <div className="hidden md:block h-5 w-px bg-gray-300/60" />

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
