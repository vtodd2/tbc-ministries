export function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a href="https://facebook.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.3em] text-white/80 transition hover:border-gold hover:text-gold">
        Facebook
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.3em] text-white/80 transition hover:border-gold hover:text-gold">
        Instagram
      </a>
      <a href="https://youtube.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.3em] text-white/80 transition hover:border-gold hover:text-gold">
        YouTube
      </a>
    </div>
  );
}
