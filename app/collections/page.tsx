import type { Metadata } from 'next';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import FaqSection from '@/components/FaqSection';
import ImageCodeBadge from '@/components/ImageCodeBadge';
import SectionHeading from '@/components/SectionHeading';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { generateFaqSchema } from '@/lib/faq-schema';
import { getReplacementImageSrc } from '@/lib/image-replacements';
import { generateServiceSchema } from '@/lib/page-schema';
import { FABRIC_AND_FABRICATION_FAQ } from '@/lib/site-data';

const MATERIAL_DIRECTIONS = [
  {
    title: 'LuxAura Signature Series',
    code: 'LXA-COL-03',
    description: 'Balanced texture across curtains, upholstery and decorative use.',
    imageSrc: getReplacementImageSrc('LXA-COL-03', '/images/luxaura/upholstery-pillows.webp'),
    imageAlt: 'LuxAura signature fabric textures and upholstery detailing',
  },
  {
    title: 'British Decorative Textiles',
    code: 'LXA-COL-04',
    description: 'Pattern-rich fabrics with softness and decorative character.',
    imageSrc: getReplacementImageSrc('LXA-COL-04', '/images/IMG-C.webp'),
    imageAlt: 'British decorative drapery with layered softness and statement detailing',
  },
  {
    title: 'Pet-Friendly Upholstery Fabrics',
    code: 'LXA-COL-05',
    description: 'Hard-wearing upholstery with easier everyday performance.',
    imageSrc: getReplacementImageSrc('LXA-COL-05', '/images/luxaura/hero-project.webp'),
    imageAlt: 'Pet-friendly upholstery textiles in a refined interior setting',
  },
  {
    title: 'French Linen & Linen Blends',
    code: 'LXA-COL-06',
    description: 'Natural texture and refined drape.',
    imageSrc: getReplacementImageSrc('LXA-COL-06', '/images/luxaura/beach-sheer.webp'),
    imageAlt: 'French linen and linen-blend drapery in a calm coastal interior',
  },
  {
    title: 'Outdoor & Performance Fabrics',
    code: 'LXA-COL-07',
    description: 'Performance textiles for outdoor and exposed use.',
    imageSrc: getReplacementImageSrc('LXA-COL-07', '/images/IMG-H.webp'),
    imageAlt: 'Performance fabric used across outdoor-adjacent furnishing applications',
  },
  {
    title: 'Commercial Value Directions',
    code: 'LXA-COL-08',
    description: 'Commercial material directions with controlled value.',
    imageSrc: getReplacementImageSrc('LXA-COL-08', '/images/IMG-I.webp'),
    imageAlt: 'Commercial furnishing material direction with performance-ready window treatment',
  },
] as const;

const MADE_APPLICATIONS = [
  {
    title: 'Curtains & Sheers',
    code: 'LXA-COL-09',
    description: 'Site-ready window layers with cleaner headings.',
    imageSrc: getReplacementImageSrc('LXA-COL-09', '/images/luxaura/hero-project.webp'),
    imageAlt: 'Curtains and sheers made from LuxAura-sourced fabrics',
  },
  {
    title: 'Bespoke Cushions',
    code: 'LXA-COL-10',
    description: 'Custom cushions that continue the textile story.',
    imageSrc: getReplacementImageSrc('LXA-COL-10', '/images/IMG-D.webp'),
    imageAlt: 'Bespoke cushions with refined textile detailing',
  },
  {
    title: 'Upholstery & Slipcovers',
    code: 'LXA-COL-11',
    description: 'Tailored upholstery and slipcovers with stronger material control.',
    imageSrc: getReplacementImageSrc('LXA-COL-11', '/images/IMG-G.webp'),
    imageAlt: 'Upholstery and slipcover application with layered drapery',
  },
  {
    title: 'Ottomans & Bench Seats',
    code: 'LXA-COL-12',
    description: 'Structured soft forms with material continuity.',
    imageSrc: getReplacementImageSrc('LXA-COL-12', '/images/IMG-J.webp'),
    imageAlt: 'Ottoman and bench seat applications in a premium interior',
  },
  {
    title: 'Table Linens & Soft Dining Pieces',
    code: 'LXA-COL-13',
    description: 'Soft dining pieces for residential and hospitality settings.',
    imageSrc: getReplacementImageSrc('LXA-COL-13', '/images/IMG-K.webp'),
    imageAlt: 'Soft dining and table linen direction for premium living spaces',
  },
  {
    title: 'Specialty Textile Pieces',
    code: 'LXA-COL-14',
    description: 'Specialty textile pieces beyond standard furnishing categories.',
    imageSrc: getReplacementImageSrc('LXA-COL-14', '/images/IMG-Hero.webp'),
    imageAlt: 'Specialty textile applications with clean, controlled fabrication lines',
  },
] as const;

