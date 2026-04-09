import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ImageCodeBadge from '@/components/ImageCodeBadge';
import PartnerValueSection from '@/components/PartnerValueSection';
import { SITE_CONFIG } from '@/lib/constants';
import { TRADE_PORTAL_ACCESS_HREF } from '@/lib/site-data';

const CAPABILITY_TILES = [
  {
    number: '01',
    title: 'Fabric & Fabrication',
    description:
      'Material direction and specialist making that help projects move from sourcing into finished outcomes with less mismatch.',
    href: '/collections',
    code: 'LXA-HOME-02',
    imageSrc: '/image/01.webp',
    imageAlt: 'LuxAura fabric and fabrication capability image',
  },
  {
    number: '02',
    title: 'Window Treatments',
    description:
      'Curtains, sheers, Roman blinds and layered systems with stronger craft control, cleaner detailing and project-ready execution.',
    href: '/custom-curtains-sheers',
    code: 'LXA-HOME-03',
    imageSrc: '/image/02.webp',
    imageAlt: 'LuxAura window treatments capability image',
  },
  {
    number: '03',
    title: 'Bespoke Upholstery',
    description:
      'Indoor, outdoor and performance-led upholstery for seating, cushions and furnishing pieces that need durability and finish quality.',
    href: '/cushions-soft-furnishings',
    code: 'LXA-HOME-04',
    imageSrc: '/image/03.webp',
    imageAlt: 'LuxAura bespoke upholstery capability image',
  },
  {
    number: '04',
    title: 'Trimmings & Decorative Detail',
    description:
      'Decorative trims, refined finishing language and greater customisation that help schemes feel less generic and more resolved.',
    href: '/decorative-trimmings',
    code: 'LXA-HOME-05',
    imageSrc: '/image/04.webp',
    imageAlt: 'LuxAura hardware and decorative finishing capability image',
  },
  {
    number: '05',
    title: 'Hardware & Motorisation',
    description:
      'Refined track systems and motorised direction that help window treatments finish with better movement, usability and control.',
    href: '/custom-curtains-sheers#hardware-motorisation',
    code: 'LXA-HOME-06',
    imageSrc: '/image/05.webp',
    imageAlt: 'LuxAura unified supply chain capability image',
  },
  {
    number: '06',
    title: 'Project Support',
    description:
      'Design-aware support that reduces workload, aligns categories and helps furnishing decisions move forward with less friction.',
    href: '/project-support',
    code: 'LXA-HOME-07',
    imageSrc: '/image/06.webp',
    imageAlt: 'LuxAura partner excellence capability image',
  },
] as const;

const WHY_LUXAURA_PILLARS = [
  {
    number: '01',
    eyebrow: 'Design Protection',
    title: 'Protect original design outcomes.',
    description:
      'LuxAura helps preserve originality, detail integrity and design intent instead of allowing projects to become diluted through disconnected supplier decisions.',
  },
  {
    number: '02',
    eyebrow: 'Less Fragmentation',
    title: 'Reduce fragmented sourcing.',
    description:
      'Fabrics, window treatments, upholstery, decorative detail and project support can move through one more useful furnishing pathway.',
  },
  {
    number: '03',
    eyebrow: 'Lower Workload',
    title: 'Lower partner workload.',
    description:
      'LuxAura reduces sourcing admin, follow-up and coordination burden for designers, stylists, builders, developers and retailers.',
  },
  {
    number: '04',
    eyebrow: 'Resolved Results',
    title: 'Deliver more complete final results.',
    description:
      'Specialist making, decorative completion, hardware integration and project-aware support help interiors finish with stronger control and refinement.',
  },
] as const;

const SUPPLY_CHAIN_POINTS = [
  {
    title: 'Decorative depth',
    description:
      'Trimmings, decorative detailing and more tailored finishing options help projects avoid a generic supplier feel.',
  },
  {
    title: 'Performance-led selection',
    description:
      'Performance fabrics, hospitality-ready directions and pet-friendly selections bring more practical beauty into the furnishing brief.',
  },
  {
    title: 'Motorisation and specialist making',
    description:
      'Motorisation, refined fabrication and flexible custom support keep technical and decorative decisions connected to execution.',
  },
] as const;

