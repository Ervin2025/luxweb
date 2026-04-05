import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LoadingFavicon from '@/components/LoadingFavicon';
import SupportDock from '@/components/SupportDock';
import { CONTACT_INFO, SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: 'LuxAura | Australian Family-Owned Textile Fulfillment Partner',
    template: '%s | LuxAura',
  },
  description:
    'LuxAura is an Australian family-owned strategic fulfillment partner combining global textile sourcing, integrated fabrication and Sydney-based delivery accountability.',
  keywords: [
    'Wholesale Fabric Sydney',
    'Designer Curtain Manufacturer',
    'Roman Blind Specialist',
    'FibreGuard Supplier Australia',
    'Curtain Workroom Sydney',
    'Trade Fabric Supplier Sydney',
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
    title: 'LuxAura | Australian Family-Owned Textile Fulfillment Partner',
    description:
      'Australian family-owned fulfillment support with global fabric sourcing, integrated fabrication and Sydney accountability for designers, builders and project teams.',
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
    title: 'LuxAura | Australian Family-Owned Textile Partner',
    description: 'Australian family-owned sourcing, fabrication and delivery support for premium soft-furnishing projects.',
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
  const phoneDigits = CONTACT_INFO.phone.replace(/\D/g, '');
  const localPhone = phoneDigits.startsWith('0') ? phoneDigits.slice(1) : phoneDigits;
  const internationalPhone = localPhone.startsWith('61') ? `+${localPhone}` : `+61${localPhone}`;
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
    telephone: internationalPhone,
    email: CONTACT_INFO.email,
    sameAs: [SOCIAL_LINKS.facebook, SOCIAL_LINKS.instagram],
    knowsAbout: [
      'Wholesale Fabric Sydney',
      'Designer Curtain Manufacturer',
      'Roman Blind Specialist',
      'FibreGuard Supplier Australia',
      'Curtain hardware and trimmings',
      'Bespoke upholstery and custom furniture softening',
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="LuxAura is an Australian family-owned strategic fulfillment partner combining global textile sourcing, integrated fabrication and Sydney-based delivery accountability."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="font-sans">
        <LoadingFavicon />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <SupportDock />
      </body>
    </html>
  );
}
