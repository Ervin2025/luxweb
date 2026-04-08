import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import FaqSection from '@/components/FaqSection';
import ImageCodeBadge from '@/components/ImageCodeBadge';
import SectionHeading from '@/components/SectionHeading';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { generateFaqSchema } from '@/lib/faq-schema';
import {
  BESPOKE_UPHOLSTERY_FAQ,
  TRADE_PORTAL_ACCESS_HREF,
  TRADE_SUPPORT_HREF,
} from '@/lib/site-data';

const UPHOLSTERED_APPLICATIONS = [
  {
    title: 'Indoor Sofas & Sectionals',
    code: 'LXA-UPH-02',
    description:
      'Custom upholstery directions that carry the textile brief into larger family seating with stronger finish control and more considered room fit.',
    imageSrc: '/images/IMG-J.webp',
    imageAlt: 'Custom indoor sofa upholstery in a premium residential living room',
  },
  {
    title: 'Bench & Banquette Seating',
    code: 'LXA-UPH-03',
    description:
      'Built-in seating and tailored bench formats aligned to comfort, proportion and the broader architectural scheme.',
    imageSrc: '/images/IMG-K.webp',
    imageAlt: 'Tailored bench and banquette upholstery with refined room integration',
  },
  {
    title: 'Loose Covers & Protective Layers',
    code: 'LXA-UPH-04',
    description:
      'Protective upholstery pathways that preserve finish quality while making day-to-day maintenance easier for active homes.',
    imageSrc: '/images/IMG-A.webp',
    imageAlt: 'Loose-cover seating and soft furnishing layer in a calm interior',
  },
  {
    title: 'Outdoor Cushions & Alfresco Seating',
    code: 'LXA-UPH-05',
    description:
      'Textile-led seating directions for covered terraces, pool-adjacent lounges and outdoor furniture programs that need stronger resilience.',
    imageSrc: '/images/IMG-Hero.webp',
    imageAlt: 'Indoor-outdoor seating setting suited to alfresco upholstery planning',
  },
  {
    title: 'Ottomans & Soft Forms',
    code: 'LXA-UPH-06',
    description:
      'Ottomans, upholstered accessories and softer forms that complete the furnishing language with greater material continuity.',
    imageSrc: '/images/luxaura/upholstery-pillows.webp',
    imageAlt: 'Ottoman and accent upholstery detail with premium textile styling',
  },
  {
    title: 'Cushions & Decorative Layers',
    code: 'LXA-UPH-07',
    description:
      'Decorative cushions, bolster forms and softer layers that help upholstery schemes feel resolved rather than isolated.',
    imageSrc: '/images/IMG-D.webp',
    imageAlt: 'Decorative cushions and accent upholstery layers in a premium room',
  },
] as const;

const OUTDOOR_SUPPORT_POINTS = [
  {
    title: 'Australian exposure awareness',
    description:
      'Material selection considers stronger sun, heat build-up and the visual wear that can come with exterior use.',
  },
  {
    title: 'Moisture and maintenance logic',
    description:
      'Outdoor applications are guided toward more practical finishes, cleaner upkeep and more durable day-to-day performance.',
  },
  {
    title: 'Premium alfresco direction',
    description:
      'Outdoor furniture and cushions are treated as part of the overall project language, not as a secondary afterthought.',
  },
] as const;

const SUNBRELLA_FEATURES = [
  'UV-resistant performance for harsher exterior exposure',
  'Outdoor durability and colour stability over longer use cycles',
  'Suitable for seating, cushions and alfresco upholstery briefs',
] as const;

const PET_FRIENDLY_FEATURES = [
  {
    title: 'High-rub seating resilience',
    description:
      'Selected upholstery directions are better suited to sofas, dining chairs and family-use seating that sees heavier daily wear.',
  },
  {
    title: 'Water-repellent and easier-clean options',
    description:
      'Where relevant, LuxAura can guide briefs toward more forgiving textile choices with simpler maintenance pathways.',
  },
  {
    title: 'Stronger stain resistance',
    description:
      'Performance-led directions help interiors remain practical without stepping away from a more elevated finish.',
  },
  {
    title: 'More hygienic material performance',
    description:
      'Selected constructions can support cleaner everyday living through anti-bacterial or easier-maintenance textile behaviour where applicable.',
  },
  {
    title: 'OEKO-TEX Standard 100 directions',
    description:
      'Where specified, LuxAura can support OEKO-TEX Standard 100 certified upholstery options suited to more considered family environments.',
  },
] as const;

