import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AccordionFaq from '@/components/AccordionFaq';
import Breadcrumb from '@/components/Breadcrumb';
import FabricBrandWall from '@/components/FabricBrandWall';
import QuickInquiryDialog from '@/components/QuickInquiryDialog';
import SectionHeading from '@/components/SectionHeading';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { generateFaqSchema } from '@/lib/faq-schema';
import { GET_QUOTE_HREF, REGISTER_TRADE_ACCOUNT_HREF } from '@/lib/site-data';

const FABRIC_BRANDS = [
  {
    title: 'LuxAura Signature Series',
    logoMark: 'LX',
    origin: 'Australia',
    originFilter: 'Australia',
    usage: 'Indoor',
    feature: 'Balanced Value',
    description:
      'Our own-brand collection balances design character with commercial value, making it a strong fit for whole-home soft furnishing packages.',
    highlights: [
      'Own-brand identity with flexible styling coverage',
      'Designed for curtains, upholstery and accent products',
      'A reliable option when value and finish need to stay balanced',
    ],
  },
  {
    title: 'Prestigious Textiles (UK)',
    logoMark: 'PT',
    origin: 'United Kingdom',
    originFilter: 'Europe',
    usage: 'Indoor',
    feature: 'Decorative',
    description:
      'Prestigious Textiles brings bold colour, decorative pattern and a more expressive British drapery direction into the LuxAura library.',
    highlights: [
      'Premium decorative fabric direction',
      'Strong choice for statement curtains and layered rooms',
      'Popular with design-led residential interiors',
    ],
  },
  {
    title: 'Mobus (UK)',
    logoMark: 'MB',
    origin: 'United Kingdom',
    originFilter: 'Europe',
    usage: 'Indoor',
    feature: 'Pet-Friendly',
    description:
      'A premium British upholstery collection with hard-wearing texture, easy maintenance and the kind of practical comfort Australian pet families ask for.',
    highlights: [
      'Spill-Safe protection built into the range',
      'OEKO-TEX certified for safer everyday use',
      'A proven furniture fabric for pet-friendly homes',
    ],
  },
  {
    title: 'Sunbrella (USA)',
    logoMark: 'SB',
    origin: 'United States',
    originFilter: 'USA',
    usage: 'Outdoor',
    feature: 'Outdoor Performance',
    description:
      'The benchmark outdoor fabric library for demanding exterior projects, trusted for UV resistance, water performance and long-term colour stability.',
    highlights: [
      '5-year anti-fade warranty',
      'Designed for harsh Australian UV conditions',
      'Ideal for outdoor seating, cushions and exterior upholstery',
    ],
  },
  {
    title: 'FibreGuard (Europe)',
    logoMark: 'FG',
    origin: 'Europe',
    originFilter: 'Europe',
    usage: 'Indoor',
    feature: 'Pet-Friendly',
    description:
      'High-performance upholstery fabric with true stain resistance, including water-cleanable everyday marks, for busy homes and hospitality use.',
    highlights: [
      'Pen marks and common stains can be cleaned with water',
      'A genuine pet and kid friendly option',
      'Useful for sofas, dining chairs and high-use seating',
    ],
  },
  {
    title: 'French 100% Linen',
    logoMark: 'FL',
    origin: 'France',
    originFilter: 'Europe',
    usage: 'Indoor',
    feature: 'Linen',
    description:
      'Top-grade French linen creates a quieter, breathable luxury with natural texture, soft drape and a more refined interior atmosphere.',
    highlights: [
      '100% French linen and linen-blend directions',
      'Beautiful for sheers, drapery and relaxed upholstery',
      'A natural fit for elevated residential interiors',
    ],
  },
  {
    title: 'Asian Value Selection',
    logoMark: 'AV',
    origin: 'Asia',
    originFilter: 'Asia',
    usage: 'Indoor',
    feature: 'Project Value',
    description:
      'Curated Asian sourcing gives larger jobs and broader rollouts access to dependable quality with sharper project pricing.',
    highlights: [
      'Competitive pricing for larger quantities',
      'Useful for developer, hospitality and staged rollouts',
      'Selected for commercial practicality, not compromise',
    ],
  },
] as const;

