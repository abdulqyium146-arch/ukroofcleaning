import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/404',
          '/500',
        ],
      },
      // Block AI training crawlers
      { userAgent: 'GPTBot',       disallow: '/' },
      { userAgent: 'ChatGPT-User', disallow: '/' },
      { userAgent: 'CCBot',        disallow: '/' },
      { userAgent: 'anthropic-ai', disallow: '/' },
      { userAgent: 'Claude-Web',   disallow: '/' },
      { userAgent: 'Omgilibot',    disallow: '/' },
      { userAgent: 'FacebookBot',  disallow: '/' },
    ],
    sitemap: 'https://localroofcleaning.uk/sitemap.xml',
  }
}
