import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import {
  BUSINESS_PAGE_CONFIGS,
  type BusinessPageConfig,
  type BusinessPageSlug,
} from '@/lib/site-data';

export function getBusinessPageConfig(slug: BusinessPageSlug): BusinessPageConfig {
  return BUSINESS_PAGE_CONFIGS[slug];
}

export function buildBusinessMetadata(slug: BusinessPageSlug): Metadata {
  const config = getBusinessPageConfig(slug);

  return {
    title: config.metadataTitle,
    description: config.metadataDescription,
    keywords: config.metadataKeywords,
    alternates: {
      canonical: `${SITE_CONFIG.url}/${slug}`,
    },
  };
}
