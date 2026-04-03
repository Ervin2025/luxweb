import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Trade Portal Preview | Secure Wholesale Access',
  description:
    'Preview the Luxaura trade portal surface for protected wholesale pricing, spec sheet access and project quote support.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/trade/login`,
  },
};

export default function TradeLoginPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Trade Account', url: '/trade-projects' },
    { name: 'Trade Portal Preview', url: '/trade/login' },
  ]);

  return (
    <div className="px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pt-40">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Trade Account', href: '/trade-projects' },
            { label: 'Trade Portal Preview', href: '/trade/login' },
          ]}
        />
        <section className="section-shell mt-4 overflow-hidden p-8 sm:p-10">
          <p className="eyebrow">Secure Trade Portal</p>
          <h1 className="mt-4 font-heading text-5xl font-semibold text-neutral-900 sm:text-6xl">
            Protected pricing and project tools for approved trade members
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-700 sm:text-lg">
            This route establishes the portal surface for account-approved members. Pricing access
            is issued after trade review and ABN validation.
          </p>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              'Wholesale pricing dashboard',
              'Saved project quote requests',
              'Spec sheets and sample support',
            ].map(item => (
              <article key={item} className="rounded-[1.6rem] border border-primary/10 bg-neutral-50 p-6">
                <p className="eyebrow">Locked</p>
                <h2 className="mt-3 font-heading text-3xl font-semibold text-neutral-900">{item}</h2>
                <p className="mt-4 text-sm leading-7 text-neutral-700">
                  Available after account approval. Use trade application or contact the support desk
                  if your team already has access.
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/trade-projects" className="btn-primary">
              Open Trade Account
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Trade Support
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
