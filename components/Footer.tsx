import Link from 'next/link';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants';
import {
  FOOTER_CATEGORY_LINKS,
  NAV_ITEMS,
} from '@/lib/site-data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t border-white/60 bg-[#14211c] text-white">
      <div className="container-custom section-padding">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr_0.95fr_1fr]">
          <div>
            <div className="mb-5 flex items-start gap-3 sm:items-center sm:gap-4">
              <div>
                <p className="font-heading text-[2rem] font-semibold leading-none tracking-[0.08em] sm:text-[2.35rem]">
                  <span className="bg-gradient-to-r from-[#b99245] via-[#C5A059] to-[#d2b26f] bg-clip-text text-transparent">
                    Lux
                  </span>
                  <span className="bg-gradient-to-r from-[#d8c08a] via-[#E5D1A0] to-[#f1e2bc] bg-clip-text text-transparent">
                    Aura
                  </span>
                </p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/72 sm:text-base">
              An Australian family-owned fulfillment partner for premium textiles, fabrication and
              site-ready soft furnishings, with Chatswood-based client support for designers,
              builders and project teams.
            </p>
            <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
              <Link href="/trade/login" className="btn-primary w-full sm:w-auto">
                TRADE PORTAL ACCESS
              </Link>
              <Link
                href="/quote"
                className="btn-secondary w-full border-white/15 bg-white/10 text-white hover:border-white hover:bg-white hover:text-primary sm:w-auto"
              >
                Request a Trade Quote
              </Link>
            </div>
            <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-[#d7c29c] hover:text-white"
              >
                Facebook
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-[#d7c29c] hover:text-white"
              >
                Instagram
              </a>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-[#d7c29c] hover:text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-2xl font-semibold text-white">Navigate</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/72 sm:text-base">
              {NAV_ITEMS.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-[44px] items-center transition hover:text-[#d7c29c]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-2xl font-semibold text-white">Categories</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/72 sm:text-base">
              {FOOTER_CATEGORY_LINKS.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-[44px] items-center transition hover:text-[#d7c29c]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-2xl font-semibold text-white">Trade Desk</h4>
            <div className="mt-5 space-y-4 text-sm text-white/72 sm:text-base">
              <p>
                <a href="tel:+61450871699" className="transition hover:text-[#d7c29c]">
                  {CONTACT_INFO.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="break-all transition hover:text-[#d7c29c]"
                >
                  {CONTACT_INFO.email}
                </a>
              </p>
              <p>
                {CONTACT_INFO.address.display}
              </p>
              <p>{CONTACT_INFO.hours}</p>
              <p>
                Trade enquiries cover fabrics, window treatments, bespoke upholstery, hardware,
                trimmings and related fabrication support.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 sm:pt-8">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-neutral-400 sm:text-sm md:flex-row md:text-left">
            <p>&copy; {currentYear} LuxAura. All rights reserved.</p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6 md:justify-end">
              <Link href="/faq" className="transition-colors hover:text-[#d7c29c]">
                FAQ
              </Link>
              <Link href="/privacy" className="transition-colors hover:text-[#d7c29c]">
                Privacy Policy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-[#d7c29c]">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
