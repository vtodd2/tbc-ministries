import Link from 'next/link';
import { SocialLinks } from './SocialLinks';
import { SITE_NAME, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS, FOOTER_NAV } from '../lib/constants';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white/95 text-sm text-slate-700">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div className="space-y-5">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold/60">TBC Ministries</p>
              <h2 className="mt-1 text-xl font-semibold text-slate-950">Transformed Believers Church</h2>
            </div>
            <p className="max-w-xs leading-7 text-slate-600">
              A luxury Christian ministry experience rooted in biblical truth, Spirit-led worship, and the transforming power of God&apos;s word.
            </p>
            <SocialLinks />
            <div className="space-y-1 text-slate-600">
              <p>
                <a href={`mailto:${CONTACT_EMAIL}`} className="transition hover:text-gold">
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p>
                <a href={`tel:${CONTACT_PHONE.replace(/\D/g, '')}`} className="transition hover:text-gold">
                  {CONTACT_PHONE}
                </a>
              </p>
              <p>{CONTACT_ADDRESS}</p>
            </div>
          </div>

          {/* Ministry column */}
          <div>
            <h3 className="mb-5 text-xs uppercase tracking-[0.3em] text-gold/70">Ministry</h3>
            <ul className="space-y-3">
              {FOOTER_NAV.ministry.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources column */}
          <div>
            <h3 className="mb-5 text-xs uppercase tracking-[0.3em] text-gold/70">Resources</h3>
            <ul className="space-y-3">
              {FOOTER_NAV.resources.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect column */}
          <div>
            <h3 className="mb-5 text-xs uppercase tracking-[0.3em] text-gold/70">Connect</h3>
            <ul className="space-y-3">
              {FOOTER_NAV.connect.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="transition hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="divider-gold" />

      <div className="mx-auto max-w-7xl px-6 py-5 sm:px-10 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-slate-500 sm:flex-row">
          <p>&copy; {year} {SITE_NAME}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/about" className="transition hover:text-gold">Privacy Policy</Link>
            <Link href="/about" className="transition hover:text-gold">Terms of Service</Link>
            <Link href="/contact" className="transition hover:text-gold">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
