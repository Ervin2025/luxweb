'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { lockBodyScroll } from '@/lib/body-scroll-lock';
import { NAV_ITEMS, TRADE_PORTAL_ACCESS_HREF } from '@/lib/navigation-data';

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
          mobile ? 'text-[1.42rem] sm:text-[1.85rem]' : 'text-[2.4rem]'
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
    if (!isMobileMenuOpen) {
      return;
    }

    return lockBodyScroll();
  }, [isMobileMenuOpen]);

  return (
    <nav className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="container-custom pt-3 max-[430px]:pt-2.5 sm:pt-4 lg:pt-5">
        <div
          className={`pointer-events-auto rounded-[1.45rem] px-3 py-3 shadow-[0_18px_40px_rgba(26,24,22,0.08)] transition-all duration-300 sm:px-4 lg:rounded-[2rem] lg:px-4 lg:py-3 ${
            isSolid
              ? 'border border-white/90 bg-[rgba(255,255,255,0.72)] backdrop-blur-[22px] lg:border-[#e5dccd] lg:bg-[#f6f0e4] lg:shadow-[0_20px_50px_rgba(26,24,22,0.08)] lg:backdrop-blur-0'
              : 'border border-white/70 bg-[rgba(255,255,255,0.48)] backdrop-blur-[26px] lg:border-transparent lg:bg-transparent lg:shadow-none lg:backdrop-blur-0'
          }`}
        >
          <div className="flex items-center justify-between gap-3 lg:hidden">
            <Link href="/" className="flex flex-shrink-0 items-center pr-2 lg:pr-0">
              <BrandWordmark mobile />
            </Link>

            <button
              className={`flex h-11 w-11 items-center justify-center rounded-full text-neutral-800 shadow-[0_18px_40px_rgba(26,24,22,0.08)] focus:outline-none max-[430px]:h-10 max-[430px]:w-10 lg:hidden sm:h-12 sm:w-12 ${
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

          <div className="hidden lg:grid lg:grid-cols-[auto_minmax(0,1fr)] lg:grid-rows-[auto_auto] lg:items-start lg:gap-x-4 lg:gap-y-3 xl:gap-x-6">
            <Link href="/" className="row-span-2 flex flex-shrink-0 items-start pt-1">
              <BrandWordmark />
            </Link>

            <div className="flex justify-end">
              <Link
                href={TRADE_PORTAL_ACCESS_HREF}
                className="btn-primary px-4 py-2.5 text-[12px] tracking-[0.16em] xl:px-5 xl:text-[12.5px] xl:tracking-[0.2em] 2xl:px-6 2xl:text-[13px] 2xl:tracking-[0.22em]"
              >
                TRADE PORTAL ACCESS
              </Link>
            </div>

            <div className="min-w-0">
              <div
                className={`relative w-full overflow-hidden rounded-[1.8rem] px-6 py-3 transition-all duration-300 xl:px-8 ${
                  isSolid
                    ? 'bg-transparent'
                    : 'border border-white/70 bg-white/58 shadow-[0_18px_48px_rgba(26,24,22,0.08)] backdrop-blur-2xl'
                }`}
              >
                {!isSolid ? (
                  <>
                    <div className="pointer-events-none absolute inset-px rounded-[1.8rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.54),rgba(255,255,255,0.18))]" />
                    <div className="pointer-events-none absolute inset-0 rounded-[1.8rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]" />
                  </>
                ) : null}
                <div className="relative flex flex-wrap items-center justify-center gap-1.5 xl:gap-2">
                  {headerNavItems.map(link => {
                    const isActive = isLinkActive(pathname, link.href);

                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={`flex min-h-[42px] items-center justify-center rounded-full px-4 py-2 text-center text-[13px] font-medium transition-colors duration-200 xl:min-h-[44px] xl:px-4.5 xl:text-[13.5px] 2xl:px-5 2xl:text-[14px] ${
                          isActive
                            ? 'bg-primary text-white'
                            : 'text-neutral-800 hover:bg-white/80 hover:text-primary'
                        }`}
                      >
                        <span className="whitespace-nowrap">{link.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>

        {isMobileMenuOpen && (
          <div
            id={mobileMenuId}
            className="pointer-events-auto mt-2 max-h-[calc(100vh-6.25rem)] overflow-y-auto rounded-[1.6rem] border border-white/85 bg-[rgba(255,255,255,0.78)] p-3 shadow-[0_24px_60px_rgba(26,24,22,0.1)] backdrop-blur-[24px] overscroll-contain max-[430px]:rounded-[1.35rem] lg:hidden sm:p-4"
          >
            {headerNavItems.map(link => {
              const isActive = isLinkActive(pathname, link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex min-h-[56px] items-center rounded-2xl px-4 py-3 text-[18px] font-medium leading-6 transition-colors active:scale-95 max-[430px]:min-h-[52px] max-[430px]:rounded-[1rem] max-[430px]:px-3.5 max-[430px]:text-[17px] sm:min-h-[60px] sm:py-4 sm:text-[1.25rem] ${
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
                className="btn-primary w-full justify-center text-center text-[18px] active:scale-95 sm:text-[1.2rem]"
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
