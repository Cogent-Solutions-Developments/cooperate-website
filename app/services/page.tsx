import ServicesHero from "@/components/services/ServicesHero";
import ServicesBreaker from "@/components/services/ServicesBreaker";
import NavBar from "@/components/layout/NavBar";

export default function ServicesPage() {
   return (
    <>
      <NavBar/> 
      <ServicesHero />
      <ServicesBreaker />
    </>
  );
}