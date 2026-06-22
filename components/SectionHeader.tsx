interface SectionHeaderProps {
  title: string;
  subtitle: string;
  align?: 'center' | 'left';
}

export function SectionHeader({ title, subtitle, align = 'center' }: SectionHeaderProps) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center';
  return (
    <div className={`space-y-3 ${alignClass}`}>
      <p className="text-xs uppercase tracking-[0.38em] text-gold/70">{title}</p>
      <p
        className={`text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl ${
          align === 'center' ? 'mx-auto max-w-2xl' : ''
        }`}
        dangerouslySetInnerHTML={{ __html: subtitle }}
      />
    </div>
  );
}
