import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import FaqSection from '@/components/FaqSection';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { generateFaqSchema } from '@/lib/faq-schema';
import { GET_QUOTE_HREF, REQUEST_CATALOGUE_HREF } from '@/lib/site-data';

const COLLECTION_SOURCE_STORIES = [
  {
    title: 'Luxaura signature fabric series',
    description:
      'Our own ranges give the collection a clear house point of view, with styling flexibility across residential and project work.',
    bullets: ['Own-brand identity', 'Flexible specification use', 'Designed to sit beside imported collections'],
  },
  {
    title: 'Prestigious Textiles and Mobus from the UK',
    description:
      'British collections bring decorative depth, confident colour and strong upholstery direction, with Mobus adding a bestselling furniture fabric story for real living.',
    bullets: ['Design-led drapery and upholstery', 'Mobus includes Spill-Safe protection and OEKO-TEX certification', 'A strong fit for Australian pet-friendly homes'],
  },
  {
    title: 'European FibreGuard performance fabrics',
    description:
      'Performance fabrics for projects where stain resistance, easier cleaning and daily use matter.',
    bullets: ['Pet-friendly options', 'Useful for homes and guest accommodation', 'A practical fit for seating and covers'],
  },
  {
    title: 'Sunbrella outdoor fabric collections',
    description:
      'Sunbrella is a world-leading outdoor fabric with a 5-year warranty, built to handle Australia’s harsh UV while keeping outdoor furniture and cushions looking resolved.',
    bullets: ['5-year warranty', 'Designed to solve strong Australian UV exposure', 'Strong fit for bespoke outdoor upholstery'],
  },
  {
    title: 'French 100% linen and linen-cotton hanging cards',
    description:
      'French linen cards let clients choose fabric, then carry it straight into curtains, sheers, indoor and outdoor furniture, cushions, table runners and coordinated soft furnishing pieces.',
    bullets: ['100% linen and linen-cotton options', 'From fabric selection into finished home soft furnishings', 'A natural fit for relaxed premium interiors'],
  },
  {
    title: 'Curated Asian value fabrics',
    description:
      'Selected Asian ranges give projects a commercially smart option without losing design discipline.',
    bullets: ['Cost-conscious project coverage', 'Useful for broader quantity runs', 'Supports mixed-budget schemes'],
  },
];

const COLLECTION_APPLICATION_GROUPS = [
  {
    title: 'Window soft furnishings',
    description: 'Fabrics can move directly into finished curtains, layered drapery and sewn detailing.',
    items: ['Finished curtains', 'Layered drapery sets', 'Specialty sewing details'],
  },
  {
    title: 'Upholstery and covers',
    description: 'The collection supports sofa covers, protectors, seat pads and other upholstery-led pieces.',
    items: ['Sofa covers', 'Seat cushions', 'Ottoman and stool pieces'],
  },
  {
    title: 'Cushions and styling layers',
    description: 'Square and round cushions, throws and runners extend the textile story through the room.',
    items: ['Square cushions', 'Round cushions', 'Throws and runners'],
  },
  {
    title: 'Specialty fabric products',
    description: 'The same fabrics can also be translated into practical or decorative custom pieces.',
    items: ['Tablecloths and placemats', 'Aprons and gloves', 'Pet and display accessories'],
  },
];

const COLLECTION_FAQ = [
  {
    question: 'Can Luxaura cover both premium and value-focused sourcing?',
    answer:
      'Yes. The library spans British premium brands, European performance fabrics, French linen cards and curated Asian value ranges.',
  },
  {
    question: 'Is this page only about fabric supply?',
    answer:
      'No. It also shows how the same fabrics move into curtains, covers, cushions, outdoor pieces and custom sewn products.',
  },
  {
    question: 'Which products are especially popular?',
    answer:
      'Pet-friendly sofa covers, seat cushions and protectors are especially strong because they balance durability with a more considered finish.',
  },
];

const COLLECTION_RELATED_LINKS = [
  {
    title: 'Open the Fabric Library',
    description: 'Browse by brand, origin, material and usage.',
    href: '/wholesale-fabrics',
  },
  {
    title: 'Discuss Window Treatments',
    description: 'Carry selected fabrics into curtains, sheers and layered treatments.',
    href: '/custom-curtains-sheers',
  },
  {
    title: 'Plan Bespoke Upholstery',
    description: 'Extend the same direction into seating, covers and cushions.',
    href: '/cushions-soft-furnishings',
  },
];

