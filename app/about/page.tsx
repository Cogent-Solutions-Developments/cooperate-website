"use client";

import NavBar from "@/components/layout/NavBar";
import Hero from "@/components/about/Hero";
import StoryTabs from "@/components/about/StoryTabs";
// import HowWeOperate from "@/components/about/HowWeOperate";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <section className="relative h-screen">
        <Hero />
      </section>
      <StoryTabs />
      {/* <HowWeOperate /> */}
      <Footer />
    </>
  );
}
