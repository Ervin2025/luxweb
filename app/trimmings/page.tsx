import BusinessPageTemplate from '@/components/BusinessPageTemplate';
import SectionHeading from '@/components/SectionHeading';
import { buildBusinessMetadata } from '@/lib/business-pages';

export const metadata = buildBusinessMetadata('trimmings');

const HARDWARE_SYSTEMS = [
  {
    title: 'Premium aluminium curtain tracks',
    description: 'Cleaner-running systems for custom curtains across residential and project work.',
  },
  {
    title: 'Motorised track options',
    description: 'Electric hardware for premium homes, large openings and easier daily operation.',
  },
  {
    title: 'Integrated hardware planning',
    description: 'Tracks are specified with the treatment and making detail in mind, not added at the end.',
  },
];

const TRIMMING_APPLICATIONS = [
  {
    title: 'Window treatments',
    description: 'Borders, laces and leading-edge trims that make drapery feel more resolved.',
  },
  {
    title: 'Cushions',
    description: 'Piping, braids and decorative edges that sharpen plain cushions.',
  },
  {
    title: 'Soft furnishing products',
    description: 'Trim can also carry into runners, upholstery pieces and other bespoke textile items.',
  },
];

export default function TrimmingsPage() {
  return (
    <BusinessPageTemplate
      slug="trimmings"
      extraSection={
        <section className="section-padding pt-0">
          <div className="container-custom">
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <article className="section-shell p-8 sm:p-10">
                <SectionHeading
                  eyebrow="Hardware"
                  title="Curtain hardware that belongs in the package"
                  description="Premium aluminium tracks and motorised systems sit alongside the soft-window brief."
                />
                <div className="mt-8 space-y-4">
                  {HARDWARE_SYSTEMS.map(item => (
                    <article
                      key={item.title}
                      className="rounded-[1.4rem] border border-primary/10 bg-neutral-50 p-5"
                    >
                      <h2 className="font-heading text-2xl font-semibold text-neutral-900">
                        {item.title}
                      </h2>
                      <p className="mt-3 text-sm leading-7 text-neutral-700">{item.description}</p>
                    </article>
                  ))}
                </div>
              </article>

              <article className="overflow-hidden rounded-[2rem] bg-[#14221c] p-8 text-white shadow-[0_28px_90px_rgba(20,25,21,0.18)] sm:p-10">
                <SectionHeading
                  eyebrow="Thousands of Options"
                  title="Trims for curtains, cushions and bespoke soft products"
                  description="A large library of laces, borders and decorative edges gives designers more room to personalise the finish."
                  theme="dark"
                />
                <div className="mt-8 grid gap-4">
                  {TRIMMING_APPLICATIONS.map(item => (
                    <article
                      key={item.title}
                      className="rounded-[1.4rem] border border-white/12 bg-white/6 p-5"
                    >
                      <h2 className="font-heading text-2xl font-semibold text-white">
                        {item.title}
                      </h2>
                      <p className="mt-3 text-sm leading-7 text-white/78">{item.description}</p>
                    </article>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>
      }
    />
  );
}
