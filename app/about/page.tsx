import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { CONTACT_INFO, SITE_CONFIG } from '@/lib/constants';
import { TRADE_PORTAL_ACCESS_HREF, TRADE_SUPPORT_HREF } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'About LuxAura | Sydney Trade Partner for Soft-Furnishing Delivery',
  description:
    'Learn how LuxAura brings textile sourcing, fabrication, coordination and finishing capability into one more accountable project path.',
  keywords:
    'about LuxAura, Sydney trade partner, soft furnishing fulfillment, premium textile sourcing Sydney, furnishing delivery partner',
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
};

const FRAGMENTATION_ISSUES = [
  {
    title: 'Too Many Suppliers',
    description:
      'Projects slow down when fabrics, trims, hardware and making are split across too many disconnected providers.',
  },
  {
    title: 'Unclear Making Path',
    description:
      'A strong textile selection can still fail if there is no clear route from material choice into fabrication and final execution.',
  },
  {
    title: 'Retail-Led Experience',
    description:
      'Retail logic does not serve complex furnishing briefs well. Project teams need coordination, not isolated product transactions.',
  },
  {
    title: 'Lack of Accountability',
    description:
      'When the furnishing process fragments, responsibility becomes harder to trace at the point where the project most needs clarity.',
  },
] as const;

const LUXAURA_ADVANTAGES = [
  {
    title: 'Direct Source',
    description:
      'LuxAura combines its own range with broader textile partnerships so selection and pricing can stay more controlled.',
  },
  {
    title: 'Sydney-Backed Accountability',
    description:
      'Projects have a local Sydney-facing point of communication while drawing on broader sourcing and fabrication strength.',
  },
  {
    title: 'Fabrication Depth',
    description:
      'The business is shaped around making capability, not only product supply, allowing more complex briefs to move forward properly.',
  },
  {
    title: 'Multi-Category Control',
    description:
      'Fabric, upholstery, hardware, trims and window treatments can sit inside one broader furnishing pathway rather than several isolated ones.',
  },
] as const;

const WHO_WE_SUPPORT = [
  'Interior designers and decorators',
  'Builders and developers',
  'Boutique hospitality and accommodation projects',
  'Premium residential furnishing briefs',
  'Clients managing multi-layered soft-furnishing scope',
] as const;

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'About LuxAura', url: '/about' }]);

  return (
    <div>
      <PageHero
        eyebrow="About LuxAura"
        title="A Sydney trade partner built for premium soft-furnishing delivery"
        description="LuxAura was built to solve a common project problem: too many fragmented decisions between sourcing, fabrication, hardware, upholstery and final furnishing execution."
        imageSrc="/images/about-hero.webp"
        imageAlt="LuxAura project interior with layered sheers and refined upholstery"
      >
        <Link href={TRADE_PORTAL_ACCESS_HREF} className="btn-primary">
          Trade Portal Access
        </Link>
        <Link href={TRADE_SUPPORT_HREF} className="btn-secondary">
          Talk to the Trade Desk
        </Link>
      </PageHero>

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'About LuxAura', href: '/about' }]} />
      </div>

      <section className="section-padding pt-6">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Business Positioning"
            title="One partner from textile selection to final project readiness"
            description="LuxAura is structured to support projects that need more than a product supplier. The model brings together sourcing, fabrication, coordination and finishing capability so design decisions can move forward with greater control and fewer disconnects."
          />
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Why Clients Come To LuxAura"
            title="Because the furnishing process is often too fragmented"
            description="This is the problem LuxAura is designed to solve."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {FRAGMENTATION_ISSUES.map(item => (
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
          <div className="overflow-hidden rounded-[2.2rem] bg-[#163228] p-8 shadow-[0_30px_90px_rgba(17,27,24,0.18)] sm:p-10 lg:p-12">
            <SectionHeading
              eyebrow="What Makes LuxAura Stronger"
              title="The value is not only what we source. It is how we connect it."
              description="LuxAura becomes stronger when sourcing, making and delivery are treated as one connected furnishing system."
              theme="dark"
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {LUXAURA_ADVANTAGES.map(item => (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/12 bg-white/7 p-5"
                >
                  <h2 className="font-heading text-3xl font-semibold text-white">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-white/78">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <article className="section-shell p-8 sm:p-10">
            <SectionHeading
              eyebrow="Local Accountability"
              title="Sydney-based communication, globally backed capability"
              description="LuxAura operates with Sydney-facing project support while drawing on broader sourcing and fabrication strength. This allows the business to stay locally accountable without being limited to standard local supply constraints."
            />
            <p className="mt-6 text-sm leading-8 text-neutral-700 sm:text-base">
              The business operates from {CONTACT_INFO.address.display}, giving projects a local
              trade-facing point of communication while keeping access to a wider execution model.
            </p>
          </article>

          <article className="overflow-hidden rounded-[2rem] bg-[#14221c] p-8 text-white shadow-[0_28px_90px_rgba(20,25,21,0.18)] sm:p-10">
            <SectionHeading
              eyebrow="Who We Support"
              title="Built for professionals managing real furnishing decisions"
              description="The model is best suited to projects where the furnishing scope needs more coordination and accountability."
              theme="dark"
            />
            <ul className="mt-8 space-y-4 text-sm leading-7 text-white/78 sm:text-base">
              {WHO_WE_SUPPORT.map(group => (
                <li key={group}>{group}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2rem] border border-white/65 bg-[linear-gradient(135deg,rgba(197,160,89,0.16),rgba(255,255,255,0.84)_36%,rgba(197,160,89,0.08)_100%)] p-8 shadow-[0_28px_80px_rgba(32,24,12,0.08)] sm:p-10 lg:p-12">
            <div className="max-w-3xl">
              <p className="eyebrow">Final CTA</p>
              <h2 className="mt-4 text-balance font-heading text-4xl font-semibold text-neutral-900 sm:text-5xl">
                Bring the furnishing path under better control
              </h2>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href={TRADE_SUPPORT_HREF} className="btn-primary">
                Talk to the Trade Desk
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
    </div>
  );
}
