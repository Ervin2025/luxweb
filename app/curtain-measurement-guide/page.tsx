import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { PROJECT_BRIEF_HREF } from '@/lib/site-data';

const GUIDE_STEPS = [
  {
    title: 'Width and coverage',
    description:
      'Record overall window width, likely stack-back and how far the treatment should extend beyond the frame so the final drapery line feels complete.',
  },
  {
    title: 'Drop and finish height',
    description:
      'Measure from the intended fixing point to the preferred finish level, whether the scheme requires a floor break, kiss or more controlled clearance.',
  },
  {
    title: 'Track, recess and ceiling conditions',
    description:
      'Note ceiling type, recess depth, wall return, bracket conditions and any motorisation or hardware considerations that may affect selection.',
  },
] as const;

const BEFORE_SENDING = [
  'Overall room photos and any window elevations',
  'Preferred treatment style, such as S-Fold, pinch pleat or layered sheers',
  'Any lining, blackout, motorisation or performance requirements',
] as const;

export const metadata: Metadata = {
  title: 'Curtain Measurement Guide | LuxAura Trade Resource',
  description:
    'A concise LuxAura guide to the key measurements and site details that help window treatment briefs move into clearer specification and fabrication support.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/curtain-measurement-guide`,
  },
};

export default function CurtainMeasurementGuidePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Curtain Measurement Guide', url: '/curtain-measurement-guide' },
  ]);

  return (
    <div>
      <PageHero
        eyebrow="Specialist Resource"
        title="Curtain Measurement Guide"
        description="A calmer starting point for window treatment briefs. Use this guide to capture the key dimensions and site conditions before fabric, hardware and fabrication decisions move further."
        imageSrc="/images/curtains-hero.webp"
        imageAlt="Refined curtain detail used for LuxAura measurement guide"
      >
        <Link href={PROJECT_BRIEF_HREF} className="btn-primary">
          Submit a Brief
        </Link>
      </PageHero>

      <div className="container-custom">
        <Breadcrumb
          items={[{ label: 'Curtain Measurement Guide', href: '/curtain-measurement-guide' }]}
        />
      </div>

      <section className="section-padding pt-6">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Measurement Priorities"
            title="Capture the site conditions that affect the final result"
            description="A strong window treatment outcome depends on more than width and drop. Hardware, recess detail and stack behaviour matter just as much."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {GUIDE_STEPS.map(step => (
              <article key={step.title} className="section-shell p-7">
                <h2 className="font-heading text-3xl font-semibold text-neutral-900">
                  {step.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="section-shell p-8 sm:p-10 lg:p-12">
            <SectionHeading
              eyebrow="Before Sending"
              title="Useful details to include with the brief"
              description="The more context LuxAura receives early, the easier it is to align style, hardware and fabrication in one cleaner path."
            />
            <ul className="mt-8 space-y-4 text-sm leading-7 text-neutral-700 sm:text-base">
              {BEFORE_SENDING.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </div>
  );
}
