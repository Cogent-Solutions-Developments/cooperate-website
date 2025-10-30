import AboutSection from "@/components/home/AboutSection";
import NavBarDark from "@/components/layout/NavBarDark";
import Hero from "@/components/home/Hero";
import ExploreConferences from "@/components/home/ExploreConferences";
import PartnersSection from "@/components/home/PartnersSection";
import StatsStrip from "@/components/home/StatsStrip";
import TestimonialsSection from "@/components/home/TestimonialsSection";
// import UpcomingConferences from "@/components/home/UpcomingConferences";
import IndustryPartners from "@/components/home/IndustryPartners";
import About from "@/components/home/About";
import WallOfTrust from "@/components/home/TestimonialsBreaker";
import GetInTouch from "@/components/home/GetInTouch";
import Image from "next/image";

export default function Home() {
  return  (
    <>
      <NavBarDark />
      <Hero />
      <About />
      <StatsStrip />
      <ExploreConferences />
      {/* <UpcomingConferences /> */}
      {/* <PartnersSection /> */}
      <IndustryPartners />
      <WallOfTrust />
      <GetInTouch /> 
    </>
  );
}
