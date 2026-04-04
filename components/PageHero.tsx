import Image from 'next/image';
import type { ReactNode } from 'react';
import type { StatItem } from '@/lib/site-data';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  stats?: StatItem[];
  children?: ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  stats = [],
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-28 sm:px-6 sm:pt-36 lg:px-8 lg:pb-16 lg:pt-44 xl:pt-48">
      <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top_left,_rgba(212,187,145,0.45),_transparent_38%),radial-gradient(circle_at_top_right,_rgba(39,67,58,0.18),_transparent_35%),linear-gradient(180deg,_#f6f1e7_0%,_rgba(246,241,231,0)_100%)]" />
      <div className="container-custom">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="relative">
            <div className="absolute -left-5 top-1 hidden h-24 w-24 rounded-full border border-primary/15 bg-white/60 blur-2xl lg:block" />
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary/70 sm:tracking-[0.34em]">
              {eyebrow}
            </p>
            <h1 className="max-w-3xl text-balance font-heading text-[2.65rem] font-semibold leading-[0.94] tracking-tight text-neutral-900 sm:text-6xl sm:leading-none lg:text-7xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-neutral-700 sm:mt-6 sm:text-xl sm:leading-8">
              {description}
            </p>
            {children ? (
              <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:gap-4 [&>*]:w-full sm:[&>*]:w-auto">
                {children}
              </div>
            ) : null}
            {stats.length ? (
              <div className="mt-10 grid gap-3 sm:grid-cols-3 sm:gap-4">
                {stats.map(stat => (
                  <div
                    key={stat.label}
                    className="rounded-[1.35rem] border border-white/70 bg-white/70 p-4 shadow-[0_20px_60px_rgba(26,24,22,0.08)] backdrop-blur sm:rounded-[1.5rem] sm:p-5"
                  >
                    <div className="text-base font-semibold text-primary sm:text-lg">{stat.value}</div>
                    <div className="mt-2 text-sm leading-6 text-neutral-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="relative">
            <div className="absolute -right-4 top-6 hidden h-32 w-32 rounded-full bg-primary/10 blur-3xl lg:block" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/50 p-2.5 shadow-[0_30px_80px_rgba(26,24,22,0.14)] backdrop-blur sm:rounded-[2rem] sm:p-3">
              <div className="relative aspect-[4/4.65] overflow-hidden rounded-[1.35rem] sm:aspect-[4/4.3] sm:rounded-[1.6rem]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(15,19,17,0.04)_0%,_rgba(15,19,17,0.34)_100%)]" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 rounded-[1.25rem] border border-white/25 bg-[#16231dcc] p-4 text-white backdrop-blur sm:bottom-8 sm:left-8 sm:right-8 sm:rounded-[1.4rem] sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#dfc99f]">
                  Premium Fabric Solution
                </p>
                <p className="mt-2 text-sm leading-6 text-white/80 sm:mt-3 sm:text-base">
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
