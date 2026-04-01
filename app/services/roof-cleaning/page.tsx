import type { Metadata } from 'next'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { getServiceBySlug } from '@/lib/services'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { CTABanner } from '@/components/sections/CTABanner'
import { FAQSection } from '@/components/sections/FAQSection'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'

export const metadata: Metadata = {
  title: 'Roof Cleaning Services | North West England',
  description: 'Professional roof cleaning across North West England. Moss removal, algae treatment, soft-wash & biocidal protection. 12 years experience. Free no-obligation quotes.',
  alternates: { canonical: 'https://localroofcleaning.uk/services/roof-cleaning' },
}

const faqs = [
  { question: 'What is soft-wash roof cleaning?', answer: 'Soft-wash is a low-pressure cleaning method that uses specialist detergents and biocides to clean and treat roof surfaces. Unlike high-pressure washing, soft-wash does not risk dislodging or cracking tiles, making it the industry-recommended approach for residential roofs.' },
  { question: 'How long does roof cleaning take?', answer: 'Most residential roofs are completed in a single day. Heavily affected roofs or larger properties may require a second visit for biocide treatment application.' },
  { question: 'Does roof cleaning prevent moss coming back?', answer: 'Yes — our biocidal post-treatment significantly suppresses regrowth for 3–5 years. Without treatment, moss can return within 12–18 months in wet North West conditions.' },
  { question: 'Is roof cleaning safe for all tile types?', answer: 'Yes. We clean concrete tiles, clay tiles, natural slate, and artificial slate. Each material receives a tailored approach — softer pressure and different chemistry for more delicate tiles.' },
]

export default function RoofCleaningPage() {
  const service = getServiceBySlug('roof-cleaning')!

  return (
    <>
      <LocalBusinessSchema
        description={service.longDesc}
        url="https://localroofcleaning.uk/services/roof-cleaning"
        areaServed="North West England"
        serviceType="Roof Cleaning"
      />
      <BreadcrumbSchema crumbs={[
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Roof Cleaning', url: '/services/roof-cleaning' },
      ]} />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-brand-bg bg-grid pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 border border-brand-border rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-accent" />
            <span className="font-mono text-xs text-brand-text2 uppercase tracking-widest">Primary Service</span>
          </div>
          <h1 className="font-display font-extrabold uppercase text-brand-text1 mb-6"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1', letterSpacing: '0.02em' }}>
            Roof Cleaning<br />
            <span className="text-brand-accent">North West England</span>
          </h1>
          <p className="text-lg text-brand-text2 max-w-2xl mb-10 leading-relaxed">
            {service.longDesc}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">Get a Free Quote</Link>
            <a href="tel:REPLACE_WITH_PHONE" className="btn-ghost">Call Kevin Quinn</a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display font-extrabold uppercase text-brand-text1 mb-10"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', lineHeight: '1.05', letterSpacing: '0.02em' }}>
            Why Professional Roof Cleaning?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 bg-brand-bg border border-brand-border rounded-xl p-5">
                <CheckCircle size={18} className="text-brand-accent mt-0.5 shrink-0" />
                <span className="text-brand-text2 text-sm leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps steps={service.process} />
      <FAQSection faqs={faqs} />

      {/* Locations CTA */}
      <section className="py-16 bg-brand-surface border-y border-brand-border">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="font-display font-bold text-xl uppercase text-brand-text1 mb-4">
            Roof Cleaning Across North West England
          </h3>
          <p className="text-brand-text2 text-sm mb-6 max-w-xl mx-auto">
            We serve Chorley, Leyland, Clitheroe, Fleetwood, Morecambe, Congleton, Ormskirk, Carnforth and surrounding areas.
          </p>
          <Link href="/locations" className="inline-flex items-center gap-2 text-brand-accent hover:text-brand-accentDim font-body font-medium text-sm uppercase tracking-wide transition-colors">
            View All Locations <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
