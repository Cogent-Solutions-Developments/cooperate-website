import ContactHero from '@/components/contact-us/Hero';
import NavBar from '@/components/layout/NavBar';
import ContactForm from '@/components/contact-us/ContactForm';
import Footer from '@/components/layout/Footer';
export default function ContactUsPage() {
  return (
    <>
      <NavBar />
      <ContactHero />
      <ContactForm />
      <Footer />
    </>
  );
}
