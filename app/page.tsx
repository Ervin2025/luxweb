import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ImageCodeBadge from '@/components/ImageCodeBadge';
import PartnerValueSection from '@/components/PartnerValueSection';
import { SITE_CONFIG } from '@/lib/constants';
import { getReplacementImageSrc } from '@/lib/image-replacements';

const CAPABILITY_TILES = [
  {
    number: '01',
    title: 'Fabric & Fabrication',
    description: 'Material direction and specialist making for finished outcomes.',
    href: '/collections',
    code: 'LXA-HOME-02',
    imageSrc: getReplacementImageSrc('LXA-HOME-02', '/image/01.webp'),
    imageAlt: 'LuxAura fabric and fabrication capability image',
  },
  {
    number: '02',
    title: 'Window Treatments',
    description: 'Curtains, sheers and Roman blinds with stronger control.',
    href: '/custom-curtains-sheers',
    code: 'LXA-HOME-03',
    imageSrc: getReplacementImageSrc('LXA-HOME-03', '/image/02.webp'),
    imageAlt: 'LuxAura window treatments capability image',
  },
  {
    number: '03',
    title: 'Bespoke Upholstery',
    description: 'Indoor and outdoor upholstery with durable finish quality.',
    href: '/cushions-soft-furnishings',
    code: 'LXA-HOME-04',
    imageSrc: getReplacementImageSrc('LXA-HOME-04', '/image/03.webp'),
    imageAlt: 'LuxAura bespoke upholstery capability image',
  },
  {
    number: '04',
    title: 'Trimmings & Decorative Detail',
    description: 'Decorative trims and refined finishing for resolved schemes.',
    href: '/decorative-trimmings',
    code: 'LXA-HOME-05',
    imageSrc: getReplacementImageSrc('LXA-HOME-05', '/image/04.webp'),
    imageAlt: 'LuxAura hardware and decorative finishing capability image',
  },
  {
    number: '05',
    title: 'Hardware & Motorisation',
    description: 'Track systems and motorisation with cleaner movement and control.',
    href: '/custom-curtains-sheers#hardware-motorisation',
    code: 'LXA-HOME-06',
    imageSrc: getReplacementImageSrc('LXA-HOME-06', '/image/05.webp'),
    imageAlt: 'LuxAura unified supply chain capability image',
  },
  {
    number: '06',
    title: 'Project Support',
    description: 'Design-aware support that reduces friction across project decisions.',
    href: '/project-support',
    code: 'LXA-HOME-07',
    imageSrc: getReplacementImageSrc('LXA-HOME-07', '/image/06.webp'),
    imageAlt: 'LuxAura partner excellence capability image',
  },
] as const;

const WHY_LUXAURA_PILLARS = [
  {
    number: '01',
    eyebrow: 'Design Protection',
    title: 'Protect original design outcomes.',
    description: 'Preserve design intent through cleaner furnishing execution.',
  },
  {
    number: '02',
    eyebrow: 'Less Fragmentation',
    title: 'Reduce fragmented sourcing.',
    description: 'Keep sourcing decisions inside one furnishing pathway.',
  },
  {
    number: '03',
    eyebrow: 'Lower Workload',
    title: 'Lower partner workload.',
    description: 'Reduce sourcing admin, follow-up and coordination burden.',
  },
  {
    number: '04',
    eyebrow: 'Resolved Results',
    title: 'Deliver more complete final results.',
    description: 'Deliver interiors with stronger control and refinement.',
  },
] as const;

const SUPPLY_CHAIN_POINTS = [
  {
    title: 'Decorative depth',
    description: 'Trims and finishing add individuality to the scheme.',
  },
  {
    title: 'Performance-led selection',
    description: 'Performance fabrics support practical and beautiful interiors.',
  },
  {
    title: 'Motorisation and specialist making',
    description: 'Technical and decorative decisions stay connected to execution.',
  },
] as const;