const PERFORMANCE_BRAND_POINTS = [
  'Hard-wearing textile options suited to sofas, dining chairs and family-use seating',
  'Water-cleanable or easier-maintenance directions for more forgiving everyday use',
  'Stronger stain resistance for high-use interiors and pet-friendly households',
  'OEKO-TEX Standard 100 certified options where specified',
  'A practical fit for pet-friendly Australian homes that still expect finish quality',
] as const;

const LOOKBOOKS = [
  {
    title: 'Download Indoor Furniture Styles PDF',
    description:
      'Review sofas, ottomans, bench seating and indoor upholstery directions before moving further into the brief.',
    href: '/downloads/luxaura-indoor-furniture-styles.pdf',
  },
  {
    title: 'Download Outdoor Furniture Styles PDF',
    description:
      'Review alfresco seating, outdoor cushion and exterior upholstery directions suited to higher-performance use.',
    href: '/downloads/luxaura-outdoor-furniture-styles.pdf',
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
    images: ['/images/luxaura/upholstery-pillows.webp'],
  },
};

function DownloadIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function DownloadGuideCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <article className="section-shell p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow">Style Guide PDF</p>
          <h3 className="mt-4 font-heading text-3xl font-semibold text-neutral-900">{title}</h3>
        </div>
        <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-primary/12 bg-neutral-50 text-primary">
          <DownloadIcon />
        </span>
      </div>
      <p className="mt-5 text-sm leading-7 text-neutral-700 sm:text-base">{description}</p>
      <a href={href} download className="btn-secondary mt-7">
        Download PDF
      </a>
    </article>
  );
}

export default function CushionsSoftFurnishingsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Bespoke Upholstery', url: '/cushions-soft-furnishings' },
  ]);
  const faqSchema = generateFaqSchema([...BESPOKE_UPHOLSTERY_FAQ]);

  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/luxaura/upholstery-pillows.webp"
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
              Indoor and outdoor upholstery guided by stronger textile intelligence
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/86 sm:text-xl sm:leading-8">
              LuxAura supports bespoke upholstery across sofas, cushions, bench seating and outdoor
              furniture applications, combining finish quality with performance-led fabric
              selection for residential, hospitality and higher-use Australian interiors.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href={TRADE_SUPPORT_HREF} className="btn-primary">
                Discuss a Project
              </Link>
              <a
                href="#applications"
                className="btn-secondary border-white/25 bg-white/12 text-white hover:bg-white/18 hover:text-white"
              >
                Explore Upholstery Scope
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Bespoke Upholstery', href: '/cushions-soft-furnishings' }]} />
      </div>

      <section id="applications" className="section-padding pt-6">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Applications"
            title="A broader upholstery program for layered residential and project briefs"
            description="LuxAura can move from indoor seating and decorative layers through to exterior cushions and harder-working furniture applications without losing finish quality."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {UPHOLSTERED_APPLICATIONS.map(item => (
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
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,14,13,0.03)_0%,rgba(12,14,13,0.18)_100%)]" />
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
          <div className="grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2.3rem] shadow-[0_28px_90px_rgba(20,24,22,0.12)]">
              <Image
                src="/images/IMG-Hero.webp"
                alt="Indoor-outdoor lounge setting suited to alfresco upholstery planning"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
              <ImageCodeBadge code="LXA-UPH-08" />
            </div>
            <div>
              <SectionHeading
                eyebrow="Outdoor Upholstery"
                title="Outdoor Upholstery for Australian Conditions"
                description="LuxAura supports outdoor seating, cushions and upholstered furniture applications with material directions suited to stronger sun exposure, moisture risk and more demanding day-to-day use."
              />
              <div className="mt-8 grid gap-4">
                {OUTDOOR_SUPPORT_POINTS.map(item => (
                  <article
                    key={item.title}
                    className="rounded-[1.5rem] border border-primary/10 bg-neutral-50 p-5"
                  >
                    <h3 className="font-heading text-2xl font-semibold text-neutral-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-neutral-700 sm:text-base">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2.2rem] bg-[#163228] p-8 shadow-[0_30px_90px_rgba(17,27,24,0.18)] sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="relative aspect-[4/4.2] overflow-hidden rounded-[2rem] border border-white/10">
                <Image
                  src="/images/luxaura/upholstery-pillows.webp"
                  alt="Premium upholstery fabric and cushion detail suited to exterior and indoor soft furnishing use"
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-cover"
                />
                <ImageCodeBadge code="LXA-UPH-09" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,12,11,0.05),rgba(9,12,11,0.3))]" />
              </div>
              <div>
                <SectionHeading
                  eyebrow="Sunbrella"
                  title="Sunbrella for Outdoor Furniture"
                  description="For projects requiring stronger outdoor durability, LuxAura supports furniture applications using Sunbrella performance fabrics selected for UV resilience, colour stability, easier maintenance and long-term exterior use."
                  theme="dark"
                />
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {SUNBRELLA_FEATURES.map(item => (
                    <article
                      key={item}
                      className="rounded-[1.5rem] border border-white/12 bg-white/7 p-5 text-sm leading-7 text-white/78"
                    >
                      {item}
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Pet-Friendly Upholstery"
                title="Pet-Friendly Upholstery for Modern Australian Homes"
                description="LuxAura supports family and pet-conscious interiors with upholstery fabric directions selected for stronger daily resilience without sacrificing finish quality or design value."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {PET_FRIENDLY_FEATURES.map(item => (
                  <article
                    key={item.title}
                    className="section-shell rounded-[1.5rem] border border-primary/10 bg-neutral-50 p-5 shadow-none"
                  >
                    <h3 className="font-heading text-2xl font-semibold text-neutral-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-neutral-700">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/4.5] overflow-hidden rounded-[2.3rem] shadow-[0_28px_90px_rgba(20,24,22,0.12)]">
              <Image
                src="/images/IMG-J.webp"
                alt="Family-friendly sofa upholstery with softer performance-focused textile direction"
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
              <ImageCodeBadge code="LXA-UPH-10" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2.2rem] bg-[#15110d] p-8 shadow-[0_30px_90px_rgba(17,12,8,0.2)] sm:p-10 lg:p-12">
            <SectionHeading
              eyebrow="Performance Brands"
              title="Mobus and FibreGuard: Performance Without Compromise"
              description="LuxAura uses selected Mobus and FibreGuard directions for interior upholstery where resilience, practicality and visual quality need to work together."
              theme="dark"
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {PERFORMANCE_BRAND_POINTS.map(item => (
                <article
                  key={item}
                  className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5 text-sm leading-7 text-white/76"
                >
                  {item}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Downloads"
            title="Download Furniture Style Guides"
            description="LuxAura provides downloadable style references to help clients review indoor and outdoor upholstery directions before moving further into the brief."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {LOOKBOOKS.map(item => (
              <DownloadGuideCard
                key={item.title}
                title={item.title}
                description={item.description}
                href={item.href}
              />
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        items={[...BESPOKE_UPHOLSTERY_FAQ]}
        title="Questions on upholstery, outdoor use and performance direction"
        description="Concise answers on indoor and outdoor scopes, performance fabrics and how LuxAura aligns upholstery with the wider furnishing brief."
      />

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2.2rem] border border-white/65 bg-[linear-gradient(135deg,rgba(197,160,89,0.16),rgba(255,255,255,0.82)_36%,rgba(197,160,89,0.08)_100%)] p-8 shadow-[0_28px_80px_rgba(32,24,12,0.08)] sm:p-10 lg:p-12">
            <div className="max-w-3xl">
              <p className="eyebrow">Final CTA</p>
              <h2 className="mt-4 text-balance font-heading text-4xl font-semibold text-neutral-900 sm:text-5xl">
                Carry indoor and outdoor upholstery into one coherent textile language
              </h2>
              <p className="mt-5 text-pretty text-[15px] leading-7 text-neutral-700 sm:text-lg">
                Bring LuxAura in when upholstery needs to balance comfort, performance, finish
                quality and more intelligent fabric selection across the wider project.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href={TRADE_SUPPORT_HREF} className="btn-primary">
                Discuss a Project
              </Link>
              <Link href={TRADE_PORTAL_ACCESS_HREF} className="btn-secondary">
                Trade Portal Access
              </Link>
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
