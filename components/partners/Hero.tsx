"use client";

import { useRef } from "react";
import Image from "next/image";
import LaserFlow from "./imports/LaserFlow";
import { rotate } from "three/tsl";

export default function ExploreHero3() {
  const revealImgRef = useRef<HTMLImageElement | null>(null);

  //   const logos = [
  //     {
  //       src: "/images/intel3d.png",
  //       width: 80,
  //       rotation: 25,
  //       opacity: 0.8,
  //       position: { bottom: "8%", left: "70%" },
  //     },
  //     {
  //       src: "/images/nvidia3d.png",
  //       width: 60,
  //       rotation: 15,
  //       opacity: 0.5,
  //       position: { bottom: "45%", right: "14%" },
  //     },
  //     {
  //       src: "/images/oracle3d.png",
  //       width: 70,
  //       rotation: -25,
  //       opacity: 0.65,
  //       position: { bottom: "18%", right: "10%" },
  //     },
  //     {
  //       src: "/images/fifa3d.png",
  //       width: 60,
  //       rotation: -15,
  //       opacity: 0.4,
  //       position: { bottom: "35%", right: "22%" },
  //     },
  //   ];

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-black text-white"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const el = revealImgRef.current;
        if (el) {
          (el.style as any).setProperty("--mx", `${x}px`);
          (el.style as any).setProperty("--my", `${y + rect.height * 0.5}px`);
        }
      }}
      onMouseLeave={() => {
        const el = revealImgRef.current;
        if (el) {
          (el.style as any).setProperty("--mx", "-9999px");
          (el.style as any).setProperty("--my", "-9999px");
        }
      }}
    >
      {/* === Laser Shader Background === */}
      <LaserFlow
        horizontalBeamOffset={0}
        verticalBeamOffset={-0.05}
        color="#AED3FF"
        horizontalSizing={2}
        verticalSizing={1}
        fogIntensity={0.01}
        fogScale={0}
        fogFallSpeed={0}
        decay={0.8}
      />
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "86%",
          height: "60%",
          borderRadius: "20px",
          border: "2px solid transparent",
          background:
            "linear-gradient(#060010, #060010) padding-box, linear-gradient(to bottom, rgba(230, 245, 255, 1) 0%, rgba(174, 211, 255, 0.95) 15%, rgba(15, 20, 40, 0.25) 70%, rgba(6, 0, 16, 1) 100%) border-box",
          display: "flex",
        //   alignItems: "center",
        //   justifyContent: "space-between",
        //   color: "white",
          zIndex: 20,
          padding: "4rem 4rem",
        }}
      >
        {/* === Left: Title === */}
        <div className="flex-1 pr-8">
          <h1 className="text-4xl md:text-[2.8rem] font-semibold leading-[1.15] text-white">
            Empowering Industry Leaders,
            <br />
            Through Intelligent Alliances
          </h1>
        </div>

        {/* === Right: Paragraph + Button === */}
        <div className="flex-1 pl-4">
          <p className="mt-0 text-base md:text-lg text-white/80 leading-relaxed mb-6">
Here at Cogent Solutions, we partner with global organizations, government bodies, and Fortune 500 enterprises to craft exclusive, high-impact platforms that redefine B2B engagement.    </p>

               <div className="mt-0 ">
            <button
              className="button relative z-[6]"
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
          </div>


        </div>
            
      </div>

      {/* === Light Reveal Layer === */}
      <img
        ref={revealImgRef}
        src="/images/03.png"
        alt="Reveal effect"
        style={
          {
            position: "absolute",
            width: "100%",
            top: "-50%",
            zIndex: 0,
            mixBlendMode: "lighten",
            opacity: 0.1,
            pointerEvents: "none",
            "--mx": "-9999px",
            "--my": "-9999px",
            WebkitMaskImage:
              "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",
            maskImage:
              "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          } as React.CSSProperties
        }
      />

      {/* === Content Wrapper (Two-column layout) === */}
      <div className="absolute inset-0 z-10 flex flex-col lg:flex-row items-center justify-between px-10 lg:px-24 gap-10">
        {/* === Text Side === */}
        <div className="max-w-xl text-left">
          {/* <h1 className="text-4xl md:text-[3rem] font-semibold leading-[1.15]">
            Empowering Industry Leaders, Through Intelligent Alliances
          </h1> */}

          {/* <p className="mt-6 text-lg text-white/80 leading-relaxed">
            Here at Cogent Solutions, We Partner with Global Organizations,
            Government Bodies, and Fortune-500 Enterprises to Craft Exclusive,
            High-Impact Platforms That Redefine B2B Engagement.
          </p> */}

          {/* <div className="mt-6">
            <button
              className="button relative z-[10]"
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
              Become a Partner
            </button>
          </div> */}
        </div>

        {/* === Partner Logos Layer === */}
        {/* <div className="absolute inset-0 z-20 pointer-events-none">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="absolute transition-transform duration-500 hover:scale-105"
              style={{
                ...logo.position,
                transform: `rotate(${logo.rotation}deg)`,
                opacity: logo.opacity,
              }}
            >
              <Image
                src={logo.src}
                alt={`partner-${i}`}
                width={logo.width}
                height={logo.width}
                className="w-auto h-auto object-contain select-none"
              />
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
