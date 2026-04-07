import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AccordionFaq from '@/components/AccordionFaq';
import Breadcrumb from '@/components/Breadcrumb';
import SectionHeading from '@/components/SectionHeading';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { generateFaqSchema } from '@/lib/faq-schema';
import {
  HARDWARE_SYSTEMS_FAQ,
  PROJECT_BRIEF_HREF,
  TRADE_PORTAL_ACCESS_HREF,
  TRADE_SUPPORT_HREF,
} from '@/lib/site-data';

const VALUE_CARDS = [
  {
    title: 'Better Track Quality',
    description: 'Smooth operation, stable movement and cleaner long-term performance across premium curtain execution.',
  },
  {
    title: 'Broader System Range',
    description: 'From slim architectural profiles to curved, layered and motorised directions aligned to different project conditions.',
  },
  {
    title: 'Project-Ready Flexibility',
    description: 'Suitable for sheers, blockouts, layered packages and more demanding glazing conditions without losing visual calm.',
  },
  {
    title: 'Stronger Commercial Value',
    description: 'A more competitive hardware resource that keeps finish quality, system capability and pricing discipline in better balance.',
  },
] as const;

const TRACK_RANGE_POINTS = [
  'Ceiling-fixed track systems',
  'Wall-mounted track systems',
  'Slim contemporary profiles',
  'Heavy-duty systems for lined and interlined curtains',
  'Curved and shaped track options',
] as const;

const TRACK_IMAGES = [
  {
    title: 'Curtain track close-up',
    imageSrc: '/images/carousel/09-Curtain-Track.webp',
    imageAlt: 'Close-up of a premium curtain track profile and glider system',
    className: 'sm:col-span-2 aspect-[16/10]',
  },
  {
    title: 'Glider detail',
    imageSrc: '/images/IMG-F.webp',
    imageAlt: 'Curtain hardware glider and bracket detail within a premium interior',
    className: 'aspect-[4/3]',
  },
  {
    title: 'Architectural recess',
    imageSrc: '/images/IMG-I.webp',
    imageAlt: 'Concealed curtain hardware integrated into a premium architectural recess',
    className: 'aspect-[4/3]',
  },
  {
    title: 'Refined ceiling integration',
    imageSrc: '/images/luxaura/hero-project.webp',
    imageAlt: 'Ceiling-mounted drapery track with a refined layered treatment',
    className: 'aspect-[4/3]',
  },
  {
    title: 'Curved and large-span support',
    imageSrc: '/images/luxaura/vertical-sheer-pool.webp',
    imageAlt: 'Installed curtain system across a larger opening with strong stack and line control',
    className: 'aspect-[4/3]',
  },
] as const;

const MOTOR_POINTS = [
  {
    title: 'Leading system compatibility',
    description:
      'Prepared to align with premium motorisation systems such as Somfy and Silent Gliss where the brief requires it.',
  },
  {
    title: 'Cleaner automated integration',
    description:
      'Tracks, controls and movement paths are considered together to avoid visible compromise and preserve a quieter finish.',
  },
  {
    title: 'Scalable across project types',
    description:
      'Suitable for refined residential work as well as broader multi-room and commercial furnishing environments.',
  },
] as const;

const INSTALLATION_BLOCKS = [
  {
    title: 'Ceiling Fix',
    description: 'Supports cleaner curtain lines, stronger full-height glazing integration and more discreet system presentation.',
  },
  {
    title: 'Wall Fix',
    description: 'Balances projection, bracket spacing and stack clearance where recess conditions are limited or decorative hardware is preferred.',
  },
  {
    title: 'Recess Integration',
    description: 'Coordinates track profile, recess depth and fabric stack so the finished treatment reads cleaner at the architectural edge.',
  },
  {
    title: 'Curved / Large Span Conditions',
    description: 'Helps broader openings and shaped glazing stay operationally stable without weakening the final drapery discipline.',
  },
] as const;

export const metadata: Metadata = {
  title: 'Hardware Systems | Premium Curtain Tracks and Motorised Integration',
  description:
    'LuxAura positions hardware systems as a specialist trade resource, covering premium curtain tracks, motorised systems, installation logic and stronger project value.',
  keywords: [
    'premium curtain tracks Sydney',
    'motorised curtain systems',
    'curtain hardware systems Australia',
    'architectural curtain tracks',
    'trade curtain hardware',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/hardware-systems`,
  },
  openGraph: {
    title: 'Hardware Systems | Premium Curtain Tracks and Motorised Integration',
    description:
      'A specialist hardware resource covering track quality, motorised systems, installation planning and cleaner curtain execution.',
    url: `${SITE_CONFIG.url}/hardware-systems`,
    images: ['/images/IMG-G.webp'],
  },
};

function ImagePanel({
  imageSrc,
  imageAlt,
  className,
}: {
  imageSrc: string;
  imageAlt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-white/70 bg-[#ddd4c3] shadow-[0_24px_80px_rgba(26,24,22,0.08)] ${className ?? 'aspect-[4/3]'}`}
    >
      <Image src={imageSrc} alt={imageAlt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
    </div>
  );
}

