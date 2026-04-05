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

const WINDOW_CATEGORIES = [
  {
    title: 'Curtains',
    eyebrow: 'Architectural Softness',
    description:
      'Full-length drapery packages developed with controlled headings, stronger stacking behaviour and site-ready finish.',
    imageSrc: '/images/luxaura/hero-project.webp',
    imageAlt: 'Curtains fabricated for premium project delivery',
  },
  {
    title: 'Sheers',
    eyebrow: 'Light & Privacy',
    description:
      'Sheer directions that soften daylight, preserve privacy and sit cleanly inside refined interior briefs.',
    imageSrc: '/images/luxaura/beach-sheer.webp',
    imageAlt: 'Sheer curtains filtering daylight in a premium room',
  },
  {
    title: 'Roman Blinds',
    eyebrow: 'Structured Tailoring',
    description:
      'Roman blinds fabricated for better stacking, cleaner proportion and stronger finish across more complex briefs.',
    imageSrc: '/images/luxaura/roman-blind-lounge.webp',
    imageAlt: 'Roman blind application with controlled proportion and refined finish',
  },
  {
    title: 'Layered Window Packages',
    eyebrow: 'Day-To-Night Control',
    description:
      'Coordinated sheer and drape combinations designed for privacy, blackout control and stronger room balance.',
    imageSrc: '/images/IMG-G.webp',
    imageAlt: 'Layered window package with sheers and curtains',
  },
  {
    title: 'Statement Full-Length Treatments',
    eyebrow: 'Room-Defining Scale',
    description:
      'Long-drop treatments that frame wider glazing and carry the textile story across larger rooms and taller openings.',
    imageSrc: '/images/curtains-hero.webp',
    imageAlt: 'Statement full-length curtain installation',
  },
  {
    title: 'Decorative Trim Integration',
    eyebrow: 'Finish Resolution',
    description:
      'Borders, braids and more decorative edge conditions integrated into drapery and Roman blind fabrication.',
    imageSrc: '/images/IMG-B.webp',
    imageAlt: 'Decorative trim integrated into premium drapery',
  },
  {
    title: 'Motorised Systems',
    eyebrow: 'Automation Ready',
    description:
      'Motorised treatments planned from the start so the visual line stays clean and the system stays reliable.',
    imageSrc: '/images/IMG-I.webp',
    imageAlt: 'Motorisation-ready window system in a premium room',
  },
] as const;

const TECHNICAL_STRENGTH = [
  {
    title: 'Complex Integration',
    description:
      'Support for trims, layered builds and more demanding finish conditions across curtains, sheers and Roman blinds.',
  },
  {
    title: 'Performance Linings',
    description:
      'Thermal, acoustic and blackout support where room-specific function matters as much as appearance.',
  },
  {
    title: 'Motorisation Ready',
    description:
      'Prepared for manual and motorised systems, with track choice and control logic considered early.',
  },
  {
    title: 'Garment-Level Finishing',
    description:
      'Window fabrication approached with a tailoring mindset inspired by premium garment construction.',
  },
] as const;

const DIRECT_ITEMS = [
  {
    title: 'Direct-to-Source',
    description:
      'Sourcing, fabrication and system planning stay connected, reducing unnecessary layers and keeping the brief clearer.',
  },
  {
    title: 'Best Price Guarantee',
    description:
      'Premium-quality window treatments are delivered with stronger value through direct-source control and factory-backed making.',
  },
  {
    title: 'Any Style, Any Scale',
    description:
      'From a single residence to a larger hospitality or multi-room program, LuxAura supports broader scope without diluting finish.',
  },
  {
    title: 'Motorisation Included Early',
    description:
      'Automation is considered from the outset so it integrates into the finished result rather than being added late.',
  },
] as const;

const FAQ_ITEMS = [
  {
    question: 'Can LuxAura handle difficult curtain or Roman blind briefs?',
    answer:
      'Yes. More demanding headings, trim conditions, lining requirements and layered builds are all part of the fabrication scope.',
  },
  {
    question: 'Can motorisation be planned from the start?',
    answer:
      'Yes. LuxAura can consider motorisation early so the tracks, controls and finish remain aligned with the overall brief.',
  },
  {
    question: 'Do you support both private and larger project work?',
    answer:
      'Yes. The workflow can support premium residential, boutique hospitality and wider commercial furnishing programs.',
  },
  {
    question: 'Can fabric, hardware and fabrication be aligned together?',
    answer:
      'Yes. LuxAura is structured to coordinate the textile, system selection and making logic through one project pathway.',
  },
] as const;

