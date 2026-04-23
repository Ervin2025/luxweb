import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import ImageCodeBadge from '@/components/ImageCodeBadge';
import PartnerValueSection from '@/components/PartnerValueSection';
import SectionHeading from '@/components/SectionHeading';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { getReplacementImageSrc } from '@/lib/image-replacements';
import {
  PROJECT_BRIEF_HREF,
  TRADE_PORTAL_ACCESS_HREF,
} from '@/lib/site-data';

const CLIENT_PATHWAYS = [
  {
    title: 'Designers',
    description:
      'Design-aware sourcing, specification refinement and execution support that help schemes stay original and more buildable.',
    code: 'LXA-PS-02',
    imageSrc: getReplacementImageSrc('LXA-PS-02', '/images/IMG-I.webp'),
    imageAlt: 'Fabric books, hardware planning and furnishing drawing development for a project team',
  },
  {
    title: 'Stylists',
    description:
      'Broader category sourcing, stronger finishing language and commercially smart procurement for spaces that need to feel resolved.',
    code: 'LXA-PS-03',
    imageSrc: getReplacementImageSrc('LXA-PS-03', '/images/luxaura/upholstery-pillows.webp'),
    imageAlt: 'Layered soft furnishing palette with cushions, drapery and styling direction',
  },
  {
    title: 'Builders / Developers',
    description:
      'Category alignment, technical coordination and furnishing support that reduce disconnected decisions across the soft-furnishing scope.',
    code: 'LXA-PS-04',
    imageSrc: getReplacementImageSrc('LXA-PS-04', '/images/IMG-K.webp'),
    imageAlt: 'Builder and developer furnishing coordination in a refined project setting',
  },
  {
    title: 'Retailers / Brand Partners',
    description:
      'More distinctive resource access, small-batch custom flexibility and broader fulfilment support for more competitive brand outcomes.',
    code: 'LXA-PS-12',
    imageSrc: getReplacementImageSrc('LXA-PS-12', '/images/IMG-B.webp'),
    imageAlt: 'Decorative resource and product development detail for a retail or brand partner',
  },
  {
    title: 'Hospitality / Short-Stay Operators',
    description:
      'A combined pathway of visual refinement, procurement coordination and furnishing execution for spaces where atmosphere and practicality must work together.',
    code: 'LXA-PS-13',
    imageSrc: getReplacementImageSrc('LXA-PS-13', '/images/IMG-K.webp'),
    imageAlt: 'Boutique hospitality interior with layered soft furnishings and premium seating',
  },
] as const;

const SUPPORT_EDITORIAL_IMAGES = [
  {
    title: 'Material Direction & Scheme Review',
    description:
      'Supporting design development with calmer material pairing, furnishing hierarchy and more resolved soft-furnishing language.',
    code: 'LXA-PS-06',
    imageSrc: getReplacementImageSrc('LXA-PS-06', '/images/about-hero.webp'),
    imageAlt: 'Material-led project detail supporting furnishing scheme development',
    aspectClassName: 'aspect-[4/5]',
  },
  {
    title: 'Specification Clarity & Project Alignment',
    description:
      'Helping drawings, categories and finish decisions align before procurement and fabrication move too far downstream.',
    code: 'LXA-PS-07',
    imageSrc: getReplacementImageSrc('LXA-PS-07', '/images/luxaura/hero-project.webp'),
    imageAlt: 'Calm project interior detail showing coordinated furnishing execution',
    aspectClassName: 'aspect-[16/10]',
  },
] as const;

const SUPPORT_SCOPE = [
  {
    title: 'Design Development Support',
    description:
      'Helping concepts move into more resolved soft-furnishing selections, material direction and execution logic.',
  },
  {
    title: 'Drawing & Specification Assistance',
    description:
      'Supporting designers and builders with refinement of curtain, upholstery, hardware and furnishing details before procurement.',
  },
  {
    title: 'Visualisation & Scheme Support',
    description:
      'Assisting with visual direction and material-led scheme development for selected residential, hospitality and commercial refresh projects.',
  },
  {
    title: 'Procurement & Delivery Coordination',
    description:
      'Helping consolidate categories, reduce sourcing fragmentation and move selected scopes toward production and installation readiness.',
  },
] as const;

