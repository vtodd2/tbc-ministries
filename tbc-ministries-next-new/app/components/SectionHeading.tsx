export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      {eyebrow && <p className="text-sm uppercase tracking-[0.28em] text-gold">{eyebrow}</p>}
      <h2 className="mt-2 text-3xl font-semibold text-slate-950">{title}</h2>
      {description && <p className="mt-3 text-slate-300">{description}</p>}
    </div>
  );
}
