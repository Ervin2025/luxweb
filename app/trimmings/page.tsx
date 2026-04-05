import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AccordionFaq from '@/components/AccordionFaq';
import Breadcrumb from '@/components/Breadcrumb';
import SectionHeading from '@/components/SectionHeading';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { generateFaqSchema } from '@/lib/faq-schema';
import { PROJECT_BRIEF_HREF, TRADE_PORTAL_ACCESS_HREF, TRADE_SUPPORT_HREF } from '@/lib/site-data';

const SPECIALIST_ACCESS = [
  {
    title: 'System Hardware',
    description:
      'Curtain tracks, poles, brackets and supporting components selected to resolve the technical layer properly.',
  },
  {
    title: 'Motorised Solutions',
    description:
      'Automation-ready paths that consider movement, control access and cleaner visual integration from the outset.',
  },
  {
    title: 'Decorative Trimmings',
    description:
      'Braids, borders, fringes and refined detailing resources that elevate curtains, Roman blinds and upholstery.',
  },
  {
    title: 'Hard-to-Source Finishes',
    description:
      'Specialist hardware finishes and decorative components that are difficult to gather through fragmented sourcing.',
  },
] as const;

const RESOURCE_CATEGORIES = [
  {
    title: 'Curtain Tracks',
    description:
      'Silent-running track systems selected for cleaner stacking, better movement and stronger architectural alignment.',
    imageSrc: '/images/IMG-G.webp',
    imageAlt: 'Installed curtain track and full-drop drapery detail',
  },
  {
    title: 'Decorative Poles & Finials',
    description:
      'Decorative hardware chosen where the final visual line needs more presence, proportion and finish character.',
    imageSrc: '/images/IMG-C.webp',
    imageAlt: 'Decorative curtain heading with refined trim and pole detail',
  },
  {
    title: 'Motorised Curtain Systems',
    description:
      'Motorised systems planned alongside the fabrication so the final result stays visually calm and technically reliable.',
    imageSrc: '/images/IMG-I.webp',
    imageAlt: 'Motorised curtain system in a premium beachfront room',
  },
  {
    title: 'Roman Blind Hardware',
    description:
      'Support systems and mechanism components that help Roman blinds stack, align and perform with more consistency.',
    imageSrc: '/images/luxaura/roman-blind-lounge.webp',
    imageAlt: 'Roman blind application supported by structured hardware planning',
  },
  {
    title: 'Trims, Braids & Borders',
    description:
      'Decorative trimming directions that sharpen edges, add softness or carry more custom detailing through the brief.',
    imageSrc: '/images/IMG-B.webp',
    imageAlt: 'Decorative trim and tassel detailing close-up',
  },
  {
    title: 'Specialty Hardware & Detail Components',
    description:
      'The small but critical parts that often determine whether the final furnishing layer feels fully resolved.',
    imageSrc: '/images/carousel/13-Product.webp',
    imageAlt: 'Specialty hardware component for detailed furnishing execution',
  },
] as const;

const WHY_THIS_EXISTS = [
  {
    title: 'Better Integration',
    description:
      'Tracks, trims, fabric behaviour and installation logic are considered together instead of being patched together late.',
  },
  {
    title: 'Cleaner Execution',
    description:
      'When the finishing layer is planned properly, the final result feels more controlled, more complete and less compromised.',
  },
  {
    title: 'Greater Design Freedom',
    description:
      'Access to deeper hardware and trim resources gives designers and project teams a stronger detailing language without extra sourcing complexity.',
  },
] as const;

const FAQ_ITEMS = [
  {
    question: 'Can LuxAura help with hard-to-find hardware?',
    answer:
      'Yes. The page exists to show that LuxAura can support the specialist hardware layer that many furnishing suppliers do not control well.',
  },
  {
    question: 'Is motorisation part of the hardware offer?',
    answer:
      'Yes. Motorised systems can be considered as part of the same support pathway so the automation logic and final finish remain aligned.',
  },
  {
    question: 'Are trims only for curtains?',
    answer:
      'No. Decorative trims can also support Roman blinds, cushions, upholstery and other textile applications where detail resolution matters.',
  },
] as const;

