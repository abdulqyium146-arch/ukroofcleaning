import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

type Props = {
  location?: string
}

export function CTABanner({ location }: Props) {
  return (
    <section className="py-20 bg-brand-accent relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display font-extrabold uppercase text-white mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1', letterSpacing: '0.02em' }}>
          Ready for a Cleaner Roof{location ? ` in ${location}` : ''}?
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
          Get your free no-obligation quote. Kevin Quinn — 12 years of trusted exterior cleaning across North West England.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="tel:+447845463877"
            className="inline-flex items-center gap-3 bg-white text-brand-accent hover:bg-brand-text1 font-body font-medium text-base uppercase tracking-wide px-8 py-4 rounded-lg transition-all duration-200 min-h-[56px] shadow-lg shadow-black/20"
          >
            <Phone size={18} />
            Call Now — +44 7845 463877
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-body font-medium text-sm uppercase tracking-wide px-7 py-4 rounded-lg transition-all duration-200 min-h-[56px]"
          >
            Get a Quote Online
            <ArrowRight size={16} />
          </Link>
        </div>
        <p className="mt-6 text-white/60 text-sm">
          Or email us at{' '}
          <a href="mailto:REPLACE_WITH_EMAIL" className="text-white/80 hover:text-white underline transition-colors">
            REPLACE_WITH_EMAIL
          </a>
        </p>
      </div>
    </section>
  )
}
