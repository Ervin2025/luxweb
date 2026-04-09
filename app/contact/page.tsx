import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AccordionFaq from '@/components/AccordionFaq';
import Breadcrumb from '@/components/Breadcrumb';
import ImageCodeBadge from '@/components/ImageCodeBadge';
import PartnerValueSection from '@/components/PartnerValueSection';
import ProjectEnquiryForm from '@/components/ProjectEnquiryForm';
import SectionHeading from '@/components/SectionHeading';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { CONTACT_INFO, SITE_CONFIG } from '@/lib/constants';
import { generateFaqSchema } from '@/lib/faq-schema';
import {
  CONTACT_FAQ,
  PROJECT_BRIEF_HREF,
  TRADE_PORTAL_ACCESS_HREF,
} from '@/lib/site-data';

const SUPPORT_CATEGORIES = [
  {
    title: 'Trade Account Access',
    description:
      'Open the LuxAura trade pathway for pricing review, resources and longer-term account support.',
  },
  {
    title: 'Trade Support',
    description:
      'Request direction on sourcing, fabrication, category alignment or the next most practical support step.',
  },
  {
    title: 'Project Brief Submission',
    description:
      'Send a clearer furnishing brief when the scope needs coordination across materials, making, trims and delivery.',
  },
  {
    title: 'Custom / Small-Batch Support',
    description:
      'Use LuxAura where custom development, flexible batch size or more tailored support matters to the outcome.',
  },
  {
    title: 'Retail & Brand Support',
    description:
      'Support for retailers and boutique brands needing stronger decorative resources, customisation and fulfilment flexibility.',
  },
  {
    title: 'Selected Private Projects',
    description:
      'Private residential projects are accepted selectively where scope, alignment and delivery suitability fit the LuxAura model.',
  },
] as const;