const WHY_THIS_MATTERS = [
  {
    title: 'Material Guidance',
    description: 'Selections consider application, behaviour and project use.',
  },
  {
    title: 'Fabrication Readiness',
    description: 'Textiles are chosen with fabrication in mind.',
  },
  {
    title: 'Coordinated Outcome',
    description: 'One textile story can move across multiple categories.',
  },
] as const;

const PERFORMANCE_DIRECTIONS = [
  {
    title: 'Durability & Abrasion Resistance',
    description: 'Performance fabrics suit higher-use seating and interiors.',
  },
  {
    title: 'Stain and Maintenance Practicality',
    description: 'Stain-resistant fabrics support easier everyday maintenance.',
  },
  {
    title: 'Pet-Friendly and Family-Aware',
    description: 'Pet-friendly ranges suit family interiors and daily wear.',
  },
  {
    title: 'Hospitality and Project Suitability',
    description: 'Suitable for hospitality and higher-use project settings.',
  },
] as const;

const SIGNATURE_LINEN_VERSATILITY = [
  'Weight range from lightweight 170gsm sheers to robust 850gsm upholstery and drapery weights.',
  'A broad palette of solids and stripe directions suited to classic and contemporary interiors.',
  'Suitable for curtains, Roman blinds, upholstery and softer decorative furnishing applications.',
  'Strong fit for both quiet-luxury residential work and larger furnishing-led project briefs.',
] as const;

const LINEN_FINISHING_POINTS = [
  'Garment-washed linen for a softer, more relaxed hand feel.',
  'Stone-washed linen for richer texture and a more lived-in material character.',
  'Improved dimensional stability for cleaner fabrication outcomes.',
  'A tactile finish that keeps natural linen elegance commercially useful in real interiors.',
] as const;

const LINEN_WORKFLOW = [
  {
    title: 'Selection',
    description: 'Choose from premium linens for real furnishing use.',
  },
  {
    title: 'Engineering',
    description: 'Workshop capability supports sheers, drapery and Roman blinds.',
  },
  {
    title: 'Creation',
    description: 'Linen carries cleanly from selection into finished outcomes.',
  },
] as const;

const LINEN_TRADE_EDGE = [
  {
    title: 'Unrivalled Price Competitiveness',
    description: 'Direct sourcing supports stronger linen value.',
  },
  {
    title: 'B2B Scale & Customisation',
    description: 'Supports boutique and larger-scale project briefs.',
  },
] as const;

const SUNBRELLA_SOLUTIONS = [
  'UV resistance and colour stability for stronger long-term outdoor use.',
  'Fade resistance suited to exposed terraces, balconies and hospitality settings.',
  'Water resistance and easier maintenance for practical day-to-day upkeep.',
  'Suitable for cushions, seating and outdoor upholstery across residential and commercial applications.',
  'Well suited to Australian outdoor conditions where durability and visual calm both matter.',
] as const;

export const metadata: Metadata = {
  title: 'Fabric Supplier Sydney | Textile Sourcing & Fabrication | LuxAura',
  description:
    'Sydney fabric supplier for premium textile sourcing, linen, upholstery fabrics, curtains, sheers and finished soft-furnishing fabrication.',
  keywords:
    'Fabric and fabrication Sydney, premium textile sourcing, custom curtains upholstery cushions Sydney, Sunbrella Australia, FibreGuard supplier Australia',
  alternates: {
    canonical: `${SITE_CONFIG.url}/collections`,
  },
  openGraph: {
    title: 'Fabric Supplier Sydney | Textile Sourcing & Fabrication | LuxAura',
    description:
      'Sydney fabric sourcing, linen, upholstery fabrics and finished soft-furnishing fabrication in one coordinated pathway.',
    url: `${SITE_CONFIG.url}/collections`,
    images: [getReplacementImageSrc('LXA-COL-01', '/images/luxaura/beach-sheer.webp')],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fabric Supplier Sydney | Textile Sourcing & Fabrication | LuxAura',
    description:
      'Sydney fabric sourcing, linen, upholstery fabrics and finished soft-furnishing fabrication in one coordinated pathway.',
    images: [getReplacementImageSrc('LXA-COL-01', '/images/luxaura/beach-sheer.webp')],
  },
};

