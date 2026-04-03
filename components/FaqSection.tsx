import SectionHeading from '@/components/SectionHeading';
import type { FaqItem } from '@/lib/site-data';

interface FaqSectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  items: FaqItem[];
}

export default function FaqSection({
  eyebrow = 'FAQ',
  title = 'Common questions',
  description = 'Answers to the questions trade clients ask most often before moving into quoting, sourcing or fabrication support.',
  items,
}: FaqSectionProps) {
  return (
    <section className="section-padding pt-0">
      <div className="container-custom">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {items.map(item => (
            <article key={item.question} className="section-shell p-7">
              <h3 className="font-heading text-3xl font-semibold text-neutral-900">
                {item.question}
              </h3>
              <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
