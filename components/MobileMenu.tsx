'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '../lib/constants';

const allNavLinks = [{ label: 'Home', href: '/' }, ...NAV_LINKS];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-gold hover:text-gold xl:hidden"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 xl:hidden"
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        className={`fixed inset-x-0 top-[65px] z-50 border-b border-slate-200 bg-white/98 backdrop-blur-xl transition-all duration-300 xl:hidden ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {allNavLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-2xl border px-4 py-3 text-xs uppercase tracking-[0.2em] transition ${
                  pathname === item.href
                    ? 'border-gold/40 bg-gold/10 text-gold'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-gold/30 hover:text-gold'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row">
            <Link
              href="/donate"
              className="flex-1 rounded-full bg-gold py-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-gold-light"
            >
              Give Now
            </Link>
            <Link
              href="/livestream"
              className="flex-1 rounded-full border border-slate-200 py-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-950 transition hover:border-gold hover:text-gold"
            >
              Watch Live
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
