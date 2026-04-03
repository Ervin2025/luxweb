import BusinessPageTemplate from '@/components/BusinessPageTemplate';
import SectionHeading from '@/components/SectionHeading';
import { buildBusinessMetadata } from '@/lib/business-pages';

export const metadata = buildBusinessMetadata('cushions-soft-furnishings');

const BESPOKE_UPHOLSTERY_CATEGORIES = [
  {
    title: 'Custom sofas',
    description:
      'For clients who need seating shaped to the room, the fabric story and the expected level of use.',
  },
  {
    title: 'Single chairs and accent seating',
    description:
      'Custom armchairs and feature seating where comfort and textile impact need equal attention.',
  },
  {
    title: 'Outdoor furniture upholstery',
    description:
      'Exterior and semi-exterior upholstery, including Sunbrella applications backed by a 5-year warranty and built for Australia’s strong UV conditions.',
  },
];

const BESPOKE_UPHOLSTERY_SERVICE_CHAIN = [
  {
    title: 'Select the right fabric',
    description: 'Balance texture, colour, durability and intended use before making begins.',
  },
  {
    title: 'Process and tailor the build',
    description: 'Each piece moves through upholstery preparation, specialty sewing and finish decisions.',
  },
  {
    title: 'Coordinate detailing',
    description: 'Piping, trims, zips and construction details are aligned with the wider brief.',
  },
  {
    title: 'Dispatch efficiently',
    description: 'Completed pieces move through a cleaner delivery path, not a fragmented handover.',
  },
];

export default function CushionsSoftFurnishingsPage() {
  return (
    <BusinessPageTemplate
      slug="cushions-soft-furnishings"
      extraSection={
        <section className="section-padding pt-0">
          <div className="container-custom">
            <SectionHeading
              eyebrow="Bespoke Range"
              title="Custom seating, indoor or out"
              description="Luxaura supports finished upholstery outcomes, from sofas and single chairs to outdoor furniture."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {BESPOKE_UPHOLSTERY_CATEGORIES.map(item => (
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

            <div className="mt-10 overflow-hidden rounded-[2rem] bg-[#14221c] p-8 text-white shadow-[0_28px_90px_rgba(20,25,21,0.18)] sm:p-10">
              <SectionHeading
                eyebrow="One-Stop Service"
                title="From fabric selection to finished delivery"
                description="A cleaner upholstery workflow with sourcing, making and dispatch kept together."
                theme="dark"
              />
              <div className="mt-8 grid gap-4 lg:grid-cols-4">
                {BESPOKE_UPHOLSTERY_SERVICE_CHAIN.map((step, index) => (
                  <article
                    key={step.title}
                    className="rounded-[1.4rem] border border-white/12 bg-white/6 p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#dfc99f]">
                      Step {index + 1}
                    </p>
                    <h2 className="mt-3 font-heading text-2xl font-semibold text-white">
                      {step.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-white/78">{step.description}</p>
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
