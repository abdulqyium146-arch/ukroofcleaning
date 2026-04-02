'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'David H.',
    location: 'Chorley',
    rating: 5,
    text: 'Kevin did an absolutely brilliant job on our roof. The moss had been building up for years and the transformation was incredible. Biocide treatment applied too — highly recommend.',
  },
  {
    name: 'Sarah M.',
    location: 'Leyland',
    rating: 5,
    text: 'Contacted Kevin on Monday, he was with us by Wednesday. Professional, tidy and the roof looks like new. He also cleared the gutters while he was there. Brilliant service.',
  },
  {
    name: 'James T.',
    location: 'Morecambe',
    rating: 5,
    text: "We live near the bay so our roof moss problem was terrible. Kevin explained exactly what he'd do before starting. The soft-wash method is clearly the right approach — no damage to our old slate tiles.",
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`} role="img">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-brand-gold fill-brand-gold" aria-hidden="true" />
      ))}
    </div>
  )
}

export function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-24 bg-brand-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 border border-brand-border rounded-full px-4 py-1.5 mb-4">
            <Star size={12} className="text-brand-gold" />
            <span className="font-mono text-xs text-brand-text2 uppercase tracking-widest">Reviews</span>
          </div>
          <h2 className="font-display font-extrabold uppercase text-brand-text1"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', lineHeight: '1.05', letterSpacing: '0.02em' }}>
            What Customers Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-brand-bg border border-brand-border hover:border-brand-border2 rounded-xl p-6 transition-colors duration-200 flex flex-col"
            >
              <Stars count={t.rating} />
              <blockquote className="text-brand-text2 text-sm leading-relaxed mt-4 flex-1">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="mt-5 pt-5 border-t border-brand-border flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-surface2 flex items-center justify-center font-display font-bold text-sm text-brand-accent uppercase">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-body font-medium text-sm text-brand-text1">{t.name}</div>
                  <div className="font-mono text-xs text-brand-text3 uppercase tracking-widest">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
