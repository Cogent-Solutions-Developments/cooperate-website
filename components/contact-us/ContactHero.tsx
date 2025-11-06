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
            <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
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
              Let's Connect & Collaborate
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9, ease: 'easeOut' }}
              className="mt-4 max-w-md text-neutral-600 text-sm sm:text-base md:text-lg mx-auto lg:mx-0"
            >
              Whether you're exploring sponsorships, partnerships, or event collaborations —
              our team is here to help you make it happen.
            </motion.p>

            <motion.a
              href="#contact-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="inline-block mt-8 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-neutral-800 transition-all"
            >
              Get in Touch
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
