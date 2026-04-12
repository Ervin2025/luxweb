import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import FaqSection from '@/components/FaqSection';
import ImageCodeBadge from '@/components/ImageCodeBadge';
import QuickInquiryDialog from '@/components/QuickInquiryDialog';
import SectionHeading from '@/components/SectionHeading';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { generateFaqSchema } from '@/lib/faq-schema';
import {
  TRADE_PORTAL_ACCESS_HREF,
  TRADE_SUPPORT_HREF,
  WINDOW_TREATMENTS_FAQ,
} from '@/lib/site-data';

const DRAPERY_TYPES = [
  {
    title: 'S Fold',
    code: 'LXA-WIN-02',
    eyebrow: 'Architectural Rhythm',
    description:
      'A cleaner, more contemporary drapery line for full-height glazing, refined living spaces and layered residential briefs.',
    imageSrc: '/images/luxaura/vertical-sheer-pool.webp',
    imageAlt: 'S Fold sheer curtain detail in a refined interior',
  },
  {
    title: 'Double Pinch Pleat',
    code: 'LXA-WIN-03',
    eyebrow: 'Tailored Formality',
    description:
      'A fuller pleated profile that brings stronger structure, proportion and classic softness to premium interiors.',
    imageSrc: '/images/IMG-F.webp',
    imageAlt: 'Double pinch pleat curtains in a premium room',
  },
  {
    title: 'Box Pleat',
    code: 'LXA-WIN-04',
    eyebrow: 'Controlled Geometry',
    description:
      'Sharper spacing and a more composed drapery rhythm suited to interiors that require clearer architectural order.',
    imageSrc: '/images/curtains-hero.webp',
    imageAlt: 'Box pleat curtain detail with clean architectural rhythm',
  },
  {
    title: 'Tailored Headings',
    code: 'LXA-WIN-05',
    eyebrow: 'Detail Discipline',
    description:
      'Heading design can be refined to support the room tone, hardware condition and the intended balance between softness and control.',
    imageSrc: '/images/IMG-C.webp',
    imageAlt: 'Tailored curtain heading detail in a refined interior',
  },
  {
    title: 'Layered Sheer + Drape Systems',
    code: 'LXA-WIN-07',
    eyebrow: 'Day-to-Night Control',
    description:
      'Layered systems that balance light filtration, privacy and blackout performance while keeping the scheme visually calm.',
    imageSrc: '/images/luxaura/beach-sheer.webp',
    imageAlt: 'Layered sheers and drapery in a premium interior',
  },
] as const;

const CRAFT_DISCIPLINES = [
  {
    title: 'Tailored pleating discipline',
    description:
      'Pleat structure, heading proportion and stack behaviour are controlled as part of the final drapery composition.',
  },
  {
    title: 'Specialist sewing and detailing',
    description:
      'Construction quality is treated as visible design discipline rather than hidden production mechanics.',
  },
  {
    title: 'High-temperature setting and pressing',
    description:
      'Shaping, setting and finishing processes help support cleaner folds, stronger drape memory and better presentation.',
  },
  {
    title: 'Finish and delivery standards',
    description:
      'Window treatments are prepared with a stronger focus on visual calm, consistency and delivery-ready quality.',
  },
] as const;

