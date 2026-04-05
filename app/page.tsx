import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import { SITE_CONFIG } from '@/lib/constants';
import { GET_QUOTE_HREF } from '@/lib/site-data';

const TRADE_PORTAL_HREF = '/trade/login';

const CAPABILITY_TILES = [
  {
    title: 'Fabrics & Fabrication',
    description:
      'Managing your project from raw material to finished form. Combining LuxAura Signature lines with global leaders such as PT, Mobus, Sunbrella and FibreGuard for any scale of custom sewing.',
    href: '/collections',
    imageSrc: '/images/IMG-B.webp',
    imageAlt: 'Decorative drapery and tassel detail',
    imageClass: 'object-cover',
  },
  {
    title: 'Window Treatments',
    description:
      'Master craftsmanship in drapery and sheers. Specialized in architectural S-Fold, classic Pinch Pleat and precision-engineered Roman blinds for seamless site delivery.',
    href: '/custom-curtains-sheers',
    imageSrc: '/images/IMG-A.webp',
    imageAlt: 'Roman blind and curtain craftsmanship',
    imageClass: 'object-cover',
  },
  {
    title: 'Bespoke Upholstery',
    description:
      'Precision manufacturing of custom lounges, chairs and bedheads. Engineered for high-use environments with structural integrity and artisanal finish.',
    href: '/cushions-soft-furnishings',
    imageSrc: '/images/IMG-D.webp',
    imageAlt: 'Custom upholstery and cushion detail',
    imageClass: 'object-cover',
  },
  {
    title: 'Hardware & Trimmings',
    description:
      'Resolving function and aesthetic. Premium motorised tracks integrated with 1000s of master-grade artisanal trims and decorative edges for a resolved designer look.',
    href: '/trimmings',
    imageSrc: '/images/carousel/09-Curtain-Track.webp',
    imageAlt: 'Curtain track section detail',
    imageClass: 'object-contain p-10',
  },
  {
    title: 'Supply Chain Efficiency',
    description:
      'Our Source to Sydney model ensures rapid production from our global factory, backed by master-grade quality and local Sydney accountability.',
    href: '/about',
    imageSrc: '/images/carousel/12-Product.webp',
    imageAlt: 'Technical product reference supporting supply efficiency',
    imageClass: 'object-contain p-10',
  },
  {
    title: 'Strategic Partnerships',
    description:
      'Built for Designers, Builders and Developers. Our direct factory connection supports a Lowest Price Guarantee on every project brief.',
    href: '/trade-projects',
    imageSrc: '/images/about-hero.webp',
    imageAlt: 'Project collaboration and local partnership',
    imageClass: 'object-cover',
  },
] as const;

const FABRICATION_SCOPE = [
  {
    title: 'Soft Furnishings',
    items: ['Cushions', 'Table Runners', 'Bedrunners', 'Bedheads'],
  },
  {
    title: 'Protective Layers',
    items: ['Tailored Sofa Covers', 'Seat Pads', 'Slipcovers'],
  },
  {
    title: 'Decorative Detail',
    items: ['Precision piping', 'Border application', 'Hand-finished edges'],
  },
] as const;

const STRATEGIC_PARTNERS = [
  { name: 'LuxAura', note: 'Signature Series' },
  { name: 'Prestigious Textiles', note: 'UK' },
  { name: 'Mobus', note: 'UK' },
  { name: 'Sunbrella', note: 'USA' },
  { name: 'FibreGuard', note: 'EU' },
] as const;