export const metadata: Metadata = {
  title: 'Window Treatments | Premium Curtains, Sheers and Roman Blind Fabrication',
  description:
    'LuxAura delivers curtains, sheers, Roman blinds and motorisation-ready layered systems with factory-backed fabrication capability and project-ready execution.',
  keywords: [
    'custom Roman blinds Sydney',
    'premium window treatments Sydney',
    'S-Fold drapes',
    'motorised curtain systems',
    'decorative trim integration',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/custom-curtains-sheers`,
  },
  openGraph: {
    title: 'Window Treatments | Premium Curtains, Sheers and Roman Blind Fabrication',
    description:
      'Premium window treatments with fabrication strength, motorisation support and project-backed execution.',
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
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,19,17,0.72)_0%,rgba(13,19,17,0.56)_36%,rgba(13,19,17,0.16)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,19,17,0.1)_0%,rgba(13,19,17,0.32)_100%)]" />

        <div className="container-custom relative flex min-h-[86svh] items-end pb-16 pt-36 sm:pb-20 sm:pt-40">
          <div className="max-w-4xl text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ead7a8]">
              Window Treatments
            </p>
            <h1 className="mt-5 max-w-3xl text-balance font-heading text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Manufacturing strength behind the finish
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/86 sm:text-xl sm:leading-8">
              LuxAura delivers curtains, sheers, Roman blinds and layered systems with
              factory-backed fabrication capability, advanced detailing and project-ready
              execution.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href={PROJECT_BRIEF_HREF} className="btn-primary">
                Submit a Project Brief
              </Link>
              <a
                href="#technical-strength"
                className="btn-secondary border-white/25 bg-white/12 text-white hover:bg-white/18 hover:text-white"
              >
                Explore Fabrication Capability
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Window Treatments', href: '/custom-curtains-sheers' }]} />
      </div>

      <section id="technical-strength" className="section-padding pt-6">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2.2rem] bg-[#163228] p-8 shadow-[0_30px_90px_rgba(17,27,24,0.18)] sm:p-10 lg:p-14">
            <SectionHeading
              eyebrow="Technical Strength"
              title="What sits behind a cleaner, stronger window result"
              description="More demanding treatments rely on better planning across trims, linings, motorisation and finish discipline."
              theme="dark"
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {TECHNICAL_STRENGTH.map(item => (
                <article
                  key={item.title}
                  className="rounded-[1.7rem] border border-white/10 bg-white/7 p-6 text-white backdrop-blur-sm"
                >
                  <h2 className="font-heading text-3xl font-semibold">{item.title}</h2>
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
            eyebrow="Window Categories"
            title="Structured around how projects actually specify window furnishings"
            description="Image-backed service blocks that reflect the treatments and layering logic brought into real project briefs."
          />

          <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 md:grid md:grid-cols-2 md:overflow-visible xl:grid-cols-3">
            {WINDOW_CATEGORIES.map(item => (
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
                      href="#motorisation"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-dark"
                    >
                      Learn More
                      <ArrowUpRight />
                    </Link>
                    <QuickInquiryDialog
                      styleName={item.title}
                      title={`Discuss: ${item.title}`}
                      subjectPrefix="Window Treatments Enquiry"
                      enquiryType="window-treatments-enquiry"
                      introText="Share the treatment direction, approximate dimensions and any fabric, lining or hardware conditions that matter."
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

      <section id="motorisation" className="section-padding pt-0">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2.3rem] bg-[#15110d] text-white shadow-[0_32px_90px_rgba(17,12,8,0.24)]">
            <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
              <div className="relative min-h-[21rem] lg:min-h-[38rem]">
                <Image
                  src="/images/IMG-I.webp"
                  alt="Motorised and layered window system in a premium room"
                  fill
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,8,6,0.08),rgba(10,8,6,0.26))]" />
              </div>
              <div className="p-8 sm:p-10 lg:p-14">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ead7a8]">
                  Motorisation
                </p>
                <h2 className="mt-4 text-balance font-heading text-4xl font-semibold sm:text-5xl">
                  Automation planned into the finish — not added later
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/78 sm:text-base">
                  Motorisation affects more than operation. It influences track choice, stacking,
                  control access, wiring logic and final visual cleanliness. LuxAura supports
                  motorised systems with the detailing awareness needed to keep the result elegant
                  and integrated.
                </p>
                <p className="mt-4 text-sm leading-7 text-white/64 sm:text-base">
                  Compatible with premium systems such as Somfy and Silent Gliss where suitable.
                </p>
                <div className="mt-8 grid gap-4">
                  {[
                    {
                      title: 'Leading System Compatibility',
                      description:
                        'Prepared to align with premium motorisation systems where automation is part of the brief.',
                    },
                    {
                      title: 'Cleaner Automated Integration',
                      description:
                        'Tracks, controls and movement paths are considered together so automation does not compromise the finish.',
                    },
                    {
                      title: 'Scalable for Different Project Types',
                      description:
                        'Suitable for refined residential work as well as larger multi-room or commercial furnishing environments.',
                    },
                  ].map(item => (
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

      <section className="section-padding pt-0">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Why LuxAura Direct"
            title="Why clients bring the brief to LuxAura directly"
            description="The strength sits in coordinated sourcing, fabrication control, motorisation planning and the ability to carry complex detailing cleanly."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {DIRECT_ITEMS.map(item => (
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

      <FaqSection
        items={[...FAQ_ITEMS]}
        title="Window treatment questions"
        description="Practical answers on motorisation, complexity and how the fabrication path is coordinated."
      />

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2.2rem] border border-white/65 bg-[linear-gradient(135deg,rgba(197,160,89,0.16),rgba(255,255,255,0.82)_36%,rgba(197,160,89,0.08)_100%)] p-8 shadow-[0_28px_80px_rgba(32,24,12,0.08)] sm:p-10 lg:p-12">
            <div className="max-w-3xl">
              <p className="eyebrow">Final CTA</p>
              <h2 className="mt-4 text-balance font-heading text-4xl font-semibold text-neutral-900 sm:text-5xl">
                Bring the window package into one controlled path
              </h2>
              <p className="mt-5 text-pretty text-[15px] leading-7 text-neutral-700 sm:text-lg">
                Bring LuxAura in when the brief needs curtains, sheers, Roman blinds and
                motorisation planned as one integrated furnishing layer.
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
