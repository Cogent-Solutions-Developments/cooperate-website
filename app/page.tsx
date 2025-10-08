import AboutSection from "@/components/home/AboutSection";
import ExploreConferences from "@/components/home/ExploreConferences";
import PartnersSection from "@/components/home/PartnersSection";
import StatsStrip from "@/components/home/StatsStrip";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import UpcomingConferences from "@/components/home/UpcomingConferences";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans">
      <AboutSection 
        videoSrc="/videos/cogent.mp4" 
        poster="/images/about-thumbnail.jpg" 
      />
      <StatsStrip />
      <ExploreConferences />
      <UpcomingConferences />
      <PartnersSection />
      <TestimonialsSection />
    </div>
  );
}
