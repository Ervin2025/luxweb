import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AccordionFaq from '@/components/AccordionFaq';
import Breadcrumb from '@/components/Breadcrumb';
import ImageCodeBadge from '@/components/ImageCodeBadge';
import SectionHeading from '@/components/SectionHeading';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { generateFaqSchema } from '@/lib/faq-schema';
import {
  DECORATIVE_TRIMMINGS_FAQ,
  PROJECT_BRIEF_HREF,
  TRADE_PORTAL_ACCESS_HREF,
  TRADE_SUPPORT_HREF,
} from '@/lib/site-data';

const VALUE_CARDS = [
  {
    marker: '01',
    title: 'Broader Decorative Range',
    description: 'More options across braid, border, fringe, tassel and couture-inspired finishing detail.',
  },
  {
    marker: '02',
    title: 'Latest Collection Access',
    description: 'A more current trimming direction for layered, design-led interiors that need detail without visual clutter.',
  },
  {
    marker: '03',
    title: 'Creative Design Flexibility',
    description: 'Supports more original detailing across drapery, cushions, upholstery and custom soft furnishings.',
  },
  {
    marker: '04',
    title: 'Real Project Application',
    description: 'Not just decorative inspiration, but trimming choices that can be carried through to finished production.',
  },
] as const;

const LATEST_COLLECTION_IMAGES = [
  {
    title: 'Trim close-up',
    code: 'LXA-DTR-02',
    imageSrc: '/images/IMG-B.webp',
    imageAlt: 'Decorative braid and trim detail applied to premium drapery',
    className: 'sm:col-span-2 lg:row-span-2 aspect-[16/10] lg:aspect-[4/5]',
  },
  {
    title: 'Border detail',
    code: 'LXA-DTR-03',
    imageSrc: '/images/IMG-D.webp',
    imageAlt: 'Decorative border trim and edge detailing in a premium soft furnishing scheme',
    className: 'aspect-[4/3]',
  },
  {
    title: 'Tassel expression',
    code: 'LXA-DTR-04',
    imageSrc: '/images/IMG-C.webp',
    imageAlt: 'Tassel and fringe styling detail within a refined interior scheme',
    className: 'aspect-[4/3]',
  },
  {
    title: 'Upholstery finishing',
    code: 'LXA-DTR-05',
    imageSrc: '/images/luxaura/upholstery-pillows.webp',
    imageAlt: 'Piping and finishing detail across bespoke cushions and upholstery',
    className: 'aspect-[4/3]',
  },
  {
    title: 'Tailored trim application',
    code: 'LXA-DTR-06',
    imageSrc: '/images/IMG-H.webp',
    imageAlt: 'Tailored trimming detail applied across a composed furnishing scheme',
    className: 'aspect-[4/3]',
  },
  {
    title: 'Soft detail close-up',
    code: 'LXA-DTR-07',
    imageSrc: '/images/IMG-J.webp',
    imageAlt: 'Soft furnishing texture and trim detail at close range',
    className: 'aspect-[4/3]',
  },
] as const;

const APPLICATION_BLOCKS = [
  {
    title: 'On Drapery',
    code: 'LXA-DTR-08',
    description:
      'Leading edges, decorative borders, formal hems and statement banding that sharpen line and give curtains greater presence.',
    imageSrc: '/images/IMG-B.webp',
    imageAlt: 'Decorative trim and braid detail along a drapery leading edge',
  },
  {
    title: 'On Upholstery',
    code: 'LXA-DTR-09',
    description:
      'Chair skirts, ottoman detailing, arm framing and tailored seam accents that give upholstered forms more character and finish.',
    imageSrc: '/images/luxaura/upholstery-pillows.webp',
    imageAlt: 'Decorative trim detailing across custom upholstery and cushion edges',
  },
  {
    title: 'On Cushions & Bedding',
    code: 'LXA-DTR-10',
    description:
      'Soft layered detail that carries colour, texture and finish through the room without breaking the wider textile story.',
    imageSrc: '/images/IMG-D.webp',
    imageAlt: 'Decorative cushion detailing with braided and piped edges',
  },
  {
    title: 'On Feature Pieces',
    code: 'LXA-DTR-11',
    description:
      'The final layer for interiors that need one more measure of individuality, softness and decorative confidence.',
    imageSrc: '/images/IMG-C.webp',
    imageAlt: 'Feature furnishing detail with tassel and decorative edge application',
  },
] as const;

const DEVELOPMENT_POINTS = [
  {
    title: 'Concept pairing',
    description:
      'Decorative trims can be aligned to fabric character, room tone and the intended level of statement before production begins.',
  },
  {
    title: 'Fabrication carry-through',
    description:
      'Selections are guided toward applications that can be executed properly across curtains, blinds, cushions and upholstery.',
  },
  {
    title: 'Project-ready finishing',
    description:
      'The decorative layer is resolved with the same focus on detail, timing and coordination as the wider soft-furnishing brief.',
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
    images: ['/images/IMG-B.webp'],
  },
};

function GalleryImage({
  imageSrc,
  imageAlt,
  code,
  className,
}: {
  imageSrc: string;
  imageAlt: string;
  code?: string;
  className?: string;
}) {
  return (
    <div
      data-reveal="image"
      className={`relative overflow-hidden rounded-[2rem] border border-white/70 bg-[#ddd4c3] shadow-[0_24px_80px_rgba(26,24,22,0.08)] ${className ?? 'aspect-[4/3]'}`}
    >
      <Image src={imageSrc} alt={imageAlt} fill sizes="(min-width: 1024px) 36vw, 100vw" className="object-cover" />
      {code ? <ImageCodeBadge code={code} /> : null}
    </div>
  );
}