const HOSPITALITY_SUPPORT = [
  {
    title: 'Boutique Hotels & Short-Stay',
    description:
      'Soft-furnishing development for spaces that need comfort, photography appeal and repeatable execution.',
  },
  {
    title: 'Restaurants, Cafés & Lifestyle Retail',
    description:
      'Support for layered, visually distinctive interiors where decorative character and practicality must coexist.',
  },
  {
    title: 'Display Suites & Commercial Refresh Projects',
    description:
      'Material and furnishing coordination for spaces that need stronger impact without losing delivery control.',
  },
] as const;

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Brief & Direction',
    description: 'Understanding the project, design intent and furnishing priorities.',
  },
  {
    number: '02',
    title: 'Resource Alignment',
    description: 'Bringing together suitable materials, decorative layers, technical support and practical requirements.',
  },
  {
    number: '03',
    title: 'Refinement & Coordination',
    description: 'Helping shape a more coherent and workable furnishing direction.',
  },
  {
    number: '04',
    title: 'Fabrication & Fulfilment',
    description: 'Moving selected scope into controlled production and delivery pathways.',
  },
  {
    number: '05',
    title: 'Final Project Readiness',
    description: 'Supporting a cleaner handover toward styling, installation or project completion.',
  },
] as const;

const WHY_SUPPORT_WORKS = [
  {
    title: 'Less Fragmented Sourcing',
    description:
      'Fewer disconnected purchasing paths across fabric, curtains, upholstery, hardware and trims.',
  },
  {
    title: 'Lower Coordination Burden',
    description:
      'Less follow-up, fewer duplicated decisions and more controlled communication across the furnishing brief.',
  },
  {
    title: 'Better Category Alignment',
    description:
      'Fewer mismatched categories between concept, practicality and the final furnishing outcome.',
  },
  {
    title: 'Less Time Loss',
    description:
      'A cleaner path from furnishing idea to execution-ready scope with fewer downstream delays.',
  },
] as const;

