"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PartnersHero() {
  const logos = [
    "/images/services/logos/Amazon.png",
    "/images/services/logos/Coca Cola.png",
    "/images/services/logos/Fifa.png",
    "/images/services/logos/Mastercard.png",
    "/images/services/logos/Oracle.png",
    "/images/services/logos/Daikin.png",
    "/images/services/logos/Intel.png",
    "/images/services/logos/LSEG.png",
    "/images/services/logos/Aramco.png",
    "/images/services/logos/Microsoft.png",
    "/images/services/logos/Saudia.png",
    "/images/services/logos/logitech.png",
    "/images/services/logos/Dow Jones.png",
    "/images/services/logos/Blackberry.png",
  ];

  return (
    <section className="relative w-full bg-white py-50 px-6 sm:px-8 lg:px-20 flex flex-col items-center justify-center">
      {/* ===== Heading ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16 max-w-2xl"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Our Trusted Industry Leaders &amp; Partners
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Over 500+ Global Brands and Industry Leaders Have Worked With Us
        </p>
      </motion.div>

      {/* ===== Logos Grid ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 w-full max-w-7xl border-t border-l border-gray-200"
      >
        {logos.map((src, i) => (
          <div
            key={i}
            className="group flex items-center justify-center border-b border-r border-gray-200 aspect-[4/3] bg-white hover:bg-[#F5F7FF] transition-all duration-300"
          >
            <Image
              src={src}
              alt={`Partner Logo ${i + 1}`}
              width={120}
              height={80}
              className="object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
