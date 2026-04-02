import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

const serviceLinks = [
  { label: 'Roof Cleaning', href: '/services/roof-cleaning' },
  { label: 'Gutter Clearing', href: '/services/gutter-clearing' },
  { label: 'Window Cleaning', href: '/services/window-cleaning' },
  { label: 'All Services', href: '/services' },
]

const locationLinks = [
  { label: 'Chorley', href: '/locations/chorley' },
  { label: 'Leyland', href: '/locations/leyland' },
  { label: 'Clitheroe', href: '/locations/clitheroe' },
  { label: 'Fleetwood', href: '/locations/fleetwood' },
  { label: 'Morecambe', href: '/locations/morecambe' },
  { label: 'Congleton', href: '/locations/congleton' },
  { label: 'Ormskirk', href: '/locations/ormskirk' },
  { label: 'Carnforth', href: '/locations/carnforth' },
]

export function Footer() {
  return (
    <footer className="bg-brand-surface border-t border-brand-border">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div>
              <span className="font-display font-bold text-2xl uppercase tracking-wide text-brand-text1">
                Local Roof Cleaning
              </span>
              <span className="font-display font-bold text-2xl uppercase tracking-wide text-brand-accent ml-1">
                UK
              </span>
            </div>
            <p className="text-brand-text3 text-sm leading-relaxed">
              Professional exterior cleaning across North West England. Only 1 phone call away.
            </p>
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 rounded-full px-3 py-1.5">
              <span className="font-mono text-xs text-brand-gold uppercase tracking-widest">12 Years Experience</span>
            </div>
            <a
              href="https://www.instagram.com/localroofcleaninguk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-brand-text3 hover:text-brand-text1 transition-colors text-sm"
            >
              <InstagramIcon size={16} />
              @localroofcleaninguk
            </a>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-base uppercase tracking-widest text-brand-text1">
              Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-brand-text3 hover:text-brand-text1 text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Locations */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-base uppercase tracking-widest text-brand-text1">
              Areas Covered
            </h3>
            <ul className="space-y-2">
              {locationLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-brand-text3 hover:text-brand-text1 text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-base uppercase tracking-widest text-brand-text1">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+447845463877"
                  className="flex items-start gap-3 text-brand-text3 hover:text-brand-gold transition-colors text-sm group"
                >
                  <Phone size={16} className="mt-0.5 shrink-0 text-brand-gold" />
                  <div>
                    <div className="font-mono text-brand-gold group-hover:text-brand-text1 transition-colors">+44 7845 463877</div>
                    <div className="text-brand-text3 text-xs mt-0.5">Kevin Quinn — call any time</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:REPLACE_WITH_EMAIL"
                  className="flex items-center gap-3 text-brand-text3 hover:text-brand-text1 transition-colors text-sm"
                >
                  <Mail size={16} className="shrink-0" />
                  REPLACE_WITH_EMAIL
                </a>
              </li>
              <li className="flex items-start gap-3 text-brand-text3 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>North West England<br />Lancashire & Cheshire</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accentDim text-white font-body font-medium text-xs uppercase tracking-wide px-4 py-2.5 rounded-lg transition-colors mt-2"
            >
              Free Quote →
            </Link>
          </div>
        </div>
      </div>

      {/* Partner bar */}
      <div className="border-t border-brand-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
          <span className="text-brand-text3 text-xs">Trusted partner:</span>
          <a
            href="https://rrmexternalcleaningspecialist.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-accent hover:text-brand-accentDim text-xs font-medium transition-colors"
          >
            RRM External Cleaning Specialist
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-brand-text3 text-xs">
            © 2025 Local Roof Cleaning UK · All rights reserved · localroofcleaning.uk
          </p>
          <div className="flex items-center gap-4">
            <Link href="/sitemap.xml" className="text-brand-text3 hover:text-brand-text2 text-xs transition-colors">
              Sitemap
            </Link>
            <Link href="/about" className="text-brand-text3 hover:text-brand-text2 text-xs transition-colors">
              About Kevin Quinn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
