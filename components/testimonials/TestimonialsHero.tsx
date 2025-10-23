"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import localFont from "next/font/local";

const dhyana = localFont({
  src: "../../public/fonts/dhyana-bold.ttf",
  weight: "700",
  style: "normal",
  variable: "--font-dhyana",
});

// === Testimonials data ===
const testimonials = [
  {
    quote:
      "A highly motivated group. Champions in the event management arena. Highly Professional. Very timely. High quality speakers.",
    name: "Mr. Ramakrishnan Natarajan",
    title: "Member – Arab Monetary Fund & Fintech Bazaar",
    logo: "/images/testimonials/Emirates-Hospitals-Group.webp",
  },
  {
    quote:
      "An exceptional organizing team. The experience was seamless and extremely well-executed from start to finish.",
    name: "Dr. Maya Rajan",
    title: "Chief Strategy Officer – HealthWorld Summit",
    logo: "/images/testimonials/HealthWorld.webp",
  },
  {
    quote:
      "Cogent Solutions truly sets the benchmark for event excellence. Their professionalism and creativity are unmatched.",
    name: "Mr. Ahmed Al-Fahim",
    title: "Director – Fintech Global Forum",
    logo: "/images/testimonials/Fintech-Global.webp",
  },
];

export default function TestimonialsHero() {
  const [index, setIndex] = useState(0);

  // Cycle through testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-b from-[#1D309D] via-[#1A2A84] to-[#0F1B64]">
      {/* === Background giant quote mark === */}
      <div
        className={`${dhyana.className} absolute 
          text-white/10 text-[65vw] font-bold select-none leading-none 
          top-[70%] left-[50%] -translate-x-1/2 -translate-y-1/2`}
      >
        ”
      </div>

      {/* === Static Glass Testimonial Card === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute z-10 
          top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2
          w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]
          bg-white/5 backdrop-blur-md border border-white/30 rounded-[30px]
          shadow-[0_8px_40px_rgba(0,0,0,0.25)] p-10 md:p-8
          flex flex-col rotate-[-2deg] items-center justify-center text-center"
      >
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-center text-white text-lg md:text-xl font-medium leading-relaxed max-w-5xl"
          >
            “ {testimonial.quote} ”
          </motion.p>
        </AnimatePresence>
      </motion.div>

      {/* === Static Reviewer Section === */}
      <div
        className="absolute z-20
          top-[68%] left-[50%] -translate-x-1/2
          flex flex-col items-center justify-center text-center"
      >
        {/* Animate only the inner content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center"
          >
            {/* Logo */}
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/40 mb-4">
              <Image
                src={testimonial.logo}
                alt={testimonial.name}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Text */}
            <div className="text-white text-center">
              <p className="font-semibold text-base md:text-lg">
                {testimonial.name}
              </p>
              <p className="text-white/70 text-sm md:text-base">
                {testimonial.title}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* === Bottom gradient overlay === */}
      <div className="absolute bottom-0 left-0 right-0 h-[180px] bg-gradient-to-t from-[#0F1B64] to-transparent" />
    </section>
  );
}
