'use client';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// ✅ keep your dynamic import exactly as-is
const Lanyard = dynamic(() => import('./imports/Lanyard'), { ssr: false });

export default function ContactHero() {
  return (
    <section className="relative w-full h-screen bg-white text-black overflow-hidden">
      {/* 2-column layout, stacks on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full max-w-7xl mx-auto px-6 lg:px-12 gap-8">

        {/* === Left: 3D card === */}
        <div className="relative order-2 lg:order-1 h-[320px] sm:h-[420px] lg:h-full">
          {/* Keep canvas clicks off; don’t block the right content */}
          <div className="absolute inset-0 pointer-events-none">
            {/* keep your same props; only position moved to left column */}
            <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
          </div>
        </div>

        {/* === Right: Text content === */}
        <div className="relative order-1 lg:order-2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left px-0 lg:px-8">
          <div className="pointer-events-auto">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight"
            >
              <span className="text-[#1D309D]">Let’s Connect</span> <br className="hidden sm:block" />
              <span className="text-black">& Collaborate</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9, ease: 'easeOut' }}
              className="mt-5 max-w-md text-neutral-700 text-base sm:text-lg md:text-[17px] leading-relaxed mx-auto lg:mx-0"
            >
             Whether you're exploring sponsorships, partnerships, or event collaborations, our team is here to help you make it happen.
            </motion.p>

            <div className="mt-4">
              <button
                className="button relative z-[10000]"
                style={{ ["--clr" as any]: "#2f53bd" }}
              >
                <span className="button__icon-wrapper">
                  <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="button__icon-svg"
                    width="11"
                  >
                    <path
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      fill="currentColor"
                    ></path>
                  </svg>

                  <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    width="11"
                    xmlns="http://www.w3.org/2000/svg"
                    className="button__icon-svg button__icon-svg--copy"
                  >
                    <path
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
