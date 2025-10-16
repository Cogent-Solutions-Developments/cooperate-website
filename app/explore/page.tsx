"use client";

import { useState } from "react";
import ExploreHero from "@/components/explore/ExploreHero";
import ExploreSwitch from "@/components/explore/ExploreSwitch";
import ConferencesSection from "@/components/explore/sections/ConferencesSection";
// import BoardroomsSection from "@/components/explore/sections/BoardroomsSection";
// import VirtualEventsSection from "@/components/explore/sections/VirtualEventsSection";
import { ExploreCategory } from "@/types/explore";

export default function ExplorePage() {
  const [active, setActive] = useState<ExploreCategory>("conferences");

  return (
    <>
      <ExploreHero
        images={[
          "/images/explore/hero/h4.jpeg",
          "/images/explore/hero/h2.jpg",
          "/images/explore/hero/h3.jpeg",
          "/images/explore/hero/h1.jpg",
          "/images/explore/hero/h5.webp",
          "/images/explore/hero/h6.png",
          "/images/explore/hero/h7.jpeg",
          "/images/explore/hero/h8.jpeg",
          "/images/explore/hero/h9.jpeg",
          "/images/explore/hero/h10.jpeg",
        ]}
      />

      <ExploreSwitch active={active} onChange={setActive} />

      {active === "conferences" && <ConferencesSection />}
      {/* {active === "boardrooms" && <BoardroomsSection />}
      {active === "virtual" && <VirtualEventsSection />} */}
    </>
  );
}
