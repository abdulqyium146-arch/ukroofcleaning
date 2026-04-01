import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { StatsBar } from '@/components/sections/StatsBar'
import { ServiceCards } from '@/components/sections/ServiceCards'
import { LocationsGrid } from '@/components/sections/LocationsGrid'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTABanner } from '@/components/sections/CTABanner'
import { FAQSection } from '@/components/sections/FAQSection'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'

export const metadata: Metadata = {
  title: 'Local Roof Cleaning UK | North West England',
  description: 'Professional roof cleaning across North West England. Moss removal, algae treatment & soft-wash roof cleaning in Chorley, Leyland, Morecambe, Fleetwood and more. 12 years experience.',
  alternates: { canonical: 'https://localroofcleaning.uk' },
}

const homeFaqs = [
  {
    question: 'What areas do you cover for roof cleaning?',
    answer: 'We cover North West England including Chorley, Leyland, Clitheroe, Fleetwood, Morecambe, Congleton, Ormskirk and Carnforth — plus surrounding villages. Call us to confirm your postcode.',
  },
  {
    question: 'How much does roof cleaning cost?',
    answer: 'Most residential roof cleans range from £280–£700 depending on roof size, pitch and the degree of moss/algae growth. We provide free no-obligation quotes for every property.',
  },
  {
    question: 'Is soft-wash safe for my roof tiles?',
    answer: 'Yes — our low-pressure soft-wash method is safe for all tile types including concrete, clay, slate and natural stone. We never use high-pressure washing which can dislodge or damage tiles.',
  },
  {
    question: 'How long does roof cleaning last?',
    answer: 'With our biocidal post-treatment, most roofs remain clean for 3–5 years. The treatment kills moss and algae at the root and significantly slows regrowth.',
  },
  {
    question: 'Do you offer gutter clearing and window cleaning too?',
    answer: 'Yes — we offer a full exterior cleaning service including gutter clearing and window cleaning. Many customers combine services and save on the overall cost.',
  },
]

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema
        description="Professional roof cleaning across North West England. Moss removal, algae treatment & soft-wash roof cleaning. 12 years experience."
        url="https://localroofcleaning.uk"
        areaServed="North West England"
      />
      <Hero />
      <StatsBar />
      <ServiceCards />
      <LocationsGrid />
      <ProcessSteps />
      <Testimonials />
      <FAQSection faqs={homeFaqs} />
      <CTABanner />
    </>
  )
}
