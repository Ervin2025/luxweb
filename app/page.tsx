import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import { SITE_CONFIG } from '@/lib/constants';
import { GET_QUOTE_HREF, REQUEST_CATALOGUE_HREF } from '@/lib/site-data';

const CAPABILITY_TILES = [
  {
    title: 'Fabric Sourcing',
    description:
      'Our signature LuxAura range meets global leaders: PT, Mobus, Sunbrella, and FibreGuard.',
    href: '/collections',
    imageSrc: '/images/IMG-B.webp',
    imageAlt: 'Fabric and tassel detail showing sourcing depth and finishing quality',
    imageClass: 'object-cover',
  },
  {
    title: 'Window Treatments',
    description:
      'Precision-crafted curtains, sheers, and specialized Roman blinds. Mastered in-house.',
    href: '/custom-curtains-sheers',
    imageSrc: '/images/IMG-A.webp',
    imageAlt: 'Roman blind and drapery detail',
    imageClass: 'object-cover',
  },
  {
    title: 'Bespoke Upholstery',
    description:
      'Custom indoor and outdoor seating. Engineered for high-performance and luxury.',
    href: '/cushions-soft-furnishings',
    imageSrc: '/images/IMG-D.webp',
    imageAlt: 'Upholstery and cushion detail',
    imageClass: 'object-cover',
  },
  {
    title: 'Hardware & Trimmings',
    description:
      'Premium silent tracks and 1000s of artisanal trimmings to resolve every detail.',
    href: '/trimmings',
    imageSrc: '/images/carousel/09-Curtain-Track.webp',
    imageAlt: 'Curtain track section detail',
    imageClass: 'object-contain p-10',
  },
  {
    title: 'Integrated Supply Chain',
    description:
      '4-week manufacturing turnaround. Global capacity with local Sydney accountability.',
    href: '/about',
    imageSrc: '/images/carousel/12-Product.webp',
    imageAlt: 'Technical product and production reference',
    imageClass: 'object-contain p-10',
  },
  {
    title: 'The Lowest Price Guarantee',
    description:
      'Factory-direct ownership ensures the best value for Designers, Builders, and Developers.',
    href: '/trade-projects',
    imageSrc: '/images/about-hero.webp',
    imageAlt: 'Local team collaboration and accountable project partnership',
    imageClass: 'object-cover',
  },
] as const;

const STRATEGIC_PARTNERS = [
  'LuxAura',
  'Prestigious Textiles',
  'Mobus',
  'Sunbrella',
  'FibreGuard',
  'Curated Asian Ranges',
] as const;

const WHY_PILLARS = [
  {
    label: 'Supply',
    title: 'The Power of Direct Source.',
    description:
      'We remove intermediary markups. Through our own range and deep relationships with leading global mills, we keep pricing control from raw material to final delivery.',
  },
  {
    label: 'Craft',
    title: 'Master-Grade Fabrication.',
    description:
      'We do not merely produce. We protect the standard of the work, from complex Roman blind construction to precise sewing for trims, fringes and fine finishing.',
  },
  {
    label: 'Logic',
    title: 'Total Project Fulfillment.',
    description:
      'Stop fragmented procurement. We integrate fabrics, hardware, trims and fabrication into a single path, so one partner can resolve the full soft-furnishing package.',
  },
  {
    label: 'Trust',
    title: 'Accountable & Local.',
    description:
      'Backed by a Sydney family-business mindset and global manufacturing efficiency, we stand behind both the lowest price guarantee and the final local accountability.',
  },
] as const;

const TRUST_BAR = [
  { name: 'Sunbrella', note: 'Official Partner' },
  { name: 'OEKO-TEX', note: 'Standard 100' },
  { name: 'Dongli Art Textile', note: 'Artisanal Trim Craft' },
  { name: 'Australian Family-Owned', note: 'Local Accountability' },
] as const;

