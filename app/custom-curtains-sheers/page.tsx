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
import {
  TRADE_PORTAL_ACCESS_HREF,
  TRADE_SUPPORT_HREF,
  WINDOW_TREATMENTS_FAQ,
} from '@/lib/site-data';

type CurtainHeadingProfile =
  | 's-fold'
  | 'double-pinch'
  | 'single-pleat'
  | 'box-pleat'
  | 'eyelet'
  | 'pencil-pleat';

const CURTAIN_STYLES = [
  {
    title: 'S Fold',
    profile: 's-fold' as CurtainHeadingProfile,
    code: 'LXA-WIN-02',
    description: 'Clean, continuous wave folds ideal for modern interiors and large-scale glazing.',
    imageSrc: getReplacementImageSrc('LXA-WIN-02', '/images/luxaura/window-styles/s-fold.webp'),
    imageAlt: 'S-Fold curtains with continuous wave folds in a calm architectural interior',
  },
  {
    title: 'Double Pinch Pleat',
    profile: 'double-pinch' as CurtainHeadingProfile,
    code: 'LXA-WIN-03',
    description:
      'A tailored, structured heading suited to more refined and formal interiors.',
    imageSrc: getReplacementImageSrc('LXA-WIN-03', '/images/luxaura/window-styles/double-pinch-pleat.webp'),
    imageAlt: 'Double pinch pleat curtains in a refined European-style room',
  },
  {
    title: 'Single Pleat',
    profile: 'single-pleat' as CurtainHeadingProfile,
    code: 'LXA-WIN-04',
    description:
      'A lighter pleated style that balances clean structure with a softer overall feel.',
    imageSrc: getReplacementImageSrc('LXA-WIN-04', '/images/luxaura/window-styles/single-pleat.webp'),
    imageAlt: 'Single pleat curtain styling in a softly lit European-style interior',
  },
  {
    title: 'Box Pleat',
    profile: 'box-pleat' as CurtainHeadingProfile,
    code: 'LXA-WIN-05',
    description:
      'Defined, architectural folds for interiors that require stronger structure and visual discipline.',
    imageSrc: getReplacementImageSrc('LXA-WIN-05', '/images/luxaura/window-styles/box-pleat.webp'),
    imageAlt: 'Box pleat curtain styling with stronger structure and tailored folds',
  },
  {
    title: 'Eyelet',
    profile: 'eyelet' as CurtainHeadingProfile,
    code: 'LXA-WIN-06',
    description:
      'A simpler heading style suited to more casual or straightforward curtain applications.',
    imageSrc: getReplacementImageSrc('LXA-WIN-06', '/images/luxaura/window-styles/eyelet.webp'),
    imageAlt: 'Eyelet curtains with visible ring-top heading on a wall-mounted rod',
  },
  {
    title: 'Pencil Pleat',
    profile: 'pencil-pleat' as CurtainHeadingProfile,
    code: 'LXA-WIN-07',
    description:
      'A traditional gathered heading that remains flexible across a wide range of window types.',
    imageSrc: getReplacementImageSrc('LXA-WIN-07', '/images/luxaura/window-styles/pencil-pleat.webp'),
    imageAlt: 'Pencil pleat curtains with a traditional gathered heading style',
  },
] as const;

const MASTER_CRAFT_POINTS = [
  {
    title: 'Precision sewing',
    description:
      'Specialist sewing workflows support cleaner headings, neater joins and stronger consistency across the finished treatment.',
  },
  {
    title: 'Complex fabric handling',
    description:
      'Heavier fabrics, fine linens and layered systems are handled with greater control so the final drape stays calm and properly weighted.',
  },
  {
    title: 'Clean edge finishing',
    description:
      'Hems, returns, leading edges and lining relationships are resolved with a stronger finishing standard rather than treated as hidden production detail.',
  },
  {
    title: 'Presentation standards',
    description:
      'Treatments are prepared for cleaner handover, stronger visual presentation and a more reliable finished result on site.',
  },
  {
    title: 'Consistency across styles and scales',
    description:
      'LuxAura applies the same fabrication discipline across sheers, formal drapery, Roman blinds and larger project-led programmes.',
  },
] as const;

