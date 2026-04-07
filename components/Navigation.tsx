'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS, TRADE_PORTAL_ACCESS_HREF } from '@/lib/site-data';

function isLinkActive(pathname: string, href: string) {
  if (href === '/') {
    return pathname === '/';
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function BrandWordmark({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className={mobile ? 'flex flex-col' : 'flex flex-col'}>
      <p
        className={`font-heading font-semibold leading-none tracking-[0.08em] ${
          mobile ? 'text-[1.58rem] sm:text-[1.95rem]' : 'text-[2.4rem]'
        }`}
      >
        <span className="bg-gradient-to-r from-[#b99245] via-[#C5A059] to-[#d2b26f] bg-clip-text text-transparent">
          Lux
        </span>
        <span className="bg-gradient-to-r from-[#d8c08a] via-[#E5D1A0] to-[#f1e2bc] bg-clip-text text-transparent">
          Aura
        </span>
      </p>
    </div>
  );
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isSolid = isScrolled || isMobileMenuOpen;
  const mobileMenuId = 'mobile-navigation-menu';
  const headerNavItems = NAV_ITEMS;

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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="container-custom pt-4 lg:pt-5">
        <div
          className={`pointer-events-auto rounded-[1.6rem] px-3 py-3 shadow-[0_18px_40px_rgba(26,24,22,0.08)] transition-all duration-300 sm:px-4 lg:rounded-[2rem] lg:px-4 lg:py-3 ${
            isSolid
              ? 'border border-white/90 bg-[rgba(255,255,255,0.72)] backdrop-blur-[22px] lg:border-[#e5dccd] lg:bg-[#f6f0e4] lg:shadow-[0_20px_50px_rgba(26,24,22,0.08)] lg:backdrop-blur-0'
              : 'border border-white/70 bg-[rgba(255,255,255,0.48)] backdrop-blur-[26px] lg:border-transparent lg:bg-transparent lg:shadow-none lg:backdrop-blur-0'
          }`}
        >
          <div className="flex items-center justify-between gap-3 lg:gap-6">
            <Link href="/" className="flex flex-shrink-0 items-center pr-2 lg:pr-0">
              <span className="lg:hidden">
                <BrandWordmark mobile />
              </span>
              <div className="hidden lg:block">
                <BrandWordmark />
              </div>
            </Link>

            <div className="hidden flex-shrink-0 items-center gap-3 lg:flex">
              <Link
                href={TRADE_PORTAL_ACCESS_HREF}
                className="btn-primary px-5 py-2.5 text-xs xl:px-6 xl:text-sm"
              >
                TRADE PORTAL ACCESS
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
              aria-expanded={isMobileMenuOpen}
              aria-controls={mobileMenuId}
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

          <div className="pointer-events-auto hidden pt-4 lg:flex lg:justify-center">
            <div
              className={`relative flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full px-3 py-3 transition-all duration-300 xl:gap-3 ${
                isSolid
                  ? 'bg-transparent'
                  : 'border border-white/70 bg-white/58 shadow-[0_18px_48px_rgba(26,24,22,0.08)] backdrop-blur-2xl'
              }`}
            >
              {!isSolid ? (
                <>
                  <div className="pointer-events-none absolute inset-px rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.54),rgba(255,255,255,0.18))]" />
                  <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]" />
                </>
              ) : null}
              <div className="relative flex flex-wrap items-center justify-center gap-2 xl:gap-3">
                {headerNavItems.map(link => {
                  const isActive = isLinkActive(pathname, link.href);

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-200 xl:text-[15px] ${
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
        </div>

        {isMobileMenuOpen && (
          <div
            id={mobileMenuId}
            className="pointer-events-auto mt-2 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-[1.8rem] border border-white/85 bg-[rgba(255,255,255,0.78)] p-4 shadow-[0_24px_60px_rgba(26,24,22,0.1)] backdrop-blur-[24px] overscroll-contain lg:hidden"
          >
            {headerNavItems.map(link => {
              const isActive = isLinkActive(pathname, link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex min-h-[56px] items-center rounded-2xl px-4 py-4 text-[15px] font-medium transition-colors active:scale-95 sm:text-lg ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-neutral-800 hover:bg-neutral-50 hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="mt-4 grid gap-3">
              <Link
                href={TRADE_PORTAL_ACCESS_HREF}
                className="btn-primary w-full justify-center text-center text-base active:scale-95 sm:text-lg"
              >
                TRADE PORTAL ACCESS
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
