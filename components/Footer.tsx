import Link from 'next/link';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/90 text-sm text-white/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Kingdom Light Ministry</h2>
          <p className="max-w-xl leading-7 text-white/70">
            Luxury ministry for modern faith communities. Sermons, books, giving, and connection rooted in grace and excellence.
          </p>
        </div>
        <div className="space-y-2 text-right">
          <p>Find us on social media</p>
          <SocialLinks />
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-4 text-center text-white/40">
        © {new Date().getFullYear()} Kingdom Light Ministry. Built for fast, SEO-friendly experience.
      </div>
    </footer>
  );
}
