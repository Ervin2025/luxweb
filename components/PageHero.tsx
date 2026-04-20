import Image from 'next/image';
import type { ReactNode } from 'react';
import ImageCodeBadge from '@/components/ImageCodeBadge';
import type { StatItem } from '@/lib/site-data';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageCode?: string;
  stats?: StatItem[];
  children?: ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  imageCode,
  stats = [],
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-4 pb-10 pt-20 sm:px-6 sm:pb-12 sm:pt-24 lg:px-8 lg:pb-16 lg:pt-40 xl:pt-44">
      <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top_left,_rgba(212,187,145,0.45),_transparent_38%),radial-gradient(circle_at_top_right,_rgba(39,67,58,0.18),_transparent_35%),linear-gradient(180deg,_#f6f1e7_0%,_rgba(246,241,231,0)_100%)]" />
      <div className="container-custom">
        <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="relative" data-reveal="text">
            <div className="absolute -left-5 top-1 hidden h-24 w-24 rounded-full border border-primary/15 bg-white/60 blur-2xl lg:block" />
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/70 sm:mb-4 sm:text-xs sm:tracking-[0.34em]">
              {eyebrow}
            </p>
            <h1 className="max-w-3xl text-balance font-heading text-[2.2rem] font-semibold leading-[0.96] tracking-tight text-neutral-900 max-[430px]:text-[2rem] sm:text-[3.65rem] sm:leading-[0.94] lg:text-7xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-[0.98rem] leading-7 text-neutral-700 sm:mt-5 sm:text-lg sm:leading-8">
              {description}
            </p>
            {children ? (
              <div className="mt-6 grid gap-3 sm:mt-8 sm:flex sm:flex-wrap sm:gap-4 [&>*]:w-full sm:[&>*]:w-auto">
                {children}
              </div>
            ) : null}
            {stats.length ? (
              <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    data-reveal="card"
                    data-reveal-delay={String(Math.min(index + 1, 3))}
                    className="rounded-[1.35rem] border border-white/70 bg-white/70 p-4 shadow-[0_20px_60px_rgba(26,24,22,0.08)] backdrop-blur sm:rounded-[1.5rem] sm:p-5"
                  >
                    <div className="text-base font-semibold text-primary sm:text-lg">{stat.value}</div>
                    <div className="mt-2 text-sm leading-6 text-neutral-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="relative" data-reveal="image" data-reveal-delay="1">
            <div className="absolute -right-4 top-6 hidden h-32 w-32 rounded-full bg-primary/10 blur-3xl lg:block" />
            <div className="relative overflow-hidden rounded-[1.55rem] border border-white/70 bg-white/50 p-2 shadow-[0_30px_80px_rgba(26,24,22,0.14)] backdrop-blur sm:rounded-[2rem] sm:p-3">
              <div className="relative aspect-[4/4.65] overflow-hidden rounded-[1.35rem] sm:aspect-[4/4.3] sm:rounded-[1.6rem]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                />
                {imageCode ? <ImageCodeBadge code={imageCode} /> : null}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(15,19,17,0.04)_0%,_rgba(15,19,17,0.34)_100%)]" />
              </div>
              <div className="absolute bottom-3 left-3 right-3 rounded-[1.15rem] border border-white/25 bg-[#16231dcc] p-3.5 text-white backdrop-blur sm:bottom-8 sm:left-8 sm:right-8 sm:rounded-[1.4rem] sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#dfc99f]">
                  Premium Fabric Solution
                </p>
                <p className="mt-2 text-[0.92rem] leading-6 text-white/80 sm:mt-3 sm:text-base">
                  From global sourcing and specification to fabrication, fine sewing and site-ready
                  installation in Sydney.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
