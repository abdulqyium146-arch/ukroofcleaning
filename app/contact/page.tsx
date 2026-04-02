import type { Metadata } from 'next'
import { ContactForm } from './ContactForm'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'

export const metadata: Metadata = {
  title: 'Get a Free Roof Cleaning Quote | Contact Us',
  description: 'Contact Kevin Quinn at Local Roof Cleaning UK for a free, no-obligation quote. Serving Chorley, Leyland, Morecambe, Fleetwood and all of North West England.',
  alternates: { canonical: 'https://localroofcleaning.uk/contact' },
  openGraph: {
    title: 'Get a Free Roof Cleaning Quote | Local Roof Cleaning UK',
    description: 'Contact Kevin Quinn for a free, no-obligation roof cleaning quote. North West England coverage. Call +44 7845 463877.',
    url: 'https://localroofcleaning.uk/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <LocalBusinessSchema
        description="Contact Local Roof Cleaning UK for a free no-obligation quote. Professional roof cleaning across North West England."
        url="https://localroofcleaning.uk/contact"
      />

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center bg-brand-bg bg-grid pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 border border-brand-border rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-accent" />
            <span className="font-mono text-xs text-brand-text2 uppercase tracking-widest">Free Quote</span>
          </div>
          <h1 className="font-display font-extrabold uppercase text-brand-text1 mb-4"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1', letterSpacing: '0.02em' }}>
            Get in Touch
          </h1>
          <p className="text-lg text-brand-text2 max-w-xl leading-relaxed">
            Call Kevin directly or fill in the form below. Free no-obligation quotes for all properties across North West England.
          </p>
        </div>
      </section>

      <ContactForm />
    </>
  )
}
