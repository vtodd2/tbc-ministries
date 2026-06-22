import Link from 'next/link';
import { SocialLinks } from './SocialLinks';
import { MobileMenu } from './MobileMenu';
import { NAV_LINKS } from '../lib/constants';

const desktopNav = NAV_LINKS.slice(0, 7);

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="flex shrink-0 flex-col leading-none"
          aria-label="Transformed Believers Church — Home"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold/60">TBC Ministries</span>
          <span className="text-lg font-semibold tracking-tight text-slate-950">
            Transformed Believers
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-5 text-xs uppercase tracking-[0.2em] text-slate-700 xl:flex"
        >
          {desktopNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <SocialLinks className="hidden 2xl:flex" />
          <Link
            href="/prayer"
            className="hidden text-xs uppercase tracking-[0.2em] text-slate-700 transition hover:text-gold xl:block"
          >
            Prayer
          </Link>
          <Link
            href="/donate"
            className="hidden rounded-full bg-gold px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black shadow-glow transition hover:bg-gold-light sm:inline-flex"
          >
            Give Now
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
