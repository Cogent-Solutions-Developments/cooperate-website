"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import BounceCards from "./imports/BounceCards";
import { Cover } from "./imports/Cover";

export default function AboutHero() {
  const [hovered, setHovered] = useState(false);

  const images = [
    "/images/explore/hero/h4.jpeg",
    "/images/explore/hero/h2.jpg",
    "/images/explore/hero/h3.jpeg",
    "/images/explore/hero/h1.jpg",
    "/images/explore/hero/h5.webp",
  ];

  const transforms = [
    "rotate(-6deg) translate(-180px)",
    "rotate(2deg) translate(-90px)",
    "rotate(-4deg)",
    "rotate(4deg) translate(90px)",
    "rotate(-6deg) translate(180px)",
  ];

  return (
    <section className="relative h-screen w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 pt-40 pb-10 text-center">
        <h1 className="mt-2 text-4xl sm:text-6xl font-semibold text-neutral-900 leading-tight">
          The{" "}
          {/* === Animated “Scope” word === */}
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
                        scale: [1, 0.98, 0.96, 0.93, 0.91, 0.90],
                        // 💥 faster + slightly larger amplitude vibration
                        x: [0, -0.5, 0.5, -0.7, 0.7, -0.4, 0.4, 0.2, -0.2, 0],
                        y: [0, -0.6, -0.5, -0.8, 0.8, -0.5, -0.5, 0.3, -0.3, 0],
                      }
                    : { scale: 1, x: 0, y: 0 }
                }
                transition={{
                  duration: hovered ? 2 : 0.8, // faster overall loop
                  ease: "easeInOut",
                  repeat: hovered ? Infinity : 0,
                  repeatType: "mirror",
                  repeatDelay: hovered ? 1 : 0, // short rest before next pulse
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
          We design closed-door B2B platforms where governments, regulators,
          and industry leaders connect to shape the future.
        </p>
      </div>

      {/* === Card Stack Section === */}
      <div className="relative flex justify-center pb-16">
        <BounceCards
          images={images}
          transformStyles={transforms}
          containerWidth={720}
          containerHeight={320}
          animationDelay={0.6}
          animationStagger={0.09}
          easeType="elastic.out(1, 0.6)"
          enableHover={false}
          className="hidden md:flex"
        />

        {/* Mobile (simplified stack) */}
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
    </section>
  );
}
