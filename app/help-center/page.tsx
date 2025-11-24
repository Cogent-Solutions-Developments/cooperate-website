"use client";

import NavBar from "@/components/layout/NavBar";
import HelpCenterHero from "@/components/help-center/Hero";
import FAQSection from "@/components/help-center/FAQSection";
import PrivacyPolicy from "@/components/help-center/PrivacyPolicy";
export default function HelpCenterPage() {
  return (
    <>
      <NavBar />
      <HelpCenterHero />
      <FAQSection />
      <PrivacyPolicy />
    </>
  );
}
