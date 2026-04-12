import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import ImageCodeBadge from '@/components/ImageCodeBadge';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { SITE_CONFIG } from '@/lib/constants';
import { PROJECT_BRIEF_HREF, TRADE_PORTAL_ACCESS_HREF } from '@/lib/navigation-data';

export const metadata: Metadata = {
  title: 'About | A More Useful Partner for Design-Led and Project-Led Interiors',
  description:
    'LuxAura brings together material sourcing, specialist making and project support to create more resolved, more complete and more commercially viable interiors.',
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
    title: 'About | A More Useful Partner for Design-Led and Project-Led Interiors',
    description:
      'LuxAura brings together material sourcing, specialist making and project support into one more resolved and commercially useful furnishing pathway.',
    url: `${SITE_CONFIG.url}/about`,
    images: ['/images/about-hero.webp'],
  },
};

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'About', url: '/about' }]);

  return (
    <div>
      <section className="px-4 pb-24 pt-28 max-[430px]:pb-20 max-[430px]:pt-26 sm:px-6 sm:pb-28 sm:pt-32 lg:px-8 lg:pb-[9rem] lg:pt-40">
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
                LuxAura brings together material sourcing, specialist making and project support to
                create more resolved, more complete and more commercially viable interiors.
              </p>
              <p className="mt-4 max-w-[38rem] text-pretty text-[14px] leading-7 text-neutral-600 sm:mt-5 sm:text-[1rem] sm:leading-8">
                With strengths in premium linen, Roman blind manufacturing, custom drapery,
                upholstery and decorative detailing, LuxAura supports a more efficient and more
                controlled furnishing pathway from concept to delivery.
              </p>

              <div className="mt-8 flex flex-col gap-3.5 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link href={TRADE_PORTAL_ACCESS_HREF} className="btn-primary w-full sm:w-auto">
                  Trade Account
                </Link>
                <Link href={PROJECT_BRIEF_HREF} className="btn-secondary w-full sm:w-auto">
                  Project Enquiry
                </Link>
              </div>
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
    </div>
  );
}
