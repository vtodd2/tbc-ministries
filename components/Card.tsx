'use client';

import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  badge?: string;
  href?: string;
}

export function Card({ title, description, badge }: CardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="group rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8 transition hover:border-gold/30 hover:bg-slate-100"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
        {badge && (
          <span className="shrink-0 rounded-full bg-gold/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold">
            {badge}
          </span>
        )}
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-700">{description}</p>
    </motion.article>
  );
}
