"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Target, Users2, Award } from "lucide-react";

const tabs = [
  {
    id: "story",
    title: "Our Story",
    icon: <Briefcase size={18} />,
    heading: "Delivering the Right Information at the Right Time",
    content: (
      <>
        <p className="text-neutral-300 leading-relaxed">
          At our core, we are a{" "}
          <b className="text-white">"customer-centric events agency"</b> founded
          on the principle of delivering the right information to the right
          individuals at the opportune moment.
        </p>
        <p className="mt-4 text-neutral-300 leading-relaxed">
          We empower our clients with high-quality business intelligence and
          event services that exceed expectations by understanding their
          challenges and providing value-based solutions.
        </p>
        <p className="mt-4 text-neutral-300 leading-relaxed">
          Our events have the power to spark new business relationships, deepen
          existing connections, and drive success for all involved.
        </p>
      </>
    ),
  },
  {
    id: "whatwedo",
    title: "What We Do",
    icon: <Target size={18} />,
    heading: "Creating Tailored Business Intelligence Platforms",
    content: (
      <>
        <p className="text-neutral-300 leading-relaxed">
          Our team of experts meticulously creates customized virtual, hybrid,
          and physical events that enable businesses to communicate their value
          proposition to a carefully vetted audience.
        </p>
        <p className="mt-4 text-neutral-300 leading-relaxed">
          Our research-backed, tailor-made platforms offer businesses
          unparalleled access to industries and senior decision-makers worldwide
          without limitations.
        </p>
      </>
    ),
  },
  {
    id: "whoweare",
    title: "Who We Are",
    icon: <Users2 size={18} />,
    heading: "Your Business Intelligence Partner",
    content: (
      <>
        <p className="text-neutral-300 leading-relaxed">
          <b className="text-white">YOUR BUSINESS INTELLIGENCE PARTNER.</b>{" "}
          Cogent Solutions is a highly respected Business Intelligence company.
          Our clients depend on us to create events that are not only successful
          but deliver unforgettable value.
        </p>
        <p className="mt-4 text-neutral-300 leading-relaxed">
          From conferences to trade shows, our team has the experience and
          passion to make every event a success.
        </p>
        <p className="mt-4 text-neutral-300 leading-relaxed">
          With a focus on innovation, collaboration, and customer experience,
          Cogent Solutions is the partner you can trust to elevate your
          business.
        </p>
      </>
    ),
  },
  {
    id: "values",
    title: "Our Business Values",
    icon: <Award size={18} />,
    heading: "Value for Our People",
    content: (
      <>
        <p className="text-neutral-300 leading-relaxed">
          We are officially certified as a “GREAT PLACE TO WORK™” company and
          have won the “Best Workplaces in UAE™ 2023”.
        </p>
        <p className="mt-4 text-neutral-300 leading-relaxed">
          We provide a safe and healthy environment, equal opportunities for
          growth, and foster a culture of respect, collaboration, and continuous
          learning.
        </p>
        <p className="mt-4 text-neutral-300 leading-relaxed">
          Our organization prioritizes employee and client satisfaction to build
          strong experiences and achieve continuous success.
        </p>
      </>
    ),
  },
];

export default function ModernTabsSection() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="w-full py-10 h-[600px] bg-black flex items-stretch">
      <div className="w-full flex flex-row rounded-3xl bg-[#0d0f16] border border-white/10 shadow-xl overflow-hidden">
        {/* LEFT SIDE TABS */}
        <div className="w-[280px] min-w-[260px] bg-[#0d0f16] p-6 flex flex-col gap-4 border-r border-white/5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center justify-start gap-3 px-5 py-4 rounded-4xl text-base font-medium text-left transition-all duration-300 
    ${
      activeTab.id === tab.id
        ? "bg-[#0e1a36] text-[#95b8ff] shadow-[0_0_18px_#7aa2ff44] border border-[#7aa2ff44]"
        : "text-neutral-400 hover:bg-white/5"
    }`}
            >
              <span className="flex-shrink-0">{tab.icon}</span>
              <span className="whitespace-normal">{tab.title}</span>
            </button>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 p-10 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                {activeTab.heading}
              </h3>
              <div className="text-md">{activeTab.content}</div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
