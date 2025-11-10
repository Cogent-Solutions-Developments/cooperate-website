"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Briefcase, Target, Users2, Award } from "lucide-react";

const tabs = [
  {
    id: "story",
    title: "Our Story",
    icon: <Briefcase size={18} />,
    image: "/images/01.jpg",
    heading: "Delivering the Right Information at the Right Time",
    content: (
      <>
        <p className="text-neutral-600 leading-relaxed">
          At our core, we are a <b>"customer-centric events agency"</b> founded
          on the principle of delivering the right information to the right
          individuals at the opportune moment.
        </p>
        <p className="mt-4 text-neutral-600 leading-relaxed">
          We empower our clients with high-quality business intelligence and
          event services that exceed expectations by understanding their
          challenges and providing value-based solutions.
        </p>
        <p className="mt-4 text-neutral-600 leading-relaxed">
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
    image: "/images/02.jpg",
    heading: "Creating Tailored Business Intelligence Platforms",
    content: (
      <>
        <p className="text-neutral-600 leading-relaxed">
          Our team of experts meticulously creates customized virtual, hybrid,
          and physical events that enable businesses to communicate their value
          proposition to a carefully vetted audience.
        </p>
        <p className="mt-4 text-neutral-600 leading-relaxed">
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
    image: "/images/03.png",
    heading: "Your Business Intelligence Partner",
    content: (
      <>
        <p className="text-neutral-600 leading-relaxed">
          <b>YOUR BUSINESS INTELLIGENCE PARTNER.</b> Cogent Solutions is a
          highly respected Business Intelligence company. Our clients depend on
          us to create events that are not only successful but deliver
          unforgettable value.
        </p>
        <p className="mt-4 text-neutral-600 leading-relaxed">
          From conferences to trade shows, our team has the experience and
          passion to make every event a success.
        </p>
        <p className="mt-4 text-neutral-600 leading-relaxed">
          With a focus on innovation, collaboration, and customer experience,
          Cogent Solutions is the partner you can trust to elevate your business.
        </p>
      </>
    ),
  },
  {
    id: "values",
    title: "Our Core Business Values",
    icon: <Award size={18} />,
    image: "/images/04.jpg",
    heading: "Value for Our People",
    content: (
      <>
        <p className="text-neutral-600 leading-relaxed">
          We are officially certified as a “GREAT PLACE TO WORK™” company and
          have won the “Best Workplaces in UAE™ 2023”.
        </p>
        <p className="mt-4 text-neutral-600 leading-relaxed">
          We provide a safe and healthy environment, equal opportunities for
          growth, and foster a culture of respect, collaboration, and continuous
          learning.
        </p>
        <p className="mt-4 text-neutral-600 leading-relaxed">
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
    <section className="w-full min-h-screen bg-white flex flex-col items-center justify-start py-20">
      {/* === Section Title & Intro Text === */}
      <div className="w-full max-w-5xl mx-auto text-center mb-16 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-semibold text-neutral-900 mb-6"
        >
          About Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-lg md:text-xl text-neutral-700 font-medium leading-relaxed max-w-3xl mx-auto"
        >
          Through our conferences we transform your business challenges into
          opportunities. Our clients and customers are leading government
          entities and the{" "}
          <span className="text-[#172573] font-semibold">Fortune 500</span>{" "}
          companies.
        </motion.p>
      </div>

      {/* === Tabs Section === */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row rounded-4xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] bg-white overflow-hidden border border-neutral-100">
          {/* === Left Sidebar Tabs === */}
          <div className="flex md:flex-col w-full md:w-1/4 bg-neutral-50 p-3 gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 px-5 py-3 rounded-3xl text-sm font-semibold transition-all duration-300 ${
                  activeTab.id === tab.id
                    ? "bg-[#f1f7fd] text-[#172573] shadow-sm"
                    : "text-neutral-600 hover:bg-neutral-100"
                }`}
              >
                <span>{tab.icon}</span>
                {tab.title}
              </button>
            ))}
          </div>

          {/* === Right Content Area === */}
          <div className="flex flex-col md:flex-row w-full md:w-3/4 p-8 md:p-12 gap-10">
            {/* Text Content */}
            <div className="w-full md:w-2/3 flex flex-col justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                    {activeTab.heading}
                  </h3>
                  {activeTab.content}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/3 flex justify-end items-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.image}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl overflow-hidden shadow-md"
                >
                  <Image
                    src={activeTab.image}
                    alt={activeTab.title}
                    width={800}
                    height={600}
                    className="w-full h-[300px] md:h-[380px] object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
