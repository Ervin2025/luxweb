import type { Metadata } from 'next';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import FaqSection from '@/components/FaqSection';
import ImageCodeBadge from '@/components/ImageCodeBadge';
import PartnerValueSection from '@/components/PartnerValueSection';
import SectionHeading from '@/components/SectionHeading';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { generateFaqSchema } from '@/lib/faq-schema';
import { getReplacementImageSrc } from '@/lib/image-replacements';
import { generateServiceSchema } from '@/lib/page-schema';
import { PROJECT_SUPPORT_FAQ } from '@/lib/site-data';

const CLIENT_PATHWAYS = [
  {
    title: 'Designers',
    description: 'Design-aware sourcing and execution support.',
    code: 'LXA-PS-02',
    imageSrc: getReplacementImageSrc('LXA-PS-02', '/images/IMG-I.webp'),
    imageAlt: 'Fabric books, hardware planning and furnishing drawing development for a project team',
  },
  {
    title: 'Stylists',
    description: 'Broader sourcing and finishing for resolved spaces.',
    code: 'LXA-PS-03',
    imageSrc: getReplacementImageSrc('LXA-PS-03', '/images/luxaura/upholstery-pillows.webp'),
    imageAlt: 'Layered soft furnishing palette with cushions, drapery and styling direction',
  },
  {
    title: 'Builders / Developers',
    description: 'Category alignment and technical coordination across scope.',
    code: 'LXA-PS-04',
    imageSrc: getReplacementImageSrc('LXA-PS-04', '/images/IMG-K.webp'),
    imageAlt: 'Builder and developer furnishing coordination in a refined project setting',
  },
  {
    title: 'Retailers / Brand Partners',
    description: 'Resource access and fulfilment for stronger brand outcomes.',
    code: 'LXA-PS-12',
    imageSrc: getReplacementImageSrc('LXA-PS-12', '/images/IMG-B.webp'),
    imageAlt: 'Decorative resource and product development detail for a retail or brand partner',
  },
  {
    title: 'Hospitality / Short-Stay Operators',
    description: 'Furnishing support where atmosphere and practicality must align.',
    code: 'LXA-PS-13',
    imageSrc: getReplacementImageSrc('LXA-PS-13', '/images/IMG-K.webp'),
    imageAlt: 'Boutique hospitality interior with layered soft furnishings and premium seating',
  },
] as const;

const SUPPORT_EDITORIAL_IMAGES = [
  {
    title: 'Material Direction & Scheme Review',
    description: 'Material pairing and scheme review with calmer coordination.',
    code: 'LXA-PS-06',
    imageSrc: getReplacementImageSrc('LXA-PS-06', '/images/about-hero.webp'),
    imageAlt: 'Material-led project detail supporting furnishing scheme development',
    aspectClassName: 'aspect-[4/5]',
  },
  {
    title: 'Specification Clarity & Project Alignment',
    description: 'Drawings and finish decisions aligned earlier.',
    code: 'LXA-PS-07',
    imageSrc: getReplacementImageSrc('LXA-PS-07', '/images/luxaura/hero-project.webp'),
    imageAlt: 'Calm project interior detail showing coordinated furnishing execution',
    aspectClassName: 'aspect-[16/10]',
  },
] as const;

const SUPPORT_SCOPE = [
  {
    title: 'Design Development Support',
    description: 'Concepts resolved into clearer soft-furnishing selections.',
  },
  {
    title: 'Drawing & Specification Assistance',
    description: 'Curtain, upholstery and hardware details clarified before procurement.',
  },
  {
    title: 'Visualisation & Scheme Support',
    description: 'Visual direction and material-led scheme support.',
  },
  {
    title: 'Procurement & Delivery Coordination',
    description: 'Categories coordinated toward production and installation readiness.',
  },
] as const;

const HOSPITALITY_SUPPORT = [
  {
    title: 'Boutique Hotels & Short-Stay',
    description: 'Soft-furnishing development for comfort and repeatable execution.',
  },
  {
    title: 'Restaurants, Cafés & Lifestyle Retail',
    description: 'Support for layered interiors with practical character.',
  },
  {
    title: 'Display Suites & Commercial Refresh Projects',
    description: 'Material coordination for impact with delivery control.',
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
    description: 'Fewer disconnected purchasing paths across categories.',
  },
  {
    title: 'Lower Coordination Burden',
    description: 'Less follow-up and more controlled communication.',
  },
  {
    title: 'Better Category Alignment',
    description: 'Fewer mismatches between concept and execution.',
  },
  {
    title: 'Less Time Loss',
    description: 'A cleaner path with fewer downstream delays.',
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
  twitter: {
    card: 'summary_large_image',
    title:
      'Project Support Sydney | Design Development, Procurement & Furnishing Delivery | LuxAura',
    description:
      'Design development, soft-furnishing procurement, specification support and delivery coordination for Sydney project teams.',
    images: [getReplacementImageSrc('LXA-PS-01', '/images/IMG-I.webp')],
  },
};

export default function ProjectSupportPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Project Support', url: '/project-support' },
  ]);
  const faqSchema = generateFaqSchema(PROJECT_SUPPORT_FAQ);
  const serviceSchema = generateServiceSchema({
    name: 'Project Support',
    description:
      'Design development, soft-furnishing procurement, specification support and delivery coordination for Sydney project teams.',
    path: '/project-support',
    serviceType: 'Soft-furnishing project support',
    image: getReplacementImageSrc('LXA-PS-01', '/images/IMG-I.webp'),
  });

  return (
    <div>
      <section className="px-4 pb-24 pt-20 max-[430px]:pb-20 max-[430px]:pt-16 sm:px-6 sm:pb-32 sm:pt-24 lg:px-8 lg:pb-[9.5rem] lg:pt-32">
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
              Design-aware sourcing, coordination and furnishing execution support.
            </p>
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
            description="Different project roles need different forms of support."
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
            description="Support between concept and execution."
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
            description="A support layer that reduces friction between concept and execution."
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
                description="Support for hospitality, short-stay and lifestyle spaces."
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
            description="Selective private support for furnishing-led residential projects."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <article className="section-shell p-6 sm:p-8">
              <p className="text-sm leading-7 text-neutral-700 sm:text-base">
                Private residential projects are accepted on a selective basis.
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
            description="A clearer path between visual direction and practical delivery."
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

      <FaqSection
        items={PROJECT_SUPPORT_FAQ}
        title="Project support FAQ"
        description="Answers to the questions clients ask before engaging LuxAura for design development, procurement coordination and furnishing delivery support."
      />

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
                LuxAura helps shape the next practical step.
              </p>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </div>
  );
}
