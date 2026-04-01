'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

type Stat = {
  value: number
  suffix: string
  label: string
}

const stats: Stat[] = [
  { value: 12, suffix: '+', label: 'YRS Experience' },
  { value: 500, suffix: '+', label: 'Roofs Cleaned' },
  { value: 8, suffix: '', label: 'Towns Covered' },
  { value: 5, suffix: '★', label: 'Rated Service' },
]

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = Math.ceil(value / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span ref={ref} className="font-mono text-5xl md:text-6xl text-brand-gold tabular-nums">
      {count}{suffix}
    </span>
  )
}

export function StatsBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="bg-brand-surface border-y border-brand-border py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-brand-border">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left lg:px-10 first:lg:pl-0 last:lg:pr-0 gap-2"
            >
              <CountUp value={stat.value} suffix={stat.suffix} />
              <span className="font-display uppercase text-sm tracking-widest text-brand-text3">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
