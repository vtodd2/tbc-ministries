import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '../components/Hero';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { Newsletter } from '../components/Newsletter';
import { YouTubeEmbed } from '../components/YouTubeEmbed';
import { PodcastEmbed } from '../components/PodcastEmbed';

export const metadata: Metadata = {
  title: 'Home | Transformed Believers Church',
  description:
    'Transformed Believers Church — Spirit-led worship, biblical preaching, and authentic community that transforms lives. Join us online or in person.',
};

const pillars = [
  {
    title: 'Sermons & Teaching',
    description:
      'Powerful, scripture-rooted messages designed to inspire transformation, strengthen faith, and equip believers for everyday purpose.',
    badge: 'Word',
  },
  {
    title: 'Community & Fellowship',
    description:
      'Authentic connection through small groups, events, and a family of believers committed to walking alongside one another.',
    badge: 'Community',
  },
  {
    title: 'Generosity & Outreach',
    description:
      'Kingdom-focused giving that funds local outreach, global missions, and ministry programs that change lives.',
    badge: 'Impact',
  },
];

const recentSermons = [
  {
    title: 'Renewed Mind, Transformed Life',
    scripture: 'Romans 12:2',
    description: 'How renewing your mind with God\'s word produces real, lasting change from the inside out.',
  },
  {
    title: 'Walking in Your God-Given Purpose',
    scripture: 'Ephesians 2:10',
    description: 'Discovering and stepping boldly into the specific assignment God has placed on your life.',
  },
  {
    title: 'The Power of Authentic Worship',
    scripture: 'John 4:23–24',
    description: 'Why genuine worship in Spirit and truth is the foundation of a transformed life.',
  },
];

