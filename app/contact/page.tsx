'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Phone, Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  town: z.string().min(2, 'Please enter your town'),
  service: z.enum(['roof-cleaning', 'gutter-clearing', 'window-cleaning', 'multiple'], {
    message: 'Please select a service',
  }),
  message: z.string().optional(),
})

type FormData = z.infer<typeof schema>

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    try {
      // Replace with your actual form submission endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitted(true)
      reset()
    } catch {
      setError(true)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center bg-brand-bg bg-grid pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 border border-brand-border rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-accent" />
            <span className="font-mono text-xs text-brand-text2 uppercase tracking-widest">Free Quote</span>
          </div>
          <h1 className="font-display font-extrabold uppercase text-brand-text1 mb-4"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1', letterSpacing: '0.02em' }}>
            Get in Touch
          </h1>
          <p className="text-lg text-brand-text2 max-w-xl leading-relaxed">
            Call Kevin directly or fill in the form below. Free no-obligation quotes for all properties across North West England.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="font-display font-bold text-xl uppercase text-brand-text1 tracking-wide">
              Contact Details
            </h2>
            <div className="space-y-4">
              <a href="tel:REPLACE_WITH_PHONE" className="flex items-start gap-4 bg-brand-surface border border-brand-border rounded-xl p-5 hover:border-brand-border2 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-brand-accent" />
                </div>
                <div>
                  <div className="font-mono text-sm text-brand-gold group-hover:text-brand-text1 transition-colors mb-0.5">REPLACE_WITH_PHONE</div>
                  <div className="text-brand-text3 text-xs">Kevin Quinn — call any time</div>
                </div>
              </a>
              <a href="mailto:REPLACE_WITH_EMAIL" className="flex items-start gap-4 bg-brand-surface border border-brand-border rounded-xl p-5 hover:border-brand-border2 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-brand-surface2 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-brand-text2" />
                </div>
                <div>
                  <div className="text-brand-text2 text-sm group-hover:text-brand-text1 transition-colors mb-0.5">REPLACE_WITH_EMAIL</div>
                  <div className="text-brand-text3 text-xs">We aim to respond same day</div>
                </div>
              </a>
              <div className="flex items-start gap-4 bg-brand-surface border border-brand-border rounded-xl p-5">
                <div className="w-10 h-10 rounded-lg bg-brand-surface2 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-brand-text2" />
                </div>
                <div>
                  <div className="text-brand-text2 text-sm mb-0.5">North West England</div>
                  <div className="text-brand-text3 text-xs">Lancashire & Cheshire coverage</div>
                </div>
              </div>
            </div>

            <div className="bg-brand-gold/10 border border-brand-gold/30 rounded-xl p-5">
              <div className="font-mono text-xs text-brand-gold uppercase tracking-widest mb-2">Response Time</div>
              <p className="text-brand-text2 text-sm leading-relaxed">
                We typically respond to enquiries within a few hours during working hours. For urgent quotes, call directly.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-brand-surface border border-green-800/40 rounded-xl p-8 text-center">
                <CheckCircle size={40} className="text-brand-success mx-auto mb-4" />
                <h3 className="font-display font-bold text-xl uppercase text-brand-text1 mb-2">Quote Request Sent</h3>
                <p className="text-brand-text2 text-sm">
                  Thanks — Kevin will be in touch shortly. For urgent enquiries, call directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="bg-brand-surface border border-brand-border rounded-xl p-8 space-y-5">
                <h2 className="font-display font-bold text-xl uppercase text-brand-text1 tracking-wide mb-2">
                  Request a Free Quote
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body text-xs uppercase tracking-wider text-brand-text2 mb-2">
                      Your Name *
                    </label>
                    <input
                      {...register('name')}
                      className="w-full bg-brand-bg border border-brand-border focus:border-brand-accent rounded-lg px-4 py-3 text-brand-text1 text-sm outline-none transition-colors placeholder:text-brand-text3"
                      placeholder="John Smith"
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block font-body text-xs uppercase tracking-wider text-brand-text2 mb-2">
                      Phone Number *
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full bg-brand-bg border border-brand-border focus:border-brand-accent rounded-lg px-4 py-3 text-brand-text1 text-sm outline-none transition-colors placeholder:text-brand-text3"
                      placeholder="07700 000000"
                    />
                    {errors.phone && <p className="mt-1.5 text-xs text-red-400">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body text-xs uppercase tracking-wider text-brand-text2 mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      className="w-full bg-brand-bg border border-brand-border focus:border-brand-accent rounded-lg px-4 py-3 text-brand-text1 text-sm outline-none transition-colors placeholder:text-brand-text3"
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block font-body text-xs uppercase tracking-wider text-brand-text2 mb-2">
                      Your Town *
                    </label>
                    <input
                      {...register('town')}
                      className="w-full bg-brand-bg border border-brand-border focus:border-brand-accent rounded-lg px-4 py-3 text-brand-text1 text-sm outline-none transition-colors placeholder:text-brand-text3"
                      placeholder="Chorley"
                    />
                    {errors.town && <p className="mt-1.5 text-xs text-red-400">{errors.town.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block font-body text-xs uppercase tracking-wider text-brand-text2 mb-2">
                    Service Required *
                  </label>
                  <select
                    {...register('service')}
                    className="w-full bg-brand-bg border border-brand-border focus:border-brand-accent rounded-lg px-4 py-3 text-brand-text1 text-sm outline-none transition-colors"
                  >
                    <option value="">Select a service...</option>
                    <option value="roof-cleaning">Roof Cleaning</option>
                    <option value="gutter-clearing">Gutter Clearing</option>
                    <option value="window-cleaning">Window Cleaning</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                  {errors.service && <p className="mt-1.5 text-xs text-red-400">{errors.service.message}</p>}
                </div>

                <div>
                  <label className="block font-body text-xs uppercase tracking-wider text-brand-text2 mb-2">
                    Additional Details (optional)
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className="w-full bg-brand-bg border border-brand-border focus:border-brand-accent rounded-lg px-4 py-3 text-brand-text1 text-sm outline-none transition-colors placeholder:text-brand-text3 resize-none"
                    placeholder="Tell us about your roof, approximate size, any access concerns..."
                  />
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle size={16} />
                    Something went wrong. Please call us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-accent hover:bg-brand-accentDim disabled:opacity-60 text-white font-body font-medium text-sm uppercase tracking-wide py-4 rounded-lg transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Send Quote Request'}
                </button>

                <p className="text-brand-text3 text-xs text-center">
                  No obligation. We&apos;ll get back to you promptly.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
