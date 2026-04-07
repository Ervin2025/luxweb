import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import ImageCodeBadge from '@/components/ImageCodeBadge';
import SectionHeading from '@/components/SectionHeading';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { PROJECT_BRIEF_HREF, TRADE_SUPPORT_HREF } from '@/lib/site-data';

const CLIENT_PATHWAYS = [
  {
    title: 'For Designers, Builders & Developers',
    description:
      'Design development, drawing refinement, system selection and specification support that helps furnishing ideas move toward project-ready execution.',
    code: 'LXA-PS-02',
    imageSrc: '/images/IMG-I.webp',
    imageAlt: 'Fabric books, hardware planning and furnishing drawing development for a project team',
  },
  {
    title: 'For Stylists',
    description:
      'Broader category sourcing, cohesive material direction and commercially smart procurement for spaces that need to look resolved without becoming overcomplicated or overbudget.',
    code: 'LXA-PS-03',
    imageSrc: '/images/luxaura/upholstery-pillows.webp',
    imageAlt: 'Layered soft furnishing palette with cushions, drapery and styling direction',
  },
  {
    title: 'For Hospitality, Short-Stay & Lifestyle Commercial Spaces',
    description:
      'A combined support pathway of visual refinement, procurement coordination and furnishing execution for spaces where atmosphere, durability and final presentation must work together.',
    code: 'LXA-PS-04',
    imageSrc: '/images/IMG-K.webp',
    imageAlt: 'Boutique hospitality interior with layered soft furnishings and premium seating',
  },
] as const;

const SUPPORT_EDITORIAL_IMAGES = [
  {
    title: 'Material Direction & Scheme Review',
    description:
      'Supporting design development with calmer material pairing, furnishing hierarchy and more resolved soft-furnishing language.',
    code: 'LXA-PS-06',
    imageSrc: '/images/about-hero.webp',
    imageAlt: 'Material-led project detail supporting furnishing scheme development',
    aspectClassName: 'aspect-[4/5]',
  },
  {
    title: 'Specification Clarity & Project Alignment',
    description:
      'Helping drawings, categories and finish decisions align before procurement and fabrication move too far downstream.',
    code: 'LXA-PS-07',
    imageSrc: '/images/luxaura/hero-project.webp',
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
    title: 'Brief & Visual Direction',
    description: 'Review the project intent, room function, visual goals and furnishing priorities.',
  },
  {
    number: '02',
    title: 'Design Development',
    description: 'Help refine materials, categories, systems and detail logic into a more resolved scope.',
  },
  {
    number: '03',
    title: 'Specification & Selection',
    description: 'Support practical selection decisions across fabric, window treatments, upholstery, hardware and decorative details.',
  },
  {
    number: '04',
    title: 'Procurement & Fabrication',
    description: 'Coordinate sourcing and making pathways so the furnishing scope moves with less fragmentation.',
  },
  {
    number: '05',
    title: 'Delivery & Installation Readiness',
    description: 'Help prepare the project for implementation with clearer alignment across product, making and site conditions.',
  },
] as const;

