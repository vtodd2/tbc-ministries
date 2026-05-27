import Link from 'next/link';
import { SectionHeader } from '../../components/SectionHeader';
import { Card } from '../../components/Card';

export const metadata = {
  title: 'Books | Kingdom Light Ministry',
  description: 'Shop Christian books and devotional resources curated for spiritual growth and leadership.',
};

export default function BooksPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
      <SectionHeader title="Book Sales" subtitle="Curated Christian titles for discipleship, leadership, and worship." />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        <Card
          title="The Golden Path"
          description="A devotional guide for growing in faith with daily scripture, practical prayer, and reflections for modern life."
          badge="Bestseller"
        />
        <Card
          title="Kingdom Leadership"
          description="A study resource for emerging leaders who want to serve with humility, integrity, and biblical clarity."
          badge="Ministry"
        />
        <Card
          title="Legacy of Grace"
          description="A collection of essays on generosity, community, and building a life anchored in Christ."
          badge="Featured"
        />
      </div>
      <div className="mt-14 rounded-[2rem] border border-white/10 bg-black/80 p-10 text-white shadow-glow">
        <h2 className="text-2xl font-semibold">How to order</h2>
        <p className="mt-4 text-white/70 leading-7">
          Each book is available in print and digital formats. Complete the form on our contact page to request a bulk order, ministry partner discount, or streamlined shipping for your team.
        </p>
        <Link href="/contact" className="mt-8 inline-flex items-center justify-center rounded-full border border-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-gold transition hover:bg-gold/10">
          Contact Sales
        </Link>
      </div>
    </section>
  );
}
