import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import ImageCodeBadge from '@/components/ImageCodeBadge';
import SectionHeading from '@/components/SectionHeading';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { getReplacementImageSrc } from '@/lib/image-replacements';
import { TRADE_PORTAL_ACCESS_HREF, TRADE_SUPPORT_HREF } from '@/lib/navigation-data';

const SUPPORT_BLOCKS = [
  {
    title: 'Material Coordination',
    description: 'Aligned sourcing across categories',
    code: 'LXA-PS-02',
    imageSrc: getReplacementImageSrc('LXA-PS-02', '/images/IMG-I.webp'),
    imageAlt: 'Fabric books, hardware planning and furnishing drawing development for a project team',
  },
  {
    title: 'Design Development Support',
    description: 'Drawings and detailing',
    code: 'LXA-PS-03',
    imageSrc: getReplacementImageSrc('LXA-PS-03', '/images/luxaura/upholstery-pillows.webp'),
    imageAlt: 'Layered soft furnishing palette with cushions, drapery and styling direction',
  },
  {
    title: 'Project Execution',
    description: 'Production and delivery',
    code: 'LXA-PS-04',
    imageSrc: getReplacementImageSrc('LXA-PS-04', '/images/IMG-K.webp'),
    imageAlt: 'Builder and developer furnishing coordination in a refined project setting',
  },
] as const;

export const metadata: Metadata = {
  title:
    'Project Support Sydney | Design Development, Procurement & Furnishing Delivery | LuxAura',
  description:
    'LuxAura supports designers, builders, stylists and hospitality projects through design development, soft-furnishing procurement, specification support and delivery coordination in Sydney.',
  keywords: [
    'project support sydney',
    'soft furnishing project support sydney',
    'design development support sydney',
    'curtain specification support sydney',
    'hospitality furnishing support sydney',
    'furnishing procurement sydney',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/project-support`,
  },
  openGraph: {
    title:
      'Project Support Sydney | Design Development, Procurement & Furnishing Delivery | LuxAura',
    description:
      'Design development, soft-furnishing procurement, specification support and delivery coordination for Sydney project teams.',
    url: `${SITE_CONFIG.url}/project-support`,
    images: [getReplacementImageSrc('LXA-PS-01', '/images/IMG-I.webp')],
  },
};

export default function ProjectSupportPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Project Support', url: '/project-support' },
  ]);

  return (
    <div>
      <section className="px-4 pb-24 pt-28 max-[430px]:pb-20 max-[430px]:pt-26 sm:px-6 sm:pb-32 sm:pt-32 lg:px-8 lg:pb-[9.5rem] lg:pt-40">
        <div className="container-custom">
          <div className="grid items-center gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:gap-14">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-primary/70">
                Project Support
              </p>
              <h1 className="mt-4 text-balance font-heading text-[2.75rem] font-semibold leading-[0.98] tracking-[-0.045em] text-[#2C2C2C] max-[430px]:text-[2.4rem] sm:mt-5 sm:text-[4.5rem] sm:leading-[0.94] lg:text-[5.2rem]">
                Project Support That Reduces Workload and Moves Decisions Forward
              </h1>
              <p className="mt-5 max-w-[36rem] text-pretty text-[1rem] leading-[1.72] text-neutral-700 sm:mt-6 sm:text-[1.12rem] sm:leading-[1.8]">
                Sourcing, coordination and execution
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[#ddd4c3] shadow-[0_28px_90px_rgba(26,24,22,0.08)] max-[430px]:rounded-[1.55rem] sm:rounded-[2.4rem]">
              <div className="relative aspect-[16/11] max-[430px]:aspect-[5/4] sm:aspect-[4/3]">
                <Image
                  src={getReplacementImageSrc('LXA-PS-01', '/images/IMG-I.webp')}
                  alt="LuxAura project support scene with fabric books, trims and furnishing development"
                  fill
                  priority
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  className="object-cover"
                />
                <ImageCodeBadge code="LXA-PS-01" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Project Support', href: '/project-support' }]} />
      </div>

      <section className="px-4 pb-24 pt-8 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[9.5rem]">
        <div className="container-custom">
          <SectionHeading eyebrow="Blocks" title="Project support blocks" description="Three support pathways." />
          <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-3">
            {SUPPORT_BLOCKS.map(card => (
              <article key={card.title} className="section-shell overflow-hidden">
                <div className="relative aspect-[4/3] sm:aspect-[16/10]">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 32vw, 100vw"
                    className="object-cover"
                  />
                  <ImageCodeBadge code={card.code} />
                </div>
                <div className="p-5 max-[430px]:p-4 sm:p-8">
                  <h2 className="font-heading text-[2rem] font-semibold leading-tight text-neutral-900 max-[430px]:text-[1.7rem] sm:text-3xl">
                    {card.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[10rem]">
        <div className="container-custom">
          <div className="section-shell p-6 max-[430px]:p-5 sm:p-10 lg:p-12">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-primary/70">
                Final CTA
              </p>
              <h2 className="mt-4 text-balance font-heading text-[2.35rem] font-semibold leading-[1.02] text-[#2C2C2C] max-[430px]:text-[2.1rem] sm:mt-5 sm:text-5xl lg:text-6xl">
                Trade & Project Enquiries
              </h2>
            </div>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href={TRADE_SUPPORT_HREF} className="btn-primary w-full sm:w-auto">
                Project Enquiry
              </Link>
              <Link href={TRADE_PORTAL_ACCESS_HREF} className="btn-secondary w-full sm:w-auto">
                Trade Account
              </Link>
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
