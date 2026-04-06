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

const RESOURCE_ADVANTAGE = [
  {
    title: 'Broader hardware range',
    description:
      'Tracks, rails, poles, brackets and system directions can be selected across cleaner architectural and more decorative outcomes.',
  },
  {
    title: 'Sharper hardware value',
    description:
      'Hardware is positioned not only as design support, but as a pricing and project-efficiency advantage within the wider furnishing brief.',
  },
  {
    title: 'Extensive trim resource',
    description:
      'Braids, borders, tassels, fringes and stitched detailing directions give designers a deeper finishing language to work with.',
  },
  {
    title: 'From concept to final detailing',
    description:
      'The page exists to support projects from early pairing decisions through to final installation-ready detail resolution.',
  },
] as const;

const HARDWARE_GALLERY = [
  {
    title: 'Architectural track systems',
    description:
      'Ceiling-fixed and wall-fixed track directions selected for cleaner stack-back, quieter movement and stronger glazing alignment.',
    imageSrc: '/images/luxaura/hero-project.webp',
    imageAlt: 'Architectural curtain track integrated into layered drapery',
  },
  {
    title: 'Decorative poles and finials',
    description:
      'Visible pole-led hardware for projects that need more finish character, proportion and decorative presence.',
    imageSrc: '/images/IMG-G.webp',
    imageAlt: 'Decorative curtain pole with visible ring and bracket detail',
  },
  {
    title: 'Concealed track planning',
    description:
      'Cleaner recessed or visually discreet hardware directions that allow the textile layer to read with less visual noise.',
    imageSrc: '/images/IMG-I.webp',
    imageAlt: 'Concealed track and integrated blind line in a premium coastal room',
  },
  {
    title: 'Wide-opening and feature-window support',
    description:
      'Hardware thinking that supports larger glazing, taller drops and more formal room conditions without losing control.',
    imageSrc: '/images/IMG-C.webp',
    imageAlt: 'Feature-window drapery supported by more advanced hardware planning',
  },
  {
    title: 'Bracket and support detail',
    description:
      'The supporting pieces that influence projection, hold, line quality and long-term reliability across the treatment.',
    imageSrc: '/images/IMG-F.webp',
    imageAlt: 'Curtain pole, bracket and support hardware detail',
  },
  {
    title: 'Installed hardware resolution',
    description:
      'Finished system outcomes where tracks, headings and movement paths sit naturally within the wider interior brief.',
    imageSrc: '/images/luxaura/vertical-sheer-pool.webp',
    imageAlt: 'Installed hardware and vertical sheer system in a premium room',
  },
] as const;

const HARDWARE_SUPPORT_POINTS = [
  {
    title: 'Premium and standard directions',
    description:
      'Projects can compare more elevated decorative hardware with cleaner everyday system directions without leaving the same sourcing pathway.',
  },
  {
    title: 'Tracks, poles, brackets and curves',
    description:
      'Selection covers the technical layer as well as the visible finish language, including concealed tracks, curved rails and bracket detailing.',
  },
  {
    title: 'Value through system clarity',
    description:
      'Earlier hardware planning helps control suitability, finish quality and pricing before site coordination becomes more fragmented.',
  },
] as const;

const MOTORISATION_FEATURES = [
  {
    title: 'Track and movement alignment',
    description:
      'Motorised systems are selected with curtain behaviour, movement quality and stack-back logic in mind.',
  },
  {
    title: 'Installation planning built in',
    description:
      'Control access, power planning and mounting conditions are considered as part of the same system conversation.',
  },
  {
    title: 'Cleaner visual integration',
    description:
      'Automation is guided to sit naturally within the furnishing brief, preserving calm lines rather than disrupting them.',
  },
] as const;

const TRIMMING_GALLERY = [
  {
    title: 'Braids and borders',
    description:
      'Trim directions that sharpen curtain edges, define paneling and help a treatment feel more intentionally dressed.',
    imageSrc: '/images/IMG-B.webp',
    imageAlt: 'Curtain braid and border detail integrated into premium drapery',
  },
  {
    title: 'Tassels and tiebacks',
    description:
      'Decorative tieback and tassel elements that give more formal schemes a stronger finishing gesture.',
    imageSrc: '/images/IMG-C.webp',
    imageAlt: 'Tieback and formal decorative detailing within a tailored drapery setting',
  },
  {
    title: 'Contrast edge detailing',
    description:
      'Decorative edge conditions and applied detail that add contrast, line definition and a more tailored furnishing language.',
    imageSrc: '/images/IMG-D.webp',
    imageAlt: 'Contrast border and decorative soft furnishing detailing in a premium interior',
  },
  {
    title: 'Soft furnishing trim carry-through',
    description:
      'The trim library can support curtains, Roman blinds, cushions and upholstery so the detail language stays connected.',
    imageSrc: '/images/luxaura/upholstery-pillows.webp',
    imageAlt: 'Trim-ready cushion and upholstery detail within a coordinated soft furnishing scheme',
  },
] as const;

