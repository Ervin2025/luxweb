import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import PageHero from '@/components/PageHero';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { CONTACT_INFO, SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy | Luxaura',
  description:
    'Learn how Luxaura collects, uses and protects personal and business information submitted through its trade website.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/privacy`,
  },
};

const sections = [
  {
    title: '1. What this policy covers',
    body: 'This policy explains how Luxaura handles personal and business information collected through this website, including trade applications, quote requests and contact enquiries.',
  },
  {
    title: '2. Information we may collect',
    body: 'Depending on the enquiry, we may collect names, company details, ABN information, email addresses, phone numbers, project notes and product interests.',
  },
  {
    title: '3. How information is collected',
    body: 'Information is usually collected directly when you submit a form, email us, call us, contact us on WhatsApp or otherwise request support.',
  },
  {
    title: '4. Why we collect it',
    body: 'We use submitted information to respond to enquiries, review trade access, prepare quotes, recommend suitable collections and coordinate follow-up.',
  },
  {
    title: '5. Disclosure and service providers',
    body: 'Luxaura may share information with trusted service providers who help operate the website, process forms or support communication. We do not sell your information.',
  },
  {
    title: '6. Storage and security',
    body: 'We take reasonable steps to protect information from misuse, loss and unauthorised access. No online system is risk free, but we aim to handle enquiry data responsibly.',
  },
  {
    title: '7. Cookies and analytics',
    body: 'Like most websites, Luxaura may use cookies, logs or similar technical data to understand site usage and maintain performance.',
  },
  {
    title: '8. Access and correction',
    body: 'If you want to access or correct the information we hold about you, contact Luxaura using the details below.',
  },
];

export default function PrivacyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'Privacy Policy', url: '/privacy' }]);

  return (
    <div>
      <PageHero
        eyebrow="Privacy Policy"
        title="How Luxaura handles trade, quote and project enquiry data"
        description="How submitted business and contact details are used to support Luxaura trade and project workflows."
        imageSrc="/images/luxaura/beach-sheer.webp"
        imageAlt="Luxaura privacy policy"
      />

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Privacy Policy', href: '/privacy' }]} />
      </div>

      <section className="section-padding pt-6">
        <div className="container-custom max-w-4xl">
          <div className="section-shell p-8 sm:p-10">
            <p className="text-sm leading-7 text-neutral-600">
              Effective date: March 25, 2026
            </p>
            <div className="mt-8 space-y-10">
              {sections.map(section => (
                <section key={section.title}>
                  <h2 className="font-heading text-3xl font-semibold text-neutral-900">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-neutral-700">{section.body}</p>
                </section>
              ))}
              <section>
                <h2 className="font-heading text-3xl font-semibold text-neutral-900">
                  9. Contact Luxaura
                </h2>
                <div className="mt-4 space-y-3 text-base leading-8 text-neutral-700">
                  <p>{CONTACT_INFO.address.city}, {CONTACT_INFO.address.region}, Australia</p>
                  <p>
                    Phone:{' '}
                    <a href="tel:+61450871699" className="text-primary transition hover:underline">
                      {CONTACT_INFO.phone}
                    </a>
                  </p>
                  <p>
                    Email:{' '}
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-primary transition hover:underline"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </p>
                </div>
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
