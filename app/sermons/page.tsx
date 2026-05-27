import Link from 'next/link';
import { SectionHeader } from '../../components/SectionHeader';

export const metadata = {
  title: 'Sermons & Blog | Kingdom Light Ministry',
  description: 'Read sermons, blog reflections, and spiritual teaching from Kingdom Light Ministry.',
};

const sermons = [
  { title: 'Radiant Grace', summary: 'A message on walking in faith with boldness and humility.', tag: 'Sermon' },
  { title: 'Kingdom Wellspring', summary: 'Discover how worship becomes a source of strength and renewal.', tag: 'Devotional' },
  { title: 'Heart of Generosity', summary: 'Teaching on stewardship, giving, and community care.', tag: 'Teaching' },
  { title: 'Courageous Prayer', summary: 'Practical steps to deepen your prayer life and hear God clearly.', tag: 'Reflection' },
];

export default function SermonsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
      <SectionHeader title="Sermons & Blog" subtitle="Inspiring messages and written reflections for spiritual growth." />
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {sermons.map((item) => (
          <article key={item.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:border-gold/40 hover:bg-white/10">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              <span className="rounded-full bg-gold/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-gold">{item.tag}</span>
            </div>
            <p className="mt-4 leading-7 text-white/70">{item.summary}</p>
            <Link href="/contact" className="mt-6 inline-flex items-center text-sm font-semibold uppercase tracking-[0.25em] text-gold transition hover:text-white">
              Learn more
            </Link>
          </article>
        ))}
      </div>
      <div className="mt-16 rounded-[2rem] border border-white/10 bg-black/80 p-10 text-white shadow-glow">
        <h2 className="text-2xl font-semibold">Stay updated</h2>
        <p className="mt-4 max-w-3xl leading-7 text-white/70">
          Subscribe to receive new sermons, blog updates, and devotional releases directly to your inbox. The best way to stay close to the next teaching series and community prayer initiatives.
        </p>
      </div>
    </section>
  );
}
