"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Sparkles, Mic2, ArrowDown } from "lucide-react";

export default function ServicesBreaker() {
  return (
    <section className="relative min-h-screen py-24 bg-gradient-to-br from-[#f8f9fc] via-[#f3f4f8] to-[#eef0f7] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20 min-h-[70vh]">
          
          {/* === LEFT SIDE - Content === */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 max-w-xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-[1.1] tracking-tight mb-8">
              Precision across{" "}
              <span className="text-[#2f53bd]">every vertical.</span>
            </h2>
            
            <p className="text-neutral-600 text-lg leading-relaxed mb-10 max-w-md">
              Four distinct divisions — each crafted with strategic insight to deliver measurable impact worldwide.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#2f53bd] text-white font-medium text-sm transition-all duration-300 hover:bg-[#243f94] shadow-lg shadow-[#2f53bd]/20">
                <span>Explore services</span>
                <div className="flex items-center gap-1">
                  <Briefcase size={14} />
                  <Users size={14} />
                  <Sparkles size={14} />
                  <Mic2 size={14} />
                </div>
              </button>
              
              <button className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-neutral-700 font-medium text-sm border border-neutral-200 transition-all duration-300 hover:border-neutral-300 hover:shadow-md">
                <Briefcase size={16} />
                <span>Contact us</span>
              </button>
            </div>

            {/* Discover more */}
            <div className="flex items-center gap-2 text-neutral-500 text-sm">
              <ArrowDown size={16} className="animate-bounce" />
              <span>Discover more</span>
            </div>
          </motion.div>

          {/* === RIGHT SIDE - Floating Isometric Cards === */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 relative w-full max-w-lg lg:max-w-xl h-[500px]"
          >
            {/* Isometric grid container */}
            <div 
              className="absolute inset-0"
              style={{
                transform: "perspective(1000px) rotateX(10deg) rotateY(-10deg) rotateZ(2deg)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Background faded cards */}
              <div 
                className="absolute top-[15%] left-[5%] w-24 h-24 rounded-2xl bg-white/40 border border-white/60 backdrop-blur-sm flex items-center justify-center"
                style={{ transform: "translateZ(-40px)" }}
              >
                <Users size={28} className="text-neutral-300" />
              </div>

              <div 
                className="absolute top-[5%] right-[25%] w-20 h-20 rounded-2xl bg-white/30 border border-white/50 backdrop-blur-sm flex items-center justify-center"
                style={{ transform: "translateZ(-60px)" }}
              >
                <Mic2 size={24} className="text-neutral-300" />
              </div>

              <div 
                className="absolute top-[45%] left-[0%] w-20 h-20 rounded-2xl bg-white/30 border border-white/50 backdrop-blur-sm flex items-center justify-center"
                style={{ transform: "translateZ(-50px)" }}
              >
                <Sparkles size={24} className="text-neutral-300" />
              </div>

              <div 
                className="absolute bottom-[25%] left-[15%] w-16 h-16 rounded-xl bg-white/25 border border-white/40 backdrop-blur-sm flex items-center justify-center"
                style={{ transform: "translateZ(-70px)" }}
              >
                <ArrowDown size={20} className="text-neutral-300 rotate-[-45deg]" />
              </div>

              <div 
                className="absolute top-[60%] right-[10%] w-18 h-18 rounded-xl bg-white/25 border border-white/40 backdrop-blur-sm flex items-center justify-center p-4"
                style={{ transform: "translateZ(-45px)" }}
              >
                <Briefcase size={22} className="text-neutral-300" />
              </div>

              <div 
                className="absolute bottom-[10%] right-[30%] w-16 h-16 rounded-xl bg-white/20 border border-white/30 backdrop-blur-sm flex items-center justify-center"
                style={{ transform: "translateZ(-80px)" }}
              >
                <Users size={18} className="text-neutral-200" />
              </div>

              {/* Main highlighted card */}
              <motion.div 
                className="absolute top-[25%] right-[15%] w-32 h-32 rounded-3xl bg-white border border-neutral-100 shadow-2xl shadow-neutral-200/50 flex items-center justify-center"
                style={{ transform: "translateZ(20px)" }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-16 h-16 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center">
                  <Briefcase size={28} className="text-neutral-700" />
                </div>
              </motion.div>

              {/* Secondary highlighted card */}
              <motion.div 
                className="absolute top-[50%] left-[25%] w-28 h-28 rounded-2xl bg-white/90 border border-neutral-100/80 shadow-xl shadow-neutral-200/30 flex items-center justify-center"
                style={{ transform: "translateZ(10px)" }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="w-14 h-14 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center">
                  <Sparkles size={24} className="text-neutral-600" />
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div 
                className="absolute top-[8%] right-[5%] w-8 h-8 rounded-full border-2 border-neutral-200/50"
                style={{ transform: "translateZ(-30px)" }}
              />
              
              <div 
                className="absolute bottom-[35%] right-[5%] w-6 h-6 rounded-lg bg-neutral-200/30"
                style={{ transform: "translateZ(-40px)" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent pointer-events-none" />
    </section>
  );
}