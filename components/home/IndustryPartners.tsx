"use client";

import LogoLoop from "./imports/LogoLoop";
import { motion } from "framer-motion";

export default function IndustryPartners() {
  // First row logos
  const logosRow1 = [
    { src: "/images/partners/Amazon.png", alt: "Amazon", href: "#" },
    { src: "/images/partners/Intel.png", alt: "Intel", href: "#" },
    { src: "/images/partners/HSBC.png", alt: "HSBC", href: "#" },
    {
      src: "/images/partners/Coca Cola.png",
      alt: "Coca-Cola",
      href: "#",
    },
    { src: "/images/partners/Fifa.png", alt: "FIFA", href: "#" },
    {
      src: "/images/partners/Microsoft.png",
      alt: "Microsoft",
      href: "#",
    },
    { src: "/images/partners/IFS.png", alt: "IFS", href: "#" },
    { src: "/images/partners/Aramco.png", alt: "Aramco", href: "#" },
    { src: "/images/partners/Oracle.png", alt: "Oracle", href: "#" },
    { src: "/images/partners/Infosys.png", alt: "Infosys", href: "#" },
    {
      src: "/images/partners/BlackBerry.png",
      alt: "BlackBerry",
      href: "#",
    },
  ];

  // Second row logos (different set)
  const logosRow2 = [
    { src: "/images/partners/Daikin.png", alt: "Daikin", href: "#" },
    { src: "/images/partners/Saudia.png", alt: "Saudia", href: "#" },
    { src: "/images/partners/Temenos.png", alt: "Temenos", href: "#" },
    { src: "/images/partners/HCLTech.png", alt: "HCLTech", href: "#" },
    { src: "/images/partners/Logitech.png", alt: "Logitech", href: "#" },
    { src: "/images/partners/KPMG.png", alt: "KPMG", href: "#" },
    { src: "/images/partners/LSEG.png", alt: "LSEG", href: "#" },
    {
      src: "/images/partners/MasterCard.png",
      alt: "MasterCard",
      href: "#",
    },
    { src: "/images/partners/Moody.png", alt: "Moody's", href: "#" },
    {
      src: "/images/partners/Dow Jones.png",
      alt: "Dow Jones",
      href: "#",
    },
    { src: "/images/partners/Finsatra.png", alt: "Finastra", href: "#" },
  ];

  return (
    <section className="relative py-0 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 text-center space-y-3">
        <h2 className="text-4xl sm:text-4xl font-semibold tracking-tight text-gray-900">
          Our Trusted Industry Leaders & Partners
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Over <strong>500+</strong> global brands and industry leaders have
          worked with us.
        </p>

        {/* === LOOP 1 (Left Scroll) === */}
        <div className="mt-6 sm:mt-10 lg:mt-14 scale-[0.8] sm:scale-[0.85] md:scale-100 origin-center">
          <LogoLoop
            logos={logosRow1}
            speed={60}
            direction="left"
            logoHeight={48}
            gap={50}
            pauseOnHover
            fadeOut
            scaleOnHover
            fadeOutColor="transparent"
            ariaLabel="Trusted industry partners row 1"
          />
        </div>

        {/* === LOOP 2 (Right Scroll, different logos) === */}
        <div className="mt-4 sm:mt-6 lg:mt-10 opacity-90 opacity-90 scale-[0.8] sm:scale-[0.85] md:scale-100 origin-center">
          <LogoLoop
            logos={logosRow2}
            speed={35}
            direction="right"
            logoHeight={48}
            gap={50}
            pauseOnHover
            fadeOut
            scaleOnHover
            fadeOutColor="transparent"
            ariaLabel="Trusted industry partners row 2"
          />
        </div>

        {/* === EXPLORE BUTTON === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 mb-16 flex justify-center"
        >
          <button className="group relative flex items-center justify-start gap-2 bg-[#2f53bd] hover:bg-[#3d64df] text-white font-semibold rounded-full px-6 py-2.5 shadow-md transition-all duration-300 hover:scale-105 active:scale-95">
            <svg
              className="h-5 w-5 transition-transform duration-[1500ms] group-hover:rotate-[250deg]"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
              />
            </svg>
            Discover Our Partner Ecosystem
          </button>
        </motion.div>
      </div>
    </section>
  );
}
