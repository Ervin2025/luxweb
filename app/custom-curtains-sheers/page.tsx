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
import { PROJECT_BRIEF_HREF, TRADE_SUPPORT_HREF } from '@/lib/site-data';

const TAILORED_WINDOW_STYLES = [
  {
    title: 'S-Fold Systems',
    eyebrow: 'Calm Rhythm',
    description:
      'Clean continuous folds shaped for wide glazing, softer movement and a more architectural curtain line.',
    imageSrc: '/images/luxaura/vertical-sheer-pool.webp',
    imageAlt: 'S-Fold sheer curtain direction with clean vertical rhythm',
  },
  {
    title: 'Pinch Pleat',
    eyebrow: 'Tailored Formality',
    description:
      'A structured pleated heading that suits refined residential, hospitality and developer-led furnishing briefs.',
    imageSrc: '/images/IMG-F.webp',
    imageAlt: 'Pinch pleat curtains on a decorative pole in a premium room',
  },
  {
    title: 'Double Pinch Pleat',
    eyebrow: 'Controlled Fullness',
    description:
      'A fuller tailored profile for schemes that need stronger shape, proportion and more formal drapery presence.',
    imageSrc: '/images/luxaura/hero-project.webp',
    imageAlt: 'Double pinch pleat drapery layered with sheer curtains',
  },
  {
    title: 'Box Pleat',
    eyebrow: 'Architectural Order',
    description:
      'Sharper pleat discipline and stronger spacing control for briefs that demand a more composed, linear finish.',
    imageSrc: '/images/curtains-hero.webp',
    imageAlt: 'Box pleat curtain direction with clean spacing and architectural balance',
  },
  {
    title: 'Goblet & Decorative Pleat',
    eyebrow: 'Statement Dressing',
    description:
      'More decorative heading expressions for formal rooms, taller glazing and schemes that need visual theatre.',
    imageSrc: '/images/IMG-C.webp',
    imageAlt: 'Decorative pleated drapery for a formal interior setting',
  },
  {
    title: 'Eyelet & Pole-Led Treatments',
    eyebrow: 'Visible Hardware',
    description:
      'Pole-led drapery where heading style and hardware become part of the visual language rather than hidden support.',
    imageSrc: '/images/IMG-G.webp',
    imageAlt: 'Eyelet drapery on a visible curtain pole with bracket detail',
  },
  {
    title: 'Layered Sheer + Drape Systems',
    eyebrow: 'Day-To-Night Control',
    description:
      'Layered treatments that balance light filtration, privacy, blackout control and a stronger sense of room finish.',
    imageSrc: '/images/luxaura/beach-sheer.webp',
    imageAlt: 'Layered sheer and drape treatment in a premium beachfront interior',
  },
] as const;

const CRAFT_DISCIPLINES = [
  {
    title: 'Couture-inspired cutting logic',
    description:
      'Proportion, drop, paneling and visual continuity are controlled early so the finished treatment reads cleaner from the first fold.',
  },
  {
    title: 'Advanced sewing control',
    description:
      'Stitch precision, seam discipline and construction consistency are treated as part of the design outcome, not hidden production detail.',
  },
  {
    title: 'Heading and pleat discipline',
    description:
      'Heading formation, tape placement and pleat geometry are aligned to the final drape, stack and operating system.',
  },
  {
    title: 'Finish precision',
    description:
      'Pressing, shaping and final presentation are used to improve drape behaviour, pleat memory and delivery-ready quality.',
  },
] as const;

const PROCESS_STEPS = [
  {
    title: 'Fabric Inspection & Light Check',
    description:
      'Material is checked for consistency, transparency behaviour and fabrication suitability before cutting begins.',
  },
  {
    title: 'Precision Cutting & Panel Matching',
    description:
      'Panels are cut and aligned with strict control over proportion, joins and visual continuity.',
  },
  {
    title: 'Tailored Sewing & Seam Control',
    description:
      'Construction follows disciplined sewing logic to support cleaner lines, stronger fall and better long-term structure.',
  },
  {
    title: 'Heading Formation & Structural Finishing',
    description:
      'Heading style, tape placement and upper construction are aligned to the final drape and operating system.',
  },
  {
    title: 'Heat-Setting, Pressing & Pleat Memory',
    description:
      'Curtains are pressed, shaped and heat-set where appropriate to stabilise folds and improve final presentation.',
  },
  {
    title: 'Quality Check & Pin Review',
    description:
      'Each treatment is checked for stitch quality, proportion, alignment and finishing consistency before release.',
  },
  {
    title: 'Accessory & Hardware Preparation',
    description:
      'Hooks, heading accessories and support components are prepared as part of the complete treatment pathway.',
  },
  {
    title: 'Packing & Delivery Readiness',
    description:
      'Treatments are pleat-set, packed with care and prepared to protect finish quality before delivery or installation.',
  },
] as const;

