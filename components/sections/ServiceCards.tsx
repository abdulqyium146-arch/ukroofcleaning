'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Home, Droplets, Sparkles, ArrowRight, CheckCircle } from 'lucide-react'
import { services } from '@/lib/services'

const iconMap: Record<string, React.ReactNode> = {
  home:     <Home size={28} />,
  droplets: <Droplets size={28} />,
  sparkles: <Sparkles size={28} />,
}

export function ServiceCards({ showAll = false }: { showAll?: boolean }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const displayServices = showAll ? services : services

  return (
    <section ref={ref} className="py-24 bg-brand-bg">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 border border-brand-border rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-accent" />
            <span className="font-mono text-xs text-brand-text2 uppercase tracking-widest">What We Do</span>
          </div>
          <h2 className="font-display font-extrabold uppercase text-brand-text1"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', lineHeight: '1.05', letterSpacing: '0.02em' }}>
            Our Services
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayServices.map((service, i) => {
            const isFeatured = service.slug === 'roof-cleaning'
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={isFeatured ? 'md:col-span-1' : ''}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className={`group flex flex-col h-full rounded-xl border p-6 transition-all duration-300 ${
                    isFeatured
                      ? 'bg-brand-surface border-brand-accent/40 hover:border-brand-accent shadow-lg shadow-brand-accent/5'
                      : 'bg-brand-surface border-brand-border hover:border-brand-border2'
                  }`}
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors ${
                    isFeatured
                      ? 'bg-brand-accent/15 text-brand-accent group-hover:bg-brand-accent/20'
                      : 'bg-brand-surface2 text-brand-text3 group-hover:text-brand-accent'
                  }`}>
                    {iconMap[service.icon]}
                  </div>

                  {isFeatured && (
                    <div className="mb-3">
                      <span className="font-mono text-xs text-brand-accent uppercase tracking-widest border border-brand-accent/30 rounded-full px-2.5 py-1">
                        Primary Service
                      </span>
                    </div>
                  )}

                  <h3 className={`font-display font-bold text-xl uppercase tracking-wide mb-3 ${
                    isFeatured ? 'text-brand-text1' : 'text-brand-text1'
                  }`}>
                    {service.name}
                  </h3>

                  <p className="text-brand-text2 text-sm leading-relaxed mb-5 flex-1">
                    {service.shortDesc}
                  </p>

                  {isFeatured && (
                    <ul className="space-y-2 mb-5">
                      {service.benefits.slice(0, 3).map((b, bi) => (
                        <li key={bi} className="flex items-start gap-2 text-sm text-brand-text2">
                          <CheckCircle size={14} className="text-brand-accent mt-0.5 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className={`flex items-center gap-2 text-sm font-medium uppercase tracking-wide transition-all group-hover:gap-3 ${
                    isFeatured ? 'text-brand-accent' : 'text-brand-text3 group-hover:text-brand-text1'
                  }`}>
                    Learn More
                    <ArrowRight size={14} />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
