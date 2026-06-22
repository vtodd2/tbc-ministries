import Link from 'next/link';

export const metadata = {
  title: '404 - Page Not Found | Kingdom Light Ministry',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-6 py-20 text-center sm:px-10 lg:px-12">
      <h1 className="text-6xl font-bold text-gold">404</h1>
      <p className="mt-4 text-3xl font-semibold text-slate-950">Page Not Found</p>
      <p className="mt-4 max-w-xl text-slate-700">
        The page you&apos;re looking for doesn&apos;t exist. It may have been moved or removed.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-[#c8a55d]"
        >
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-950 transition hover:border-gold hover:text-gold"
        >
          Contact Support
        </Link>
      </div>
    </section>
  );
}
