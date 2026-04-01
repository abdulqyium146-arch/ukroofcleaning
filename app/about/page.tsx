import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Award, Phone } from 'lucide-react'

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}
import { CTABanner } from '@/components/sections/CTABanner'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'About Kevin Quinn | 12 Years Roof Cleaning Experience',
  description: 'Kevin Quinn — founder of Local Roof Cleaning UK. 12 years professional exterior cleaning experience across North West England. Trusted, local, insured.',
  alternates: { canonical: 'https://localroofcleaning.uk/about' },
}

const values = [
  { title: 'Honest Pricing', desc: 'Free no-obligation quotes with clear, upfront pricing. No hidden charges, no pressure to book.' },
  { title: 'Right Method', desc: 'Soft-wash only — we never use high-pressure washing that can damage or dislodge your tiles.' },
  { title: 'Local Knowledge', desc: '12 years working across Lancashire and Cheshire means we understand local weather patterns and how they affect your roof.' },
  { title: 'Only 1 Call Away', desc: 'Call Kevin directly. No call centres, no middlemen — just a direct conversation with the person doing the job.' },
]

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
      ]} />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-brand-bg bg-grid pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 rounded-full px-4 py-1.5 mb-6">
            <Award size={12} className="text-brand-gold" />
            <span className="font-mono text-xs text-brand-gold uppercase tracking-widest">12 Years Experience</span>
          </div>
          <h1 className="font-display font-extrabold uppercase text-brand-text1 mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1', letterSpacing: '0.02em' }}>
            About Kevin Quinn
          </h1>
          <p className="text-lg text-brand-text2 max-w-2xl leading-relaxed">
            Founder of Local Roof Cleaning UK. 12 years of professional exterior cleaning across North West England — roofs, gutters and windows.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-invert max-w-none">
            <h2 className="font-display font-extrabold uppercase text-brand-text1 mb-8"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', lineHeight: '1.05', letterSpacing: '0.02em' }}>
              Who We Are
            </h2>
            <div className="space-y-5 text-brand-text2 leading-relaxed text-base">
              <p>
                Local Roof Cleaning UK was founded by Kevin Quinn in 2013. Over 12 years working across Lancashire and Cheshire, Kevin has cleaned hundreds of roofs — from terraced houses in Chorley to coastal properties in Fleetwood and Morecambe.
              </p>
              <p>
                The business was built on a simple principle: do the job properly, use the right methods, and be honest with customers about what their roof needs. That means soft-wash cleaning — never high-pressure washing — and biocidal treatment that actually prevents regrowth rather than just pushing the problem down the road.
              </p>
              <p>
                We&apos;re a small, owner-operated business. When you call, you speak to Kevin. When we turn up, Kevin is on the job. There are no subcontractors, no large crews — just a specialist who takes pride in the work.
              </p>
              <p>
                North West England&apos;s climate — high rainfall, Atlantic weather systems, coastal damp — creates some of the most demanding conditions for roofs in the UK. 12 years working in these conditions means we know what works and what doesn&apos;t. That local knowledge is what sets us apart from national cleaning companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display font-extrabold uppercase text-brand-text1 mb-12"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', lineHeight: '1.05', letterSpacing: '0.02em' }}>
            How We Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-brand-surface border border-brand-border rounded-xl p-6 hover:border-brand-border2 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle size={18} className="text-brand-accent shrink-0" />
                  <h3 className="font-display font-bold text-lg uppercase text-brand-text1">{v.title}</h3>
                </div>
                <p className="text-brand-text2 text-sm leading-relaxed pl-7">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact card */}
      <section className="py-16 bg-brand-surface border-y border-brand-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="font-display font-bold text-2xl uppercase text-brand-text1 mb-4">
            Speak Directly to Kevin
          </h3>
          <p className="text-brand-text2 text-base mb-8 max-w-lg mx-auto">
            No call centres. Call or message directly and get a straight answer about your roof.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:REPLACE_WITH_PHONE" className="btn-primary">
              <Phone size={16} />
              Call Now
            </a>
            <Link href="/contact" className="btn-ghost">Get a Free Quote</Link>
            <a
              href="https://www.instagram.com/localroofcleaninguk/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <InstagramIcon size={16} />
              Instagram
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