export default function DecorativeTrimmingsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Trimmings', url: '/decorative-trimmings' },
  ]);
  const faqSchema = generateFaqSchema([...DECORATIVE_TRIMMINGS_FAQ]);

  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/IMG-B.webp"
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
              Trimmings for More Resolved Interior Schemes
            </h1>
            <p className="mt-6 max-w-3xl text-pretty text-base leading-7 text-white/84 sm:text-xl sm:leading-8">
              A broader and more current trimming resource for designers seeking stronger decorative
              flexibility, richer detail and more complete soft furnishing outcomes.
            </p>
            <p className="mt-4 max-w-3xl text-pretty text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
              From latest braid and border directions to tassels, fringes and upholstery-applied
              detailing, LuxAura helps transform decorative ideas into specification-ready,
              project-deliverable results.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href={PROJECT_BRIEF_HREF} className="btn-primary">
                Explore Decorative Directions
              </Link>
              <Link
                href={TRADE_SUPPORT_HREF}
                className="btn-secondary border-white/25 bg-white/12 text-white hover:bg-white/18 hover:text-white"
              >
                Curate a Trimming Palette
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Trimmings', href: '/decorative-trimmings' }]} />
      </div>

      <section className="px-4 pb-28 pt-8 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[9rem]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Why Designers Use LuxAura Trimmings"
            title="A decorative resource that gives furnishing schemes more depth and completion"
            description="This is not a secondary accessory layer. It is the finishing language that helps a room feel more tailored, more resolved and more distinctly designed."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {VALUE_CARDS.map((card, index) => (
              <article
                key={card.title}
                data-reveal="card"
                data-reveal-delay={String((index % 4) + 1)}
                className="section-shell p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/12 bg-[#f4ede1] font-heading text-lg font-semibold text-primary">
                  {card.marker}
                </div>
                <h2 className="mt-5 font-heading text-3xl font-semibold text-neutral-900">
                  {card.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-28 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[9rem]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Latest Collection"
            title="Latest Decorative Directions for Contemporary and Classic Interiors"
            description="LuxAura’s trimming resource is curated to support both quiet luxury and more expressive detailing, allowing designers to build softer, richer and more resolved furnishing schemes."
          />

          <div className="mt-12 grid auto-rows-fr gap-4 lg:grid-cols-3">
            {LATEST_COLLECTION_IMAGES.map(image => (
              <GalleryImage
                key={image.title}
                imageSrc={image.imageSrc}
                imageAlt={image.imageAlt}
                code={image.code}
                className={image.className}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-28 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[9rem]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Application"
            title="Where Trimmings Add Value"
            description="Decorative detailing matters most when it moves beyond the sample board and begins shaping how the room is actually finished."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {APPLICATION_BLOCKS.map((block, index) => (
              <article
                key={block.title}
                data-reveal="card"
                data-reveal-delay={String((index % 4) + 1)}
                className="section-shell overflow-hidden"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={block.imageSrc}
                    alt={block.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                  />
                  <ImageCodeBadge code={block.code} />
                </div>
                <div className="p-7 sm:p-8">
                  <h2 className="font-heading text-3xl font-semibold text-neutral-900">
                    {block.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                    {block.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-28 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[9rem]">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <GalleryImage
              imageSrc="/images/IMG-H.webp"
              imageAlt="Decorative concept and trim direction carried into a finished furnishing outcome"
              code="LXA-DTR-12"
              className="aspect-[16/10]"
            />

            <div className="max-w-xl lg:pl-6">
              <SectionHeading
                eyebrow="Creative Development"
                title="From Decorative Concept to Finished Execution"
                description="LuxAura helps bridge the gap between decorative concept and finished execution, allowing trimming selections to move beyond inspiration boards and into fully realised furnishing outcomes."
              />
              <p className="mt-6 text-sm leading-7 text-neutral-700 sm:text-base">
                The value is not only decorative access. It is the ability to keep trims within a
                wider project pathway so the chosen detail can be fabricated properly, coordinated
                earlier and delivered with greater confidence.
              </p>

              <div className="mt-8 space-y-4">
                {DEVELOPMENT_POINTS.map((point, index) => (
                  <article
                    key={point.title}
                    data-reveal="card"
                    data-reveal-delay={String((index % 3) + 1)}
                    className="rounded-[1.4rem] border border-primary/10 bg-white/60 px-5 py-5"
                  >
                    <h3 className="font-heading text-2xl font-semibold text-neutral-900">
                      {point.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-neutral-700 sm:text-base">
                      {point.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AccordionFaq
        eyebrow="Trimming Questions"
        title="Questions on decorative range, application and production carry-through"
        description="A few of the questions designers usually ask before decorative trimming decisions are locked into the scheme."
        items={[...DECORATIVE_TRIMMINGS_FAQ]}
      />

      <section className="px-4 pb-28 pt-6 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[10rem]">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2.4rem] bg-[#14211c] px-6 py-12 text-white shadow-[0_32px_100px_rgba(20,25,21,0.18)] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#e0cb9f]">
                Final CTA
              </p>
              <h2 className="mt-5 text-balance font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                When the decorative layer matters, the finishing partner matters too
              </h2>
              <p className="mt-6 max-w-3xl text-pretty text-sm leading-7 text-white/74 sm:text-lg sm:leading-8">
                Whether the brief needs quiet braid detailing, stronger border definition or a more
                expressive trim language, LuxAura helps move decorative intent into a finished soft
                furnishing result.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link href={PROJECT_BRIEF_HREF} className="btn-primary">
                Submit a Project Brief
              </Link>
              <Link
                href={TRADE_PORTAL_ACCESS_HREF}
                className="btn-secondary border-white/15 bg-white/10 text-white hover:border-white hover:bg-white hover:text-primary"
              >
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
