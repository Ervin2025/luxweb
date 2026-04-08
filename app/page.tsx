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
    title: 'Hardware Systems',
    description:
      'Premium curtain tracks, motorised system planning and stronger installation logic for cleaner execution and better long-term performance.',
    href: '/hardware-systems',
    code: 'LXA-HOME-05',
    imageSrc: '/image/04.webp',
    imageAlt: 'LuxAura hardware systems capability image',
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

        <div className="container-custom relative flex min-h-[100svh] items-end px-4 pb-14 pt-32 max-[430px]:pb-12 max-[430px]:pt-28 sm:px-6 sm:pb-20 sm:pt-40 lg:px-8 lg:pb-24">
          <div className="max-w-[34rem] text-white sm:max-w-[38rem]" data-reveal="text">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#ead7a8]">
              Premium Trade Soft Furnishing
            </p>
            <h1 className="mt-5 text-balance font-heading text-[2.8rem] font-semibold leading-[0.96] tracking-[-0.045em] max-[430px]:text-[2.45rem] max-[430px]:leading-[0.98] sm:mt-6 sm:text-[4.55rem] sm:leading-[0.92] lg:text-[5.45rem] xl:text-[5.95rem]">
              From Fabric Selection to Full Project Delivery.
            </h1>
            <p className="mt-5 max-w-[32rem] text-pretty text-[0.99rem] leading-[1.72] text-white/86 max-[430px]:text-[0.94rem] max-[430px]:leading-[1.68] sm:mt-6 sm:max-w-[34rem] sm:text-[1.14rem] sm:leading-[1.75]">
              LuxAura brings together fabric sourcing, specialist fabrication, window
              treatments, upholstery, hardware and trims into one accountable trade supply path
              for residential, hospitality and commercial interiors.
            </p>

            <div className="mt-8 flex flex-col gap-3.5 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href={TRADE_PORTAL_ACCESS_HREF} className="btn-primary w-full sm:w-auto">
                Trade Portal Access
              </Link>
              <Link
                href={PROJECT_BRIEF_HREF}
                className="btn-secondary w-full border-white/20 bg-white/10 text-white hover:border-white hover:bg-white hover:text-primary sm:w-auto"
              >
                Submit a Project Brief
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 pt-24 sm:px-6 sm:pb-32 sm:pt-32 lg:px-8 lg:pb-[10rem] lg:pt-[10rem]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <SectionEyebrow>What We Deliver</SectionEyebrow>
            <h2 className="mt-4 text-balance font-heading text-[2.35rem] font-semibold leading-[1.02] tracking-[-0.035em] text-[#2C2C2C] max-[430px]:text-[2.1rem] sm:mt-5 sm:text-[4rem] sm:leading-[0.98] lg:text-[4.6rem]">
              One trade partner across sourcing, making and project execution
            </h2>
            <p className="mt-5 max-w-[42rem] text-pretty text-[0.98rem] leading-[1.72] text-neutral-700 sm:mt-6 sm:text-[1.06rem] sm:leading-[1.8]">
              Six connected capabilities that move a furnishing brief from selection through
              fabrication, detailing and final delivery with greater control.
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
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#ead7a8]">
                    {item.number}
                  </p>

                  <div className="max-w-[22rem]">
                    <h3 className="text-balance font-heading text-[1.7rem] font-semibold leading-[1.04] text-white max-[430px]:text-[1.5rem] sm:text-[2.3rem]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-pretty text-[14px] leading-7 text-white/78 max-[430px]:text-[13px] max-[430px]:leading-6 sm:mt-4 sm:text-[0.98rem] sm:leading-8">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[10rem]">
        <div className="container-custom">
          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/70 bg-[#e3ddd1] shadow-[0_28px_80px_rgba(27,24,20,0.08)] sm:aspect-[16/10] sm:rounded-[2.4rem]"
              data-reveal="image"
            >
              <Image
                src="/images/IMG-K.webp"
                alt="Filtered daylight across performance window treatments in a calm interior."
                fill
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="object-cover"
              />
              <ImageCodeBadge code="LXA-HOME-08" />
            </div>

            <div className="max-w-xl lg:pl-6" data-reveal="text">
              <SectionEyebrow>Performance</SectionEyebrow>
              <h2 className="mt-4 text-balance font-heading text-[2.35rem] font-semibold leading-[1.02] tracking-[-0.035em] text-[#2C2C2C] max-[430px]:text-[2.1rem] sm:mt-5 sm:text-[3.8rem] sm:leading-[1] lg:text-[4.35rem]">
                Performance for Modern Living
              </h2>
              <p className="mt-5 text-pretty text-[0.98rem] leading-[1.76] text-neutral-700 sm:mt-6 sm:text-[1.06rem] sm:leading-[1.85]">
                Selected textile ranges are designed for the realities of contemporary living,
                including homes with pets, children, and high daily use. With trusted names such as
                FibreGuard and Mobus, performance options include stain-resistant,
                water-repellent, and high-rub specifications without compromising visual
                refinement.
              </p>
              <div className="mt-6 rounded-[1.35rem] border border-[#e0d7c8] bg-[#faf7f0] px-5 py-4 sm:mt-7 sm:rounded-[1.5rem] sm:px-6 sm:py-5">
                <p className="text-pretty text-[14px] leading-7 text-neutral-600 sm:text-[0.98rem] sm:leading-8">
                  Where specified, OEKO-TEX Standard 100 certified options support more considered
                  material selection for modern homes and family living.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[10rem]">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl" data-reveal="text">
            <SectionEyebrow align="center">Strategic Brand Partners</SectionEyebrow>
            <h2 className="mt-4 text-center text-balance font-heading text-[2.35rem] font-semibold leading-[1.02] tracking-[-0.035em] text-[#2C2C2C] max-[430px]:text-[2.1rem] sm:mt-5 sm:text-[3.8rem] sm:leading-[1] lg:text-[4.3rem]">
              Strategic Brand Partners
            </h2>
            <p className="mx-auto mt-5 max-w-[42rem] text-center text-pretty text-[0.98rem] leading-[1.72] text-neutral-700 sm:mt-6 sm:text-[1.04rem] sm:leading-[1.8]">
              A curated network of premium textile and furnishing resources, aligned for project
              delivery.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[1.7rem] border border-[#ddd4c3] bg-[#ddd4c3] shadow-[0_20px_60px_rgba(27,24,20,0.04)] sm:mt-14 sm:rounded-[2rem]">
            <div className="grid gap-px min-[560px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {STRATEGIC_PARTNERS.map((partner, index) => (
                <div
                  key={partner.name}
                  data-reveal="card"
                  data-reveal-delay={String((index % 5) + 1)}
                  className="group flex min-h-[8rem] items-center justify-center bg-[#fbf8f2] px-5 py-6 text-center grayscale transition duration-300 hover:grayscale-0 max-[430px]:min-h-[7rem] max-[430px]:px-4 max-[430px]:py-5 sm:min-h-[9.5rem] sm:py-7"
                >
                  <div>
                    <p className="font-heading text-[1.35rem] font-semibold leading-tight text-neutral-500 transition group-hover:text-[#2C2C2C] max-[430px]:text-[1.15rem] sm:text-[1.6rem]">
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
        className="relative overflow-hidden px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[10rem]"
      >
        <div className="absolute inset-x-0 top-16 h-[24rem] bg-[radial-gradient(circle_at_12%_0%,rgba(201,177,136,0.26),transparent_42%),radial-gradient(circle_at_88%_18%,rgba(30,58,50,0.08),transparent_24%)]" />

        <div className="container-custom relative">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div className="max-w-lg" data-reveal="text">
              <SectionEyebrow>Why LuxAura</SectionEyebrow>
              <h2 className="mt-4 text-balance font-heading text-[2.8rem] font-semibold leading-[0.96] tracking-[-0.045em] text-[#2C2C2C] max-[430px]:text-[2.45rem] max-[430px]:leading-[0.98] sm:mt-5 sm:text-[4.75rem] sm:leading-[0.92] lg:text-[5.8rem]">
                WHY LUXAURA
              </h2>
              <p className="mt-5 text-pretty text-[0.98rem] leading-[1.76] text-neutral-700 sm:mt-6 sm:text-[1.06rem] sm:leading-[1.85]">
                LuxAura replaces fragmented procurement with one coordinated fulfillment model for
                fabrics, fabrication, hardware, trimmings, and project delivery.
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
            <ImageCodeBadge code="LXA-HOME-09" />
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
                  Bring LuxAura in when sourcing, fabrication, hardware and finishing detail need
                  to move through one commercially accountable project path.
                </p>
                <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:gap-4">
                  <Link href={TRADE_PORTAL_ACCESS_HREF} className="btn-primary w-full sm:w-auto">
                    Trade Portal Access
                  </Link>
                  <Link
                    href={TRADE_SUPPORT_HREF}
                    className="btn-secondary w-full border-white/20 bg-white/10 text-white hover:border-white hover:bg-white hover:text-primary sm:w-auto"
                  >
                    Access Trade Support
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
