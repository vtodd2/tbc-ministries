import { motion } from 'framer-motion';

export function Card({ title, description, badge }: { title: string; description: string; badge?: string }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-8 transition hover:border-gold/40 hover:bg-white/10"
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        {badge ? <span className="rounded-full bg-gold/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-gold">{badge}</span> : null}
      </div>
      <p className="mt-4 text-sm leading-7 text-white/70">{description}</p>
    </motion.article>
  );
}
