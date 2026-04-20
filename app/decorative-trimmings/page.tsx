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

const TRIMMING_CATEGORIES = [
  {
    title: 'Braids & Borders',
    description: 'Structured decorative lines',
    code: 'LXA-DTR-02',
    imageSrc: getReplacementImageSrc('LXA-DTR-02', '/images/IMG-B.webp'),
    imageAlt: 'Decorative braid and trim detail applied to premium drapery',
  },
  {
    title: 'Fringes & Tassels',
    description: 'Layered texture and movement',
    code: 'LXA-DTR-04',
    imageSrc: getReplacementImageSrc('LXA-DTR-04', '/images/IMG-C.webp'),
    imageAlt: 'Tassel and fringe styling detail within a refined interior scheme',
  },
  {
    title: 'Custom Trimmings',
    description: 'Tailored detailing solutions',
    code: 'LXA-DTR-09',
    imageSrc: getReplacementImageSrc('LXA-DTR-09', '/images/luxaura/upholstery-pillows.webp'),
    imageAlt: 'Decorative trim detailing across custom upholstery and cushion edges',
  },
] as const;

export const metadata: Metadata = {
  title: 'Trimmings | Designer-Led Detail and Finishing Resource',
  description:
    'LuxAura offers a broader decorative trimming resource for designers, spanning braid, borders, tassels, fringes and upholstery-applied detail that can move into finished execution.',
  keywords: [
    'decorative trimmings Sydney',
    'passementerie Australia',
    'designer curtain trims',
    'upholstery trims Sydney',
    'decorative braid and fringe supplier',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/decorative-trimmings`,
  },
  openGraph: {
    title: 'Trimmings | Designer-Led Detail and Finishing Resource',
    description:
      'A broader and more current trimming library for drapery, upholstery and refined soft-furnishing outcomes.',
    url: `${SITE_CONFIG.url}/decorative-trimmings`,
    images: [getReplacementImageSrc('LXA-DTR-01', '/images/IMG-B.webp')],
  },
};

export default function DecorativeTrimmingsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Trimmings', url: '/decorative-trimmings' },
  ]);

  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <Image
          src={getReplacementImageSrc('LXA-DTR-01', '/images/IMG-B.webp')}
          alt="Decorative trimming close-up applied to refined drapery"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,14,13,0.76)_0%,rgba(12,14,13,0.56)_36%,rgba(12,14,13,0.16)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,14,13,0.08)_0%,rgba(12,14,13,0.3)_100%)]" />
        <ImageCodeBadge code="LXA-DTR-01" className="right-5 top-28 sm:top-32" />

        <div className="container-custom relative flex min-h-[84svh] items-end pb-16 pt-36 sm:pb-20 sm:pt-40">
          <div className="max-w-4xl text-white" data-reveal="text">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#ead7a8]">
              Trimmings
            </p>
            <h1 className="mt-5 max-w-4xl text-balance font-heading text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Thousands of Decorative Trimmings for Detail and Customisation
            </h1>
            <p className="mt-6 max-w-3xl text-pretty text-base leading-7 text-white/84 sm:text-xl sm:leading-8">
              From metre-cut to finished applications
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Trimmings', href: '/decorative-trimmings' }]} />
      </div>

      <section className="px-4 pb-28 pt-8 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[9rem]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Category"
            title="Trimming categories"
            description="Three decorative directions."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {TRIMMING_CATEGORIES.map(item => (
              <article key={item.title} className="section-shell overflow-hidden">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 32vw, 100vw"
                    className="object-cover"
                  />
                  <ImageCodeBadge code={item.code} />
                </div>
                <div className="p-7 sm:p-8">
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

      <section className="px-4 pb-28 pt-6 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[10rem]">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2.4rem] bg-[#14211c] px-6 py-12 text-white shadow-[0_32px_100px_rgba(20,25,21,0.18)] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#e0cb9f]">
                Final CTA
              </p>
              <h2 className="mt-5 text-balance font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Trade & Project Enquiries
              </h2>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
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
