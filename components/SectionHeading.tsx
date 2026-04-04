interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left';
  const eyebrowClass = theme === 'dark' ? 'text-[#dfc99f]' : 'text-primary/70';
  const titleClass = theme === 'dark' ? 'text-white' : 'text-neutral-900';
  const descriptionClass = theme === 'dark' ? 'text-white/78' : 'text-neutral-700';

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.3em] ${eyebrowClass}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-balance font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-5xl ${titleClass}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-pretty text-[15px] leading-7 sm:mt-5 sm:text-lg ${descriptionClass}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
