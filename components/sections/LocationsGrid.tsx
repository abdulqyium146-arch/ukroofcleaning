'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { locations } from '@/lib/locations'

export function LocationsGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-24 bg-brand-surface">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 border border-brand-border rounded-full px-4 py-1.5 mb-4">
              <MapPin size={12} className="text-brand-accent" />
              <span className="font-mono text-xs text-brand-text2 uppercase tracking-widest">Coverage Area</span>
            </div>
            <h2 className="font-display font-extrabold uppercase text-brand-text1"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', lineHeight: '1.05', letterSpacing: '0.02em' }}>
              Areas We Cover
            </h2>
            <p className="text-brand-text2 text-base mt-3 max-w-md">
              Serving homeowners across North West England — Lancashire and Cheshire.
            </p>
          </div>
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 border border-brand-border hover:border-brand-border2 text-brand-text2 hover:text-brand-text1 font-body font-medium text-sm uppercase tracking-wide px-5 py-2.5 rounded-lg transition-all shrink-0"
          >
            All Locations
            <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Location pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {locations.map((location, i) => (
            <motion.div
              key={location.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                href={`/locations/${location.slug}`}
                className="group flex flex-col bg-brand-bg border border-brand-border hover:border-brand-accent/50 rounded-xl p-4 transition-all duration-200 hover:bg-brand-surface"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display font-bold text-base uppercase text-brand-text1 group-hover:text-brand-accent transition-colors">
                    {location.name}
                  </span>
                  <ArrowRight size={14} className="text-brand-text3 group-hover:text-brand-accent transition-colors" />
                </div>
                <span className="font-mono text-xs text-brand-text3 uppercase tracking-widest">
                  {location.county}
                </span>
                {location.competition === 'very-low' && (
                  <span className="mt-2 inline-block font-mono text-xs text-brand-gold border border-brand-gold/30 rounded-full px-2 py-0.5 w-fit">
                    Available Now
                  </span>
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
