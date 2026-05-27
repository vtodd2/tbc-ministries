import Link from 'next/link';
import { SocialLinks } from './SocialLinks';

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Books', href: '/books' },
  { label: 'Donate', href: '/donate' },
  { label: 'Sermons', href: '/sermons' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-black/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="text-2xl font-semibold tracking-tight text-gold">
          Kingdom Light
        </Link>
        <nav className="hidden items-center gap-6 text-sm uppercase tracking-[0.24em] text-white/70 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-gold">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/donate" className="rounded-full border border-gold px-4 py-2 text-sm font-medium text-gold transition hover:bg-gold/10">
            Give Now
          </Link>
          <SocialLinks className="hidden md:flex" />
        </div>
      </div>
    </header>
  );
}