export const metadata: Metadata = {
  title:
    'Project Support Sydney | Design Development, Procurement & Furnishing Delivery | LuxAura',
  description:
    'LuxAura supports designers, builders, stylists and hospitality projects through design development, soft-furnishing procurement, specification support and delivery coordination in Sydney.',
  keywords: [
    'project support sydney',
    'soft furnishing project support sydney',
    'design development support sydney',
    'curtain specification support sydney',
    'hospitality furnishing support sydney',
    'furnishing procurement sydney',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/project-support`,
  },
  openGraph: {
    title:
      'Project Support Sydney | Design Development, Procurement & Furnishing Delivery | LuxAura',
    description:
      'Design development, soft-furnishing procurement, specification support and delivery coordination for Sydney project teams.',
    url: `${SITE_CONFIG.url}/project-support`,
    images: [getReplacementImageSrc('LXA-PS-01', '/images/IMG-I.webp')],
  },
};

export default function ProjectSupportPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Project Support', url: '/project-support' },
  ]);

  return (
    <div>
      <section className="px-4 pb-24 pt-28 max-[430px]:pb-20 max-[430px]:pt-26 sm:px-6 sm:pb-32 sm:pt-32 lg:px-8 lg:pb-[9.5rem] lg:pt-40">
        <div className="container-custom">
          <div className="grid items-center gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:gap-14">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-primary/70">
                Project Support
              </p>
              <h1 className="mt-4 text-balance font-heading text-[2.75rem] font-semibold leading-[0.98] tracking-[-0.045em] text-[#2C2C2C] max-[430px]:text-[2.4rem] sm:mt-5 sm:text-[4.5rem] sm:leading-[0.94] lg:text-[5.2rem]">
                Project Support That Reduces Workload and Moves Furnishing Decisions Forward
              </h1>
              <p className="mt-5 max-w-[36rem] text-pretty text-[1rem] leading-[1.72] text-neutral-700 sm:mt-6 sm:text-[1.12rem] sm:leading-[1.8]">
                LuxAura supports designers, builders, retailers, stylists and project-led clients
                through design-aware sourcing, coordination and furnishing execution support.
              </p>
              <p className="mt-4 max-w-[38rem] text-pretty text-[14px] leading-7 text-neutral-600 sm:mt-5 sm:text-[1rem] sm:leading-8">
                From design clarification and decorative resources to procurement coordination and
                execution-ready support, LuxAura helps reduce friction behind the furnishing
                outcome.
              </p>

              <div className="mt-8 flex flex-col gap-3.5 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link href={PROJECT_BRIEF_HREF} className="btn-primary w-full sm:w-auto">
                  Project Enquiry
                </Link>
                <Link href={TRADE_PORTAL_ACCESS_HREF} className="btn-secondary w-full sm:w-auto">
                  Trade Account
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[#ddd4c3] shadow-[0_28px_90px_rgba(26,24,22,0.08)] max-[430px]:rounded-[1.55rem] sm:rounded-[2.4rem]">
              <div className="relative aspect-[16/11] max-[430px]:aspect-[5/4] sm:aspect-[4/3]">
                <Image
                  src={getReplacementImageSrc('LXA-PS-01', '/images/IMG-I.webp')}
                  alt="LuxAura project support scene with fabric books, trims and furnishing development"
                  fill
                  priority
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  className="object-cover"
                />
                <ImageCodeBadge code="LXA-PS-01" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Project Support', href: '/project-support' }]} />
      </div>

      <section className="px-4 pb-24 pt-8 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[9.5rem]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Partner Types"
            title="Built to Support Different Partner Types"
            description="Different project roles need different forms of support. LuxAura is structured to respond accordingly."
          />
          <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-5">
            {CLIENT_PATHWAYS.map(card => (
              <article key={card.title} className="section-shell overflow-hidden">
                <div className="relative aspect-[4/3] sm:aspect-[16/10]">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 32vw, 100vw"
                    className="object-cover"
                  />
                  <ImageCodeBadge code={card.code} />
                </div>
                <div className="p-5 max-[430px]:p-4 sm:p-8">
                  <h2 className="font-heading text-[2rem] font-semibold leading-tight text-neutral-900 max-[430px]:text-[1.7rem] sm:text-3xl">
                    {card.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[9.5rem]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="What Support Can Include"
            title="What Support Can Include"
            description="LuxAura’s role can sit between concept and execution, helping project teams bring greater structure, coordination and specification clarity to the soft-furnishing scope."
          />
          <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2">
            {SUPPORT_SCOPE.map(card => (
              <article
                key={card.title}
                className="rounded-[1.55rem] border border-primary/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(246,240,228,0.72))] p-5 shadow-[0_18px_50px_rgba(26,24,22,0.04)] max-[430px]:rounded-[1.35rem] max-[430px]:p-4 sm:rounded-[1.8rem] sm:p-7"
              >
                <h2 className="font-heading text-[1.8rem] font-semibold leading-tight text-neutral-900 max-[430px]:text-[1.6rem] sm:text-3xl">{card.title}</h2>
                <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                  {card.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:gap-6 lg:grid-cols-[0.88fr_1.12fr]">
            {SUPPORT_EDITORIAL_IMAGES.map(image => (
              <article key={image.code} className="section-shell overflow-hidden">
                <div className={`relative ${image.aspectClassName}`}>
                  <Image
                    src={image.imageSrc}
                    alt={image.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 44vw, 100vw"
                    className="object-cover"
                  />
                  <ImageCodeBadge code={image.code} />
                </div>
                <div className="p-5 sm:p-8">
                  <h3 className="font-heading text-[2rem] font-semibold leading-tight text-neutral-900 sm:text-3xl">
                    {image.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                    {image.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[9.5rem]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Reduced Friction"
            title="What LuxAura Helps Reduce"
            description="This support layer is valuable because it reduces the friction that often sits between concept and execution."
          />
          <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
            {WHY_SUPPORT_WORKS.map(card => (
              <article key={card.title} className="section-shell p-5 max-[430px]:p-4 sm:p-7">
                <h3 className="font-heading text-[1.8rem] font-semibold leading-tight text-neutral-900 max-[430px]:text-[1.6rem] sm:text-3xl">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PartnerValueSection className="pb-0" />

      <section className="px-4 pb-24 pt-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[9.5rem]">
        <div className="container-custom">
          <div className="grid items-center gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:gap-14">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[#ddd4c3] shadow-[0_28px_90px_rgba(26,24,22,0.08)] sm:rounded-[2.4rem]">
              <div className="relative aspect-[4/3] sm:aspect-[16/10]">
                <Image
                  src={getReplacementImageSrc('LXA-PS-05', '/images/IMG-K.webp')}
                  alt="Boutique hospitality interior with refined drapery, seating and soft furnishing atmosphere"
                  fill
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  className="object-cover"
                />
                <ImageCodeBadge code="LXA-PS-05" />
              </div>
            </div>

            <div className="max-w-xl">
              <SectionHeading
                eyebrow="Hospitality"
                title="Support for Hospitality, Short-Stay and Lifestyle Spaces"
                description="LuxAura supports boutique hotels, short-stay accommodation, lifestyle retail, restaurants, cafés and visual commercial refresh projects where atmosphere, durability, procurement efficiency and final presentation all matter."
              />
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-3">
            {HOSPITALITY_SUPPORT.map(card => (
              <article key={card.title} className="section-shell p-5 max-[430px]:p-4 sm:p-7">
                <h3 className="font-heading text-[1.8rem] font-semibold leading-tight text-neutral-900 max-[430px]:text-[1.6rem] sm:text-3xl">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[9.5rem]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Selected Private Projects"
            title="Selected Private Projects"
            description="Private clients with furnishing-led residential projects can also access LuxAura’s structured support where a more complete and coordinated outcome is required."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <article className="section-shell p-6 sm:p-8">
              <p className="text-sm leading-7 text-neutral-700 sm:text-base">
                LuxAura primarily supports trade and project-led clients. Private residential
                projects are accepted on a selective basis where scope, scale and alignment are
                suitable.
              </p>
            </article>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/70 bg-[#ddd4c3] shadow-[0_24px_80px_rgba(26,24,22,0.08)] sm:rounded-[2.2rem]">
              <Image
                src={getReplacementImageSrc('LXA-PS-14', '/images/luxaura/beach-sheer.webp')}
                alt="Quiet luxury private residential furnishing detail suited to selective LuxAura support"
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
              <ImageCodeBadge code="LXA-PS-14" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[9.5rem]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Method"
            title="How LuxAura Supports the Project"
            description="From early concept through to furnishing execution, LuxAura helps define a clearer path between visual direction and practical delivery."
          />
          <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 xl:grid-cols-5">
            {PROCESS_STEPS.map(step => (
              <article key={step.number} className="section-shell p-5 max-[430px]:p-4 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">
                  {step.number}
                </p>
                <h3 className="mt-4 font-heading text-[1.7rem] font-semibold leading-tight text-neutral-900 max-[430px]:text-[1.5rem] sm:text-[2rem]">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-neutral-700">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[10rem]">
        <div className="container-custom">
          <div className="section-shell p-6 max-[430px]:p-5 sm:p-10 lg:p-12">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-primary/70">
                Final CTA
              </p>
              <h2 className="mt-4 text-balance font-heading text-[2.35rem] font-semibold leading-[1.02] text-[#2C2C2C] max-[430px]:text-[2.1rem] sm:mt-5 sm:text-5xl lg:text-6xl">
                Need help turning a furnishing idea into a workable project scope?
              </h2>
              <p className="mt-5 max-w-3xl text-pretty text-[14px] leading-7 text-neutral-700 sm:mt-6 sm:text-[1rem] sm:leading-8">
                Submit drawings, room photos, early concepts or furnishing requirements. LuxAura
                can help shape the next practical step.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href={PROJECT_BRIEF_HREF} className="btn-primary w-full sm:w-auto">
                Project Enquiry
              </Link>
              <Link href={TRADE_PORTAL_ACCESS_HREF} className="btn-secondary w-full sm:w-auto">
                Trade Account
              </Link>
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
