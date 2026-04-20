import type { Metadata } from 'next';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import ImageCodeBadge from '@/components/ImageCodeBadge';
import SectionHeading from '@/components/SectionHeading';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { getReplacementImageSrc } from '@/lib/image-replacements';

const UPHOLSTERED_APPLICATIONS = [
  {
    title: 'Indoor Sofas & Sectionals',
    code: 'LXA-UPH-02',
    description: 'Custom seating with stronger finish control.',
    imageSrc: getReplacementImageSrc('LXA-UPH-02', '/images/IMG-J.webp'),
    imageAlt: 'Custom indoor sofa upholstery in a premium residential living room',
  },
  {
    title: 'Bench & Banquette Seating',
    code: 'LXA-UPH-03',
    description: 'Tailored bench seating with cleaner room fit.',
    imageSrc: getReplacementImageSrc('LXA-UPH-03', '/images/IMG-K.webp'),
    imageAlt: 'Tailored bench and banquette upholstery with refined room integration',
  },
  {
    title: 'Loose Covers & Protective Layers',
    code: 'LXA-UPH-04',
    description: 'Protective layers with easier day-to-day maintenance.',
    imageSrc: getReplacementImageSrc('LXA-UPH-04', '/images/IMG-A.webp'),
    imageAlt: 'Loose-cover seating and soft furnishing layer in a calm interior',
  },
  {
    title: 'Outdoor Cushions & Alfresco Seating',
    code: 'LXA-UPH-05',
    description: 'Outdoor seating directions with stronger resilience.',
    imageSrc: getReplacementImageSrc('LXA-UPH-05', '/images/IMG-Hero.webp'),
    imageAlt: 'Indoor-outdoor seating setting suited to alfresco upholstery planning',
  },
  {
    title: 'Ottomans & Soft Forms',
    code: 'LXA-UPH-06',
    description: 'Soft forms that extend the furnishing language.',
    imageSrc: getReplacementImageSrc('LXA-UPH-06', '/images/luxaura/upholstery-pillows.webp'),
    imageAlt: 'Ottoman and accent upholstery detail with premium textile styling',
  },
  {
    title: 'Cushions & Decorative Layers',
    code: 'LXA-UPH-07',
    description: 'Decorative layers that resolve the upholstery scheme.',
    imageSrc: getReplacementImageSrc('LXA-UPH-07', '/images/IMG-D.webp'),
    imageAlt: 'Decorative cushions and accent upholstery layers in a premium room',
  },
] as const;

const OUTDOOR_SUPPORT_POINTS = [
  {
    title: 'Australian exposure awareness',
    description: 'Materials selected for sun, heat and exterior wear.',
  },
  {
    title: 'Moisture and maintenance logic',
    description: 'Outdoor finishes chosen for easier upkeep.',
  },
  {
    title: 'Premium alfresco direction',
    description: 'Outdoor pieces stay aligned with the wider scheme.',
  },
] as const;

const INDOOR_SUPPORT_POINTS = [
  {
    title: 'Residential seating with stronger finish control',
    description: 'Indoor upholstery with comfort, proportion and finish control.',
  },
  {
    title: 'Project-led flexibility',
    description: 'Indoor upholstery suited to residential and project settings.',
  },
  {
    title: 'Better room-level coordination',
    description: 'Selections stay aligned with the wider furnishing language.',
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
    description: 'Selected fabrics suit heavier daily wear.',
  },
  {
    title: 'Water-repellent and easier-clean options',
    description: 'More forgiving textile choices for simpler maintenance.',
  },
  {
    title: 'Stronger stain resistance',
    description: 'Practical stain resistance without losing finish quality.',
  },
  {
    title: 'More hygienic material performance',
    description: 'Selected textiles support cleaner everyday performance.',
  },
  {
    title: 'OEKO-TEX Standard 100 directions',
    description: 'Certified options where softer family use is needed.',
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
    title: 'Indoor Upholstery Styles PDF',
    description:
      'Review sofas, ottomans, bench seating and indoor upholstery directions before moving further into the brief.',
    href: '/downloads/luxaura-indoor-furniture-styles.pdf',
  },
  {
    title: 'Outdoor Upholstery Styles PDF',
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
    images: [getReplacementImageSrc('LXA-UPH-01', '/images/luxaura/upholstery-pillows.webp')],
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
}: {
  title: string;
  description: string;
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
    </article>
  );
}

export default function CushionsSoftFurnishingsPage() {
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

        <div className="container-custom relative flex min-h-[72svh] items-end pb-12 pt-20 sm:min-h-[78svh] sm:pb-16 sm:pt-24 lg:min-h-[84svh] lg:pb-20 lg:pt-32">
          <div className="max-w-4xl text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ead7a8]">
              Bespoke Upholstery
            </p>
            <h1 className="mt-5 max-w-3xl text-balance font-heading text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Versatile Upholstery for Indoor, Outdoor and Performance-Led Living
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/86 sm:text-xl sm:leading-8">
              Upholstery for indoor, outdoor and performance-led living.
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
            eyebrow="Broad Upholstery Style Capability"
            title="A broader upholstery style capability across seating, soft forms and layered furnishing pieces"
            description="Upholstery across seating, soft forms and layered pieces."
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
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Indoor Upholstery"
                title="Indoor upholstery for residential and project-led interiors"
                description="Refined upholstered forms for homes and project interiors."
              />
              <div className="mt-8 grid gap-4">
                {INDOOR_SUPPORT_POINTS.map(item => (
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
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2.3rem] shadow-[0_28px_90px_rgba(20,24,22,0.12)]">
              <Image
                src={getReplacementImageSrc('LXA-UPH-14', '/images/IMG-J.webp')}
                alt="Indoor upholstery direction for sofas, chairs and project-led seating"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
              <ImageCodeBadge code="LXA-UPH-14" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2.3rem] shadow-[0_28px_90px_rgba(20,24,22,0.12)]">
              <Image
                src={getReplacementImageSrc('LXA-UPH-08', '/images/IMG-Hero.webp')}
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
                description="Outdoor seating and cushions for Australian conditions."
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
                  src={getReplacementImageSrc('LXA-UPH-09', '/images/luxaura/upholstery-pillows.webp')}
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
                  description="Sunbrella directions for durable outdoor furniture."
                  theme="dark"
                />
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {SUNBRELLA_FEATURES.map(item => (
                    <article
                      key={item}
                      className="rounded-[1.5rem] border border-white/12 bg-white/7 p-5 text-sm leading-7 text-white"
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
                description="Pet-friendly upholstery with stronger daily resilience."
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
                src={getReplacementImageSrc('LXA-UPH-10', '/images/IMG-J.webp')}
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
              description="Performance brands balancing resilience, practicality and visual quality."
              theme="dark"
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {PERFORMANCE_BRAND_POINTS.map(item => (
                <article
                  key={item}
                  className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5 text-sm leading-7 text-white"
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
            title="Downloadable Style Resources"
            description="Indoor and outdoor upholstery references."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {LOOKBOOKS.map(item => (
              <DownloadGuideCard
                key={item.title}
                title={item.title}
                description={item.description}
              />
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
                Carry indoor and outdoor upholstery into one coherent textile language
              </h2>
              <p className="mt-5 text-pretty text-[15px] leading-7 text-neutral-700 sm:text-lg">
                Upholstery balanced across comfort, performance and finish quality.
              </p>
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
