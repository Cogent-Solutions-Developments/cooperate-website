import ServicesBreaker from "@/components/services/ServicesBreaker";
import NavBar from "@/components/layout/NavBar";
import ServiceDetailSection from "@/components/services/ServiceDetailSection";
import ServicesHeroDemo from "@/components/services/ServicesHeroDemo";
import Footer from "@/components/layout/Footer";

export default function ServicesPage() {
   return (
    <>
      <NavBar/> 
      <ServicesHeroDemo />
      <ServicesBreaker />
      <ServiceDetailSection />
      <Footer />
    </>
  );
}