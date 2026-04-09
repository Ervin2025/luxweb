import SectionHeading from '@/components/SectionHeading';

const PARTNER_VALUE_ITEMS = [
  {
    title: 'Designers',
    description:
      'Protect design intent, access more decorative and technical resources, and reduce fragmentation between sourcing and execution.',
  },
  {
    title: 'Stylists',
    description:
      'Use more complete sourcing, stronger finishing options and easier coordination to achieve sharper visual outcomes.',
  },
  {
    title: 'Builders / Developers',
    description:
      'Reduce coordination burden, align furnishing categories earlier and keep project flow cleaner through one more connected pathway.',
  },
  {
    title: 'Retailers / Brand Partners',
    description:
      'Gain more distinctive resources, small-batch flexibility and stronger custom capability that can improve market competitiveness.',
  },
  {
    title: 'Hospitality / Short-Stay Clients',
    description:
      'Support stronger guest-facing presentation, practical durability and furnishing decisions that work commercially as well as visually.',
  },
] as const;

interface PartnerValueSectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
}

export default function PartnerValueSection({
  eyebrow = 'Partner Value',
  title = 'How LuxAura Helps Its Partners',
  description = 'LuxAura is more useful than a fragmented supplier mix because it helps different project partners reduce workload, protect intent and finish with stronger results.',
  className = '',
}: PartnerValueSectionProps) {
  return (
    <section className={`px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[9.5rem] ${className}`}>
      <div className="container-custom">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 xl:grid-cols-5">
          {PARTNER_VALUE_ITEMS.map(item => (
            <article
              key={item.title}
              className="rounded-[1.55rem] border border-primary/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(246,240,228,0.72))] p-5 shadow-[0_18px_50px_rgba(26,24,22,0.04)] max-[430px]:rounded-[1.35rem] max-[430px]:p-4 sm:rounded-[1.7rem] sm:p-6"
            >
              <h3 className="font-heading text-[1.75rem] font-semibold leading-tight text-neutral-900 max-[430px]:text-[1.55rem] sm:text-[2rem]">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
