import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeader } from '../../components/SectionHeader';
import { Newsletter } from '../../components/Newsletter';

export const metadata: Metadata = {
  title: 'About | Transformed Believers Church',
  description:
    'Learn the mission, vision, values, and story behind Transformed Believers Church — a ministry rooted in Scripture and built for transformation.',
};

const values = [
  { title: 'Scripture First', body: 'Every message, decision, and direction is anchored in the truth of God\'s word. We preach the full counsel of Scripture without compromise.' },
  { title: 'Authentic Transformation', body: 'We believe real change comes from encountering the living God — not performance or religious duty, but genuine spiritual renewal.' },
  { title: 'Radical Generosity', body: 'We give freely because we have received freely. Generosity is not an obligation; it is an expression of kingdom values.' },
  { title: 'Intentional Community', body: 'We were not designed to walk alone. We cultivate a culture of authentic relationship, mutual accountability, and genuine care.' },
];

const beliefs = [
  { heading: 'The Bible', body: 'We believe the Bible is the inspired, infallible Word of God — the supreme authority for all faith and practice.' },
  { heading: 'Salvation', body: 'We believe in salvation by grace alone, through faith alone, in Christ alone. Eternal life is a gift, not earned.' },
  { heading: 'The Holy Spirit', body: 'We believe in the present-day work of the Holy Spirit who transforms, empowers, and guides believers into all truth.' },
  { heading: 'The Church', body: 'We believe the local church is God\'s primary vehicle for discipleship, worship, outreach, and kingdom advancement.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <SectionHeader
          title="About TBC"
          subtitle="A ministry rooted in Scripture and built for transformation."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          {/* Who We Are */}
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10 shadow-glow">
            <p className="text-xs uppercase tracking-[0.35em] text-gold/70">Who We Are</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
              Transformed Believers Church
            </h2>
            <p className="mt-6 leading-8 text-slate-700">
              Transformed Believers Church (TBC) is a Spirit-led, Bible-based ministry committed to
              one vision: helping people encounter the transforming power of Jesus Christ and live
              out their God-given purpose with excellence and intentionality.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Founded on the conviction that authentic faith produces authentic change, TBC exists to
              create a community where no one is left behind, every voice is heard, and every
              believer is equipped to walk in their calling. Whether you join us online or in person,
              you will find a home rooted in grace, truth, and love.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/sermons"
                className="rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-gold-light"
              >
                Watch a Sermon
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-slate-200 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-950 transition hover:border-gold hover:text-gold"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Mission / Vision / Heart */}
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white/95 p-8">
              <h3 className="text-xs uppercase tracking-[0.35em] text-gold/70">Our Mission</h3>
              <p className="mt-4 leading-7 text-slate-700">
                To make disciples of Jesus Christ who are transformed in mind, heart, and action —
                and who transform the world around them through the power of the Gospel.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white/95 p-8">
              <h3 className="text-xs uppercase tracking-[0.35em] text-gold/70">Our Vision</h3>
              <p className="mt-4 leading-7 text-slate-700">
                A global community of transformed believers who carry the love, truth, and power of
                Jesus into every sphere of influence — family, business, culture, and beyond.
              </p>
            </div>
            <div className="rounded-[2rem] border border-gold/15 bg-gold/5 p-8">
              <h3 className="text-xs uppercase tracking-[0.35em] text-gold/70">Our Heart</h3>
              <p className="mt-4 leading-7 text-slate-700">
                We believe everyone carries a story worth honoring and a purpose worth pursuing.
                TBC is the community where that story meets the Author.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-10 lg:px-12">
        <SectionHeader
          title="Core Values"
          subtitle="The principles that shape everything we do."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 transition hover:border-gold/30"
            >
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold/10 text-gold">
                <span className="text-sm">✦</span>
              </div>
              <h3 className="font-semibold text-slate-950">{v.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Believe */}
      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-10 lg:px-12">
        <div className="rounded-[2rem] border border-slate-200 bg-white/95 p-10 shadow-glow sm:p-12">
          <SectionHeader
            title="What We Believe"
            subtitle="Our foundational beliefs rooted in Scripture."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {beliefs.map((b) => (
              <div key={b.heading} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-7">
                <h3 className="font-semibold text-slate-950">{b.heading}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Placeholder */}
      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-10 lg:px-12">
        <SectionHeader
          title="Leadership"
          subtitle="Meet the pastors and team serving TBC."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: 'Pastor James O. Williams', role: 'Senior Pastor & Founder' },
            { name: 'Pastor Sarah Williams', role: 'Co-Pastor & Women\'s Ministry Director' },
            { name: 'Elder Marcus Thompson', role: 'Executive Elder & Ministry Operations' },
          ].map((person) => (
            <div
              key={person.name}
              className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8 text-center"
            >
              <div className="mx-auto mb-5 h-20 w-20 rounded-full border border-gold/20 bg-gold/5 flex items-center justify-center text-gold/40 text-2xl">
                ✦
              </div>
              <h3 className="font-semibold text-slate-950">{person.name}</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-gold/60">{person.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-10 lg:px-12">
        <Newsletter />
      </section>
    </>
  );
}
