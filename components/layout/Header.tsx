'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, Phone, ChevronDown } from 'lucide-react'
import { MobileMenu } from './MobileMenu'
import { cn } from '@/lib/utils'

const services = [
  { label: 'Roof Cleaning', href: '/services/roof-cleaning' },
  { label: 'Gutter Clearing', href: '/services/gutter-clearing' },
  { label: 'Window Cleaning', href: '/services/window-cleaning' },
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

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-30 h-16 flex items-center transition-all duration-300',
          scrolled
            ? 'bg-brand-surface2/95 backdrop-blur-md border-b border-brand-border shadow-lg shadow-black/20'
            : 'bg-brand-surface2/80 backdrop-blur-md border-b border-brand-border',
        )}
      >
        <div className="max-w-6xl mx-auto px-6 w-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-0 group">
            <span className="font-display font-bold text-xl uppercase tracking-wide text-brand-text1 group-hover:text-brand-text1 transition-colors">
              Local Roof Cleaning
            </span>
            <span className="font-display font-bold text-xl uppercase tracking-wide text-brand-accent ml-1">
              UK
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Services dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 text-brand-text2 hover:text-brand-text1 font-body font-medium text-sm uppercase tracking-wide transition-colors rounded-lg">
                Services
                <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-brand-surface2 border border-brand-border rounded-xl p-2 min-w-[200px] shadow-xl shadow-black/40">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2.5 text-brand-text2 hover:text-brand-text1 hover:bg-brand-surface text-sm rounded-lg transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                  <div className="border-t border-brand-border mt-1 pt-1">
                    <Link
                      href="/services"
                      className="block px-4 py-2.5 text-brand-accent hover:text-brand-accentDim text-sm rounded-lg transition-colors font-medium"
                    >
                      All Services →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Locations dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 text-brand-text2 hover:text-brand-text1 font-body font-medium text-sm uppercase tracking-wide transition-colors rounded-lg">
                Locations
                <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-brand-surface2 border border-brand-border rounded-xl p-2 min-w-[200px] shadow-xl shadow-black/40">
                  <div className="grid grid-cols-2 gap-0.5">
                    {locationLinks.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="block px-4 py-2.5 text-brand-text2 hover:text-brand-text1 hover:bg-brand-surface text-sm rounded-lg transition-colors"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-brand-border mt-1 pt-1">
                    <Link
                      href="/locations"
                      className="block px-4 py-2.5 text-brand-accent hover:text-brand-accentDim text-sm rounded-lg transition-colors font-medium"
                    >
                      All Locations →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/about" className="px-4 py-2 text-brand-text2 hover:text-brand-text1 font-body font-medium text-sm uppercase tracking-wide transition-colors rounded-lg">
              About
            </Link>
            <Link href="/gallery" className="px-4 py-2 text-brand-text2 hover:text-brand-text1 font-body font-medium text-sm uppercase tracking-wide transition-colors rounded-lg">
              Gallery
            </Link>
          </nav>

          {/* Right: phone + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+447845463877"
              className="flex items-center gap-2 font-mono text-sm text-brand-gold hover:text-brand-text1 transition-colors"
            >
              <Phone size={14} />
              +44 7845 463877
            </a>
            <Link
              href="/contact"
              className="bg-brand-accent hover:bg-brand-accentDim text-white font-body font-medium text-sm uppercase tracking-wide px-5 py-2.5 rounded-lg transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-2 text-brand-text2 hover:text-brand-text1 transition-colors"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
