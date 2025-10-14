import ContactHero from "@/components/contact/ContactHero";
import ContactCards from "@/components/contact/ContactCards";
import Offices from "@/components/contact/Offices";
import ContactForm from "@/components/contact/ContactForm";
import SupportStrip from "@/components/contact/SupportStrip"; // <-- add

export const metadata = {
  title: "Contact Us | Cogent Solutions™",
  description:
    "Get in touch with Cogent Solutions™ for partnerships, general enquiries, and event support. Dubai HQ, APAC HQ, and KSA (coming soon).",
};

export default function ContactUsPage() {
  return (
    <>
      <ContactHero />

      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContactCards />
        </div>
      </section>

      <section className="py-4 sm:py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Offices />
        </div>
      </section>

      <SupportStrip /> 

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
