import NavBarDark from "@/components/layout/NavBarDark";
import Hero from "@/components/home/Hero";
import ExploreConferences from "@/components/home/ExploreConferences";
import UpcomingEventsSection from "@/components/home/UpcomingEventsSection";
import IndustryPartners from "@/components/home/IndustryPartners";
import About from "@/components/home/About";
import WallOfTrust from "@/components/home/TestimonialsBreaker";
import GetInTouch from "@/components/home/GetInTouch";
import Footer from "@/components/layout/Footer";
import SocialsTab from "@/components/layout/SocialsTab";

export default function Home() {
  return (
    <>
      <NavBarDark />
      <Hero className="hero" /> 
      <About />
      <ExploreConferences />
      <UpcomingEventsSection />
      <IndustryPartners />
      <WallOfTrust />
      <GetInTouch />
      <Footer />
      <SocialsTab />
    </>
  );
}
