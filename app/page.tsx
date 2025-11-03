import AboutSection from "@/components/home/AboutSection";
import NavBarDark from "@/components/layout/NavBarDark";
import Hero from "@/components/home/Hero";
import ExploreConferences from "@/components/home/ExploreConferences";
import PartnersSection from "@/components/home/PartnersSection";
import StatsStrip from "@/components/home/StatsStrip";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import UpcomingEventsSection from "@/components/home/UpcomingEventsSection";
import IndustryPartners from "@/components/home/IndustryPartners";
import About from "@/components/home/About";
import WallOfTrust from "@/components/home/TestimonialsBreaker";
import GetInTouch from "@/components/home/GetInTouch";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import SocialsTab from "@/components/layout/SocialsTab";

export default function Home() {
  return (
    <>
      <NavBarDark />
      <Hero className="hero" /> {/* ✅ Add className='hero' so scroll detection works */}
      <About />
      {/* <StatsStrip /> */}
      <ExploreConferences />
      <UpcomingEventsSection />
      {/* <PartnersSection /> */}
      <IndustryPartners />
      <WallOfTrust />
      <GetInTouch />
      <Footer />

      {/* ✅ Place SocialsTab at the end, so it stays fixed & global */}
      <SocialsTab />
    </>
  );
}
