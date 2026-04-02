const BASE_URL = 'https://localroofcleaning.uk'

type Props = {
  name?: string
  description: string
  url: string
  areaServed?: string
  serviceType?: string
  addressLocality?: string
  addressRegion?: string
  postalCode?: string
}

export function LocalBusinessSchema({
  name = 'Local Roof Cleaning UK',
  description,
  url,
  areaServed = 'North West England',
  serviceType = 'Roof Cleaning',
  addressLocality = 'Chorley',
  addressRegion = 'Lancashire',
  postalCode = 'PR7',
}: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${BASE_URL}/#business`,
    name,
    description,
    url,
    telephone: '+44 7845 463877',
    founder: {
      '@type': 'Person',
      name: 'Kevin Quinn',
      jobTitle: 'Owner & Roof Cleaning Specialist',
    },
    foundingDate: '2013',
    address: {
      '@type': 'PostalAddress',
      addressLocality,
      addressRegion,
      postalCode,
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.6547,
      longitude: -2.6323,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:30',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '16:00',
      },
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 53.6547,
        longitude: -2.6323,
      },
      geoRadius: '80000',
    },
    areaServed: [
      { '@type': 'City', name: 'Chorley' },
      { '@type': 'City', name: 'Leyland' },
      { '@type': 'City', name: 'Clitheroe' },
      { '@type': 'City', name: 'Fleetwood' },
      { '@type': 'City', name: 'Morecambe' },
      { '@type': 'City', name: 'Congleton' },
      { '@type': 'City', name: 'Ormskirk' },
      { '@type': 'City', name: 'Carnforth' },
      { '@type': 'AdministrativeArea', name: 'Lancashire' },
      { '@type': 'AdministrativeArea', name: 'Cheshire' },
      { '@type': 'AdministrativeArea', name: 'North West England' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Exterior Cleaning Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Roof Cleaning',
            description: 'Professional soft-wash roof cleaning, moss and algae removal, and biocidal treatment.',
            url: `${BASE_URL}/services/roof-cleaning`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Gutter Clearing',
            description: 'Full gutter clearing, debris removal and downpipe flushing service.',
            url: `${BASE_URL}/services/gutter-clearing`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Window Cleaning',
            description: 'Pure water window cleaning for streak-free results on all property types.',
            url: `${BASE_URL}/services/window-cleaning`,
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '47',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'David M.' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'Kevin did a fantastic job on our roof in Chorley. Looked like a completely different house afterwards. Very professional, fair price. Highly recommended.',
        datePublished: '2024-09-15',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Susan T.' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'Used Local Roof Cleaning UK for our Leyland property. Turned up on time, explained everything clearly, and the result was excellent.',
        datePublished: '2024-08-03',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'James R.' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: "Booked Kevin for roof and gutter clearing at our Morecambe property. The biocide treatment means the moss hasn't come back in over a year.",
        datePublished: '2024-07-22',
      },
    ],
    priceRange: '££',
    currenciesAccepted: 'GBP',
    paymentAccepted: 'Cash, Bank Transfer',
    sameAs: ['https://www.instagram.com/localroofcleaninguk/'],
    knowsAbout: [
      'Roof Cleaning',
      'Moss Removal',
      'Algae Treatment',
      'Soft Wash Cleaning',
      'Biocidal Treatment',
      'Gutter Clearing',
      'Window Cleaning',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
