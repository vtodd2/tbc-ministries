import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeader } from '../../components/SectionHeader';
import { YouTubeEmbed } from '../../components/YouTubeEmbed';
import { Newsletter } from '../../components/Newsletter';
import type { Sermon } from '../../types';

export const metadata: Metadata = {
  title: 'Sermons | Transformed Believers Church',
  description:
    'Watch and listen to biblical sermons from Transformed Believers Church. Powerful messages on faith, transformation, purpose, and kingdom living.',
};

const sermons: Sermon[] = [
  {
    id: '1',
    title: 'Renewed Mind, Transformed Life',
    description: 'How renewing your mind with God\'s word produces real, lasting change from the inside out.',
    youtubeId: '',
    date: '2025-06-15',
    tags: ['Transformation', 'Mind', 'Romans'],
    scripture: 'Romans 12:2',
    duration: '42 min',
    series: 'Transformed Series',
  },
  {
    id: '2',
    title: 'Walking in Your God-Given Purpose',
    description: 'Discovering and stepping boldly into the specific assignment God has placed on your life.',
    youtubeId: '',
    date: '2025-06-08',
    tags: ['Purpose', 'Faith', 'Ephesians'],
    scripture: 'Ephesians 2:10',
    duration: '38 min',
    series: 'Purpose Series',
  },
  {
    id: '3',
    title: 'The Power of Authentic Worship',
    description: 'Why genuine worship in Spirit and truth is the foundation of a transformed life.',
    youtubeId: '',
    date: '2025-06-01',
    tags: ['Worship', 'Spirit', 'John'],
    scripture: 'John 4:23–24',
    duration: '45 min',
    series: 'Worship Series',
  },
  {
    id: '4',
    title: 'Faith That Moves Mountains',
    description: 'Understanding how mountain-moving faith operates through trust, persistence, and God\'s promises.',
    youtubeId: '',
    date: '2025-05-25',
    tags: ['Faith', 'Prayer', 'Matthew'],
    scripture: 'Matthew 17:20',
    duration: '40 min',
    series: 'Faith Series',
  },
  {
    id: '5',
    title: 'Kingdom Living in a Broken World',
    description: 'Practical principles for living as citizens of God\'s kingdom while navigating a fallen world.',
    youtubeId: '',
    date: '2025-05-18',
    tags: ['Kingdom', 'Lifestyle', 'Matthew'],
    scripture: 'Matthew 6:33',
    duration: '44 min',
    series: 'Kingdom Series',
  },
  {
    id: '6',
    title: 'Grace Unending: Receiving What You Cannot Earn',
    description: 'A deep dive into the limitless nature of God\'s grace and how to receive it fully.',
    youtubeId: '',
    date: '2025-05-11',
    tags: ['Grace', 'Salvation', 'Ephesians'],
    scripture: 'Ephesians 2:8–9',
    duration: '37 min',
    series: 'Grace Series',
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function SermonsPage() {
  const [featured, ...rest] = sermons;

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <SectionHeader
          title="Sermons"
          subtitle="Spirit-led messages to strengthen your faith and equip your life."
        />

        {/* Featured sermon */}
        <div className="mt-14 rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-glow sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div className="space-y-5">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-gold/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold">
                  {featured.series}
                </span>
                <span className="rounded-full border border-slate-200 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-600">
                  {featured.duration}
                </span>
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold/60">{featured.scripture}</p>
              <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">{featured.title}</h2>
              <p className="leading-7 text-slate-700">{featured.description}</p>
              <p className="text-xs text-slate-600">{formatDate(featured.date)}</p>
              <div className="flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <YouTubeEmbed videoId={featured.youtubeId!} title={featured.title} />
          </div>
        </div>
      </section>

      {/* Sermon Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.35em] text-gold/70">All Sermons</p>
          <Link
            href="/livestream"
            className="rounded-full border border-gold/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-gold transition hover:bg-gold/8"
          >
            Watch Live
          </Link>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {rest.map((s) => (
            <article
              key={s.id}
              className="rounded-[1.75rem] border border-slate-200 bg-slate-50 transition hover:border-gold/25"
            >
              <YouTubeEmbed videoId={s.youtubeId!} title={s.title} className="rounded-t-[1.75rem] rounded-b-none border-0" />
              <div className="p-6 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs uppercase tracking-[0.2em] text-gold/60">{s.scripture}</span>
                  <span className="text-slate-950/20">·</span>
                  <span className="text-xs text-slate-600">{s.duration}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-950">{s.title}</h3>
                <p className="text-sm leading-6 text-slate-700">{s.description}</p>
                <p className="text-xs text-slate-500">{formatDate(s.date)}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Series Browse */}
      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-10 lg:px-12">
        <div className="rounded-[2rem] border border-slate-200 bg-white/95 p-10">
          <p className="text-xs uppercase tracking-[0.35em] text-gold/70">Sermon Series</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-950">Browse by Series</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {['Transformed Series', 'Purpose Series', 'Worship Series', 'Faith Series', 'Kingdom Series', 'Grace Series'].map((s) => (
              <button
                key={s}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-700 transition hover:border-gold hover:text-gold"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-10 lg:px-12">
        <Newsletter />
      </section>
    </>
  );
}