export const metadata: Metadata = {
  title: 'Hardware & Trimmings | Specialist Systems and Finishing Detail',
  description:
    'LuxAura provides access to tracks, motorised systems, decorative trimmings and specialist finishing elements that complete premium soft-furnishing briefs properly.',
  keywords: [
    'curtain tracks Sydney',
    'motorised curtain systems',
    'decorative trimmings',
    'specialist curtain hardware',
    'passementerie supplier Australia',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/trimmings`,
  },
  openGraph: {
    title: 'Hardware & Trimmings | Specialist Systems and Finishing Detail',
    description:
      'Tracks, motorised systems, decorative trims and specialist finishing detail for premium furnishing delivery.',
    url: `${SITE_CONFIG.url}/trimmings`,
    images: ['/images/IMG-B.webp'],
  },
};

export default function TrimmingsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Hardware & Trimmings', url: '/trimmings' },
  ]);
  const faqSchema = generateFaqSchema([...FAQ_ITEMS]);

  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/IMG-B.webp"
          alt="Luxury rail detail, decorative trim and premium drapery finish"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,14,13,0.74)_0%,rgba(12,14,13,0.58)_36%,rgba(12,14,13,0.16)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,14,13,0.1)_0%,rgba(12,14,13,0.34)_100%)]" />

        <div className="container-custom relative flex min-h-[84svh] items-end pb-16 pt-36 sm:pb-20 sm:pt-40">
          <div className="max-w-4xl text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ead7a8]">
              Hardware & Trimmings
            </p>
            <h1 className="mt-5 max-w-3xl text-balance font-heading text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              The specialist layer most suppliers cannot complete properly
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/84 sm:text-xl sm:leading-8">
              LuxAura gives projects access to the often-missing finishing layer: tracks, poles,
              motorised systems, decorative hardware and artisanal trimmings that bring both
              technical resolution and visual completeness.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href={TRADE_SUPPORT_HREF} className="btn-primary">
                Access Trade Support
              </Link>
              <Link
                href={PROJECT_BRIEF_HREF}
                className="btn-secondary border-white/25 bg-white/12 text-white hover:bg-white/18 hover:text-white"
              >
                Discuss a Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Hardware & Trimmings', href: '/trimmings' }]} />
      </div>

      <section className="section-padding pt-6">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Specialist Access"
            title="The resources behind a more complete brief"
            description="This is the detailing layer that often separates a generic furnishing outcome from a more resolved project finish."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {SPECIALIST_ACCESS.map(item => (
              <article key={item.title} className="section-shell p-7">
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
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Resource Categories"
            title="What this layer actually includes"
            description="Image-led categories that show the depth of hardware, systems and detailing support behind the final furnishing result."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {RESOURCE_CATEGORIES.map(item => (
              <article key={item.title} className="group section-shell overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden border-b border-primary/10">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 1023px) 100vw, 33vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,14,13,0.04)_0%,rgba(12,14,13,0.22)_100%)]" />
                </div>
                <div className="p-7">
                  <h2 className="font-heading text-3xl font-semibold text-neutral-900">
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

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2.3rem] shadow-[0_28px_90px_rgba(17,12,8,0.14)]">
              <Image
                src="/images/IMG-G.webp"
                alt="Installed curtain hardware and drapery detail in a premium interior"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="Why This Page Exists"
                title="Because the brief often breaks down at the finishing layer"
                description="The textile may be right, but the project still loses clarity if the tracks, trims and final detailing conditions are left unresolved."
              />
              <div className="mt-8 grid gap-4">
                {WHY_THIS_EXISTS.map(item => (
                  <article
                    key={item.title}
                    className="rounded-[1.5rem] border border-primary/10 bg-neutral-50 p-5"
                  >
                    <h3 className="font-heading text-2xl font-semibold text-neutral-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-neutral-700">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AccordionFaq
        items={[...FAQ_ITEMS]}
        title="Questions on systems, trims and specialist sourcing"
        description="A concise answer set covering the finishing layer that often gets left until too late."
      />

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2.2rem] border border-white/65 bg-[linear-gradient(135deg,rgba(197,160,89,0.16),rgba(255,255,255,0.82)_36%,rgba(197,160,89,0.08)_100%)] p-8 shadow-[0_28px_80px_rgba(32,24,12,0.08)] sm:p-10 lg:p-12">
            <div className="max-w-3xl">
              <p className="eyebrow">Final CTA</p>
              <h2 className="mt-4 text-balance font-heading text-4xl font-semibold text-neutral-900 sm:text-5xl">
                Resolve the finishing layer properly
              </h2>
              <p className="mt-5 text-pretty text-[15px] leading-7 text-neutral-700 sm:text-lg">
                Bring LuxAura in when the track systems, trims, motorisation and final detail need
                to land with more control and less sourcing complexity.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href={TRADE_SUPPORT_HREF} className="btn-primary">
                Access Trade Support
              </Link>
              <Link href={TRADE_PORTAL_ACCESS_HREF} className="btn-secondary">
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
