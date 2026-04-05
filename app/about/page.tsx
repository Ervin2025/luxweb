import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { CONTACT_INFO, SITE_CONFIG } from '@/lib/constants';
import { GET_QUOTE_HREF } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'About LuxAura | Family-Owned Textile Fulfillment Partner',
  description:
    'Learn how LuxAura combines family-owned leadership, premium textile sourcing and Sydney-based accountability for project delivery.',
  keywords:
    'about LuxAura, family-owned textile partner, Chatswood textile support, Sydney soft furnishing delivery, premium fabric sourcing Sydney',
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
};

const ABOUT_HIGHLIGHTS = [
  {
    title: '100% Family-Owned',
    description:
      'LuxAura is led as a family-owned Australian business, giving projects continuity, direct communication and local accountability.',
  },
  {
    title: 'Sydney-Backed Delivery',
    description:
      'Global sourcing and manufacturing are coordinated through a Sydney team that stays responsible for the final outcome.',
  },
  {
    title: 'Premium Textile Positioning',
    description:
      'The offer combines LuxAura signature ranges with leading international mills, integrated fabrication and site-ready finishing.',
  },
] as const;

const WHO_WE_SUPPORT = [
  'Interior designers and decorators',
  'Builders, developers and project teams',
  'Hospitality and commercial fit-outs',
  'Homeowners who need complex soft-furnishing delivery',
] as const;

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'About LuxAura', url: '/about' }]);

  return (
    <div>
      <PageHero
        eyebrow="About LuxAura"
        title="A family-owned Sydney business built for premium textile fulfillment"
        description="From global sourcing to master fabrication, LuxAura operates as one accountable partner for whole-home soft-furnishing delivery."
        imageSrc="/images/luxaura/beach-sheer.webp"
        imageAlt="LuxAura drapery project with Sydney coastal outlook"
      >
        <Link href="/trade/login" className="btn-primary">
          TRADE PORTAL ACCESS
        </Link>
        <Link href={GET_QUOTE_HREF} className="btn-secondary">
          Request a Trade Quote
        </Link>
      </PageHero>

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'About LuxAura', href: '/about' }]} />
      </div>

      <section className="section-padding pt-6">
        <div className="container-custom">
          <div className="grid gap-6 lg:grid-cols-[1.04fr_0.96fr]">
            <article className="section-shell p-8 sm:p-10">
              <SectionHeading
                eyebrow="Business Positioning"
                title="One partner from textile selection to final project readiness"
                description="LuxAura is not set up as a showroom-only supplier. The business is structured to source, fabricate and coordinate delivery through one commercial path."
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {ABOUT_HIGHLIGHTS.map(item => (
                  <article
                    key={item.title}
                    className="rounded-[1.5rem] border border-primary/10 bg-neutral-50 p-5"
                  >
                    <h2 className="font-heading text-2xl font-semibold text-neutral-900">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-neutral-700">{item.description}</p>
                  </article>
                ))}
              </div>
            </article>

            <article className="rounded-[1.8rem] bg-[#15241d] p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#dfc99f]">
                Chatswood Presence
              </p>
              <h2 className="mt-4 font-heading text-4xl font-semibold">
                Local accountability, backed by global factory reach.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/78">
                The LuxAura trade desk operates from {CONTACT_INFO.address.display}, giving clients
                a Sydney point of contact for quoting, specification alignment and delivery
                coordination.
              </p>
              <ul className="mt-8 space-y-4 text-sm leading-7 text-white/78">
                {WHO_WE_SUPPORT.map(group => (
                  <li key={group}>{group}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2rem] bg-[#14221c] p-8 text-white shadow-[0_28px_90px_rgba(20,25,21,0.18)] sm:p-10">
            <SectionHeading
              eyebrow="Next Step"
              title="Bring LuxAura into the brief before sourcing fragments"
              description="That is when pricing, fabrication logic and delivery timing stay easiest to control."
              theme="dark"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={GET_QUOTE_HREF} className="btn-primary">
                Request a Trade Quote
              </Link>
              <Link
                href="/contact"
                className="btn-secondary border-white/15 bg-white/10 text-white hover:border-white hover:bg-white hover:text-primary"
              >
                Contact the Trade Support Desk
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
