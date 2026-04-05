import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import { SITE_CONFIG } from '@/lib/constants';
import { GET_QUOTE_HREF } from '@/lib/site-data';

const STRATEGIC_PILLARS = [
  {
    title: 'Direct-to-Source & Lowest Price Guarantee',
    description:
      'As a factory-direct fulfillment hub, LuxAura removes intermediary markups through vertical integration. That control lets us back project briefs with a Lowest Price Guarantee without diluting craftsmanship.',
  },
  {
    title: 'Unlimited Bespoke Craft',
    description:
      'From restrained sheers to complex Roman blinds and trim-integrated detailing, our team executes advanced custom work with precision and consistency.',
  },
  {
    title: 'Performance & Pet-Friendly',
    description:
      'Our performance ranges are specified for modern family living, with pet-friendly, water-repellent and stain-resistant options, plus OEKO-TEX Standard 100 support across key collections.',
  },
  {
    title: 'High-Efficiency Local Delivery',
    description:
      'Global manufacturing capacity meets Sydney accountability. Most standard orders are produced within four weeks, with local coordination guiding delivery and installation readiness.',
  },
] as const;

const CAPABILITY_TILES = [
  {
    title: 'Fabric & Fabrication',
    description:
      'Managing projects from raw material to finished form, integrating LuxAura signature ranges with PT, Mobus, Sunbrella and FibreGuard for custom sewing at any scale.',
    href: '/collections',
    imageSrc: '/images/IMG-B.webp',
    imageAlt: 'Decorative drapery and tassel detail',
  },
  {
    title: 'Window Treatments',
    description:
      'Precision-engineered curtains, sheers and Roman blinds, including architectural S-Fold, classic Pinch Pleat and more complex custom detailing.',
    href: '/custom-curtains-sheers',
    imageSrc: '/images/IMG-A.webp',
    imageAlt: 'Roman blind and curtain craftsmanship',
  },
  {
    title: 'Bespoke Upholstery',
    description:
      'High-efficiency manufacturing for custom sofas, chairs and bedheads, built for residential and commercial settings with a refined finish.',
    href: '/cushions-soft-furnishings',
    imageSrc: '/images/IMG-D.webp',
    imageAlt: 'Custom upholstery and cushion detail',
  },
  {
    title: 'Hardware & Trimmings',
    description:
      'Premium motorised tracks, silent hardware and thousands of trims and decorative edges that resolve both function and detail.',
    href: '/trimmings',
    imageSrc: '/images/carousel/09-Curtain-Track.webp',
    imageAlt: 'Curtain track section detail',
  },
  {
    title: 'Integrated Supply Chain',
    description:
      'The Source to Sydney model supports four-week manufacturing cycles through global factory capacity and Sydney-led quality control.',
    href: '/about',
    imageSrc: '/images/carousel/12-Product.webp',
    imageAlt: 'Technical product reference supporting supply efficiency',
  },
  {
    title: 'Strategic Partnerships',
    description:
      'Built for designers and builders, with direct factory access supporting sharper budgets and a Lowest Price Guarantee on project briefs.',
    href: '/trade-projects',
    imageSrc: '/images/about-hero.webp',
    imageAlt: 'Project collaboration and local partnership',
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

function PillarIcon({ index }: { index: number }) {
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
          <path d="M4 8h16" />
          <path d="M6 12h12" />
          <path d="M8 16h8" />
          <path d="M12 4v16" />
        </svg>
      );
    case 1:
      return (
        <svg {...commonProps}>
          <path d="M7 16 17 6" />
          <path d="M7 8c0-1.1.9-2 2-2h2v2a2 2 0 0 1-2 2H7V8Z" />
          <path d="M13 14h2a2 2 0 0 1 2 2v2h-2a2 2 0 0 1-2-2v-2Z" />
        </svg>
      );
    case 2:
      return (
        <svg {...commonProps}>
          <path d="M12 21c4.4-2.3 7-5.6 7-10V5l-7-2-7 2v6c0 4.4 2.6 7.7 7 10Z" />
          <path d="M9.5 12.5 11 14l3.5-4" />
        </svg>
      );
    default:
      return (
        <svg {...commonProps}>
          <path d="M5 19h14" />
          <path d="M7 15V9" />
          <path d="M12 15V5" />
          <path d="M17 15v-3" />
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
          alt="Completed soft-furnishing interior with drapery, custom trim and bespoke seating"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,12,11,0.76)_0%,rgba(10,12,11,0.54)_30%,rgba(10,12,11,0.18)_58%,rgba(10,12,11,0.06)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,11,0.16)_0%,rgba(10,12,11,0.3)_42%,rgba(10,12,11,0.58)_100%)]" />

        <div className="container-custom relative flex min-h-[100svh] items-end pb-16 pt-40 sm:pb-20 sm:pt-44 lg:pb-24">
          <div className="max-w-[38rem] text-white">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.42em] text-[#ead7a8] sm:text-xs">
              Strategic Fulfillment Center
            </p>
            <h1 className="mt-5 max-w-4xl text-balance font-heading text-[3.15rem] font-semibold leading-[0.92] tracking-tight sm:text-[4.45rem] lg:text-[5.2rem] xl:text-[5.7rem]">
              The Fulfillment Center for Whole-Home Soft Furnishings.
            </h1>
            <p className="mt-6 max-w-[34rem] text-pretty text-base leading-[1.65] text-white/84 sm:text-[1.08rem] lg:text-[1.16rem]">
              A Sydney-based strategic partner for master-level fabrication, global textile
              sourcing, and factory-direct project delivery.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href={GET_QUOTE_HREF} className="btn-primary">
                Request a Trade Quote
              </Link>
              <Link
                href="#why-luxaura"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/22 px-6 py-3 text-sm font-semibold tracking-[0.12em] text-white transition hover:border-white/60 hover:bg-white/8"
              >
                Explore Our Fulfillment Workflow
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="why-luxaura"
        className="scroll-mt-40 px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-[9.5rem]"
      >
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-primary/68">
                Why LuxAura
              </p>
              <h2 className="mt-5 text-balance font-heading text-[3.15rem] font-semibold leading-[0.95] tracking-tight text-[#2C2C2C] sm:text-[4.2rem] lg:text-[4.9rem]">
                Four strategic reasons to bring us in early.
              </h2>
              <p className="mt-6 text-base leading-8 text-neutral-700 sm:text-lg">
                LuxAura is structured as a fulfillment partner, not a fragmented supplier. The
                advantage comes from price control, advanced fabrication and accountable local
                delivery.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {STRATEGIC_PILLARS.map((pillar, index) => (
                <article
                  key={pillar.title}
                  className="border-t border-primary/14 pt-6 transition duration-300 hover:border-primary/30"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/12 bg-primary/5 text-primary">
                    <PillarIcon index={index} />
                  </div>
                  <h3 className="mt-6 text-balance font-heading text-[2rem] font-semibold leading-tight text-[#2C2C2C]">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-sm leading-8 text-neutral-700 sm:text-base">
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8 lg:pb-[9.5rem]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Capability Matrix"
            title="A fulfillment model built for the full brief"
            description="Six connected capabilities that take a project from textile selection through fabrication and delivery."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {CAPABILITY_TILES.map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative isolate min-h-[27rem] overflow-hidden rounded-[2rem] shadow-[0_22px_70px_rgba(26,24,22,0.12)] transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_28px_90px_rgba(26,24,22,0.16)]"
              >
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,16,15,0.08)_0%,rgba(13,16,15,0.22)_36%,rgba(13,16,15,0.88)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(229,209,160,0.18),transparent_26%)]" />
                <div className="relative flex h-full flex-col justify-between p-7 text-white">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/18 bg-white/10 text-[#f1deb1] backdrop-blur-sm">
                    <CapabilityIcon index={index} />
                  </div>
                  <div>
                    <h2 className="max-w-[15rem] text-balance font-heading text-[2.2rem] font-semibold leading-[1]">
                      {item.title}
                    </h2>
                    <p className="mt-4 max-w-[22rem] text-sm leading-7 text-white/78 sm:text-[0.98rem]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8 lg:pb-[9.5rem]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Global Strategic Brand Partners"
            title="Trusted mills, performance leaders and signature ranges"
            description="A concise partner wall that signals sourcing depth without shifting the site back into retail language."
            align="center"
          />

          <div className="mt-10 grid gap-4 min-[560px]:grid-cols-2 xl:grid-cols-5">
            {STRATEGIC_PARTNERS.map(partner => (
              <article
                key={partner.name}
                className="group flex min-h-[110px] items-center justify-center rounded-[1.6rem] border border-neutral-200/80 bg-[#faf8f4] px-5 py-5 text-center text-neutral-500 grayscale transition duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:text-primary hover:grayscale-0"
              >
                <div>
                  <p className="font-heading text-[1.45rem] font-semibold leading-tight">
                    {partner.name}
                  </p>
                  <p className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-neutral-400 transition group-hover:text-primary/60">
                    {partner.note}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Australian Family-Owned
          </p>
        </div>
      </section>
    </>
  );
}
