import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import FaqSection from '@/components/FaqSection';
import ImageCodeBadge from '@/components/ImageCodeBadge';
import SectionHeading from '@/components/SectionHeading';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { generateFaqSchema } from '@/lib/faq-schema';
import { getReplacementImageSrc } from '@/lib/image-replacements';
import { TRADE_PORTAL_ACCESS_HREF, TRADE_SUPPORT_HREF, WINDOW_TREATMENTS_FAQ } from '@/lib/site-data';

const CURTAIN_STYLES = [
  {
    title: 'S-Fold Curtains',
    description: 'Clean, continuous wave',
    code: 'LXA-WIN-02',
    imageSrc: getReplacementImageSrc('LXA-WIN-02', '/images/luxaura/window-styles/s-fold.webp'),
    imageAlt: 'S-Fold curtains with continuous wave folds in a calm architectural interior',
  },
  {
    title: 'Double Pinch Pleat',
    description: 'Structured and tailored',
    code: 'LXA-WIN-03',
    imageSrc: getReplacementImageSrc('LXA-WIN-03', '/images/luxaura/window-styles/double-pinch-pleat.webp'),
    imageAlt: 'Double pinch pleat curtains in a refined European-style room',
  },
  {
    title: 'Pencil Pleat',
    description: 'Soft and gathered',
    code: 'LXA-WIN-07',
    imageSrc: getReplacementImageSrc('LXA-WIN-07', '/images/luxaura/window-styles/pencil-pleat.webp'),
    imageAlt: 'Pencil pleat curtains with a traditional gathered heading style',
  },
  {
    title: 'Eyelet Curtains',
    description: 'Modern and minimal',
    code: 'LXA-WIN-06',
    imageSrc: getReplacementImageSrc('LXA-WIN-06', '/images/luxaura/window-styles/eyelet.webp'),
    imageAlt: 'Eyelet curtains with visible ring-top heading on a wall-mounted rod',
  },
] as const;

const TRACK_IMAGES = [
  {
    title: 'Concealed ceiling track',
    code: 'LXA-WIN-15',
    imageSrc: getReplacementImageSrc('LXA-WIN-15', '/images/luxaura/window-track/concealed-ceiling-track.webp'),
    imageAlt: 'Concealed ceiling-mounted track integrated into a clean architectural interior',
  },
  {
    title: 'Exposed track detail',
    code: 'LXA-WIN-16',
    imageSrc: getReplacementImageSrc('LXA-WIN-16', '/images/luxaura/window-track/wall-mounted-system.webp'),
    imageAlt: 'Wall-mounted curtain system shown in a premium residential installation',
  },
  {
    title: 'Double track system',
    code: 'LXA-WIN-17',
    imageSrc: getReplacementImageSrc('LXA-WIN-17', '/images/luxaura/window-track/double-track-system.webp'),
    imageAlt: 'Installed double-track curtain system combining sheer and drapery layers',
  },
  {
    title: 'Curved track',
    code: 'LXA-WIN-18',
    imageSrc: getReplacementImageSrc('LXA-WIN-18', '/images/luxaura/window-track/curved-custom-track.webp'),
    imageAlt: 'Custom curved curtain track condition wrapping a premium corner window',
  },
  {
    title: 'Hardware close-up',
    code: 'LXA-WIN-19',
    imageSrc: getReplacementImageSrc('LXA-WIN-19', '/images/luxaura/window-track/track-detail.webp'),
    imageAlt: 'Close-up of curtain hardware detailing and mounting finish',
  },
  {
    title: 'Installed track application',
    code: 'LXA-WIN-20',
    imageSrc: getReplacementImageSrc('LXA-WIN-20', '/images/luxaura/window-track/installed-track-with-curtain.webp'),
    imageAlt: 'Installed curtain system showing the relationship between track, heading and final drapery fall',
  },
] as const;

const ROMAN_STYLES = [
  'Flat Roman blinds',
  'Relaxed Roman blinds',
  'London Roman blinds',
  'Hobbled Roman blinds',
] as const;

const PERFORMANCE_ITEMS = [
  {
    title: 'Light Control',
    description: 'Sheer, light-filtering and full blockout',
  },
  {
    title: 'Thermal Performance',
    description: 'Lined curtains and layered construction',
  },
  {
    title: 'Acoustic Comfort',
    description: 'Dense fabrics and fuller curtain construction',
  },
] as const;

const CRAFT_ITEMS = [
  'Precision sewing',
  'Complex fabric handling',
  'Clean edge finishing',
  'Strong presentation standards',
  'Consistency across styles and scales',
] as const;