export const metadata: Metadata = {
  title: 'From Fabric Selection to Full Project Delivery | LuxAura Sydney',
  description:
    'Sydney’s integrated hub for premium textiles, master fabrication and strategic soft-furnishing fulfillment.',
  keywords:
    'Soft furnishing fulfillment Sydney, premium textiles Sydney, custom fabrication Sydney, designer curtain manufacturer, trade fabric supplier Sydney',
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
      <section className="relative overflow-hidden px-4 pb-24 pt-28 sm:px-6 sm:pb-28 sm:pt-36 lg:px-8 lg:pb-[9.5rem] lg:pt-44">
        <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top_left,_rgba(212,187,145,0.46),_transparent_40%),radial-gradient(circle_at_top_right,_rgba(39,67,58,0.12),_transparent_34%),linear-gradient(180deg,_#f8f3ea_0%,_rgba(248,243,234,0)_100%)]" />
        <div className="container-custom">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] xl:gap-14">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-primary/70">
                Strategic Fulfillment Framework
              </p>
              <h1 className="max-w-3xl text-balance font-heading text-[3.3rem] font-semibold leading-[0.92] tracking-tight text-[#2C2C2C] sm:text-[4.5rem] lg:text-[5rem] xl:text-[5.5rem]">
                From Fabric Selection to Full Project Delivery.
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-[1.6] text-neutral-700 sm:text-[1.55rem]">
                Sydney&apos;s integrated hub for premium textiles, master fabrication, and
                strategic soft-furnishing fulfillment.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link href={REQUEST_CATALOGUE_HREF} className="btn-primary">
                  Register Trade Account
                </Link>
                <Link href={GET_QUOTE_HREF} className="btn-secondary">
                  Get A Project Quote
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-[2.2rem] border border-white/75 bg-white/70 p-3 shadow-[0_30px_90px_rgba(26,24,22,0.14)] backdrop-blur">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem]">
                  <Image
                    src="/images/IMG-B.webp"
                    alt="Curtain trim and tassel detail"
                    fill
                    priority
                    sizes="(min-width: 1024px) 44vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(15,19,17,0.04)_0%,_rgba(15,19,17,0.28)_100%)]" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-[#17211dcc] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ead7a8] backdrop-blur-md">
                    Trimming Detail
                  </div>
                </div>
              </div>

              <div className="absolute -left-2 bottom-8 w-[42%] rounded-[1.6rem] border border-white/80 bg-white/88 p-2 shadow-[0_22px_60px_rgba(26,24,22,0.12)] backdrop-blur sm:-left-6">
                <div className="relative aspect-[1/1] overflow-hidden rounded-[1.2rem]">
                  <Image
                    src="/images/IMG-D.webp"
                    alt="Cushion fabrication detail"
                    fill
                    sizes="(min-width: 1024px) 16vw, 36vw"
                    className="object-cover"
                  />
                </div>
                <p className="px-2 pb-2 pt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70">
                  Cushion Finish
                </p>
              </div>

              <div className="absolute -right-2 top-8 w-[34%] rounded-[1.6rem] border border-white/80 bg-[#eef1f3] p-2 shadow-[0_22px_60px_rgba(26,24,22,0.1)] sm:-right-6">
                <div className="relative aspect-[1/1] overflow-hidden rounded-[1.2rem]">
                  <Image
                    src="/images/carousel/09-Curtain-Track.webp"
                    alt="Track section detail"
                    fill
                    sizes="(min-width: 1024px) 14vw, 30vw"
                    className="object-contain p-4"
                  />
                </div>
                <p className="px-2 pb-2 pt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70">
                  Track Section
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8 lg:pb-[9.5rem]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Capability Grid"
            title="What LuxAura can resolve"
            description="Direct, visual and structured for project teams who need to know what is covered before they inquire."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {CAPABILITY_TILES.map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                className="group overflow-hidden rounded-[2rem] border border-white/75 bg-white/80 shadow-[0_24px_70px_rgba(26,24,22,0.08)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_30px_90px_rgba(26,24,22,0.14)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#eef1f2]">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className={`transition duration-700 ease-out group-hover:scale-[1.04] ${item.imageClass}`}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(12,16,14,0.02)_0%,_rgba(12,16,14,0.16)_100%)]" />
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
            <Link href={REQUEST_CATALOGUE_HREF} className="btn-primary">
              Register Trade Account
            </Link>
            <Link href={GET_QUOTE_HREF} className="btn-secondary">
              Get A Project Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8 lg:pb-[9.5rem]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Strategic Brand Partners"
            title="Global mills and trusted ranges in one fulfillment path"
            description="A restrained brand wall that signals range without turning the homepage into a catalogue."
            align="center"
          />
          <div className="mt-10 rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-[0_22px_70px_rgba(26,24,22,0.06)] backdrop-blur sm:p-8">
            <div className="grid gap-4 min-[480px]:grid-cols-2 xl:grid-cols-6">
              {STRATEGIC_PARTNERS.map(partner => (
                <div
                  key={partner}
                  className="flex min-h-[92px] items-center justify-center rounded-[1.4rem] border border-neutral-200/80 bg-[#fafaf9] px-4 py-4 text-center saturate-0"
                >
                  <span className="font-heading text-[1.55rem] font-semibold leading-tight text-neutral-500">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8 lg:pb-[9.5rem]">
        <div className="container-custom">
          <div className="rounded-[2.25rem] border border-[#ece7dd] bg-[#f9f9f9] p-8 shadow-[0_24px_70px_rgba(26,24,22,0.06)] sm:p-10 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/68">
              Why LuxAura
            </p>
            <h2 className="mt-5 text-balance font-heading text-[3rem] font-semibold leading-[0.95] tracking-tight text-[#2C2C2C] sm:text-[4.25rem] lg:text-[4.8rem]">
              WHY LUXAURA
            </h2>
            <p className="mt-6 max-w-3xl text-pretty text-base leading-8 text-neutral-700 sm:text-lg">
              After capability comes logic. These are the four reasons project partners move
              to LuxAura when they need supply control, fabrication standard and local
              accountability in one place.
            </p>

            <div className="mt-10 grid gap-5 min-[520px]:grid-cols-2 xl:grid-cols-4">
              {WHY_PILLARS.map(pillar => (
                <article
                  key={pillar.title}
                  className="rounded-[1.75rem] border border-[#e7dfd2] bg-white p-6 shadow-[0_16px_40px_rgba(26,24,22,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(26,24,22,0.08)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/65">
                    {pillar.label}
                  </p>
                  <h3 className="mt-4 text-balance font-heading text-3xl font-semibold text-[#2C2C2C]">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href={REQUEST_CATALOGUE_HREF} className="btn-primary">
                Register Trade Account
              </Link>
              <Link href={GET_QUOTE_HREF} className="btn-secondary">
                Get A Project Quote
              </Link>
            </div>

            <div className="mt-12 border-t border-neutral-200/80 pt-8">
              <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
                Brand & Trust
              </p>
              <div className="mt-6 grid gap-4 min-[480px]:grid-cols-2 xl:grid-cols-4">
                {TRUST_BAR.map(item => (
                  <article
                    key={item.name}
                    className="flex min-h-[98px] flex-col justify-center rounded-[1.4rem] border border-neutral-200 bg-white/88 px-5 py-4 text-center text-neutral-500 saturate-0"
                  >
                    <p className="font-heading text-2xl font-semibold leading-tight text-neutral-600">
                      {item.name}
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-neutral-400">
                      {item.note}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
