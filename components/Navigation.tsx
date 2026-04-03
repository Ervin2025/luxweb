'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GET_QUOTE_HREF, NAV_ITEMS, REQUEST_CATALOGUE_HREF } from '@/lib/site-data';

function isLinkActive(pathname: string, href: string) {
  if (href === '/') {
    return pathname === '/';
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isSolid = isScrolled || isMobileMenuOpen;

  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(prev => (prev !== scrolled ? scrolled : prev));
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateScrollState);
      }
    };

    updateScrollState();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="container-custom pt-4 lg:pt-5">
        <div className="pointer-events-auto flex items-center justify-between gap-4 py-3 lg:py-2">
          <Link href="/" className="flex flex-shrink-0 items-center pr-2">
            <span className="font-heading text-2xl font-semibold tracking-[0.12em] text-neutral-900 lg:hidden">
              Luxaura
            </span>
            <div className="hidden items-center gap-4 lg:flex">
              <Image
                src="/logo.svg"
                alt="Luxaura"
                width={72}
                height={72}
                priority
                className="h-14 w-auto"
              />
              <div>
                <p className="font-heading text-3xl font-semibold tracking-[0.12em] text-neutral-900">
                  Luxaura
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/72">
                  Premium Fabric Solution
                </p>
              </div>
            </div>
          </Link>

          <div className="hidden flex-shrink-0 items-center gap-3 lg:flex">
            <Link
              href={REQUEST_CATALOGUE_HREF}
              className="btn-secondary px-5 py-2.5 text-xs xl:px-6 xl:text-sm"
            >
              Register Trade Account
            </Link>
            <Link
              href={GET_QUOTE_HREF}
              className="btn-primary px-5 py-2.5 text-xs xl:px-6 xl:text-sm"
            >
              Get Quote
            </Link>
          </div>

          <button
            className={`flex h-12 w-12 items-center justify-center rounded-full text-neutral-800 shadow-[0_18px_40px_rgba(26,24,22,0.08)] focus:outline-none lg:hidden ${
              isSolid
                ? 'border border-white/90 bg-[rgba(255,255,255,0.72)] backdrop-blur-[22px]'
                : 'border border-white/70 bg-[rgba(255,255,255,0.48)] backdrop-blur-[26px]'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className="pointer-events-auto hidden pb-3 lg:flex lg:justify-center">
          <div
            className={`relative inline-flex items-center gap-2 overflow-hidden rounded-full px-3 py-3 shadow-[0_18px_48px_rgba(26,24,22,0.08)] transition-all duration-300 xl:gap-3 ${
              isSolid
                ? 'border border-white/85 bg-white/72 backdrop-blur-xl'
                : 'border border-white/70 bg-white/58 backdrop-blur-2xl'
            }`}
          >
            <div className="pointer-events-none absolute inset-px rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.54),rgba(255,255,255,0.18))]" />
            <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]" />
            <div className="relative flex items-center gap-2 xl:gap-3">
              {NAV_ITEMS.map(link => {
                const isActive = isLinkActive(pathname, link.href);

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 xl:text-[15px] ${
                      isActive
                        ? 'bg-primary text-white'
                        : 'text-neutral-800 hover:bg-white/80 hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="pointer-events-auto mt-2 rounded-[1.8rem] border border-white/85 bg-[rgba(255,255,255,0.72)] p-4 shadow-[0_24px_60px_rgba(26,24,22,0.1)] backdrop-blur-[24px] lg:hidden">
            {NAV_ITEMS.map(link => {
              const isActive = isLinkActive(pathname, link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex min-h-[56px] items-center rounded-2xl px-4 py-4 text-base font-medium transition-colors active:scale-95 sm:text-lg ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-neutral-800 hover:bg-neutral-50 hover:text-primary'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="mt-4 grid gap-3">
              <Link
                href={REQUEST_CATALOGUE_HREF}
                className="btn-secondary w-full justify-center text-center text-base active:scale-95 sm:text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Register Trade Account
              </Link>
              <Link
                href={GET_QUOTE_HREF}
                className="btn-primary w-full justify-center text-center text-base active:scale-95 sm:text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
