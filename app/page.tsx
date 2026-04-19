import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ImageCodeBadge from '@/components/ImageCodeBadge';
import { SITE_CONFIG } from '@/lib/constants';
import { getReplacementImageSrc } from '@/lib/image-replacements';
import { TRADE_PORTAL_ACCESS_HREF, TRADE_SUPPORT_HREF } from '@/lib/site-data';

const CAPABILITY_TILES = [
  {
    title: 'Fabric & Fabrication',
    description: 'Material direction and controlled making',
    href: '/collections',
    code: 'LXA-HOME-02',
    imageSrc: getReplacementImageSrc('LXA-HOME-02', '/image/01.webp'),
    imageAlt: 'LuxAura fabric and fabrication capability image',
  },
  {
    title: 'Window Treatments',
    description: 'Curtains, Roman blinds and integrated systems',
    href: '/custom-curtains-sheers',
    code: 'LXA-HOME-03',
    imageSrc: getReplacementImageSrc('LXA-HOME-03', '/image/02.webp'),
    imageAlt: 'LuxAura window treatments capability image',
  },
  {
    title: 'Bespoke Upholstery',
    description: 'Indoor, outdoor and performance-led',
    href: '/cushions-soft-furnishings',
    code: 'LXA-HOME-04',
    imageSrc: getReplacementImageSrc('LXA-HOME-04', '/image/03.webp'),
    imageAlt: 'LuxAura bespoke upholstery capability image',
  },
  {
    title: 'Trimmings',
    description: 'Decorative detail and finishing flexibility',
    href: '/decorative-trimmings',
    code: 'LXA-HOME-05',
    imageSrc: getReplacementImageSrc('LXA-HOME-05', '/image/04.webp'),
    imageAlt: 'LuxAura decorative trimming capability image',
  },
] as const;

const SIGNATURE_STRENGTHS = [
  {
    title: 'Roman Blinds, Made to a Higher Standard',
    description: 'Precision-built for design-led projects',
    code: 'LXA-HOME-09',
    imageSrc: getReplacementImageSrc('LXA-HOME-09', '/images/luxaura/roman-blind-lounge.webp'),
    imageAlt: 'Roman blind feature image in a quiet luxury interior',
  },
  {
    title: 'Signature Linen as a Core Material Strength',
    description: 'From sheers to upholstery weights',
    code: 'LXA-HOME-10',
    imageSrc: getReplacementImageSrc('LXA-HOME-10', '/images/luxaura/beach-sheer.webp'),
    imageAlt: 'Draped linen and sheer texture in a warm neutral interior setting',
  },
] as const;

const SUPPORT_BLOCKS = [
  {
    title: 'Trimmings & Decorative Detail',
    description: 'Detail-driven finishing',
  },
  {
    title: 'Hardware & Motorisation',
    description: 'Refined track systems and control',
  },
  {
    title: 'Project Support',
    description: 'Design-aware project coordination',
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
      <section className="relative isolate min-h-[100svh] overflow-hidden">
        <Image
          src={getReplacementImageSrc('LXA-HOME-01', '/image/hero.webp')}
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
            <h1 className="text-balance font-heading text-[2.8rem] font-semibold leading-[0.96] tracking-[-0.045em] max-[430px]:text-[2.45rem] max-[430px]:leading-[0.98] sm:text-[4.55rem] sm:leading-[0.92] lg:text-[5.45rem] xl:text-[5.95rem]">
              From Fabric Selection to Full Project Delivery
            </h1>
            <p className="mt-5 max-w-[32rem] text-pretty text-[0.99rem] leading-[1.72] text-white/86 max-[430px]:text-[0.94rem] max-[430px]:leading-[1.68] sm:mt-6 sm:max-w-[34rem] sm:text-[1.14rem] sm:leading-[1.75]">
              European Linen, global fabrics and precision fabrication
            </p>
          </div>
        </div>
      </section>

      <section id="capabilities" className="px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[10rem]">
        <div className="container-custom">
          <SectionEyebrow>Capabilities</SectionEyebrow>
          <h2 className="mt-4 text-balance font-heading text-[2.35rem] font-semibold leading-[1.02] tracking-[-0.035em] text-[#2C2C2C] max-[430px]:text-[2.1rem] sm:mt-5 sm:text-[4rem] sm:leading-[0.98] lg:text-[4.2rem]">
            Core capabilities
          </h2>

          <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-7 lg:grid-cols-2">
            {CAPABILITY_TILES.map(item => (
              <Link
                key={item.title}
                href={item.href}
                data-reveal="card"
                className="group relative min-h-[24rem] overflow-hidden rounded-[1.9rem] shadow-[0_24px_80px_rgba(27,24,20,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_100px_rgba(27,24,20,0.14)] max-[430px]:min-h-[22rem] max-[430px]:rounded-[1.55rem] sm:min-h-[31rem] sm:rounded-[2.2rem]"
              >
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                />
                <ImageCodeBadge code={item.code} />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,12,11,0.04)_0%,rgba(12,12,11,0.12)_38%,rgba(12,12,11,0.82)_100%)]" />

                <div className="relative flex h-full flex-col justify-end p-5 max-[430px]:p-4 sm:p-7">
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

      <section className="px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[10rem]">
        <div className="container-custom">
          <SectionEyebrow>Feature</SectionEyebrow>
          <h2 className="mt-4 text-balance font-heading text-[2.35rem] font-semibold leading-[1.02] tracking-[-0.035em] text-[#2C2C2C] max-[430px]:text-[2.1rem] sm:mt-5 sm:text-[3.7rem] sm:leading-[0.98] lg:text-[4rem]">
            Signature strengths
          </h2>

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
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-balance font-heading text-[2rem] font-semibold leading-[1.04] text-[#2C2C2C] max-[430px]:text-[1.75rem] sm:text-[2.5rem]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-pretty text-[14px] leading-7 text-neutral-700 sm:text-[0.98rem] sm:leading-8">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="support-blocks" className="px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[10rem]">
        <div className="container-custom">
          <SectionEyebrow>Support</SectionEyebrow>
          <h2 className="mt-4 text-balance font-heading text-[2.35rem] font-semibold leading-[1.02] tracking-[-0.035em] text-[#2C2C2C] max-[430px]:text-[2.1rem] sm:mt-5 sm:text-[3.8rem] sm:leading-[1] lg:text-[4rem]">
            Support blocks
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {SUPPORT_BLOCKS.map(point => (
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
                  Trade & Project Enquiries
                </h2>
                <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:gap-4">
                  <Link href={TRADE_PORTAL_ACCESS_HREF} className="btn-primary w-full sm:w-auto">
                    Trade Account
                  </Link>
                  <Link href={TRADE_SUPPORT_HREF} className="btn-secondary w-full sm:w-auto">
                    Project Enquiry
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
