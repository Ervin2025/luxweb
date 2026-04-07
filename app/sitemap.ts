import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/collections`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.96,
    },
    {
      url: `${baseUrl}/custom-curtains-sheers`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.92,
    },
    {
      url: `${baseUrl}/cushions-soft-furnishings`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hardware-systems`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.94,
    },
    {
      url: `${baseUrl}/decorative-trimmings`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.93,
    },
    {
      url: `${baseUrl}/trade-projects`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.96,
    },
    {
      url: `${baseUrl}/project-support`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.74,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.72,
    },
    {
      url: `${baseUrl}/thank-you`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.42,
    },
    {
      url: `${baseUrl}/trade/login`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.58,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
