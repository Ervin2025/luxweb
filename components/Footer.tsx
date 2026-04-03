import Image from 'next/image';
import Link from 'next/link';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants';
import {
  FOOTER_CATEGORY_LINKS,
  GET_QUOTE_HREF,
  NAV_ITEMS,
  REQUEST_CATALOGUE_HREF,
} from '@/lib/site-data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t border-white/60 bg-[#14211c] text-white">
      <div className="container-custom section-padding">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr_0.95fr_1fr]">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <Image
                src="/logo.svg"
                alt="Luxaura"
                width={84}
                height={84}
                className="h-16 w-auto brightness-0 invert"
              />
              <div>
                <p className="font-heading text-3xl font-semibold tracking-[0.12em]">Luxaura</p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d7c29c]">
                  Family-Owned Australian Textile Partner
                </p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/72 sm:text-base">
              An Australian family-owned wholesale supplier combining Australian design
              understanding, globally selected fabrics, integrated making and efficient delivery for
              designers, retailers, project teams and commercial clients.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={REQUEST_CATALOGUE_HREF} className="btn-primary">
                Register Trade Account
              </Link>
              <Link
                href={GET_QUOTE_HREF}
                className="btn-secondary border-white/15 bg-white/10 text-white hover:border-white hover:bg-white hover:text-primary"
              >
                Get Quote
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-[#d7c29c] hover:text-white"
              >
                Facebook
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-[#d7c29c] hover:text-white"
              >
                Instagram
              </a>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-[#d7c29c] hover:text-white"
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
                  <Link href={link.href} className="transition hover:text-[#d7c29c]">
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
                  <Link href={link.href} className="transition hover:text-[#d7c29c]">
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
                {CONTACT_INFO.address.city}, {CONTACT_INFO.address.region}
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
          <div className="flex flex-col items-center justify-between text-xs text-neutral-400 sm:text-sm md:flex-row">
            <p className="mb-4 md:mb-0">&copy; {currentYear} Luxaura. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 sm:gap-6">
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
