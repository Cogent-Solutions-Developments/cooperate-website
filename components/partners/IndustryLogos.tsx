"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function IndustryLogos() {
  const logos = [
    "/images/services/logos/Amazon.png",
    "/images/services/logos/Amazon.png",
    "/images/services/logos/Amazon.png",
    "/images/services/logos/Amazon.png",
     "/images/services/logos/Amazon.png",
    "/images/services/logos/Amazon.png",
    "/images/services/logos/Amazon.png",
    "/images/services/logos/Amazon.png",
     "/images/services/logos/Amazon.png",
    "/images/services/logos/Amazon.png",
    "/images/services/logos/Amazon.png",
    "/images/services/logos/Amazon.png",
     "/images/services/logos/Amazon.png",
    "/images/services/logos/Amazon.png",
    "/images/services/logos/Amazon.png",
    "/images/services/logos/Amazon.png",
     "/images/services/logos/Amazon.png",
    "/images/services/logos/Amazon.png",
    "/images/services/logos/Amazon.png",
    "/images/services/logos/Amazon.png",
     "/images/services/logos/Amazon.png",
    "/images/services/logos/Amazon.png",
    "/images/services/logos/Amazon.png",
    "/images/services/logos/Amazon.png",
     "/images/services/logos/Amazon.png",
    "/images/services/logos/Amazon.png",
    "/images/services/logos/Amazon.png",
    "/images/services/logos/Amazon.png",
     "/images/services/logos/Amazon.png",
    "/images/services/logos/Amazon.png",
    "/images/services/logos/Amazon.png",
    "/images/services/logos/Amazon.png",
    
  ];

  return (
    <section className="relative w-full bg-white py-24 px-6 sm:px-8 lg:px-20 flex flex-col items-center justify-center overflow-hidden">
      {/* ===== Heading ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16 max-w-2xl"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
          Government &amp; Regulatory
          <br /> Partners
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mt-4">
          Over 200+ Government and Regulatory Entities Trust Us.
        </p>
      </motion.div>

      {/* ===== Scrollable Grid ===== */}
      <div
        className="relative w-full max-w-7xl h-[420px] sm:h-[480px] md:h-[520px] overflow-y-scroll"
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE
          scrollBehavior: "smooth",
        }}
      >
        {/* hide scrollbar for WebKit */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 w-full border-t border-l border-gray-200"
        >
          {logos.map((src, i) => (
            <div
              key={i}
              className="group flex items-center justify-center border-b border-r border-gray-200 aspect-[4/3] bg-white hover:bg-[#F5F7FF] transition-all duration-300"
            >
              <Image
                src={src}
                alt={`Government Partner Logo ${i + 1}`}
                width={120}
                height={80}
                className="object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>

        {/* ===== Bottom Fade Overlay ===== */}
        {/* <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/90 to-transparent" /> */}
      </div>
    </section>
  );
}
