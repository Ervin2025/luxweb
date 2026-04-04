import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import FaqSection from '@/components/FaqSection';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { generateFaqSchema } from '@/lib/faq-schema';
import { GET_QUOTE_HREF, REQUEST_CATALOGUE_HREF } from '@/lib/site-data';

const FABRIC_BRANDS = [
  {
    title: 'LuxAura Signature Series',
    description:
      'Our own branded ranges give the collection a clear house point of view, with styling flexibility across residential and project work.',
    bullets: ['Own-brand identity', 'Flexible specification use', 'Designed to sit beside imported collections'],
  },
  {
    title: 'Prestigious Textiles',
    description:
      'A premium British collection known for decorative confidence, polished drapery and rich interior palettes.',
    bullets: ['Design-led drapery', 'Luxury decorative direction', 'Popular with interior designers'],
  },
  {
    title: 'Mobus',
    description:
      'A bestselling British upholstery fabric collection with strong furniture character, Spill-Safe protection and OEKO-TEX certification.',
    bullets: ['High-quality furniture fabric', 'Spill-Safe + OEKO-TEX', 'A strong fit for Australian pet-friendly homes'],
  },
  {
    title: 'FibreGuard',
    description:
      'Performance fabrics for projects where stain resistance, easy cleaning and daily living matter.',
    bullets: ['Pet-friendly options', 'Useful for homes and guest accommodation', 'A practical fit for seating and covers'],
  },
  {
    title: 'Sunbrella',
    description:
      'A world-leading outdoor fabric with a 5-year warranty, built to handle Australia’s harsh UV while keeping outdoor furniture looking resolved.',
    bullets: ['5-year warranty', 'Made for strong Australian UV', 'Trusted for outdoor upholstery'],
  },
  {
    title: 'French Linen Cards',
    description:
      'A refined library of 100% linen and linen-cotton blends that brings natural texture, soft drape and relaxed premium character.',
    bullets: ['100% linen and linen-cotton options', 'A natural fit for curtains and soft furnishings', 'Ideal for quieter luxury interiors'],
  },
  {
    title: 'Curated Asia Collection',
    description:
      'Selected Asian ranges give projects a commercially smart option without losing design discipline.',
    bullets: ['Cost-conscious project coverage', 'Useful for broader quantity runs', 'Supports mixed-budget schemes'],
  },
];

const FABRICATION_ITEMS = [
  {
    title: 'Curtains & Sheers',
    description:
      'Fabric can move straight into full curtain and sheer packages with the right heading, lining and finishing detail.',
  },
  {
    title: 'Cushions',
    description:
      'Square, rectangular and custom cushions that extend the textile story across the room.',
  },
  {
    title: 'Table Runners',
    description:
      'Fabric-led runners and table styling pieces for residential, hospitality and display settings.',
  },
  {
    title: 'Ottomans',
    description:
      'Tailored ottoman upholstery and textile detailing designed to coordinate with the wider furniture package.',
  },
  {
    title: 'Sofas',
    description:
      'Indoor upholstery and sofa fabrication with fabric selection, sewing control and finish all aligned.',
  },
  {
    title: 'Outdoor Furniture',
    description:
      'Exterior furniture softening with performance textiles and construction suited to Australian conditions.',
  },
];

const COLLECTION_FAQ = [
  {
    question: 'What does Fabrics & Fabrication cover?',
    answer:
      'It combines the fabric library with the making side of the business, from premium sourcing through to finished soft furnishing outcomes.',
  },
  {
    question: 'Can I choose fabric first and decide the product later?',
    answer:
      'Yes. Fabric can be selected first, then developed into curtains, cushions, sofas, ottomans, table runners and other custom pieces.',
  },
  {
    question: 'Do trimmings and tracks sit inside this offer as well?',
    answer:
      'Yes. Thousands of trimmings, curtain tracks and motorised solutions can be added to complete the package.',
  },
];

const COLLECTION_RELATED_LINKS = [
  {
    title: 'Window Treatments',
    description: 'Carry selected fabrics into curtains, sheers and layered treatments.',
    href: '/custom-curtains-sheers',
  },
  {
    title: 'Bespoke Upholstery',
    description: 'Extend the same direction into sofas, seating, covers and cushions.',
    href: '/cushions-soft-furnishings',
  },
  {
    title: 'Hardware & Trimmings',
    description: 'Complete the package with tracks, trims and motorised solutions.',
    href: '/trimmings',
  },
];

export const metadata: Metadata = {
  title: 'Fabrics & Fabrication | Premium Fabrics and Soft Furnishing Products',
  description:
    'Explore LuxAura fabrics and fabrication, from global fabric brands through to custom curtains, cushions, table runners, ottomans, sofas and outdoor furniture.',
  keywords:
    'fabrics and fabrication Sydney, Prestigious Textiles Australia, Mobus upholstery, FibreGuard supplier Australia, custom soft furnishings Sydney',
  alternates: {
    canonical: `${SITE_CONFIG.url}/collections`,
  },
};