const HARDWARE_TRACK_VISUALS = [
  {
    title: 'Minimal ceiling track',
    description:
      'Discreet ceiling-fixed systems that let the drapery line read quietly against the architecture.',
    code: 'LXA-WIN-15',
    imageSrc: getReplacementImageSrc('LXA-WIN-15', '/images/luxaura/window-track/concealed-ceiling-track.webp'),
    imageAlt: 'Concealed ceiling-mounted track integrated into a clean architectural interior',
    className: 'lg:col-span-2',
  },
  {
    title: 'Wall-mounted system',
    description:
      'Architectural exposed systems used where the mounting condition needs to stay visible and resolved.',
    code: 'LXA-WIN-16',
    imageSrc: getReplacementImageSrc('LXA-WIN-16', '/images/luxaura/window-track/wall-mounted-system.webp'),
    imageAlt: 'Wall-mounted curtain system shown in a premium residential installation',
    className: '',
  },
  {
    title: 'Double track layers',
    description:
      'Layered sheer and drapery systems coordinated for privacy, blackout support and cleaner day-to-night control.',
    code: 'LXA-WIN-17',
    imageSrc: getReplacementImageSrc('LXA-WIN-17', '/images/luxaura/window-track/double-track-system.webp'),
    imageAlt: 'Installed double-track curtain system combining sheer and drapery layers',
    className: '',
  },
  {
    title: 'Curved and custom track conditions',
    description:
      'Corner and shaped track solutions for bay windows, wrapped glazing and other more difficult openings.',
    code: 'LXA-WIN-18',
    imageSrc: getReplacementImageSrc('LXA-WIN-18', '/images/luxaura/window-track/curved-custom-track.webp'),
    imageAlt: 'Custom curved curtain track condition wrapping a premium corner window',
    className: '',
  },
  {
    title: 'Track detail and finish quality',
    description:
      'Closer attention to hardware detailing helps the finished curtain line look calmer and operate more smoothly over time.',
    code: 'LXA-WIN-19',
    imageSrc: getReplacementImageSrc('LXA-WIN-19', '/images/luxaura/window-track/track-detail.webp'),
    imageAlt: 'Close-up of curtain hardware detailing and mounting finish',
    className: '',
  },
  {
    title: 'Installed real-world application',
    description:
      'Track systems are selected for how they sit in the room once curtains are made, stacked and fully installed.',
    code: 'LXA-WIN-20',
    imageSrc: getReplacementImageSrc('LXA-WIN-20', '/images/luxaura/window-track/installed-track-with-curtain.webp'),
    imageAlt: 'Installed curtain system showing the relationship between track, heading and final drapery fall',
    className: 'lg:col-span-2',
  },
] as const;

const HARDWARE_TRACK_POINTS = [
  'Wide range of track profiles and configurations for cleaner visual alignment.',
  'Ceiling-mounted and wall-mounted systems suited to different site conditions.',
  'Curved and custom track capability for bay windows, corners and shaped openings.',
  'Smooth gliding performance designed for daily usability and longer-term reliability.',
  'Suitable for both light sheers and heavier drapery packages.',
  'Compatibility with motorisation pathways where automation is required.',
  'Strong price competitiveness for trade clients without collapsing finish quality.',
] as const;

const MOTORISATION_BLOCKS = [
  {
    title: 'Smooth automated operation',
    description:
      'Motorised curtain systems improve usability on wider openings and help larger treatments move with less manual strain and cleaner consistency.',
  },
  {
    title: 'Integrated with the track system',
    description:
      'Automation is planned with the supporting track, stack behaviour and installation condition so the final treatment stays visually controlled.',
  },
  {
    title: 'Project-ready value',
    description:
      'Light integration with trusted systems such as Somfy can be considered while keeping the overall package commercially sensible for trade clients.',
  },
] as const;

const ROMAN_BLIND_STYLES = [
  {
    title: 'Flat Roman Blind',
    description: 'Clean, structured lines for modern and more architectural interiors.',
  },
  {
    title: 'Relaxed Roman Blind',
    description: 'A softer bottom curve suited to elegant residential and furnishing-led project settings.',
  },
  {
    title: 'London Roman Blind',
    description: 'Tail-detail expression that adds decorative softness while still keeping a tailored look.',
  },
  {
    title: 'Hobbled Roman Blind',
    description: 'Permanent cascading folds that add depth, softness and stronger decorative character.',
  },
] as const;

