// In your page
import BestWorkplace from "../../components/about/BestWorkplace";
import OurStory from "../../components/about/OurStory";
import WhatWeDo from "../../components/about/WhatWe";
    
export default function AboutPage() {
  return (
    <>
      <OurStory imageSrc="/images/about/team-photo.png" />
      <WhatWeDo imageSrc="/images/about/event1.jpg" />
      <BestWorkplace />
    </>
  );
}
