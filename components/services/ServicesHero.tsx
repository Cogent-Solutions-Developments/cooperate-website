"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";
import { useState, useEffect } from "react";

type CardType =
  | {
      type: "testimonials";
      bg: string;
      testimonials: {
        quote: string;
        name: string;
        role: string;
        company: string;
      }[];
    }
  | {
      type: "autoplayVideo";
      title: string;
      media: string;
    }
  | {
      type: "statsLoop";
      bg: string;
      stats: { number: string; text: string }[];
    }
  | {
      type: "partners";
      bg: string;
      logos: string[];
    }
  | {
      type: "videoCard";
      title: string;
      media: string;
      link: string;
    };

export default function ServicesHero() {
  const cards: CardType[] = [
    {
      type: "testimonials",
      bg: "#000000",
      testimonials: [
        {
          quote:
            "They organized their work and internal management was outstanding.",
          name: "Jahan Melad",
          role: "Project Manager",
          company: "Buildwave",
        },
        {
          quote:
            "2nd time working with Cogent Solutions and I was very pleased. Innovative approach and rich experience.",
          name: "Mr. Wael Saikaly",
          role: "Head of AML / CFT",
          company: "Creditbank SAL",
        },
        {
          quote:
            "Professional team. Great coordination from start to end. Highly recommend Cogent Solutions.",
          name: "Mr. Mohamed Roushdy",
          role: "Member",
          company: "Arab Monetary Fund & Fintech Bazaar",
        },
      ],
    },
    {
      type: "autoplayVideo",
      title: "Boardrooms",
      media: "/videos/services/hc2.mp4",
    },
    {
      type: "statsLoop",
      bg: "#011936",
      stats: [
        {
          number: "200+",
          text: "Exclusive Industry Focused Conferences Delivered",
        },
        {
          number: "500+",
          text: "Government and Regulatory Entities Partnered",
        },
        {
          number: "15+",
          text: "Countries Reached Through Our Business Platforms",
        },
        {
          number: "5000+",
          text: "Leaders from Fortune 500 Companies Engaged",
        },
      ],
    },
    {
      type: "partners",
      bg: "#ffffff",
      logos: [
        "/images/services/logos/Dow Jones.png",

        "/images/services/logos/Almarai.png",
        "/images/services/logos/Amazon.png",
        "/images/services/logos/Aramco.png",
        "/images/services/logos/BlackBerry.png",
        "/images/services/logos/MasterCard.png",

        "/images/services/logos/Coca Cola.png",
        "/images/services/logos/Daikin.png",
        "/images/services/logos/Dow Jones.png",
        "/images/services/logos/Fifa.png",
        "/images/services/logos/Finsatra.png",
        "/images/services/logos/HCLTech.png",
        "/images/services/logos/HIKVISION.png",
        "/images/services/logos/HSBC.png",
        "/images/services/logos/IFS.png",
        "/images/services/logos/Infosys.png",
        "/images/services/logos/Intel.png",
        "/images/services/logos/KPMG.png",
        "/images/services/logos/Logitech.png",
        "/images/services/logos/LSEG.png",
        "/images/services/logos/MasterCard.png",
        "/images/services/logos/Microsoft.png",
        "/images/services/logos/Moody.png",
        "/images/services/logos/Oracle.png",
        "/images/services/logos/SaudiA.png",
        "/images/services/logos/SC.png",
        "/images/services/logos/Temenos.png",
      ],
    },
    {
      type: "videoCard",
      title: "Our podcasts bring stories to life",
      media: "/images/services/hc5.webp",
      link: "https://youtu.be/1zwyVtyOcvw?si=AUxgLBJzhK32YxQk",
    },
  ];

  const heights = [360, 360, 360, 360, 360];
  const [activeStat, setActiveStat] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStat(
        (prev) =>
          (prev + 1) %
          (cards.find((c) => c.type === "statsLoop")?.stats.length || 1)
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("right");
      setActiveTestimonial(
        (prev) =>
          (prev + 1) %
          (cards.find((c) => c.type === "testimonials")?.testimonials.length ||
            1)
      );
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-45 h-screen bg-gradient-to-b from-[#F8F9FB] to-white relative">
      {/* === Header === */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-5 px-6"
      >
        <h1 className="text-7xl md:text-8xl font-semibold text-neutral-900">
          Our Services
        </h1>
        <p className="mt-0 text-sm text-neutral-600 max-w-2xl mx-auto">
          We craft experiences that connect decision-makers, ideas, and stories.
        </p>
      </motion.div>

      {/* === Cards === */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="flex justify-center items-end gap-3 flex-wrap md:flex-nowrap"
        >
          {cards.map((card, i) => {
            const height = heights[i];
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative group rounded-[24px] overflow-hidden transition-all duration-700 flex-1 min-w-[180px] 
    ${card.type === "partners" ? "bg-white" : "shadow-md hover:shadow-xl"}`}
                style={{ height }}
              >
                {/* === TESTIMONIALS === */}
                {card.type === "testimonials" && (
                  <div
                    className="w-full h-full flex items-center justify-center text-left p-8 relative overflow-hidden"
                    style={{ backgroundColor: card.bg }}
                  >
                    <AnimatePresence custom={direction}>
                      <motion.div
                        key={activeTestimonial}
                        custom={direction}
                        initial={{
                          x: direction === "right" ? 200 : -200,
                          opacity: 0,
                        }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{
                          x: direction === "right" ? -200 : 200,
                          opacity: 0,
                        }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="absolute inset-0 flex flex-col justify-center px-6"
                      >
                        <div className="text-white/90 text-[18px] font-medium leading-relaxed mb-3">
                          <span className="text-4xl text-white/70 leading-none">
                            “
                          </span>
                          {card.testimonials[activeTestimonial].quote}
                        </div>
                        <div className="text-white text-xs font-semibold">
                          {card.testimonials[activeTestimonial].name}
                        </div>
                        <div className="text-white/70 text-[10px] font-light">
                          {card.testimonials[activeTestimonial].role},{" "}
                          {card.testimonials[activeTestimonial].company}
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {card.testimonials.map((_, idx) => (
                        <div
                          key={idx}
                          className={`transition-all duration-500 rounded-full ${
                            idx === activeTestimonial
                              ? "bg-white w-2 h-2"
                              : "bg-white/40 w-2 h-2"
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                )}

                {/* === AUTOPLAY VIDEO === */}
                {card.type === "autoplayVideo" && (
                  <video
                    src={card.media}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover rounded-[24px]"
                  />
                )}

                {/* === STATS LOOP === */}
                {card.type === "statsLoop" && (
                  <div
                    className="w-full h-full flex items-center justify-center text-left overflow-hidden"
                    style={{ backgroundColor: card.bg }}
                  >
                    {card.stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                          activeStat === index
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: -20 }
                        }
                        transition={{ duration: 0.8 }}
                        className="absolute px-6"
                      >
                        <h2 className="text-white text-2xl font-bold mb-0">
                          {stat.number}
                        </h2>
                        <p className="text-white/90 text-xs font-light max-w-xs leading-relaxed">
                          {stat.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* === OUR PARTNERS (smooth continuous upward scroll + fade) === */}
                {card.type === "partners" && (
                  <div className="w-full h-full flex flex-col justify-between bg-[#f9f9fa] rounded-[24px] overflow-hidden relative">
                    {/* Scrollable area with fade overlay */}
                    <div className="relative flex-1 overflow-hidden">
                      {/* Fade mask at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f9f9fa] via-[#f9f9fa]/80 to-transparent z-10 pointer-events-none"></div>

                      {/* === Vertical scroll container === */}
                      <motion.div
                        className="absolute inset-0 flex flex-col items-center"
                        animate={{ y: ["0%", "-100%"] }}
                        transition={{
                          duration: 10, // Adjust speed: higher = slower
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        {/* Grid 1 */}
                        <div className="grid grid-cols-3 gap-6 p-6 place-items-center">
                          {card.logos.map((logo, i) => (
                            <div
                              key={`logo1-${i}`}
                              className="flex items-center justify-center"
                            >
                              <Image
                                src={logo}
                                alt={`Partner logo ${i + 1}`}
                                width={40}
                                height={40}
                                className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                              />
                            </div>
                          ))}
                        </div>

                        {/* Grid 2 (duplicate for seamless loop) */}
                        <div className="grid grid-cols-3 gap-6 p-6 place-items-center">
                          {card.logos.map((logo, i) => (
                            <div
                              key={`logo2-${i}`}
                              className="flex items-center justify-center"
                            >
                              <Image
                                src={logo}
                                alt={`Partner logo duplicate ${i + 1}`}
                                width={40}
                                height={40}
                                className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                              />
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Bottom title */}
                    <div className="p-5 md:p-7 z-20">
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-black text-base md:text-lg font-semibold"
                      >
                        We have partnered with the best
                      </motion.h3>
                    </div>
                  </div>
                )}

                {/* === VIDEO CARD === */}
                {card.type === "videoCard" && (
                  <>
                    <Image
                      src={card.media}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-between p-5">
                      <p className="text-white text-lg font-semibold leading-snug">
                        {card.title}
                      </p>
                      <a
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-white/20 backdrop-blur-md px-2 py-2 rounded-full text-white text-sm font-medium hover:bg-white/30 transition"
                      >
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/30">
                          <Play size={14} fill="white" />
                        </div>
                        Watch how it works
                      </a>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