const HARDWARE_TRACK_VISUALS = [
  {
    title: 'Minimal ceiling track',
    description:
      'Discreet ceiling-fixed systems that let the drapery line read quietly against the architecture.',
    code: 'LXA-WIN-15',
    imageSrc: '/images/luxaura/window-track/concealed-ceiling-track.webp',
    imageAlt: 'Concealed ceiling-mounted track integrated into a clean architectural interior',
    className: 'lg:col-span-2',
  },
  {
    title: 'Wall-mounted system',
    description:
      'Architectural exposed systems used where the mounting condition needs to stay visible and resolved.',
    code: 'LXA-WIN-16',
    imageSrc: '/images/luxaura/window-track/wall-mounted-system.webp',
    imageAlt: 'Wall-mounted curtain system shown in a premium residential installation',
    className: '',
  },
  {
    title: 'Double track layers',
    description:
      'Layered sheer and drapery systems coordinated for privacy, blackout support and cleaner day-to-night control.',
    code: 'LXA-WIN-17',
    imageSrc: '/images/luxaura/window-track/double-track-system.webp',
    imageAlt: 'Installed double-track curtain system combining sheer and drapery layers',
    className: '',
  },
  {
    title: 'Curved and custom track conditions',
    description:
      'Corner and shaped track solutions for bay windows, wrapped glazing and other more difficult openings.',
    code: 'LXA-WIN-18',
    imageSrc: '/images/luxaura/window-track/curved-custom-track.webp',
    imageAlt: 'Custom curved curtain track condition wrapping a premium corner window',
    className: '',
  },
  {
    title: 'Track detail and finish quality',
    description:
      'Closer attention to hardware detailing helps the finished curtain line look calmer and operate more smoothly over time.',
    code: 'LXA-WIN-19',
    imageSrc: '/images/luxaura/window-track/track-detail.webp',
    imageAlt: 'Close-up of curtain hardware detailing and mounting finish',
    className: '',
  },
  {
    title: 'Installed real-world application',
    description:
      'Track systems are selected for how they sit in the room once curtains are made, stacked and fully installed.',
    code: 'LXA-WIN-20',
    imageSrc: '/images/luxaura/window-track/installed-track-with-curtain.webp',
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

const ROMAN_BLIND_TECHNICAL_POINTS = [
  'Premium natural linens with stronger density and durability.',
  'High-performance fabrics suitable for both luxury residential and higher-use commercial interiors.',
  'Custom lining options from light-filtering to full blockout.',
  'Millimetric workshop precision and reliable hardware integration.',
] as const;

const ROMAN_BLIND_TRADE_ADVANTAGES = [
  {
    title: 'Direct-to-Trade Pricing',
    description:
      'Optimised sourcing and production pathways help LuxAura deliver high-end Roman blinds at a significant trade advantage.',
  },
  {
    title: 'Project-Ready Reliability',
    description:
      'Scalable production and dependable lead times support both boutique and larger furnishing programmes.',
  },
  {
    title: 'Trade-Focused Support',
    description:
      'LuxAura can assist with tailored direction, specification support and customisation for professional clients.',
  },
] as const;

export const metadata: Metadata = {
  title: 'Window Treatments | Curtains, Sheers, Roman Blinds and Motorised Systems',
  description:
    'LuxAura delivers window treatments with stronger drapery craft, refined finishing and integrated hardware and motorisation support for project-led interiors.',
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
    title: 'Window Treatments | Curtains, Sheers, Roman Blinds and Motorised Systems',
    description:
      'Refined drapery, elevated finishing and project-aware hardware and motorisation support in one more complete window treatment pathway.',
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
  const faqSchema = generateFaqSchema([...WINDOW_TREATMENTS_FAQ]);

  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/luxaura/hero-project.webp"
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
              Window Treatments with Greater Craft, Better Control and More Resolved Results
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/86 sm:text-xl sm:leading-8">
              LuxAura delivers window treatments that combine refined drapery form, elevated
              finishing and project-aware execution, from tailored sheers to layered systems and
              motorised solutions.
            </p>
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

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Window Treatments', href: '/custom-curtains-sheers' }]} />
      </div>

      <section id="drapery-typologies" className="section-padding pt-6">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Curtain Styles / Drapery Typologies"
            title="A broader window treatment language for design-led interiors"
            description="LuxAura supports a wide range of premium curtain styles and layered window schemes, allowing the treatment to respond to architecture, room tone and project ambition before specialist categories are refined further."
          />

          <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 md:grid md:grid-cols-2 md:overflow-visible xl:grid-cols-3">
            {DRAPERY_TYPES.map(item => (
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
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <ImageCodeBadge code={item.code} />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,16,14,0.02),rgba(11,16,14,0.56))]" />
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
                    <a
                      href="#master-craft-finishing"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-dark"
                    >
                      See Craft Detail
                      <ArrowUpRight />
                    </a>
                    <QuickInquiryDialog
                      styleName={item.title}
                      title={`Discuss: ${item.title}`}
                      subjectPrefix="Window Treatments Enquiry"
                      enquiryType="window-treatments-enquiry"
                      introText="Share the treatment type, rough dimensions, lining requirements and any stack, hardware or motorisation conditions that matter."
                      label="Discuss This Style"
                      className="px-5 py-3 text-[11px] sm:text-xs"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="hardware-motorisation" className="section-padding pt-0">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Hardware & Track Systems"
            title="Precision Track Systems for Smooth Operation and Clean Integration"
            description="LuxAura provides a wide range of curtain track systems designed for smooth operation, visual integration and long-term reliability across residential and project applications. From discreet ceiling-mounted tracks to more architectural exposed systems, LuxAura supports both design intent and practical performance with strong product variety and competitive trade positioning."
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
              <p className="eyebrow">Track System Capability</p>
              <h2 className="mt-4 text-balance font-heading text-4xl font-semibold text-neutral-900 sm:text-[2.8rem]">
                A broader hardware layer helps the full window package perform properly
              </h2>
              <p className="mt-5 text-sm leading-7 text-neutral-700 sm:text-base">
                Track choice affects stacking, movement quality, bracket logic, long-term
                reliability and the final discipline of the drapery line. LuxAura treats this as a
                core part of the window package rather than an afterthought.
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
                src="/images/luxaura/roman-blind-lounge.webp"
                alt="Professional Roman blind manufacturing shown in a refined residential interior"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
              <ImageCodeBadge code="LXA-WIN-12" />
            </div>

            <div>
              <SectionHeading
                eyebrow="Professional Roman Blind Manufacturing"
                title="Bespoke Roman Blinds with Trade-Level Precision, Material Depth and Competitive Value"
                description="LuxAura Living is a premier B2B manufacturing partner for interior designers, architects and furnishing-led projects. We combine premium raw materials with industrial precision to deliver bespoke Roman blind solutions at highly competitive trade prices."
              />
              <p className="mt-6 text-sm leading-7 text-neutral-700 sm:text-base">
                LuxAura supports a full range of Roman blind constructions to suit different
                project aesthetics, furnishing directions and performance requirements.
              </p>
              <p className="mt-4 text-sm font-medium leading-7 text-neutral-700 sm:text-base">
                Roman blinds are one of LuxAura’s strongest specialist manufacturing categories.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="grid gap-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2.2rem] shadow-[0_24px_80px_rgba(20,24,22,0.12)]">
                <Image
                  src="/images/luxaura/roman-blind-lounge.webp"
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
                    src="/images/luxaura/roman-blind-lounge.webp"
                    alt="Linen Roman blind fold and stacking detail"
                    fill
                    sizes="(min-width: 1024px) 24vw, 100vw"
                    className="object-cover"
                  />
                  <ImageCodeBadge code="LXA-WIN-13" />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem] shadow-[0_20px_70px_rgba(20,24,22,0.1)]">
                  <Image
                    src="/images/luxaura/beach-sheer.webp"
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

          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <article className="section-shell p-7 sm:p-8 lg:p-10">
              <p className="eyebrow">Technical Excellence & Materials</p>
              <h2 className="mt-4 text-balance font-heading text-4xl font-semibold text-neutral-900 sm:text-[2.8rem]">
                Better textile selection and controlled construction make the difference
              </h2>
              <p className="mt-5 text-sm leading-7 text-neutral-700 sm:text-base">
                Roman blinds must perform both visually and technically. LuxAura’s strength lies in
                combining better textile selection with controlled construction and dependable
                workshop precision.
              </p>
              <div className="mt-8 grid gap-4">
                {ROMAN_BLIND_TECHNICAL_POINTS.map(item => (
                  <article
                    key={item}
                    className="rounded-[1.4rem] border border-primary/10 bg-[#f8f3e8] px-5 py-4"
                  >
                    <p className="text-sm leading-7 text-neutral-700 sm:text-base">{item}</p>
                  </article>
                ))}
              </div>
            </article>

            <article className="overflow-hidden rounded-[2.2rem] bg-[#163228] p-7 text-white shadow-[0_30px_90px_rgba(17,27,24,0.18)] sm:p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ead7a8]">
                The LuxAura Trade Advantage
              </p>
              <h2 className="mt-4 text-balance font-heading text-4xl font-semibold text-white sm:text-[2.8rem]">
                One of LuxAura’s strongest trade categories for flexibility, control and value
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/78 sm:text-base">
                Roman blinds are one of LuxAura’s strongest trade categories because they combine
                design flexibility, fabrication control and strong commercial value.
              </p>
              <div className="mt-8 grid gap-4">
                {ROMAN_BLIND_TRADE_ADVANTAGES.map(item => (
                  <article
                    key={item.title}
                    className="rounded-[1.5rem] border border-white/12 bg-white/7 p-5"
                  >
                    <h3 className="font-heading text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white sm:text-base">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </article>
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
                    poster="/images/IMG-I.webp"
                    className="h-full w-full object-cover"
                  >
                    <source src="/videos/motorisation-demo.mp4" type="video/mp4" />
                  </video>
                  <ImageCodeBadge code="LXA-WIN-09" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[1.8rem] border border-white/10">
                    <Image
                      src="/images/IMG-I.webp"
                      alt="Motorised curtain rail detail in a premium bedroom scheme"
                      fill
                      sizes="(min-width: 1024px) 24vw, 100vw"
                      className="object-cover"
                    />
                    <ImageCodeBadge code="LXA-WIN-10" />
                  </div>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[1.8rem] border border-white/10">
                    <Image
                      src="/images/luxaura/hero-project.webp"
                      alt="Layered motorised drapery system shown in a premium installed interior"
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
                  title="Motorised operation that stays clean, smooth and project-ready"
                  description="LuxAura supports motorised curtain systems as part of a more complete window treatment pathway, helping automation work with the selected track, the fabric weight and the intended room experience rather than being added too late."
                  theme="dark"
                />
                <p className="mt-5 text-sm leading-7 text-white/68 sm:text-base">
                  Trusted systems such as Somfy can be considered where the project requires a
                  more integrated motorised direction across residential or broader project use.
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
                      <p className="mt-3 text-sm leading-7 text-white/72">{item.description}</p>
                    </article>
                  ))}
                </div>
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
                src="/images/IMG-C.webp"
                alt="Advanced pleating and tailored curtain finish detail"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
              <ImageCodeBadge code="LXA-WIN-08" />
            </div>

            <div className="overflow-hidden rounded-[2.2rem] bg-[#163228] p-8 shadow-[0_30px_90px_rgba(17,27,24,0.18)] sm:p-10 lg:p-12">
              <SectionHeading
                eyebrow="Master Craft & Finishing"
                title="Where drapery becomes more refined, more controlled and more complete"
                description="LuxAura approaches window treatments with a stronger emphasis on form, finishing and technical discipline, combining tailored construction, specialist sewing, high-temperature setting, pressing and finishing processes to achieve a more resolved result."
                theme="dark"
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {CRAFT_DISCIPLINES.map(item => (
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
        title="Window treatment questions"
        description="Concise answers for designers and project clients looking to align style, hardware, finishing and performance within one window brief."
      />

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2.2rem] border border-white/65 bg-[linear-gradient(135deg,rgba(197,160,89,0.16),rgba(255,255,255,0.84)_36%,rgba(197,160,89,0.08)_100%)] p-8 shadow-[0_28px_80px_rgba(32,24,12,0.08)] sm:p-10 lg:p-12">
            <div className="max-w-3xl">
              <p className="eyebrow">Final CTA</p>
              <h2 className="mt-4 text-balance font-heading text-4xl font-semibold text-neutral-900 sm:text-5xl">
                Bring the window package into one controlled path
              </h2>
              <p className="mt-5 text-pretty text-[15px] leading-7 text-neutral-700 sm:text-lg">
                Bring LuxAura in when curtain style, track systems, Roman blinds, motorisation and
                finishing need to move together rather than through fragmented decisions.
              </p>
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
