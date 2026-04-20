import SectionHeading from '@/components/SectionHeading';
import type { FaqItem } from '@/lib/site-data';

interface AccordionFaqProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  items: FaqItem[];
}

export default function AccordionFaq({
  id,
  eyebrow = 'FAQ',
  title = 'Common questions',
  description = 'Answers to the practical questions clients usually ask before specifying, coordinating or confirming fabrication detail.',
  items,
}: AccordionFaqProps) {
  return (
    <section id={id} className="section-padding pt-0">
      <div className="container-custom">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-10 space-y-4">
          {items.map(item => (
            <details
              key={item.question}
              className="group overflow-hidden rounded-[1.7rem] border border-[#e7decf] bg-white/82 px-6 py-1 shadow-[0_18px_52px_rgba(24,19,14,0.06)] sm:px-8"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6">
                <h3 className="pr-4 font-heading text-2xl font-semibold text-neutral-900 sm:text-3xl">
                  {item.question}
                </h3>
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-primary/10 bg-[#faf7f1] text-primary transition group-open:rotate-45">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14" />
                    <path d="M5 12h14" />
                  </svg>
                </span>
              </summary>
              <div className="pb-6 pr-1">
                <p className="max-w-4xl whitespace-pre-line text-sm leading-7 text-neutral-700 sm:text-base">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
