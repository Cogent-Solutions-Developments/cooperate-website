"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BounceCards from "./imports/BounceCards";
import { Cover } from "./imports/Cover";

export default function AboutHero() {
  const [hovered, setHovered] = useState(false);
  const [showFade, setShowFade] = useState(false);

  const NAV_HEIGHT = 88;

  const images = [
    "/images/explore/hero/h5.webp",
    "/images/explore/hero/h1.jpg",
    "/images/explore/hero/h3.jpeg",
    "/images/explore/hero/h2.jpg",
    "/images/explore/hero/h4.jpeg",
  ];

  const transforms = [
    "rotate(-5deg) translate(-230px, -10px)",
    "rotate(-7deg) translate(-120px, 5px)",
    "rotate(3deg) translate(0px, -5px)",
    "rotate(-2deg) translate(120px, -5px)",
    "rotate(6deg) translate(230px, -5px)",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowFade(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative w-full bg-white overflow-hidden"
      style={{ ["--nav-h" as any]: `${NAV_HEIGHT}px` }}
    >
      {/* Spacer = Nav Height */}
      <div className="h-[var(--nav-h)]" />

      {/* ====== MAIN CONTAINER ====== */}
      <div className="mx-auto max-w-7xl 2xl:max-w-[1600px] px-6 lg:px-12 2xl:px-20">

        {/* ====== FULL HERO HEIGHT ====== */}
        <div
          className="
            min-h-[calc(100dvh-var(--nav-h))] 
            md:min-h-[calc(100vh-var(--nav-h))]
            flex flex-col 
            items-center 
            justify-start md:justify-center 
            pt-12 md:pt-0 
            gap-0
          "
        >
          {/* ====== TITLE ====== */}
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-semibold text-neutral-900 leading-tight">
              The{" "}
              <motion.span
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="inline-block align-baseline mx-1 cursor-default"
              >
                <Cover>
                  <motion.span
                    animate={
                      hovered
                        ? {
                            scale: [1, 0.98, 0.96, 0.93, 0.91, 0.9],
                            x: [0, -0.5, 0.5, -0.7, 0.7, 0],
                            y: [0, -0.6, -0.5, -0.8, 0.8, 0],
                          }
                        : { scale: 1, x: 0, y: 0 }
                    }
                    transition={{
                      duration: hovered ? 2 : 0.8,
                      ease: "easeInOut",
                      repeat: hovered ? Infinity : 0,
                      repeatType: "mirror",
                      repeatDelay: hovered ? 1 : 0,
                    }}
                    className="inline-block"
                  >
                    Spectrum
                  </motion.span>
                </Cover>
              </motion.span>{" "}
              Of Our Work
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
              We Design Closed-door B2B Platforms Where Governments, Regulators,
              and Industry Leaders Connect to Shape the Future.
            </p>

            <div className="mt-5">
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
                Explore Our Conferences
              </button>
            </div>
          </div>

         {/* === BOUNCE CARDS === */}
<div
  className="
    relative 
    mt-[-40px] 
    md:mt-[-60px]
    lg:mt-[-20px]
    xl:mt-[0px]
    2xl:mt-[0px]
    flex justify-center
  "
>
  {/* Desktop Version — with scaling */}
  <BounceCards
    images={images}
    transformStyles={transforms}
    containerWidth={720}
    containerHeight={320}
    animationDelay={0.6}
    animationStagger={0.09}
    easeType="elastic.out(1, 0.6)"
    enableHover={false}
    className="
      hidden md:flex 
      scale-100 
      lg:scale-[1.15] 
      xl:scale-[1.25] 
      2xl:scale-[1.35] 
      origin-center
    "
  />

  {/* Mobile Version */}
  <BounceCards
    images={images.slice(1, 4)}
    transformStyles={[
      "rotate(5deg) translate(-70px)",
      "rotate(-3deg)",
      "rotate(4deg) translate(70px)",
    ]}
    containerWidth={340}
    containerHeight={220}
    animationDelay={0.6}
    animationStagger={0.06}
    easeType="elastic.out(1, 0.6)"
    enableHover={false}
    className="md:hidden"
  />
</div>

        </div>
      </div>
    </section>
  );
}
