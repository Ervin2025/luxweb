import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { ABOUT_PILLARS, GET_QUOTE_HREF, REQUEST_CATALOGUE_HREF } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'About Luxaura | Family-Owned Australian Textile Partner',
  description:
    'Learn how Luxaura combines family-owned Australian service, global sourcing and Sydney-based project support for professional interiors.',
  keywords:
    'about Luxaura, Sydney fabric supplier, family-owned textile business, curtain workroom Sydney, trade textile partner',
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
};

const partnerGroups = [
  'Interior designers',
  'Curtain retailers',
  'Builders, developers and project teams',
  'Commercial and hospitality buyers',
];

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'About Luxaura', url: '/about' }]);

  return (
    <div>
      <PageHero
        eyebrow="About Luxaura"
        title="A family-owned Australian business built for wholesale textile supply"
        description="Luxaura combines global sourcing, integrated fabrication and Sydney-based support so trade clients can specify with more confidence."
        imageSrc="/images/luxaura/beach-sheer.webp"
        imageAlt="Luxaura drapery project with Sydney coastal outlook"
      >
        <Link href={REQUEST_CATALOGUE_HREF} className="btn-primary">
          Register Trade Account
        </Link>
        <Link href={GET_QUOTE_HREF} className="btn-secondary">
          Get Quote
        </Link>
      </PageHero>

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'About Luxaura', href: '/about' }]} />
      </div>

      <section className="section-padding pt-6">
        <div className="container-custom">
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <article className="section-shell p-8 sm:p-10">
              <SectionHeading
                eyebrow="Who We Are"
                title="Global collections, local accountability"
                description="The collection spans premium British brands, European linen, performance fabrics, Sunbrella and curated Asian sourcing. The value is not just range, but how that range connects to making, quoting and delivery."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {ABOUT_PILLARS.map(pillar => (
                  <article
                    key={pillar.title}
                    className="rounded-[1.5rem] border border-primary/10 bg-neutral-50 p-5"
                  >
                    <h2 className="font-heading text-2xl font-semibold text-neutral-900">
                      {pillar.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-neutral-700">{pillar.description}</p>
                  </article>
                ))}
              </div>
            </article>

            <article className="rounded-[1.8rem] bg-[#15241d] p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#dfc99f]">
                Who We Work With
              </p>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-white/78">
                {partnerGroups.map(group => (
                  <li key={group}>{group}</li>
                ))}
              </ul>
              <p className="mt-8 text-sm leading-7 text-white/78">
                We are built for clients who want fabrics, trims, making support and project
                communication kept under one roof.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2rem] bg-[#14221c] p-8 text-white shadow-[0_28px_90px_rgba(20,25,21,0.18)] sm:p-10">
            <SectionHeading
              eyebrow="Next Step"
              title="Bring Luxaura into the brief early"
              description="That is when sourcing, pricing and downstream fabrication stay easiest to manage."
              theme="dark"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={GET_QUOTE_HREF} className="btn-primary">
                Get Quote
              </Link>
              <Link
                href="/contact"
                className="btn-secondary border-white/15 bg-white/10 text-white hover:border-white hover:bg-white hover:text-primary"
              >
                Contact Luxaura
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
