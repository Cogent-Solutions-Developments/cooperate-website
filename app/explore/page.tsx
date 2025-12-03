"use client";

import { useState } from "react";
import ExploreHero from "@/components/explore/ExploreHero";
import ExploreSwitch from "@/components/explore/ExploreSwitch";
import ConferencesSection from "@/components/explore/sections/ConferencesSection";
import NavBar from "@/components/layout/NavBar";
import BoardroomSection from "@/components/explore/sections/BoardroomSection";
// import VirtualEventsSection from "@/components/explore/sections/VirtualEventsSection";
import { ExploreCategory } from "@/types/explore";
import Footer from "@/components/layout/Footer";

export default function ExplorePage() {
  const [active, setActive] = useState<ExploreCategory>("conferences");

  return (
    <>
     {/* ✅ Navbar always at top */}
      <NavBar />
      <ExploreHero/>
      <ExploreSwitch active={active} onChange={setActive} />
      {active === "conferences" && <ConferencesSection />}
      {active === "boardrooms" && <BoardroomSection />}
      {/* {active === "virtual" && <VirtualEventsSection />} */}
      <Footer />
    </>
  );
}
