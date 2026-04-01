import type { Metadata } from 'next'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { getServiceBySlug } from '@/lib/services'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { CTABanner } from '@/components/sections/CTABanner'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { ServiceSchema } from '@/components/seo/ServiceSchema'
import { FAQSchema } from '@/components/seo/FAQSchema'

export const metadata: Metadata = {
  title: 'Window Cleaning Services | North West England',
  description: 'Professional window cleaning across North West England. Pure water, streak-free results. 12 years experience. Free quotes available.',
  alternates: { canonical: 'https://localroofcleaning.uk/services/window-cleaning' },
  openGraph: {
    title: 'Window Cleaning Services | North West England',
    description: 'Professional window cleaning across North West England. Pure water, streak-free results. 12 years experience.',
    url: 'https://localroofcleaning.uk/services/window-cleaning',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Window Cleaning Services — North West England' }],
  },
}

const faqs = [
  { question: 'What is pure water window cleaning?', answer: 'Pure water cleaning uses highly purified water delivered through a telescopic pole and brush system. Because the water contains no minerals or dissolved solids, it evaporates without leaving spots or streaks — giving a superior finish compared to traditional squeegee cleaning.' },
  { question: 'How high can you reach for window cleaning?', answer: 'Our pure water pole systems can reach windows up to 4 storeys high safely from the ground, removing the need for ladders on most residential properties.' },
  { question: 'How often should windows be professionally cleaned?', answer: 'Most residential customers clean every 4–8 weeks. The frequency depends on your location, surrounding environment and personal preference.' },
  { question: 'Do you clean conservatory roofs too?', answer: 'Yes — our pure water system is ideal for conservatory roofs, removing algae, grime and hard water deposits safely without the need for ladders or scaffolding.' },
]

export default function WindowCleaningPage() {
  const service = getServiceBySlug('window-cleaning')!

  return (
    <>
      <ServiceSchema
        name="Window Cleaning"
        description={service.longDesc}
        url="https://localroofcleaning.uk/services/window-cleaning"
        serviceType="Window Cleaning"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema crumbs={[
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Window Cleaning', url: '/services/window-cleaning' },
      ]} />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-brand-bg bg-grid pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 border border-brand-border rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-accent" />
            <span className="font-mono text-xs text-brand-text2 uppercase tracking-widest">Exterior Cleaning</span>
          </div>
          <h1 className="font-display font-extrabold uppercase text-brand-text1 mb-6"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1', letterSpacing: '0.02em' }}>
            Window Cleaning<br />
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
            Pure Water Window Cleaning
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
      <CTABanner />
    </>
  )
}
