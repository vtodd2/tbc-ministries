export function PodcastEmbed({ src, title }: { src: string; title?: string }) {
  return (
    <div className="rounded-lg border border-white/6 bg-surface p-4">
      <h3 className="text-sm font-semibold text-slate-950">{title || "Podcast"}</h3>
      <div className="mt-4">
        <iframe
          title={title || "podcast-embed"}
          src={src}
          height={180}
          className="w-full border-0"
          allow="autoplay; encrypted-media"
        />
      </div>
    </div>
  );
}
