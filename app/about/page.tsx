// In your page
import BestWorkplace from "../../components/about/BestWorkplace";
import NavBar from "@/components/layout/NavBar";
import OurStory from "../../components/about/OurStory";
import WhatWeDo from "../../components/about/WhatWe";
import Hero from "@/components/about/Hero";    
export default function AboutPage() {
  return (
    <>
      <NavBar />
      <Hero />
      <OurStory imageSrc="/images/about/team-photo.png" />
      <WhatWeDo imageSrc="/images/about/event1.jpg" />
      <BestWorkplace />
    </>
  );
}
