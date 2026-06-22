import { ContactForm } from "@/app/components/ContactForm";
import { SectionHeading } from "@/app/components/SectionHeading";

export default function ContactPage() {
  return (
    <div className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Contact" title="Get in touch" description="We'd love to hear from you." />
        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
