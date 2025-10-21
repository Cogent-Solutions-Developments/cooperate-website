"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const NAV_HEIGHT = 80; // adjust this based on your navbar height

type Service = {
  id: number;
  title: string;
  subtitle: string;
  description: string[];
  link: string;
  video?: string;
  image?: string;
};

const services: Service[] = [
  {
    id: 1,
    title: "Conferences & Exhibitions",
    subtitle: "Global Platforms",
    description: [
      "We engineer large-scale B2B conferences that connect industries and accelerate innovation.",
      "From content strategy to on-site execution, every detail is built for measurable outcomes.",
    ],
    link: "/services/conferences",
    video: "/videos/services/077.mp4",
  },
  {
    id: 2,
    title: "Executive Boardrooms",
    subtitle: "Invitation-Only Dialogues",
    description: [
      "Private boardroom experiences designed to unite senior decision-makers around high-value conversations.",
      "Precision curation ensures relevance, intent, and tangible business impact.",
    ],
    link: "/services/boardrooms",
    video: "/videos/services/077.mp4",
  },
  {
    id: 3,
    title: "Experiential Events",
    subtitle: "Immersive Brand Journeys",
    description: [
      "We combine storytelling, technology, and meticulous production to deliver moments that endure.",
      "Experiences that move people—and move the business.",
    ],
    link: "/services/experiential",
    video: "/videos/services/077.mp4",
  },
  {
    id: 4,
    title: "CS Podcasts",
    subtitle: "Voices of Leadership",
    description: [
      "Original conversations with innovators, regulators, and industry pioneers.",
      "Extending Cogent’s mission: connecting ideas with opportunity.",
    ],
    link: "/services/podcasts",
    video: "/videos/services/077.mp4",
  },
];

export default function ServiceCommandCenter() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full bg-gradient-to-b from-[#F8F9FB] to-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex gap-8 md:gap-12">
          {/* LEFT — Sticky Command Panel */}
          <aside className="sticky top-[80px] h-[calc(100vh-80px)] w-[34%] hidden lg:flex flex-col justify-between py-12">
            <div>
              <h6 className="text-xs tracking-[0.3em] uppercase text-neutral-500 font-semibold">
                Our Verticals
              </h6>
              <h2 className="mt-3 text-3xl xl:text-4xl font-bold text-neutral-900 leading-tight">
                Precision across{" "}
                <span className="text-[#1D309D]">every domain</span>
              </h2>
              <p className="mt-3 text-sm text-neutral-600 max-w-sm">
                Explore Cogent’s core divisions. Scroll to move through each chapter.
              </p>
            </div>

            {/* Dynamic Counter */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-neutral-800"
            >
              <div className="text-5xl font-semibold tabular-nums leading-none">
                {String(activeIndex + 1).padStart(2, "0")}
                <span className="text-neutral-300">
                  {" "}
                  / {String(services.length).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-2 text-sm text-neutral-500">
                {services[activeIndex].title}
              </div>
            </motion.div>
          </aside>

          {/* RIGHT — Scrollable Scenes */}
          <main className="w-full lg:w-[66%]">
            {services.map((s, i) => (
              <Scene
                key={s.id}
                service={s}
                index={i}
                onInView={() => setActiveIndex(i)}
              />
            ))}
          </main>
        </div>
      </div>
    </section>
  );
}

/** One full-height scene with bg media + content */
function Scene({
  service,
  index,
  onInView,
}: {
  service: Service;
  index: number;
  onInView: () => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.6 });

  useEffect(() => {
    if (isInView) onInView();
  }, [isInView, onInView]);

  return (
    <div
      ref={ref}
      className="relative mt-16 h-[calc(80vh-80px)] rounded-3xl overflow-hidden mb-10 shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
    >
      {/* Background media */}
      {service.video ? (
        <video
          src={service.video}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : service.image ? (
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : null}

      {/* Dim layer for readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content block */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 h-full flex items-end"
      >
        <div className="w-full p-8 md:p-12 lg:p-2">
          <div className="max-w-2xl bg-white/50 backdrop-blur-md border border-white/40 rounded-2xl p-6 md:p-8">
            <p className="text-xs tracking-[0.25em] uppercase text-neutral-600 font-semibold">
              {service.subtitle}
            </p>
            <h3 className="mt-2 text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
              {service.title}
            </h3>

            {service.description.map((para, i) => (
              <p
                key={i}
                className="mt-3 text-[15px] md:text-base text-neutral-700 leading-relaxed"
              >
                {para}
              </p>
            ))}

            <Link
              href={service.link}
              className="mt-5 inline-flex items-center gap-2 bg-[#1D309D] hover:bg-[#16287A] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors"
            >
              View More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12l-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
