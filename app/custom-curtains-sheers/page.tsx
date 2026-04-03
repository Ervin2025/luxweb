import BusinessPageTemplate from '@/components/BusinessPageTemplate';
import SectionHeading from '@/components/SectionHeading';
import { buildBusinessMetadata } from '@/lib/business-pages';

export const metadata = buildBusinessMetadata('custom-curtains-sheers');

const WINDOW_TREATMENT_FAMILIES = [
  {
    title: 'Curtains / Drapes',
    description: 'Soft, tailored window finishes where fabric choice and sewing detail matter.',
    items: [
      {
        title: 'S-Fold / Wave Fold Curtains',
        bestFor: 'Best for living rooms and large glazing',
        description: 'A clean, flowing profile for wide windows and contemporary interiors.',
      },
      {
        title: 'Pinch Pleat Curtains',
        bestFor: 'Best for tailored and premium interiors',
        description: 'Double pinch pleat feels classic; triple pinch pleat gives a fuller, richer finish.',
      },
      {
        title: 'Pencil Pleat Curtains',
        bestFor: 'Best for softer and more relaxed rooms',
        description: 'A traditional gathered heading with a gentler, more casual look.',
      },
      {
        title: 'Eyelet Curtains',
        bestFor: 'Best for simple rod-based styling',
        description: 'A clean modern option that suits straightforward decorative schemes.',
      },
      {
        title: 'Sheer Curtains',
        bestFor: 'Best for daytime privacy and soft daylight',
        description: 'Ideal when the room needs atmosphere without losing natural light.',
      },
      {
        title: 'Blackout / Blockout Curtains',
        bestFor: 'Best for bedrooms and media rooms',
        description: 'Lined or coated constructions for darker rooms, privacy and better sleep.',
      },
      {
        title: 'Box Pleat Curtains',
        bestFor: 'Best for architectural schemes',
        description: 'A flatter heading with crisp structure and a more formal rhythm.',
      },
    ],
  },
  {
    title: 'Blinds',
    description: 'Function-led solutions for light control, privacy and space efficiency.',
    items: [
      {
        title: 'Single Roller Blinds',
        bestFor: 'Best for simple minimal rooms',
        description: 'A clean and efficient option for everyday use.',
      },
      {
        title: 'Double Roller Blinds',
        bestFor: 'Best for day-and-night control',
        description: 'One light-filtering layer paired with one blockout layer.',
      },
      {
        title: 'Roman Blinds',
        bestFor: 'Best for tailored fabric warmth',
        description: 'Combines the softness of fabric with the neat stack-up of a blind.',
      },
      {
        title: 'Venetian Blinds',
        bestFor: 'Best for directional light control',
        description: 'Available in timber, PVC / composite and aluminium for different room types.',
      },
      {
        title: 'Honeycomb / Cellular Blinds',
        bestFor: 'Best for insulation',
        description: 'Air-pocket construction helps improve thermal comfort.',
      },
      {
        title: 'Vertical Blinds',
        bestFor: 'Best for offices and wide openings',
        description: 'A practical choice where simple function is the priority.',
      },
      {
        title: 'Panel Glide Blinds',
        bestFor: 'Best for modern large doors',
        description: 'Large fabric panels that slide laterally across a track.',
      },
    ],
  },
  {
    title: 'Shutters',
    description: 'Architectural window solutions that lift appearance and stay easy to maintain.',
    items: [
      {
        title: 'Plantation Shutters',
        bestFor: 'Best for timeless Australian appeal',
        description: 'A well-known premium shutter look with clean lines and easy upkeep.',
      },
      {
        title: 'PVC Shutters',
        bestFor: 'Best for bathrooms and kitchens',
        description: 'Moisture-tolerant polymer construction for practical family zones.',
      },
      {
        title: 'Timber Shutters',
        bestFor: 'Best for living rooms and bedrooms',
        description: 'A warmer, more natural finish for higher-end interiors.',
      },
      {
        title: 'Aluminium Shutters',
        bestFor: 'Best for balconies and tougher environments',
        description: 'A stronger weather-resistant option for more exposed settings.',
      },
      {
        title: 'Bi-fold and Sliding Shutters',
        bestFor: 'Best for large openings and doors',
        description: 'Operating formats that fold away or glide sideways on a track.',
      },
    ],
  },
];

const WINDOW_TREATMENT_SERVICES = [
  {
    title: 'Motorisation',
    description: 'Support for remote, app or voice-ready operation where the project calls for it.',
  },
  {
    title: 'Premium fabrics and components',
    description: 'FibreGuard, Mobus, Coats thread and YKK zips can be folded into the specification where relevant.',
  },
  {
    title: 'Custom made',
    description: 'Measurement, design guidance, fabrication detail and installation support in one workflow.',
  },
];

export default function CustomCurtainsSheersPage() {
  return (
    <BusinessPageTemplate
      slug="custom-curtains-sheers"
      extraSection={
        <section className="section-padding pt-0">
          <div className="container-custom">
            <SectionHeading
              eyebrow="Treatment Directory"
              title="Curtains, blinds and shutters in one clear menu"
              description="Best-fit guidance makes the category easier to scan without losing detail."
            />
            <div className="mt-10 grid gap-6 xl:grid-cols-3">
              {WINDOW_TREATMENT_FAMILIES.map(family => (
                <article key={family.title} className="section-shell p-7">
                  <h2 className="font-heading text-4xl font-semibold text-neutral-900">
                    {family.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                    {family.description}
                  </p>
                  <div className="mt-6 space-y-4">
                    {family.items.map(item => (
                      <article
                        key={item.title}
                        className="rounded-[1.4rem] border border-primary/10 bg-neutral-50 p-5"
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">
                          {item.bestFor}
                        </p>
                        <h3 className="mt-3 font-heading text-2xl font-semibold text-neutral-900">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-neutral-700">
                          {item.description}
                        </p>
                      </article>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 section-shell p-8 sm:p-10">
              <SectionHeading
                eyebrow="Added Value"
                title="Specification support that goes beyond the product list"
                description="Service layers that help window treatments feel complete."
              />
              <div className="mt-8 grid gap-6 lg:grid-cols-3">
                {WINDOW_TREATMENT_SERVICES.map(item => (
                  <article
                    key={item.title}
                    className="rounded-[1.5rem] border border-primary/10 bg-neutral-50 p-6"
                  >
                    <h2 className="font-heading text-3xl font-semibold text-neutral-900">
                      {item.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-neutral-700">{item.description}</p>
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
