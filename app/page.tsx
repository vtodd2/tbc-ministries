import Link from 'next/link';
import { Hero } from '../components/Hero';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { Newsletter } from '../components/Newsletter';

export const metadata = {
  title: 'Home | Kingdom Light Ministry',
  description: 'Kingdom Light Ministry offers premium Christian teaching, books, donations, and spiritual community engagement.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
        <SectionHeader title="Ministry Experience" subtitle="Services, books, sermons, and giving crafted for your spiritual journey." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Card
            title="Sermons & Devotionals"
            description="Engage with powerful teaching designed to inspire prayer, leadership, and transformation in daily life."
            badge="Faith"
          />
          <Card
            title="Books & Resources"
            description="Explore premium publications that support spiritual growth, discipleship, and Christian leadership."
            badge="Study"
          />
          <Card
            title="Giving & Impact"
            description="Support outreach, ministry expansion, and church care through secure donation options."
            badge="Generosity"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-glow">
            <p className="text-sm uppercase tracking-[0.35em] text-gold/80">Featured Book</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">The Golden Path: Wisdom for Modern Discipleship</h2>
            <p className="mt-6 text-white/75 leading-8">
              A curated devotional collection that blends scripture, prayer prompts, and practical guidance for believers seeking refined purpose.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/books" className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-[#c8a55d]">
                Shop the Book
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:border-gold hover:text-gold">
                Request a Preview
              </Link>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="space-y-3 rounded-[2rem] border border-white/10 bg-black/70 p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-gold/80">Latest Sermon</p>
              <h3 className="text-2xl font-semibold text-white">Radiant Grace: A Call to Kingdom Courage</h3>
              <p className="text-white/70 leading-7">
                Dive into practical teaching on faith, resilience, and the daily pursuit of Christ-like leadership.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-white/75">
              <p className="text-sm uppercase tracking-[0.35em] text-gold/80">Join Community</p>
              <p className="mt-4 leading-7">
                Receive exclusive sermon notes, prayer focus guides, and updates on upcoming gatherings directly by email.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="rounded-[2rem] border border-white/10 bg-black/80 p-10 shadow-glow">
            <SectionHeader title="Sermons & Stories" subtitle="Recent messages that nurture faith, hope, and bold action." />
            <div className="mt-10 space-y-6 text-white/80">
              <article className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-gold hover:bg-white/10">
                <h3 className="text-xl font-semibold text-white">Light in the City</h3>
                <p className="mt-3 leading-7">A sermon on becoming a radiant witness through everyday choices and spiritual conviction.</p>
              </article>
              <article className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-gold hover:bg-white/10">
                <h3 className="text-xl font-semibold text-white">Kingdom Stewardship</h3>
                <p className="mt-3 leading-7">Reflections on generous living, faithful leadership, and creating long-term ministry impact.</p>
              </article>
              <article className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-gold hover:bg-white/10">
                <h3 className="text-xl font-semibold text-white">Intentional Prayer</h3>
                <p className="mt-3 leading-7">Practical devotionals for deep worship and a sustained rhythm of spiritual renewal.</p>
              </article>
            </div>
            <div className="mt-8">
              <Link href="/sermons" className="inline-flex items-center justify-center rounded-full border border-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-gold transition hover:bg-gold/10">
                Browse Sermons
              </Link>
            </div>
          </div>
          <Newsletter />
        </div>
      </section>
    </>
  );
}
