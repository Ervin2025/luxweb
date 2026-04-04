import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import { SITE_CONFIG } from '@/lib/constants';
import {
  GET_QUOTE_HREF,
  HOME_CATEGORY_LINKS,
  HOME_HERO_STATS,
  REQUEST_CATALOGUE_HREF,
} from '@/lib/site-data';

const WHY_PILLARS = [
  {
    title: 'Direct-to-Source Value',
    description:
      'Eliminating middlemen. We manage the entire path from global fabric sourcing to factory manufacturing, ensuring you receive the best factory-direct pricing in Sydney.',
  },
  {
    title: 'Unlimited Bespoke Craft',
    description:
      'We speak the language of design. From complex Roman blinds to intricate trimmings and fringes, our workshop handles any artisanal requirement with precision.',
  },
  {
    title: 'Performance & Safety',
    description:
      'Engineered for modern living. Our pet-friendly fabrics are water-repellent and scratch-resistant. Key textile ranges are supported by OEKO-TEX 100 certified standards for safer family use.',
  },
  {
    title: 'High-Efficiency Delivery',
    description:
      'Global capacity with local accountability. Most orders are manufactured within 4 weeks, while our Sydney-based team keeps each project aligned and on time.',
  },
] as const;

const TRUST_MARKS = [
  { name: 'Sunbrella', note: 'Official Partner' },
  { name: 'OEKO-TEX', note: 'Standard 100' },
  { name: 'Dongli Art Textile', note: 'Artisanal Trim Craft' },
  { name: 'Australian Family-Owned', note: 'Local Accountability' },
] as const;

export const metadata: Metadata = {
  title: 'Premium Fabrics & Soft Furnishing Solutions | LuxAura Sydney',
  description:
    'LuxAura is an Australian family-owned supplier of premium fabrics and custom soft furnishing products, combining global collections, specialty making and best-price project support.',
  keywords:
    'Wholesale Fabric Sydney, Designer Curtain Manufacturer, Roman Blind Specialist, FibreGuard Supplier Australia, Trade Fabric Supplier Sydney',
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
      <PageHero
        eyebrow="Premium Fabric Solution"
        title="Total Premium Textile Solution, from Source to Sydney."
        description="LuxAura is your one-stop destination for world-class custom soft furnishings. By combining an international library of thousands of premium fabrics and trimmings with our specialized global manufacturing, we fulfill any bespoke requirement, from simple elegance to the most complex designer briefs. Enjoy a seamless workflow and master craftsmanship, all backed by our 100% best-price guarantee."
        imageSrc="/images/luxaura/hero-project.webp"
        imageAlt="LuxAura Sydney project with Roman blinds and upholstery"
        stats={HOME_HERO_STATS}
      >
        <Link href={REQUEST_CATALOGUE_HREF} className="btn-primary">
          Register Trade Account
        </Link>
        <Link href={GET_QUOTE_HREF} className="btn-secondary">
          Request Quote
        </Link>
      </PageHero>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Core Capabilities"
            title="Six ways LuxAura supports the full brief"
            description="A clean view of the sourcing, fabrication, delivery and price advantages behind the LuxAura model."
          />

          <div className="mt-10 grid gap-6 xl:grid-cols-3">
            {HOME_CATEGORY_LINKS.map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                className="group section-shell flex h-full flex-col p-7 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_28px_80px_rgba(26,24,22,0.14)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-[1.35rem] border border-primary/10 bg-[linear-gradient(135deg,rgba(197,160,89,0.12),rgba(255,255,255,0.92))] text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
                  <CapabilityIcon index={index} />
                </div>
                <h2 className="mt-6 text-balance font-heading text-3xl font-semibold text-neutral-900">
                  {item.title}
                </h2>
                <p className="mt-4 flex-1 text-sm leading-7 text-neutral-700 sm:text-base">
                  {item.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:text-primary-dark">
                  Explore
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href={REQUEST_CATALOGUE_HREF} className="btn-primary">
              Register Trade Account
            </Link>
            <Link href={GET_QUOTE_HREF} className="btn-secondary">
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="rounded-[2.2rem] border border-[#ece7dd] bg-[#f9f9f9] p-8 shadow-[0_24px_70px_rgba(26,24,22,0.06)] sm:p-10 lg:p-12">
            <SectionHeading
              eyebrow="Why LuxAura?"
              title="Built on four practical advantages"
              description="These are the reasons designers, builders and project clients come to LuxAura early instead of patching together multiple suppliers."
            />

            <div className="mt-10 grid gap-5 min-[360px]:grid-cols-2 xl:grid-cols-4">
              {WHY_PILLARS.map((pillar, index) => (
                <article
                  key={pillar.title}
                  className="rounded-[1.7rem] border border-[#e8e0d2] bg-white p-6 shadow-[0_16px_40px_rgba(26,24,22,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(26,24,22,0.08)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/65">
                    Pillar {index + 1}
                  </p>
                  <h2 className="mt-4 text-balance font-heading text-3xl font-semibold text-neutral-900">
                    {pillar.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href={REQUEST_CATALOGUE_HREF} className="btn-primary">
                Register Trade Account
              </Link>
              <Link href={GET_QUOTE_HREF} className="btn-secondary">
                Request Quote
              </Link>
            </div>

            <div className="mt-10 border-t border-neutral-200/80 pt-8">
              <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
                Brand & Trust
              </p>
              <div className="mt-6 grid gap-4 min-[480px]:grid-cols-2 xl:grid-cols-4">
                {TRUST_MARKS.map(item => (
                  <article
                    key={item.name}
                    className="flex min-h-[92px] flex-col justify-center rounded-[1.4rem] border border-neutral-200 bg-white/85 px-5 py-4 text-center text-neutral-500 saturate-0"
                  >
                    <p className="font-heading text-2xl font-semibold tracking-[0.02em] text-neutral-600">
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

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2rem] bg-[#14221c] p-8 text-center text-white shadow-[0_28px_90px_rgba(20,25,21,0.18)] sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#dfc99f]">
              Final CTA
            </p>
            <h2 className="mt-4 font-heading text-4xl font-semibold sm:text-5xl">
              Bring LuxAura in before the brief fragments
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/78 sm:text-lg">
              Register for project pricing or move straight into a quote when fabrics, custom
              making and delivery need to stay under one roof.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href={REQUEST_CATALOGUE_HREF} className="btn-primary">
                Register Trade Account
              </Link>
              <Link
                href={GET_QUOTE_HREF}
                className="btn-secondary border-white/15 bg-white/10 text-white hover:border-white hover:bg-white hover:text-primary"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
