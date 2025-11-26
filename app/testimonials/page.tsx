// import TestimonialsHero from "@/components/testimonials/TestimonialsHero";
import NavBar from "@/components/layout/NavBar";
import TestimonialsBreaker from "@/components/testimonials/TestimonialsBreaker";
import TestimonialsVideo from "@/components/testimonials/TestimonialsVideo";
import Hero from "@/components/testimonials/Hero";
import Footer from "@/components/layout/Footer";

export default function ServicesPage() {
   return (
    <>
    <NavBar/> 
     <Hero />
     {/* <TestimonialsHero /> */}
     <TestimonialsBreaker />
     <TestimonialsVideo />
     <Footer />
    </>
  );
}