"use client";

import { motion } from "framer-motion";
import MetaBalls from "./imports/MetaBalls";
import Link from "next/link";

export default function GetInTouch() {
  return (
    <section className="relative w-full bg-white py-16  border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-16">
        {/* === LEFT TEXT CONTENT === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            When Connections Evolve, <br />
            <span className="text-[#2f53bd]">Change Begins.</span>
          </h2>
          <p className="mt-6 text-[15px] text-gray-600 leading-relaxed">
            At Cogent, every evolving connection sparks transformation. Looking
            to maximize visibility and outpace the competition? 
            Ask us about{" "}
            <Link
              href="/sponsorships#competitor-jealousy"
              className="font-semibold  transition-colors duration-300 cursor-pointer "
            >
              The Competitor Jealousy Package
            </Link>
            , our boldest sponsorship tier or connect with us to explore our
            latest initiative,{" "}
            <Link
              href="/cs-podcasts"
              className="font-semibold  transition-colors duration-300 cursor-pointer "
            >
              CS Podcasts
            </Link>
            . We also welcome inquiries about tailored partnerships, speaking
            engagements, delegate participation, and{" "}
            <Link
              href="/conferences#upcoming"
              className="font-semibold transition-colors duration-300 cursor-pointer "
            >
              Upcoming Conferences
            </Link>
            .
          </p>
           <div className="mt-8">
              <button
                className="button relative z-[10000]"
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
                Contact Us
              </button>
            </div>
        </motion.div>

        {/* === RIGHT SIDE ANIMATION PANEL === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center w-full lg:w-[420px] h-[280px] sm:h-[340px] lg:h-[380px]"
        >
          <MetaBalls
            color="#2f53bd"
            cursorBallColor="#2f53bd"
            cursorBallSize={1.5}
            ballCount={12}
            animationSize={24}
            enableMouseInteraction={true}
            enableTransparency={true}
            hoverSmoothness={0.04}
            clumpFactor={0.9}
            speed={0.3}
          />
        </motion.div>
      </div>
    </section>
  );
}
