import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { generateFaqSchema } from '@/lib/faq-schema';
import { FAQ_GROUPS, TRADE_PORTAL_ACCESS_HREF, TRADE_SUPPORT_HREF } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'FAQ | Trade Fabrics, Projects and Fabrication Support',
  description:
    'Find answers to common questions about LuxAura’s fabric sourcing, fabrication, window treatments and trade workflow.',
  keywords:
    'LuxAura FAQ, fabric sourcing FAQ, trade project support, curtain workroom questions, furnishing delivery Sydney',
  alternates: {
    canonical: `${SITE_CONFIG.url}/faq`,
  },
};

export default function FaqPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'FAQ', url: '/faq' }]);
  const faqSchema = generateFaqSchema(FAQ_GROUPS.flatMap(group => group.items));

  return (
    <div>
      <PageHero
        eyebrow="FAQ"
        title="Answers for trade clients"
        description="Common questions on collections, project briefs, fabrication support and trade workflow, grouped by category."
        imageSrc="/images/luxaura/beach-sheer.webp"
        imageAlt="LuxAura fabric sourcing and fabrication FAQ"
        imageCode="LXA-FAQ-01"
      >
        <Link href={TRADE_PORTAL_ACCESS_HREF} className="btn-primary">
          Trade Account
        </Link>
        <Link href={TRADE_SUPPORT_HREF} className="btn-secondary">
          Project Enquiry
        </Link>
      </PageHero>

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'FAQ', href: '/faq' }]} />
      </div>

      <section className="section-padding pt-6">
        <div className="container-custom">
          <SectionHeading
            eyebrow="FAQ by Category"
            title="Start with the area you are working on"
            description="Each group links back to the relevant page for more context."
          />
          <div className="mt-10 space-y-10">
            {FAQ_GROUPS.map(group => (
              <section key={group.href} className="section-shell p-8 sm:p-10">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="eyebrow">Category</p>
                    <h2 className="mt-3 font-heading text-4xl font-semibold text-neutral-900">
                      {group.title}
                    </h2>
                  </div>
                  <Link href={group.href} className="btn-secondary">
                    View Category
                  </Link>
                </div>
                <div className="mt-8 space-y-4">
                  {group.items.map(item => (
                    <details
                      key={item.question}
                      className="group rounded-[1.5rem] border border-primary/10 bg-neutral-50 px-6 py-1"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6">
                        <h3 className="pr-4 font-heading text-2xl font-semibold text-neutral-900 sm:text-3xl">
                          {item.question}
                        </h3>
                        <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-primary/10 bg-white text-primary transition group-open:rotate-45">
                          <svg
                            className="h-5 w-5"
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
                      <div className="pb-6">
                        <p className="max-w-4xl text-sm leading-7 text-neutral-700">
                          {item.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
