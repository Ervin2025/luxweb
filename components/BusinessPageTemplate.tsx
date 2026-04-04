import Link from 'next/link';
import type { ReactNode } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import FaqSection from '@/components/FaqSection';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { generateFaqSchema } from '@/lib/faq-schema';
import { getBusinessPageConfig } from '@/lib/business-pages';
import type { BusinessPageSlug } from '@/lib/site-data';

interface BusinessPageTemplateProps {
  slug: BusinessPageSlug;
  extraSection?: ReactNode;
}

export default function BusinessPageTemplate({
  slug,
  extraSection,
}: BusinessPageTemplateProps) {
  const config = getBusinessPageConfig(slug);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: config.breadcrumbLabel, url: `/${config.slug}` },
  ]);
  const faqSchema = generateFaqSchema(config.faqItems);

  return (
    <div>
      <PageHero
        eyebrow={config.hero.eyebrow}
        title={config.hero.title}
        description={config.hero.description}
        imageSrc={config.hero.imageSrc}
        imageAlt={config.hero.imageAlt}
        stats={config.hero.stats}
      >
        <Link href={config.hero.primaryCta.href} className="btn-primary">
          {config.hero.primaryCta.label}
        </Link>
        {config.hero.secondaryCta ? (
          <Link href={config.hero.secondaryCta.href} className="btn-secondary">
            {config.hero.secondaryCta.label}
          </Link>
        ) : null}
      </PageHero>

      <div className="container-custom">
        <Breadcrumb items={[{ label: config.breadcrumbLabel, href: `/${config.slug}` }]} />
      </div>

      <section className="section-padding pt-6">
        <div className="container-custom">
          <div className="section-shell p-8 sm:p-10">
            <SectionHeading
              eyebrow="Why LuxAura"
              title={config.overview.title}
              description={config.overview.description}
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="space-y-4">
                {config.overview.supportingPoints?.map(point => (
                  <article
                    key={point}
                    className="rounded-[1.5rem] border border-primary/10 bg-neutral-50 p-5 text-sm leading-7 text-neutral-700"
                  >
                    {point}
                  </article>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {config.whySection.items.map(item => (
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
            </div>
          </div>
        </div>
      </section>

      {extraSection}

      <section className="section-padding pt-0">
        <div className="container-custom">
          <SectionHeading
            eyebrow="What We Offer"
            title={config.offerSection.title}
            description={config.offerSection.description}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {config.offerSection.items.map(item => (
              <article key={item.title} className="section-shell p-7">
                <h2 className="font-heading text-3xl font-semibold text-neutral-900">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                  {item.description}
                </p>
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
            eyebrow="Best For / Performance"
            title={config.applicationsSection.title}
            description={config.applicationsSection.description}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="grid gap-6 sm:grid-cols-2">
              {config.applicationsSection.items.map(item => (
                <article key={item.title} className="section-shell p-6">
                  <h2 className="font-heading text-3xl font-semibold text-neutral-900">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-neutral-700">{item.description}</p>
                </article>
              ))}
            </div>
            {config.performanceSection ? (
              <article className="overflow-hidden rounded-[2rem] bg-[#14221c] p-8 text-white shadow-[0_28px_90px_rgba(20,25,21,0.18)] sm:p-10">
                <SectionHeading
                  eyebrow="Performance"
                  title={config.performanceSection.title}
                  description={config.performanceSection.description}
                  theme="dark"
                />
                <div className="mt-8 grid gap-4">
                  {config.performanceSection.items.map(item => (
                    <article
                      key={item}
                      className="rounded-[1.4rem] border border-white/12 bg-white/6 p-5 text-sm leading-7 text-white/78"
                    >
                      {item}
                    </article>
                  ))}
                </div>
              </article>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="section-shell p-8 sm:p-10">
            <SectionHeading
              eyebrow="One-Stop Support"
              title={config.oneStopSection.title}
              description={config.oneStopSection.description}
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {config.oneStopSection.items.map(item => (
                <article
                  key={item}
                  className="rounded-[1.5rem] border border-primary/10 bg-neutral-50 p-5 text-sm leading-7 text-neutral-700"
                >
                  {item}
                </article>
              ))}
            </div>

            <div className="mt-10 border-t border-primary/10 pt-8">
              <SectionHeading
                eyebrow="Related Pages"
                title={config.relatedSection.title}
                description={config.relatedSection.description}
              />
              <div className="mt-8 grid gap-6 lg:grid-cols-3">
                {config.relatedSection.items.map(item => (
                  <article
                    key={item.href}
                    className="rounded-[1.5rem] border border-primary/10 bg-neutral-50 p-6"
                  >
                    <h2 className="font-heading text-3xl font-semibold text-neutral-900">
                      {item.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-neutral-700">{item.description}</p>
                    <Link href={item.href} className="btn-secondary mt-6">
                      Explore
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="section-shell p-8 text-center sm:p-10">
            <p className="eyebrow">CTA</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold text-neutral-900 sm:text-5xl">
              {config.ctaSection.title}
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-neutral-700 sm:text-lg">
              {config.ctaSection.description}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href={config.ctaSection.primaryCta.href} className="btn-primary">
                {config.ctaSection.primaryCta.label}
              </Link>
              {config.ctaSection.secondaryCta ? (
                <Link href={config.ctaSection.secondaryCta.href} className="btn-secondary">
                  {config.ctaSection.secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        items={config.faqItems}
        title="Frequently asked questions"
        description="Quick answers on specification, workflow and supply."
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