const FINISHING_ADVANTAGES = [
  {
    title: 'Concept pairing and material matching',
    description:
      'Designers can shape the detail language earlier by reviewing hardware finish, trim scale and textile compatibility together.',
  },
  {
    title: 'Support across multiple product types',
    description:
      'The same detailing resource can extend from curtains into Roman blinds, cushions, upholstered seating and other custom pieces.',
  },
  {
    title: 'Installation-ready finishing logic',
    description:
      'The value is not only decorative. It is about carrying edge detail, support components and finish quality through to site-ready execution.',
  },
] as const;

const FAQ_ITEMS = [
  {
    question: 'Can LuxAura support both hardware and trimmings inside one brief?',
    answer:
      'Yes. LuxAura can guide tracks, poles, motorised systems and decorative trims together so the finishing layer is resolved through one more coordinated path.',
  },
  {
    question: 'Is the hardware offer only decorative?',
    answer:
      'No. Hardware is treated as both a design and project-efficiency layer, helping briefs balance suitability, finish quality, movement performance and cost control.',
  },
  {
    question: 'Is motorisation included as part of the hardware system logic?',
    answer:
      'Yes. Motorisation is supported as part of the wider hardware pathway, aligned to track choice, movement control, planning requirements and final visual cleanliness.',
  },
  {
    question: 'Can trims support more than curtain finishing?',
    answer:
      'Yes. LuxAura’s trim resource can extend from curtains into Roman blinds, cushions and upholstery, supporting detail decisions from concept to final installation-ready detailing.',
  },
] as const;