const FABRICATION_ITEMS = [
  {
    title: 'Custom Curtains & Sheers',
    description:
      'Tailored curtain and sheer packages developed from the selected fabric, with clean finishing and room-specific support.',
    details: ['S-Fold', 'Pinch Pleat', 'Box Pleat'],
    imageSrc: '/images/luxaura/hero-project.webp',
    imageAlt: 'Custom curtains and sheers by LuxAura',
  },
  {
    title: 'Bespoke Cushions',
    description:
      'Square, round and bolster cushions made to size with decorative piping, trims and coordinated fabric stories.',
    details: ['Square', 'Round', 'Bolster'],
    imageSrc: '/images/IMG-D.webp',
    imageAlt: 'Bespoke cushion fabrication by LuxAura',
  },
  {
    title: 'Upholstery & Sofa Covers',
    description:
      'From full re-upholstery to tailored slipcovers and protectors, LuxAura carries the fabric into daily-use seating.',
    details: ['Re-upholstery', 'Slipcovers', 'Protectors'],
    imageSrc: '/images/IMG-G.webp',
    imageAlt: 'Upholstery and sofa cover fabrication by LuxAura',
  },
  {
    title: 'Table Runners & Tablecloths',
    description:
      'Precision-sewn table linens for dining rooms, boutique hospitality and styled presentation spaces.',
    details: ['Table Runners', 'Tablecloths', 'Dining Linen'],
    imageSrc: '',
    imageAlt: 'Table runners and tablecloth fabrication placeholder',
  },
  {
    title: 'Ottomans & Bench Seats',
    description:
      'Custom padded pieces that connect the fabric story back to seating, soft structure and coordinated room styling.',
    details: ['Ottomans', 'Bench Seats', 'Padded Details'],
    imageSrc: '/images/IMG-J.webp',
    imageAlt: 'Ottomans and bench seats by LuxAura',
  },
  {
    title: 'Specialty Goods',
    description:
      'Aprons, placemats, pet accessories and other boutique textile pieces made for more specific project briefs.',
    details: ['Aprons', 'Placemats', 'Pet Accessories'],
    imageSrc: '',
    imageAlt: 'Specialty textile fabrication placeholder',
  },
] as const;

const COLLECTION_FAQ = [
  {
    question: 'What is LuxAura’s core advantage?',
    answer:
      'We close the loop from source to Sydney. With an efficient Foshan factory and a professional Sydney team, LuxAura offers factory-direct pricing and can manage complex fabrication details that ordinary retailers cannot handle.',
  },
  {
    question: 'How long does production usually take?',
    answer:
      'Standard orders are typically completed in around four weeks from order confirmation to finished delivery. Larger or more specialised programs are quoted case by case, especially where international logistics can affect timing.',
  },
  {
    question: 'Are your fabrics pet-friendly?',
    answer:
      'Yes. Mobus and FibreGuard both support pet-friendly living, with stain resistance, durable handle and OEKO-TEX 100 certification for safer use around pets and children.',
  },
  {
    question: 'Do you provide installation in Sydney?',
    answer:
      'Yes. Within Sydney, LuxAura can support measuring, design advice and final installation as part of a complete service workflow.',
  },
] as const;

export const metadata: Metadata = {
  title: 'Fabrics & Fabrication | Global Collections and Custom Soft Furnishing Making',
  description:
    'Explore LuxAura fabrics and fabrication across global fabric brands, custom curtains, upholstery, cushions and bespoke textile products.',
  keywords:
    'Fabrics and fabrication Sydney, Prestigious Textiles Australia, Mobus fabric Australia, FibreGuard supplier Australia, custom curtains and cushions Sydney',
  alternates: {
    canonical: `${SITE_CONFIG.url}/collections`,
  },
};