const DECISION_MAKER_ITEMS = [
  {
    title: 'For designers',
    description:
      'LuxAura provides broader style control, cleaner detailing and stronger finish quality across more custom briefs.',
  },
  {
    title: 'For developers and project teams',
    description:
      'The value lies in repeatable fabrication standards, coordinated execution and a more reliable path from selection to final installation readiness.',
  },
  {
    title: 'For complex glazing and layered schemes',
    description:
      'Multiple heading styles, advanced curtain construction and layered systems can be carried through one more controlled workflow.',
  },
  {
    title: 'For cleaner coordination',
    description:
      'Fabric, tracks, stack-back logic, accessory preparation and finishing are all considered as part of the same treatment pathway.',
  },
] as const;

const MOTORISATION_FEATURES = [
  {
    title: 'Integrated premium capability',
    description:
      'Motorisation is planned as part of the treatment design, not treated as a late-stage add-on.',
  },
  {
    title: 'Aligned with track choice and stacking',
    description:
      'Track selection, stack-back, movement quality and control access are coordinated around the final curtain behaviour.',
  },
  {
    title: 'Cleaner installation readiness',
    description:
      'Control logic, preparation and visual cleanliness are considered early so the finished result remains calm and resolved.',
  },
] as const;

const FAQ_ITEMS = [
  {
    question: 'Can LuxAura deliver more than standard curtain headings?',
    answer:
      'Yes. LuxAura supports a broader matrix of heading styles including S-Fold, pinch pleat, double pinch pleat, box pleat, decorative pleats, pole-led treatments and layered sheer plus drape systems.',
  },
  {
    question: 'What makes the fabrication approach different?',
    answer:
      'LuxAura applies garment-level fabrication logic to curtain making, with stronger control over cutting, seam discipline, heading formation, pressing, pleat-setting and final packing.',
  },
  {
    question: 'Is the page suitable for developer or project-led briefs?',
    answer:
      'Yes. The window treatment workflow is shaped for designers, developers and project teams who need consistency, repeatability and cleaner coordination across more complex briefs.',
  },
  {
    question: 'Can motorisation be included from the start?',
    answer:
      'Yes. Motorisation is supported as an integrated capability aligned with track choice, stack-back behaviour, finish quality and installation readiness.',
  },
] as const;