export const metadata: Metadata = {
  title: 'Hardware & Trimmings | Range Depth, Systems and Detailing Advantage',
  description:
    'LuxAura positions hardware and trimmings as a resource advantage, combining broader hardware range, stronger pricing control, motorised system integration and an extensive trim library for designers and project teams.',
  keywords: [
    'curtain tracks Sydney',
    'motorised curtain systems',
    'decorative trimmings',
    'premium curtain hardware',
    'passementerie supplier Australia',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/trimmings`,
  },
  openGraph: {
    title: 'Hardware & Trimmings | Range Depth, Systems and Detailing Advantage',
    description:
      'A specialist resource page covering tracks, poles, motorisation and decorative trims for premium project delivery.',
    url: `${SITE_CONFIG.url}/trimmings`,
    images: ['/images/IMG-G.webp'],
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
          src="/images/IMG-G.webp"
          alt="Visible curtain hardware with decorative pole and bracket detail"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,14,13,0.76)_0%,rgba(12,14,13,0.58)_36%,rgba(12,14,13,0.16)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,14,13,0.08)_0%,rgba(12,14,13,0.34)_100%)]" />

        <div className="container-custom relative flex min-h-[84svh] items-end pb-16 pt-36 sm:pb-20 sm:pt-40">
          <div className="max-w-4xl text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ead7a8]">
              Hardware & Trimmings
            </p>
            <h1 className="mt-5 max-w-3xl text-balance font-heading text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              The hidden resource advantage behind a more complete furnishing brief
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/84 sm:text-xl sm:leading-8">
              LuxAura supports the specialist layer many competitors cannot match properly: broader
              hardware systems, stronger pricing value, integrated motorisation and an extensive
              trimming library that carries detail from concept to final execution.
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
            eyebrow="Resource Advantage"
            title="A deeper resource layer for designers, developers and project teams"
            description="This page is designed to show why hardware and trimmings are not minor accessories. They are part of how projects hold together more cleanly."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {RESOURCE_ADVANTAGE.map(item => (
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
            eyebrow="Hardware"
            title="Hardware Systems with Greater Range and Sharper Value"
            description="LuxAura provides access to a broader range of curtain hardware systems, from clean architectural tracks and concealed rails to decorative poles, curved solutions and motorised systems, helping projects balance finish quality, suitability, pricing control and coordination more effectively."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {HARDWARE_SUPPORT_POINTS.map(item => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-primary/10 bg-neutral-50 p-5"
              >
                <h2 className="font-heading text-2xl font-semibold text-neutral-900">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-neutral-700 sm:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {HARDWARE_GALLERY.map(item => (
              <article key={item.title} className="group section-shell overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden border-b border-primary/10">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 1023px) 100vw, 33vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,14,13,0.04)_0%,rgba(12,14,13,0.24)_100%)]" />
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

      <section id="motorisation" className="section-padding pt-0">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2.3rem] bg-[#15110d] text-white shadow-[0_32px_90px_rgba(17,12,8,0.24)]">
            <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
              <div className="grid gap-4 p-4 sm:p-6 lg:p-8">
                <div className="overflow-hidden rounded-[1.8rem] border border-white/10">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/images/IMG-I.webp"
                    className="h-full w-full object-cover"
                  >
                    <source src="/videos/motorisation-demo.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.8rem] border border-white/10">
                  <Image
                    src="/images/IMG-I.webp"
                    alt="Motorised curtain and blind system integrated into a premium room"
                    fill
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,8,6,0.08),rgba(10,8,6,0.22))]" />
                </div>
              </div>

              <div className="p-8 sm:p-10 lg:p-14">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ead7a8]">
                  Motorisation
                </p>
                <h2 className="mt-4 text-balance font-heading text-4xl font-semibold sm:text-5xl">
                  Motorised Systems for Cleaner Control and Better Integration
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/78 sm:text-base">
                  LuxAura supports motorised curtain systems that align track selection, movement
                  control, installation planning and final visual cleanliness, helping automation
                  sit naturally within the wider furnishing brief.
                </p>
                <div className="mt-8 grid gap-4">
                  {MOTORISATION_FEATURES.map(item => (
                    <article
                      key={item.title}
                      className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5"
                    >
                      <h3 className="font-heading text-2xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-white/72">{item.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.3rem] shadow-[0_28px_90px_rgba(17,12,8,0.14)]">
              <Image
                src="/images/IMG-B.webp"
                alt="Decorative braid, tassel and trim detailing on premium drapery"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="Trimmings"
                title="Artisanal Trimmings with Broad Design Choice"
                description="LuxAura provides access to an extensive trim resource library that supports curtains, Roman blinds, cushions and upholstery with more refined edge detail, contrast and decorative finish from design concept to final installation-ready detailing."
              />
              <div className="mt-8 grid gap-4">
                {FINISHING_ADVANTAGES.map(item => (
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

      <section className="section-padding pt-0">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Trimming Gallery"
            title="A trim resource broad enough to support the full detailing conversation"
            description="Braids, borders, tassels, fringes and stitched edge details are presented here as a design resource, not a side note, helping LuxAura support projects from material pairing through to installation-ready finishing."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {TRIMMING_GALLERY.map(item => (
              <article key={item.title} className="group section-shell overflow-hidden">
                <div className="relative aspect-[4/4.3] overflow-hidden border-b border-primary/10">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 1023px) 100vw, 25vw"
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

      <AccordionFaq
        items={[...FAQ_ITEMS]}
        title="Questions on systems, trims and specialist sourcing"
        description="Concise answers on how LuxAura supports hardware, motorisation and artisanal detailing as one more complete resource layer."
      />

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2.2rem] border border-white/65 bg-[linear-gradient(135deg,rgba(197,160,89,0.16),rgba(255,255,255,0.82)_36%,rgba(197,160,89,0.08)_100%)] p-8 shadow-[0_28px_80px_rgba(32,24,12,0.08)] sm:p-10 lg:p-12">
            <div className="max-w-3xl">
              <p className="eyebrow">Final CTA</p>
              <h2 className="mt-4 text-balance font-heading text-4xl font-semibold text-neutral-900 sm:text-5xl">
                Resolve the finishing layer with greater range, sharper value and cleaner detail
              </h2>
              <p className="mt-5 text-pretty text-[15px] leading-7 text-neutral-700 sm:text-lg">
                Bring LuxAura in when the brief needs hardware systems, motorisation and artisanal
                trims to land with more confidence and less sourcing fragmentation.
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
