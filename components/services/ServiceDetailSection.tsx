"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const NAV_HEIGHT = 80;

type Service = {
  id: number;
  title: string;
  description: string[];
  link: string;
  video?: string;
  image?: string;
};

const services: Service[] = [
  {
    id: 1,
    title: "Conferences & Exhibitions",
    description: [
      "We engineer large-scale B2B conferences that connect industries and accelerate innovation.",
      "From content strategy to on-site execution, every detail is built for measurable outcomes.",
    ],
    link: "/services/conferences",
    video: "/videos/conferences wide.mp4",
  },
  {
    id: 2,
    title: "Executive Boardrooms",
    description: [
      "Private boardroom experiences designed to unite senior decision-makers around high-value conversations.",
      "Precision curation ensures relevance, intent, and tangible business impact.",
    ],
    link: "/services/boardrooms",
    video: "/videos/boardroom wide.mp4",
  },
  // {
  //   id: 3,
  //   title: "Experiential Events",
  //   description: [
  //     "We combine storytelling, technology, and meticulous production to deliver moments that endure.",
  //     "Experiences that move people—and move the business.",
  //   ],
  //   link: "/services/experiential",
  //   video: "/videos/services/077.mp4",
  // },
  {
    id: 4,
    title: "CS Podcasts",
    description: [
      "Original conversations with innovators, regulators, and industry pioneers.",
      "Extending Cogent’s mission: connecting ideas with opportunity.",
    ],
    link: "/services/podcasts",
    video: "/videos/podcast wide.mp4",
  },
];

export default function ServiceCommandCenter() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full bg-gradient-to-b from-[#F8F9FB] to-white pb-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* LEFT PANEL (Desktop only) */}
          <aside className="hidden lg:flex sticky top-[80px] h-[calc(100vh-80px)] w-[34%] flex-col justify-between py-12">
            <div>
              <h2 className="mt-3 text-3xl xl:text-4xl font-bold text-neutral-900 leading-tight">
                Precision across{" "}
                <span className="text-[#1D309D]">every domain</span>
              </h2>

              <p className="mt-3 text-sm text-neutral-600 max-w-sm">
                Explore Cogent’s core divisions.
              </p>
            </div>

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

          {/* RIGHT SIDE — Responsive Scenes */}
          <main className="w-full lg:w-[66%] space-y-12">
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

/* Scene Component */
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
  const isInView = useInView(ref, { amount: 0.45 });

  useEffect(() => {
    if (isInView) onInView();
  }, [isInView, onInView]);

  return (
    <div
      ref={ref}
      className="
        relative rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]
        h-[70vh] md:h-[75vh] lg:h-[calc(80vh-80px)]
        flex items-end
      "
    >
      {/* Background */}
      {service.video ? (
        <video
          src={service.video}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <img
          src={service.image || ""}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Strong Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/75 to-black/95" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative z-10 w-full p-6 sm:p-8 md:p-10 lg:p-12"
      >
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
          {service.title}
        </h3>

        {service.description.map((para, i) => (
          <p
            key={i}
            className="mt-2 text-sm sm:text-base text-neutral-200 leading-tight"
          >
            {para}
          </p>
        ))}

        <Link
          href={service.link}
          className="mt-5 inline-block" // keeps spacing correct
        >
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
                />
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
                />
              </svg>
            </span>
            View More
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
