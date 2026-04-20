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

const CATEGORY_ITEMS = [
  {
    title: 'French Linen & Linen Blends',
    description: 'Natural texture with refined drape',
    code: 'LXA-COL-06',
    imageSrc: getReplacementImageSrc('LXA-COL-06', '/images/luxaura/beach-sheer.webp'),
    imageAlt: 'French linen and linen-blend drapery in a calm coastal interior',
  },
  {
    title: 'Outdoor & Performance Fabrics',
    description: 'UV-resistant and durable',
    code: 'LXA-COL-07',
    imageSrc: getReplacementImageSrc('LXA-COL-07', '/images/IMG-H.webp'),
    imageAlt: 'Performance fabric used across outdoor-adjacent furnishing applications',
  },
  {
    title: 'Commercial Value Directions',
    description: 'Balanced solutions for scalable use',
    code: 'LXA-COL-08',
    imageSrc: getReplacementImageSrc('LXA-COL-08', '/images/IMG-I.webp'),
    imageAlt: 'Commercial furnishing material direction with performance-ready window treatment',
  },
] as const;

const COLLECTION_ITEMS = [
  {
    title: 'LuxAura Signature Series',
    description: 'Balanced in-house material direction',
    code: 'LXA-COL-03',
    imageSrc: getReplacementImageSrc('LXA-COL-03', '/images/luxaura/upholstery-pillows.webp'),
    imageAlt: 'LuxAura signature fabric textures and upholstery detailing',
  },
  {
    title: 'British Decorative Textiles',
    description: 'Pattern-rich layered fabrics',
    code: 'LXA-COL-04',
    imageSrc: getReplacementImageSrc('LXA-COL-04', '/images/IMG-C.webp'),
    imageAlt: 'British decorative drapery with layered softness and statement detailing',
  },
  {
    title: 'Pet-Friendly Upholstery Fabrics',
    description: 'Durable and forgiving for everyday use',
    code: 'LXA-COL-05',
    imageSrc: getReplacementImageSrc('LXA-COL-05', '/images/luxaura/hero-project.webp'),
    imageAlt: 'Pet-friendly upholstery textiles in a refined interior setting',
  },
] as const;

export const metadata: Metadata = {
  title: 'Fabric & Fabrication | Global Collections and Finished Textile Outcomes',
  description:
    'Global textile sourcing paired with specialist fabrication capability for finished soft-furnishing outcomes in Sydney.',
  keywords:
    'Fabric and fabrication Sydney, premium textile sourcing, custom curtains upholstery cushions Sydney, Sunbrella Australia, FibreGuard supplier Australia',
  alternates: {
    canonical: `${SITE_CONFIG.url}/collections`,
  },
  openGraph: {
    title: 'Fabric & Fabrication | Global Collections and Finished Textile Outcomes',
    description:
      'Global textile sourcing paired with specialist fabrication capability for finished soft-furnishing outcomes in Sydney.',
    url: `${SITE_CONFIG.url}/collections`,
    images: [getReplacementImageSrc('LXA-COL-01', '/images/luxaura/beach-sheer.webp')],
  },
};

export default function CollectionsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Fabric & Fabrication', url: '/collections' },
  ]);

  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <Image
          src={getReplacementImageSrc('LXA-COL-01', '/images/luxaura/beach-sheer.webp')}
          alt="LuxAura fabric sourcing and fabrication direction with drape, upholstery texture and premium detail"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <ImageCodeBadge code="LXA-COL-01" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,16,15,0.72)_0%,rgba(13,16,15,0.56)_36%,rgba(13,16,15,0.16)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,16,15,0.12)_0%,rgba(13,16,15,0.34)_100%)]" />

        <div className="container-custom relative flex min-h-[84svh] items-end pb-16 pt-36 sm:pb-20 sm:pt-40">
          <div className="max-w-4xl text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ead7a8]">
              Fabric & Fabrication
            </p>
            <h1 className="mt-5 max-w-3xl text-balance font-heading text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Material Direction for Design and Delivery
            </h1>
            <p className="mt-6 max-w-3xl text-pretty text-base leading-7 text-white/86 sm:text-xl sm:leading-8">
              Global sourcing and fabrication flexibility
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Fabric & Fabrication', href: '/collections' }]} />
      </div>

      <section className="section-padding pt-6">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Category"
            title="Material Direction Across Multiple Applications"
            description="Sheers, drapery, upholstery, Roman blinds and decorative use."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {CATEGORY_ITEMS.map(item => (
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
          <SectionHeading
            eyebrow="Collection"
            title="Collections"
            description="Three focused material directions."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {COLLECTION_ITEMS.map(item => (
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
          <div className="overflow-hidden rounded-[2.3rem] border border-white/65 bg-[linear-gradient(135deg,rgba(197,160,89,0.16),rgba(255,255,255,0.84)_36%,rgba(197,160,89,0.08)_100%)] p-8 shadow-[0_28px_80px_rgba(32,24,12,0.08)] sm:p-10 lg:p-12">
            <div className="max-w-3xl">
              <p className="eyebrow">Final CTA</p>
              <h2 className="mt-4 text-balance font-heading text-4xl font-semibold text-neutral-900 sm:text-5xl">
                Trade & Project Enquiries
              </h2>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href={TRADE_SUPPORT_HREF} className="btn-primary">
                Project Enquiry
              </Link>
              <Link href={TRADE_PORTAL_ACCESS_HREF} className="btn-secondary">
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