const SIGNATURE_STRENGTHS = [
  {
    title: 'Roman Blinds, Made to a Higher Standard',
    description: 'Roman blind making with cleaner construction and finish.',
    href: '/custom-curtains-sheers#roman-blinds',
    ctaLabel: 'Explore Window Treatments',
    code: 'LXA-HOME-09',
    imageSrc: getReplacementImageSrc('LXA-HOME-09', '/images/luxaura/roman-blind-lounge.webp'),
    imageAlt: 'Roman blind feature image in a quiet luxury interior',
  },
  {
    title: 'Signature Linen as a Core Material Strength',
    description: 'French linen with versatile application and trade value.',
    href: '/collections#signature-linen',
    ctaLabel: 'Explore Fabric & Fabrication',
    code: 'LXA-HOME-10',
    imageSrc: getReplacementImageSrc('LXA-HOME-10', '/images/luxaura/beach-sheer.webp'),
    imageAlt: 'Draped linen and sheer texture in a warm neutral interior setting',
  },
] as const;

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Brief & Direction',
    description: 'Clarify the project intent, furnishing priorities and design language.',
  },
  {
    number: '02',
    title: 'Resource Alignment',
    description: 'Bring together the right materials, detailing, systems and practical requirements.',
  },
  {
    number: '03',
    title: 'Refinement & Coordination',
    description: 'Shape a more coherent furnishing direction with fewer disconnected decisions.',
  },
  {
    number: '04',
    title: 'Fabrication & Fulfilment',
    description: 'Move selected scope into controlled making and more reliable delivery pathways.',
  },
  {
    number: '05',
    title: 'Final Project Readiness',
    description: 'Support a cleaner handover toward styling, installation or completion.',
  },
] as const;

export const metadata: Metadata = {
  title: 'From Fabric Selection to Full Project Delivery | LuxAura Sydney',
  description:
    "Sydney's integrated trade partner for soft-furnishing sourcing, fabrication, project support and more coordinated delivery across premium residential, hospitality and commercial interiors.",
  keywords:
    'Sydney soft furnishing trade partner, premium textiles Sydney, project support Sydney, custom soft furnishings Sydney, window treatments Sydney, bespoke upholstery Sydney',
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    title: 'From Fabric Selection to Full Project Delivery | LuxAura Sydney',
    description:
      'Sydney-based sourcing, fabrication, specialist finishing and project support for premium residential, hospitality and commercial interiors.',
    url: SITE_CONFIG.url,
    images: [getReplacementImageSrc('LXA-HOME-01', '/image/hero.webp')],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'From Fabric Selection to Full Project Delivery | LuxAura Sydney',
    description:
      'Sydney-based sourcing, fabrication, specialist finishing and project support for premium soft-furnishing work.',
    images: [getReplacementImageSrc('LXA-HOME-01', '/image/hero.webp')],
  },
};