export default function CollectionsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Fabrics & Fabrication', url: '/collections' },
  ]);
  const faqSchema = generateFaqSchema(COLLECTION_FAQ);

  return (
    <div>
      <PageHero
        eyebrow="Fabrics & Fabrication"
        title="Premium fabric sourcing and custom fabrication in one destination"
        description="LuxAura combines an international fabric library with fabrication capability, so clients can move from brand selection into curtains, cushions, table runners, ottomans, sofas, outdoor furniture and other finished soft-furnishing products."
        imageSrc="/images/luxaura/beach-sheer.webp"
        imageAlt="LuxAura fabrics and fabrication"
        stats={[
          {
            value: 'Fabrics',
            label: 'Prestigious Textiles, Mobus, FibreGuard, Sunbrella, French linen cards and curated Asian ranges',
          },
          {
            value: 'Fabrication',
            label: 'Curtains, cushions, table runners, ottomans, sofas, outdoor furniture and more',
          },
          {
            value: 'Trims, Tracks & Motorisation',
            label: 'Thousands of trimmings, curtain tracks and motorised solutions to complete the package',
          },
        ]}
      >
        <Link href={REQUEST_CATALOGUE_HREF} className="btn-primary">
          Register Trade Account
        </Link>
        <Link href={GET_QUOTE_HREF} className="btn-secondary">
          Get Quote
        </Link>
      </PageHero>

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Fabrics & Fabrication', href: '/collections' }]} />
      </div>

      <section className="section-padding pt-6">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Fabrics"
            title="An international fabric library across premium, performance and value"
            description="The fabric side of the offer covers signature collections, imported brands, performance stories and practical project ranges."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {FABRIC_BRANDS.map(item => (
              <article key={item.title} className="section-shell p-7">
                <h2 className="font-heading text-3xl font-semibold text-neutral-900">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-neutral-700">{item.description}</p>
                <ul className="mt-5 space-y-2 text-sm leading-7 text-neutral-600">
                  {item.bullets.map(bullet => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Fabrication"
            title="Fabric developed into finished soft-furnishing products"
            description="This section shows what the selected fabrics can become. Image space is left open so finished work can be added later."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {FABRICATION_ITEMS.map(item => (
              <article key={item.title} className="section-shell overflow-hidden">
                <div className="flex aspect-[4/2.8] items-center justify-center border-b border-primary/10 bg-[linear-gradient(180deg,#f6f1e7_0%,#eee4d1_100%)]">
                  <div className="rounded-full border border-dashed border-primary/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary/60">
                    Image Placeholder
                  </div>
                </div>
                <div className="p-7">
                  <h2 className="font-heading text-3xl font-semibold text-neutral-900">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-neutral-700">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2rem] bg-[#14221c] p-8 text-white shadow-[0_28px_90px_rgba(20,25,21,0.18)] sm:p-10">
            <SectionHeading
              eyebrow="Finishing & Systems"
              title="The package can be completed beyond fabric alone"
              description="LuxAura can also add thousands of trimmings, curtain tracks and motorised solutions to finish the project properly."
              theme="dark"
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                'Thousands of trimmings and decorative edges for curtains, cushions and upholstery',
                'Premium curtain tracks for smoother operation and cleaner drapery support',
                'Motorised solutions for modern window systems and larger openings',
              ].map(item => (
                <article
                  key={item}
                  className="rounded-[1.4rem] border border-white/12 bg-white/6 p-5 text-sm leading-7 text-white/78"
                >
                  {item}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="section-shell p-8 sm:p-10">
            <SectionHeading
              eyebrow="Next Step"
              title="Move from fabric selection into the right fabrication path"
              description="Continue into the category that matches the finished product you want to develop."
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {COLLECTION_RELATED_LINKS.map(item => (
                <article
                  key={item.href}
                  className="rounded-[1.5rem] border border-primary/10 bg-neutral-50 p-6"
                >
                  <h2 className="font-heading text-3xl font-semibold text-neutral-900">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-neutral-700">{item.description}</p>
                  <Link href={item.href} className="btn-secondary mt-6">
                    Continue
                  </Link>
                </article>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href={REQUEST_CATALOGUE_HREF} className="btn-primary">
                Register Trade Account
              </Link>
              <Link href={GET_QUOTE_HREF} className="btn-secondary">
                Start a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        items={COLLECTION_FAQ}
        title="Frequently asked questions"
        description="Quick answers on fabrics, fabrication and finishing support."
      />

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
