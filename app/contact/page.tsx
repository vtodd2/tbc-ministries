import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactForm } from '../../components/ContactForm';
import { SectionHeader } from '../../components/SectionHeader';
import { SocialLinks } from '../../components/SocialLinks';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS, SITE_NAME } from '../../lib/constants';

export const metadata: Metadata = {
  title: 'Contact | Transformed Believers Church',
  description:
    'Get in touch with TBC Ministries. Reach out for prayer, ministry partnerships, book orders, speaking engagements, or general inquiries.',
};

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <SectionHeader
          title="Contact"
          subtitle="We are here to listen, pray, and serve. Reach out anytime."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <ContactForm />

          <div className="space-y-6">
            {/* Contact info */}
            <div className="rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-glow">
              <p className="text-xs uppercase tracking-[0.35em] text-gold/70">Get in Touch</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950">
                We&apos;d love to hear from you.
              </h2>
              <p className="mt-4 leading-7 text-slate-700">
                Whether you have a prayer request, ministry inquiry, book order question, or
                partnership interest — our team responds within 1–2 business days.
              </p>

              <div className="mt-7 space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-gold">✉</span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gold/50 mb-1">Email</p>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="transition hover:text-gold">
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-gold">☎</span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gold/50 mb-1">Phone</p>
                    <a
                      href={`tel:${CONTACT_PHONE.replace(/\D/g, '')}`}
                      className="transition hover:text-gold"
                    >
                      {CONTACT_PHONE}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-gold">⌖</span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gold/50 mb-1">Address</p>
                    <p>{CONTACT_ADDRESS}</p>
                  </div>
                </div>
              </div>

              <div className="mt-7">
                <p className="text-xs uppercase tracking-[0.2em] text-gold/50 mb-3">Follow Us</p>
                <SocialLinks />
              </div>
            </div>

            {/* Service times */}
            <div className="rounded-[2rem] border border-gold/15 bg-gold/5 p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-gold/70">Service Times</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">Join Us In Person</h3>
              <div className="mt-5 space-y-3 text-sm text-slate-700">
                <div className="flex justify-between">
                  <span>Sunday Morning</span>
                  <span className="text-slate-700">10:00 AM & 12:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Wednesday Bible Study</span>
                  <span className="text-slate-700">7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday Prayer Night</span>
                  <span className="text-slate-700">8:00 PM</span>
                </div>
              </div>
              <Link
                href="/livestream"
                className="mt-6 block text-center rounded-full border border-gold/30 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition hover:bg-gold/8"
              >
                Watch Online →
              </Link>
            </div>

            {/* Quick links */}
            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-gold/70 mb-4">Quick Links</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  { label: 'Prayer Request', href: '/prayer' },
                  { label: 'Give Now', href: '/donate' },
                  { label: 'Watch Sermons', href: '/sermons' },
                  { label: 'Join Community', href: '/community' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-xl border border-slate-200 bg-slate-100/40 px-3 py-2.5 text-xs uppercase tracking-[0.15em] text-slate-700 transition hover:border-gold/30 hover:text-gold text-center"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