const recentPosts = [
  {
    title: '5 Ways to Deepen Your Daily Prayer Life',
    category: 'Devotional',
    readTime: '4 min',
  },
  {
    title: 'Understanding the Transforming Power of God\'s Word',
    category: 'Teaching',
    readTime: '6 min',
  },
  {
    title: 'How Community Shapes Your Faith Walk',
    category: 'Community',
    readTime: '3 min',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Ministry Pillars */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
        <SectionHeader
          title="Our Ministry"
          subtitle="Three pillars that define how we worship, grow, and serve."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pillars.map((p) => (
            <Card key={p.title} title={p.title} description={p.description} badge={p.badge} />
          ))}
        </div>
      </section>

      {/* Featured Sermon */}
      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-10 lg:px-12">
        <div className="rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-glow sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.35em] text-gold/70">Featured Sermon</p>
              <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">
                Renewed Mind, Transformed Life
              </h2>
              <p className="text-sm uppercase tracking-[0.25em] text-gold/50">Romans 12:2</p>
              <p className="leading-7 text-slate-700">
                In this powerful message, we explore what it truly means to let God renew your mind
                — and how that single shift produces transformation in every area of life. Don&apos;t
                conform to the patterns of this world. Be transformed.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/sermons"
                  className="rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-gold-light"
                >
                  All Sermons
                </Link>
                <Link
                  href="/livestream"
                  className="rounded-full border border-slate-200 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-950 transition hover:border-gold hover:text-gold"
                >
                  Watch Live
                </Link>
              </div>
            </div>
            <YouTubeEmbed videoId="" title="Renewed Mind, Transformed Life — TBC Sermon" />
          </div>
        </div>
      </section>

      {/* Recent Sermons Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-10 lg:px-12">
        <div className="flex items-end justify-between gap-4">
          <SectionHeader title="Recent Sermons" subtitle="Recent messages for your faith journey." />
          <Link
            href="/sermons"
            className="shrink-0 text-xs uppercase tracking-[0.25em] text-gold/70 transition hover:text-gold"
          >
            View All →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {recentSermons.map((s) => (
            <article
              key={s.title}
              className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 transition hover:border-gold/30 hover:bg-slate-100"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-gold/60">{s.scripture}</p>
              <h3 className="mt-3 text-lg font-semibold text-slate-950">{s.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">{s.description}</p>
              <Link
                href="/sermons"
                className="mt-5 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-gold/70 transition hover:text-gold"
              >
                Watch Sermon →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Blog + Podcast */}
      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Blog posts */}
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.35em] text-gold/70">From the Blog</p>
              <Link
                href="/blog"
                className="text-xs uppercase tracking-[0.2em] text-gold/60 transition hover:text-gold"
              >
                All Posts →
              </Link>
            </div>
            <div className="mt-6 space-y-5">
              {recentPosts.map((post) => (
                <Link key={post.title} href="/blog" className="group block">
                  <article className="rounded-2xl border border-slate-200 bg-slate-100 p-5 transition hover:border-gold/25 hover:bg-slate-100/70">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-sm font-semibold text-slate-950 group-hover:text-gold transition">
                        {post.title}
                      </h3>
                      <span className="shrink-0 rounded-full bg-gold/8 px-2.5 py-1 text-xs uppercase tracking-[0.2em] text-gold/70">
                        {post.category}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-slate-600">{post.readTime} read</p>
                  </article>
                </Link>
              ))}
            </div>
          </div>

          {/* Podcast */}
          <div className="flex flex-col gap-6 rounded-[2rem] border border-slate-200 bg-white/95 p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-gold/70">TBC Podcast</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950">
                Faith & Transformation Podcast
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Weekly conversations about faith, purpose, and the transforming work of God in
                everyday life. Available wherever you listen.
              </p>
            </div>
            <PodcastEmbed title="Faith & Transformation — Latest Episode" />
            <Link
              href="/podcast"
              className="text-center rounded-full border border-gold/30 px-5 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold transition hover:bg-gold/8"
            >
              All Episodes →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Book */}
      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-10 lg:px-12">
        <div className="rounded-[2rem] border border-gold/15 bg-gradient-to-br from-black/90 to-white/3 p-10 shadow-glow sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.35em] text-gold/70">Featured Book</p>
              <h2 className="text-4xl font-semibold text-slate-950 sm:text-5xl">
                Transformed: A Journey of Faith and Purpose
              </h2>
              <p className="leading-8 text-slate-700">
                A 30-day devotional journey through the scriptures that shaped the TBC community
                — daily readings, prayer prompts, and reflections designed to ignite transformation
                in every area of your life.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-semibold text-slate-950">$24.99</span>
                <span className="rounded-full border border-gold/30 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold">
                  Print & Digital
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/books"
                  className="rounded-full bg-gold px-7 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-gold-light"
                >
                  Shop Books
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-slate-200 px-7 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-950 transition hover:border-gold hover:text-gold"
                >
                  Request a Preview
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="aspect-[3/4] rounded-[1.75rem] border border-gold/20 bg-gradient-to-br from-gold/10 to-black/60 flex items-center justify-center">
                <div className="text-center space-y-2 p-8">
                  <div className="text-4xl text-gold/40">✦</div>
                  <p className="text-sm uppercase tracking-[0.3em] text-gold/50">Book Cover</p>
                  <p className="text-xs text-slate-500">Image Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-10 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-3">
          <Link
            href="/prayer"
            className="group rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8 transition hover:border-gold/30 hover:bg-slate-100"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gold/60">Prayer</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-950 group-hover:text-gold transition">
              Submit a Prayer Request
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Our prayer team intercedes on your behalf. Share what&apos;s on your heart.
            </p>
          </Link>
          <Link
            href="/community"
            className="group rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8 transition hover:border-gold/30 hover:bg-slate-100"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gold/60">Community</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-950 group-hover:text-gold transition">
              Join a Small Group
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Grow alongside other believers in a small group built for real connection.
            </p>
          </Link>
          <Link
            href="/donate"
            className="group rounded-[1.75rem] border border-gold/20 bg-gold/5 p-8 transition hover:border-gold/40 hover:bg-gold/8"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gold/60">Generosity</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-950 group-hover:text-gold transition">
              Give to TBC Ministries
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Every gift supports outreach, ministry programs, and community transformation.
            </p>
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-10 lg:px-12">
        <Newsletter />
      </section>
    </>
  );
}
