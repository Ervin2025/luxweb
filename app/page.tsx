import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ImageCodeBadge from '@/components/ImageCodeBadge';
import { SITE_CONFIG } from '@/lib/constants';
import {
  PROJECT_BRIEF_HREF,
  TRADE_PORTAL_ACCESS_HREF,
} from '@/lib/site-data';

const CAPABILITY_TILES = [
  {
    number: '01',
    title: 'Fabric & Fabrication',
    description:
      'Global textile sourcing paired with fabrication depth, allowing material selection to move directly into project-ready outcomes.',
    href: '/collections',
    code: 'LXA-HOME-02',
    imageSrc: '/image/01.webp',
    imageAlt: 'LuxAura fabric and fabrication capability image',
  },
  {
    number: '02',
    title: 'Master Window Treatments',
    description:
      'Curtains, sheers, Roman blinds and layered systems delivered with stronger craft control, cleaner detailing and site-aware execution.',
    href: '/custom-curtains-sheers',
    code: 'LXA-HOME-03',
    imageSrc: '/image/02.webp',
    imageAlt: 'LuxAura window treatments capability image',
  },
  {
    number: '03',
    title: 'Bespoke Upholstery',
    description:
      'Indoor and outdoor upholstery directions for seating, cushions and project-led furnishing pieces that need stronger finish quality.',
    href: '/cushions-soft-furnishings',
    code: 'LXA-HOME-04',
    imageSrc: '/image/03.webp',
    imageAlt: 'LuxAura bespoke upholstery capability image',
  },
  {
    number: '04',
    title: 'Hardware & Decorative Finishing',
    description:
      'Track systems, motorised direction and decorative detailing that help the furnishing layer resolve with greater control.',
    href: '/custom-curtains-sheers#hardware-motorisation',
    code: 'LXA-HOME-05',
    imageSrc: '/image/04.webp',
    imageAlt: 'LuxAura hardware and decorative finishing capability image',
  },
  {
    number: '05',
    title: 'Unified Supply Chain',
    description:
      'Direct source access, fabrication planning and coordinated delivery aligned through one accountable project pathway.',
    href: '/#supply-chain',
    code: 'LXA-HOME-06',
    imageSrc: '/image/05.webp',
    imageAlt: 'LuxAura unified supply chain capability image',
  },
  {
    number: '06',
    title: 'Partner Excellence',
    description:
      'Trade-facing support built for designers, builders, developers and furnishing-led clients working with real project timelines.',
    href: '/project-support',
    code: 'LXA-HOME-07',
    imageSrc: '/image/06.webp',
    imageAlt: 'LuxAura partner excellence capability image',
  },
] as const;

const WHY_LUXAURA_PILLARS = [
  {
    number: '01',
    eyebrow: 'Supply',
    title: 'The Power of Direct Source.',
    description:
      'LuxAura keeps sourcing, making and finishing decisions closer together, reducing fragmentation and creating stronger commercial control across the furnishing scope.',
  },
  {
    number: '02',
    eyebrow: 'Craft',
    title: 'Master-Grade Fabrication.',
    description:
      'From tailored drapery and Roman blinds to upholstery and decorative finishing, execution standards are protected through a more disciplined fabrication mindset.',
  },
  {
    number: '03',
    eyebrow: 'Logic',
    title: 'Total Project Fulfillment.',
    description:
      'Fabric, window treatments, upholstery, hardware and trimmings can move through one connected pathway instead of multiple disconnected suppliers.',
  },
  {
    number: '04',
    eyebrow: 'Trust',
    title: 'Accountable & Local.',
    description:
      'Sydney-facing communication and trade-aware support keep the brief commercially grounded while broader sourcing and production capacity stay behind it.',
  },
] as const;

