import { SITE_CONFIG } from './constants';

const ORGANIZATION_ID = `${SITE_CONFIG.url}/#organization`;
const WEBSITE_ID = `${SITE_CONFIG.url}/#website`;

function toAbsoluteUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    return pathOrUrl;
  }

  return `${SITE_CONFIG.url}${pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`}`;
}

interface WebPageSchemaOptions {
  name: string;
  description: string;
  path: string;
  image?: string;
  type?: 'WebPage' | 'AboutPage' | 'ContactPage';
}

interface ServiceSchemaOptions {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  image?: string;
}

interface HowToSchemaOptions {
  name: string;
  description: string;
  path: string;
  image?: string;
  steps: Array<{
    name: string;
    text: string;
  }>;
}

export function generateWebPageSchema({
  name,
  description,
  path,
  image,
  type = 'WebPage',
}: WebPageSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    description,
    url: toAbsoluteUrl(path),
    inLanguage: 'en-AU',
    isPartOf: {
      '@id': WEBSITE_ID,
    },
    publisher: {
      '@id': ORGANIZATION_ID,
    },
    primaryImageOfPage: image
      ? {
          '@type': 'ImageObject',
          url: toAbsoluteUrl(image),
        }
      : undefined,
  };
}

export function generateServiceSchema({
  name,
  description,
  path,
  serviceType,
  image,
}: ServiceSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType,
    url: toAbsoluteUrl(path),
    areaServed: {
      '@type': 'City',
      name: 'Sydney',
    },
    provider: {
      '@id': ORGANIZATION_ID,
    },
    image: image ? toAbsoluteUrl(image) : undefined,
  };
}

export function generateHowToSchema({
  name,
  description,
  path,
  image,
  steps,
}: HowToSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    url: toAbsoluteUrl(path),
    inLanguage: 'en-AU',
    publisher: {
      '@id': ORGANIZATION_ID,
    },
    image: image ? toAbsoluteUrl(image) : undefined,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}
