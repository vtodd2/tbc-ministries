import Link from 'next/link';
import { SOCIAL } from '../lib/constants';

const socials = [
  { label: 'Facebook', href: SOCIAL.facebook },
  { label: 'Instagram', href: SOCIAL.instagram },
  { label: 'YouTube', href: SOCIAL.youtube },
];

export function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {socials.map((s) => (
        <Link
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`TBC on ${s.label}`}
          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs uppercase tracking-[0.25em] text-slate-700 transition hover:border-gold hover:text-gold"
        >
          {s.label}
        </Link>
      ))}
    </div>
  );
}