const PAIN_POINTS = [
  'Too many disconnected suppliers across fabric, curtains, upholstery, trims and systems.',
  'Design outcomes that lose originality as execution becomes fragmented.',
  'Too much coordination burden placed on designers, builders and retailers.',
  'Not enough useful decorative resources to finish the scheme properly.',
  'Performance needs that fail to align with the visual ambition of the project.',
  'Difficulty balancing originality, practicality and budget across one brief.',
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
    images: ['/image/hero.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'From Fabric Selection to Full Project Delivery | LuxAura Sydney',
    description:
      'Sydney-based sourcing, fabrication, specialist finishing and project support for premium soft-furnishing work.',
    images: ['/image/hero.webp'],
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
      <section className="relative isolate min-h-[100svh] overflow-hidden">
        <Image
          src="/image/hero.webp"
          alt="LuxAura homepage hero image"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <ImageCodeBadge code="LXA-HOME-01" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,12,11,0.74)_0%,rgba(13,12,11,0.58)_32%,rgba(13,12,11,0.18)_64%,rgba(13,12,11,0.06)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,12,11,0.16)_0%,rgba(13,12,11,0.34)_100%)]" />

        <div className="container-custom relative flex min-h-[100svh] items-end px-4 pb-14 pt-32 max-[430px]:pb-12 max-[430px]:pt-28 sm:px-6 sm:pb-20 sm:pt-40 lg:px-8 lg:pb-24">
          <div className="max-w-[34rem] text-white sm:max-w-[38rem]" data-reveal="text">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#ead7a8]">LUXAURA</p>
            <h1 className="mt-5 text-balance font-heading text-[2.8rem] font-semibold leading-[0.96] tracking-[-0.045em] max-[430px]:text-[2.45rem] max-[430px]:leading-[0.98] sm:mt-6 sm:text-[4.55rem] sm:leading-[0.92] lg:text-[5.45rem] xl:text-[5.95rem]">
              Soft Furnishing Support for Projects That Need More Than Supply
            </h1>
            <p className="mt-5 max-w-[32rem] text-pretty text-[0.99rem] leading-[1.72] text-white/86 max-[430px]:text-[0.94rem] max-[430px]:leading-[1.68] sm:mt-6 sm:max-w-[34rem] sm:text-[1.14rem] sm:leading-[1.75]">
              LuxAura helps designers, builders, retailers, stylists and project-led clients
              reduce sourcing fragmentation, protect design intent and deliver more resolved
              interiors.
            </p>
            <p className="mt-4 max-w-[34rem] text-pretty text-[0.95rem] leading-[1.72] text-white/78 max-[430px]:text-[0.9rem] sm:text-[1.02rem] sm:leading-[1.78]">
              From materials and specialist making to decorative detailing, performance-led
              selections and project support, LuxAura brings more of the furnishing process into
              one more controlled, design-aware path.
            </p>

            <div className="mt-8 flex flex-col gap-3.5 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href={TRADE_PORTAL_ACCESS_HREF}
                className="btn-primary w-full sm:w-auto"
              >
                Trade Account Access
              </Link>
            </div>
          </div>
        </div>
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
                LuxAura is more useful than an ordinary supplier network because it helps partners
                protect design intent, reduce sourcing fragmentation and reach more resolved final
                results with less coordination burden.
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

      <section className="px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[10rem]">
        <div className="container-custom">
          <SectionEyebrow>What LuxAura Helps Solve</SectionEyebrow>
          <h2 className="mt-4 max-w-4xl text-balance font-heading text-[2.35rem] font-semibold leading-[1.02] tracking-[-0.035em] text-[#2C2C2C] max-[430px]:text-[2.1rem] sm:mt-5 sm:text-[4rem] sm:leading-[0.98] lg:text-[4.5rem]">
            The real furnishing problems most supplier mixes still leave unresolved
          </h2>
          <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
            {PAIN_POINTS.map(point => (
              <article key={point} className="section-shell p-5 max-[430px]:p-4 sm:p-7">
                <p className="text-sm leading-7 text-neutral-700 sm:text-base">{point}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="capabilities"
        className="px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[10rem]"
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <SectionEyebrow>Capability Overview</SectionEyebrow>
            <h2 className="mt-4 text-balance font-heading text-[2.35rem] font-semibold leading-[1.02] tracking-[-0.035em] text-[#2C2C2C] max-[430px]:text-[2.1rem] sm:mt-5 sm:text-[4rem] sm:leading-[0.98] lg:text-[4.6rem]">
              A more complete furnishing platform across sourcing, making and project execution
            </h2>
            <p className="mt-5 max-w-[42rem] text-pretty text-[0.98rem] leading-[1.72] text-neutral-700 sm:mt-6 sm:text-[1.06rem] sm:leading-[1.8]">
              Six connected capabilities designed to reduce workload, protect design outcomes and
              help furnishing briefs move with less downstream fragmentation.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-7 lg:grid-cols-3">
            {CAPABILITY_TILES.map(item => (
              <Link
                key={item.title}
                href={item.href}
                data-reveal="card"
                data-reveal-delay={String((Number(item.number) % 3) + 1)}
                className="group relative min-h-[24rem] overflow-hidden rounded-[1.9rem] shadow-[0_24px_80px_rgba(27,24,20,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_100px_rgba(27,24,20,0.14)] max-[430px]:min-h-[22rem] max-[430px]:rounded-[1.55rem] sm:min-h-[31rem] sm:rounded-[2.2rem]"
              >
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                />
                <ImageCodeBadge code={item.code} />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,12,11,0.04)_0%,rgba(12,12,11,0.12)_38%,rgba(12,12,11,0.82)_100%)]" />

                <div className="relative flex h-full flex-col justify-between p-5 max-[430px]:p-4 sm:p-7">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white">
                    {item.number}
                  </p>

                  <div className="max-w-[22rem]">
                    <h3 className="text-balance font-heading text-[1.7rem] font-semibold leading-[1.04] text-white max-[430px]:text-[1.5rem] sm:text-[2.3rem]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-pretty text-[14px] leading-7 text-white max-[430px]:text-[13px] max-[430px]:leading-6 sm:mt-4 sm:text-[0.98rem] sm:leading-8">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
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
                src="/images/IMG-I.webp"
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
                Trimmings, performance fabrics, motorisation, specialist making and flexible custom
                support help partners carry interiors further than basic sourcing alone.
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
              src="/images/IMG-H.webp"
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
                  Bring LuxAura in when sourcing, fabrication, specialist finishing and project
                  coordination need to move through one accountable furnishing path.
                </p>
                <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:gap-4">
                  <Link href={TRADE_PORTAL_ACCESS_HREF} className="btn-primary w-full sm:w-auto">
                    Trade Account Access
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
