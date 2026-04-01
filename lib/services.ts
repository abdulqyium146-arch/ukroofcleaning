export type Service = {
  slug: string
  name: string
  shortDesc: string
  longDesc: string
  icon: string
  metaTitle: string
  metaDescription: string
  benefits: string[]
  process: { step: string; title: string; description: string }[]
}

export const services: Service[] = [
  {
    slug: 'roof-cleaning',
    name: 'Roof Cleaning',
    shortDesc: 'Professional moss removal, algae treatment and soft-wash roof cleaning across North West England.',
    longDesc: 'We remove moss, algae, lichen and biological growth from your roof using safe, low-pressure soft-wash techniques. Our treatments include biocidal application to prevent regrowth for 3–5 years.',
    icon: 'home',
    metaTitle: 'Roof Cleaning Services | Local Roof Cleaning UK | North West England',
    metaDescription: 'Professional roof cleaning across North West England. Moss removal, algae treatment, soft-wash & biocidal protection. 12 years experience. Free quotes.',
    benefits: [
      'Extends roof tile lifespan by up to 10 years',
      'Removes moss, algae and lichen at the root',
      'Biocidal treatment prevents regrowth for 3–5 years',
      'Improves kerb appeal and property value',
      'Prevents moisture damage and tile degradation',
      'Safe for all tile types including slate and clay',
    ],
    process: [
      { step: '01', title: 'Inspect', description: 'Free on-site inspection of your roof condition, tile type and moss coverage level.' },
      { step: '02', title: 'Clear', description: 'Manual removal of heavy moss and debris before chemical treatment begins.' },
      { step: '03', title: 'Soft-Wash', description: 'Low-pressure, high-temperature cleaning removes embedded algae and staining.' },
      { step: '04', title: 'Treat', description: 'Biocidal post-treatment applied to kill remaining organisms and prevent regrowth.' },
    ],
  },
  {
    slug: 'gutter-clearing',
    name: 'Gutter Clearing',
    shortDesc: 'Blocked gutters cause damp, leaks and structural damage. We clear, flush and inspect thoroughly.',
    longDesc: 'Blocked gutters are one of the most common causes of preventable property damage. We remove all debris, flush downpipes and inspect for damage — leaving your gutters fully functional.',
    icon: 'droplets',
    metaTitle: 'Gutter Clearing Services | Local Roof Cleaning UK | North West England',
    metaDescription: 'Professional gutter clearing across North West England. Debris removal, downpipe flushing & inspection. 12 years experience. Free no-obligation quotes.',
    benefits: [
      'Prevents water ingress and damp issues',
      'Clears leaves, moss and debris completely',
      'Downpipe flushing included as standard',
      'Visual inspection for cracks or damage',
      'Reduces risk of foundation damage',
      'Available as part of combined service package',
    ],
    process: [
      { step: '01', title: 'Access', description: 'Safe ladder or pole access to all guttering around your property.' },
      { step: '02', title: 'Clear', description: 'Manual removal of all debris, moss and blockages from gutter runs.' },
      { step: '03', title: 'Flush', description: 'High-flow water flush to clear downpipes and confirm free drainage.' },
      { step: '04', title: 'Inspect', description: 'Visual check for cracks, sagging or joint failures — reported to you after the job.' },
    ],
  },
  {
    slug: 'window-cleaning',
    name: 'Window Cleaning',
    shortDesc: 'Streak-free window cleaning for homes across North West England using pure water technology.',
    longDesc: 'We use pure water fed-pole technology for streak-free window cleaning without ladders. Safe, effective and available alongside roof cleaning and gutter clearing.',
    icon: 'sparkles',
    metaTitle: 'Window Cleaning Services | Local Roof Cleaning UK | North West England',
    metaDescription: 'Professional window cleaning across North West England. Pure water, streak-free results. 12 years experience. Free quotes available.',
    benefits: [
      'Streak-free finish using pure water technology',
      'No ladders — safe access pole system',
      'Frames and sills cleaned as standard',
      'Available with roof cleaning for a combined rate',
      'Suitable for all residential property types',
      'Regular schedule available on request',
    ],
    process: [
      { step: '01', title: 'Prepare', description: 'Pure water tank set up — mineral-free water prevents streaking on all glass.' },
      { step: '02', title: 'Scrub', description: 'Soft-bristle brush agitates and loosens all dirt, bird mess and grime.' },
      { step: '03', title: 'Rinse', description: 'Pure water rinse leaves glass and frames spotless — no squeegee needed.' },
      { step: '04', title: 'Complete', description: 'Final check of all panes, frames and sills before sign-off.' },
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
