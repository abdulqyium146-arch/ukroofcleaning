import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getLocationBySlug, generateStaticParams, locations } from '@/lib/locations'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { ServiceCards } from '@/components/sections/ServiceCards'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { NearbyAreas } from '@/components/sections/NearbyAreas'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTABanner } from '@/components/sections/CTABanner'
import { ArrowRight, CheckCircle } from 'lucide-react'

export { generateStaticParams }

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const location = getLocationBySlug(slug)
  if (!location) return {}
  return {
    title: location.metaTitle,
    description: location.metaDescription,
    keywords: location.keywords,
    alternates: { canonical: `https://localroofcleaning.uk/locations/${location.slug}` },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `https://localroofcleaning.uk/locations/${location.slug}`,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: `Roof Cleaning ${location.name} — Local Roof Cleaning UK` }],
    },
  }
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params
  const location = getLocationBySlug(slug)
  if (!location) notFound()

  const whyPoints = [
    'Biocidal treatment prevents regrowth for 3–5 years',
    'Safe soft-wash method for all tile types',
    'Free no-obligation quote for all properties',
    '12 years experience in North West England',
    'Gutter clearing & window cleaning also available',
    'Fully insured, professional service',
  ]

  return (
    <>
      <LocalBusinessSchema
        description={location.intro}
        url={`https://localroofcleaning.uk/locations/${location.slug}`}
        areaServed={`${location.name}, ${location.county}`}
        addressLocality={location.name}
        addressRegion={location.county}
      />
      <FAQSchema faqs={location.faqs} />
      <BreadcrumbSchema crumbs={[
        { name: 'Home', url: '/' },
        { name: 'Locations', url: '/locations' },
        { name: location.name, url: `/locations/${location.slug}` },
      ]} />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-brand-bg bg-grid pt-24 pb-16">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 border border-brand-border rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-accent" />
            <span className="font-mono text-xs text-brand-text2 uppercase tracking-widest">
              {location.county} · North West England
            </span>
          </div>
          <h1 className="font-display font-extrabold uppercase text-brand-text1 mb-6"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', lineHeight: '0.95', letterSpacing: '0.02em' }}>
            {location.h1}
          </h1>
          <p className="text-lg text-brand-text2 max-w-2xl mb-10 leading-relaxed">
            {location.intro}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Get a Free Quote in {location.name}
              <ArrowRight size={16} />
            </Link>
            <a href="tel:REPLACE_WITH_PHONE" className="btn-ghost">
              Call Kevin Quinn
            </a>
          </div>
        </div>
      </section>

      {/* Services in this area */}
      <ServiceCards />

      {/* Why this area needs cleaning */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 border border-brand-border rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-gold" />
                <span className="font-mono text-xs text-brand-text2 uppercase tracking-widest">Local Knowledge</span>
              </div>
              <h2 className="font-display font-extrabold uppercase text-brand-text1 mb-6"
                  style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', lineHeight: '1.05', letterSpacing: '0.02em' }}>
                Why {location.name} Homes Need Roof Cleaning
              </h2>
              <p className="text-brand-text2 leading-relaxed text-base">
                {location.whySection}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {whyPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3 bg-brand-bg border border-brand-border rounded-xl p-4">
                  <CheckCircle size={16} className="text-brand-accent mt-0.5 shrink-0" />
                  <span className="text-brand-text2 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps />
      <NearbyAreas areas={location.nearbyAreas} currentTown={location.name} />
      <FAQSection faqs={location.faqs} location={location.name} />
      <CTABanner location={location.name} />
    </>
  )
}
