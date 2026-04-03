import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import { SITE_CONFIG } from '@/lib/constants';
import {
  GET_QUOTE_HREF,
  HOME_AUDIENCES,
  HOME_CATEGORY_LINKS,
  HOME_FABRIC_COLLECTIONS,
  HOME_HERO_STATS,
  HOME_PROCESS_STEPS,
  HOME_VALUE_POINTS,
  HOME_WHY_CHOOSE_ITEMS,
  REQUEST_CATALOGUE_HREF,
} from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Premium Fabrics & Soft Furnishing Solutions | Luxaura Sydney',
  description:
    'Luxaura is an Australian family-owned supplier of premium fabrics and custom soft furnishing products, combining global collections, specialty making and friendly project pricing.',
  keywords:
    'Wholesale Fabric Sydney, Designer Curtain Manufacturer, Roman Blind Specialist, FibreGuard Supplier Australia, Trade Fabric Supplier Sydney',
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export default function Home() {
  return (
    <>
      <PageHero
        eyebrow="Fabric + Fabrication"
        title="A Sydney-based destination for premium textiles and expert fabrication."
        description="We provide homeowners with direct access to global fabrics, while offering industry-specific solutions and protected pricing for our trade partners."
        imageSrc="/images/luxaura/hero-project.webp"
        imageAlt="Luxaura Sydney project with Roman blinds and upholstery"
        stats={HOME_HERO_STATS}
      >
        <Link href={REQUEST_CATALOGUE_HREF} className="btn-primary">
          Register Trade Account
        </Link>
        <Link href={GET_QUOTE_HREF} className="btn-secondary">
          Get Quote
        </Link>
      </PageHero>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <article className="section-shell p-8 sm:p-10">
              <SectionHeading
                eyebrow="Why Luxaura"
                title="Built for clients who need more than fabric supply alone"
                description="Luxaura combines premium collections with direct processing into finished soft furnishing products, so sourcing and making stay under one roof."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {HOME_VALUE_POINTS.map(point => (
                  <article
                    key={point.title}
                    className="rounded-[1.5rem] border border-primary/10 bg-neutral-50 p-5"
                  >
                    <h2 className="font-heading text-2xl font-semibold text-neutral-900">
                      {point.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-neutral-700">{point.description}</p>
                  </article>
                ))}
              </div>
            </article>

            <article className="overflow-hidden rounded-[2rem] bg-[#14221c] p-8 text-white shadow-[0_28px_90px_rgba(20,25,21,0.18)] sm:p-10">
              <SectionHeading
                eyebrow="Project Strength"
                title="A practical fit for design, retail and project work"
                description="The offer is shaped for buyers balancing design intent, durability, customisation, pricing and lead time."
                theme="dark"
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {HOME_WHY_CHOOSE_ITEMS.map(item => (
                  <article
                    key={item.title}
                    className="rounded-[1.4rem] border border-white/12 bg-white/6 p-5"
                  >
                    <h2 className="font-heading text-2xl font-semibold text-white">{item.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-white/78">{item.description}</p>
                  </article>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Categories"
            title="The core Luxaura offer"
            description="Each category feeds the same trade workflow, quote path and making support."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {HOME_CATEGORY_LINKS.map(item => (
              <article key={item.href} className="section-shell overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 22vw, (min-width: 768px) 44vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="eyebrow">{item.eyebrow}</p>
                  <h2 className="mt-3 font-heading text-3xl font-semibold text-neutral-900">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-neutral-700">{item.description}</p>
                  <Link href={item.href} className="btn-secondary mt-6">
                    Explore
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Key Collections"
            title="A fabric library that moves across premium, performance and value"
            description="Own-brand fabrics, premium imports and practical project ranges can all sit inside one brief."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {HOME_FABRIC_COLLECTIONS.map(item => (
              <article key={item.title} className="section-shell p-7">
                <h2 className="font-heading text-3xl font-semibold text-neutral-900">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-neutral-700">{item.description}</p>
                {item.bullets?.length ? (
                  <ul className="mt-5 space-y-2 text-sm leading-7 text-neutral-600">
                    {item.bullets.map(bullet => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Process"
            title="From brief to delivery"
            description="A one-stop path for sourcing, quoting, making and dispatch."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-5">
            {HOME_PROCESS_STEPS.map((step, index) => (
              <article key={step.title} className="section-shell p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">
                  Step {index + 1}
                </p>
                <h2 className="mt-3 font-heading text-3xl font-semibold text-neutral-900">
                  {step.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-neutral-700">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="section-shell p-8 sm:p-10">
            <SectionHeading
              eyebrow="Who We Work With"
              title="Trusted by designers, retailers and larger project buyers"
              description="The model suits residential, accommodation and commercial work where fabric and fabrication need to stay aligned."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {HOME_AUDIENCES.map(audience => (
                <article
                  key={audience}
                  className="rounded-[1.5rem] border border-primary/10 bg-neutral-50 p-5 text-sm leading-7 text-neutral-700"
                >
                  {audience}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[2rem] bg-[#14221c] p-8 text-center text-white shadow-[0_28px_90px_rgba(20,25,21,0.18)] sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#dfc99f]">
              Final CTA
            </p>
            <h2 className="mt-4 font-heading text-4xl font-semibold sm:text-5xl">
              Bring Luxaura in before the brief fragments
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/78 sm:text-lg">
              Register for project pricing or move straight into a quote when fabrics, custom
              making and delivery need to stay under one roof.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href={REQUEST_CATALOGUE_HREF} className="btn-primary">
                Register Trade Account
              </Link>
              <Link
                href={GET_QUOTE_HREF}
                className="btn-secondary border-white/15 bg-white/10 text-white hover:border-white hover:bg-white hover:text-primary"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
