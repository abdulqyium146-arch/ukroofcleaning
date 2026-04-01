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
  description: 'Professional roof cleaning across North West England. Serving Chorley, Leyland, Clitheroe, Fleetwood, Morecambe, Congleton, Ormskirk & Carnforth. 12 years experience. Free quotes.',
  keywords: ['roof cleaning North West', 'roof cleaning Lancashire', 'moss removal Lancashire', 'roof cleaning Cheshire', 'local roof cleaner North West'],
  authors: [{ name: 'Local Roof Cleaning UK' }],
  creator: 'Local Roof Cleaning UK',
  publisher: 'Local Roof Cleaning UK',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://localroofcleaning.uk',
    siteName: 'Local Roof Cleaning UK',
    title: 'Local Roof Cleaning UK | North West England',
    description: 'Professional roof cleaning across North West England. 12 years experience. Free quotes.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local Roof Cleaning UK | North West England',
    description: 'Professional roof cleaning across North West England. 12 years experience.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: 'REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-GB"
      className={`${barlowCondensed.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body
        style={{
          fontFamily: 'var(--font-body-var), sans-serif',
        }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
