'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Phone, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const navLinks = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Roof Cleaning', href: '/services/roof-cleaning' },
      { label: 'Gutter Clearing', href: '/services/gutter-clearing' },
      { label: 'Window Cleaning', href: '/services/window-cleaning' },
    ],
  },
  {
    label: 'Locations',
    href: '/locations',
    children: [
      { label: 'Chorley', href: '/locations/chorley' },
      { label: 'Leyland', href: '/locations/leyland' },
      { label: 'Clitheroe', href: '/locations/clitheroe' },
      { label: 'Fleetwood', href: '/locations/fleetwood' },
      { label: 'Morecambe', href: '/locations/morecambe' },
      { label: 'Congleton', href: '/locations/congleton' },
      { label: 'Ormskirk', href: '/locations/ormskirk' },
      { label: 'Carnforth', href: '/locations/carnforth' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
]

export function MobileMenu({ isOpen, onClose }: Props) {
  const [openSection, setOpenSection] = useState<string | null>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-80 max-w-full bg-brand-surface2 border-l border-brand-border z-50 transition-transform duration-300 flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-brand-border">
          <span className="font-display text-lg font-bold text-brand-text1 uppercase tracking-wide">
            Local Roof Cleaning <span className="text-brand-accent">UK</span>
          </span>
          <button
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-brand-surface transition-colors text-brand-text2"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-4">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.children ? (
                <>
                  <button
                    onClick={() => setOpenSection(openSection === link.label ? null : link.label)}
                    className="w-full flex items-center justify-between px-6 py-3 min-h-[44px] text-brand-text1 font-body font-medium uppercase tracking-wide text-sm hover:text-brand-accent transition-colors"
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={cn(
                        'transition-transform duration-200',
                        openSection === link.label && 'rotate-180',
                      )}
                    />
                  </button>
                  {openSection === link.label && (
                    <div className="bg-brand-surface border-y border-brand-border">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className="block px-10 py-3 min-h-[44px] flex items-center text-brand-text2 text-sm hover:text-brand-accent transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block px-6 py-3 min-h-[44px] flex items-center text-brand-text1 font-body font-medium uppercase tracking-wide text-sm hover:text-brand-accent transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Footer CTAs */}
        <div className="p-6 border-t border-brand-border space-y-3">
          <a
            href="tel:+447845463877"
            className="flex items-center gap-3 w-full bg-brand-accent hover:bg-brand-accentDim text-white font-body font-medium uppercase tracking-wide text-sm px-5 py-3 rounded-lg transition-colors justify-center"
          >
            <Phone size={16} />
            Call Kevin Quinn
          </a>
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center gap-3 w-full border border-brand-border hover:border-brand-border2 text-brand-text1 font-body font-medium uppercase tracking-wide text-sm px-5 py-3 rounded-lg transition-colors justify-center"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </>
  )
}
