import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { locations } from '@/lib/locations'
import { CTABanner } from '@/components/sections/CTABanner'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Areas Covered | Roof Cleaning North West England',
  description: 'Local Roof Cleaning UK covers Chorley, Leyland, Clitheroe, Fleetwood, Morecambe, Congleton, Ormskirk & Carnforth. Professional roof cleaning across Lancashire and Cheshire.',
  alternates: { canonical: 'https://localroofcleaning.uk/locations' },
}

export default function LocationsPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: 'Home', url: '/' },
        { name: 'Locations', url: '/locations' },
      ]} />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-brand-bg bg-grid pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 border border-brand-border rounded-full px-4 py-1.5 mb-6">
            <MapPin size={12} className="text-brand-accent" />
            <span className="font-mono text-xs text-brand-text2 uppercase tracking-widest">Coverage Area</span>
          </div>
          <h1 className="font-display font-extrabold uppercase text-brand-text1 mb-4"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1', letterSpacing: '0.02em' }}>
            Areas We Cover
          </h1>
          <p className="text-lg text-brand-text2 max-w-2xl leading-relaxed">
            Local Roof Cleaning UK serves homeowners across North West England — from the Lancashire coast to the Cheshire plains. Find your area below.
          </p>
        </div>
      </section>

      {/* Locations grid */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group flex flex-col bg-brand-surface border border-brand-border hover:border-brand-accent/50 rounded-xl p-6 transition-all duration-200 hover:bg-brand-surface2"
              >
                <div className="flex items-start justify-between mb-4">
                  <MapPin size={20} className="text-brand-accent mt-0.5" />
                  <ArrowRight size={16} className="text-brand-text3 group-hover:text-brand-accent transition-colors" />
                </div>
                <h2 className="font-display font-bold text-xl uppercase text-brand-text1 group-hover:text-brand-accent transition-colors mb-1">
                  {location.name}
                </h2>
                <p className="font-mono text-xs text-brand-text3 uppercase tracking-widest mb-3">
                  {location.county}
                </p>
                <p className="text-brand-text3 text-xs leading-relaxed mb-4">
                  {location.region}
                </p>
                {location.competition === 'very-low' && (
                  <span className="inline-block font-mono text-xs text-brand-gold border border-brand-gold/30 rounded-full px-2.5 py-1 w-fit">
                    Taking Bookings
                  </span>
                )}
              </Link>
            ))}
          </div>

          {/* Not listed note */}
          <div className="mt-12 bg-brand-surface border border-brand-border rounded-xl p-8 text-center">
            <h3 className="font-display font-bold text-xl uppercase text-brand-text1 mb-3">
              Don&apos;t See Your Area?
            </h3>
            <p className="text-brand-text2 text-sm mb-6 max-w-lg mx-auto">
              We cover a wider area than listed above. Call Kevin Quinn to check if we can reach your postcode — no obligation.
            </p>
            <a
              href="tel:REPLACE_WITH_PHONE"
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accentDim text-white font-body font-medium text-sm uppercase tracking-wide px-6 py-3 rounded-lg transition-colors"
            >
              Call to Check Coverage
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
