import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import FaqSection from '@/components/FaqSection';
import QuickInquiryDialog from '@/components/QuickInquiryDialog';
import SectionHeading from '@/components/SectionHeading';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { generateFaqSchema } from '@/lib/faq-schema';

const CAPABILITY_ITEMS = [
  {
    title: 'Roman Blind Specialist',
    eyebrow: 'Our Signature Value',
    description:
      'Precision-made Roman blinds with lined, patterned and trim-accented detailing, delivered with tailored workmanship and factory-direct value.',
    imageSrc: '/images/luxaura/roman-blind-lounge.webp',
    imageAlt: 'LuxAura Roman blind fabrication in a tailored lounge setting',
  },
  {
    title: 'Modern S-Fold Drapes',
    eyebrow: 'Architectural Elegance',
    description:
      'Clean, continuous waves suited to Sydney’s large glazing, available in sheer, dim-out and full blockout fabric directions.',
    imageSrc: '/images/luxaura/hero-project.webp',
    imageAlt: 'Modern S-Fold drapes in a Sydney apartment',
  },
  {
    title: 'Bespoke Pleated Curtains',
    eyebrow: 'Master Tailoring',
    description:
      'Double and triple pinch pleats, box pleats and goblet headings give designer briefs the right depth, structure and decorative finish.',
    imageSrc: '/images/curtains-hero.webp',
    imageAlt: 'Bespoke pleated curtains with decorative tailoring',
  },
  {
    title: 'Functional Sheers',
    eyebrow: 'Light & Privacy',
    description:
      'A curated library of sheer textures that softens daylight, maintains privacy and keeps the room feeling open and refined.',
    imageSrc: '/images/luxaura/beach-sheer.webp',
    imageAlt: 'Functional sheer curtains filtering daylight',
  },
  {
    title: 'Double Tracking Systems',
    eyebrow: '24-Hour Versatility',
    description:
      'The Sydney staple: a soft sheer layer paired with a heavier drape for flexible privacy, light control and thermal comfort.',
    imageSrc: '/images/carousel/09-Curtain-Track.webp',
    imageAlt: 'Double tracking system for layered drapery',
  },
  {
    title: 'Pelmets & Valances',
    eyebrow: 'The Professional Finish',
    description:
      'Custom-shaped headers that conceal tracks, sharpen the architecture and complete the room with a more resolved finish.',
    imageSrc: '/images/luxaura/vertical-sheer-pool.webp',
    imageAlt: 'Decorative pelmets and valances paired with window treatments',
  },
] as const;

