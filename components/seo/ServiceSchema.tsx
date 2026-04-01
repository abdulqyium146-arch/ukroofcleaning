const BASE_URL = 'https://localroofcleaning.uk'

type Props = {
  name: string
  description: string
  url: string
  serviceType: string
  areaServed?: string
}

export function ServiceSchema({
  name,
  description,
  url,
  serviceType,
  areaServed = 'North West England',
}: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    serviceType,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${BASE_URL}/#business`,
      name: 'Local Roof Cleaning UK',
      url: BASE_URL,
      telephone: 'REPLACE_WITH_PHONE',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: areaServed,
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'GBP',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'GBP',
        description: 'Free no-obligation quote provided for all properties',
      },
      availability: 'https://schema.org/InStock',
      url,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${name} — Free Quotes`,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
