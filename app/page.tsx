import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ImageCodeBadge from '@/components/ImageCodeBadge';
import { SITE_CONFIG } from '@/lib/constants';
import { PROJECT_BRIEF_HREF, TRADE_PORTAL_ACCESS_HREF, TRADE_SUPPORT_HREF } from '@/lib/site-data';

const CAPABILITY_TILES = [
  {
    number: '01',
    title: 'Fabric & Fabrication',
    description:
      'Our signature LuxAura range is paired with globally respected names including PT, Mobus, Sunbrella, and FibreGuard.',
    href: '/collections',
    code: 'LXA-HOME-02',
    imageSrc: '/image/01.webp',
    imageAlt: 'LuxAura fabric and textile capability image',
  },
  {
    number: '02',
    title: 'Master Window Treatments',
    description:
      'Precision-crafted curtains, sheers, and specialized Roman blinds, fabricated with in-house control.',
    href: '/custom-curtains-sheers',
    code: 'LXA-HOME-03',
    imageSrc: '/image/02.webp',
    imageAlt: 'LuxAura window treatments capability image',
  },
  {
    number: '03',
    title: 'Bespoke Upholstery',
    description:
      'Custom indoor and outdoor seating solutions engineered for performance, longevity, and refined finish.',
    href: '/cushions-soft-furnishings',
    code: 'LXA-HOME-04',
    imageSrc: '/image/03.webp',
    imageAlt: 'LuxAura bespoke upholstery capability image',
  },
  {
    number: '04',
    title: 'Hardware & Artisanal Trimmings',
    description:
      'Silent track systems and thousands of refined trimming options to resolve every detail with precision.',
    href: '/trimmings',
    code: 'LXA-HOME-05',
    imageSrc: '/image/04.webp',
    imageAlt: 'LuxAura hardware and artisanal trimmings capability image',
  },
  {
    number: '05',
    title: 'Unified Supply Chain',
    description:
      'Sourcing, fabrication and project coordination aligned through one accountable process.',
    href: '/about',
    code: 'LXA-HOME-06',
    imageSrc: '/image/05.webp',
    imageAlt: 'LuxAura unified supply chain capability image',
  },
  {
    number: '06',
    title: 'Partner Excellence',
    description:
      'Trade responsiveness and project support designed for professionals managing real timelines and decisions.',
    href: '/trade-projects',
    code: 'LXA-HOME-07',
    imageSrc: '/image/06.webp',
    imageAlt: 'LuxAura partner excellence capability image',
  },
] as const;

const STRATEGIC_PARTNERS = [
  { name: 'LuxAura', note: 'Signature Range' },
  { name: 'Prestigious Textiles', note: 'UK' },
  { name: 'Mobus', note: 'UK' },
  { name: 'Sunbrella', note: 'USA' },
  { name: 'FibreGuard', note: 'EU' },
  { name: 'Curated Asian Ranges', note: 'Sourcing Depth' },
] as const;

const WHY_LUXAURA_PILLARS = [
  {
    number: '01',
    eyebrow: 'Supply',
    title: 'The Power of Direct Source.',
    description:
      'We reduce margin layering at the source. Through our own range and close alignment with leading textile partners, we retain pricing control from material selection to final delivery.',
  },
  {
    number: '02',
    eyebrow: 'Craft',
    title: 'Master-Grade Fabrication.',
    description:
      'We do not simply produce. We protect the standard of execution. From complex window systems to highly detailed trimming work, every piece is fabricated to meet premium Sydney project expectations.',
  },
  {
    number: '03',
    eyebrow: 'Logic',
    title: 'Total Project Fulfillment.',
    description:
      'Fragmented sourcing slows projects down. We integrate fabric, hardware, trimmings, and fabrication into one accountable path. One partner. One coordinated delivery model.',
  },
  {
    number: '04',
    eyebrow: 'Trust',
    title: 'Accountable & Local.',
    description:
      'Backed by a Sydney family business and supported by global production capability, we provide both cost confidence and local responsibility at the point of final delivery.',
  },
] as const;

