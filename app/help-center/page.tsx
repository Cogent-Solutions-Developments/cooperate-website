"use client";

import NavBar from "@/components/layout/NavBarDark";
import HelpCenterHero from "@/components/help-center/Hero";
import FAQSection from "@/components/help-center/FAQSection";
import PrivacyPolicy from "@/components/help-center/PrivacyPolicy";
import TermsAndConditions from "@/components/help-center/Terms&Conditions";
import PaymentPolicy from "@/components/help-center/PaymentPolicy";
import Footer from "@/components/layout/Footer";

export default function HelpCenterPage() {
  return (
    <>
      <NavBar />
      <HelpCenterHero />
      <FAQSection />
      <PrivacyPolicy />
      <TermsAndConditions />
      <PaymentPolicy />
      <Footer />
    </>
  );
}
