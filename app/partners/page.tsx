import Hero from "@/components/partners/Hero";
import IndustryLogos from "@/components/partners/IndustryLogos";
import GovernmentLogos from "@/components/partners/GovernmentLogos";
import NavBarDark from "@/components/layout/NavBarDark";
import SocialsTab from "@/components/layout/SocialsTab";
import Footer from "@/components/layout/Footer";

export default function PartnersPage() {
   return (
    <>
      <NavBarDark />
      <Hero />
      <IndustryLogos />
      <GovernmentLogos />
      <SocialsTab />
      <Footer />
    </>
  );
}