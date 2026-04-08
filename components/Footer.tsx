import Link from 'next/link';
import { CONTACT_INFO } from '@/lib/constants';
import {
  CURTAIN_MEASUREMENT_GUIDE_HREF,
  FOOTER_CATEGORY_LINKS,
  TRADE_PORTAL_ACCESS_HREF,
  TRADE_SUPPORT_HREF,
} from '@/lib/site-data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t border-white/60 bg-[#14211c] text-white">
      <div className="container-custom section-padding">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr_1fr]">
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
              Sydney-based full-service soft-furnishing fulfillment hub for designers, builders,
              developers, and project partners who need sourcing, fabrication, and accountable
              local delivery in one coordinated model.
            </p>
            <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
              <Link href={TRADE_PORTAL_ACCESS_HREF} className="btn-primary w-full sm:w-auto">
                Trade Portal Access
              </Link>
              <Link
                href={TRADE_SUPPORT_HREF}
                className="btn-secondary w-full border-white/15 bg-white/10 text-white hover:border-white hover:bg-white hover:text-primary sm:w-auto"
              >
                Access Trade Support
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-2xl font-semibold text-white">Core Pages</h4>
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
            <h4 className="font-heading text-2xl font-semibold text-white">Specialist Resources</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/72 sm:text-base">
              <li>
                <Link
                  href={CURTAIN_MEASUREMENT_GUIDE_HREF}
                  className="inline-flex min-h-[44px] items-center transition hover:text-[#d7c29c]"
                >
                  Curtain Measurement Guide
                </Link>
              </li>
              <li>
                <Link
                  href={TRADE_SUPPORT_HREF}
                  className="inline-flex min-h-[44px] items-center transition hover:text-[#d7c29c]"
                >
                  Trade Support
                </Link>
              </li>
              <li>
                <Link
                  href={TRADE_PORTAL_ACCESS_HREF}
                  className="inline-flex min-h-[44px] items-center transition hover:text-[#d7c29c]"
                >
                  Trade Portal Access
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-2xl font-semibold text-white">Contact</h4>
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
