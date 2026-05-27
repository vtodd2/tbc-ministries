import { ContactForm } from '../../components/ContactForm';
import { SectionHeader } from '../../components/SectionHeader';
import { SocialLinks } from '../../components/SocialLinks';

export const metadata = {
  title: 'Contact | Kingdom Light Ministry',
  description: 'Get in touch with Kingdom Light Ministry for prayer requests, partnerships, and ministry inquiries.',
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-12">
      <SectionHeader title="Contact" subtitle="Reach out for prayer, ministry partnerships, book orders, or digital discipleship." />
      <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_0.6fr] lg:items-start">
        <ContactForm />
        <div className="space-y-8 rounded-[2rem] border border-white/10 bg-black/80 p-10 text-white shadow-glow">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-gold/80">Connect with us</p>
            <h2 className="mt-4 text-3xl font-semibold">We&apos;re here to listen and support.</h2>
          </div>
          <div className="space-y-4 leading-7 text-white/70">
            <p>Whether you need prayer, ministry resources, or partnership information, send us a message and our team will respond promptly.</p>
            <p>Email: <a href="mailto:hello@kingdomlightministry.org" className="text-gold hover:text-white">hello@kingdomlightministry.org</a></p>
            <p>Phone: +1 (555) 014-0825</p>
            <p>Office: 1200 Horizon Ave, Suite 205</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-gold/80">Social</p>
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
