import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import PageHero from '@/components/PageHero';
import QuoteForm from '@/components/QuoteForm';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Project Brief | Soft-Furnishing Project Intake',
  description:
    'Send a LuxAura project brief covering sourcing, fabrication, upholstery, hardware and coordinated soft-furnishing delivery.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/quote`,
  },
};

export default function QuotePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'Project Brief', url: '/quote' }]);

  return (
    <div>
      <PageHero
        eyebrow="Project Brief"
        title="Send the project into one coordinated LuxAura pathway"
        description="Use this page when the brief needs sourcing, fabrication, upholstery, hardware and detailing considered together from the beginning."
        imageSrc="/images/IMG-I.webp"
        imageAlt="LuxAura project brief intake reference image"
      />

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Project Brief', href: '/quote' }]} />
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
