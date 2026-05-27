export function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="space-y-3 text-center">
      <p className="text-sm uppercase tracking-[0.35em] text-gold/80">{title}</p>
      <p className="mx-auto max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
        {subtitle}
      </p>
    </div>
  );
}
