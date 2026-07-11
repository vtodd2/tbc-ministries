interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
  autoplay?: boolean;
}

export function YouTubeEmbed({
  videoId,
  title = 'TBC Sermon Video',
  className = '',
  autoplay = false,
}: YouTubeEmbedProps) {
  const params = new URLSearchParams({
    rel: '0',
    modestbranding: '1',
    ...(autoplay ? { autoplay: '1' } : {}),
  });

  if (!videoId) {
    return (
      <div
        className={`relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 ${className}`}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Video Coming Soon</p>
      </div>
    );
  }

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white/95 ${className}`}
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?${params}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
