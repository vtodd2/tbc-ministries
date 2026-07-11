import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeader } from '../../components/SectionHeader';
import { Newsletter } from '../../components/Newsletter';
import type { CommunityEvent, SmallGroup } from '../../types';

export const metadata: Metadata = {
  title: 'Community | Transformed Believers Church',
  description:
    'Connect with the TBC community. Join small groups, attend events, and find genuine fellowship with believers committed to transformation.',
};

const events: CommunityEvent[] = [
  {
    id: '1',
    title: 'Sunday Worship Experience',
    description: 'Our weekly gathering for Spirit-led worship, powerful preaching, and authentic community.',
    date: 'Every Sunday',
    time: '10:00 AM & 12:00 PM',
    location: '3700 Preston Rd Suite 1522, Plano, TX 75093',
    isOnline: true,
  },
  {
    id: '2',
    title: 'Wednesday Night Bible Study',
    description: 'A deep dive into Scripture every Wednesday. Open to all who want to grow in the Word.',
    date: 'Every Wednesday',
    time: '7:00 PM',
    location: '3700 Preston Rd Suite 1522, Plano, TX 75093',
    isOnline: true,
  },
  {
    id: '3',
    title: 'Friday Night Prayer',
    description: 'Corporate prayer and intercession every Friday. Come expectant — God shows up.',
    date: 'Every Friday',
    time: '8:00 PM',
    location: 'Online + In Person',
    isOnline: true,
  },
  {
    id: '4',
    title: 'Kingdom Builders Summit 2025',
    description: 'Our annual conference for believers called to leadership, entrepreneurship, and cultural impact.',
    date: 'August 15–17, 2025',
    time: '9:00 AM daily',
    location: 'Atlanta Convention Center',
    isOnline: false,
  },
];

const groups: SmallGroup[] = [
  {
    id: '1',
    name: 'Men of Valor',
    description: 'A brotherhood of men committed to spiritual growth, accountability, and kingdom purpose.',
    day: 'Saturday',
    time: '8:00 AM',
    leader: 'Elder Marcus Thompson',
  },
  {
    id: '2',
    name: 'Women of Grace',
    description: 'A sisterhood rooted in Scripture, prayer, and authentic relationship for women of all ages.',
    day: 'Tuesday',
    time: '7:00 PM',
    leader: 'Pastor Sarah Williams',
  },
  {
    id: '3',
    name: 'Young Adults (18–30)',
    description: 'A community for young believers navigating faith, career, relationships, and calling.',
    day: 'Thursday',
    time: '7:30 PM',
    leader: 'Minister David Green',
  },
  {
    id: '4',
    name: 'Kingdom Couples',
    description: 'Marriage enrichment, biblical foundations, and community for couples in every season.',
    day: 'Saturday',
    time: '10:00 AM',
    leader: 'James & Sarah Williams',
  },
  {
    id: '5',
    name: 'Next Generation (Teens)',
    description: 'A vibrant community helping teenagers discover identity, purpose, and faith in Christ.',
    day: 'Sunday',
    time: 'After 10 AM Service',
    leader: 'Minister Lisa Carter',
  },
  {
    id: '6',
    name: 'Online Community Group',
    description: 'For our global TBC family who join us from a distance. Same community, no zip code required.',
    day: 'Wednesday',
    time: '8:00 PM (EST)',
    leader: 'Various',
  },
];

export default function CommunityPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <SectionHeader
          title="Community"
          subtitle="You were made for connection. Find your people here."
        />

        <div className="mt-14 rounded-[2rem] border border-slate-200 bg-white/95 p-10 shadow-glow sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.35em] text-gold/70">A Family of Believers</p>
              <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">
                Life is better together.
              </h2>
              <p className="leading-7 text-slate-700">
                The TBC community is not a program — it is a family. Whether you are new to faith or
                have been walking with God for decades, there is a place for you here. We believe that
                transformation accelerates in the context of authentic community.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-gold-light"
                >
                  Join a Group
                </Link>
                <Link
                  href="/livestream"
                  className="rounded-full border border-slate-200 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-950 transition hover:border-gold hover:text-gold"
                >
                  Watch Online
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '500+', label: 'Active Members' },
                { number: '12', label: 'Small Groups' },
                { number: '40+', label: 'Countries Online' },
                { number: '5 yrs', label: 'In Ministry' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center"
                >
                  <p className="text-2xl font-semibold text-slate-950">{stat.number}</p>
                  <p className="mt-1 text-xs text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.35em] text-gold/70">Gatherings & Events</p>
          <Link
            href="/contact"
            className="text-xs uppercase tracking-[0.2em] text-gold/60 transition hover:text-gold"
          >
            View Calendar →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {events.map((event) => (
            <article
              key={event.id}
              className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 transition hover:border-gold/25"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-slate-950">{event.title}</h3>
                {event.isOnline && (
                  <span className="shrink-0 rounded-full bg-green-500/10 px-2.5 py-1 text-xs uppercase tracking-[0.15em] text-green-400">
                    Also Online
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-700">{event.description}</p>
              <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-600">
                <span>{event.date}</span>
                {event.time && <><span>·</span><span>{event.time}</span></>}
                {event.location && <><span>·</span><span>{event.location}</span></>}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Small Groups */}
      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-10 lg:px-12">
        <SectionHeader
          title="Small Groups"
          subtitle="Find your community in a group built for real connection."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <article
              key={group.id}
              className="flex flex-col rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 transition hover:border-gold/25"
            >
              <h3 className="font-semibold text-slate-950">{group.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-700">{group.description}</p>
              <div className="mt-5 space-y-1.5 text-xs text-slate-600">
                {group.day && group.time && (
                  <p>{group.day} · {group.time}</p>
                )}
                {group.leader && <p>Led by {group.leader}</p>}
              </div>
              <Link
                href="/contact"
                className="mt-5 block rounded-full border border-slate-200 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 transition hover:border-gold hover:text-gold"
              >
                Join Group
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Membership placeholder */}
      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-10 lg:px-12">
        <div className="rounded-[2rem] border border-gold/20 bg-gradient-to-br from-gold/6 to-black/60 p-10 shadow-glow sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-gold/70">Coming Soon</p>
              <h2 className="text-3xl font-semibold text-slate-950">TBC Membership Platform</h2>
              <p className="leading-7 text-slate-700">
                We are building a dedicated membership experience with exclusive content, a private
                prayer community, leadership tracks, and personalized discipleship pathways. Join the
                waitlist to be first in the door.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                {['Exclusive sermon archives', 'Private community forum', 'Leadership development tracks', 'Monthly pastor Q&A sessions', 'Digital resource library'].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-gold/60">✦</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-slate-700">Join the waitlist and we will notify you at launch.</p>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-full border border-slate-200 bg-white/95 px-5 py-4 text-slate-950 outline-none placeholder:text-slate-500 focus:border-gold focus:ring-4 focus:ring-gold/10"
              />
              <button
                type="button"
                className="w-full rounded-full bg-gold py-4 text-xs font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-gold-light"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-10 lg:px-12">
        <Newsletter />
      </section>
    </>
  );
}
