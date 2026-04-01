import type { Metadata } from 'next'
import { CTABanner } from '@/components/sections/CTABanner'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { Camera } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gallery | Before & After Roof Cleaning Photos',
  description: 'Before and after photos of roof cleaning, gutter clearing and window cleaning by Local Roof Cleaning UK across North West England.',
  alternates: { canonical: 'https://localroofcleaning.uk/gallery' },
}

const placeholderJobs = [
  { title: 'Semi-detached Roof', location: 'Chorley', type: 'Roof Cleaning', before: 'Heavy moss coverage — tiles barely visible', after: 'Full moss removal + biocide treatment applied' },
  { title: 'Terraced House Gutters', location: 'Leyland', type: 'Gutter Clearing', before: 'Blocked with leaves and moss overspill', after: 'Clear, flushed, fully flowing downpipes' },
  { title: 'Detached Property Roof', location: 'Morecambe', type: 'Roof Cleaning', before: 'Black algae streaks and coastal lichen', after: 'Restored tiles, marine-grade biocide applied' },
  { title: 'Stone Cottage', location: 'Clitheroe', type: 'Roof Cleaning', before: 'Deep-rooted lichen across all tiles', after: 'Specialist soft-wash treatment for stone roof' },
  { title: 'Bay View Property', location: 'Fleetwood', type: 'Roof Cleaning', before: 'Salt-accelerated algae and moss growth', after: 'Full coastal treatment package completed' },
  { title: 'Victorian Terrace', location: 'Ormskirk', type: 'Gutter Clearing + Roof', before: 'Overflowing gutters, moss on ridge tiles', after: 'Combined service — gutters cleared, roof treated' },
]

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: 'Home', url: '/' },
        { name: 'Gallery', url: '/gallery' },
      ]} />

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center bg-brand-bg bg-grid pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 border border-brand-border rounded-full px-4 py-1.5 mb-6">
            <Camera size={12} className="text-brand-accent" />
            <span className="font-mono text-xs text-brand-text2 uppercase tracking-widest">Our Work</span>
          </div>
          <h1 className="font-display font-extrabold uppercase text-brand-text1 mb-4"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1', letterSpacing: '0.02em' }}>
            Before & After
          </h1>
          <p className="text-lg text-brand-text2 max-w-2xl leading-relaxed">
            Real jobs completed across North West England. See the transformation professional roof cleaning delivers.
          </p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-6xl mx-auto px-6">
          {/* Instagram CTA */}
          <div className="bg-brand-surface border border-brand-border rounded-xl p-6 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-display font-bold text-lg uppercase text-brand-text1 mb-1">See More on Instagram</p>
              <p className="text-brand-text2 text-sm">Regular before/after photos from jobs across North West England.</p>
            </div>
            <a
              href="https://www.instagram.com/localroofcleaninguk/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline shrink-0"
            >
              @localroofcleaninguk
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholderJobs.map((job, i) => (
              <div key={i} className="bg-brand-surface border border-brand-border rounded-xl overflow-hidden hover:border-brand-border2 transition-colors">
                {/* Image placeholder */}
                <div className="aspect-video bg-brand-surface2 flex items-center justify-center border-b border-brand-border">
                  <div className="text-center">
                    <Camera size={32} className="text-brand-text3 mx-auto mb-2" />
                    <p className="font-mono text-xs text-brand-text3 uppercase tracking-widest">Photo Coming Soon</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display font-bold text-base uppercase text-brand-text1">{job.title}</h3>
                    <span className="font-mono text-xs text-brand-accent border border-brand-accent/30 rounded-full px-2 py-0.5">
                      {job.location}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-brand-text3 uppercase tracking-widest mb-3">{job.type}</p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-xs">
                      <span className="bg-red-900/30 text-red-400 border border-red-900/40 rounded px-1.5 py-0.5 shrink-0 font-mono uppercase">Before</span>
                      <span className="text-brand-text3">{job.before}</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs">
                      <span className="bg-green-900/30 text-green-400 border border-green-900/40 rounded px-1.5 py-0.5 shrink-0 font-mono uppercase">After</span>
                      <span className="text-brand-text3">{job.after}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