const ROMAN_BLIND_CAPABILITY_POINTS = [
  'Premium linen suitability for softer, more tailored Roman blind expressions.',
  'Performance fabric suitability where practicality, durability or heavier use also matter.',
  'Custom sizing for more defined and smaller window areas where proportion is critical.',
  'Specialist lining options from decorative light-filtering to more controlled blockout.',
  'Trade-level workshop capability with reliable hardware integration and repeatable quality.',
] as const;

const PERFORMANCE_FUNCTION_BLOCKS = [
  {
    title: 'Light Control',
    description:
      'Sheer, light-filtering and full blockout options tailored to different interior needs.',
  },
  {
    title: 'Thermal Performance',
    description:
      'Improved thermal comfort through lined curtains and layered window treatment construction.',
  },
  {
    title: 'Acoustic Comfort',
    description:
      'Dense fabrics and fuller curtain construction can help improve comfort and soften sound within the room.',
  },
] as const;

const LARGE_WINDOW_POINTS = [
  'Full-height glazing support for more architectural residential and project interiors.',
  'Wide-span curtain capability aligned to stack, weight and drape behaviour.',
  'Integrated track solutions that keep larger openings visually cleaner.',
  'Motorisation pathways where scale or convenience makes automation more useful.',
  'Stronger visual control across larger curtain widths and more demanding openings.',
] as const;

