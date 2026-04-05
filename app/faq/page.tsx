import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { generateFaqSchema } from '@/lib/faq-schema';
import { FAQ_GROUPS, PROJECT_BRIEF_HREF, TRADE_PORTAL_ACCESS_HREF } from '@/lib/site-data';

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
      >
        <Link href={TRADE_PORTAL_ACCESS_HREF} className="btn-primary">
          Trade Portal Access
        </Link>
        <Link href={PROJECT_BRIEF_HREF} className="btn-secondary">
          Submit a Project Brief
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
                <div className="mt-8 grid gap-5 lg:grid-cols-2">
                  {group.items.map(item => (
                    <article
                      key={item.question}
                      className="rounded-[1.5rem] border border-primary/10 bg-neutral-50 p-6"
                    >
                      <h3 className="font-heading text-3xl font-semibold text-neutral-900">
                        {item.question}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-neutral-700">{item.answer}</p>
                    </article>
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
