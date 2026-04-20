import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import ImageCodeBadge from '@/components/ImageCodeBadge';
import SectionHeading from '@/components/SectionHeading';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { getReplacementImageSrc } from '@/lib/image-replacements';
import { TRADE_PORTAL_ACCESS_HREF, TRADE_SUPPORT_HREF } from '@/lib/site-data';

const UPHOLSTERY_BLOCKS = [
  {
    title: 'Indoor Upholstery',
    description: 'Tailored furniture for residential spaces',
    code: 'LXA-UPH-14',
    imageSrc: getReplacementImageSrc('LXA-UPH-14', '/images/IMG-J.webp'),
    imageAlt: 'Indoor upholstery direction for sofas, chairs and project-led seating',
  },
  {
    title: 'Outdoor Upholstery',
    description: 'Weather-resistant materials and construction',
    code: 'LXA-UPH-08',
    imageSrc: getReplacementImageSrc('LXA-UPH-08', '/images/IMG-Hero.webp'),
    imageAlt: 'Indoor-outdoor lounge setting suited to alfresco upholstery planning',
  },
  {
    title: 'Pet-Friendly Upholstery',
    description: 'High-durability and easy-care fabrics',
    code: 'LXA-UPH-10',
    imageSrc: getReplacementImageSrc('LXA-UPH-10', '/images/IMG-J.webp'),
    imageAlt: 'Family-friendly sofa upholstery with softer performance-focused textile direction',
  },
] as const;

export const metadata: Metadata = {
  title: 'Bespoke Upholstery | Indoor, Outdoor and Performance Textile Support',
  description:
    'LuxAura supports bespoke upholstery across indoor seating, outdoor furniture, pet-friendly family interiors and performance-led textile directions including Sunbrella, Mobus and FibreGuard.',
  keywords: [
    'bespoke upholstery Sydney',
    'outdoor upholstery Australia',
    'Sunbrella outdoor furniture',
    'pet-friendly upholstery fabrics',
    'Mobus FibreGuard upholstery',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/cushions-soft-furnishings`,
  },
  openGraph: {
    title: 'Bespoke Upholstery | Indoor, Outdoor and Performance Textile Support',
    description:
      'Custom upholstery support across indoor seating, outdoor applications and performance-led textile direction for more demanding briefs.',
    url: `${SITE_CONFIG.url}/cushions-soft-furnishings`,
    images: [getReplacementImageSrc('LXA-UPH-01', '/images/luxaura/upholstery-pillows.webp')],
  },
};

export default function UpholsteryPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Bespoke Upholstery', url: '/cushions-soft-furnishings' },
  ]);

  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <Image
          src={getReplacementImageSrc('LXA-UPH-01', '/images/luxaura/upholstery-pillows.webp')}
          alt="Bespoke upholstery, cushions and performance textile layering"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <ImageCodeBadge code="LXA-UPH-01" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,16,15,0.76)_0%,rgba(13,16,15,0.58)_36%,rgba(13,16,15,0.16)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,16,15,0.08)_0%,rgba(13,16,15,0.34)_100%)]" />

        <div className="container-custom relative flex min-h-[84svh] items-end pb-16 pt-36 sm:pb-20 sm:pt-40">
          <div className="max-w-4xl text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ead7a8]">
              Bespoke Upholstery
            </p>
            <h1 className="mt-5 max-w-3xl text-balance font-heading text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Versatile Upholstery for Indoor, Outdoor and Performance-Led Living
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/86 sm:text-xl sm:leading-8">
              Durable, design-led upholstery for real use
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Bespoke Upholstery', href: '/cushions-soft-furnishings' }]} />
      </div>

      <section id="applications" className="section-padding pt-6">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Blocks"
            title="Core upholstery blocks"
            description="Three practical upholstery directions."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {UPHOLSTERY_BLOCKS.map(item => (
              <article key={item.title} className="group section-shell overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden border-b border-primary/10">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 1023px) 100vw, 33vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <ImageCodeBadge code={item.code} />
                </div>
                <div className="p-7">
                  <h2 className="font-heading text-3xl font-semibold text-neutral-900">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2.2rem] border border-white/65 bg-[linear-gradient(135deg,rgba(197,160,89,0.16),rgba(255,255,255,0.82)_36%,rgba(197,160,89,0.08)_100%)] p-8 shadow-[0_28px_80px_rgba(32,24,12,0.08)] sm:p-10 lg:p-12">
            <div className="max-w-3xl">
              <p className="eyebrow">Final CTA</p>
              <h2 className="mt-4 text-balance font-heading text-4xl font-semibold text-neutral-900 sm:text-5xl">
                Trade & Project Enquiries
              </h2>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href={TRADE_PORTAL_ACCESS_HREF} className="btn-primary">
                Trade Account
              </Link>
              <Link href={TRADE_SUPPORT_HREF} className="btn-secondary">
                Project Enquiry
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
