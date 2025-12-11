"use client";

import React, { useRef, useEffect, useState } from "react";
import LaserFlow from "./imports/LaserFlow";
import Image from "next/image";

export default function ExploreHero3() {
  const revealImgRef = useRef<HTMLImageElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  return (
    <section
      className="relative h-[100dvh] w-full overflow-hidden bg-black text-white"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (revealImgRef.current) {
          revealImgRef.current.style.setProperty("--mx", `${x}px`);
          revealImgRef.current.style.setProperty("--my", `${y}px`);
        }
      }}
      onMouseLeave={() => {
        if (revealImgRef.current) {
          revealImgRef.current.style.setProperty("--mx", "-9999px");
          revealImgRef.current.style.setProperty("--my", "-9999px");
        }
      }}
    >
      {/* === Laser Shader Background === */}
      <LaserFlow
        className={isMobile ? "scale-x-[2] scale-y-[1.5] origin-center" : ""}
        horizontalBeamOffset={0}
        verticalBeamOffset={isMobile ? 0.033 : -0.05}
        color="#AED3FF"
        horizontalSizing={isMobile ? 0.75 : 2}
        verticalSizing={isMobile ? 2.5 : 1}
        fogIntensity={0.01}
        fogScale={0}
        fogFallSpeed={0}
        decay={0.8}
      />

      {/* === Glass Box === */}
      <div
        className="
          absolute left-1/2 transform -translate-x-1/2 z-20
          flex max-md:flex-col max-md:h-auto max-md:p-4 
        "
        style={{
          top: isMobile ? "45%" : "55%",
          width: isMobile ? "90%" : "86%",
          height: "60%",
          borderRadius: "20px",
          border: "2px solid transparent",
          background:
            "linear-gradient(#000000, #060010) padding-box, linear-gradient(to bottom, rgba(230,245,255,1) 0%, rgba(174,211,255,0.95) 15%, rgba(15,20,40,0.25) 70%, rgba(6,0,16,1) 100%) border-box",
          padding: isMobile ? "1.4rem" : "4rem",
        }}
      >
        {/* LEFT COLUMN */}
        <div
          className="
            flex-1 pr-8
            max-md:pr-0 max-md:text-center max-md:flex-none
          "
        >
          <h1
            className="
              text-4xl md:text-[2.8rem] font-semibold leading-[1.15] text-white
              max-md:text-2xl
            "
          >
            Empowering Industry Leaders,
            <br />
            Through Intelligent Alliances
          </h1>
        </div>

        {/* RIGHT COLUMN */}
        <div
          className="
            flex-1 pl-4
            max-md:pl-0 max-md:text-center max-md:flex-none max-md:mt-8
          "
        >
          <p
            className="
              mt-0 text-base md:text-lg text-white/80 leading-relaxed mb-10
              max-md:text-sm
            "
          >
            Here at Cogent Solutions, we partner with global organizations,
            government bodies, and Fortune 500 enterprises to craft exclusive,
            high-impact platforms that redefine B2B engagement.
          </p>

          <div className="mt-0 max-md:flex max-md:justify-center">
            <button
              className="button relative z-[6]"
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
          </div>
        </div>
      </div>

      {/* === Light Reveal Layer === */}
      {/* === Light Reveal Layer (DESKTOP ONLY) === */}
      {!isMobile && (
        <Image
          ref={revealImgRef}
          src="/images/partners grid check.png"
          alt="Reveal effect"
          fill // FIX: Added fill prop to handle sizing automatically
          className="absolute w-full pointer-events-none select-none object-cover"
          style={
            {
              top: "0%",
              zIndex: 0,
              mixBlendMode: "lighten",
              opacity: 0.5,
              WebkitMaskImage:
                "radial-gradient(circle at var(--mx) var(--my), white 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, transparent 240px)",
              maskImage:
                "radial-gradient(circle at var(--mx) var(--my), white 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, transparent 240px)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              "--mx": "-9999px",
              "--my": "-9999px",
            } as React.CSSProperties // FIX: Cast to CSSProperties instead of any
          }
        />
      )}
    </section>
  );
}