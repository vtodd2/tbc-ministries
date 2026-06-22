'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <section className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-6 py-20 text-center sm:px-10 lg:px-12">
      <h1 className="text-6xl font-bold text-gold">500</h1>
      <p className="mt-4 text-3xl font-semibold text-slate-950">Something Went Wrong</p>
      <p className="mt-4 max-w-xl text-slate-700">
        We encountered an unexpected error. Our team has been notified. Please try again or contact support.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-[#c8a55d]"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-950 transition hover:border-gold hover:text-gold"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
