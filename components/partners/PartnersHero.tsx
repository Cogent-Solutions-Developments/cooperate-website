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

  // columns: 3 | 4 | 3 | 4
  const columns = [
    logos.slice(0, 3),
    logos.slice(3, 7),
    logos.slice(7, 10),
    logos.slice(10, 14),
    
  ];

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex items-center">
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-16 py-24">
        {/* ==== Left text ==== */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start justify-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Our Trusted Industry Leaders &amp; Partners
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-lg mb-8">
            Over 500+ Global Brands and Industry Leaders Have Worked With Us
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 bg-[#1D309D] text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Become a Partner
          </motion.button>
        </motion.div>

        {/* ==== Right grid ==== */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center items-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white/90 pointer-events-none" />

          {/* Each column centered independently */}
          <div className="flex justify-center items-center gap-6 w-full max-w-3xl">
            {columns.map((col, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-6"
              >
                {col.map((src, j) => (
                  <LogoCard key={j} src={src} />
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function LogoCard({ src }: { src: string }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex items-center justify-center w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] opacity-90 hover:opacity-100 transition-all">
      <Image
        src={src}
        alt="Partner Logo"
        width={80}
        height={80}
        className="object-contain"
      />
    </div>
  );
}
