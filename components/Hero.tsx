import { motion } from 'framer-motion';
import Link from 'next/link';

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative overflow-hidden bg-[#060607] px-6 pb-20 pt-28 text-white sm:px-10 lg:px-12"
    >
      <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top,_rgba(255,214,125,0.14),_transparent_36%),linear-gradient(180deg,_rgba(255,255,255,0.02),_rgba(0,0,0,0.82))]" aria-hidden="true" />
      <div className="absolute left-1/2 top-0 h-full w-[180%] -translate-x-1/2 bg-[radial-gradient(circle_at_30%_20%,_rgba(223,184,94,0.18),_transparent_23%),radial-gradient(circle_at_70%_30%,_rgba(255,255,255,0.04),_transparent_22%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <div className="rounded-[2.5rem] border border-white/10 bg-black/85 p-10 shadow-glow backdrop-blur-xl sm:p-14">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="space-y-8"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-gold/80">Kingdom Light Ministry</p>
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.2, ease: 'easeOut' }}
                  className="text-5xl font-semibold leading-tight text-white sm:text-6xl"
                >
                  Cinematic ministry branding for a generation seeking depth and divine elegance.
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.3, ease: 'easeOut' }}
                  className="max-w-3xl text-xl leading-9 text-white/70 sm:text-2xl"
                >
                  Experience a luxury faith narrative shaped by powerful sermons, curated spiritual resources, and transformative giving opportunities.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.35, ease: 'easeOut' }}
                className="flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                <Link
                  href="/sermons"
                  className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-black shadow-lg shadow-gold/20 transition hover:bg-[#c8a55d]"
                >
                  Watch Sermons
                </Link>
                <Link
                  href="/donate"
                  className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:border-gold hover:text-gold"
                >
                  Give with Purpose
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.4, ease: 'easeOut' }}
              className="rounded-[2rem] border border-gold/15 bg-white/5 p-8 text-white shadow-glow sm:max-w-md"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-gold/75">Cinematic Ministry</p>
              <div className="mt-6 space-y-5 text-sm leading-7 text-white/70">
                <div className="space-y-2 rounded-3xl border border-white/10 bg-black/70 p-5">
                  <p className="font-semibold text-white">Story-driven teaching</p>
                  <p>Messages designed like a cinematic journey, rooted in scripture and delivered with clarity.</p>
                </div>
                <div className="space-y-2 rounded-3xl border border-white/10 bg-black/70 p-5">
                  <p className="font-semibold text-white">Luxury worship design</p>
                  <p>Elegant visuals and premium presentation that honor the Gospel and invite engagement.</p>
                </div>
                <div className="space-y-2 rounded-3xl border border-white/10 bg-black/70 p-5">
                  <p className="font-semibold text-white">Impactful giving</p>
                  <p>Secure support pathways that empower outreach, church growth, and spiritual formation.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
