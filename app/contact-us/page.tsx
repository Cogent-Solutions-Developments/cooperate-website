import ContactHero from '@/components/contact-us/Hero';
import NavBar from '@/components/layout/NavBar';
import ContactForm from '@/components/contact-us/ContactForm';
import Footer from '@/components/layout/Footer';
import SocialsTab from '@/components/layout/SocialsTab';
export default function ContactUsPage() {
  return (
    <>
      <NavBar />
      <ContactHero />
      <ContactForm />
      <SocialsTab />
      <Footer />
    </>
  );
}