const WHY_SUPPORT_WORKS = [
  {
    title: 'Less Fragmented Sourcing',
    description:
      'Fewer disconnected purchasing paths across fabric, curtains, upholstery, hardware and trims.',
  },
  {
    title: 'Stronger Design-to-Execution Continuity',
    description:
      'A better bridge between visual direction and real production outcomes.',
  },
  {
    title: 'Better Technical and Material Alignment',
    description:
      'Selections made with greater awareness of fabrication, installation and use conditions.',
  },
  {
    title: 'More Practical Delivery Planning',
    description:
      'A clearer pathway from furnishing idea to execution-ready scope.',
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
};

export default function ProjectSupportPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Project Support', url: '/project-support' },
  ]);

  return (
    <div>
      <section className="px-4 pb-24 pt-28 sm:px-6 sm:pb-32 sm:pt-32 lg:px-8 lg:pb-[9.5rem] lg:pt-40">
        <div className="container-custom">
          <div className="grid items-center gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:gap-14">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-primary/70">
                Project Support
              </p>
              <h1 className="mt-4 text-balance font-heading text-[2.75rem] font-semibold leading-[0.98] tracking-[-0.045em] text-[#2C2C2C] sm:mt-5 sm:text-[4.5rem] sm:leading-[0.94] lg:text-[5.2rem]">
                Project Support That Moves Ideas Into Execution
              </h1>
              <p className="mt-5 max-w-[36rem] text-pretty text-[1rem] leading-[1.72] text-neutral-700 sm:mt-6 sm:text-[1.12rem] sm:leading-[1.8]">
                Design development, procurement coordination and furnishing delivery support for
                designers, builders, stylists and project-led spaces.
              </p>
              <p className="mt-4 max-w-[38rem] text-pretty text-[14px] leading-7 text-neutral-600 sm:mt-5 sm:text-[1rem] sm:leading-8">
                LuxAura supports projects that need more than sourcing alone. From design
                development and specification refinement to coordinated procurement and
                soft-furnishing delivery, we help visual ideas move toward a clearer, more
                buildable outcome.
              </p>

              <div className="mt-8 flex flex-col gap-3.5 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link href={PROJECT_BRIEF_HREF} className="btn-primary w-full sm:w-auto">
                  Submit a Project Brief
                </Link>
                <Link href={TRADE_SUPPORT_HREF} className="btn-secondary w-full sm:w-auto">
                  Access Trade Support
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[#ddd4c3] shadow-[0_28px_90px_rgba(26,24,22,0.08)] sm:rounded-[2.4rem]">
              <div className="relative aspect-[16/11] sm:aspect-[4/3]">
                <Image
                  src="/images/IMG-I.webp"
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
            eyebrow="Client Pathways"
            title="Built to Support Different Project Roles"
            description="LuxAura supports a range of project roles, each with different pressures, decision paths and furnishing priorities. Our support model is designed to respond accordingly."
          />
          <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-3">
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
                <div className="p-5 sm:p-8">
                  <h2 className="font-heading text-[2rem] font-semibold leading-tight text-neutral-900 sm:text-3xl">
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
            eyebrow="Support Scope"
            title="What Project Support Can Include"
            description="LuxAura’s role can sit between concept and execution, helping project teams bring greater structure, coordination and specification clarity to the soft-furnishing scope."
          />
          <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2">
            {SUPPORT_SCOPE.map(card => (
              <article
                key={card.title}
                className="rounded-[1.55rem] border border-primary/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(246,240,228,0.72))] p-5 shadow-[0_18px_50px_rgba(26,24,22,0.04)] sm:rounded-[1.8rem] sm:p-7"
              >
                <h2 className="font-heading text-[1.8rem] font-semibold leading-tight text-neutral-900 sm:text-3xl">{card.title}</h2>
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
          <div className="grid items-center gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:gap-14">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[#ddd4c3] shadow-[0_28px_90px_rgba(26,24,22,0.08)] sm:rounded-[2.4rem]">
              <div className="relative aspect-[4/3] sm:aspect-[16/10]">
                <Image
                  src="/images/IMG-K.webp"
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
              <article key={card.title} className="section-shell p-5 sm:p-7">
                <h3 className="font-heading text-[1.8rem] font-semibold leading-tight text-neutral-900 sm:text-3xl">{card.title}</h3>
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
            eyebrow="Method"
            title="How LuxAura Supports the Project"
            description="From early concept through to furnishing execution, LuxAura helps define a clearer path between visual direction and practical delivery."
          />
          <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 xl:grid-cols-5">
            {PROCESS_STEPS.map(step => (
              <article key={step.number} className="section-shell p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">
                  {step.number}
                </p>
                <h3 className="mt-4 font-heading text-[1.7rem] font-semibold leading-tight text-neutral-900 sm:text-[2rem]">
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
          <SectionHeading
            eyebrow="Commercial Value"
            title="Why Projects Use This Support Layer"
            description="The value is not only in what is sourced, but in how the soft-furnishing scope becomes clearer, more coordinated and less vulnerable to downstream errors."
          />
          <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
            {WHY_SUPPORT_WORKS.map(card => (
              <article key={card.title} className="section-shell p-5 sm:p-7">
                <h3 className="font-heading text-[1.8rem] font-semibold leading-tight text-neutral-900 sm:text-3xl">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[10rem]">
        <div className="container-custom">
          <div className="section-shell p-6 sm:p-10 lg:p-12">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-primary/70">
                Final CTA
              </p>
              <h2 className="mt-4 text-balance font-heading text-[2.35rem] font-semibold leading-[1.02] text-[#2C2C2C] sm:mt-5 sm:text-5xl lg:text-6xl">
                Need help turning a furnishing idea into a workable project scope?
              </h2>
              <p className="mt-5 max-w-3xl text-pretty text-[14px] leading-7 text-neutral-700 sm:mt-6 sm:text-[1rem] sm:leading-8">
                Submit drawings, room photos, early concepts or furnishing requirements. LuxAura
                can help shape the next practical step.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href={PROJECT_BRIEF_HREF} className="btn-primary w-full sm:w-auto">
                Submit a Project Brief
              </Link>
              <Link href={TRADE_SUPPORT_HREF} className="btn-secondary w-full sm:w-auto">
                Talk to the LuxAura Team
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
