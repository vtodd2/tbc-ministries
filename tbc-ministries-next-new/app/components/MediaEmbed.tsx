export function MediaEmbed({ title, src, description }: { title?: string; src: string; description?: string }) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg bg-slate-100">
      <iframe
        title={title || "media"}
        src={src}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full border-0"
      />
      {description && <p className="mt-2 text-sm text-slate-300">{description}</p>}
    </div>
  );
}