export const metadata: Metadata = {
  title: 'Contact | Trade, Project and Custom Support Enquiries',
  description:
    'Structured access for trade accounts, project-led briefs, custom support requests and selected private enquiries through the LuxAura trade desk.',
  keywords: [
    'trade soft furnishings sydney',
    'furnishing supplier sydney',
    'custom curtains and upholstery sydney',
    'soft furnishing trade partner sydney',
    'designer support furnishing sydney',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
  openGraph: {
    title: 'Contact | Trade, Project and Custom Support Enquiries',
    description:
      'Structured access for trade accounts, project-led briefs, custom support requests and selected private enquiries.',
    url: `${SITE_CONFIG.url}/contact`,
    images: ['/images/about-hero.webp'],
  },
};

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'Contact', url: '/contact' }]);
  const faqSchema = generateFaqSchema([...CONTACT_FAQ]);

  return (
    <div>
      <section className="px-4 pb-24 pt-28 max-[430px]:pb-20 max-[430px]:pt-26 sm:px-6 sm:pb-28 sm:pt-32 lg:px-8 lg:pb-[9rem] lg:pt-40">
        <div className="container-custom">
          <div className="grid items-center gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:gap-14">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-primary/70">
                Contact
              </p>
              <h1 className="mt-4 text-balance font-heading text-[2.75rem] font-semibold leading-[0.98] tracking-[-0.045em] text-[#2C2C2C] max-[430px]:text-[2.4rem] sm:mt-5 sm:text-[4.5rem] sm:leading-[0.94] lg:text-[5.2rem]">
                Trade, Project and Custom Support Enquiries
              </h1>
              <p className="mt-5 max-w-[36rem] text-pretty text-[1rem] leading-[1.72] text-neutral-700 sm:mt-6 sm:text-[1.12rem] sm:leading-[1.8]">
                Structured access for trade accounts, project-led briefs, custom support requests
                and selected private enquiries.
              </p>
              <p className="mt-4 max-w-[38rem] text-pretty text-[14px] leading-7 text-neutral-600 sm:mt-5 sm:text-[1rem] sm:leading-8">
                LuxAura supports designers, builders, retailers, stylists, hospitality operators
                and furnishing-led clients through a more coordinated enquiry and project intake
                pathway.
              </p>

              <div className="mt-8 flex flex-col gap-3.5 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link href={TRADE_PORTAL_ACCESS_HREF} className="btn-primary w-full sm:w-auto">
                  Trade Account Access
                </Link>
                <Link href={PROJECT_BRIEF_HREF} className="btn-secondary w-full sm:w-auto">
                  Submit a Brief
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[#ddd4c3] shadow-[0_28px_90px_rgba(26,24,22,0.08)] max-[430px]:rounded-[1.55rem] sm:rounded-[2.4rem]">
              <div className="relative aspect-[16/11] max-[430px]:aspect-[5/4] sm:aspect-[4/3]">
                <Image
                  src="/images/about-hero.webp"
                  alt="Material refinement, curtain detail and project atmosphere for the LuxAura trade desk"
                  fill
                  priority
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  className="object-cover"
                />
                <ImageCodeBadge code="LXA-CON-01" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Contact', href: '/contact' }]} />
      </div>

      <section id="trade-desk" className="px-4 pb-24 pt-8 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[9.5rem]">
        <div className="container-custom">
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-8">
            <article className="section-shell p-6 max-[430px]:p-5 sm:p-10">
              <SectionHeading
                eyebrow="Trade Desk & Project Intake"
                title="Trade Desk & Project Intake"
                description="LuxAura’s trade desk is structured for enquiries that need more than a simple price check."
              />
              <p className="mt-5 text-pretty text-[14px] leading-7 text-neutral-700 sm:mt-6 sm:text-[1rem] sm:leading-8">
                Use this pathway for trade account access, furnishing coordination, project
                clarification, category alignment and the next practical step for a more
                controlled brief.
              </p>
              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link href={TRADE_PORTAL_ACCESS_HREF} className="btn-primary w-full sm:w-auto">
                  Trade Account Access
                </Link>
              </div>
            </article>

            <article className="overflow-hidden rounded-[2rem] bg-[#14221c] p-6 text-white shadow-[0_28px_90px_rgba(20,25,21,0.18)] max-[430px]:rounded-[1.55rem] max-[430px]:p-5 sm:rounded-[2.2rem] sm:p-10">
              <h2 className="font-heading text-[2.35rem] font-semibold leading-[1.02] text-white max-[430px]:text-[2.05rem] sm:text-4xl">
                Contact Details
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-white sm:text-base">
                <p>
                  <span className="font-semibold text-white">Email:</span> {CONTACT_INFO.email}
                </p>
                <p>
                  <span className="font-semibold text-white">Phone:</span> {CONTACT_INFO.phone}
                </p>
                <p>
                  <span className="font-semibold text-white">Location:</span>{' '}
                  {CONTACT_INFO.address.display}
                </p>
                <p>
                  <span className="font-semibold text-white">Availability:</span>{' '}
                  {CONTACT_INFO.hours}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[9.5rem]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Support Categories"
            title="How LuxAura Can Support"
            description="This contact pathway is designed for trade accounts, project-led support, custom work and selected private briefs rather than retail-style enquiries."
          />
          <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
            {SUPPORT_CATEGORIES.map(item => (
              <article key={item.title} className="section-shell p-5 max-[430px]:p-4 sm:p-7">
                <h2 className="font-heading text-[1.8rem] font-semibold leading-tight text-neutral-900 max-[430px]:text-[1.6rem] sm:text-3xl">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PartnerValueSection className="pb-0" />

      <section id="project-enquiry" className="px-4 pb-24 pt-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[9.5rem]">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl">
            <SectionHeading
              eyebrow="Project Enquiry Form"
              title="Send the Brief to the Right LuxAura Team"
              description="Use this intake form for trade support, project-led enquiries, custom development, retail and brand support or selected private furnishing scopes."
              align="center"
            />
            <div className="mt-8 sm:mt-10">
              <ProjectEnquiryForm
                submitLabel="Submit Brief"
                note="Trade accounts and project-led enquiries are prioritised. Private residential projects are reviewed selectively based on scope, alignment and delivery suitability."
              />
            </div>
          </div>
        </div>
      </section>

      <AccordionFaq
        items={[...CONTACT_FAQ]}
        title="Contact and project enquiry questions"
        description="Concise answers on client fit, enquiry timing and what helps LuxAura support the brief more effectively."
      />

      <section className="px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[10rem]">
        <div className="container-custom">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-8">
            <article className="section-shell p-6 max-[430px]:p-5 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-primary/70">
                Closing Reassurance
              </p>
              <h2 className="mt-4 text-balance font-heading text-[2.35rem] font-semibold leading-[1.02] text-[#2C2C2C] max-[430px]:text-[2.1rem] sm:mt-5 sm:text-5xl">
                Structured for projects that need more clarity before commitment
              </h2>
              <p className="mt-5 max-w-3xl text-pretty text-[14px] leading-7 text-neutral-700 sm:mt-6 sm:text-[1rem] sm:leading-8">
                LuxAura helps shape clearer furnishing pathways before sourcing, fabrication and
                site coordination become fragmented or costly to correct.
              </p>
              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link href={PROJECT_BRIEF_HREF} className="btn-primary w-full sm:w-auto">
                  Submit a Brief
                </Link>
              </div>
            </article>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[#ddd4c3] shadow-[0_24px_80px_rgba(26,24,22,0.08)] max-[430px]:rounded-[1.55rem] sm:rounded-[2.2rem]">
              <div className="relative aspect-[4/3] max-[430px]:aspect-[5/4] sm:aspect-[16/10]">
                <Image
                  src="/images/luxaura/beach-sheer.webp"
                  alt="Quiet soft-furnishing detail with layered material calm and clean finish"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
                <ImageCodeBadge code="LXA-CON-02" />
              </div>
            </div>
          </div>
        </div>
      </section>

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
