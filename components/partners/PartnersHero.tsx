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
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-16 mt-14 py-24">
        {/* ==== Left text ==== */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start justify-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Delivering Excellence in Every Event
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-lg mb-8">
            From Exclusive Boardrooms to Global Summits, We Redefine How Industries Meet, Engage, and Grow
          </p>

          {/* === New Button === */}
          <button className="button" style={{ ["--clr" as any]: "#1D309D" }}>
            <span className="button__icon-wrapper">
              <svg
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon-svg"
                width="10"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                ></path>
              </svg>

              <svg
                viewBox="0 0 14 15"
                fill="none"
                width="10"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon-svg button__icon-svg--copy"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            Explore All
          </button>
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

/* ========= Logo Card ========= */
function LogoCard({ src }: { src: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="relative w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-2xl flex items-center justify-center bg-[#f9f9f9] shadow-[inset_2px_2px_6px_rgba(0,0,0,0.1),inset_-2px_-2px_6px_rgba(255,255,255,0.7)] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.05),inset_1px_1px_2px_rgba(0,0,0,0.1)] transition-all duration-300 overflow-hidden"
    >
      {/* Glossy edge overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ffffffcc] to-[#d1d1d1aa] mix-blend-overlay opacity-60 pointer-events-none" />

      <Image
        src={src}
        alt="Partner Logo"
        width={70}
        height={70}
        className="object-contain opacity-80 transition-all duration-300 hover:opacity-100"
      />
    </motion.div>
  );
}
