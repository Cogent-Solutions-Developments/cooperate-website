"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Event Management?",
    answer:
      "Event management refers to the comprehensive process of planning, organizing, and executing professional events. It involves venue selection, logistics, budgeting, marketing, vendor coordination, and on-site operations to ensure a smooth and successful event experience.",
  },
  {
    question: "Which types of events does Cogent Solutions specialize in?",
    answer:
      "Cogent Solutions specializes in B2B events including conferences, exhibitions, and boardrooms — designed to facilitate industry discussions, emerging trends, and meaningful business collaborations.",
  },
  {
    question: "What types of event platforms can Cogent Solutions provide?",
    answer:
      "Cogent Solutions delivers physical, virtual, and hybrid event formats — each tailored to your strategic objectives for the best possible experience.",
  },
  {
    question: "I'm interested in sponsoring or exhibiting how can I start?",
    answer:
      "Reach out to our Partnerships Team at partnerships@csevents.ae and we will share available sponsorship and exhibitor opportunities.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [maxHeaderHeight, setMaxHeaderHeight] = useState<number | null>(null);

  // refs for each FAQ header (the button)
  const headerRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  // Measure tallest header and sync heights
  useEffect(() => {
    const heights = headerRefs.current
      .map((el) => el?.offsetHeight ?? 0)
      .filter((h) => h > 0);

    if (heights.length) {
      setMaxHeaderHeight(Math.max(...heights));
    }
  }, [faqs.length]);

  // Recalculate on resize (handle responsive changes)
  useEffect(() => {
    const handleResize = () => {
      const heights = headerRefs.current
        .map((el) => el?.offsetHeight ?? 0)
        .filter((h) => h > 0);

      if (heights.length) {
        setMaxHeaderHeight(Math.max(...heights));
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* LEFT COLUMN — full-height, support box aligned to bottom */}
        <div className="flex flex-col">
          <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight mb-8">
            Frequently asked <br /> questions
          </h2>

          {/* Push box to bottom */}
          <div className="mt-auto">
            {/* SUPPORT CARD WITH MOTION EFFECT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3 }}
              className="p-6 rounded-2xl border border-neutral-200 bg-white/70 backdrop-blur-md shadow-sm"
            >
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Still have a question?
              </h3>

              <p className="text-neutral-600 text-[15px] leading-relaxed mb-5">
                Can’t find the answer you’re looking for? Send us an email and
                our team will get back to you as soon as possible.
              </p>

              {/* BUTTON ANIMATION (unchanged) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3 }}
                className="mt-6"
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
                  Get In Touch
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT COLUMN — FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="
                border border-neutral-200 rounded-2xl 
                bg-white/80 backdrop-blur-sm shadow-sm
                hover:border-neutral-300 transition-all
              "
            >
              {/* FAQ HEADER (this is what we equalize) */}
              <button
                ref={(el) => {
                  headerRefs.current[i] = el;
                }}
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-6 text-left"
                style={
                  maxHeaderHeight
                    ? { minHeight: maxHeaderHeight }
                    : undefined
                }
              >
                <span className="text-lg font-medium text-neutral-900">
                  {faq.question}
                </span>

                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-neutral-600" />
                </motion.div>
              </button>

              {/* FAQ ANSWER */}
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-neutral-600 leading-relaxed text-[15.5px]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
