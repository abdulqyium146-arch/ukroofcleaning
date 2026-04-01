import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { locations } from '@/lib/locations'

type Props = {
  areas: string[]
  currentTown: string
}

export function NearbyAreas({ areas, currentTown }: Props) {
  return (
    <section className="py-16 bg-brand-surface border-y border-brand-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <MapPin size={16} className="text-brand-accent" />
          <h3 className="font-display font-bold uppercase text-lg text-brand-text1 tracking-wide">
            Also Serving Near {currentTown}
          </h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {areas.map((area) => {
            const locationMatch = locations.find(
              (l) => l.name.toLowerCase() === area.toLowerCase(),
            )
            return locationMatch ? (
              <Link
                key={area}
                href={`/locations/${locationMatch.slug}`}
                className="inline-flex items-center gap-1.5 bg-brand-bg border border-brand-border hover:border-brand-accent/50 hover:text-brand-accent text-brand-text2 font-body text-sm px-4 py-2 rounded-lg transition-all duration-200"
              >
                <MapPin size={12} />
                {area}
              </Link>
            ) : (
              <span
                key={area}
                className="inline-flex items-center gap-1.5 bg-brand-bg border border-brand-border text-brand-text3 font-body text-sm px-4 py-2 rounded-lg"
              >
                <MapPin size={12} />
                {area}
              </span>
            )
          })}
        </div>
      </div>
    </section>
  )
}