const SUPPLY_CHAIN_POINTS = [
  {
    title: 'Direct source access',
    description:
      'Materials, systems and finishing layers are selected with stronger visibility across pricing, suitability and making potential.',
  },
  {
    title: 'Production strength',
    description:
      'Specialist fabrication capability supports curtain making, upholstery, decorative finishing and coordinated soft-furnishing execution.',
  },
  {
    title: 'Local accountability',
    description:
      'Sydney project support helps the brief stay aligned from sourcing and specification through to delivery readiness.',
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
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#ead7a8]">
              Premium Trade Soft Furnishing
            </p>
            <h1 className="mt-5 text-balance font-heading text-[2.8rem] font-semibold leading-[0.96] tracking-[-0.045em] max-[430px]:text-[2.45rem] max-[430px]:leading-[0.98] sm:mt-6 sm:text-[4.55rem] sm:leading-[0.92] lg:text-[5.45rem] xl:text-[5.95rem]">
              From Fabric Selection to Full Project Delivery
            </h1>
            <p className="mt-5 max-w-[32rem] text-pretty text-[0.99rem] leading-[1.72] text-white/86 max-[430px]:text-[0.94rem] max-[430px]:leading-[1.68] sm:mt-6 sm:max-w-[34rem] sm:text-[1.14rem] sm:leading-[1.75]">
              LuxAura supports designers, builders, stylists and project-led interiors through
              sourcing, fabrication, specialist finishing and more coordinated soft-furnishing
              execution.
            </p>

            <div className="mt-8 flex flex-col gap-3.5 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <a href="#capabilities" className="btn-primary w-full sm:w-auto">
                Explore Capabilities
              </a>
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

      <section
        id="capabilities"
        className="px-4 pb-24 pt-24 sm:px-6 sm:pb-32 sm:pt-32 lg:px-8 lg:pb-[10rem] lg:pt-[10rem]"
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <SectionEyebrow>What We Deliver</SectionEyebrow>
            <h2 className="mt-4 text-balance font-heading text-[2.35rem] font-semibold leading-[1.02] tracking-[-0.035em] text-[#2C2C2C] max-[430px]:text-[2.1rem] sm:mt-5 sm:text-[4rem] sm:leading-[0.98] lg:text-[4.6rem]">
              A structured soft-furnishing platform for sourcing, making and project delivery
            </h2>
            <p className="mt-5 max-w-[42rem] text-pretty text-[0.98rem] leading-[1.72] text-neutral-700 sm:mt-6 sm:text-[1.06rem] sm:leading-[1.8]">
              Six connected capabilities that help the furnishing brief move with greater clarity,
              stronger fabrication control and less downstream fragmentation.
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
                LuxAura is not only a fabric source or curtain maker. It is a more complete
                project-facing partner for sourcing, fabrication, decorative finishing and local
                accountability.
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
              <SectionEyebrow>Unified Supply Chain</SectionEyebrow>
              <h2 className="mt-4 text-balance font-heading text-[2.35rem] font-semibold leading-[1.02] tracking-[-0.035em] text-[#2C2C2C] max-[430px]:text-[2.1rem] sm:mt-5 sm:text-[3.8rem] sm:leading-[1] lg:text-[4.35rem]">
                Production strength that keeps the brief commercially and visually aligned
              </h2>
              <p className="mt-5 text-pretty text-[0.98rem] leading-[1.76] text-neutral-700 sm:mt-6 sm:text-[1.06rem] sm:leading-[1.85]">
                LuxAura connects direct source access, fabrication planning and Sydney-facing
                project support so the furnishing pathway stays clearer from material direction to
                delivery readiness.
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

      <section className="px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[10rem]">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-12">
            <div className="max-w-2xl">
              <SectionEyebrow>Trimmings</SectionEyebrow>
              <h2 className="mt-4 text-balance font-heading text-[2.35rem] font-semibold leading-[1.02] tracking-[-0.035em] text-[#2C2C2C] max-[430px]:text-[2.1rem] sm:mt-5 sm:text-[3.8rem] sm:leading-[1] lg:text-[4.2rem]">
                Decorative Detail That Completes the Scheme
              </h2>
              <p className="mt-5 text-pretty text-[0.98rem] leading-[1.76] text-neutral-700 sm:mt-6 sm:text-[1.06rem] sm:leading-[1.85]">
                LuxAura offers a broader trimming resource for designers and furnishing-led
                projects, supporting curtains, upholstery, cushions and decorative finishing
                layers with greater depth and individuality.
              </p>
              <div className="mt-8">
                <Link href="/decorative-trimmings" className="btn-primary">
                  Explore Trimmings
                </Link>
              </div>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/70 bg-[#ddd4c3] shadow-[0_24px_80px_rgba(26,24,22,0.08)] sm:rounded-[2.3rem]">
              <Image
                src="/images/IMG-B.webp"
                alt="Decorative trimming close-up with refined braid and drapery detail"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <ImageCodeBadge code="LXA-HOME-09" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[10rem]">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-center lg:gap-12">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/70 bg-[#ddd4c3] shadow-[0_24px_80px_rgba(26,24,22,0.08)] sm:rounded-[2.3rem]">
              <Image
                src="/images/about-hero.webp"
                alt="Designer material selection and project support scene"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <ImageCodeBadge code="LXA-HOME-10" />
            </div>

            <div className="max-w-2xl">
              <SectionEyebrow>Project Support</SectionEyebrow>
              <h2 className="mt-4 text-balance font-heading text-[2.35rem] font-semibold leading-[1.02] tracking-[-0.035em] text-[#2C2C2C] max-[430px]:text-[2.1rem] sm:mt-5 sm:text-[3.8rem] sm:leading-[1] lg:text-[4.2rem]">
                Beyond Supply: Project Support That Helps Interiors Move Forward
              </h2>
              <p className="mt-5 text-pretty text-[0.98rem] leading-[1.76] text-neutral-700 sm:mt-6 sm:text-[1.06rem] sm:leading-[1.85]">
                LuxAura supports designers, stylists, builders and project-led clients not only
                through sourcing and fabrication, but through clearer design development,
                procurement coordination and furnishing delivery support.
              </p>
              <div className="mt-8">
                <Link href="/project-support" className="btn-primary">
                  Explore Project Support
                </Link>
              </div>
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
          </div>
        </div>
      </section>
    </>
  );
}
