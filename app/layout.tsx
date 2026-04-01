import type { Metadata } from 'next'
import { Barlow_Condensed, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display-var',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body-var',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono-var',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://localroofcleaning.uk'),
  title: {
    default: 'Local Roof Cleaning UK | North West England',
    template: '%s | Local Roof Cleaning UK',
  },
  description:
    'Professional roof cleaning across North West England. Serving Chorley, Leyland, Clitheroe, Fleetwood, Morecambe, Congleton, Ormskirk & Carnforth. 12 years experience. Free quotes.',
  keywords: [
    'roof cleaning North West',
    'roof cleaning Lancashire',
    'moss removal Lancashire',
    'roof cleaning Cheshire',
    'local roof cleaner North West',
    'soft wash roof cleaning',
  ],
  authors: [{ name: 'Kevin Quinn — Local Roof Cleaning UK' }],
  creator: 'Local Roof Cleaning UK',
  publisher: 'Local Roof Cleaning UK',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://localroofcleaning.uk',
    siteName: 'Local Roof Cleaning UK',
    title: 'Local Roof Cleaning UK | North West England',
    description:
      'Professional roof cleaning across North West England. 12 years experience. Free quotes.',
    // og-image is auto-served from app/opengraph-image.tsx
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local Roof Cleaning UK | North West England',
    description: 'Professional roof cleaning across North West England. 12 years experience.',
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
  alternates: {
    canonical: 'https://localroofcleaning.uk',
  },
  // Add your Google Search Console verification token here once you have it:
  // verification: { google: 'YOUR_TOKEN_HERE' },
}

// Sitewide WebSite + Organization JSON-LD (injected once in <head>)
function SiteSchemas() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://localroofcleaning.uk/#website',
    name: 'Local Roof Cleaning UK',
    url: 'https://localroofcleaning.uk',
    description:
      'Professional roof cleaning, gutter clearing and window cleaning across North West England.',
    publisher: {
      '@type': 'Organization',
      '@id': 'https://localroofcleaning.uk/#business',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://localroofcleaning.uk/locations/{search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-GB',
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://localroofcleaning.uk/#business',
    name: 'Local Roof Cleaning UK',
    url: 'https://localroofcleaning.uk',
    logo: {
      '@type': 'ImageObject',
      url: 'https://localroofcleaning.uk/logo.png',
      width: 400,
      height: 100,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: 'REPLACE_WITH_PHONE',
      contactType: 'customer service',
      areaServed: 'GB',
      availableLanguage: 'English',
    },
    sameAs: ['https://www.instagram.com/localroofcleaninguk/'],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-GB"
      className={`${barlowCondensed.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <SiteSchemas />
      </head>
      <body style={{ fontFamily: 'var(--font-body-var), sans-serif' }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