const TECHNICAL_EDGE_ITEMS = [
  {
    title: 'Complex Integration',
    description:
      'We integrate braids, fringes and other trims into curtains and Roman blinds with clean lines and accurate placement.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
        <path
          d="M4 7h16M4 12h10M4 17h16M17 10l3 2-3 2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Performance Linings',
    description:
      'Thermal, acoustic and 100% UV blockout lining options help tailor each treatment to Australian climate and room use.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
        <path
          d="M12 3v3m0 12v3m6.364-15.364-2.121 2.121M7.757 16.243l-2.12 2.121M21 12h-3M6 12H3m15.364 6.364-2.121-2.121M7.757 7.757 5.636 5.636M12 8a4 4 0 1 1 0 8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Motorisation Ready',
    description:
      'Every treatment can be prepared for premium systems including Somfy and Silent Gliss for seamless automated control.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
        <path
          d="M12 18.5a6.5 6.5 0 1 0-6.5-6.5M12 18.5h5.5M12 18.5v-4.25M7.5 8.5a8.5 8.5 0 0 1 12.02 0M5 6A12 12 0 0 1 19 6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

const DIRECT_ADVANTAGE_ITEMS = [
  {
    title: 'Direct-to-Source',
    description:
      'We manage sourcing, fabrication and coordination in one path, which removes unnecessary layers and keeps decisions clear.',
  },
  {
    title: 'Best Price Guarantee',
    description:
      'Designer-grade curtains and Roman blinds are delivered with factory-direct pricing and LuxAura’s best price guarantee.',
  },
  {
    title: 'Any Style, Any Scale',
    description:
      'From a single residential window to larger hospitality and commercial programs, the making capacity stays flexible.',
  },
] as const;

const FAQ_ITEMS = [
  {
    question: 'Can LuxAura handle difficult curtain and Roman blind briefs?',
    answer:
      'Yes. Complex headings, trim integration, layered systems and performance lining requirements are all part of the fabrication scope.',
  },
  {
    question: 'Do you quote both homes and larger projects?',
    answer:
      'Yes. LuxAura supports private homes, boutique accommodation, hospitality sites and wider commercial work.',
  },
  {
    question: 'Can motorisation be included from the start?',
    answer:
      'Yes. Manual and motorised systems can be planned together so tracks, controls and fabrication are aligned early.',
  },
] as const;

export const metadata: Metadata = {
  title: 'Window Treatments | Factory Direct Curtains and Roman Blinds Sydney',
  description:
    'Explore LuxAura window treatments across Roman blinds, S-Fold drapes, bespoke curtains and layered systems with factory-direct making in Sydney.',
  keywords: [
    'Custom Roman Blinds Sydney',
    'Factory Direct Curtains',
    'S-Fold Drapes',
    'Bespoke Window Treatments',
    'Trimming Integration',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/custom-curtains-sheers`,
  },
  openGraph: {
    title: 'Window Treatments | Factory Direct Curtains and Roman Blinds Sydney',
    description:
      'Factory-direct bespoke curtains and Roman blinds with master craftsmanship, custom detailing and project-ready support.',
    url: `${SITE_CONFIG.url}/custom-curtains-sheers`,
    images: ['/images/luxaura/hero-project.webp'],
  },
};

function ArrowUpRight() {
  return (
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
  );
}

export default function CustomCurtainsSheersPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Window Treatments', url: '/custom-curtains-sheers' },
  ]);
  const faqSchema = generateFaqSchema([...FAQ_ITEMS]);

  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/luxaura/hero-project.webp"
          alt="S-Fold curtains in a modern Sydney apartment"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,19,17,0.22)_0%,rgba(13,19,17,0.28)_18%,rgba(13,19,17,0.72)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(229,209,160,0.22),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(197,160,89,0.22),transparent_28%)]" />

        <div className="container-custom relative flex min-h-[86svh] items-end pb-16 pt-36 sm:pb-20 sm:pt-40">
          <div className="max-w-4xl text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ead7a8]">
              Window Treatments
            </p>
            <h1 className="mt-5 max-w-3xl text-balance font-heading text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Total Window Solutions, from Source to Sydney.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/86 sm:text-xl sm:leading-8">
              Factory-direct bespoke curtains and Roman blinds. We handle complex designs
              with master craftsmanship and thousands of custom options.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/quote" className="btn-primary">
                Get A Factory Quote
              </Link>
              <Link href="/contact" className="btn-secondary border-white/25 bg-white/12 text-white hover:bg-white/18 hover:text-white">
                Book A Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Window Treatments', href: '/custom-curtains-sheers' }]} />
      </div>

      <section className="section-padding pt-6">
        <div className="container-custom">
          <SectionHeading
            eyebrow="What We Do"
            title="Specialist fabrication across the window categories clients ask for most"
            description="Six core capabilities, each supported by custom fabrication, technical detailing and project-ready quoting."
          />

          <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 md:grid md:grid-cols-2 md:overflow-visible xl:grid-cols-3">
            {CAPABILITY_ITEMS.map(item => (
              <article
                key={item.title}
                className="group section-shell flex min-w-[86%] snap-center flex-col overflow-hidden md:min-w-0"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 767px) 86vw, (max-width: 1279px) 50vw, 33vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,16,14,0.02),rgba(11,16,14,0.58))]" />
                  <div className="absolute inset-x-5 bottom-5">
                    <p className="inline-flex rounded-full border border-white/18 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-white backdrop-blur-md">
                      {item.eyebrow}
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-heading text-3xl font-semibold text-neutral-900">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Link
                      href="#technical-edge"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-dark"
                    >
                      Learn More
                      <ArrowUpRight />
                    </Link>
                    <QuickInquiryDialog
                      styleName={item.title}
                      title={`Quick Quote: ${item.title}`}
                      subjectPrefix="Window Treatments Quick Quote"
                      enquiryType="window-treatments-quick-quote"
                      introText="Send the style and rough size. We will come back with the next step quickly."
                      className="px-5 py-3 text-[11px] sm:text-xs"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="technical-edge" className="section-padding pt-0">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2.2rem] bg-[#163228] p-8 shadow-[0_30px_90px_rgba(17,27,24,0.18)] sm:p-10 lg:p-14">
            <SectionHeading
              eyebrow="Technical Edge"
              title="Manufacturing strength behind the finish"
              description="Detailing, performance and motorisation are built into the fabrication conversation from the outset."
              theme="dark"
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {TECHNICAL_EDGE_ITEMS.map(item => (
                <article
                  key={item.title}
                  className="rounded-[1.7rem] border border-white/10 bg-white/7 p-6 text-white backdrop-blur-sm"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#ead7a8]/25 bg-white/10 text-[#ead7a8]">
                    {item.icon}
                  </div>
                  <h2 className="mt-6 font-heading text-3xl font-semibold">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-white/78 sm:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <SectionHeading
            eyebrow="LuxAura Direct"
            title="Why clients come to us direct"
            description="The value is not only style range. It is tighter sourcing, clearer quoting and stronger making control."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {DIRECT_ADVANTAGE_ITEMS.map(item => (
              <article key={item.title} className="section-shell p-7">
                <p className="eyebrow">Trust Signal</p>
                <h2 className="mt-4 font-heading text-3xl font-semibold text-neutral-900">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2.2rem] border border-white/65 bg-[linear-gradient(135deg,rgba(197,160,89,0.16),rgba(255,255,255,0.82)_36%,rgba(197,160,89,0.08)_100%)] p-8 shadow-[0_28px_80px_rgba(32,24,12,0.08)] sm:p-10 lg:p-12">
            <div className="max-w-3xl">
              <p className="eyebrow">Factory Quote</p>
              <h2 className="mt-4 text-balance font-heading text-4xl font-semibold text-neutral-900 sm:text-5xl">
                Ready to price curtains, Roman blinds or a full layered window package?
              </h2>
              <p className="mt-5 text-pretty text-[15px] leading-7 text-neutral-700 sm:text-lg">
                Bring us the style, dimensions and level of detailing required. We will align
                fabrics, fabrication and system options into one clear next step.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/quote" className="btn-primary">
                Get A Factory Quote
              </Link>
              <Link href="/contact" className="btn-secondary">
                Book A Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        items={[...FAQ_ITEMS]}
        title="Window treatment questions"
        description="A few practical answers before the brief moves into quoting, sampling or fabrication."
      />

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
