import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { FORM_INTENT_OPTIONS, THANK_YOU_VARIANTS, type FormIntent } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Thank You | Luxaura',
  description:
    'Thank you for contacting Luxaura. Your enquiry has been received and the team will respond with the next step.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/thank-you`,
  },
};

const validForms = ['trade-projects', 'quote', 'contact'] as const;

function resolveForm(value: string | string[] | undefined) {
  if (typeof value === 'string' && validForms.includes(value as (typeof validForms)[number])) {
    return value as (typeof validForms)[number];
  }

  return 'contact';
}

function resolveIntent(value: string | string[] | undefined) {
  if (typeof value !== 'string') {
    return null;
  }

  return FORM_INTENT_OPTIONS.find(option => option.value === (value as FormIntent)) ?? null;
}

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams?: Promise<{ form?: string | string[]; intent?: string | string[] }>;
}) {
  const resolvedSearchParams = await searchParams;
  const formKey = resolveForm(resolvedSearchParams?.form);
  const variant = THANK_YOU_VARIANTS[formKey];
  const intent = resolveIntent(resolvedSearchParams?.intent);
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'Thank You', url: '/thank-you' }]);

  return (
    <div className="px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pt-44">
      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Thank You', href: '/thank-you' }]} />
        <section className="section-shell mt-4 overflow-hidden p-8 text-center sm:p-10">
          <p className="eyebrow">Submission Received</p>
          <h1 className="mt-4 font-heading text-5xl font-semibold text-neutral-900 sm:text-6xl">
            {variant.title}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-neutral-700 sm:text-lg">
            {variant.description}
          </p>
          {formKey === 'trade-projects' && intent ? (
            <div className="mx-auto mt-8 max-w-xl rounded-[1.5rem] border border-primary/10 bg-neutral-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary/70">
                Submitted Intent
              </p>
              <p className="mt-3 font-heading text-3xl font-semibold text-neutral-900">
                {intent.label}
              </p>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{intent.description}</p>
            </div>
          ) : null}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href={variant.primaryCta.href} className="btn-primary">
              {variant.primaryCta.label}
            </Link>
            <Link href={variant.secondaryCta.href} className="btn-secondary">
              {variant.secondaryCta.label}
            </Link>
          </div>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </div>
  );
}
