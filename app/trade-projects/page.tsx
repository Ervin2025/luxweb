import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import TradeForm from '@/components/TradeForm';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { type FormIntent } from '@/lib/form-options';
import {
  TRADE_PROJECT_BENEFITS,
  TRADE_PROJECT_PARTNERS,
  TRADE_PROJECT_PROCESS,
} from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Trade Account | Trade Entry and Project Enquiry',
  description:
    'Access the LuxAura trade pathway for pricing review, project coordination, resources and ongoing trade support.',
  keywords:
    'trade fabric supplier Sydney, trade portal access, project brief support, curtain workroom Sydney',
  alternates: {
    canonical: `${SITE_CONFIG.url}/trade-projects`,
  },
  openGraph: {
    title: 'Trade Account | Trade Entry and Project Enquiry',
    description:
      'Access the LuxAura trade pathway for pricing review, project coordination, resources and ongoing trade support.',
    url: `${SITE_CONFIG.url}/trade-projects`,
    images: ['/images/luxaura/vertical-sheer-pool.webp'],
  },
};

function resolveIntent(value: string | string[] | undefined): FormIntent {
  if (value === 'project-enquiry') {
    return 'project-enquiry';
  }

  return 'trade-access';
}

export default async function TradeProjectsPage({
  searchParams,
}: {
  searchParams?: Promise<{ intent?: string | string[] }>;
}) {
  const resolvedSearchParams = await searchParams;
  const initialIntent = resolveIntent(resolvedSearchParams?.intent);
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'Trade Account', url: '/trade-projects' }]);

  return (
    <div>
      <PageHero
        eyebrow="Trade Account"
        title="Trade entry for pricing, resources and project coordination"
        description="Use this page to apply for Trade Account access or send a Project Enquiry. Project Enquiry does not require ABN registration."
        imageSrc="/images/luxaura/vertical-sheer-pool.webp"
        imageAlt="LuxAura trade and project support"
        imageCode="LXA-TRADE-01"
      />

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Trade Account', href: '/trade-projects' }]} />
      </div>

      <section className="section-padding pt-6">
        <div className="container-custom">
          <div className="section-shell p-8 sm:p-10">
            <SectionHeading
              eyebrow="Who It's For"
              title="Built for designers, retailers, project owners and future partners"
              description="Use this pathway when pricing review, material access and project support need to stay inside one accountable relationship."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-3 xl:grid-cols-6">
              {TRADE_PROJECT_PARTNERS.map(partner => (
                <article
                  key={partner}
                  className="rounded-[1.5rem] border border-primary/10 bg-neutral-50 p-5 text-sm leading-7 text-neutral-700"
                >
                  {partner}
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-4">
              {TRADE_PROJECT_BENEFITS.map(item => (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-primary/10 bg-neutral-50 p-6"
                >
                  <h2 className="font-heading text-3xl font-semibold text-neutral-900">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-neutral-700">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="overflow-hidden rounded-[2rem] bg-[#14221c] p-8 text-white shadow-[0_28px_90px_rgba(20,25,21,0.18)] sm:p-10">
              <SectionHeading
                eyebrow="Workflow"
                title="Sampling, project support and fabrication stay connected"
                description="Trade access exists to keep sourcing, fabrication and project coordination inside one managed path."
                theme="dark"
              />
              <div className="mt-8 grid gap-4">
                {[
                  'Registering early helps repeat buyers move faster on pricing, resources and support.',
                  'Project enquiries are routed into the right product and fabrication discussion.',
                  'Approved accounts keep future project responses and custom planning inside one relationship.',
                ].map(item => (
                  <article
                    key={item}
                    className="rounded-[1.4rem] border border-white/12 bg-white/6 p-5 text-sm leading-7 text-white/78"
                  >
                    {item}
                  </article>
                ))}
              </div>
            </article>

            <article className="section-shell p-8 sm:p-10">
              <SectionHeading
                eyebrow="Process"
                title="How it moves"
                description="A simple path from enquiry to approval or project follow-up."
              />
              <div className="mt-8 space-y-4">
                {TRADE_PROJECT_PROCESS.map((step, index) => (
                  <article
                    key={step.title}
                    className="rounded-[1.4rem] border border-primary/10 bg-neutral-50 p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary/70">
                      Step {index + 1}
                    </p>
                    <h2 className="mt-3 font-heading text-3xl font-semibold text-neutral-900">
                      {step.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-neutral-700">{step.description}</p>
                  </article>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="trade-projects-form" className="section-padding pt-0">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl">
            <SectionHeading
              eyebrow="Form"
              title="Choose the right intent and send the brief once"
              description="Trade access requires ABN verification. Project enquiries use the same structured intake flow."
              align="center"
            />
            <div className="mt-10">
              <TradeForm initialIntent={initialIntent} />
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </div>
  );
}
