import { MetadataRoute } from 'next'
import { locations } from '@/lib/locations'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://localroofcleaning.uk'
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${base}/gallery`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/roof-cleaning`, lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/services/gutter-clearing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/window-cleaning`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/locations`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
  ]

  const locationPages: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${base}/locations/${l.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  return [...staticPages, ...locationPages]
}
