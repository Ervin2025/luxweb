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
          <div className="flex items-center justify-between gap-3 lg:gap-4 xl:gap-6">
            <Link href="/" className="flex flex-shrink-0 items-center pr-2 lg:pr-0">
              <span className="lg:hidden">
                <BrandWordmark mobile />
              </span>
              <div className="hidden lg:block">
                <BrandWordmark />
              </div>
            </Link>

            <div className="hidden min-w-0 flex-1 items-center justify-center px-2 lg:flex xl:px-4">
              <div
                className={`relative w-full max-w-none overflow-hidden rounded-full pl-7 pr-10 py-2 transition-all duration-300 xl:pl-9 xl:pr-12 ${
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
                <div className="relative flex items-center justify-between gap-1 whitespace-nowrap xl:gap-1.5">
                  {headerNavItems.map(link => {
                    const isActive = isLinkActive(pathname, link.href);
                    const compactWidthClass =
                      link.name === 'Home' || link.name === 'About'
                        ? 'min-w-[5.6rem] xl:min-w-[6rem]'
                        : '';

                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={`flex min-h-[38px] flex-none items-center justify-center rounded-full px-1.5 py-2 text-center text-[10.5px] font-medium transition-colors duration-200 xl:min-h-[40px] xl:px-2 xl:text-[11.5px] 2xl:px-3 2xl:text-[12.5px] ${compactWidthClass} ${
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

            <div className="hidden flex-shrink-0 items-center gap-3 lg:flex">
              <Link
                href={TRADE_PORTAL_ACCESS_HREF}
                className="btn-primary px-4 py-2.5 text-[11px] tracking-[0.18em] xl:px-5 xl:text-xs xl:tracking-[0.22em] 2xl:px-6 2xl:text-sm 2xl:tracking-[0.28em]"
              >
                TRADE PORTAL ACCESS
              </Link>
            </div>

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
                  className={`flex min-h-[52px] items-center rounded-2xl px-4 py-3 text-[15px] font-medium leading-6 transition-colors active:scale-95 max-[430px]:min-h-[50px] max-[430px]:rounded-[1rem] max-[430px]:px-3.5 max-[430px]:text-[14px] sm:min-h-[56px] sm:py-4 sm:text-lg ${
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
