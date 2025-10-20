"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// You can replace these video paths with your actual files
const services = [
  {
    id: 1,
    title: "Conferences & Exhibitions",
    description: [
      "Cogent Solutions designs and executes large-scale B2B conferences that connect industries and enable thought leadership. Our experienced teams manage every detail — from concept development to on-site execution — ensuring flawless delivery and measurable outcomes.",
      "Each event is built to maximize engagement, drive partnerships, and position your brand in front of the right decision-makers at the right time.",
    ],
    video: "/videos/services/077.mp4",
    link: "/services/conferences",
  },
  {
    id: 2,
    title: "Executive Boardrooms",
    description: [
      "Our exclusive Executive Boardrooms provide a private environment for decision-makers to engage in meaningful discussions. These sessions are carefully curated to ensure high-value connections that translate into real business impact.",
      "Every boardroom is designed with precision — focusing on qualified attendees, relevant topics, and premium 5-star venues to create a seamless experience.",
    ],
    video: "/videos/services/077.mp4",
    link: "/services/boardrooms",
  },
  {
    id: 3,
    title: "Experiential Events",
    description: [
      "We believe experiences create lasting impressions. Cogent’s experiential events combine immersive storytelling, advanced technology, and meticulous production to deliver one-of-a-kind brand experiences.",
      "From concept to execution, we transform ordinary gatherings into extraordinary journeys that resonate with audiences long after the event concludes.",
    ],
    video: "/videos/services/077.mp4",
    link: "/services/experiential",
  },
  {
    id: 4,
    title: "CS Podcasts",
    description: [
      "Our CS Podcasts platform gives a voice to leaders shaping industries across the globe. We bring together innovators, policymakers, and corporate pioneers to discuss emerging trends, success stories, and actionable insights.",
      "These conversations extend Cogent’s mission of connecting ideas with opportunities — anywhere, anytime.",
    ],
    video: "/videos/services/077.mp4",
    link: "/services/podcasts",
  },
];

export default function ServiceDetailSection() {
  return (
    <section className="relative py-5 bg-gradient-to-b from-[#F8F9FB] to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* === Section Header === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-left"
        >
          {/* <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#1D309D]/80">
            Explore Our Divisions in Depth
          </span> */}
        </motion.div>

        {/* === Services Loop === */}
        <div className="flex flex-col gap-20">
          {services.map((service, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col lg:flex-row ${
                  isReversed ? "lg:flex-row-reverse" : ""
                } items-center gap-10 lg:gap-20`}
              >
                {/* === Text Content === */}
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-5">
                    {service.title}
                  </h2>
                  {service.description.map((para, i) => (
                    <p
                      key={i}
                      className="text-neutral-600 text-base leading-relaxed mb-4"
                    >
                      {para}
                    </p>
                  ))}

                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 bg-[#1D309D] hover:bg-[#16287A] text-white text-sm font-medium px-6 py-3 rounded-full transition-all duration-300 mt-4"
                  >
                    View More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Link>
                </div>

                {/* === Video Side === */}
                <div className="flex-1 relative w-full overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
                  <video
                    src={service.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none rounded-2xl" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
