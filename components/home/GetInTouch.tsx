"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GetInTouch() {
  return (
    <section className="relative w-full bg-white py-28 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
        {/* === LEFT TEXT CONTENT === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Let’s Create Something <br />
            <span className="text-[#2f53bd]">Industry-Leading.</span>
          </h2>

          <p className="mt-6 text-[15px] text-gray-600 leading-relaxed">
            Looking to maximize visibility and outpace the competition? <br />Ask us about{" "}
            <strong>The Competitor Jealousy Package</strong> our boldest sponsorship tier.
            Or connect with us to explore our latest initiative, <strong>CS Podcasts</strong>. 
            We also welcome inquiries about tailored partnerships, speaking engagements,
            delegate participation, and upcoming conferences.
          </p>
        </motion.div>

        {/* === RIGHT CTA PANEL === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full sm:w-auto"
        >
          <Link
            href="/contact"
            className="group flex items-center justify-center gap-2 bg-[#2f53bd] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#364fc7] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(47,83,189,0.25)]"
          >
            Get in Touch
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            href="/partnerships"
            className="group flex items-center justify-center gap-2 border border-gray-300 text-gray-800 px-7 py-3 rounded-full font-semibold hover:border-[#2f53bd] hover:text-[#2f53bd] transition-all duration-300"
          >
            Explore Opportunities
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
