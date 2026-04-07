import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageHero from '@/components/PageHero';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { TRADE_SUPPORT_HREF } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Terms of Service | LuxAura',
  description:
    'Review the terms that apply to using the LuxAura website and submitting trade access or project enquiries.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/terms`,
  },
};

const termsSections = [
  {
    title: '1. Website purpose',
    body: 'The LuxAura website is a B2B marketing and enquiry platform for professional clients, including designers, builders, developers and project teams.',
  },
  {
    title: '2. Project responses and account approval',
    body: 'Submitting a form does not create a binding supply contract. Trade access requests and project briefs are reviewed before any commercial arrangement is confirmed.',
  },
  {
    title: '3. Quotes, pricing and availability',
    body: 'Website content is general in nature and does not constitute instant pricing. Project responses, specifications, suitability and lead times remain subject to review and availability.',
  },
  {
    title: '4. Trade access',
    body: 'LuxAura may request business details, ABN information or other supporting information before granting trade access. Applying does not guarantee approval.',
  },
  {
    title: '5. Samples, colours and product representation',
    body: 'Images are indicative only. Screen-based colour, texture and scale may differ from physical products, so final decisions should be based on samples and approvals.',
  },
  {
    title: '6. Project information supplied by you',
    body: 'You are responsible for the accuracy of project details, quantities, site conditions, intended usage and other information provided to LuxAura.',
  },
  {
    title: '7. Intellectual property',
    body: 'Unless otherwise stated, the website design, copy, imagery and branding are owned by LuxAura or used with permission. They must not be reused without written consent.',
  },
  {
    title: '8. Liability',
    body: 'To the extent permitted by law, LuxAura is not liable for indirect or consequential loss arising from reliance on website content alone. Final decisions should be based on confirmed quotes, approved samples and direct communication.',
  },
];

export default function TermsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'Terms of Service', url: '/terms' }]);

  return (
    <div>
      <PageHero
        eyebrow="Terms of Service"
        title="Terms for using the LuxAura trade website"
        description="These terms apply to use of the LuxAura trade website and its trade access, project brief and contact forms."
        imageSrc="/images/luxaura/hero-project.webp"
        imageAlt="LuxAura terms of service"
        imageCode="LXA-TERMS-01"
      >
        <Link href="/trade-projects" className="btn-primary">
          Trade Portal Access
        </Link>
        <Link href={TRADE_SUPPORT_HREF} className="btn-secondary">
          Access Trade Support
        </Link>
      </PageHero>

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Terms of Service', href: '/terms' }]} />
      </div>

      <section className="section-padding pt-6">
        <div className="container-custom max-w-4xl">
          <div className="section-shell p-8 sm:p-10">
            <div className="space-y-10">
              {termsSections.map(section => (
                <section key={section.title}>
                  <h2 className="font-heading text-3xl font-semibold text-neutral-900">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-neutral-700">{section.body}</p>
                </section>
              ))}
              <section>
                <h2 className="font-heading text-3xl font-semibold text-neutral-900">
                  9. Contact
                </h2>
                <p className="mt-4 text-base leading-8 text-neutral-700">
                  If anything in these terms is unclear, please{' '}
                  <Link href={TRADE_SUPPORT_HREF} className="text-primary transition hover:underline">
                    contact LuxAura
                  </Link>{' '}
                  before relying on website information for a project decision.
                </p>
              </section>
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
