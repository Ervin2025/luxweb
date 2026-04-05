import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AccordionFaq from '@/components/AccordionFaq';
import Breadcrumb from '@/components/Breadcrumb';
import SectionHeading from '@/components/SectionHeading';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { generateFaqSchema } from '@/lib/faq-schema';
import { TRADE_PORTAL_ACCESS_HREF, TRADE_SUPPORT_HREF } from '@/lib/site-data';

const MATERIAL_DIRECTIONS = [
  {
    title: 'LuxAura Signature Series',
    description:
      'A balanced in-house direction combining practical versatility with refined texture, suitable across curtains, upholstery and decorative applications.',
    imageSrc: '/images/luxaura/upholstery-pillows.webp',
    imageAlt: 'LuxAura signature fabric textures and upholstery detailing',
  },
  {
    title: 'British Decorative Textiles',
    description:
      'Pattern, colour and layered decorative expression for projects requiring character, softness and visual richness, including PT and other British directions.',
    imageSrc: '/images/IMG-C.webp',
    imageAlt: 'British decorative drapery with layered softness and statement detailing',
  },
  {
    title: 'Pet-Friendly Upholstery Fabrics',
    description:
      'Hard-wearing textile directions from collections such as Mobus and FibreGuard for more forgiving everyday use without sacrificing design quality.',
    imageSrc: '/images/luxaura/hero-project.webp',
    imageAlt: 'Pet-friendly upholstery textiles in a refined interior setting',
  },
  {
    title: 'French Linen & Linen Blends',
    description:
      'Relaxed texture, breathable elegance and softer drape for elevated residential and boutique interior settings.',
    imageSrc: '/images/luxaura/beach-sheer.webp',
    imageAlt: 'French linen and linen-blend drapery in a calm coastal interior',
  },
  {
    title: 'Outdoor & Performance Fabrics',
    description:
      'Textiles selected for stronger UV resilience, durability and outdoor or semi-exposed furnishing use, including Sunbrella.',
    imageSrc: '/images/IMG-H.webp',
    imageAlt: 'Performance fabric used across outdoor-adjacent furnishing applications',
  },
  {
    title: 'Commercial Value Directions',
    description:
      'Dependable material solutions for broader rollouts, staged projects and furnishing briefs that require pricing discipline without visual compromise.',
    imageSrc: '/images/IMG-I.webp',
    imageAlt: 'Commercial furnishing material direction with performance-ready window treatment',
  },
] as const;

const MADE_APPLICATIONS = [
  {
    title: 'Curtains & Sheers',
    description:
      'Fabric developed into site-ready window layers with cleaner headings, stronger fabric behaviour and controlled finish.',
    imageSrc: '/images/luxaura/hero-project.webp',
    imageAlt: 'Curtains and sheers made from LuxAura-sourced fabrics',
  },
  {
    title: 'Bespoke Cushions',
    description:
      'Custom cushions, bolsters and accent pieces that continue the textile story across the room with greater coherence.',
    imageSrc: '/images/IMG-D.webp',
    imageAlt: 'Bespoke cushions with refined textile detailing',
  },
  {
    title: 'Upholstery & Slipcovers',
    description:
      'Tailored upholstery, sofa covers and protective layers where material choice and fabrication quality need to work together.',
    imageSrc: '/images/IMG-G.webp',
    imageAlt: 'Upholstery and slipcover application with layered drapery',
  },
  {
    title: 'Ottomans & Bench Seats',
    description:
      'Structured soft-furnishing pieces that connect upholstery, padding and material continuity back into the room.',
    imageSrc: '/images/IMG-J.webp',
    imageAlt: 'Ottoman and bench seat applications in a premium interior',
  },
  {
    title: 'Table Linens & Soft Dining Pieces',
    description:
      'Table runners, tablecloths and dining linen applications for residential styling and boutique hospitality settings.',
    imageSrc: '/images/IMG-K.webp',
    imageAlt: 'Soft dining and table linen direction for premium living spaces',
  },
  {
    title: 'Specialty Textile Pieces',
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

const FAQ_ITEMS = [
  {
    question: 'How do you match fabric to the right application?',
    answer:
      'LuxAura looks at handle, durability, drape, exposure and fabrication method so the material suits both the look and the build.',
  },
  {
    question: 'Can one fabric story carry across multiple applications?',
    answer:
      'Yes. Where suitable, one direction can move through curtains, upholstery, cushions and related pieces with better visual continuity.',
  },
  {
    question: 'Do you only supply the textile, or also make the finished pieces?',
    answer:
      'LuxAura supports both. The value is in carrying the selection into fabrication so the final result stays commercially and visually controlled.',
  },
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
};

export default function CollectionsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Fabric & Fabrication', url: '/collections' },
  ]);
  const faqSchema = generateFaqSchema([...FAQ_ITEMS]);

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
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,16,15,0.72)_0%,rgba(13,16,15,0.56)_36%,rgba(13,16,15,0.16)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,16,15,0.12)_0%,rgba(13,16,15,0.34)_100%)]" />

        <div className="container-custom relative flex min-h-[84svh] items-end pb-16 pt-36 sm:pb-20 sm:pt-40">
          <div className="max-w-4xl text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ead7a8]">
              Fabric & Fabrication
            </p>
            <h1 className="mt-5 max-w-3xl text-balance font-heading text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Global collections. Fabric into form.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/86 sm:text-xl sm:leading-8">
              LuxAura combines a globally sourced textile library with specialist fabrication
              capability, helping projects move from material selection into finished
              soft-furnishing execution with clarity and control.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#materials" className="btn-primary">
                View Material Directions
              </a>
              <Link
                href={TRADE_SUPPORT_HREF}
                className="btn-secondary border-white/25 bg-white/12 text-white hover:bg-white/18 hover:text-white"
              >
                Discuss a Project
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
                eyebrow="Introduction"
                title="Fabric is only the beginning"
                description="Selection matters, but so does what happens next. LuxAura supports the transition from fabric choice into curtains, upholstery, cushions, table linens and other made textile applications."
              />
              <p className="mt-6 max-w-xl text-sm leading-8 text-neutral-700 sm:text-base">
                The material needs to be not only beautiful, but buildable. LuxAura connects the
                sourcing decision to the fabrication path so the final result remains controlled
                from the beginning.
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
            </div>
          </div>
        </div>
      </section>

      <section id="materials" className="section-padding pt-0">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Material Directions"
            title="A considered textile library for varied project needs"
            description="Premium material directions shaped around how different projects actually specify, perform and furnish."
          />
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

      <section className="section-padding pt-0">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Made Applications"
            title="Where the fabric goes next"
            description="These are project applications, not product tiles. Each outcome reflects how LuxAura carries the textile story into finished use."
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
              eyebrow="Why This Matters"
              title="Making control is what turns a good fabric into a finished result"
              description="The commercial advantage comes from connecting material choice to real fabrication logic and a coordinated project outcome."
              theme="dark"
            />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {WHY_THIS_MATTERS.map(item => (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/12 bg-white/7 p-5"
                >
                  <h2 className="font-heading text-3xl font-semibold text-white">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-white/78">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AccordionFaq
        items={[...FAQ_ITEMS]}
        title="Questions on selection, application and fabrication"
        description="A concise answer set covering fit, continuity and what happens after the textile is chosen."
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
