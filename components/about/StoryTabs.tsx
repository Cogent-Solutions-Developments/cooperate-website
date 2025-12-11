"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: "story",
    title: "Our Story",
    content: (
      <>
        <p className="text-neutral-300 leading-relaxed">
          At our core, we are a{" "}
          <b className="text-white">&rdquo;customer-centric events agency&rdquo;</b>{" "}
          founded on the fundamental principle of delivering the right
          information to the right individuals at the opportune moment.
        </p>

        <p className="mt-4 text-neutral-300 leading-relaxed">
          We empower our clients with high-quality business intelligence and
          events services that meet their needs and exceed their expectations.
          This means taking the time to understand our customers’ challenges
          and providing value-based solutions that address their needs.
        </p>

        <p className="mt-4 text-neutral-300 leading-relaxed">
          Our events have the power to spark new business relationships,
          deepen existing connections, and ultimately drive success for all
          involved.
        </p>
      </>
    ),
  },

  {
    id: "whatwedo",
    title: "What We Do",
    content: (
      <>
        <p className="text-neutral-300 leading-relaxed">
          Our team of experts meticulously create customized virtual, hybrid,
          and physical events that enable businesses to effectively communicate
          their value proposition to a carefully vetted, prequalified, and
          targeted audience.
        </p>

        <p className="mt-4 text-neutral-300 leading-relaxed">
          Our research-backed, tailor-made platforms offer businesses
          unparalleled access to markets, industries, and senior
          decision-makers worldwide — without any limitations.
        </p>
      </>
    ),
  },

  {
    id: "whoweare",
    title: "Who We Are",
    content: (
      <>
        <p className="text-neutral-300 leading-relaxed">
          <b className="text-white">YOUR BUSINESS INTELLIGENCE PARTNER.</b>
        </p>

        <p className="mt-4 text-neutral-300 leading-relaxed">
          Today, Cogent Solutions is a highly respected and sought-after
          Business Intelligence Company in the region. Our clients depend on us
          as their own internal team to create events that are not only
          successful but deliver unforgettable value.
        </p>

        <p className="mt-4 text-neutral-300 leading-relaxed">
          From conferences to trade shows, and product launches to corporate
          roundtables, our team at Cogent Solutions has the experience,
          expertise, and passion to make every event a success.
        </p>

        <p className="mt-4 text-neutral-300 leading-relaxed">
          With a focus on innovation, collaboration, and unparalleled customer
          experience, Cogent Solutions is the partner you can trust to take
          your business to the next level.
        </p>
      </>
    ),
  },

  {
    id: "values",
    title: "Our Core Business Values",
    content: (
      <>
        <p className="text-neutral-300 leading-relaxed">
          <b className="text-white">VALUE FOR OUR PEOPLE.</b>
        </p>

        <p className="mt-4 text-neutral-300 leading-relaxed">
          We are officially certified as a “GREAT PLACE TO WORK™” company and
          have won the prestigious “Best Workplaces in UAE™ 2023”.
        </p>

        <p className="mt-4 text-neutral-300 leading-relaxed">
          We provide our team a safe and healthy work environment, equal
          opportunities for growth and development, and foster a culture of
          continuous learning, respect, and collaboration.
        </p>

        <p className="mt-4 text-neutral-300 leading-relaxed">
          Our organization prioritizes employee and client satisfaction to
          attract and retain top talent, build strong customer experiences, and
          achieve continuous success.
        </p>
      </>
    ),
  },
];

export default function StoryCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((p) => (p === slides.length - 1 ? 0 : p + 1));
  const prev = () => setIndex((p) => (p === 0 ? slides.length - 1 : p - 1));

  return (
    <div
      className="
        w-full bg-[#000000]
        p-0 md:p-0 relative overflow-hidden flex flex-col
        h-[520px] md:h-[540px] lg:h-[380px]
      "
    >
      {/* CONTENT AREA */}
      <div className="flex-1 pr-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="space-y-5"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              {slides[index].title}
            </h3>

            <div className="text-neutral-300 text-[15px] leading-relaxed">
              {slides[index].content}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* BOTTOM RIGHT ARROWS */}
      <div className="absolute bottom-4 right-4 flex items-center gap-3 z-20">
        <button
          onClick={prev}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          <ChevronLeft size={20} className="text-white" />
        </button>

        <button
          onClick={next}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          <ChevronRight size={20} className="text-white" />
        </button>
      </div>
    </div>
  );
}
