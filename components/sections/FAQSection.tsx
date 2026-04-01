'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

type FAQ = { question: string; answer: string }

type Props = {
  faqs: FAQ[]
  location?: string
}

export function FAQSection({ faqs, location }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-24 bg-brand-bg">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 border border-brand-border rounded-full px-4 py-1.5 mb-4">
            <HelpCircle size={12} className="text-brand-accent" />
            <span className="font-mono text-xs text-brand-text2 uppercase tracking-widest">FAQ</span>
          </div>
          <h2 className="font-display font-extrabold uppercase text-brand-text1"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', lineHeight: '1.05', letterSpacing: '0.02em' }}>
            {location ? `Common Questions — ${location}` : 'Common Questions'}
          </h2>
        </motion.div>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="border-b border-brand-border"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-4 group"
              >
                <span className={cn(
                  'font-body font-medium text-base transition-colors',
                  openIndex === i ? 'text-brand-text1' : 'text-brand-text2 group-hover:text-brand-text1',
                )}>
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={cn(
                    'shrink-0 text-brand-text3 transition-transform duration-300',
                    openIndex === i && 'rotate-180 text-brand-accent',
                  )}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-brand-text2 text-sm leading-relaxed pr-8">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