export const metadata: Metadata = {
  title: 'Window Treatments | Master-Grade Curtains, Sheers and Roman Blinds',
  description:
    'LuxAura positions window treatments as a master-grade workroom capability, combining multiple heading styles, garment-level fabrication discipline, controlled finishing and integrated motorisation planning.',
  keywords: [
    'custom Roman blinds Sydney',
    'premium window treatments Sydney',
    'S-Fold drapes',
    'pinch pleat curtains',
    'motorised curtain systems',
    'curtain workroom Sydney',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/custom-curtains-sheers`,
  },
  openGraph: {
    title: 'Window Treatments | Master-Grade Curtains, Sheers and Roman Blinds',
    description:
      'Multiple heading styles, garment-level curtain fabrication and integrated motorisation planning for premium project briefs.',
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
          alt="Layered curtains and sheers in a premium Sydney interior"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,19,17,0.76)_0%,rgba(13,19,17,0.58)_36%,rgba(13,19,17,0.16)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,19,17,0.08)_0%,rgba(13,19,17,0.32)_100%)]" />

        <div className="container-custom relative flex min-h-[86svh] items-end pb-16 pt-36 sm:pb-20 sm:pt-40">
          <div className="max-w-4xl text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ead7a8]">
              Window Treatments
            </p>
            <h1 className="mt-5 max-w-3xl text-balance font-heading text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Master-grade window treatments, tailored from heading to final packing
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/86 sm:text-xl sm:leading-8">
              LuxAura supports designers, developers and project teams with broader heading style
              control, garment-level curtain fabrication and integrated motorisation planning for
              briefs that require more than standard curtain supply.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href={PROJECT_BRIEF_HREF} className="btn-primary">
                Submit a Project Brief
              </Link>
              <a
                href="#tailored-styles"
                className="btn-secondary border-white/25 bg-white/12 text-white hover:bg-white/18 hover:text-white"
              >
                Explore Tailored Styles
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Window Treatments', href: '/custom-curtains-sheers' }]} />
      </div>

      <section id="tailored-styles" className="section-padding pt-6">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Tailored Styles"
            title="Masters of Tailored Window Treatments"
            description="LuxAura supports designers and project teams with a broad matrix of heading styles, tailored finishes and fabrication methods, allowing each curtain scheme to respond to the brief, the architecture and the required level of formality."
          />

          <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 md:grid md:grid-cols-2 md:overflow-visible xl:grid-cols-3">
            {TAILORED_WINDOW_STYLES.map(item => (
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
                      href="#garment-level-craft"
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
                      introText="Share the heading style, rough dimensions, lining requirements and any stack, track or installation conditions that matter."
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

      <section id="garment-level-craft" className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.3rem] shadow-[0_28px_90px_rgba(20,24,22,0.14)]">
              <Image
                src="/images/IMG-C.webp"
                alt="Decorative curtain construction with advanced pleating and tailored drape behaviour"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-[2.2rem] bg-[#163228] p-8 shadow-[0_30px_90px_rgba(17,27,24,0.18)] sm:p-10 lg:p-12">
              <SectionHeading
                eyebrow="Garment-Level Craft"
                title="Garment-Level Craft Behind Every Curtain"
                description="LuxAura approaches curtain making with the precision of tailored garment construction, where proportion, stitch control, seam discipline, pressing, shaping and finish quality determine the final drape."
                theme="dark"
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {CRAFT_DISCIPLINES.map(item => (
                  <article
                    key={item.title}
                    className="rounded-[1.5rem] border border-white/12 bg-white/7 p-5"
                  >
                    <h2 className="font-heading text-2xl font-semibold text-white">{item.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-white/78">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="section-shell p-8 sm:p-10 lg:p-12">
            <SectionHeading
              eyebrow="Process"
              title="From Fabric Inspection to Final Packing"
              description="A premium curtain result is shaped by disciplined fabrication stages, not by fabric choice alone."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {PROCESS_STEPS.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-primary/10 bg-neutral-50 p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary/70">
                    Stage {index + 1}
                  </p>
                  <h2 className="mt-3 font-heading text-2xl font-semibold text-neutral-900">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-neutral-700">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <article className="section-shell p-8 sm:p-10">
              <p className="eyebrow">Decision-Maker Value</p>
              <h2 className="mt-4 font-heading text-4xl font-semibold text-neutral-900 sm:text-5xl">
                Built for design briefs that require more than standard curtain supply
              </h2>
              <p className="mt-5 text-base leading-8 text-neutral-700 sm:text-lg">
                LuxAura is structured to support more complex residential, developer and project
                work where finish quality, repeatability and cleaner coordination matter across the
                full treatment pathway.
              </p>
            </article>
            <div className="grid gap-5 md:grid-cols-2">
              {DECISION_MAKER_ITEMS.map(item => (
                <article key={item.title} className="section-shell p-7">
                  <h3 className="font-heading text-3xl font-semibold text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="motorisation" className="section-padding pt-0">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2.3rem] bg-[#15110d] text-white shadow-[0_32px_90px_rgba(17,12,8,0.24)]">
            <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
              <div className="grid gap-4 p-4 sm:p-6 lg:p-8">
                <div className="overflow-hidden rounded-[1.8rem] border border-white/10">
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
                </div>
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.8rem] border border-white/10">
                  <Image
                    src="/images/IMG-I.webp"
                    alt="Motorised curtain and blind system integrated into a premium bedroom scheme"
                    fill
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,8,6,0.08),rgba(10,8,6,0.22))]" />
                </div>
              </div>

              <div className="p-8 sm:p-10 lg:p-14">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ead7a8]">
                  Motorisation
                </p>
                <h2 className="mt-4 text-balance font-heading text-4xl font-semibold sm:text-5xl">
                  Motorised systems planned early, aligned with track choice, stacking and finish
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/78 sm:text-base">
                  Motorisation affects more than movement. It shapes track selection, stack-back
                  behaviour, access to controls, installation readiness and final visual calm.
                  LuxAura keeps automation inside the premium treatment pathway rather than treating
                  it as an afterthought.
                </p>
                <p className="mt-4 text-sm leading-7 text-white/64 sm:text-base">
                  Compatible with premium systems such as Somfy and Silent Gliss where suitable.
                </p>
                <div className="mt-8 grid gap-4">
                  {MOTORISATION_FEATURES.map(item => (
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

      <FaqSection
        items={[...FAQ_ITEMS]}
        title="Window treatment questions"
        description="Practical answers on heading styles, garment-level fabrication logic and how LuxAura coordinates more technical briefs."
      />

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2.2rem] border border-white/65 bg-[linear-gradient(135deg,rgba(197,160,89,0.16),rgba(255,255,255,0.82)_36%,rgba(197,160,89,0.08)_100%)] p-8 shadow-[0_28px_80px_rgba(32,24,12,0.08)] sm:p-10 lg:p-12">
            <div className="max-w-3xl">
              <p className="eyebrow">Final CTA</p>
              <h2 className="mt-4 text-balance font-heading text-4xl font-semibold text-neutral-900 sm:text-5xl">
                Bring the window package into one more controlled workroom path
              </h2>
              <p className="mt-5 text-pretty text-[15px] leading-7 text-neutral-700 sm:text-lg">
                Bring LuxAura in when the brief needs multiple heading styles, stronger fabrication
                discipline, integrated motorisation planning and a cleaner path to installation
                readiness.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href={PROJECT_BRIEF_HREF} className="btn-primary">
                Submit a Project Brief
              </Link>
              <Link href={TRADE_SUPPORT_HREF} className="btn-secondary">
                Access Trade Support
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
