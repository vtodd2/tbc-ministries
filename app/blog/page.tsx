import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeader } from '../../components/SectionHeader';
import { Newsletter } from '../../components/Newsletter';
import type { BlogPost } from '../../types';

export const metadata: Metadata = {
  title: 'Blog | Transformed Believers Church',
  description:
    'Read devotionals, ministry articles, and faith reflections from TBC Ministries. Biblical teaching for modern believers seeking transformation.',
};

const posts: BlogPost[] = [
  {
    id: '1',
    title: '5 Ways to Deepen Your Daily Prayer Life',
    excerpt:
      'Prayer is not just a ritual — it is a relationship. Here are five practical strategies that have transformed how our community encounters God in the quiet moments of everyday life.',
    date: '2025-06-18',
    category: 'Devotional',
    slug: '5-ways-deepen-prayer-life',
    readTime: '4 min',
    author: 'Pastor James O. Williams',
    featured: true,
  },
  {
    id: '2',
    title: 'Understanding the Transforming Power of God\'s Word',
    excerpt:
      'The Bible is not merely a book of good advice. It is living, active, and sharper than any double-edged sword. Discover what Scripture says about its own transformative nature.',
    date: '2025-06-12',
    category: 'Teaching',
    slug: 'transforming-power-gods-word',
    readTime: '6 min',
    author: 'Pastor Sarah Williams',
  },
  {
    id: '3',
    title: 'How Community Shapes Your Faith Walk',
    excerpt:
      'God never designed us to walk alone. Biblical community is one of the most powerful catalysts for growth, accountability, and transformation in the life of a believer.',
    date: '2025-06-05',
    category: 'Community',
    slug: 'community-shapes-faith-walk',
    readTime: '3 min',
    author: 'Elder Marcus Thompson',
  },
  {
    id: '4',
    title: 'The Role of Worship in Personal Transformation',
    excerpt:
      'Authentic worship does more than express reverence — it repositions your heart. When we worship in Spirit and truth, we create space for God to do what only He can do.',
    date: '2025-05-28',
    category: 'Worship',
    slug: 'role-of-worship-transformation',
    readTime: '5 min',
    author: 'Pastor James O. Williams',
  },
  {
    id: '5',
    title: 'Biblical Principles for Financial Stewardship',
    excerpt:
      'Money is one of the most discussed topics in Scripture. Understanding God\'s perspective on wealth and generosity can completely reframe your relationship with resources.',
    date: '2025-05-20',
    category: 'Stewardship',
    slug: 'biblical-financial-stewardship',
    readTime: '7 min',
    author: 'Pastor Sarah Williams',
  },
  {
    id: '6',
    title: 'Finding Purpose in Every Season of Life',
    excerpt:
      'Whether you are in a season of abundance or scarcity, clarity or confusion, God has a specific assignment for you right now. Here is how to discover it.',
    date: '2025-05-13',
    category: 'Purpose',
    slug: 'finding-purpose-every-season',
    readTime: '5 min',
    author: 'Elder Marcus Thompson',
  },
];

const categories = ['All', 'Devotional', 'Teaching', 'Community', 'Worship', 'Stewardship', 'Purpose'];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  const featured = posts.find((p) => p.featured)!;
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <SectionHeader
          title="Blog"
          subtitle="Reflections, teaching, and devotionals for the transformed life."
        />

        {/* Category filter (visual) */}
        <div className="mt-10 flex flex-wrap gap-2 justify-center">
          {categories.map((cat, i) => (
            <button
              key={cat}
              type="button"
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
                i === 0
                  ? 'border-gold bg-gold/10 text-gold'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-gold/30 hover:text-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured post */}
        <div className="mt-12">
          <article className="rounded-[2rem] border border-gold/20 bg-gradient-to-br from-gold/5 to-black/60 p-8 shadow-glow sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-black">
                    Featured
                  </span>
                  <span className="rounded-full border border-slate-200 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-600">
                    {featured.category}
                  </span>
                  <span className="text-xs text-slate-500">{featured.readTime} read</span>
                </div>
                <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">{featured.title}</h2>
                <p className="leading-7 text-slate-700">{featured.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-slate-600">
                  <span>{featured.author}</span>
                  <span>·</span>
                  <span>{formatDate(featured.date)}</span>
                </div>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="inline-flex rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-gold-light"
                >
                  Read Article →
                </Link>
              </div>
              <div className="aspect-[4/3] rounded-[1.75rem] border border-gold/15 bg-gradient-to-br from-gold/8 to-black/80 flex items-center justify-center">
                <div className="text-center space-y-2 p-6">
                  <div className="text-5xl text-gold/30">✦</div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gold/40">Article Image</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Post grid */}
      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-10 lg:px-12">
        <p className="text-xs uppercase tracking-[0.35em] text-gold/70">Recent Posts</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 transition hover:border-gold/25 hover:bg-slate-100"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="rounded-full bg-gold/8 px-2.5 py-1 text-xs uppercase tracking-[0.18em] text-gold/70">
                  {post.category}
                </span>
                <span className="text-xs text-slate-500">{post.readTime} read</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-950 group-hover:text-gold transition flex-1">
                {post.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">{post.excerpt}</p>
              <div className="mt-5 flex items-center justify-between gap-3">
                <div className="text-xs text-slate-600">
                  <p>{post.author}</p>
                  <p>{formatDate(post.date)}</p>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-gold/60 transition hover:text-gold"
                >
                  Read →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            type="button"
            className="rounded-full border border-slate-200 bg-slate-50 px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-700 transition hover:border-gold hover:text-gold"
          >
            Load More Posts
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-10 lg:px-12">
        <Newsletter />
      </section>
    </>
  );
}
