'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const features = [
  {
    title: 'Spirit-Led Preaching',
    body: 'Transformative messages rooted in Scripture, delivered with power, clarity, and pastoral care for modern believers.',
  },
  {
    title: 'Kingdom Community',
    body: 'A family of transformed believers committed to authentic worship, discipleship, and serving one another.',
  },
  {
    title: 'Faith in Action',
    body: 'Generosity, prayer, and outreach that extend God\'s love far beyond our walls into every community we touch.',
  },
];

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative overflow-hidden px-6 pb-20 pt-16 sm:px-10 sm:pt-20 lg:px-12 lg:pt-24"
    >
      {/* Background layers */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,_rgba(191,163,105,0.14),_transparent_40%),radial-gradient(circle_at_80%_100%,_rgba(191,163,105,0.07),_transparent_35%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="rounded-[2.5rem] border border-slate-200 bg-white/95 p-8 shadow-glow-lg backdrop-blur-xl sm:p-12 lg:p-14">
          <div className="grid gap-14 lg:grid-cols-[1.3fr_0.85fr] lg:items-center">
            {/* Left: copy */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="space-y-8"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-gold/70">
                Transformed Believers Church
              </p>

              <div className="space-y-5">
                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.2, ease: 'easeOut' }}
                  className="text-5xl font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl"
                >
                  Where Faith{' '}
                  <span className="bg-gold-gradient bg-clip-text text-transparent">
                    Becomes
                  </span>{' '}
                  Transformation.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.3, ease: 'easeOut' }}
                  className="max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9"
                >
                  Experience Spirit-led worship, biblical teaching, and authentic community that
                  transforms lives from the inside out — rooted in grace, built for purpose.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.38, ease: 'easeOut' }}
                className="flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                <Link
                  href="/sermons"
                  className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-gold px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.28em] text-black shadow-glow transition hover:bg-gold-light"
                >
                  Watch Sermons
                </Link>
                <Link
                  href="/community"
                  className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-white/12 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.28em] text-slate-950 transition hover:border-gold hover:text-gold"
                >
                  Join Community
                </Link>
                <Link
                  href="/livestream"
                  className="text-xs font-semibold uppercase tracking-[0.28em] text-gold/70 underline underline-offset-4 transition hover:text-gold"
                >
                  Watch Live →
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: feature cards */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.42, ease: 'easeOut' }}
              className="space-y-4"
            >
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1, ease: 'easeOut' }}
                  className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 backdrop-blur-sm transition hover:border-gold/25 hover:bg-slate-100"
                >
                  <p className="font-semibold text-slate-950">{f.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{f.body}</p>
                </motion.div>
              ))}

              <div className="rounded-[1.5rem] border border-gold/20 bg-gold/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-gold/70">Next Service</p>
                <p className="mt-2 font-semibold text-slate-950">Sunday, 10:00 AM & 12:00 PM</p>
                <p className="mt-1 text-sm text-slate-600">1200 Horizon Ave, Atlanta, GA · Also streaming live</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