export const metadata: Metadata = {
  title: 'Collections | Premium Fabrics and Sewn Soft Furnishings',
  description:
      'Explore Luxaura collections across its own branded series, Prestigious Textiles, Mobus, FibreGuard, Sunbrella, French linen cards and curated Asian fabrics, all designed to move into finished soft furnishings.',
  keywords:
    'fabric collections Sydney, Prestigious Textiles Australia, FibreGuard supplier Australia, French linen fabric Sydney, bespoke upholstery fabrics',
  alternates: {
    canonical: `${SITE_CONFIG.url}/collections`,
  },
};

export default function CollectionsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'Collections', url: '/collections' }]);
  const faqSchema = generateFaqSchema(COLLECTION_FAQ);

  return (
    <div>
      <PageHero
        eyebrow="Collections"
        title="A curated fabric mix, ready for making"
        description="Luxaura combines its own fabric series with PT, Mobus, FibreGuard, Sunbrella, French linen cards and curated Asian ranges, then carries those selections into finished curtains, covers, cushions and custom sewn pieces."
        imageSrc="/images/luxaura/beach-sheer.webp"
        imageAlt="Luxaura collections of drapery and soft furnishing fabrics"
        stats={[
          {
            value: 'Own Brand + Global Brands',
            label: 'Luxaura collections sit beside premium imports and value-focused project ranges',
          },
          {
            value: 'Total Fabrics Solution',
            label:
              'Choose fabrics and make curtains, sheers, indoor or outdoor furniture, cushions, table runners and more',
          },
          {
            value: 'Trims, Tracks & Motorisation',
            label:
              'Thousands of trimmings, curtain tracks and motorised solutions to complete the package',
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
        <Breadcrumb items={[{ label: 'Collections', href: '/collections' }]} />
      </div>

      <section className="section-padding pt-6">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Sourcing Layers"
            title="Premium brands, natural linen, outdoor performance and value-led project fabrics"
            description="Each layer serves a different brief, but all can move through the same quote and fabrication path."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {COLLECTION_SOURCE_STORIES.map(story => (
              <article key={story.title} className="section-shell p-7">
                <h2 className="font-heading text-3xl font-semibold text-neutral-900">{story.title}</h2>
                <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                  {story.description}
                </p>
                <ul className="mt-5 space-y-2 text-sm leading-7 text-neutral-600">
                  {story.bullets.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <article className="section-shell overflow-hidden">
              <div className="relative aspect-[4/4.5]">
                <Image
                  src="/images/luxaura/upholstery-pillows.webp"
                  alt="Bespoke cushions and upholstery made from Luxaura fabrics"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 38vw, 100vw"
                />
              </div>
              <div className="p-7">
                <p className="eyebrow">From Fabric To Form</p>
                <h2 className="mt-3 font-heading text-4xl font-semibold text-neutral-900">
                  The collection is built to become finished product
                </h2>
                <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                  Fabrics are considered for what they can become in the workroom, from curtains
                  and sheers to indoor or outdoor furniture, cushions, table runners and other
                  coordinated soft furnishing pieces.
                </p>
              </div>
            </article>

            <div className="grid gap-6 sm:grid-cols-2">
              {COLLECTION_APPLICATION_GROUPS.map(group => (
                <article key={group.title} className="section-shell p-6">
                  <h2 className="font-heading text-3xl font-semibold text-neutral-900">
                    {group.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-neutral-700">{group.description}</p>
                  <ul className="mt-5 space-y-2 text-sm leading-7 text-neutral-600">
                    {group.items.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2rem] bg-[#14221c] p-8 text-white shadow-[0_28px_90px_rgba(20,25,21,0.18)] sm:p-10">
            <SectionHeading
              eyebrow="Featured Strength"
              title="Pet-friendly covers and cushions remain a strong commercial story"
              description="Clients respond well to performance-led sofa covers, seat cushions and protectors that still feel tailored and well designed."
              theme="dark"
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                'FibreGuard and other performance fabrics help practical products feel more premium.',
                'Seat cushions and sofa covers can be specified for daily living with more confidence.',
                'Pet-friendly ranges reduce the trade-off between maintenance and appearance.',
                'The offer suits family homes, short-stay properties and busy lounge settings.',
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
              title="Move from fabric selection into the right trade conversation"
              description="Keep browsing, request a quote or take the collection into a more specific category."
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
        description="Quick answers on sourcing, finished products and performance."
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
