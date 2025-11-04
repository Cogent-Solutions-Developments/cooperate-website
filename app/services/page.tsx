import ServicesHero from "@/components/services/ServicesHero";
import ServicesBreaker from "@/components/services/ServicesBreaker";
import NavBar from "@/components/layout/NavBar";
import ServiceDetailSection from "@/components/services/ServiceDetailSection";
import ServicesHeroDemo from "@/components/services/ServicesHeroDemo";
export default function ServicesPage() {
   return (
    <>
      <NavBar/> 
      <ServicesHeroDemo />
      <ServicesBreaker />
      <ServiceDetailSection />
    </>
  );
}