export default function CollectionsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Fabric & Fabrication', url: '/collections' },
  ]);
  const faqSchema = generateFaqSchema(FABRIC_AND_FABRICATION_FAQ);
  const serviceSchema = generateServiceSchema({
    name: 'Fabric Sourcing and Fabrication',
    description:
      'Sydney fabric sourcing, linen, upholstery fabrics, curtains, sheers and finished soft-furnishing fabrication.',
    path: '/collections',
    serviceType: 'Fabric sourcing and soft-furnishing fabrication',
    image: getReplacementImageSrc('LXA-COL-01', '/images/luxaura/beach-sheer.webp'),
  });

  return (
    <div>
      <section className="relative isolate h-[72svh] overflow-hidden sm:h-[78svh] lg:h-[82svh]">
        <Image
          src={getReplacementImageSrc('LXA-COL-01', '/images/luxaura/beach-sheer.webp')}
          alt="LuxAura fabric sourcing and fabrication direction with drape, upholstery texture and premium detail"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <ImageCodeBadge code="LXA-COL-01" />
      </section>

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Fabric & Fabrication', href: '/collections' }]} />
      </div>

      <section className="section-padding pt-6">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Material Direction Across Multiple Applications"
                title="Material direction across sheers, drapery, upholstery, Roman blinds and decorative applications"
                description="Textiles aligned across multiple furnishing applications."
              />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2.2rem] shadow-[0_28px_90px_rgba(20,24,22,0.12)]">
              <Image
                src={getReplacementImageSrc('LXA-COL-02', '/images/IMG-H.webp')}
                alt="Fabric carried from selection into upholstery and drapery applications"
                fill
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="object-cover"
              />
              <ImageCodeBadge code="LXA-COL-02" />
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {MATERIAL_DIRECTIONS.map(item => (
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
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,14,13,0.05)_0%,rgba(12,14,13,0.24)_100%)]" />
                </div>
                <div className="p-7">
                  <h2 className="font-heading text-3xl font-semibold text-neutral-900">
                    {item.title}
                  </h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="signature-linen" className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Our Signature Linen"
                title="French Elegance, Technical Versatility and Trade-Level Value"
                description="Signature linen with natural texture and broader versatility."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {SIGNATURE_LINEN_VERSATILITY.map(item => (
                  <article
                    key={item}
                    className="rounded-[1.5rem] border border-primary/10 bg-neutral-50 p-5"
                  >
                    <p className="text-sm leading-7 text-neutral-700 sm:text-base">{item}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2.2rem] shadow-[0_28px_90px_rgba(20,24,22,0.12)]">
                <Image
                  src={getReplacementImageSrc('LXA-COL-15', '/images/luxaura/beach-sheer.webp')}
                  alt="Draped linen sheer with warm natural light and quiet editorial composition"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <ImageCodeBadge code="LXA-COL-15" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem] shadow-[0_22px_70px_rgba(20,24,22,0.1)]">
                  <Image
                    src={getReplacementImageSrc('LXA-COL-16', '/images/luxaura/roman-blind-lounge.webp')}
                    alt="Linen-led Roman blind application in a premium residential interior"
                    fill
                    sizes="(min-width: 1024px) 24vw, 100vw"
                    className="object-cover"
                  />
                  <ImageCodeBadge code="LXA-COL-16" />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem] shadow-[0_22px_70px_rgba(20,24,22,0.1)]">
                  <Image
                    src={getReplacementImageSrc('LXA-COL-17', '/images/luxaura/upholstery-pillows.webp')}
                    alt="Tactile linen-forward upholstery and cushion texture detail"
                    fill
                    sizes="(min-width: 1024px) 24vw, 100vw"
                    className="object-cover"
                  />
                  <ImageCodeBadge code="LXA-COL-17" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <article className="section-shell p-7 sm:p-8 lg:p-10">
              <p className="eyebrow">Specialized Linen Finishing</p>
              <h2 className="mt-4 text-balance font-heading text-4xl font-semibold text-neutral-900 sm:text-[2.8rem]">
                Elevated finishing that changes how linen feels and performs
              </h2>
              <p className="mt-5 text-sm leading-7 text-neutral-700 sm:text-base">
                Finishing shapes how linen feels, falls and performs.
              </p>
              <div className="mt-8 grid gap-4">
                {LINEN_FINISHING_POINTS.map(item => (
                  <article
                    key={item}
                    className="rounded-[1.4rem] border border-primary/10 bg-[#f8f3e8] px-5 py-4"
                  >
                    <p className="text-sm leading-7 text-neutral-700 sm:text-base">{item}</p>
                  </article>
                ))}
              </div>
            </article>

            <article className="overflow-hidden rounded-[2.2rem] bg-[#163228] p-7 text-white shadow-[0_30px_90px_rgba(17,27,24,0.18)] sm:p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ead7a8]">
                From Fibre to Finished Product
              </p>
              <h2 className="mt-4 text-balance font-heading text-4xl font-semibold text-white sm:text-[2.8rem]">
                Linen becomes more valuable when selection and making stay connected
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/78 sm:text-base">
                Selection and making stay connected through one workflow.
              </p>
              <div className="mt-8 grid gap-4">
                {LINEN_WORKFLOW.map(item => (
                  <article
                    key={item.title}
                    className="rounded-[1.5rem] border border-white/12 bg-white/7 p-5"
                  >
                    <h3 className="font-heading text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white sm:text-base">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-8 border-t border-white/12 pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ead7a8]">
                  The LuxAura Trade Edge
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {LINEN_TRADE_EDGE.map(item => (
                    <article
                      key={item.title}
                      className="rounded-[1.5rem] border border-white/12 bg-white/7 p-5"
                    >
                      <h3 className="font-heading text-2xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-white sm:text-base">
                        {item.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2.2rem] shadow-[0_28px_90px_rgba(20,24,22,0.12)]">
              <Image
                src={getReplacementImageSrc('LXA-COL-18', '/images/luxaura/hero-project.webp')}
                alt="Performance-aware textile direction for hospitality and higher-use furnishing applications"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
              <ImageCodeBadge code="LXA-COL-18" />
            </div>
            <div>
              <SectionHeading
                eyebrow="Performance Fabrics"
                title="Performance Fabrics for Real Living and Project Use"
                description="Performance fabrics for durability, maintenance and daily use."
              />
              <div className="mt-8 grid gap-4">
                {PERFORMANCE_DIRECTIONS.map(item => (
                  <article
                    key={item.title}
                    className="rounded-[1.5rem] border border-primary/10 bg-neutral-50 p-5"
                  >
                    <h2 className="font-heading text-2xl font-semibold text-neutral-900">
                      {item.title}
                    </h2>
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
          <div className="grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2.3rem] shadow-[0_28px_90px_rgba(20,24,22,0.12)]">
              <Image
                src={getReplacementImageSrc('LXA-COL-19', '/images/IMG-Hero.webp')}
                alt="Outdoor seating and cushion setting representing Sunbrella-led exterior fabric solutions"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
              <ImageCodeBadge code="LXA-COL-19" />
            </div>
            <div>
              <SectionHeading
                eyebrow="Sunbrella Outdoor Fabric Solutions"
                title="Outdoor fabric solutions for cushions, seating and exposed project conditions"
                description="Sunbrella directions for cushions, seating and exposed conditions."
              />
              <div className="mt-8 grid gap-4">
                {SUNBRELLA_SOLUTIONS.map(item => (
                  <article
                    key={item}
                    className="rounded-[1.5rem] border border-primary/10 bg-neutral-50 p-5"
                  >
                    <p className="text-sm leading-7 text-neutral-700 sm:text-base">{item}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Flexible Fabrication Capability"
            title="Flexible fabrication capability for custom, small-batch and project-led outcomes"
            description="Fabrication across curtains, upholstery and softer custom pieces."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {MADE_APPLICATIONS.map(item => (
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
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,14,13,0.05)_0%,rgba(12,14,13,0.28)_100%)]" />
                </div>
                <div className="p-7">
                  <h2 className="font-heading text-3xl font-semibold text-neutral-900">
                    {item.title}
                  </h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2.2rem] bg-[#163228] p-8 shadow-[0_30px_90px_rgba(17,27,24,0.18)] sm:p-10 lg:p-12">
            <SectionHeading
              eyebrow="From Selection to Fabrication Readiness"
              title="Making control is what turns a good fabric into a finished result"
              description="The commercial advantage comes from reducing mismatch between selection and execution so the textile direction stays practical, buildable and coordinated."
              theme="dark"
            />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {WHY_THIS_MATTERS.map(item => (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/12 bg-white/7 p-5"
                >
                  <h2 className="font-heading text-3xl font-semibold text-white">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-white">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        items={FABRIC_AND_FABRICATION_FAQ}
        title="Fabric sourcing and fabrication FAQ"
        description="Answers to the practical questions clients ask before selecting fabrics, aligning specifications and moving into finished soft-furnishing production."
      />

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2.3rem] border border-white/65 bg-[linear-gradient(135deg,rgba(197,160,89,0.16),rgba(255,255,255,0.84)_36%,rgba(197,160,89,0.08)_100%)] p-8 shadow-[0_28px_80px_rgba(32,24,12,0.08)] sm:p-10 lg:p-12">
            <div className="max-w-3xl">
              <p className="eyebrow">Final CTA</p>
              <h2 className="mt-4 text-balance font-heading text-4xl font-semibold text-neutral-900 sm:text-5xl">
                Start with the fabric. Build the outcome properly.
              </h2>
              <p className="mt-5 text-pretty text-[15px] leading-7 text-neutral-700 sm:text-lg">
                Textile selection carried cleanly into a finished furnishing result.
              </p>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </div>
  );
}
