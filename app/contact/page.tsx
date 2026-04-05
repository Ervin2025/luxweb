import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import ContactSection from '@/components/ContactSection';
import PageHero from '@/components/PageHero';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { CONTACT_INFO, SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact LuxAura | Trade Support Desk',
  description:
    'Contact the LuxAura Trade Support Desk for sourcing direction, fabrication support, material questions, project alignment and trade account enquiries.',
  keywords:
    'contact LuxAura, trade support desk Sydney, Chatswood fabric support, project brief support, textile fabrication contact',
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
};

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'Contact', url: '/contact' }]);

  return (
    <div>
      <PageHero
        eyebrow="Trade Support Desk"
        title="Talk to the LuxAura team coordinating the brief"
        description={`Reach LuxAura for sourcing direction, fabrication support, material questions, project alignment or trade account enquiries from ${CONTACT_INFO.address.display}.`}
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
