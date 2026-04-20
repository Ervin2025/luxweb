import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AccordionFaq from '@/components/AccordionFaq';
import Breadcrumb from '@/components/Breadcrumb';
import ImageCodeBadge from '@/components/ImageCodeBadge';
import ProjectEnquiryForm from '@/components/ProjectEnquiryForm';
import SectionHeading from '@/components/SectionHeading';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { CONTACT_INFO, SITE_CONFIG } from '@/lib/constants';
import { generateFaqSchema } from '@/lib/faq-schema';
import type { FaqItem } from '@/lib/site-data';
import { PROJECT_BRIEF_HREF, TRADE_PORTAL_ACCESS_HREF } from '@/lib/site-data';

const SUPPORT_CATEGORIES = [
  {
    title: 'Trade Account Access',
    description: 'Pricing access and account setup',
  },
  {
    title: 'Trade Support',
    description: 'Project-led trade coordination',
  },
  {
    title: 'Small-Batch Custom Enquiries',
    description: 'Custom scopes and shorter runs',
  },
] as const;

const TRADE_FAQ: FaqItem[] = [
  {
    question: 'Do you supply fabric by the metre?',
    answer: 'Yes. Most fabrics, trimmings and decorative materials are available by the metre.',
  },
  {
    question: 'Do you provide samples?',
    answer:
      'Samples are available for most materials. Please contact us via email to arrange specific sample requests.',
  },
  {
    question: 'What are your lead times?',
    answer:
      'Lead times vary depending on scope and specification: fabric supply typically 2-4 weeks; standard track systems in Sydney around 1 week; custom production and full project delivery typically 4-8 weeks. Final timelines are confirmed with LuxAura at project stage.',
  },
  {
    question: 'Do you offer full project delivery?',
    answer:
      'Yes. Material supply and full fabrication are available, including curtains, Roman blinds, upholstery and decorative detailing.',
  },
  {
    question: 'Can you produce custom designs?',
    answer:
      'Yes. All products are made to order based on client specifications, drawings or reference images.',
  },
  {
    question: 'Do you support complex detailing and trims?',
    answer:
      'Yes. Advanced fabrication includes layered finishes, trimmings integration and tailored construction.',
  },
  {
    question: 'Do you offer private label or brand production?',
    answer:
      'Yes. OEM and private label production are available, including finished products branded for partners.',
  },
  {
    question: 'What track and hardware options are available?',
    answer:
      'Track systems are available in standard and custom configurations, including manual and motorised solutions, cut to size per project.',
  },
  {
    question: 'What upholstery fillings are available?',
    answer:
      'Cushion inserts can be specified as high-grade fibre compliant with OEKO-TEX Standard 100, duck feather or goose down.',
  },
  {
    question: 'What materials and components do you use?',
    answer:
      'To ensure consistency and durability, LuxAura uses YKK cushion zippers, Coats sewing threads for soft furnishings, and Sunbrella outdoor fabrics for outdoor furniture, cushions and seating applications with a 5-year warranty.',
  },
  {
    question: 'Do you offer performance fabrics?',
    answer:
      'Yes. Selected fabric ranges are designed for residential, high-performance and commercial use, with up to 100,000+ Martindale abrasion resistance on selected ranges and stain-resistant, spill-safe properties where specified.',
  },
  {
    question: 'Can you manufacture from drawings or references?',
    answer:
      'Yes. Production from design drawings, reference images and material briefs is available.',
  },
  {
    question: 'What are your payment terms?',
    answer: 'Full payment is required prior to dispatch.',
  },
  {
    question: 'Do you accept returns?',
    answer:
      'As all items are custom-made, returns are not accepted unless there is a verified manufacturing fault.',
  },
  {
    question: 'What types of projects do you support?',
    answer:
      'Projects include residential interiors, hospitality, retail, developer and larger-scale briefs.',
  },
  {
    question: 'Can LuxAura assist with material selection?',
    answer:
      'Yes. Material direction can be aligned with project requirements, performance needs and design intent.',
  },
] as const;

export const metadata: Metadata = {
  title: 'Contact | Trade Account and Project Enquiry',
  description:
    'Structured access for Trade Account applications and Project Enquiry submissions through the LuxAura contact pathway.',
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
    title: 'Contact | Trade Account and Project Enquiry',
    description:
      'Structured access for Trade Account applications and Project Enquiry submissions.',
    url: `${SITE_CONFIG.url}/contact`,
    images: ['/images/about-hero.webp'],
  },
};

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'Contact', url: '/contact' }]);
  const faqSchema = generateFaqSchema([...TRADE_FAQ]);

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
                Trade Access and Project Enquiries
              </h1>
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
          <SectionHeading
            eyebrow="Contact"
            title="Trade Desk & Project Intake"
            description="Trade account, trade support and custom enquiries."
          />
          <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-3">
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

      <section id="project-enquiry" className="px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[9.5rem]">
        <div className="container-custom">
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:gap-8">
            <div className="mx-auto w-full max-w-4xl lg:mx-0">
              <SectionHeading
                eyebrow="Project Enquiry Form"
                title="Project Enquiry"
                description="Trade accounts and project-led enquiries are prioritised."
              />
              <div className="mt-8 sm:mt-10">
                <ProjectEnquiryForm
                  submitLabel="Project Enquiry"
                  note="Project Enquiry does not require ABN registration."
                />
              </div>
            </div>

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

      <div id="trade-faq">
        <AccordionFaq
          items={[...TRADE_FAQ]}
          title="Trade FAQ"
          description="Key information on lead times, materials, custom production and order terms"
        />
      </div>

      <section className="px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[10rem]">
        <div className="container-custom">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-8">
            <article className="section-shell p-6 max-[430px]:p-5 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-primary/70">
                Final CTA
              </p>
              <h2 className="mt-4 text-balance font-heading text-[2.35rem] font-semibold leading-[1.02] text-[#2C2C2C] max-[430px]:text-[2.1rem] sm:mt-5 sm:text-5xl">
                Trade Access and Project Enquiries
              </h2>
              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link href={PROJECT_BRIEF_HREF} className="btn-primary w-full sm:w-auto">
                  Project Enquiry
                </Link>
                <Link href={TRADE_PORTAL_ACCESS_HREF} className="btn-secondary w-full sm:w-auto">
                  Trade Account
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
