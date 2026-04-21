import type { Metadata } from 'next';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import ImageCodeBadge from '@/components/ImageCodeBadge';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { generateWebPageSchema } from '@/lib/page-schema';

export const metadata: Metadata = {
  title: 'About LuxAura | Sydney Soft-Furnishing Trade Partner',
  description:
    'Learn how LuxAura combines textile sourcing, specialist making, window treatments, upholstery and project support for Sydney design-led and project-led interiors.',
  keywords: [
    'about LuxAura',
    'soft furnishing partner Sydney',
    'design-led interiors Sydney',
    'project-led interiors Sydney',
    'premium linen Roman blinds drapery upholstery Sydney',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
  openGraph: {
    title: 'About LuxAura | Sydney Soft-Furnishing Trade Partner',
    description:
      'Learn how LuxAura brings together fabric sourcing, window treatments, upholstery and project support across Sydney interiors.',
    url: `${SITE_CONFIG.url}/about`,
    images: ['/images/about-hero.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About LuxAura | Sydney Soft-Furnishing Trade Partner',
    description:
      'Learn how LuxAura brings together fabric sourcing, window treatments, upholstery and project support across Sydney interiors.',
    images: ['/images/about-hero.webp'],
  },
};

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'About', url: '/about' }]);
  const aboutPageSchema = generateWebPageSchema({
    type: 'AboutPage',
    name: 'About LuxAura',
    description:
      'Learn how LuxAura combines textile sourcing, specialist making, window treatments, upholstery and project support for Sydney design-led and project-led interiors.',
    path: '/about',
    image: '/images/about-hero.webp',
  });

  return (
    <div>
      <section className="px-4 pb-24 pt-20 max-[430px]:pb-20 max-[430px]:pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8 lg:pb-[9rem] lg:pt-32">
        <div className="container-custom">
          <div className="grid items-center gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:gap-14">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-primary/70">
                About
              </p>
            <h1 className="mt-4 text-balance font-heading text-[2.75rem] font-semibold leading-[0.98] tracking-[-0.045em] text-[#2C2C2C] max-[430px]:text-[2.4rem] sm:mt-5 sm:text-[4.5rem] sm:leading-[0.94] lg:text-[5.2rem]">
              A More Useful Partner for Design-Led and Project-Led Interiors
            </h1>
            <p className="mt-5 max-w-[36rem] text-pretty text-[1rem] leading-[1.72] text-neutral-700 sm:mt-6 sm:text-[1.12rem] sm:leading-[1.8]">
              Material sourcing, specialist making and project support in one pathway.
            </p>
          </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[#ddd4c3] shadow-[0_28px_90px_rgba(26,24,22,0.08)] max-[430px]:rounded-[1.55rem] sm:rounded-[2.4rem]">
              <div className="relative aspect-[16/11] max-[430px]:aspect-[5/4] sm:aspect-[4/3]">
                <Image
                  src="/images/about-hero.webp"
                  alt="LuxAura about hero with layered material refinement and quiet project atmosphere"
                  fill
                  priority
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  className="object-cover"
                />
                <ImageCodeBadge code="LXA-ABOUT-01" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'About', href: '/about' }]} />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
    </div>
  );
}
