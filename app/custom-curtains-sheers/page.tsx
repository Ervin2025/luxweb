import type { Metadata } from 'next';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import ImageCodeBadge from '@/components/ImageCodeBadge';
import SectionHeading from '@/components/SectionHeading';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { getReplacementImageSrc } from '@/lib/image-replacements';

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
    description: 'Clean wave folds for modern interiors.',
    imageSrc: getReplacementImageSrc('LXA-WIN-02', '/images/luxaura/window-styles/s-fold.webp'),
    imageAlt: 'S-Fold curtains with continuous wave folds in a calm architectural interior',
  },
  {
    title: 'Double Pinch Pleat',
    profile: 'double-pinch' as CurtainHeadingProfile,
    code: 'LXA-WIN-03',
    description: 'A tailored heading for refined interiors.',
    imageSrc: getReplacementImageSrc('LXA-WIN-03', '/images/luxaura/window-styles/double-pinch-pleat.webp'),
    imageAlt: 'Double pinch pleat curtains in a refined European-style room',
  },
  {
    title: 'Single Pleat',
    profile: 'single-pleat' as CurtainHeadingProfile,
    code: 'LXA-WIN-04',
    description: 'A lighter pleat with softer structure.',
    imageSrc: getReplacementImageSrc('LXA-WIN-04', '/images/luxaura/window-styles/single-pleat.webp'),
    imageAlt: 'Single pleat curtain styling in a softly lit European-style interior',
  },
  {
    title: 'Box Pleat',
    profile: 'box-pleat' as CurtainHeadingProfile,
    code: 'LXA-WIN-05',
    description: 'Defined folds with architectural structure.',
    imageSrc: getReplacementImageSrc('LXA-WIN-05', '/images/luxaura/window-styles/box-pleat.webp'),
    imageAlt: 'Box pleat curtain styling with stronger structure and tailored folds',
  },
  {
    title: 'Eyelet',
    profile: 'eyelet' as CurtainHeadingProfile,
    code: 'LXA-WIN-06',
    description: 'A simpler heading for straightforward applications.',
    imageSrc: getReplacementImageSrc('LXA-WIN-06', '/images/luxaura/window-styles/eyelet.webp'),
    imageAlt: 'Eyelet curtains with visible ring-top heading on a wall-mounted rod',
  },
  {
    title: 'Pencil Pleat',
    profile: 'pencil-pleat' as CurtainHeadingProfile,
    code: 'LXA-WIN-07',
    description: 'A traditional gathered heading with flexibility.',
    imageSrc: getReplacementImageSrc('LXA-WIN-07', '/images/luxaura/window-styles/pencil-pleat.webp'),
    imageAlt: 'Pencil pleat curtains with a traditional gathered heading style',
  },
] as const;

const MASTER_CRAFT_POINTS = [
  {
    title: 'Precision sewing',
    description: 'Cleaner headings, joins and finishing.',
  },
  {
    title: 'Complex fabric handling',
    description: 'Controlled handling across linens and layered systems.',
  },
  {
    title: 'Clean edge finishing',
    description: 'Hems and edges resolved with stronger finish quality.',
  },
  {
    title: 'Presentation standards',
    description: 'Prepared for cleaner handover and presentation.',
  },
  {
    title: 'Consistency across styles and scales',
    description: 'Fabrication discipline across styles and scales.',
  },
] as const;

