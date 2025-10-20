import ServicesHero from "@/components/services/ServicesHero";
import ServicesBreaker from "@/components/services/ServicesBreaker";
import NavBar from "@/components/layout/NavBar";
import ServiceDetailSection from "@/components/services/ServiceDetailSection";

export default function ServicesPage() {
   return (
    <>
      <NavBar/> 
      <ServicesHero />
      <ServicesBreaker />
      <ServiceDetailSection />
    </>
  );
}