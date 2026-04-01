'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'

const trustPoints = [
  '12 Years Experience',
  'Free No-Obligation Quotes',
  'Soft-Wash Safe Method',
  '5★ Rated Service',
  'North West Coverage',
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden:   { opacity: 0, y: 28 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-brand-bg bg-grid noise-overlay overflow-hidden pt-16">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-gold" />
              <span className="font-mono text-xs text-brand-gold uppercase tracking-widest">
                12 Years · North West England
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVariants} className="mb-4">
            <h1 className="font-display font-extrabold uppercase leading-none tracking-wide"
                style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', lineHeight: '0.95' }}>
              <span className="block text-brand-text1">North West&apos;s</span>
              <span className="block">
                <span className="text-brand-text1">Roof </span>
                <span className="text-brand-accent">Cleaning</span>
              </span>
              <span className="block text-brand-text1">Specialists</span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-brand-text2 max-w-xl mb-10 leading-relaxed"
          >
            Professional moss removal, algae treatment and soft-wash roof cleaning across Lancashire
            and Cheshire. Kevin Quinn — only 1 phone call away.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-14">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accentDim text-white font-body font-medium text-sm uppercase tracking-wide px-7 py-4 rounded-lg transition-all duration-200 min-h-[52px] shadow-lg shadow-brand-accent/20"
            >
              Get a Free Quote
              <ArrowRight size={16} />
            </Link>
            <a
              href="tel:REPLACE_WITH_PHONE"
              className="inline-flex items-center gap-2 border border-brand-border hover:border-brand-border2 text-brand-text1 font-body font-medium text-sm uppercase tracking-wide px-7 py-4 rounded-lg transition-all duration-200 min-h-[52px]"
            >
              <Phone size={16} className="text-brand-gold" />
              Call Kevin Quinn
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-x-6 gap-y-3">
            {trustPoints.map((point, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle size={14} className="text-brand-accent shrink-0" />
                <span className="font-body text-sm text-brand-text3">{point}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-bg to-transparent pointer-events-none" />
    </section>
  )
}
