import Link from 'next/link';
import CatalogExplorer from '@/components/CatalogExplorer';
import BusinessPageTemplate from '@/components/BusinessPageTemplate';
import SectionHeading from '@/components/SectionHeading';
import { buildBusinessMetadata } from '@/lib/business-pages';
import { COLLECTION_ITEMS, WHOLESALE_RESOURCE_PACKS } from '@/lib/site-data';

export const metadata = buildBusinessMetadata('wholesale-fabrics');

export default function WholesaleFabricsPage() {
  return (
    <BusinessPageTemplate
      slug="wholesale-fabrics"
      extraSection={
        <section className="section-padding pt-0">
          <div className="container-custom">
            <SectionHeading
              eyebrow="Advanced Filtering"
              title="Filter by brand, origin, material, price band and usage"
              description="The wholesale library is built to scale into a larger trade database while keeping detail visibility for trims, rods and fabric close-up review."
            />
            <div className="mt-10">
              <CatalogExplorer items={COLLECTION_ITEMS} />
            </div>

            <div className="mt-10 section-shell p-8 sm:p-10">
              <SectionHeading
                eyebrow="Resources"
                title="Trade registration, sampling and quote support stay connected"
                description="These entry points help move wholesale browsing into a real trade workflow with protected pricing and clearer follow-through."
              />
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {WHOLESALE_RESOURCE_PACKS.map(item => (
                  <article
                    key={item.href}
                    className="rounded-[1.6rem] border border-primary/10 bg-neutral-50 p-6"
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
            </div>
          </div>
        </section>
      }
    />
  );
}
