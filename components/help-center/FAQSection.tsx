"use client";

import { useState } from "react";
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
      "Event management refers to the comprehensive process of planning, organizing, and executing professional events. It involves venue selection, logistics management, budgeting, marketing, vendor coordination, and on-site operations to ensure a smooth and successful event experience.",
  },
  {
    question: "Which types of events does Cogent Solutions specialize in?",
    answer:
      "Cogent Solutions specializes in professional B2B events such as conferences, exhibitions, and boardrooms. We focus on facilitating industry discussions, emerging trends, high-value networking opportunities, and meaningful business collaborations.",
  },
  {
    question: "What types of event platforms can Cogent Solutions provide?",
    answer:
      "Cogent Solutions delivers events across physical, virtual, and hybrid platforms. Each event is tailored to specific requirements, ensuring a seamless experience that aligns with your vision and strategic objectives.",
  },
  {
    question:
      "I'm interested in sponsoring or exhibiting at one of Cogent Solutions' events, how can I start?",
    answer:
      "If you are interested in joining as a sponsor or exhibitor, reach out to our Partnerships Team at partnerships@csevents.ae. We will guide you through available opportunities and event-specific packages.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="
                border border-neutral-200 rounded-2xl 
                hover:border-neutral-300 transition-all bg-white/80 backdrop-blur-sm
              "
            >
              {/* HEADER */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-6 text-left"
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

              {/* CONTENT ANIMATION */}
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