function SectionEyebrow({
  children,
  align = 'left',
}: {
  children: string;
  align?: 'left' | 'center';
}) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.34em] text-primary/72 ${
        align === 'center' ? 'text-center' : ''
      }`}
    >
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <section className="relative isolate h-[72svh] overflow-hidden sm:h-[78svh] lg:h-[82svh]">
        <Image
          src={getReplacementImageSrc('LXA-HOME-01', '/image/hero.webp')}
          alt="LuxAura homepage hero image"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <ImageCodeBadge code="LXA-HOME-01" />
      </section>

      <section
        id="why-luxaura"
        className="relative overflow-hidden px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[10rem]"
      >
        <div className="absolute inset-x-0 top-16 h-[24rem] bg-[radial-gradient(circle_at_12%_0%,rgba(201,177,136,0.26),transparent_42%),radial-gradient(circle_at_88%_18%,rgba(30,58,50,0.08),transparent_24%)]" />

        <div className="container-custom relative">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div className="max-w-lg" data-reveal="text">
              <SectionEyebrow>Why LuxAura Matters</SectionEyebrow>
              <h2 className="mt-4 text-balance font-heading text-[2.8rem] font-semibold leading-[0.96] tracking-[-0.045em] text-[#2C2C2C] max-[430px]:text-[2.45rem] max-[430px]:leading-[0.98] sm:mt-5 sm:text-[4.75rem] sm:leading-[0.92] lg:text-[5.8rem]">
                WHY LUXAURA
              </h2>
              <p className="mt-5 text-pretty text-[0.98rem] leading-[1.76] text-neutral-700 sm:mt-6 sm:text-[1.06rem] sm:leading-[1.85]">
                A more complete path from sourcing to finished furnishing delivery.
              </p>
            </div>

            <div className="grid gap-5 sm:gap-8 md:grid-cols-2">
              {WHY_LUXAURA_PILLARS.map((pillar, index) => (
                <article
                  key={pillar.number}
                  data-reveal="card"
                  data-reveal-delay={String((index % 4) + 1)}
                  className="rounded-[1.7rem] border border-[#e4dbc9] bg-white/68 p-5 shadow-[0_20px_60px_rgba(27,24,20,0.04)] backdrop-blur max-[430px]:rounded-[1.45rem] max-[430px]:p-4 sm:rounded-[2rem] sm:p-7"
                >
                  <p className="font-heading text-[2.6rem] font-semibold leading-none text-primary/24">
                    {pillar.number}
                  </p>
                  <p className="mt-5 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-primary/66">
                    {pillar.eyebrow}
                  </p>
                  <h3 className="mt-3 text-balance font-heading text-[1.65rem] font-semibold leading-[1.05] text-[#2C2C2C] max-[430px]:text-[1.5rem] sm:text-[2rem]">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-pretty text-[14px] leading-7 text-neutral-700 max-[430px]:text-[13px] max-[430px]:leading-6 sm:text-[0.98rem] sm:leading-8">
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="capabilities"
        className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-[9rem]"
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <SectionEyebrow>Capability Overview</SectionEyebrow>
            <h2 className="mt-4 text-balance font-heading text-[2.35rem] font-semibold leading-[1.02] tracking-[-0.035em] text-[#2C2C2C] max-[430px]:text-[2.1rem] sm:mt-5 sm:text-[4rem] sm:leading-[0.98] lg:text-[4.6rem]">
              Integrated Soft Furnishing Capability
            </h2>
          </div>

          <div className="mt-10 grid gap-10 sm:mt-14 sm:gap-12 md:grid-cols-2 xl:grid-cols-3">
            {CAPABILITY_TILES.map(item => (
              <Link
                key={item.title}
                href={item.href}
                data-reveal="card"
                data-reveal-delay={String((Number(item.number) % 3) + 1)}
                className="group block transition duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[0.9rem] border border-[#e5ddcf] bg-[#e8e0d2] max-[430px]:rounded-[0.75rem] sm:rounded-[0.7rem]">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 30vw, (min-width: 768px) 48vw, 100vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.02]"
                  />
                  <ImageCodeBadge code={item.code} />
                </div>
                <h3 className="mt-3 text-left font-heading text-[1.12rem] font-medium leading-[1.25] text-[#393631] sm:mt-4 sm:text-[1.22rem]">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[10rem]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <SectionEyebrow>Flagship Strengths</SectionEyebrow>
            <h2 className="mt-4 text-balance font-heading text-[2.35rem] font-semibold leading-[1.02] tracking-[-0.035em] text-[#2C2C2C] max-[430px]:text-[2.1rem] sm:mt-5 sm:text-[3.7rem] sm:leading-[0.98] lg:text-[4.1rem]">
              Two specialist capabilities that make LuxAura more distinctive in real project work
            </h2>
            <p className="mt-5 max-w-[42rem] text-pretty text-[0.98rem] leading-[1.72] text-neutral-700 sm:mt-6 sm:text-[1.06rem] sm:leading-[1.8]">
              Roman blinds and linen remain two core LuxAura strengths.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-2">
            {SIGNATURE_STRENGTHS.map(item => (
              <article
                key={item.title}
                className="section-shell overflow-hidden rounded-[2rem] max-[430px]:rounded-[1.55rem] sm:rounded-[2.2rem]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover transition duration-700 ease-out hover:scale-[1.02]"
                  />
                  <ImageCodeBadge code={item.code} />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,12,11,0.03)_0%,rgba(12,12,11,0.22)_100%)]" />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-balance font-heading text-[2rem] font-semibold leading-[1.04] text-[#2C2C2C] max-[430px]:text-[1.75rem] sm:text-[2.5rem]">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="supply-chain"
        className="px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[10rem]"
      >
        <div className="container-custom">
          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/70 bg-[#e3ddd1] shadow-[0_28px_80px_rgba(27,24,20,0.08)] sm:aspect-[16/10] sm:rounded-[2.4rem]"
              data-reveal="image"
            >
              <Image
                src={getReplacementImageSrc('LXA-HOME-08', '/images/IMG-I.webp')}
                alt="Material selection and project coordination detail representing LuxAura supply chain strength."
                fill
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="object-cover"
              />
              <ImageCodeBadge code="LXA-HOME-08" />
            </div>

            <div className="max-w-xl lg:pl-6" data-reveal="text">
              <SectionEyebrow>Decorative + Technical Resource Advantage</SectionEyebrow>
              <h2 className="mt-4 text-balance font-heading text-[2.35rem] font-semibold leading-[1.02] tracking-[-0.035em] text-[#2C2C2C] max-[430px]:text-[2.1rem] sm:mt-5 sm:text-[3.8rem] sm:leading-[1] lg:text-[4.35rem]">
                More useful decorative and technical resources behind the final result
              </h2>
              <p className="mt-5 text-pretty text-[0.98rem] leading-[1.76] text-neutral-700 sm:mt-6 sm:text-[1.06rem] sm:leading-[1.85]">
                Decorative and technical resources support cleaner project outcomes.
              </p>
              <div className="mt-8 grid gap-4">
                {SUPPLY_CHAIN_POINTS.map(point => (
                  <article key={point.title} className="section-shell p-5 sm:p-6">
                    <h3 className="font-heading text-[1.8rem] font-semibold leading-tight text-neutral-900 sm:text-[2rem]">
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

      <PartnerValueSection className="pb-0" />

      <section className="px-4 pb-24 pt-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[10rem]">
        <div className="container-custom">
          <SectionEyebrow>LuxAura Process</SectionEyebrow>
          <h2 className="mt-4 max-w-4xl text-balance font-heading text-[2.35rem] font-semibold leading-[1.02] tracking-[-0.035em] text-[#2C2C2C] max-[430px]:text-[2.1rem] sm:mt-5 sm:text-[4rem] sm:leading-[0.98] lg:text-[4.5rem]">
            A clearer path from design idea to final project readiness
          </h2>
          <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 xl:grid-cols-5">
            {PROCESS_STEPS.map(step => (
              <article key={step.number} className="section-shell p-5 max-[430px]:p-4 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">
                  {step.number}
                </p>
                <h3 className="mt-4 font-heading text-[1.7rem] font-semibold leading-tight text-neutral-900 max-[430px]:text-[1.5rem] sm:text-[2rem]">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-neutral-700">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[10rem]">
        <div className="container-custom">
          <div
            className="relative overflow-hidden rounded-[2rem] shadow-[0_28px_90px_rgba(27,24,20,0.12)] sm:rounded-[2.4rem]"
            data-reveal="image"
          >
            <Image
              src={getReplacementImageSrc('LXA-HOME-11', '/images/IMG-H.webp')}
              alt="LuxAura project with layered drapery, upholstery and refined coastal light."
              fill
              sizes="100vw"
              className="object-cover"
            />
            <ImageCodeBadge code="LXA-HOME-11" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,12,11,0.84)_0%,rgba(13,12,11,0.66)_46%,rgba(13,12,11,0.18)_100%)]" />
            <div className="relative px-5 py-12 text-white sm:px-10 sm:py-16 lg:px-14 lg:py-20">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#ead7a8]">
                  Final CTA
                </p>
                <h2 className="mt-4 text-balance font-heading text-[2.35rem] font-semibold leading-[1] tracking-[-0.035em] text-white max-[430px]:text-[2.1rem] sm:mt-5 sm:text-[4rem] sm:leading-[0.96] lg:text-[4.8rem]">
                  One partner. One pathway. A more resolved result.
                </h2>
                <p className="mt-5 max-w-2xl text-pretty text-[0.98rem] leading-[1.76] text-white/82 sm:mt-6 sm:text-[1.06rem] sm:leading-[1.85]">
                  One accountable path for sourcing, making and project support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
