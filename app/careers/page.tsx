import NavBar from "@/components/layout/NavBarDark";
import CareersHero from "@/components/careers/CareersHero";

export default function CareersPage() {
  return (
    <>
      <NavBar />
      <CareersHero />
      {/* Optional anchors for hero buttons */}
      <div id="open-roles" className="h-4" />
      <div id="why-cogent" className="h-4" />
    </>
  );
}
