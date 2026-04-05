import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import FaqSection from '@/components/FaqSection';
import SectionHeading from '@/components/SectionHeading';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { generateFaqSchema } from '@/lib/faq-schema';
import { TRADE_PORTAL_ACCESS_HREF, TRADE_SUPPORT_HREF } from '@/lib/site-data';

const UPHOLSTERED_APPLICATIONS = [
  {
    title: 'Re-Upholstery',
    description:
      'Existing seating renewed through more considered textile choice, finish control and fabrication discipline.',
    imageSrc: '/images/luxaura/upholstery-pillows.webp',
    imageAlt: 'Re-upholstery application with refined textile and cushion detail',
  },
  {
    title: 'Cushions & Bolsters',
    description:
      'Soft accessories that carry the fabric story further, from decorative cushions to longer bolster forms.',
    imageSrc: '/images/IMG-D.webp',
    imageAlt: 'Custom cushions and bolsters with premium finish',
  },
  {
    title: 'Ottomans',
    description:
      'Padded forms that extend comfort, proportion and textile continuity into the wider furnishing scheme.',
    imageSrc: '/images/IMG-J.webp',
    imageAlt: 'Ottoman application in a premium interior',
  },
  {
    title: 'Bench Seats',
    description:
      'Built-in or tailored bench seating where fabric, comfort and room fit need to stay aligned.',
    imageSrc: '/images/IMG-K.webp',
    imageAlt: 'Bench seat application with controlled upholstery finish',
  },
  {
    title: 'Slipcovers & Loose Covers',
    description:
      'Tailored protective layers that preserve the upholstery direction while supporting easier everyday use.',
    imageSrc: '/images/IMG-G.webp',
    imageAlt: 'Slipcover and loose-cover upholstery direction',
  },
  {
    title: 'Upholstered Accessories',
    description:
      'Smaller textile-built pieces that help a room feel more complete, coordinated and materially resolved.',
    imageSrc: '/images/IMG-H.webp',
    imageAlt: 'Upholstered accessories and soft forms in a coastal interior',
  },
] as const;

const CAPABILITY_ITEMS = [
  {
    title: 'Custom Fabric Integration',
    description:
      'LuxAura carries the textile direction into seating, covers and smaller upholstered forms with stronger material control.',
  },
  {
    title: 'Comfort & Finish Alignment',
    description:
      'Upholstery decisions are not only visual. Comfort, use, proportion and final room balance are all considered together.',
  },
  {
    title: 'Decorative Detail Support',
    description:
      'Piping, trims, seam lines and softer detailing conditions can be integrated where the furnishing brief calls for more refinement.',
  },
] as const;

const FAQ_ITEMS = [
  {
    question: 'Can LuxAura work with existing furniture?',
    answer:
      'Yes. Re-upholstery and tailored loose covers can be considered where the existing piece is worth carrying forward.',
  },
  {
    question: 'Do you make cushions and custom seating as well?',
    answer:
      'Yes. Cushions, bench seats, ottomans and related soft-furnishing pieces all sit within the broader upholstery capability.',
  },
  {
    question: 'Can trims and decorative detailing be added to upholstery?',
    answer:
      'Yes. Piping, borders and other decorative support can be integrated where the brief calls for more detail resolution.',
  },
  {
    question: 'Can upholstery be matched to the wider room scheme?',
    answer:
      'Yes. LuxAura is built to carry a textile story across curtains, upholstery and smaller soft-furnishing outcomes with greater coherence.',
  },
] as const;

export const metadata: Metadata = {
  title: 'Bespoke Upholstery | Custom Soft-Furnishing Fabrication',
  description:
    'LuxAura extends textile direction beyond the window into upholstered seating, cushions, ottomans, bench seats and custom soft-furnishing pieces.',
  keywords:
    'bespoke upholstery Sydney, custom cushions Sydney, bench seating upholstery, ottoman upholstery, soft furnishing fabrication Sydney',
  alternates: {
    canonical: `${SITE_CONFIG.url}/cushions-soft-furnishings`,
  },
};

export default function CushionsSoftFurnishingsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Bespoke Upholstery', url: '/cushions-soft-furnishings' },
  ]);
  const faqSchema = generateFaqSchema([...FAQ_ITEMS]);

  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/luxaura/upholstery-pillows.webp"
          alt="Bespoke upholstery, cushions and soft furnishing texture"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,16,15,0.72)_0%,rgba(13,16,15,0.56)_36%,rgba(13,16,15,0.16)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,16,15,0.1)_0%,rgba(13,16,15,0.34)_100%)]" />

        <div className="container-custom relative flex min-h-[84svh] items-end pb-16 pt-36 sm:pb-20 sm:pt-40">
          <div className="max-w-4xl text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ead7a8]">
              Bespoke Upholstery
            </p>
            <h1 className="mt-5 max-w-3xl text-balance font-heading text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Fabric carried into form, comfort and daily use
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/86 sm:text-xl sm:leading-8">
              LuxAura extends textile direction beyond the window into upholstered seating,
              cushions, ottomans, bench seats and custom soft-furnishing pieces that complete the
              room with greater coherence.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href={TRADE_SUPPORT_HREF} className="btn-primary">
                Discuss a Project
              </Link>
              <a
                href="#applications"
                className="btn-secondary border-white/25 bg-white/12 text-white hover:bg-white/18 hover:text-white"
              >
                See Project Applications
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Bespoke Upholstery', href: '/cushions-soft-furnishings' }]} />
      </div>

      <section id="applications" className="section-padding pt-6">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Upholstered Applications"
            title="Custom textile outcomes beyond the window"
            description="A broader upholstery and soft-furnishing capability shaped for residential, hospitality and more layered interior briefs."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {UPHOLSTERED_APPLICATIONS.map(item => (
              <article key={item.title} className="group section-shell overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden border-b border-primary/10">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 1023px) 100vw, 33vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,14,13,0.04)_0%,rgba(12,14,13,0.2)_100%)]" />
                </div>
                <div className="p-7">
                  <h2 className="font-heading text-3xl font-semibold text-neutral-900">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Tailored Comfort"
                title="Where softness, structure and finish meet"
                description="Upholstery is not only about recovering a piece. It is about proportion, edge detail, comfort, use, room balance and how fabric performs in everyday life."
              />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2.3rem] shadow-[0_28px_90px_rgba(20,24,22,0.12)]">
              <Image
                src="/images/IMG-H.webp"
                alt="Upholstered seating, layered curtains and tactile soft forms"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2.2rem] bg-[#163228] p-8 shadow-[0_30px_90px_rgba(17,27,24,0.18)] sm:p-10 lg:p-12">
            <SectionHeading
              eyebrow="Upholstery Capability"
              title="Built for more than simple recovering"
              description="The value is in how LuxAura carries textile direction into comfort, finish and more coordinated room outcomes."
              theme="dark"
            />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {CAPABILITY_ITEMS.map(item => (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/12 bg-white/7 p-5"
                >
                  <h2 className="font-heading text-3xl font-semibold text-white">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-white/78">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        items={[...FAQ_ITEMS]}
        title="Questions on upholstery and custom furnishing"
        description="A concise answer set covering re-upholstery, detailing and how the textile story carries into the room."
      />

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2.2rem] border border-white/65 bg-[linear-gradient(135deg,rgba(197,160,89,0.16),rgba(255,255,255,0.82)_36%,rgba(197,160,89,0.08)_100%)] p-8 shadow-[0_28px_80px_rgba(32,24,12,0.08)] sm:p-10 lg:p-12">
            <div className="max-w-3xl">
              <p className="eyebrow">Final CTA</p>
              <h2 className="mt-4 text-balance font-heading text-4xl font-semibold text-neutral-900 sm:text-5xl">
                Carry the textile story beyond the window
              </h2>
              <p className="mt-5 text-pretty text-[15px] leading-7 text-neutral-700 sm:text-lg">
                Bring LuxAura in when seating, cushions and soft forms need to sit within the same
                furnishing language as the wider project.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href={TRADE_SUPPORT_HREF} className="btn-primary">
                Discuss a Project
              </Link>
              <Link href={TRADE_PORTAL_ACCESS_HREF} className="btn-secondary">
                Trade Portal Access
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
