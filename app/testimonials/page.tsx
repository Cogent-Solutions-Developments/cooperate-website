import TestimonialsHero from "@/components/testimonials/TestimonialsHero";
import NavBar from "@/components/layout/NavBarDark";
import TestimonialsBreaker from "@/components/testimonials/TestimonialsBreaker";
import TestimonialsVideo from "@/components/testimonials/TestimonialsVideo";

export default function ServicesPage() {
   return (
    <>
    <NavBar/> 
     <TestimonialsHero />
     <TestimonialsBreaker />
     <TestimonialsVideo />
    </>
  );
}