export default function CollectionsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Fabrics & Fabrication', url: '/collections' },
  ]);
  const faqSchema = generateFaqSchema([...COLLECTION_FAQ]);

  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/luxaura/beach-sheer.webp"
          alt="LuxAura fabric collections and custom fabrication"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,19,17,0.18)_0%,rgba(13,19,17,0.24)_18%,rgba(13,19,17,0.74)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(229,209,160,0.18),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(197,160,89,0.18),transparent_28%)]" />

        <div className="container-custom relative flex min-h-[82svh] items-end pb-16 pt-36 sm:pb-20 sm:pt-40">
          <div className="max-w-4xl text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ead7a8]">
              Fabrics & Fabrication
            </p>
            <h1 className="mt-5 max-w-3xl text-balance font-heading text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Global collections. Fabric into form.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/86 sm:text-xl sm:leading-8">
              LuxAura brings together a global fabric library and the making capability to turn
              textiles into curtains, upholstery, cushions and bespoke textile products.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href={REGISTER_TRADE_ACCOUNT_HREF} className="btn-primary">
                Register Trade Account
              </Link>
              <Link
                href={GET_QUOTE_HREF}
                className="btn-secondary border-white/25 bg-white/12 text-white hover:bg-white/18 hover:text-white"
              >
                Request A Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Fabrics & Fabrication', href: '/collections' }]} />
        <div className="section-shell mb-6 flex w-fit flex-wrap gap-3 px-3 py-3">
          <a
            href="#fabrics"
            className="inline-flex min-h-[44px] items-center rounded-full border border-primary/10 bg-white px-5 py-2 text-sm font-semibold text-neutral-900 transition hover:border-primary/25 hover:text-primary"
          >
            Fabrics
          </a>
          <a
            href="#fabrication"
            className="inline-flex min-h-[44px] items-center rounded-full border border-primary/10 bg-white px-5 py-2 text-sm font-semibold text-neutral-900 transition hover:border-primary/25 hover:text-primary"
          >
            Fabrication
          </a>
          <a
            href="#faq"
            className="inline-flex min-h-[44px] items-center rounded-full border border-primary/10 bg-white px-5 py-2 text-sm font-semibold text-neutral-900 transition hover:border-primary/25 hover:text-primary"
          >
            FAQ
          </a>
        </div>
      </div>

      <section id="fabrics" className="section-padding pt-6">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Global Library"
            title="Collections with real depth, not just a list of names"
            description="Use the filter to move through indoor, outdoor, pet-friendly, linen and regional sourcing directions."
          />
          <div className="mt-10">
            <FabricBrandWall items={[...FABRIC_BRANDS]} />
          </div>
        </div>
      </section>

      <section id="fabrication" className="section-padding pt-0">
        <div className="container-custom">
          <SectionHeading
            eyebrow="From Fabric To Form"
            title="We do not just supply fabric; we craft it into your lifestyle."
            description="Each card below is ready for high-quality project photography and already supports object-fit imagery with a subtle hover zoom."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {FABRICATION_ITEMS.map(item => (
              <article key={item.title} className="group section-shell overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden border-b border-primary/10 bg-[linear-gradient(180deg,#f5efe5_0%,#eadfcb_100%)]">
                  {item.imageSrc ? (
                    <>
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        fill
                        sizes="(max-width: 1023px) 100vw, 33vw"
                        className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,16,14,0.02),rgba(11,16,14,0.20))]" />
                    </>
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <div className="rounded-full border border-dashed border-primary/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary/60">
                        Project Image Space
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-7">
                  <h2 className="font-heading text-3xl font-semibold text-neutral-900">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                    {item.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.details.map(detail => (
                      <span
                        key={detail}
                        className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href={GET_QUOTE_HREF} className="btn-primary px-5 py-3 text-[11px] sm:text-xs">
                      Add To Quote
                    </Link>
                    <QuickInquiryDialog
                      styleName={item.title}
                      title={`Inquire: ${item.title}`}
                      label="Inquire for This Style"
                      subjectPrefix="Fabrication Style Enquiry"
                      enquiryType="fabrication-style-enquiry"
                      introText="Send the product style and approximate size. We will come back with the best next step for sampling, pricing or fabrication."
                      className="px-5 py-3 text-[11px] sm:text-xs"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2.2rem] bg-[#163228] p-8 shadow-[0_30px_90px_rgba(17,27,24,0.18)] sm:p-10 lg:p-12">
            <SectionHeading
              eyebrow="Capability"
              title="From source to Sydney, with making control built in"
              description="Foshan production efficiency and a Sydney-facing team let LuxAura quote sharply while still handling decorative trims, custom sewing and more complex briefs."
              theme="dark"
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                'Factory-direct pricing backed by coordinated sourcing and volume purchasing',
                'Complex fabrication capability, including trim integration and specialty sewing',
                'Sydney support for measuring, design guidance, delivery and installation',
              ].map(item => (
                <article
                  key={item}
                  className="rounded-[1.5rem] border border-white/12 bg-white/7 p-5 text-sm leading-7 text-white/78"
                >
                  {item}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="pt-0">
        <AccordionFaq
          items={[...COLLECTION_FAQ]}
          title="Questions on timelines, capability and pet-friendly performance"
          description="A concise answer set covering the practical concerns clients usually raise before they commit."
        />
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
