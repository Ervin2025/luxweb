import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ImageCodeToggle from '@/components/ImageCodeToggle';
import LoadingFavicon from '@/components/LoadingFavicon';
import ScrollRevealBoot from '@/components/ScrollRevealBoot';
import SupportDock from '@/components/SupportDock';
import { IMAGE_CODE_BOOTSTRAP_SCRIPT } from '@/lib/image-code-bootstrap';
import { CONTACT_INFO, SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: 'LuxAura | Sydney Soft-Furnishing Trade Partner',
    template: '%s | LuxAura',
  },
  description:
    "LuxAura is Sydney's design-aware soft-furnishing and project-support partner, combining sourcing, fabrication, specification support and coordinated delivery.",
  keywords: [
    'Premium textile sourcing Sydney',
    'Soft furnishing trade partner Sydney',
    'Roman blind specialist',
    'FibreGuard supplier Australia',
    'Curtain workroom Sydney',
    'Trade furnishing partner Sydney',
  ],
  authors: [{ name: 'LuxAura' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/logo.svg', type: 'image/svg+xml' },
      { url: '/logo.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/logo.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'LuxAura | Sydney Soft-Furnishing Trade Partner',
    description:
      'Sydney-based sourcing, fabrication, project support and local accountability for designers, builders, developers and furnishing-led project teams.',
    type: 'website',
    locale: 'en_AU',
    siteName: 'LuxAura',
    images: [
      {
        url: '/images/luxaura/hero-project.webp',
        width: 1200,
        height: 630,
        alt: 'LuxAura custom drapery and upholstery project in Sydney',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LuxAura | Sydney Soft-Furnishing Trade Partner',
    description:
      'Sydney-based sourcing, fabrication and project support for premium soft-furnishing work.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.svg`,
    '@id': `${SITE_CONFIG.url}/#organization`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT_INFO.address.line1,
      addressCountry: 'AU',
      addressRegion: CONTACT_INFO.address.region,
      addressLocality: CONTACT_INFO.address.city,
    },
    areaServed: {
      '@type': 'Country',
      name: CONTACT_INFO.address.country,
    },
    priceRange: '$$-$$$',
    openingHours: 'Mo-Sa 08:00-18:00',
    telephone: CONTACT_INFO.internationalPhone,
    email: CONTACT_INFO.email,
    sameAs: [SOCIAL_LINKS.facebook, SOCIAL_LINKS.instagram],
    knowsAbout: [
      'Premium textile sourcing Sydney',
      'Designer curtain fabrication',
      'Roman blind specialist',
      'FibreGuard supplier Australia',
      'Curtain hardware and trimmings',
      'Bespoke upholstery and custom soft-furnishing fabrication',
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="font-sans">
        <Script
          id="luxaura-image-codes"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: IMAGE_CODE_BOOTSTRAP_SCRIPT,
          }}
        />
        <ScrollRevealBoot />
        <LoadingFavicon />
        <Navigation />
        <main>{children}</main>
        <ImageCodeToggle />
        <Footer />
        <SupportDock />
      </body>
    </html>
  );
}
