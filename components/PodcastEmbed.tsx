import Link from 'next/link';
import { SOCIAL } from '../lib/constants';

interface PodcastEmbedProps {
  spotifyEpisodeId?: string;
  title?: string;
  className?: string;
}

export function PodcastEmbed({ spotifyEpisodeId, title = 'Latest Episode', className = '' }: PodcastEmbedProps) {
  if (spotifyEpisodeId) {
    return (
      <div className={`overflow-hidden rounded-[1.75rem] border border-slate-200 ${className}`}>
        <iframe
          src={`https://open.spotify.com/embed/episode/${spotifyEpisodeId}?utm_source=generator&theme=0`}
          width="100%"
          height="232"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title={title}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col gap-6 rounded-[1.75rem] border border-slate-200 bg-white/95 p-8 ${className}`}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.5 14.5v-9l6 4.5-6 4.5z" />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-slate-950">{title}</p>
          <p className="text-sm text-slate-600">Available on all major platforms</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link
          href={SOCIAL.spotify}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-700 transition hover:border-gold hover:text-gold"
        >
          Spotify
        </Link>
        <Link
          href={SOCIAL.apple}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-700 transition hover:border-gold hover:text-gold"
        >
          Apple Podcasts
        </Link>
        <Link
          href={SOCIAL.youtube}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-700 transition hover:border-gold hover:text-gold"
        >
          YouTube
        </Link>
      </div>
    </div>
  );
}
