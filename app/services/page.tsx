import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, Droplets, Sparkles, ArrowRight, CheckCircle } from 'lucide-react'
import { services } from '@/lib/services'
import { CTABanner } from '@/components/sections/CTABanner'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Our Services | Roof Cleaning, Gutter Clearing & Window Cleaning',
  description: 'Professional exterior cleaning services across North West England. Roof cleaning, gutter clearing and window cleaning by Kevin Quinn — 12 years experience. Free quotes.',
  alternates: { canonical: 'https://localroofcleaning.uk/services' },
}

const iconMap: Record<string, React.ReactNode> = {
  home:     <Home size={32} />,
  droplets: <Droplets size={32} />,
  sparkles: <Sparkles size={32} />,
}

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
      ]} />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-brand-bg bg-grid pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 border border-brand-border rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-accent" />
            <span className="font-mono text-xs text-brand-text2 uppercase tracking-widest">What We Offer</span>
          </div>
          <h1 className="font-display font-extrabold uppercase text-brand-text1 mb-4"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1', letterSpacing: '0.02em' }}>
            Our Services
          </h1>
          <p className="text-lg text-brand-text2 max-w-2xl leading-relaxed">
            Full exterior cleaning for residential properties across North West England. Roof cleaning is our specialism — gutter clearing and window cleaning available alongside.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          {services.map((service, i) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col md:flex-row gap-8 bg-brand-surface border border-brand-border hover:border-brand-border2 rounded-xl p-8 transition-all duration-200"
            >
              <div className="w-16 h-16 rounded-xl bg-brand-surface2 flex items-center justify-center text-brand-text3 group-hover:text-brand-accent group-hover:bg-brand-accent/10 transition-all shrink-0">
                {iconMap[service.icon]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="font-display font-bold text-2xl uppercase text-brand-text1 group-hover:text-brand-accent transition-colors">
                    {service.name}
                  </h2>
                  <ArrowRight size={20} className="text-brand-text3 group-hover:text-brand-accent transition-all mt-1.5 shrink-0 group-hover:translate-x-1" />
                </div>
                <p className="text-brand-text2 leading-relaxed mb-5">{service.longDesc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {service.benefits.map((b, bi) => (
                    <div key={bi} className="flex items-start gap-2 text-sm text-brand-text2">
                      <CheckCircle size={14} className="text-brand-accent mt-0.5 shrink-0" />
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  )
}
