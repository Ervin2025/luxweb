import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import FaqSection from '@/components/FaqSection';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import TradeForm from '@/components/TradeForm';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { generateFaqSchema } from '@/lib/faq-schema';
import {
  TRADE_PROJECT_BENEFITS,
  TRADE_PROJECT_FAQ,
  TRADE_PROJECT_PARTNERS,
  TRADE_PROJECT_PROCESS,
  type FormIntent,
} from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Trade Account | Pricing, Resources and Project Support',
  description:
    'Register a Luxaura trade account for project pricing, resources and support across fabrics, soft furnishings and custom products.',
  keywords:
    'trade fabric supplier Sydney, trade account application, project fabric quote, curtain workroom Sydney',
  alternates: {
    canonical: `${SITE_CONFIG.url}/trade-projects`,
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
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Trade Account', url: '/trade-projects' },
  ]);
  const faqSchema = generateFaqSchema(TRADE_PROJECT_FAQ);

  return (
    <div>
      <PageHero
        eyebrow="Trade Account"
        title="Register once, then access best pricing, resources and project support"
        description="Open a Luxaura trade account for project pricing, product resources and support across collections, custom soft furnishings and related categories. Prospective partners can also apply for dedicated pricing and resources."
        imageSrc="/images/luxaura/vertical-sheer-pool.webp"
        imageAlt="Luxaura trade and project support"
      >
        <a href="#trade-projects-form" className="btn-primary">
          Register Trade Account
        </a>
        <Link href="/trade/login" className="btn-secondary">
          View Portal Preview
        </Link>
      </PageHero>

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Trade Account', href: '/trade-projects' }]} />
      </div>

      <section className="section-padding pt-6">
        <div className="container-custom">
          <div className="section-shell p-8 sm:p-10">
            <SectionHeading
              eyebrow="Who It's For"
              title="Built for designers, retailers, project owners and future partners"
              description="Use the trade account when you want pricing, samples, product resources and future quoting kept inside one relationship."
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
                title="Sampling, quoting and fabrication stay connected"
                description="The account exists to keep fabrics, products, resources and support inside one managed path."
                theme="dark"
              />
              <div className="mt-8 grid gap-4">
                {[
                  'Registering early helps repeat buyers move faster on pricing, resources and support.',
                  'Project enquiries are routed into the right product and fabrication discussion.',
                  'Approved accounts keep future quotes and custom product planning inside one relationship.',
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
              description="Trade access requires ABN verification. Project enquiries use the same streamlined form."
              align="center"
            />
            <div className="mt-10">
              <TradeForm initialIntent={initialIntent} />
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        items={TRADE_PROJECT_FAQ}
        title="Frequently asked questions"
        description="Quick answers on trade access and project support."
      />

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
