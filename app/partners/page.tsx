// import PartnersHero from "@/components/partners/PartnersHero";
import Hero from "@/components/partners/Hero";
import IndustryLogos from "@/components/partners/IndustryLogos";
import GovernmentLogos from "@/components/partners/GovernmentLogos";
import NavBarDark from "@/components/layout/NavBarDark";
import Footer from "@/components/layout/Footer";

export default function PartnersPage() {
   return (
    <>
      <NavBarDark />
      <Hero />
      <IndustryLogos />
      <GovernmentLogos />
      <Footer />
    </>
  );
}