function CurtainHeadingIllustration({ profile }: { profile: CurtainHeadingProfile }) {
  const commonStroke = '#6d6359';
  const accent = '#b89e72';

  if (profile === 's-fold') {
    return (
      <svg viewBox="0 0 220 72" className="h-16 w-full" aria-hidden="true">
        <path d="M14 18h192" stroke={accent} strokeWidth="4" strokeLinecap="round" />
        <path
          d="M18 54c12-28 28-28 40 0s28 28 40 0 28-28 40 0 28 28 40 0 28-28 40 0"
          fill="none"
          stroke={commonStroke}
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (profile === 'double-pinch') {
    return (
      <svg viewBox="0 0 220 72" className="h-16 w-full" aria-hidden="true">
        <path d="M14 16h192" stroke={accent} strokeWidth="4" strokeLinecap="round" />
        {[28, 68, 108, 148, 188].map(x => (
          <g key={x}>
            <path d={`M${x - 7} 18 L${x - 2} 54 L${x + 3} 18`} fill="none" stroke={commonStroke} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d={`M${x + 3} 18 L${x + 8} 54 L${x + 13} 18`} fill="none" stroke={commonStroke} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        ))}
      </svg>
    );
  }

  if (profile === 'single-pleat') {
    return (
      <svg viewBox="0 0 220 72" className="h-16 w-full" aria-hidden="true">
        <path d="M14 16h192" stroke={accent} strokeWidth="4" strokeLinecap="round" />
        {[30, 70, 110, 150, 190].map(x => (
          <path
            key={x}
            d={`M${x - 8} 18 L${x} 54 L${x + 8} 18`}
            fill="none"
            stroke={commonStroke}
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
      </svg>
    );
  }

  if (profile === 'box-pleat') {
    return (
      <svg viewBox="0 0 220 72" className="h-16 w-full" aria-hidden="true">
        <path d="M14 16h192" stroke={accent} strokeWidth="4" strokeLinecap="round" />
        {[24, 64, 104, 144, 184].map(x => (
          <path
            key={x}
            d={`M${x} 18h24v36h-24z`}
            fill="none"
            stroke={commonStroke}
            strokeWidth="4"
            strokeLinejoin="round"
          />
        ))}
      </svg>
    );
  }

  if (profile === 'eyelet') {
    return (
      <svg viewBox="0 0 220 72" className="h-16 w-full" aria-hidden="true">
        <path d="M18 20h184" stroke={accent} strokeWidth="6" strokeLinecap="round" />
        {[34, 66, 98, 130, 162, 194].map(x => (
          <g key={x}>
            <circle cx={x} cy={26} r="8" fill="none" stroke={commonStroke} strokeWidth="4" />
            <path d={`M${x - 8} 34c4 16 12 16 16 0`} fill="none" stroke={commonStroke} strokeWidth="4" strokeLinecap="round" />
          </g>
        ))}
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 220 72" className="h-16 w-full" aria-hidden="true">
      <path d="M14 16h192" stroke={accent} strokeWidth="4" strokeLinecap="round" />
      <path
        d="M18 26c14-12 28 12 42 0s28 12 42 0 28 12 42 0 28 12 42 0 28 12 42 0"
        fill="none"
        stroke={commonStroke}
        strokeWidth="4"
        strokeLinecap="round"
      />
      {[22, 34, 46, 58, 70, 82, 94, 106, 118, 130, 142, 154, 166, 178, 190].map(x => (
        <path
          key={x}
          d={`M${x} 26v28`}
          stroke={commonStroke}
          strokeWidth="3"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

export const metadata: Metadata = {
  title: 'Window Treatments by LuxAura | Curtains, Roman Blinds and Track Systems',
  description:
    'LuxAura delivers complete window furnishing solutions across curtain styles, integrated track systems, Roman blind manufacturing, motorised operation and master-level fabrication.',
  keywords: [
    'window treatments Sydney',
    'custom curtains Sydney',
    'Roman blinds Sydney',
    'motorised curtain systems',
    'layered sheers and drapery',
    'premium curtain fabrication Sydney',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/custom-curtains-sheers`,
  },
  openGraph: {
    title: 'Window Treatments by LuxAura | Curtains, Roman Blinds and Track Systems',
    description:
      'Curtain styles, integrated tracks, Roman blind expertise, motorised systems and refined fabrication in one more complete window furnishing pathway.',
    url: `${SITE_CONFIG.url}/custom-curtains-sheers`,
    images: [getReplacementImageSrc('LXA-WIN-01', '/images/luxaura/hero-project.webp')],
  },
};

export default function CustomCurtainsSheersPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Window Treatments', url: '/custom-curtains-sheers' },
  ]);
  const faqSchema = generateFaqSchema([...WINDOW_TREATMENTS_FAQ]);

  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <Image
          src={getReplacementImageSrc('LXA-WIN-01', '/images/luxaura/hero-project.webp')}
          alt="Layered curtains and sheers in a premium Sydney interior"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <ImageCodeBadge code="LXA-WIN-01" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,19,17,0.76)_0%,rgba(13,19,17,0.58)_36%,rgba(13,19,17,0.16)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,19,17,0.08)_0%,rgba(13,19,17,0.32)_100%)]" />

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
              From European Linen and British Fabrics to Precision Roman Blinds, Integrated Track
              Systems and Master-Level Fabrication
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href={TRADE_PORTAL_ACCESS_HREF} className="btn-primary">
                Trade Portal Access
              </Link>
              <Link href={TRADE_SUPPORT_HREF} className="btn-secondary">
                Project Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Window Treatments', href: '/custom-curtains-sheers' }]} />
      </div>

      <section id="curtain-styles" className="section-padding pt-6">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Curtain Styles"
            title="Curtain Styles"
            description="LuxAura supports a full range of curtain styles across modern, classic and project-led interiors — allowing designers and furnishing clients to select the right balance of proportion, movement, structure and finish."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {CURTAIN_STYLES.map(item => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[2rem] border border-[#e4dbc9] bg-white shadow-[0_22px_70px_rgba(22,18,12,0.08)]"
              >
                <div className="border-b border-[#eadfcb] bg-[#f7f0e2] px-5 py-4 sm:px-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary/64">
                    Heading Profile
                  </p>
                  <div className="mt-3">
                    <CurtainHeadingIllustration profile={item.profile} />
                  </div>
                </div>

                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <ImageCodeBadge code={item.code} />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,16,14,0.02),rgba(11,16,14,0.38)_100%)]" />
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
            title="Precision Track Systems for Smooth Operation and Clean Integration"
            description="LuxAura provides a wide range of curtain track systems designed for smooth movement, visual integration and dependable long-term use across residential and project applications. From discreet ceiling-mounted systems to double-track and curved track configurations, LuxAura supports both design intent and practical performance with strong variety and trade-level value."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:gap-5">
            {HARDWARE_TRACK_VISUALS.map(item => (
              <article
                key={item.title}
                className={`group overflow-hidden rounded-[2rem] border border-[#e4dbc9] bg-white shadow-[0_22px_70px_rgba(22,18,12,0.08)] ${item.className}`}
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
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,14,13,0.02),rgba(11,14,13,0.34)_100%)]" />
                </div>
                <div className="p-5 sm:p-6">
                  <h2 className="font-heading text-[1.7rem] font-semibold leading-[1.06] text-neutral-900 sm:text-[1.95rem]">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-neutral-700 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="section-shell p-7 sm:p-8 lg:p-10">
              <p className="eyebrow">System Capability</p>
              <h2 className="mt-4 text-balance font-heading text-4xl font-semibold text-neutral-900 sm:text-[2.8rem]">
                Complete track direction is part of the window outcome, not a late-stage add-on
              </h2>
              <p className="mt-5 text-sm leading-7 text-neutral-700 sm:text-base">
                LuxAura treats tracks as part of the finished furnishing system, allowing style,
                movement, stacking and installation logic to remain aligned from the outset.
              </p>
            </article>

            <div className="grid gap-4 sm:grid-cols-2">
              {HARDWARE_TRACK_POINTS.map(point => (
                <article
                  key={point}
                  className="rounded-[1.5rem] border border-[#e4dbc9] bg-[#f8f3e8] p-5"
                >
                  <p className="text-sm leading-7 text-neutral-700 sm:text-base">{point}</p>
                </article>
              ))}
            </div>
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
                title="One of LuxAura’s Key Specialisations"
                description="LuxAura delivers precision-built Roman blinds across a full range of styles, combining better textile selection, specialist construction and dependable workshop control. This category is one of LuxAura’s strongest manufacturing capabilities and should be positioned as a major advantage for both residential and project-led interiors."
              />
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="grid gap-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2.2rem] shadow-[0_24px_80px_rgba(20,24,22,0.12)]">
                <Image
                  src={getReplacementImageSrc('LXA-WIN-12', '/images/luxaura/roman-blind-lounge.webp')}
                  alt="Flat Roman blind installation in a premium interior with correct stacking and proportion"
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                />
                <ImageCodeBadge code="LXA-WIN-12" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem] shadow-[0_20px_70px_rgba(20,24,22,0.1)]">
                  <Image
                    src={getReplacementImageSrc('LXA-WIN-13', '/images/luxaura/roman-blind-lounge.webp')}
                    alt="Roman blind detail showing fold logic and stacking"
                    fill
                    sizes="(min-width: 1024px) 24vw, 100vw"
                    className="object-cover"
                  />
                  <ImageCodeBadge code="LXA-WIN-13" />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem] shadow-[0_20px_70px_rgba(20,24,22,0.1)]">
                  <Image
                    src={getReplacementImageSrc('LXA-WIN-14', '/images/luxaura/beach-sheer.webp')}
                    alt="Premium linen material direction suited to Roman blind fabrication"
                    fill
                    sizes="(min-width: 1024px) 24vw, 100vw"
                    className="object-cover"
                  />
                  <ImageCodeBadge code="LXA-WIN-14" />
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {ROMAN_BLIND_STYLES.map(item => (
                <article key={item.title} className="section-shell p-6 sm:p-7">
                  <h2 className="font-heading text-3xl font-semibold text-neutral-900">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ROMAN_BLIND_CAPABILITY_POINTS.map(point => (
              <article
                key={point}
                className="rounded-[1.5rem] border border-[#e4dbc9] bg-[#f8f3e8] p-5"
              >
                <p className="text-sm leading-7 text-neutral-700 sm:text-base">{point}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="motorised-curtain-systems" className="section-padding pt-0">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2.3rem] bg-[#15110d] text-white shadow-[0_32px_90px_rgba(17,12,8,0.24)]">
            <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
              <div className="grid gap-4 p-4 sm:p-6 lg:p-8">
                <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={getReplacementImageSrc('LXA-WIN-10', '/images/IMG-I.webp')}
                    className="h-full w-full object-cover"
                  >
                    <source src="/videos/motorisation-demo.mp4" type="video/mp4" />
                  </video>
                  <ImageCodeBadge code="LXA-WIN-09" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[1.8rem] border border-white/10">
                    <Image
                      src={getReplacementImageSrc('LXA-WIN-10', '/images/IMG-I.webp')}
                      alt="Motorised curtain system suited to larger glazed openings"
                      fill
                      sizes="(min-width: 1024px) 24vw, 100vw"
                      className="object-cover"
                    />
                    <ImageCodeBadge code="LXA-WIN-10" />
                  </div>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[1.8rem] border border-white/10">
                    <Image
                      src={getReplacementImageSrc('LXA-WIN-11', '/images/luxaura/hero-project.webp')}
                      alt="Layered curtain system showing a clean cord-free motorised presentation"
                      fill
                      sizes="(min-width: 1024px) 24vw, 100vw"
                      className="object-cover"
                    />
                    <ImageCodeBadge code="LXA-WIN-11" />
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-10 lg:p-14">
                <SectionHeading
                  eyebrow="Motorised Curtain Systems"
                  title="Designed for Larger Windows and Everyday Convenience"
                  description="Motorised curtain systems offer smoother operation, cleaner presentation and more practical day-to-day use across larger windows and full-height glazing. LuxAura supports motorised solutions that integrate cleanly with modern track systems and larger curtain spans."
                  theme="dark"
                />
                <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
                  Light integration with systems such as Somfy can be considered where automation
                  supports a cleaner and more usable project outcome.
                </p>
                <div className="mt-8 grid gap-4">
                  {MOTORISATION_BLOCKS.map(item => (
                    <article
                      key={item.title}
                      className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5"
                    >
                      <h3 className="font-heading text-2xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-white/78 sm:text-base">
                        {item.description}
                      </p>
                    </article>
                  ))}
                </div>
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
                description="LuxAura supports window treatments not only for appearance, but also for light control, comfort and practical living performance through better fabric selection and layered construction."
              />

              <div className="mt-8 grid gap-4">
                {PERFORMANCE_FUNCTION_BLOCKS.map(item => (
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

              <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-primary/70 sm:text-[13px]">
                Achieved through layered curtain systems
              </p>
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
                description="Modern interiors increasingly feature wider openings and full-height glazing. LuxAura supports these conditions through appropriate style selection, integrated track systems, fabric control and motorised solutions where required."
              />
              <div className="mt-8 grid gap-4">
                {LARGE_WINDOW_POINTS.map(point => (
                  <article
                    key={point}
                    className="rounded-[1.5rem] border border-[#e4dbc9] bg-[#f8f3e8] p-5"
                  >
                    <p className="text-sm leading-7 text-neutral-700 sm:text-base">{point}</p>
                  </article>
                ))}
              </div>
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
                description="LuxAura combines material knowledge with specialist sewing, controlled fabrication and refined finishing standards to deliver more complete and more reliable window furnishing outcomes."
                theme="dark"
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {MASTER_CRAFT_POINTS.map(item => (
                  <article
                    key={item.title}
                    className="rounded-[1.5rem] border border-white/12 bg-white/7 p-5"
                  >
                    <h2 className="font-heading text-2xl font-semibold text-white">{item.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-white">{item.description}</p>
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
        description="Concise answers for designers and project clients comparing curtain styles, Roman blinds, track systems, motorisation and wider project suitability."
      />

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2.2rem] border border-white/65 bg-[linear-gradient(135deg,rgba(197,160,89,0.16),rgba(255,255,255,0.84)_36%,rgba(197,160,89,0.08)_100%)] p-8 shadow-[0_28px_80px_rgba(32,24,12,0.08)] sm:p-10 lg:p-12">
            <div className="max-w-3xl">
              <p className="eyebrow">Final CTA</p>
              <h2 className="mt-4 text-balance font-heading text-4xl font-semibold text-neutral-900 sm:text-5xl">
                Trade, Project and Custom Window Enquiries
              </h2>
              <p className="mt-5 text-pretty text-[15px] leading-7 text-neutral-700 sm:text-lg">
                LuxAura supports designers, builders, retailers, stylists and project-led clients
                with more complete window furnishing solutions across style, system and fabrication.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href={TRADE_PORTAL_ACCESS_HREF} className="btn-primary">
                Trade Portal Access
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
