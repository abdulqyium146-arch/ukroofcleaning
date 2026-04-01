import { MetadataRoute } from 'next'
import { locations } from '@/lib/locations'

// Update this date whenever page content is meaningfully changed
const SITE_PUBLISHED = new Date('2025-04-01')

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://localroofcleaning.uk'

  const staticPages: MetadataRoute.Sitemap = [
    { url: base,                              lastModified: SITE_PUBLISHED, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services`,                lastModified: SITE_PUBLISHED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/roof-cleaning`,  lastModified: SITE_PUBLISHED, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/services/gutter-clearing`,lastModified: SITE_PUBLISHED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/window-cleaning`,lastModified: SITE_PUBLISHED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/locations`,               lastModified: SITE_PUBLISHED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/contact`,                 lastModified: SITE_PUBLISHED, changeFrequency: 'yearly',  priority: 0.8 },
    { url: `${base}/gallery`,                 lastModified: SITE_PUBLISHED, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/about`,                   lastModified: SITE_PUBLISHED, changeFrequency: 'yearly',  priority: 0.5 },
  ]

  const locationPages: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${base}/locations/${l.slug}`,
    lastModified: SITE_PUBLISHED,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  return [...staticPages, ...locationPages]
}
