import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import PageHero from '@/components/PageHero';
import QuoteForm from '@/components/QuoteForm';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Project Quote | Trade Fabric Brief',
  description:
    'Send a LuxAura project quote request for fabrics, window treatments, upholstery and hardware.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/quote`,
  },
};

export default function QuotePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'Project Quote', url: '/quote' }]);

  return (
    <div>
      <PageHero
        eyebrow="Project Quote"
        title="Add products and fabrication needs to one trade quote"
        description="Send one clear brief covering products, usage, budget and fabrication requirements."
        imageSrc="/images/IMG-I.webp"
        imageAlt="LuxAura project quote reference image"
      />

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Project Quote', href: '/quote' }]} />
      </div>

      <section className="section-padding pt-6">
        <div className="container-custom max-w-5xl">
          <QuoteForm />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </div>
  );
}
