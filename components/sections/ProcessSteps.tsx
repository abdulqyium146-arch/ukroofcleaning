'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

type Step = {
  step: string
  title: string
  description: string
}

const defaultSteps: Step[] = [
  { step: '01', title: 'Inspect', description: 'Free on-site inspection of your roof condition, tile type and moss coverage level. No call-out charge, no obligation.' },
  { step: '02', title: 'Clear', description: 'Manual removal of heavy moss, lichen and debris before any chemical treatment begins — protecting your tiles throughout.' },
  { step: '03', title: 'Soft-Wash', description: 'Low-pressure, high-temperature cleaning removes embedded algae, staining and biological growth without damaging tiles.' },
  { step: '04', title: 'Treat', description: 'Biocidal post-treatment applied to kill remaining organisms and prevent regrowth for 3–5 years.' },
]

export function ProcessSteps({ steps = defaultSteps }: { steps?: Step[] }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-24 bg-brand-bg">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 border border-brand-border rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-accent" />
            <span className="font-mono text-xs text-brand-text2 uppercase tracking-widest">How It Works</span>
          </div>
          <h2 className="font-display font-extrabold uppercase text-brand-text1"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', lineHeight: '1.05', letterSpacing: '0.02em' }}>
            Our Process
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-full w-6 h-px bg-brand-border z-10" />
              )}

              <div className="bg-brand-surface border border-brand-border hover:border-brand-border2 rounded-xl p-6 transition-colors duration-200 h-full">
                <div className="font-mono text-4xl font-bold text-brand-accent/20 mb-4">
                  {step.step}
                </div>
                <h3 className="font-display font-bold text-xl uppercase text-brand-text1 mb-3">
                  {step.title}
                </h3>
                <p className="text-brand-text2 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
