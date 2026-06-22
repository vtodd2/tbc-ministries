import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeader } from '../../components/SectionHeader';
import { YouTubeEmbed } from '../../components/YouTubeEmbed';
import { Newsletter } from '../../components/Newsletter';

export const metadata: Metadata = {
  title: 'Livestream | Transformed Believers Church',
  description:
    'Watch TBC Ministries live online. Join our Sunday services, Wednesday Bible study, and Friday prayer nights from anywhere in the world.',
};

const schedule = [
  { day: 'Sunday', time: '10:00 AM EST', title: 'Morning Worship Experience', live: true },
  { day: 'Sunday', time: '12:00 PM EST', title: 'Second Service', live: false },
  { day: 'Wednesday', time: '7:00 PM EST', title: 'Bible Study Live', live: false },
  { day: 'Friday', time: '8:00 PM EST', title: 'Corporate Prayer Night', live: false },
];

const pastStreams = [
  { title: 'Renewed Mind, Transformed Life', date: 'June 15, 2025', youtubeId: 'dQw4w9WgXcQ' },
  { title: 'Walking in Your God-Given Purpose', date: 'June 8, 2025', youtubeId: 'dQw4w9WgXcQ' },
  { title: 'The Power of Authentic Worship', date: 'June 1, 2025', youtubeId: 'dQw4w9WgXcQ' },
];

export default function LivestreamPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <SectionHeader
          title="Livestream"
          subtitle="Worship with us from anywhere in the world."
        />

        {/* Live player */}
        <div className="mt-14 rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-glow sm:p-10">
          {/* Live indicator */}
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 items-center justify-center">
              <span className="absolute inline-flex h-2.5 w-2.5 animate-ping rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
            </span>
            <span className="text-xs uppercase tracking-[0.3em] text-red-400">Live Now</span>
            <span className="text-xs text-slate-600">Sunday Morning Worship Experience</span>
          </div>

          {/* YouTube Live embed — replace CHANNEL_ID with your actual YouTube channel ID */}
          <div className="relative aspect-video w-full overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-100">
            <iframe
              src="https://www.youtube.com/embed/live_stream?channel=UCxxxxxxxxxxxxxxxx&autoplay=0&rel=0&modestbranding=1"
              title="TBC Live Worship Service"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 h-full w-full"
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-slate-950">Sunday Morning Worship Experience</h2>
              <p className="mt-1 text-sm text-slate-600">Join thousands watching from around the world</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="https://www.youtube.com/transformedbelieverschurch"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-red-500/40 bg-red-500/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-red-400 transition hover:bg-red-500/15"
              >
                Open on YouTube
              </Link>
              <Link
                href="/prayer"
                className="rounded-full border border-gold/30 bg-gold/8 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition hover:bg-gold/15"
              >
                Submit Prayer →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-10 lg:px-12">
        <p className="text-xs uppercase tracking-[0.35em] text-gold/70">Live Schedule</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {schedule.map((s) => (
            <div
              key={`${s.day}-${s.time}`}
              className={`relative overflow-hidden rounded-[1.75rem] border p-7 transition ${
                s.live
                  ? 'border-red-500/30 bg-red-500/5'
                  : 'border-slate-200 bg-slate-50 hover:border-slate-200'
              }`}
            >
              {s.live && (
                <span className="absolute right-5 top-5 rounded-full bg-red-500 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-950">
                  Live
                </span>
              )}
              <p className="text-xs uppercase tracking-[0.3em] text-gold/60">{s.day}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-950">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{s.time}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Past streams */}
      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.35em] text-gold/70">Recent Services</p>
          <Link
            href="/sermons"
            className="text-xs uppercase tracking-[0.2em] text-gold/60 transition hover:text-gold"
          >
            All Sermons →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {pastStreams.map((s) => (
            <article key={s.title} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 overflow-hidden transition hover:border-gold/25">
              <YouTubeEmbed videoId={s.youtubeId} title={s.title} className="rounded-none border-0 rounded-t-[1.75rem]" />
              <div className="p-5 space-y-1">
                <h3 className="font-semibold text-slate-950 text-sm">{s.title}</h3>
                <p className="text-xs text-slate-600">{s.date}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Chat placeholder */}
      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-10 lg:px-12">
        <div className="rounded-[2rem] border border-gold/15 bg-gold/4 p-10 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-gold/70">Coming Soon</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-950">Live Chat & Prayer Wall</h2>
          <p className="mt-3 max-w-xl mx-auto text-slate-700 leading-7">
            During live services, connect with the TBC community through our integrated chat
            and real-time prayer wall. Feature launching soon — subscribe to be notified.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-10 lg:px-12">
        <Newsletter />
      </section>
    </>
  );
}
