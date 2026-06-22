import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeader } from '../../components/SectionHeader';
import type { Book } from '../../types';

export const metadata: Metadata = {
  title: 'Books & Resources | Transformed Believers Church',
  description:
    'Shop Christian books and devotional resources from TBC Ministries. Biblical, practical, and designed to fuel your spiritual transformation.',
};

const books: Book[] = [
  {
    id: '1',
    title: 'Transformed: A Journey of Faith and Purpose',
    description:
      'A 30-day devotional journey through the scriptures that ignited the TBC movement. Daily readings, prayer prompts, and transformation reflections for every believer.',
    price: '$24.99',
    badge: 'Bestseller',
    available: true,
    format: ['Hardcover', 'Paperback', 'eBook'],
  },
  {
    id: '2',
    title: 'Living in the Kingdom: A Christ-Centered Life',
    description:
      'A deep exploration of what it means to live as a citizen of God\'s kingdom in a modern world — practical, biblical, and life-changing.',
    price: '$19.99',
    badge: 'New Release',
    available: true,
    format: ['Paperback', 'eBook', 'Audiobook'],
  },
  {
    id: '3',
    title: 'Prayer That Transforms: 30 Days with God',
    description:
      'A guided prayer journal that teaches believers how to pray with authority, consistency, and faith. Perfect for individuals and small groups.',
    price: '$14.99',
    badge: 'Top Pick',
    available: true,
    format: ['Paperback', 'eBook'],
  },
  {
    id: '4',
    title: 'The Grace Principle: God\'s Unending Love',
    description:
      'A theological yet accessible study of God\'s grace — what it is, what it does, and how receiving it fully changes everything about the way you live.',
    price: '$22.99',
    badge: 'Study Guide',
    available: true,
    format: ['Hardcover', 'Paperback', 'eBook'],
  },
];

export default function BooksPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <SectionHeader
          title="Books & Resources"
          subtitle="Biblical resources crafted to fuel your spiritual transformation."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {books.map((book) => (
            <article
              key={book.id}
              className="flex flex-col rounded-[2rem] border border-slate-200 bg-slate-50 p-8 transition hover:border-gold/25 hover:bg-slate-100"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-xl font-semibold text-slate-950">{book.title}</h2>
                {book.badge && (
                  <span className="shrink-0 rounded-full bg-gold/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold">
                    {book.badge}
                  </span>
                )}
              </div>

              <p className="mt-4 flex-1 text-sm leading-7 text-slate-700">{book.description}</p>

              <div className="mt-6 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-2xl font-semibold text-slate-950">{book.price}</span>
                  {book.format?.map((f) => (
                    <span
                      key={f}
                      className="rounded-full border border-slate-200 px-2.5 py-1 text-xs text-slate-600"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <div className="grid gap-2 sm:grid-cols-2">
                  {/* Stripe placeholder */}
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 rounded-full bg-gold py-3 text-xs font-semibold uppercase tracking-[0.22em] text-black transition hover:bg-gold-light"
                    aria-label={`Buy ${book.title} with card`}
                  >
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                    </svg>
                    Buy with Card
                  </button>

                  {/* PayPal placeholder */}
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 rounded-full border border-[#009cde]/30 bg-[#003087]/15 py-3 text-xs font-semibold tracking-[0.15em] text-[#009cde] transition hover:border-[#009cde]/50 hover:bg-[#003087]/25"
                    aria-label={`Buy ${book.title} with PayPal`}
                  >
                    <span className="font-bold text-[#003087] dark:text-[#009cde]">Pay</span>
                    <span className="font-bold text-[#009cde]">Pal</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bulk / Ministry Orders */}
        <div className="mt-14 rounded-[2rem] border border-slate-200 bg-white/95 p-10 shadow-glow">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-gold/70">Ministry & Bulk Orders</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950">
                Equip Your Church or Small Group
              </h2>
              <p className="mt-4 leading-7 text-slate-700">
                TBC books are available in bulk at discounted rates for churches, small groups,
                and ministry teams. We also offer signed copies, speaking event packages, and
                custom ministry bundles.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-gold px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-gold-light"
              >
                Request Bulk Pricing
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-slate-200 px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-950 transition hover:border-gold hover:text-gold"
              >
                Contact Book Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
