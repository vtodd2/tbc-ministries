import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeader } from '../../components/SectionHeader';
import { PodcastEmbed } from '../../components/PodcastEmbed';
import { Newsletter } from '../../components/Newsletter';
import { SOCIAL } from '../../lib/constants';
import type { PodcastEpisode } from '../../types';

export const metadata: Metadata = {
  title: 'Podcast | Transformed Believers Church',
  description:
    'Listen to the Faith & Transformation Podcast from TBC Ministries. Weekly conversations about faith, purpose, and the transforming work of God.',
};

const episodes: PodcastEpisode[] = [
  {
    id: '1',
    episodeNumber: 48,
    title: 'The Renewed Mind: Thinking Like a Kingdom Citizen',
    description:
      'Pastor James dives deep into Romans 12:2 and explains how changing the way you think is the gateway to changing the way you live. Practical, biblical, and transformative.',
    date: '2025-06-16',
    duration: '47 min',
  },
  {
    id: '2',
    episodeNumber: 47,
    title: 'Walking in Your God-Given Purpose',
    description:
      'A conversation about discovering your divine assignment, overcoming the fear of stepping into it, and trusting God through every stage of the journey.',
    date: '2025-06-09',
    duration: '39 min',
  },
  {
    id: '3',
    episodeNumber: 46,
    title: 'Faith That Moves Mountains',
    description:
      'What does mountain-moving faith actually look like in everyday life? We explore four characteristics of the kind of faith that transforms impossible situations.',
    date: '2025-06-02',
    duration: '41 min',
  },
  {
    id: '4',
    episodeNumber: 45,
    title: 'The Power of Authentic Worship',
    description:
      'Worship is more than music — it is a posture of the heart. This episode unpacks what worship in Spirit and truth looks like and why it changes everything.',
    date: '2025-05-26',
    duration: '44 min',
  },
  {
    id: '5',
    episodeNumber: 44,
    title: 'Grace: The Gift You Cannot Earn',
    description:
      'Many believers understand grace as a concept but have never fully received it as a gift. This episode helps you move from knowing about grace to living from it.',
    date: '2025-05-19',
    duration: '36 min',
  },
  {
    id: '6',
    episodeNumber: 43,
    title: 'Building Kingdom Community',
    description:
      'Real community takes more than attending church. We discuss the biblical model for genuine fellowship, accountability, and life-on-life discipleship.',
    date: '2025-05-12',
    duration: '43 min',
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default function PodcastPage() {
  const [latest, ...older] = episodes;

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <SectionHeader
          title="Podcast"
          subtitle="Faith &amp; Transformation — conversations for the modern believer."
        />

        {/* Latest episode hero */}
        <div className="mt-14 rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-glow sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-black">
                  Latest
                </span>
                <span className="text-xs text-slate-600">Ep. {latest.episodeNumber}</span>
                <span className="text-slate-950/20">·</span>
                <span className="text-xs text-slate-600">{latest.duration}</span>
              </div>
              <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">{latest.title}</h2>
              <p className="leading-7 text-slate-700">{latest.description}</p>
              <p className="text-xs text-slate-600">{formatDate(latest.date)}</p>
            </div>
            <PodcastEmbed title={latest.title} />
          </div>
        </div>

        {/* Subscribe links */}
        <div className="mt-10 rounded-[1.75rem] border border-gold/15 bg-gold/4 p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-gold/70 mb-4 text-center">
            Subscribe &amp; Listen Everywhere
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'Spotify', href: SOCIAL.spotify },
              { label: 'Apple Podcasts', href: SOCIAL.apple },
              { label: 'YouTube', href: SOCIAL.youtube },
              { label: 'RSS Feed', href: '/podcast/rss.xml' },
            ].map((platform) => (
              <Link
                key={platform.label}
                href={platform.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-200 bg-slate-100 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 transition hover:border-gold hover:text-gold"
              >
                {platform.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Episodes */}
      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-10 lg:px-12">
        <p className="text-xs uppercase tracking-[0.35em] text-gold/70">All Episodes</p>
        <div className="mt-8 space-y-4">
          {older.map((ep) => (
            <article
              key={ep.id}
              className="group flex flex-col gap-4 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 transition hover:border-gold/25 sm:flex-row sm:items-start"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-xs font-semibold text-slate-600 group-hover:border-gold/30 transition">
                {ep.episodeNumber}
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
                  <span>{formatDate(ep.date)}</span>
                  <span>·</span>
                  <span>{ep.duration}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-950 group-hover:text-gold transition">
                  {ep.title}
                </h3>
                <p className="text-sm leading-6 text-slate-700">{ep.description}</p>
              </div>
              <div className="flex shrink-0 items-start gap-2">
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-gold/70 transition hover:border-gold hover:text-gold"
                  aria-label={`Play episode ${ep.episodeNumber}`}
                >
                  <svg className="h-4 w-4 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-10 lg:px-12">
        <Newsletter />
      </section>
    </>
  );
}