export const metadata: Metadata = {
  title: 'Window Treatments by LuxAura | Curtains, Roman Blinds and Track Systems',
  description:
    'LuxAura delivers complete window furnishing solutions across curtain styles, Roman blinds, integrated track systems, motorisation and controlled fabrication.',
  keywords: [
    'window treatments Sydney',
    'Roman blinds Sydney',
    'curtain tracks Sydney',
    'motorised curtains Sydney',
    'custom drapery Sydney',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/custom-curtains-sheers`,
  },
  openGraph: {
    title: 'Window Treatments by LuxAura | Curtains, Roman Blinds and Track Systems',
    description:
      'Complete window furnishing solutions across curtain styles, tracks, motorisation and fabrication.',
    url: `${SITE_CONFIG.url}/custom-curtains-sheers`,
    images: [getReplacementImageSrc('LXA-WIN-01', '/images/luxaura/hero-project.webp')],
  },
};

export default function WindowTreatmentsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Window Treatments', url: '/custom-curtains-sheers' },
  ]);
  const faqSchema = generateFaqSchema([...WINDOW_TREATMENTS_FAQ]);

  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <Image
          src={getReplacementImageSrc('LXA-WIN-01', '/images/luxaura/hero-project.webp')}
          alt="LuxAura window treatment hero with layered drapery and integrated systems"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <ImageCodeBadge code="LXA-WIN-01" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,16,15,0.72)_0%,rgba(13,16,15,0.56)_36%,rgba(13,16,15,0.16)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,16,15,0.12)_0%,rgba(13,16,15,0.34)_100%)]" />

        <div className="container-custom relative flex min-h-[86svh] items-end pb-16 pt-36 sm:pb-20 sm:pt-40">
          <div className="max-w-4xl text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ead7a8]">
              Window Treatments
            </p>
            <h1 className="mt-5 max-w-3xl text-balance font-heading text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Window Treatments by LuxAura
            </h1>
            <p className="mt-5 max-w-2xl text-balance font-heading text-[1.4rem] font-medium leading-[1.14] tracking-[-0.02em] text-white/92 sm:text-[2rem] sm:leading-[1.12]">
              Material, System and Craft — Delivered as One
            </p>
            <p className="mt-6 max-w-3xl text-pretty text-base leading-7 text-white/84 sm:text-xl sm:leading-8">
              From linen to Roman blinds, tracks and motorisation
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Window Treatments', href: '/custom-curtains-sheers' }]} />
      </div>

      <section id="curtain-styles" className="section-padding pt-6">
        <div className="container-custom">
          <SectionHeading eyebrow="Curtain Styles" title="Curtain Styles" description="Four core heading styles." />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {CURTAIN_STYLES.map(item => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[2rem] border border-[#e4dbc9] bg-white shadow-[0_22px_70px_rgba(22,18,12,0.08)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <ImageCodeBadge code={item.code} />
                </div>
                <div className="p-6 sm:p-7">
                  <h2 className="font-heading text-[2rem] font-semibold leading-[1.04] text-neutral-900">
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

      <section id="hardware-motorisation" className="section-padding pt-0">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Integrated Track Systems"
            title="Integrated Track Systems"
            description="Precision track systems for smooth operation and clean integration."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:gap-5">
            {TRACK_IMAGES.map(item => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[2rem] border border-[#e4dbc9] bg-white shadow-[0_22px_70px_rgba(22,18,12,0.08)]"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 1023px) 100vw, 33vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <ImageCodeBadge code={item.code} />
                </div>
                <div className="p-5 sm:p-6">
                  <h2 className="font-heading text-[1.7rem] font-semibold leading-[1.06] text-neutral-900 sm:text-[1.95rem]">
                    {item.title}
                  </h2>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-[#e4dbc9] bg-[#f8f3e8] p-5 text-sm leading-7 text-neutral-700 sm:text-base">
            Track Systems smooth and stable operation.
          </div>
        </div>
      </section>

      <section id="roman-blinds" className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.3rem] shadow-[0_28px_90px_rgba(20,24,22,0.14)]">
              <Image
                src={getReplacementImageSrc('LXA-WIN-12', '/images/luxaura/roman-blind-lounge.webp')}
                alt="Roman blind manufacturing shown in a premium installed interior"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
              <ImageCodeBadge code="LXA-WIN-12" />
            </div>

            <div>
              <SectionHeading
                eyebrow="Roman Blind Manufacturing"
                title="Roman Blinds"
                description="Precision-folded fabric system."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {ROMAN_STYLES.map(item => (
                  <article key={item} className="section-shell p-5">
                    <p className="text-sm leading-7 text-neutral-700 sm:text-base">{item}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="motorised-curtain-systems" className="section-padding pt-0">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2.3rem] bg-[#15110d] text-white shadow-[0_32px_90px_rgba(17,12,8,0.24)]">
            <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
              <div className="grid gap-4 p-4 sm:p-6 lg:p-8">
                <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10">
                  <Image
                    src={getReplacementImageSrc('LXA-WIN-10', '/images/IMG-I.webp')}
                    alt="Motorised curtain system suited to larger glazed openings"
                    fill
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="object-cover"
                  />
                  <ImageCodeBadge code="LXA-WIN-10" />
                </div>
              </div>

              <div className="p-8 sm:p-10 lg:p-14">
                <SectionHeading
                  eyebrow="Motorised Curtain Systems"
                  title="Motorisation"
                  description="Automated control and convenience."
                  theme="dark"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="performance-function" className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.3rem] shadow-[0_28px_90px_rgba(20,24,22,0.14)]">
              <Image
                src={getReplacementImageSrc('LXA-WIN-21', '/images/luxaura/beach-sheer.webp')}
                alt="Layered curtains and sheers supporting light control and comfort performance"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
              <ImageCodeBadge code="LXA-WIN-21" />
            </div>

            <div>
              <SectionHeading
                eyebrow="Performance & Function"
                title="Performance & Function"
                description="Achieved through layered curtain systems."
              />

              <div className="mt-8 grid gap-4">
                {PERFORMANCE_ITEMS.map(item => (
                  <article key={item.title} className="section-shell p-6 sm:p-7">
                    <h2 className="font-heading text-[1.95rem] font-semibold leading-[1.06] text-neutral-900">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-neutral-700 sm:text-base">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="designed-for-large-windows" className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
            <div className="relative aspect-[16/11] overflow-hidden rounded-[2.4rem] shadow-[0_30px_90px_rgba(18,22,20,0.16)]">
              <Image
                src={getReplacementImageSrc('LXA-WIN-22', '/images/luxaura/window-styles/large-windows.webp')}
                alt="Large-scale window treatment with full-height curtains, refined track integration and strong architectural proportions"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
              <ImageCodeBadge code="LXA-WIN-22" />
            </div>

            <div>
              <SectionHeading
                eyebrow="Designed for Large Windows"
                title="Designed for Large Windows"
                description="Full-height glazing, wide spans and clean control."
              />
            </div>
          </div>
        </div>
      </section>

      <section id="master-craft-finishing" className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.3rem] shadow-[0_28px_90px_rgba(20,24,22,0.14)]">
              <Image
                src={getReplacementImageSrc('LXA-WIN-08', '/images/IMG-C.webp')}
                alt="Tailored drapery finish with specialist sewing and presentation detail"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
              <ImageCodeBadge code="LXA-WIN-08" />
            </div>

            <div className="overflow-hidden rounded-[2.2rem] bg-[#163228] p-8 shadow-[0_30px_90px_rgba(17,27,24,0.18)] sm:p-10 lg:p-12">
              <SectionHeading
                eyebrow="Master Craft & Finishing"
                title="Master Craft & Finishing"
                description="Material knowledge and controlled fabrication."
                theme="dark"
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {CRAFT_ITEMS.map(item => (
                  <article key={item} className="rounded-[1.5rem] border border-white/12 bg-white/7 p-5">
                    <p className="text-sm leading-7 text-white">{item}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        items={[...WINDOW_TREATMENTS_FAQ]}
        title="Window treatment FAQ"
        description="Short answers on style, systems and scale."
      />

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2.2rem] border border-white/65 bg-[linear-gradient(135deg,rgba(197,160,89,0.16),rgba(255,255,255,0.84)_36%,rgba(197,160,89,0.08)_100%)] p-8 shadow-[0_28px_80px_rgba(32,24,12,0.08)] sm:p-10 lg:p-12">
            <div className="max-w-3xl">
              <p className="eyebrow">Final CTA</p>
              <h2 className="mt-4 text-balance font-heading text-4xl font-semibold text-neutral-900 sm:text-5xl">
                Trade & Project Enquiries
              </h2>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href={TRADE_PORTAL_ACCESS_HREF} className="btn-primary">
                Trade Account
              </Link>
              <Link href={TRADE_SUPPORT_HREF} className="btn-secondary">
                Project Enquiry
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
