import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import ContactSection from '@/components/ContactSection';
import PageHero from '@/components/PageHero';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact LuxAura | Trade Fabric Support Sydney',
  description:
    'Contact LuxAura for trade support, sourcing advice and project quoting in Sydney.',
  keywords:
    'contact LuxAura, wholesale fabric Sydney, curtain workroom contact, trade fabric support',
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
};

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'Contact', url: '/contact' }]);

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Talk to the wholesale support desk"
        description="Use LuxAura for sourcing questions, workroom feasibility, quote support or fast WhatsApp contact."
        imageSrc="/images/luxaura/hero-project.webp"
        imageAlt="LuxAura trade support and project collaboration"
      />

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Contact', href: '/contact' }]} />
      </div>

      <ContactSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </div>
  );
}
