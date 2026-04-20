'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { lockBodyScroll } from '@/lib/body-scroll-lock';
import { NAV_ITEMS, PROJECT_BRIEF_HREF, TRADE_PORTAL_ACCESS_HREF } from '@/lib/navigation-data';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuId = 'mobile-navigation-menu';
  const headerNavItems = NAV_ITEMS;

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
      <div className="pointer-events-auto border-b border-white/90 bg-[rgba(255,255,255,0.72)] shadow-[0_18px_40px_rgba(26,24,22,0.08)] backdrop-blur-[22px] lg:border-[#e5dccd] lg:bg-[#f6f0e4] lg:shadow-[0_20px_50px_rgba(26,24,22,0.08)] lg:backdrop-blur-0">
        <div className="container-custom px-4 py-2.5 max-[430px]:py-2 sm:px-6 sm:py-3.5 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between gap-2.5 lg:hidden">
            <Link href="/" className="flex flex-shrink-0 items-center pr-2 lg:pr-0">
              <BrandWordmark mobile />
            </Link>

            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/90 bg-[rgba(255,255,255,0.72)] text-neutral-800 shadow-[0_18px_40px_rgba(26,24,22,0.08)] backdrop-blur-[22px] focus:outline-none max-[430px]:h-9 max-[430px]:w-9 lg:hidden sm:h-11 sm:w-11"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls={mobileMenuId}
            >
              <svg
                className="h-7 w-7 sm:h-8 sm:w-8"
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

          <div className="hidden lg:grid lg:gap-3">
            <div className="flex items-center justify-center xl:justify-start">
              <Link href="/" className="flex flex-shrink-0 items-center">
                <BrandWordmark />
              </Link>
            </div>

            <div className="grid items-center gap-3 lg:grid-cols-[minmax(0,1fr)_auto] xl:gap-4">
              <div className="min-w-0 overflow-hidden">
                <div className="desktop-nav-track flex min-w-max items-center gap-1 overflow-x-auto xl:gap-1.5 2xl:gap-2">
                {headerNavItems.map(link => {
                  const isActive = isLinkActive(pathname, link.href);

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`flex min-h-[40px] flex-shrink-0 items-center justify-center rounded-full px-2.5 py-2 text-center text-[11px] font-medium transition-colors duration-200 xl:min-h-[42px] xl:px-3 xl:text-[12px] 2xl:min-h-[44px] 2xl:px-4 2xl:text-[13px] ${
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

              <div className="flex flex-shrink-0 flex-nowrap items-center justify-end gap-2 xl:gap-2.5">
                <Link
                  href={PROJECT_BRIEF_HREF}
                  className="btn-secondary whitespace-nowrap px-3 py-2.5 text-[10.5px] tracking-[0.1em] xl:px-3.5 xl:text-[11px] xl:tracking-[0.12em] 2xl:px-5 2xl:text-[12px] 2xl:tracking-[0.18em]"
                >
                  PROJECT ENQUIRY
                </Link>
                <Link
                  href={TRADE_PORTAL_ACCESS_HREF}
                  className="btn-primary whitespace-nowrap px-3 py-2.5 text-[10.5px] tracking-[0.1em] xl:px-3.5 xl:text-[11px] xl:tracking-[0.12em] 2xl:px-5 2xl:text-[12px] 2xl:tracking-[0.18em]"
                >
                  TRADE ACCOUNT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom">
        {isMobileMenuOpen && (
          <div
            id={mobileMenuId}
            className="pointer-events-auto mt-1.5 max-h-[calc(100svh-4.75rem)] overflow-y-auto rounded-[1.45rem] border border-white/85 bg-[rgba(255,255,255,0.78)] p-2.5 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] shadow-[0_24px_60px_rgba(26,24,22,0.1)] backdrop-blur-[24px] overscroll-contain max-[430px]:rounded-[1.2rem] lg:hidden sm:mt-2 sm:max-h-[calc(100svh-5.75rem)] sm:rounded-[1.6rem] sm:p-4"
          >
            {headerNavItems.map(link => {
              const isActive = isLinkActive(pathname, link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex min-h-[52px] items-center rounded-[1.15rem] px-3.5 py-3 text-[16px] font-medium leading-5 transition-colors active:scale-95 max-[430px]:min-h-[48px] max-[430px]:rounded-[1rem] max-[430px]:px-3 max-[430px]:text-[15.5px] sm:min-h-[60px] sm:rounded-2xl sm:px-4 sm:py-4 sm:text-[1.125rem] sm:leading-6 ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-neutral-800 hover:bg-neutral-50 hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="mt-3 grid gap-2.5 sm:mt-4 sm:gap-3">
              <Link
                href={PROJECT_BRIEF_HREF}
                className="btn-secondary w-full justify-center text-center text-[15.5px] active:scale-95 sm:text-[1.05rem]"
              >
                PROJECT ENQUIRY
              </Link>
              <Link
                href={TRADE_PORTAL_ACCESS_HREF}
                className="btn-primary w-full justify-center text-center text-[15.5px] active:scale-95 sm:text-[1.05rem]"
              >
                TRADE ACCOUNT
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