const HARDWARE_TRACK_VISUALS = [
  {
    title: 'Minimal ceiling track',
    description: 'Discreet ceiling-fixed systems for quieter drapery lines.',
    code: 'LXA-WIN-15',
    imageSrc: getReplacementImageSrc('LXA-WIN-15', '/images/luxaura/window-track/concealed-ceiling-track.webp'),
    imageAlt: 'Concealed ceiling-mounted track integrated into a clean architectural interior',
    className: 'lg:col-span-2',
  },
  {
    title: 'Wall-mounted system',
    description: 'Exposed systems for visible mounting conditions.',
    code: 'LXA-WIN-16',
    imageSrc: getReplacementImageSrc('LXA-WIN-16', '/images/luxaura/window-track/wall-mounted-system.webp'),
    imageAlt: 'Wall-mounted curtain system shown in a premium residential installation',
    className: '',
  },
  {
    title: 'Double track layers',
    description: 'Layered systems for privacy and blackout control.',
    code: 'LXA-WIN-17',
    imageSrc: getReplacementImageSrc('LXA-WIN-17', '/images/luxaura/window-track/double-track-system.webp'),
    imageAlt: 'Installed double-track curtain system combining sheer and drapery layers',
    className: '',
  },
  {
    title: 'Curved and custom track conditions',
    description: 'Curved solutions for shaped and corner openings.',
    code: 'LXA-WIN-18',
    imageSrc: getReplacementImageSrc('LXA-WIN-18', '/images/luxaura/window-track/curved-custom-track.webp'),
    imageAlt: 'Custom curved curtain track condition wrapping a premium corner window',
    className: '',
  },
  {
    title: 'Track detail and finish quality',
    description: 'Hardware detailing for calmer operation and finish.',
    code: 'LXA-WIN-19',
    imageSrc: getReplacementImageSrc('LXA-WIN-19', '/images/luxaura/window-track/track-detail.webp'),
    imageAlt: 'Close-up of curtain hardware detailing and mounting finish',
    className: '',
  },
  {
    title: 'Installed real-world application',
    description: 'Track systems selected for final installed performance.',
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
    description: 'Smooth movement across wider openings and larger spans.',
  },
  {
    title: 'Integrated with the track system',
    description: 'Automation planned with track, stack and installation.',
  },
  {
    title: 'Project-ready value',
    description: 'Trusted systems with project-ready commercial logic.',
  },
] as const;

const ROMAN_BLIND_STYLES = [
  {
    title: 'Flat Roman Blind',
    description: 'Clean lines for modern interiors.',
  },
  {
    title: 'Relaxed Roman Blind',
    description: 'A softer profile for residential settings.',
  },
  {
    title: 'London Roman Blind',
    description: 'Decorative softness with a tailored look.',
  },
  {
    title: 'Hobbled Roman Blind',
    description: 'Cascading folds with richer decorative depth.',
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

  return (
    <div>
      <section className="relative isolate h-[72svh] overflow-hidden sm:h-[80svh] lg:h-[82svh]">
        <Image
          src={getReplacementImageSrc('LXA-WIN-01', '/images/luxaura/hero-project.webp')}
          alt="Layered curtains and sheers in a premium Sydney interior"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <ImageCodeBadge code="LXA-WIN-01" />
      </section>

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Window Treatments', href: '/custom-curtains-sheers' }]} />
      </div>

      <section id="curtain-styles" className="section-padding pt-6">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Curtain Styles"
            title="Curtain Styles"
            description="A wide range of curtain styles for modern and classic interiors."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {CURTAIN_STYLES.map(item => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[2rem] border border-[#e4dbc9] bg-white shadow-[0_22px_70px_rgba(22,18,12,0.08)]"
              >
                <div className="border-b border-[#eadfcb] bg-[#f7f0e2] px-5 py-4 sm:px-6">
                  <div>
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
            description="Track systems selected for movement, finish and integration."
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
                Track choice stays aligned with style, movement and installation.
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
                description="Precision-built Roman blinds across multiple styles."
              />
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="grid gap-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.2rem] bg-[linear-gradient(180deg,rgba(247,242,234,0.98),rgba(233,225,210,0.94))] shadow-[0_24px_80px_rgba(20,24,22,0.12)]">
                <div className="absolute inset-4 sm:inset-5">
                  <Image
                    src={getReplacementImageSrc('LXA-WIN-23', '/images/luxaura/roman-blind-lounge.webp')}
                    alt="Flat Roman blind installation in a premium interior with correct stacking and proportion"
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-contain"
                  />
                </div>
                <ImageCodeBadge code="LXA-WIN-23" />
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
                description="Motorised solutions for larger windows and daily convenience."
                theme="dark"
              />
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
                description="Window treatments shaped for light, comfort and use."
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
                description="Full-height glazing and wider openings with cleaner control."
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
                description="Specialist sewing, controlled fabrication and refined finishing."
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

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2.2rem] border border-white/65 bg-[linear-gradient(135deg,rgba(197,160,89,0.16),rgba(255,255,255,0.84)_36%,rgba(197,160,89,0.08)_100%)] p-8 shadow-[0_28px_80px_rgba(32,24,12,0.08)] sm:p-10 lg:p-12">
            <div className="max-w-3xl">
              <p className="eyebrow">Final CTA</p>
              <h2 className="mt-4 text-balance font-heading text-4xl font-semibold text-neutral-900 sm:text-5xl">
                Trade, Project and Custom Window Enquiries
              </h2>
              <p className="mt-5 text-pretty text-[15px] leading-7 text-neutral-700 sm:text-lg">
                Window furnishing solutions across style, system and fabrication.
              </p>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </div>
  );
}
