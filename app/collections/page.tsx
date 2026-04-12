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
import { REQUEST_CUSTOM_SUPPORT_HREF, TRADE_PORTAL_ACCESS_HREF } from '@/lib/navigation-data';
import { FABRIC_AND_FABRICATION_FAQ } from '@/lib/site-data';

const MATERIAL_DIRECTIONS = [
  {
    title: 'LuxAura Signature Series',
    code: 'LXA-COL-03',
    description:
      'A balanced in-house direction combining practical versatility with refined texture, suitable across curtains, upholstery and decorative applications.',
    imageSrc: '/images/luxaura/upholstery-pillows.webp',
    imageAlt: 'LuxAura signature fabric textures and upholstery detailing',
  },
  {
    title: 'British Decorative Textiles',
    code: 'LXA-COL-04',
    description:
      'Pattern, colour and layered decorative expression for projects requiring character, softness and visual richness, including PT and other British directions.',
    imageSrc: '/images/IMG-C.webp',
    imageAlt: 'British decorative drapery with layered softness and statement detailing',
  },
  {
    title: 'Pet-Friendly Upholstery Fabrics',
    code: 'LXA-COL-05',
    description:
      'Hard-wearing textile directions from collections such as Mobus and FibreGuard for more forgiving everyday use without sacrificing design quality.',
    imageSrc: '/images/luxaura/hero-project.webp',
    imageAlt: 'Pet-friendly upholstery textiles in a refined interior setting',
  },
  {
    title: 'French Linen & Linen Blends',
    code: 'LXA-COL-06',
    description:
      'Relaxed texture, breathable elegance and softer drape for elevated residential and boutique interior settings.',
    imageSrc: '/images/luxaura/beach-sheer.webp',
    imageAlt: 'French linen and linen-blend drapery in a calm coastal interior',
  },
  {
    title: 'Outdoor & Performance Fabrics',
    code: 'LXA-COL-07',
    description:
      'Textiles selected for stronger UV resilience, durability and outdoor or semi-exposed furnishing use, including Sunbrella.',
    imageSrc: '/images/IMG-H.webp',
    imageAlt: 'Performance fabric used across outdoor-adjacent furnishing applications',
  },
  {
    title: 'Commercial Value Directions',
    code: 'LXA-COL-08',
    description:
      'Dependable material solutions for broader rollouts, staged projects and furnishing briefs that require pricing discipline without visual compromise.',
    imageSrc: '/images/IMG-I.webp',
    imageAlt: 'Commercial furnishing material direction with performance-ready window treatment',
  },
] as const;

const MADE_APPLICATIONS = [
  {
    title: 'Curtains & Sheers',
    code: 'LXA-COL-09',
    description:
      'Fabric developed into site-ready window layers with cleaner headings, stronger fabric behaviour and controlled finish.',
    imageSrc: '/images/luxaura/hero-project.webp',
    imageAlt: 'Curtains and sheers made from LuxAura-sourced fabrics',
  },
  {
    title: 'Bespoke Cushions',
    code: 'LXA-COL-10',
    description:
      'Custom cushions, bolsters and accent pieces that continue the textile story across the room with greater coherence.',
    imageSrc: '/images/IMG-D.webp',
    imageAlt: 'Bespoke cushions with refined textile detailing',
  },
  {
    title: 'Upholstery & Slipcovers',
    code: 'LXA-COL-11',
    description:
      'Tailored upholstery, sofa covers and protective layers where material choice and fabrication quality need to work together.',
    imageSrc: '/images/IMG-G.webp',
    imageAlt: 'Upholstery and slipcover application with layered drapery',
  },
  {
    title: 'Ottomans & Bench Seats',
    code: 'LXA-COL-12',
    description:
      'Structured soft-furnishing pieces that connect upholstery, padding and material continuity back into the room.',
    imageSrc: '/images/IMG-J.webp',
    imageAlt: 'Ottoman and bench seat applications in a premium interior',
  },
  {
    title: 'Table Linens & Soft Dining Pieces',
    code: 'LXA-COL-13',
    description:
      'Table runners, tablecloths and dining linen applications for residential styling and boutique hospitality settings.',
    imageSrc: '/images/IMG-K.webp',
    imageAlt: 'Soft dining and table linen direction for premium living spaces',
  },
  {
    title: 'Specialty Textile Pieces',
    code: 'LXA-COL-14',
    description:
      'Material stories extended into smaller textile outcomes where a brief needs more than the standard furnishing categories.',
    imageSrc: '/images/IMG-Hero.webp',
    imageAlt: 'Specialty textile applications with clean, controlled fabrication lines',
  },
] as const;

const WHY_THIS_MATTERS = [
  {
    title: 'Material Guidance',
    description:
      'Selections are made with application, fabric behaviour and project use in mind, not as isolated fabric choices.',
  },
  {
    title: 'Fabrication Readiness',
    description:
      'LuxAura considers how a textile will actually be cut, sewn, lined, trimmed or upholstered before it is specified.',
  },
  {
    title: 'Coordinated Outcome',
    description:
      'One textile story can move across window treatments, upholstery and soft accessories without losing control in production.',
  },
] as const;

