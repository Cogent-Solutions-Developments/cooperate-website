"use client";

import { motion } from "framer-motion";
import Orb from "./imports/Orb";
import Link from "next/link";

export default function HelpCenterHero() {
  const NAV_HEIGHT = 88;

  return (
    <section
      className="relative w-full bg-white overflow-hidden"
      style={{ ["--nav-h" as any]: `${NAV_HEIGHT}px` }}
    >
      {/* === ORB ABOVE BG BUT BEHIND CONTENT === */}

      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
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

      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
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
          <h1 className="relative text-4xl sm:text-7xl font-semibold text-neutral-900 leading-tight">
            Policy, FAQ & Support Centre
          </h1>

          {/* === SUBTEXT === */}
          <p className="relative mx-auto max-w-3xl text-neutral-600 text-[16px] leading-relaxed">
            Your Central Hub for Documentation, Policies, FAQs and Essential
            Support Resources Designed to Offer Clarity, Transparency and Smooth
            Navigation.
          </p>

          {/* === SEARCH BAR === */}
          <div className="relative w-full flex justify-center mt-4 mb-30 px-4">
            <div className="w-full max-w-xl">
              <input
                type="text"
                placeholder="Search resources, policies, FAQs..."
                className="
                  w-full px-5 py-3 rounded-4xl border border-neutral-300
                  bg-white text-neutral-800 shadow-sm placeholder-neutral-400
                  focus:outline-none focus:ring-1 focus:ring-[#2f53bd]/10
                  focus:border-[#a9c8e8] transition-all duration-200
                "
              />
            </div>
          </div>
          

          {/* === FOUR CARDS (single row) — TALL + STICK TO BOTTOM === */}
          <div className="absolute bottom-0 w-full flex justify-center px-4 z-10 mb-0">
            <div className="grid grid-cols-4 w-full max-w-5xl">
                
              {[
                { title: "FAQ", link: "/help-centre/faq" },
                {
                  title: "Privacy Policy",
                  link: "/help-centre/privacy-policy",
                },
                { title: "Terms & Conditions", link: "/help-centre/terms" },
                {
                  title: "Payment Policy",
                  link: "/help-centre/payment-policy",
                },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="
          h-[150px]                 /* ⬅ taller height */
          p-6
          border border-neutral-200 
          bg-white shadow-sm
          hover:shadow-md hover:border-neutral-300 
          transition-all duration-300
          flex flex-col justify-center
        "
                >
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {item.title}
                  </h3>

                  <p className="text-neutral-500 text-sm mt-1">
                    View details & info
                  </p>

                  <span
                    className="
            text-[#2f53bd] text-sm mt-2 inline-block
            opacity-0 group-hover:opacity-100 transition-all
          "
                  >
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