export const metadata: Metadata = {
  title: 'The Fulfillment Center for Whole-Home Soft Furnishings | LuxAura Sydney',
  description:
    'A Sydney-based strategic partner for master-level fabrication, global textile sourcing and factory-direct project delivery.',
  keywords:
    'Whole-home soft furnishings Sydney, textile sourcing Sydney, project fulfillment Sydney, master fabrication Sydney, trade quote soft furnishings',
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

function CapabilityIcon({ index }: { index: number }) {
  const commonProps = {
    className: 'h-7 w-7',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.8',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  switch (index) {
    case 0:
      return (
        <svg {...commonProps}>
          <path d="M4 7h16M4 12h16M4 17h10" />
          <path d="M16.5 15.5 20 19m-1.5-6.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" />
        </svg>
      );
    case 1:
      return (
        <svg {...commonProps}>
          <path d="M4 19V5" />
          <path d="M20 19V5" />
          <path d="M8 6c2.2 0 2.2 2 4 2s1.8-2 4-2" />
          <path d="M8 11c2.2 0 2.2 2 4 2s1.8-2 4-2" />
          <path d="M8 16c2.2 0 2.2 2 4 2s1.8-2 4-2" />
        </svg>
      );
    case 2:
      return (
        <svg {...commonProps}>
          <path d="M5 16.5V9.5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7" />
          <path d="M7 16.5h10" />
          <path d="M8 7.5V6a4 4 0 0 1 8 0v1.5" />
          <path d="M3.5 16.5h17" />
        </svg>
      );
    case 3:
      return (
        <svg {...commonProps}>
          <path d="M4 7h14" />
          <path d="M4 12h10" />
          <path d="M4 17h14" />
          <path d="M18 9.5a2.5 2.5 0 1 1 0 5" />
        </svg>
      );
    case 4:
      return (
        <svg {...commonProps}>
          <path d="M5 15 10 10l3 3 6-6" />
          <path d="M19 10V7h-3" />
          <path d="M4 19h16" />
        </svg>
      );
    default:
      return (
        <svg {...commonProps}>
          <path d="M12 13a4 4 0 1 0-4-4" />
          <path d="M18.5 19a6.5 6.5 0 0 0-13 0" />
          <path d="M18 8h3m-1.5-1.5v3" />
        </svg>
      );
  }
}

export default function Home() {
  return (
    <>
      <section className="relative isolate min-h-[100svh] overflow-hidden">
        <Image
          src="/images/IMG-A.webp"
          alt="Completed soft-furnishing interior with Roman blind, sheers and custom seating"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,14,13,0.16)_0%,rgba(12,14,13,0.28)_28%,rgba(12,14,13,0.74)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(229,209,160,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(197,160,89,0.12),transparent_28%)]" />

        <div className="container-custom relative flex min-h-[100svh] items-end pb-16 pt-40 sm:pb-20 sm:pt-44 lg:pb-24">
          <div className="max-w-4xl text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#ead7a8]">
              Strategic Fulfillment Center
            </p>
            <h1 className="mt-5 max-w-4xl text-balance font-heading text-[3.3rem] font-semibold leading-[0.92] tracking-tight sm:text-[4.5rem] lg:text-[5.3rem] xl:text-[5.8rem]">
              The Fulfillment Center for Whole-Home Soft Furnishings.
            </h1>
            <p className="mt-6 max-w-3xl text-pretty text-lg leading-[1.6] text-white/86 sm:text-[1.55rem]">
              A Sydney-based strategic partner for master-level fabrication, global textile
              sourcing, and factory-direct project delivery.
            </p>
            <div className="mt-9">
              <Link href={GET_QUOTE_HREF} className="btn-primary">
                Request a Trade Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-[9.5rem]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Capability Matrix"
            title="A strategic capability matrix for project delivery"
            description="Six focused capabilities that move premium textiles into site-ready soft furnishings."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {CAPABILITY_TILES.map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                className="group overflow-hidden rounded-[2rem] border border-white/75 bg-white/82 shadow-[0_24px_70px_rgba(26,24,22,0.08)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_30px_90px_rgba(26,24,22,0.14)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#eef1f2]">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className={`transition duration-700 ease-out group-hover:scale-[1.04] ${item.imageClass}`}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(12,16,14,0.02)_0%,_rgba(12,16,14,0.18)_100%)]" />
                </div>
                <div className="p-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/10 bg-[linear-gradient(135deg,rgba(197,160,89,0.1),rgba(255,255,255,0.94))] text-primary">
                    <CapabilityIcon index={index} />
                  </div>
                  <h2 className="mt-6 text-balance font-heading text-3xl font-semibold text-[#2C2C2C]">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href={TRADE_PORTAL_HREF} className="btn-primary">
              Trade Portal Access
            </Link>
            <Link href={GET_QUOTE_HREF} className="btn-secondary">
              Request a Trade Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8 lg:pb-[9.5rem]">
        <div className="container-custom">
          <div className="grid items-center gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:gap-10">
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/75 bg-white/65 p-3 shadow-[0_28px_80px_rgba(26,24,22,0.1)] backdrop-blur">
              <div className="relative aspect-[4/4.6] overflow-hidden rounded-[1.7rem]">
                <Image
                  src="/images/luxaura/upholstery-pillows.webp"
                  alt="Master fabrication detail on upholstery and cushions"
                  fill
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(14,17,15,0.04)_0%,_rgba(14,17,15,0.32)_100%)]" />
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Master Fabrication Scope"
                title="What the workshop is built to deliver"
                description="From cushions to protective covers, LuxAura translates fabric selection into finished form."
              />
              <div className="mt-8 space-y-4">
                {FABRICATION_SCOPE.map(item => (
                  <article
                    key={item.title}
                    className="rounded-[1.7rem] border border-primary/10 bg-white/78 p-6 shadow-[0_18px_46px_rgba(26,24,22,0.06)]"
                  >
                    <h3 className="font-heading text-3xl font-semibold text-[#2C2C2C]">
                      {item.title}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.items.map(scope => (
                        <span
                          key={scope}
                          className="rounded-full border border-primary/14 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {scope}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href={GET_QUOTE_HREF} className="btn-primary">
                  Request a Trade Quote
                </Link>
                <Link href={TRADE_PORTAL_HREF} className="btn-secondary">
                  Trade Portal Access
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8 lg:pb-[9.5rem]">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-[2.35rem] bg-[#182620] text-white shadow-[0_34px_100px_rgba(18,24,21,0.22)]">
            <div className="absolute inset-0">
              <Image
                src="/images/luxaura/upholstery-pillows.webp"
                alt="Performance upholstery for pet-friendly interiors"
                fill
                sizes="100vw"
                className="object-cover opacity-28"
              />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,17,15,0.46)_0%,rgba(13,17,15,0.82)_100%)]" />
            <div className="relative px-8 py-16 sm:px-10 sm:py-20 lg:px-14">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ead7a8]">
                Featured Performance
              </p>
              <h2 className="mt-5 max-w-3xl text-balance font-heading text-5xl font-semibold leading-[0.95] text-white sm:text-6xl">
                The Pet-Friendly Specialist.
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
                Engineered for Australian living. Our performance textiles, including FibreGuard
                and Mobus, are water-repellent, stain-resistant and specified for high-rub use.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
                100% OEKO-TEX Standard 100 certified where specified, supporting safer use for
                pets, kids and modern homes without sacrificing visual quality.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href={GET_QUOTE_HREF} className="btn-primary">
                  Inquire Performance Textiles
                </Link>
                <Link
                  href="/collections"
                  className="btn-secondary border-white/18 bg-white/10 text-white hover:border-white hover:bg-white hover:text-primary"
                >
                  Source Collections
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8 lg:pb-[9.5rem]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Global Strategic Partners"
            title="Strategic Brand Partners"
            description="A concise sourcing wall built around trusted mills, performance leaders and LuxAura signature ranges."
            align="center"
          />
          <div className="mt-10 rounded-[2rem] border border-white/70 bg-white/78 p-6 shadow-[0_24px_70px_rgba(26,24,22,0.06)] backdrop-blur sm:p-8">
            <div className="grid gap-4 min-[520px]:grid-cols-2 xl:grid-cols-5">
              {STRATEGIC_PARTNERS.map(partner => (
                <div
                  key={partner.name}
                  className="flex min-h-[96px] items-center justify-center rounded-[1.4rem] border border-neutral-200/80 bg-[#fafaf9] px-4 py-4 text-center saturate-0"
                >
                  <div>
                    <p className="font-heading text-[1.55rem] font-semibold leading-tight text-neutral-500">
                      {partner.name}
                    </p>
                    <p className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-neutral-400">
                      {partner.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
              Australian Family-Owned. Sydney accountability.
            </p>
            <div className="mt-10 flex justify-center">
              <Link href={GET_QUOTE_HREF} className="btn-primary">
                Request a Trade Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
