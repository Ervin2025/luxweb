import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import ImageCodeBadge from '@/components/ImageCodeBadge';
import ProjectEnquiryForm from '@/components/ProjectEnquiryForm';
import SectionHeading from '@/components/SectionHeading';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { CONTACT_INFO, SITE_CONFIG } from '@/lib/constants';
import {
  PROJECT_BRIEF_HREF,
  TRADE_PORTAL_ACCESS_HREF,
  TRADE_SUPPORT_HREF,
} from '@/lib/site-data';

const AUDIENCE_BLOCKS = [
  {
    title: 'Interior Designers & Decorators',
    description:
      'For projects requiring a stronger bridge between concept, specification and furnishing execution.',
  },
  {
    title: 'Builders & Developers',
    description:
      'For sites where soft-furnishing scope needs clearer technical coordination and more reliable delivery.',
  },
  {
    title: 'Stylists',
    description:
      'For projects requiring broader categories, cohesive material language and commercially sensible sourcing.',
  },
  {
    title: 'Hospitality & Short-Stay Operators',
    description:
      'For spaces where visual impact, durability and procurement efficiency must align.',
  },
  {
    title: 'Residential Upgrade Clients',
    description:
      'For larger or more detailed furnishing scopes requiring more than casual retail purchasing.',
  },
] as const;

const TRUST_CARDS = [
  {
    title: 'Direct Source Advantage',
    description:
      'Greater material access and stronger commercial efficiency through a more direct supply structure.',
  },
  {
    title: 'Fabrication Depth',
    description:
      'Support backed by real making capability across window treatments, upholstery and finishing layers.',
  },
  {
    title: 'Trade-Aware Project Support',
    description:
      'A working model designed for designers, builders and furnishing-led projects rather than only retail transactions.',
  },
  {
    title: 'Local Accountability',
    description:
      'Sydney-facing communication and project support with the responsiveness required for real delivery conditions.',
  },
] as const;

const TRADE_DESK_SUPPORT = [
  'Material and category direction',
  'Curtain and upholstery scope clarification',
  'Hardware and trimming coordination',
  'Project support enquiries',
  'Trade account and portal access',
  'Submission of drawings, images and project notes',
] as const;