const PERFORMANCE_DIRECTIONS = [
  {
    title: 'Durability & Abrasion Resistance',
    description:
      'Selected performance fabrics are better suited to higher-use upholstery, layered furnishing schemes and project conditions where resilience matters.',
  },
  {
    title: 'Stain and Maintenance Practicality',
    description:
      'Stain-resistant and easier-clean directions help everyday use stay more manageable without forcing the interior into a purely utilitarian look.',
  },
  {
    title: 'Pet-Friendly and Family-Aware',
    description:
      'Collections such as Mobus and FibreGuard help briefs respond more intelligently to pets, children and heavier day-to-day wear.',
  },
  {
    title: 'Hospitality and Project Suitability',
    description:
      'Performance-led directions can support boutique hospitality, short-stay and higher-use residential settings where practicality and finish quality need to coexist.',
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
    description:
      'Choose from a broader range of premium linens sourced through strategic mill partnerships and curated for real furnishing use.',
  },
  {
    title: 'Engineering',
    description:
      'Specialised sewing and workshop capability support the demands of denser linen, softer sheers and more structured Roman blind applications.',
  },
  {
    title: 'Creation',
    description:
      'From tailored Roman blinds to bespoke upholstery, LuxAura helps carry linen from textile selection into a finished furnishing outcome.',
  },
] as const;

const LINEN_TRADE_EDGE = [
  {
    title: 'Unrivalled Price Competitiveness',
    description:
      'Direct supply relationships and an efficient sourcing structure help LuxAura offer premium French linen with exceptional trade value.',
  },
  {
    title: 'B2B Scale & Customisation',
    description:
      'LuxAura supports both boutique residential projects and larger-scale commercial developments while maintaining precision and pricing discipline.',
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
  title: 'Fabric & Fabrication | Global Collections and Finished Textile Outcomes',
  description:
    'LuxAura combines global textile sourcing with specialist fabrication capability, helping projects move from selection into finished soft-furnishing delivery.',
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
    images: ['/images/luxaura/beach-sheer.webp'],
  },
};

export default function CollectionsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Fabric & Fabrication', url: '/collections' },
  ]);
  const faqSchema = generateFaqSchema([...FABRIC_AND_FABRICATION_FAQ]);

  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/luxaura/beach-sheer.webp"
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
              Material Direction That Supports Better Design and Better Delivery
            </h1>
            <p className="mt-6 max-w-3xl text-pretty text-base leading-7 text-white/86 sm:text-xl sm:leading-8">
              More useful fabric sourcing, fabrication flexibility and performance-aware selection
              for projects that need both visual refinement and real-world practicality.
            </p>
            <p className="mt-4 max-w-3xl text-pretty text-sm leading-7 text-white/74 sm:text-base sm:leading-8">
              LuxAura helps bring together material suitability, fabrication logic and project
              needs, allowing furnishing decisions to move more smoothly from concept into
              production-ready direction.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href={TRADE_PORTAL_ACCESS_HREF} className="btn-primary">
                Trade Account
              </Link>
              <Link
                href={REQUEST_CUSTOM_SUPPORT_HREF}
                className="btn-secondary border-white/25 bg-white/12 text-white hover:bg-white/18 hover:text-white"
              >
                Project Enquiry
              </Link>
            </div>
          </div>
        </div>
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
                description="LuxAura supports a wider furnishing material pathway from the start, helping textiles move across multiple applications without losing practical clarity or visual control."
              />
              <p className="mt-6 max-w-xl text-sm leading-8 text-neutral-700 sm:text-base">
                The material needs to be not only beautiful, but buildable. LuxAura connects
                sourcing decisions to curtains, sheers, Roman blinds, upholstery and decorative
                layers so the brief remains broader than any one category.
              </p>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2.2rem] shadow-[0_28px_90px_rgba(20,24,22,0.12)]">
              <Image
                src="/images/IMG-H.webp"
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
                  <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                    {item.description}
                  </p>
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
                description="At LuxAura Living, linen is a signature material strength within a broader furnishing offer, balancing organic luxury with stronger versatility and commercially useful trade value."
              />
              <p className="mt-6 max-w-xl text-sm leading-8 text-neutral-700 sm:text-base">
                LuxAura’s linen collection is curated to support a wide range of furnishing
                outcomes, from soft sheers to heavier upholstery and architectural applications,
                with a material language that remains calm, tactile and commercially useful.
              </p>
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
                  src="/images/luxaura/beach-sheer.webp"
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
                    src="/images/luxaura/roman-blind-lounge.webp"
                    alt="Linen-led Roman blind application in a premium residential interior"
                    fill
                    sizes="(min-width: 1024px) 24vw, 100vw"
                    className="object-cover"
                  />
                  <ImageCodeBadge code="LXA-COL-16" />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem] shadow-[0_22px_70px_rgba(20,24,22,0.1)]">
                  <Image
                    src="/images/luxaura/upholstery-pillows.webp"
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
                The tactile and visual quality of linen is heavily shaped by finishing. LuxAura
                supports a more elevated linen offer through finishing processes that improve both
                feel and usability.
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
                LuxAura’s advantage lies not only in access to premium linen, but in the ability to
                carry that material through a more controlled making process.
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
                src="/images/luxaura/hero-project.webp"
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
                description="Selected performance fabrics help projects manage durability, stain resistance, abrasion resistance and heavier daily use without compromising visual refinement."
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
                src="/images/IMG-Hero.webp"
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
                description="LuxAura supports outdoor furnishing applications using high-performance Sunbrella fabrics designed for durability, colour stability and long-term outdoor use in residential, hospitality and commercial environments."
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
            description="LuxAura adapts material direction into curtains, upholstery, cushions and softer furnishing categories with more flexibility across boutique, staged and broader project scopes."
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

      <AccordionFaq
        items={[...FABRIC_AND_FABRICATION_FAQ]}
        title="Questions on project suitability, selection and fabrication"
        description="Concise answers for designers and project buyers who need material choice and fabrication logic to stay aligned."
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
                Bring LuxAura in when the textile selection needs to move cleanly into a made,
                coordinated furnishing result.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href={REQUEST_CUSTOM_SUPPORT_HREF} className="btn-primary">
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
