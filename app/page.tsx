import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';
import { GET_QUOTE_HREF, REGISTER_TRADE_ACCOUNT_HREF } from '@/lib/site-data';

const CAPABILITY_TILES = [
  {
    number: '01',
    title: 'Fabric & Fabrication',
    description:
      'Our signature LuxAura range is paired with globally respected names including PT, Mobus, Sunbrella, and FibreGuard.',
    href: '/collections',
    imageSrc: '/images/luxaura/beach-sheer.webp',
    imageAlt: 'Sheer drapery and checked curtain fabric framed by coastal light.',
  },
  {
    number: '02',
    title: 'Master Window Treatments',
    description:
      'Precision-crafted curtains, sheers, and specialized Roman blinds, fabricated with in-house control.',
    href: '/custom-curtains-sheers',
    imageSrc: '/images/luxaura/roman-blind-lounge.webp',
    imageAlt: 'Roman blind installation with refined upholstery and calm interior detailing.',
  },
  {
    number: '03',
    title: 'Bespoke Upholstery',
    description:
      'Custom indoor and outdoor seating solutions engineered for performance, longevity, and refined finish.',
    href: '/cushions-soft-furnishings',
    imageSrc: '/images/luxaura/upholstery-pillows.webp',
    imageAlt: 'Upholstery fabric and cushion detailing on a tailored sofa arm.',
  },
  {
    number: '04',
    title: 'Hardware & Artisanal Trimmings',
    description:
      'Silent track systems and thousands of refined trimming options to resolve every detail with precision.',
    href: '/trimmings',
    imageSrc: '/images/IMG-G.webp',
    imageAlt: 'Curtain hardware and full-drop drapery detail in a restrained interior.',
  },
  {
    number: '05',
    title: 'Integrated Supply Chain',
    description:
      'Four-week manufacturing turnaround supported by global capacity and Sydney-based accountability.',
    href: '/about',
    imageSrc: '/images/luxaura/hero-project.webp',
    imageAlt: 'Completed project with layered drapery, upholstery, and delivery-ready finish.',
  },
  {
    number: '06',
    title: 'Direct Value Advantage',
    description:
      'Direct-source control delivers stronger pricing without compromising material quality or fabrication standards.',
    href: '/trade-projects',
    imageSrc: '/images/IMG-E.webp',
    imageAlt: 'Quiet drapery installation with generous light and controlled detailing.',
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
    "Sydney's integrated hub for premium textiles, master fabrication, and end-to-end soft-furnishing fulfillment for designers, builders, developers, and project partners.",
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
          src="/images/luxaura/hero-project.webp"
          alt="LuxAura project with layered curtains, custom upholstery, and coastal Sydney light."
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,12,11,0.74)_0%,rgba(13,12,11,0.58)_32%,rgba(13,12,11,0.18)_64%,rgba(13,12,11,0.06)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,12,11,0.16)_0%,rgba(13,12,11,0.34)_100%)]" />

        <div className="container-custom relative flex min-h-[100svh] items-end px-4 pb-16 pt-40 sm:px-6 sm:pb-20 sm:pt-44 lg:px-8 lg:pb-24">
          <div className="max-w-[38rem] text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#ead7a8]">
              Strategic Fulfillment Center
            </p>
            <h1 className="mt-6 text-balance font-heading text-[3.45rem] font-semibold leading-[0.92] tracking-[-0.035em] sm:text-[4.55rem] lg:text-[5.45rem] xl:text-[5.95rem]">
              From Fabric Selection to Full Project Delivery.
            </h1>
            <p className="mt-6 max-w-[34rem] text-pretty text-[1.06rem] leading-[1.75] text-white/86 sm:text-[1.14rem]">
              Sydney&rsquo;s integrated hub for premium textiles, master fabrication, and
              end-to-end soft-furnishing fulfillment.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link href={REGISTER_TRADE_ACCOUNT_HREF} className="btn-primary">
                Register Trade Account
              </Link>
              <Link
                href={GET_QUOTE_HREF}
                className="btn-secondary border-white/20 bg-white/10 text-white hover:border-white hover:bg-white hover:text-primary"
              >
                Get a Project Quote
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
              What We Deliver
            </h2>
            <p className="mt-6 max-w-[42rem] text-pretty text-[1rem] leading-[1.8] text-neutral-700 sm:text-[1.06rem]">
              Six connected capabilities that take a soft-furnishing brief from textile sourcing
              through fabrication, detail resolution, and coordinated delivery.
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
    </>
  );
}