export const metadata: Metadata = {
  title: 'About & Trade Desk | Soft Furnishing Trade Partner Sydney | LuxAura',
  description:
    'Learn how LuxAura supports designers, builders, stylists and project teams through sourcing, fabrication, project support and trade coordination in Sydney.',
  keywords: [
    'trade soft furnishings sydney',
    'furnishing supplier sydney',
    'custom curtains and upholstery sydney',
    'soft furnishing trade partner sydney',
    'designer support furnishing sydney',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
};

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'About & Trade Desk', url: '/about' },
  ]);

  return (
    <div>
      <section className="px-4 pb-24 pt-28 sm:px-6 sm:pb-28 sm:pt-32 lg:px-8 lg:pb-[9rem] lg:pt-40">
        <div className="container-custom">
          <div className="grid items-center gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:gap-14">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-primary/70">
                About & Trade Desk
              </p>
              <h1 className="mt-4 text-balance font-heading text-[2.75rem] font-semibold leading-[0.98] tracking-[-0.045em] text-[#2C2C2C] sm:mt-5 sm:text-[4.5rem] sm:leading-[0.94] lg:text-[5.25rem]">
                A Sydney Partner for Soft-Furnishing Execution
              </h1>
              <p className="mt-5 max-w-[36rem] text-pretty text-[1rem] leading-[1.72] text-neutral-700 sm:mt-6 sm:text-[1.12rem] sm:leading-[1.8]">
                LuxAura brings sourcing, fabrication, furnishing coordination and project support
                into one accountable path.
              </p>
              <p className="mt-4 max-w-[38rem] text-pretty text-[14px] leading-7 text-neutral-600 sm:mt-5 sm:text-[1rem] sm:leading-8">
                Built for designers, builders, stylists and project-led clients, LuxAura helps
                align materials, fabrication and delivery decisions with greater control and less
                fragmentation.
              </p>

              <div className="mt-8 flex flex-col gap-3.5 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link href={TRADE_PORTAL_ACCESS_HREF} className="btn-primary w-full sm:w-auto">
                  Trade Portal Access
                </Link>
                <Link href="#project-enquiry" className="btn-secondary w-full sm:w-auto">
                  Submit a Project Brief
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[#ddd4c3] shadow-[0_28px_90px_rgba(26,24,22,0.08)] sm:rounded-[2.4rem]">
              <div className="relative aspect-[16/11] sm:aspect-[4/3]">
                <Image
                  src="/images/about-hero.webp"
                  alt="Refined drapery and upholstery detail within a premium Sydney furnishing project"
                  fill
                  priority
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  className="object-cover"
                />
                <ImageCodeBadge code="LXA-ABOUT-01" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'About & Trade Desk', href: '/about' }]} />
      </div>

      <section className="px-4 pb-24 pt-8 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[9.5rem]">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="max-w-3xl">
              <SectionHeading
                eyebrow="Brand Positioning"
                title="What LuxAura Is Built to Do"
                description="LuxAura is structured to do more than supply fabrics or finished pieces in isolation."
              />
              <p className="mt-5 text-pretty text-[14px] leading-7 text-neutral-700 sm:mt-6 sm:text-[1.02rem] sm:leading-8">
                The business brings together sourcing, specialist fabrication, hardware systems,
                decorative finishing and project support so soft-furnishing decisions can move
                toward cleaner execution.
              </p>
              <p className="mt-4 text-pretty text-[14px] leading-7 text-neutral-700 sm:mt-5 sm:text-[1.02rem] sm:leading-8">
                This makes LuxAura particularly relevant for projects where materials, systems and
                detailing need to work together, not as separate purchases, but as one coordinated
                furnishing pathway.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[#ddd4c3] shadow-[0_24px_80px_rgba(26,24,22,0.08)] sm:rounded-[2.2rem]">
              <div className="relative aspect-[4/3] sm:aspect-[16/10]">
                <Image
                  src="/images/luxaura/hero-project.webp"
                  alt="Material-led curtain and furnishing detail showing LuxAura’s project delivery focus"
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover"
                />
                <ImageCodeBadge code="LXA-ABOUT-02" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[9.5rem]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Audience"
            title="Who We Work With"
            description="The LuxAura model is designed for furnishing decisions that need more clarity, coordination and commercial intelligence than a casual retail pathway can offer."
          />
          <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 xl:grid-cols-5">
            {AUDIENCE_BLOCKS.map(block => (
              <article
                key={block.title}
                className="rounded-[1.55rem] border border-primary/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(246,240,228,0.72))] p-5 shadow-[0_18px_50px_rgba(26,24,22,0.04)] sm:rounded-[1.7rem] sm:p-6"
              >
                <h2 className="font-heading text-[1.75rem] font-semibold leading-tight text-neutral-900 sm:text-[2rem]">
                  {block.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                  {block.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[9.5rem]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Trust"
            title="Why LuxAura"
            description="The value is not only what is sourced. It is how materials, making, detailing and delivery stay connected through one more credible trade pathway."
          />
          <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
            {TRUST_CARDS.map(card => (
              <article key={card.title} className="section-shell p-5 sm:p-7">
                <h2 className="font-heading text-[1.8rem] font-semibold leading-tight text-neutral-900 sm:text-3xl">{card.title}</h2>
                <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="trade-desk" className="px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[9.5rem]">
        <div className="container-custom">
          <div className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr] lg:items-start lg:gap-8">
            <article className="section-shell p-6 sm:p-10">
              <SectionHeading
                eyebrow="Trade Desk Support"
                title="Trade Desk Support"
                description="LuxAura’s trade desk is designed to support enquiries that need more than a simple price check."
              />
              <p className="mt-5 text-pretty text-[14px] leading-7 text-neutral-700 sm:mt-6 sm:text-[1rem] sm:leading-8">
                This includes specification support, furnishing coordination, project
                clarification, category alignment and guidance on the next practical step.
              </p>
            </article>

            <article className="overflow-hidden rounded-[2rem] bg-[#14221c] p-6 text-white shadow-[0_28px_90px_rgba(20,25,21,0.18)] sm:rounded-[2.2rem] sm:p-10">
              <h2 className="font-heading text-[2.35rem] font-semibold leading-[1.02] text-white sm:text-4xl">
                Trade Desk Can Support With
              </h2>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-white/76 sm:text-base">
                {TRADE_DESK_SUPPORT.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#dfc99f]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-[1.45rem] border border-white/12 bg-white/6 p-5 sm:rounded-[1.6rem] sm:p-6">
                <h3 className="font-heading text-[1.95rem] font-semibold text-white sm:text-3xl">Contact details</h3>
                <div className="mt-5 space-y-4 text-sm leading-7 text-white/76 sm:text-base">
                  <p>
                    <span className="font-semibold text-white">Phone:</span> {CONTACT_INFO.phone}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Email:</span> {CONTACT_INFO.email}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Location:</span>{' '}
                    {CONTACT_INFO.address.display}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Availability:</span>{' '}
                    {CONTACT_INFO.hours}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="project-enquiry" className="px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[9.5rem]">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl">
            <SectionHeading
              eyebrow="Project Enquiry"
              title="Send the Brief to the Right LuxAura Team"
              description="Use this form for project support, sourcing enquiries, specification assistance, upholstery questions, hardware selection, decorative trimming support or broader furnishing coordination."
              align="center"
            />
            <div className="mt-8 sm:mt-10">
              <ProjectEnquiryForm submitLabel="Send to Trade Desk" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-[10rem]">
        <div className="container-custom">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-8">
            <article className="section-shell p-6 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-primary/70">
                Closing Reassurance
              </p>
              <h2 className="mt-4 text-balance font-heading text-[2.35rem] font-semibold leading-[1.02] text-[#2C2C2C] sm:mt-5 sm:text-5xl">
                Structured for projects that need more clarity before commitment
              </h2>
              <p className="mt-5 max-w-3xl text-pretty text-[14px] leading-7 text-neutral-700 sm:mt-6 sm:text-[1rem] sm:leading-8">
                LuxAura helps shape clearer soft-furnishing pathways before sourcing, fabrication
                and site coordination become fragmented or costly to correct.
              </p>
              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link href={PROJECT_BRIEF_HREF} className="btn-primary w-full sm:w-auto">
                  Submit a Project Brief
                </Link>
                <Link href={TRADE_SUPPORT_HREF} className="btn-secondary w-full sm:w-auto">
                  Talk to the LuxAura Team
                </Link>
              </div>
            </article>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[#ddd4c3] shadow-[0_24px_80px_rgba(26,24,22,0.08)] sm:rounded-[2.2rem]">
              <div className="relative aspect-[4/3] sm:aspect-[16/10]">
                <Image
                  src="/images/luxaura/beach-sheer.webp"
                  alt="Quiet soft-furnishing detail with layered material calm and clean finish"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
                <ImageCodeBadge code="LXA-ABOUT-03" />
              </div>
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