export default function HardwareSystemsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Hardware Systems', url: '/hardware-systems' },
  ]);
  const faqSchema = generateFaqSchema([...HARDWARE_SYSTEMS_FAQ]);

  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/IMG-G.webp"
          alt="Premium curtain hardware, pole and bracket detailing in a refined interior"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,14,13,0.78)_0%,rgba(12,14,13,0.58)_34%,rgba(12,14,13,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,14,13,0.08)_0%,rgba(12,14,13,0.34)_100%)]" />

        <div className="container-custom relative flex min-h-[84svh] items-end pb-16 pt-36 sm:pb-20 sm:pt-40">
          <div className="max-w-4xl text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#ead7a8]">
              Hardware Systems
            </p>
            <h1 className="mt-5 max-w-4xl text-balance font-heading text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              High-Performance Hardware Systems for Better Curtain Execution
            </h1>
            <p className="mt-6 max-w-3xl text-pretty text-base leading-7 text-white/84 sm:text-xl sm:leading-8">
              Engineered curtain tracks, motorised systems and mounting solutions designed for
              premium residential, designer-led and developer-driven interiors.
            </p>
            <p className="mt-4 max-w-3xl text-pretty text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
              LuxAura delivers a stronger hardware layer across track quality, system range,
              movement performance and project value, helping designers and project teams achieve
              cleaner drapery outcomes without overspending.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href={PROJECT_BRIEF_HREF} className="btn-primary">
                Discuss Hardware for Your Project
              </Link>
              <Link
                href={TRADE_SUPPORT_HREF}
                className="btn-secondary border-white/25 bg-white/12 text-white hover:bg-white/18 hover:text-white"
              >
                Request Trade Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Hardware Systems', href: '/hardware-systems' }]} />
      </div>

      <section className="px-4 pb-28 pt-8 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[9rem]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Value Proposition"
            title="A stronger hardware layer across movement, system logic and project value"
            description="These are not minor accessories. They are the system decisions that shape curtain line, movement quality, long-term reliability and commercial clarity."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {VALUE_CARDS.map(card => (
              <article key={card.title} className="section-shell p-7">
                <h2 className="font-heading text-3xl font-semibold text-neutral-900">{card.title}</h2>
                <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-28 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[9rem]">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="max-w-xl">
              <SectionHeading
                eyebrow="Track Systems"
                title="Track Systems Designed for Precision, Movement and Finish"
                description="The quality of a curtain track affects far more than operation. It influences stack behaviour, curtain line, alignment, longevity and the final visual discipline of the treatment."
              />
              <ul className="mt-8 space-y-3 text-sm leading-7 text-neutral-700 sm:text-base">
                {TRACK_RANGE_POINTS.map(point => (
                  <li
                    key={point}
                    className="flex items-start gap-3 rounded-[1.3rem] border border-primary/10 bg-white/55 px-5 py-4"
                  >
                    <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {TRACK_IMAGES.map(image => (
                <ImagePanel
                  key={image.title}
                  imageSrc={image.imageSrc}
                  imageAlt={image.imageAlt}
                  className={image.className}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-28 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[9rem]">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2.6rem] bg-[#18231e] px-6 py-14 text-white shadow-[0_32px_100px_rgba(20,25,21,0.18)] sm:px-10 lg:px-12 lg:py-16">
            <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div className="max-w-xl">
                <SectionHeading
                  eyebrow="Motorisation"
                  title="Motorised Systems for Contemporary Living and Larger Openings"
                  description="Motorised curtain systems are increasingly essential in premium residential and project-led interiors where large glazing, layered drapery and ease of operation must work together seamlessly."
                  theme="dark"
                />
                <p className="mt-6 text-sm leading-7 text-white/72 sm:text-base">
                  Motorisation changes more than operation. It influences track choice, stacking,
                  control access, wiring logic and final visual cleanliness. LuxAura supports
                  motorised systems with the detailing awareness needed to keep the result elegant,
                  reliable and specification-ready.
                </p>
                <ul className="mt-8 space-y-3 text-sm leading-7 text-white/74 sm:text-base">
                  <li>Ideal for full-height glazing and larger curtain spans</li>
                  <li>Suitable for layered sheer and blockout systems</li>
                  <li>Reduces handling on more delicate fabrics</li>
                  <li>Supports broader project specification and future-ready operation</li>
                </ul>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <ImagePanel
                  imageSrc="/images/IMG-I.webp"
                  imageAlt="Motorised curtain system integrated into a premium interior"
                  className="sm:col-span-2 aspect-[16/10] border-white/10"
                />
                <ImagePanel
                  imageSrc="/images/luxaura/vertical-sheer-pool.webp"
                  imageAlt="Layered drapery stack supported by a cleaner motorised track layout"
                  className="aspect-[4/3] border-white/10"
                />
                <ImagePanel
                  imageSrc="/images/carousel/09-Curtain-Track.webp"
                  imageAlt="Motor-ready curtain rail and track hardware detail"
                  className="aspect-[4/3] border-white/10"
                />
              </div>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {MOTOR_POINTS.map(item => (
                <article
                  key={item.title}
                  className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="font-heading text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/72 sm:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-28 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[9rem]">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <ImagePanel
              imageSrc="/images/IMG-H.webp"
              imageAlt="Premium curtain hardware detail integrated into a resolved furnishing scheme"
              className="aspect-[16/10]"
            />
            <div className="max-w-xl lg:pl-6">
              <SectionHeading
                eyebrow="Range + Value"
                title="Broader Choice. Better Finish. Stronger Value."
                description="LuxAura’s hardware resource gives designers and project teams access to a broader selection of track and motorised solutions while maintaining stronger commercial efficiency across specification and supply."
              />
              <p className="mt-6 text-sm leading-7 text-neutral-700 sm:text-base">
                The advantage is not about cheap hardware. It is about a better balance of finish
                quality, system capability and pricing discipline, so the project can be specified
                more intelligently from the beginning.
              </p>
              <div className="mt-8 rounded-[1.6rem] border border-primary/10 bg-white/60 px-6 py-6">
                <p className="text-sm leading-7 text-neutral-700 sm:text-base">
                  For decorative borders, tassels and edge detail that complete the furnishing
                  language, LuxAura carries that layer through a dedicated{' '}
                  <Link href="/decorative-trimmings" className="font-semibold text-primary">
                    Decorative Trimmings resource
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-28 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[9rem]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Installation Intelligence"
            title="Specified for Real-World Installation Conditions"
            description="Hardware selection is influenced not only by curtain style, but by ceiling condition, substrate, projection, recess depth, bracket spacing and operational clearance."
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="grid gap-5 md:grid-cols-2">
              {INSTALLATION_BLOCKS.map(block => (
                <article key={block.title} className="section-shell p-7">
                  <h3 className="font-heading text-3xl font-semibold text-neutral-900">
                    {block.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                    {block.description}
                  </p>
                </article>
              ))}
            </div>

            <ImagePanel
              imageSrc="/images/luxaura/vertical-sheer-pool.webp"
              imageAlt="Installed curtain hardware across a premium opening with clean stack and recess control"
              className="aspect-[16/10]"
            />
          </div>
        </div>
      </section>

      <AccordionFaq
        eyebrow="Hardware Questions"
        title="Questions on tracks, motorisation and project suitability"
        description="A few of the practical questions clients usually ask before the hardware path is confirmed."
        items={[...HARDWARE_SYSTEMS_FAQ]}
      />

      <section className="px-4 pb-28 pt-6 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[10rem]">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2.4rem] bg-[#14211c] px-6 py-12 text-white shadow-[0_32px_100px_rgba(20,25,21,0.18)] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#e0cb9f]">
                Final CTA
              </p>
              <h2 className="mt-5 text-balance font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                When the hardware matters, the system behind it matters too
              </h2>
              <p className="mt-6 max-w-3xl text-pretty text-sm leading-7 text-white/74 sm:text-lg sm:leading-8">
                Whether the project needs refined track systems, motorised integration or cleaner
                installation logic, LuxAura provides the specialist hardware layer that helps the
                brief land with greater control.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link href={PROJECT_BRIEF_HREF} className="btn-primary">
                Discuss a Project
              </Link>
              <Link
                href={TRADE_PORTAL_ACCESS_HREF}
                className="btn-secondary border-white/15 bg-white/10 text-white hover:border-white hover:bg-white hover:text-primary"
              >
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
