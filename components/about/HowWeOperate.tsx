"use client";

import { motion } from "framer-motion";
import { CheckCircle, Search, Users, ClipboardCheck, CalendarCheck } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: <Search size={22} className="text-[#172573]" />,
    title: "Research & Tailored Content",
    description:
      "Conducting extensive research and developing tailored content to ensure that your value message resonates with your target audience.",
  },
  {
    id: "02",
    icon: <Users size={22} className="text-[#172573]" />,
    title: "Prospect Identification",
    description:
      "Thoroughly researching and identifying prospects that align with your products and services to reach the most relevant audience.",
  },
  {
    id: "03",
    icon: <ClipboardCheck size={22} className="text-[#172573]" />,
    title: "Pre-Qualification",
    description:
      "Pre-qualifying attendees based on your specific requirements to ensure they are a perfect match for your offerings.",
  },
  {
    id: "04",
    icon: <CheckCircle size={22} className="text-[#172573]" />,
    title: "Confirmation of Attendance",
    description:
      "Confirming the attendance of pre-qualified individuals based on your parameters to guarantee optimal event outcomes.",
  },
  {
    id: "05",
    icon: <CalendarCheck size={22} className="text-[#172573]" />,
    title: "Event Execution",
    description:
      "Organizing your event for the pre-qualified attendees to ensure that you have access to the right audience under one roof.",
  },
];

export default function HowWeOperate() {
  return (
    <section className="w-full min-h-screen bg-white py-24 flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        {/* === Section Header === */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-semibold text-neutral-900 mb-4"
          >
            How We Operate
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed"
          >
            Our value proposition entails a comprehensive five-step approach aimed at maximizing
            the impact of your investment.
          </motion.p>
        </div>

        {/* === Steps Grid === */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col p-8 bg-[#f8f9fb] rounded-3xl border border-neutral-200 hover:border-[#172573] transition-all duration-300"
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center rounded-full bg-[#172573] text-white text-sm font-semibold shadow-md">
                {step.id}
              </div>

              {/* Icon */}
              <div className="mb-4 p-3 rounded-full bg-[#e7e9ff] w-fit">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                {step.description}
              </p>

              {/* Hover Accent Line */}
              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#172573] transition-all duration-300 group-hover:w-full rounded-b-3xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
