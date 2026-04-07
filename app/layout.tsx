import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ImageCodeToggle from '@/components/ImageCodeToggle';
import LoadingFavicon from '@/components/LoadingFavicon';
import SupportDock from '@/components/SupportDock';
import { CONTACT_INFO, SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: 'LuxAura | Sydney Soft-Furnishing Fulfillment Hub',
    template: '%s | LuxAura',
  },
  description:
    "LuxAura is Sydney's full-service soft-furnishing fulfillment hub, combining global textile sourcing, master fabrication, and accountable local project delivery.",
  keywords: [
    'Premium textile sourcing Sydney',
    'Soft-furnishing fulfillment Sydney',
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
    title: 'LuxAura | Sydney Soft-Furnishing Fulfillment Hub',
    description:
      'Sydney-based fulfillment support with global fabric sourcing, integrated fabrication, and local accountability for designers, builders, developers, and project teams.',
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
    title: 'LuxAura | Sydney Soft-Furnishing Fulfillment Hub',
    description:
      'Sydney-based sourcing, fabrication, and delivery support for premium soft-furnishing projects.',
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
  const imageCodeScript = `(function(){var root=document.documentElement;var storageKey='luxaura-image-codes';var eventName='luxaura-image-codes-change';var isLocalHost=function(){return /^(localhost|127\\.0\\.0\\.1|0\\.0\\.0\\.0)$/.test(window.location.hostname)||window.location.hostname.indexOf('192.168.')===0||window.location.hostname.indexOf('10.')===0;};var getQueryEnabled=function(){var query=window.location.search;return query.indexOf('image-codes=1')!==-1||query.indexOf('image-codes=true')!==-1;};var getStoredEnabled=function(){try{return window.localStorage.getItem(storageKey);}catch(error){return null;}};var setStoredEnabled=function(enabled){try{window.localStorage.setItem(storageKey,enabled?'1':'0');}catch(error){}};var isEnabled=function(){var queryEnabled=getQueryEnabled();if(queryEnabled){setStoredEnabled(true);return true;}var stored=getStoredEnabled();if(stored==='1'){return true;}if(stored==='0'){return false;}return isLocalHost();};var apply=function(enabled){if(enabled){root.dataset.imageCodes='1';}else{delete root.dataset.imageCodes;}window.dispatchEvent(new CustomEvent(eventName,{detail:{enabled:enabled}}));};var sync=function(){apply(isEnabled());};var wrap=function(method){var original=history[method];if(!original||original.__imageCodesWrapped){return;}var wrapped=function(){var result=original.apply(this,arguments);setTimeout(sync,0);return result;};wrapped.__imageCodesWrapped=true;history[method]=wrapped;};wrap('pushState');wrap('replaceState');window.addEventListener('popstate',sync);sync();})();`;
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
        <meta
          name="description"
          content="LuxAura is Sydney's full-service soft-furnishing fulfillment hub, combining global textile sourcing, master fabrication, and accountable local project delivery."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: imageCodeScript,
          }}
        />
      </head>
      <body className="font-sans">
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