export const metadata: Metadata = {
  title: 'From Fabric Selection to Full Project Delivery | LuxAura Sydney',
  description:
    "Sydney's integrated trade partner for fabric sourcing, specialist fabrication, window treatments, upholstery, hardware, trims, and accountable soft-furnishing delivery.",
  keywords:
    'Sydney soft furnishing fulfillment, premium textiles Sydney, master fabrication Sydney, trade window treatments Sydney, bespoke upholstery Sydney',
  alternates: {
    canonical: SITE_CONFIG.url,
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

        <div className="container-custom relative flex min-h-[100svh] items-end px-4 pb-16 pt-40 sm:px-6 sm:pb-20 sm:pt-44 lg:px-8 lg:pb-24">
          <div className="max-w-[38rem] text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#ead7a8]">
              Premium Trade Soft Furnishing
            </p>
            <h1 className="mt-6 text-balance font-heading text-[3.45rem] font-semibold leading-[0.92] tracking-[-0.035em] sm:text-[4.55rem] lg:text-[5.45rem] xl:text-[5.95rem]">
              From Fabric Selection to Full Project Delivery.
            </h1>
            <p className="mt-6 max-w-[34rem] text-pretty text-[1.06rem] leading-[1.75] text-white/86 sm:text-[1.14rem]">
              LuxAura brings together fabric sourcing, specialist fabrication, window
              treatments, upholstery, hardware and trims into one accountable trade supply path
              for residential, hospitality and commercial interiors.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link href={TRADE_PORTAL_ACCESS_HREF} className="btn-primary">
                Trade Portal Access
              </Link>
              <Link
                href={PROJECT_BRIEF_HREF}
                className="btn-secondary border-white/20 bg-white/10 text-white hover:border-white hover:bg-white hover:text-primary"
              >
                Submit a Project Brief
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-28 pt-28 sm:px-6 sm:pb-32 sm:pt-32 lg:px-8 lg:pb-[10rem] lg:pt-[10rem]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <SectionEyebrow>What We Deliver</SectionEyebrow>
            <h2 className="mt-5 text-balance font-heading text-[2.9rem] font-semibold leading-[0.98] tracking-[-0.03em] text-[#2C2C2C] sm:text-[4rem] lg:text-[4.6rem]">
              One trade partner across sourcing, making and project execution
            </h2>
            <p className="mt-6 max-w-[42rem] text-pretty text-[1rem] leading-[1.8] text-neutral-700 sm:text-[1.06rem]">
              Six connected capabilities that move a furnishing brief from selection through
              fabrication, detailing and final delivery with greater control.
            </p>
          </div>

          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {CAPABILITY_TILES.map(item => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative min-h-[31rem] overflow-hidden rounded-[2.2rem] shadow-[0_24px_80px_rgba(27,24,20,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_100px_rgba(27,24,20,0.14)]"
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

                <div className="relative flex h-full flex-col justify-between p-6 sm:p-7">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#ead7a8]">
                    {item.number}
                  </p>

                  <div className="max-w-[22rem]">
                    <h3 className="text-balance font-heading text-[2.1rem] font-semibold leading-[1.02] text-white sm:text-[2.3rem]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-pretty text-[15px] leading-8 text-white/78 sm:text-[0.98rem]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-28 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[10rem]">
        <div className="container-custom">
          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2.4rem] border border-white/70 bg-[#e3ddd1] shadow-[0_28px_80px_rgba(27,24,20,0.08)]">
              <Image
                src="/images/IMG-K.webp"
                alt="Filtered daylight across performance window treatments in a calm interior."
                fill
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="object-cover"
              />
              <ImageCodeBadge code="LXA-HOME-08" />
            </div>

            <div className="max-w-xl lg:pl-6">
              <SectionEyebrow>Performance</SectionEyebrow>
              <h2 className="mt-5 text-balance font-heading text-[2.8rem] font-semibold leading-[1] tracking-[-0.03em] text-[#2C2C2C] sm:text-[3.8rem] lg:text-[4.35rem]">
                Performance for Modern Living
              </h2>
              <p className="mt-6 text-pretty text-[1rem] leading-[1.85] text-neutral-700 sm:text-[1.06rem]">
                Selected textile ranges are designed for the realities of contemporary living,
                including homes with pets, children, and high daily use. With trusted names such as
                FibreGuard and Mobus, performance options include stain-resistant,
                water-repellent, and high-rub specifications without compromising visual
                refinement.
              </p>
              <div className="mt-7 rounded-[1.5rem] border border-[#e0d7c8] bg-[#faf7f0] px-6 py-5">
                <p className="text-pretty text-[15px] leading-8 text-neutral-600 sm:text-[0.98rem]">
                  Where specified, OEKO-TEX Standard 100 certified options support more considered
                  material selection for modern homes and family living.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-28 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[10rem]">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <SectionEyebrow align="center">Strategic Brand Partners</SectionEyebrow>
            <h2 className="mt-5 text-center text-balance font-heading text-[2.8rem] font-semibold leading-[1] tracking-[-0.03em] text-[#2C2C2C] sm:text-[3.8rem] lg:text-[4.3rem]">
              Strategic Brand Partners
            </h2>
            <p className="mx-auto mt-6 max-w-[42rem] text-center text-pretty text-[1rem] leading-[1.8] text-neutral-700 sm:text-[1.04rem]">
              A curated network of premium textile and furnishing resources, aligned for project
              delivery.
            </p>
          </div>

          <div className="mt-14 overflow-hidden rounded-[2rem] border border-[#ddd4c3] bg-[#ddd4c3] shadow-[0_20px_60px_rgba(27,24,20,0.04)]">
            <div className="grid gap-px min-[560px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {STRATEGIC_PARTNERS.map(partner => (
                <div
                  key={partner.name}
                  className="group flex min-h-[9.5rem] items-center justify-center bg-[#fbf8f2] px-5 py-7 text-center grayscale transition duration-300 hover:grayscale-0"
                >
                  <div>
                    <p className="font-heading text-[1.6rem] font-semibold leading-tight text-neutral-500 transition group-hover:text-[#2C2C2C]">
                      {partner.name}
                    </p>
                    <p className="mt-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-neutral-400 transition group-hover:text-primary/70">
                      {partner.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="why-luxaura"
        className="relative overflow-hidden px-4 pb-28 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[10rem]"
      >
        <div className="absolute inset-x-0 top-16 h-[24rem] bg-[radial-gradient(circle_at_12%_0%,rgba(201,177,136,0.26),transparent_42%),radial-gradient(circle_at_88%_18%,rgba(30,58,50,0.08),transparent_24%)]" />

        <div className="container-custom relative">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div className="max-w-lg">
              <SectionEyebrow>Why LuxAura</SectionEyebrow>
              <h2 className="mt-5 text-balance font-heading text-[3.55rem] font-semibold leading-[0.92] tracking-[-0.04em] text-[#2C2C2C] sm:text-[4.75rem] lg:text-[5.8rem]">
                WHY LUXAURA
              </h2>
              <p className="mt-6 text-pretty text-[1rem] leading-[1.85] text-neutral-700 sm:text-[1.06rem]">
                LuxAura replaces fragmented procurement with one coordinated fulfillment model for
                fabrics, fabrication, hardware, trimmings, and project delivery.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {WHY_LUXAURA_PILLARS.map(pillar => (
                <article
                  key={pillar.number}
                  className="rounded-[2rem] border border-[#e4dbc9] bg-white/68 p-7 shadow-[0_20px_60px_rgba(27,24,20,0.04)] backdrop-blur"
                >
                  <p className="font-heading text-[2.6rem] font-semibold leading-none text-primary/24">
                    {pillar.number}
                  </p>
                  <p className="mt-5 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-primary/66">
                    {pillar.eyebrow}
                  </p>
                  <h3 className="mt-3 text-balance font-heading text-[2rem] font-semibold leading-[1.05] text-[#2C2C2C]">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-pretty text-[15px] leading-8 text-neutral-700 sm:text-[0.98rem]">
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-28 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[10rem]">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-[2.4rem] shadow-[0_28px_90px_rgba(27,24,20,0.12)]">
            <Image
              src="/images/IMG-H.webp"
              alt="LuxAura project with layered drapery, upholstery and refined coastal light."
              fill
              sizes="100vw"
              className="object-cover"
            />
            <ImageCodeBadge code="LXA-HOME-09" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,12,11,0.84)_0%,rgba(13,12,11,0.66)_46%,rgba(13,12,11,0.18)_100%)]" />
            <div className="relative px-8 py-14 text-white sm:px-10 sm:py-16 lg:px-14 lg:py-20">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#ead7a8]">
                  Final CTA
                </p>
                <h2 className="mt-5 text-balance font-heading text-[2.9rem] font-semibold leading-[0.96] tracking-[-0.03em] text-white sm:text-[4rem] lg:text-[4.8rem]">
                  One partner. One pathway. A more resolved result.
                </h2>
                <p className="mt-6 max-w-2xl text-pretty text-[1rem] leading-[1.85] text-white/82 sm:text-[1.06rem]">
                  Bring LuxAura in when sourcing, fabrication, hardware and finishing detail need
                  to move through one commercially accountable project path.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link href={TRADE_PORTAL_ACCESS_HREF} className="btn-primary">
                    Trade Portal Access
                  </Link>
                  <Link
                    href={TRADE_SUPPORT_HREF}
                    className="btn-secondary border-white/20 bg-white/10 text-white hover:border-white hover:bg-white hover:text-primary"
                  >
                    Start a Trade Enquiry
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
