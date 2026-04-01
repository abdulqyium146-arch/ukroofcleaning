type Props = {
  name?: string
  description: string
  url: string
  areaServed: string
  serviceType?: string
}

export function LocalBusinessSchema({
  name = 'Local Roof Cleaning UK',
  description,
  url,
  areaServed,
  serviceType = 'Roof Cleaning',
}: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    description,
    url,
    telephone: 'REPLACE_WITH_PHONE',
    email: 'REPLACE_WITH_EMAIL',
    founder: { '@type': 'Person', name: 'Kevin Quinn' },
    foundingDate: '2013',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: areaServed,
    },
    serviceType,
    priceRange: '££',
    currenciesAccepted: 'GBP',
    paymentAccepted: 'Cash, Bank Transfer',
    sameAs: ['https://www.instagram.com/localroofcleaninguk/'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Exterior Cleaning Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roof Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gutter Clearing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Window Cleaning' } },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
