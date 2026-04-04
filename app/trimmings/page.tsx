import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AccordionFaq from '@/components/AccordionFaq';
import Breadcrumb from '@/components/Breadcrumb';
import SectionHeading from '@/components/SectionHeading';
import ZoomGallery from '@/components/ZoomGallery';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { generateFaqSchema } from '@/lib/faq-schema';
import { GET_QUOTE_HREF, REGISTER_TRADE_ACCOUNT_HREF } from '@/lib/site-data';

const HARDWARE_FEATURES = [
  {
    title: 'Premium Aluminium Tracks',
    description:
      'Quiet-running, high-capacity aluminium tracks built for wide glazing, heavier curtains and a cleaner architectural finish.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
        <path
          d="M4 7h16M6 12h12M8 17h8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M7 7v10m10-10v10"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Motorised Systems',
    description:
      'Smart motorised systems elevate larger homes, hospitality spaces and premium commercial projects with smoother daily control.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
        <path
          d="M12 18.5a6.5 6.5 0 1 0-6.5-6.5M12 18.5h5.5M12 18.5v-4.25M7.5 8.5a8.5 8.5 0 0 1 12.02 0M5 6A12 12 0 0 1 19 6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Integrated Planning',
    description:
      'Track specifications, bracket positions and curtain headings are planned together so installation and final drop look fully resolved.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
        <path
          d="M4 6h7v5H4zM13 13h7v5h-7zM11 8.5h2v2.5h-2zm-4 9.5h2V14H7zm8-8h2V6h-2z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 9.75H9m4 0h2m-5 4.25h4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
] as const;

const HARDWARE_GALLERY = [
  {
    title: 'Track Profile Grid',
    description:
      'A clean gallery slot for profile sections, carrier detail and glide performance references.',
    imageSrc: '/images/carousel/08-Aluminum-Blinds.webp',
    imageAlt: 'Curtain track profile reference illustration',
  },
  {
    title: 'System Component Detail',
    description:
      'Mechanism and bracket imagery can sit here to support motor specification and technical quoting.',
    imageSrc: '/images/carousel/13-Product.webp',
    imageAlt: 'Window treatment system component detail illustration',
  },
  {
    title: 'Concealed Installation',
    description:
      'A hidden-install reference showing how the system integrates cleanly into the wider window package.',
    imageSrc: '/images/IMG-I.webp',
    imageAlt: 'Concealed installation reference for integrated window systems',
  },
] as const;

const TRIMMING_LIBRARY = [
  {
    title: 'Curtain Edging',
    description:
      'Embroidered borders, woven tapes and weighted tassels add depth, movement and a more finished edge to drapery.',
    imageSrc: '/images/IMG-B.webp',
    imageAlt: 'Curtain edging and tassel detailing',
  },
  {
    title: 'Cushion & Upholstery Accents',
    description:
      'Piping, braids and tassel-led finishes bring more definition to cushions, sofas, ottomans and other upholstered pieces.',
    imageSrc: '/images/IMG-D.webp',
    imageAlt: 'Decorative cushions with upholstery accents',
  },
  {
    title: 'Designer Laces',
    description:
      'Fine laces and net trims suit lighter sheers, layered curtains and more decorative French-inspired interiors.',
    imageSrc: '/images/IMG-C.webp',
    imageAlt: 'Designer lace detailing on sheer curtains',
  },
] as const;

const WHY_ITEMS = [
  {
    title: 'Integrated Workflow',
    description:
      'Tracks, motors and trims can sit inside one quote, which cuts coordination time and keeps the full package aligned.',
  },
  {
    title: 'Expert Fabrication',
    description:
      'We do not stop at supply. The factory is equipped to sew complex trims cleanly into curtains, cushions and bespoke soft furnishings.',
  },
  {
    title: 'Factory-Direct Pricing',
    description:
      'Backed by our Foshan supply chain, LuxAura brings highly competitive all-in pricing to Sydney soft-furnishing projects.',
  },
] as const;

const FAQ_ITEMS = [
  {
    question: 'Can tracks, motors and trims all be quoted together?',
    answer:
      'Yes. LuxAura can combine hardware, motorisation and decorative trims into one coordinated quote.',
  },
  {
    question: 'Do you only supply trims, or can you also sew them into finished products?',
    answer:
      'We do both. The factory can integrate trims into curtains, Roman blinds, cushions and upholstery pieces.',
  },
  {
    question: 'How do you help match trims to fabric properly?',
    answer:
      'We look at texture, weight and shrinkage response so the selected trim holds its line and stays balanced after cleaning and use.',
  },
] as const;

export const metadata: Metadata = {
  title: 'Hardware & Trimmings | Premium Tracks, Motorisation and Bespoke Detail',
  description:
    'Explore LuxAura hardware and trimmings across premium aluminium tracks, motorised systems, decorative edging and bespoke passementerie.',
  keywords: [
    'curtain tracks Sydney',
    'motorised curtain systems',
    'premium curtain hardware',
    'decorative trimmings',
    'passementerie supplier Australia',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/trimmings`,
  },
  openGraph: {
    title: 'Hardware & Trimmings | Premium Tracks, Motorisation and Bespoke Detail',
    description:
      'One coordinated source for premium hardware, smart motorisation and detail-led trimmings.',
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
          alt="Decorative drapery with premium rod hardware and tassel detail"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,14,13,0.18)_0%,rgba(12,14,13,0.28)_22%,rgba(12,14,13,0.76)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(229,209,160,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(197,160,89,0.20),transparent_26%)]" />

        <div className="container-custom relative flex min-h-[82svh] items-end pb-16 pt-36 sm:pb-20 sm:pt-40">
          <div className="max-w-4xl text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ead7a8]">
              Hardware & Trimmings
            </p>
            <h1 className="mt-5 max-w-3xl text-balance font-heading text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Functional hardware. Decorative detail. One coordinated source.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/84 sm:text-xl sm:leading-8">
              LuxAura solves the performance side with premium systems and completes the
              design side with a broad trimming library, all inside the same fabrication flow.
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
        <Breadcrumb items={[{ label: 'Hardware & Trimmings', href: '/trimmings' }]} />
        <div className="section-shell mb-6 flex w-fit flex-wrap gap-3 px-3 py-3">
          <a
            href="#hardware"
            className="inline-flex min-h-[44px] items-center rounded-full border border-primary/10 bg-white px-5 py-2 text-sm font-semibold text-neutral-900 transition hover:border-primary/25 hover:text-primary"
          >
            Hardware
          </a>
          <a
            href="#trimmings"
            className="inline-flex min-h-[44px] items-center rounded-full border border-primary/10 bg-white px-5 py-2 text-sm font-semibold text-neutral-900 transition hover:border-primary/25 hover:text-primary"
          >
            Trimmings
          </a>
        </div>
      </div>

      <section id="hardware" className="section-padding pt-6">
        <div className="container-custom">
          <div className="rounded-[2.2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(245,248,249,0.92))] p-8 shadow-[0_28px_80px_rgba(18,24,22,0.08)] sm:p-10 lg:p-12">
            <SectionHeading
              eyebrow="Premium Hardware Solutions"
              title="Engineered for performance. Specified for design."
              description="Durable systems, smart control and early planning make the soft-furnishing package perform as well as it looks."
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {HARDWARE_FEATURES.map(item => (
                <article
                  key={item.title}
                  className="rounded-[1.7rem] border border-primary/10 bg-white/80 p-6 shadow-[0_18px_40px_rgba(20,24,22,0.05)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/12 bg-[#eef3f4] text-primary">
                    {item.icon}
                  </div>
                  <h2 className="mt-6 font-heading text-3xl font-semibold text-neutral-900">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-12">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="eyebrow">Product Gallery Grid</p>
                  <h2 className="mt-3 font-heading text-4xl font-semibold text-neutral-900">
                    Reference spaces for systems, sections and concealed installs
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-7 text-neutral-700">
                  Use this grid to showcase track sections, motor appearance and hidden
                  installation details as the hardware library grows.
                </p>
              </div>

              <div className="mt-8 grid gap-5 lg:grid-cols-3">
                {HARDWARE_GALLERY.map(item => (
                  <article
                    key={item.title}
                    className="group overflow-hidden rounded-[1.8rem] border border-primary/10 bg-white"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#edf1f1]">
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        fill
                        sizes="(max-width: 1023px) 100vw, 33vw"
                        className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,16,14,0.02),rgba(11,16,14,0.28))]" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-3xl font-semibold text-neutral-900">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="trimmings" className="section-padding pt-0">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2.2rem] bg-[#171410] p-8 shadow-[0_34px_100px_rgba(17,12,8,0.28)] sm:p-10 lg:p-14">
            <SectionHeading
              eyebrow="Bespoke Trimmings & Passementerie"
              title="Thousands of masterpieces. One-stop integration."
              description="Dongli craftsmanship, broad decorative choice and factory sewing expertise give the brief more depth without fragmenting the workflow."
              theme="dark"
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {TRIMMING_LIBRARY.map(item => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/6 backdrop-blur-sm"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 1023px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,8,0.04),rgba(12,10,8,0.46))]" />
                  </div>
                  <div className="p-6">
                    <h2 className="font-heading text-3xl font-semibold text-white">
                      {item.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-white/78 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-[1.9rem] border border-[#ead7a8]/14 bg-[linear-gradient(135deg,rgba(229,209,160,0.16),rgba(255,255,255,0.06))] p-7 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ead7a8]">
                Design-Led Application
              </p>
              <h2 className="mt-4 font-heading text-4xl font-semibold text-white">
                The trim needs to suit the fabric, not fight it.
              </h2>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-white/78 sm:text-base">
                Our team helps match trims to fabric texture, handle and shrinkage response so
                the selected edge, braid or lace keeps its shape and balance after washing or
                long-term use.
              </p>
            </div>

            <div className="mt-10">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ead7a8]">
                    High-Res Zoom Gallery
                  </p>
                  <h2 className="mt-3 font-heading text-4xl font-semibold text-white">
                    Zoom in on texture, sheen and finished application
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-7 text-white/72">
                  Use the gallery below to focus on finishing detail and how trims translate
                  into curtains, cushions and other bespoke pieces.
                </p>
              </div>

              <div className="mt-8">
                <ZoomGallery items={[...TRIMMING_LIBRARY]} theme="dark" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Why LuxAura"
            title="Why hardware and trimmings belong in the same conversation"
            description="The strongest result comes when operation, detailing and fabrication are priced and coordinated together."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {WHY_ITEMS.map(item => (
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
          <div className="overflow-hidden rounded-[2.2rem] border border-white/65 bg-[linear-gradient(135deg,rgba(197,160,89,0.16),rgba(255,255,255,0.84)_38%,rgba(197,160,89,0.08)_100%)] p-8 shadow-[0_28px_80px_rgba(32,24,12,0.08)] sm:p-10 lg:p-12">
            <div className="max-w-3xl">
              <p className="eyebrow">Project CTA</p>
              <h2 className="mt-4 text-balance font-heading text-4xl font-semibold text-neutral-900 sm:text-5xl">
                Ready to quote hardware, motorisation and trimming detail in one package?
              </h2>
              <p className="mt-5 text-pretty text-[15px] leading-7 text-neutral-700 sm:text-lg">
                Use LuxAura when the brief needs reliable systems, cleaner installation and
                decorative detail without splitting the job across multiple suppliers.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href={REGISTER_TRADE_ACCOUNT_HREF} className="btn-primary">
                Register Trade Account
              </Link>
              <Link href={GET_QUOTE_HREF} className="btn-secondary">
                Request A Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AccordionFaq
        items={[...FAQ_ITEMS]}
        title="Hardware and trimming questions"
        description="Answers to the practical questions that usually come up before specification, fabrication or quoting."
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
