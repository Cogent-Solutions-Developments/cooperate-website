"use client";

import NavBar from "@/components/layout/NavBar";
import Hero from "@/components/about/Hero";
import HowWeOpe from "@/components/about/HowWeOperate";
import { FeaturesSectionDemo } from "@/components/about/BentoGrid";
import Footer from "@/components/layout/Footer";
import SocialsTab from "@/components/layout/SocialsTab";

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <section className="relative h-screen">
      <Hero />
      </section>
      <FeaturesSectionDemo />
      <HowWeOpe />
      <Footer />
      <SocialsTab />
    </>
  );
}
