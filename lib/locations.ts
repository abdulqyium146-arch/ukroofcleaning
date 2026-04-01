export type Location = {
  slug: string
  name: string
  county: string
  region: string
  population: string
  competition: 'low' | 'very-low'
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string
  whySection: string
  nearbyAreas: string[]
  primaryKeyword: string
  keywords: string[]
  faqs: { question: string; answer: string }[]
}

export const locations: Location[] = [
  {
    slug: 'chorley',
    name: 'Chorley',
    county: 'Lancashire',
    region: 'North West England',
    population: '35,000',
    competition: 'low',
    metaTitle: 'Roof Cleaning Chorley | Local Roof Cleaning UK',
    metaDescription: 'Professional roof cleaning in Chorley, Lancashire. Moss removal, algae treatment & soft-wash roof cleaning. 12 years experience. Free no-obligation quotes — call today.',
    h1: 'Roof Cleaning in Chorley',
    intro: 'Looking for professional roof cleaning in Chorley? Local Roof Cleaning UK has been serving homeowners across Chorley and the surrounding Lancashire area for over 12 years. Whether your roof is covered in moss, algae, or years of grime — we provide safe, thorough cleaning that protects your property and restores its kerb appeal.',
    whySection: "Chorley's wet Lancashire climate creates ideal conditions for moss, algae and lichen to take hold on roof tiles. Left untreated, this growth retains moisture, accelerates tile degradation and can lead to costly roof repairs. Professional roof cleaning removes these organisms at the root and applies biocidal treatment to prevent regrowth — protecting your home for years to come.",
    nearbyAreas: ['Leyland', 'Preston', 'Wigan', 'Adlington', 'Horwich', 'Euxton'],
    primaryKeyword: 'roof cleaning Chorley',
    keywords: ['roof cleaning Chorley', 'moss removal Chorley', 'roof cleaning Chorley Lancashire', 'local roof cleaner Chorley', 'roof treatment Chorley', 'soft wash roof Chorley'],
    faqs: [
      { question: 'How much does roof cleaning cost in Chorley?', answer: 'Roof cleaning in Chorley typically costs between £300–£700 for a standard semi-detached property, depending on roof size, pitch and the degree of moss or algae growth. We provide free no-obligation quotes for all Chorley homeowners.' },
      { question: 'How long does roof cleaning take in Chorley?', answer: 'Most residential roof cleaning jobs in Chorley are completed within a single day. Larger or heavily-affected roofs may require a follow-up visit for biocide treatment.' },
      { question: 'Will roof cleaning damage my tiles?', answer: 'No. We use soft-wash techniques with low-pressure, high-temperature cleaning — safe for all tile types including concrete, clay and slate. We never use high-pressure washing which can crack or dislodge tiles.' },
      { question: 'Do you offer gutter clearing in Chorley too?', answer: 'Yes — we offer gutter clearing and window cleaning across Chorley as part of our full exterior cleaning service. Many customers combine services for a discounted rate.' },
    ],
  },
  {
    slug: 'leyland',
    name: 'Leyland',
    county: 'Lancashire',
    region: 'South Ribble, North West England',
    population: '38,000',
    competition: 'low',
    metaTitle: 'Roof Cleaning Leyland | Local Roof Cleaning UK',
    metaDescription: 'Expert roof cleaning in Leyland, Lancashire. Moss & algae removal, soft wash roof treatment. 12 years experience. Free no-obligation quote — call Kevin Quinn today.',
    h1: 'Roof Cleaning in Leyland',
    intro: 'Local Roof Cleaning UK provides trusted roof cleaning services across Leyland and the South Ribble area. With 12 years of experience treating Lancashire roofs, we understand the specific moss and algae challenges that North West weather creates for homeowners in Leyland.',
    whySection: "Leyland's South Ribble location and persistent Lancashire rainfall means roofs here are particularly susceptible to moss growth. Many Leyland properties — especially older semi-detached and terraced homes — develop significant roof moss within 3–5 years. Professional treatment removes the growth safely and extends tile life by up to 10 years.",
    nearbyAreas: ['Chorley', 'Preston', 'Bamber Bridge', 'Farington', 'Penwortham', 'Clayton-le-Woods'],
    primaryKeyword: 'roof cleaning Leyland',
    keywords: ['roof cleaning Leyland', 'moss removal Leyland', 'soft wash roof Leyland', 'roof cleaner Leyland Lancashire', 'roof algae removal Leyland', 'roof cleaning South Ribble'],
    faqs: [
      { question: 'How much does roof cleaning cost in Leyland?', answer: 'Roof cleaning prices in Leyland range from £280–£650 for most residential properties. We offer free on-site quotes with no obligation to book.' },
      { question: 'Is soft-wash roof cleaning safe for older Leyland properties?', answer: "Yes — soft-wash is the safest cleaning method for all tile types, including older clay and slate tiles common in Leyland's Victorian and Edwardian properties." },
      { question: 'How often should I get my roof cleaned in Leyland?', answer: 'Most Leyland homeowners benefit from professional roof cleaning every 3–5 years, depending on tree coverage, roof pitch and local environmental conditions.' },
      { question: 'Do you cover the whole of Leyland and South Ribble?', answer: 'Yes — we cover all of Leyland including Farington, Worden, and surrounding South Ribble villages. Call us to confirm coverage for your specific postcode.' },
    ],
  },
  {
    slug: 'clitheroe',
    name: 'Clitheroe',
    county: 'Lancashire',
    region: 'Ribble Valley, North West England',
    population: '15,000',
    competition: 'very-low',
    metaTitle: 'Roof Cleaning Clitheroe | Local Roof Cleaning UK',
    metaDescription: 'Roof cleaning in Clitheroe & the Ribble Valley. Specialist moss & lichen removal for stone properties. 12 years experience. Free quotes — call today.',
    h1: 'Roof Cleaning in Clitheroe',
    intro: "Clitheroe's rural Ribble Valley location means roofs here face heavy moss, lichen and algae growth — especially on older stone and slate properties. Local Roof Cleaning UK offers specialist roof cleaning in Clitheroe, tailored to the unique challenges of Lancashire countryside homes.",
    whySection: "Rural Clitheroe properties experience some of the heaviest biological growth in Lancashire. The Ribble Valley's high rainfall, rural tree coverage, and prevalence of traditional stone construction creates ideal conditions for lichen and moss to establish deeply. Our soft-wash treatments are specifically calibrated for rural Lancashire roofs — gentle enough for stone, effective enough to eliminate root-embedded lichen.",
    nearbyAreas: ['Ribchester', 'Longridge', 'Whalley', 'Sabden', 'Chatburn', 'Barrow'],
    primaryKeyword: 'roof cleaning Clitheroe',
    keywords: ['roof cleaning Clitheroe', 'moss removal Clitheroe', 'roof cleaner Ribble Valley', 'roof treatment Clitheroe', 'lichen removal Clitheroe', 'roof cleaning Clitheroe Lancashire'],
    faqs: [
      { question: 'Can you clean stone roofs in the Clitheroe area?', answer: 'Yes — we specialise in soft-wash cleaning of stone, slate and clay tile roofs common throughout the Ribble Valley. Our low-pressure method cleans without damaging historic or traditional materials.' },
      { question: 'How bad is lichen on Clitheroe roofs?', answer: 'Lichen is particularly aggressive in the Ribble Valley due to rural air quality and high rainfall. Unlike moss, lichen bonds directly to tile surfaces and requires specialist biocide treatment — not just pressure washing.' },
      { question: 'Do you travel to Clitheroe from the wider North West?', answer: 'Yes — Clitheroe is within our standard service area. We cover all of the Ribble Valley including surrounding villages at no additional travel charge.' },
      { question: 'How long does biocide treatment last in Clitheroe?', answer: 'In rural Lancashire conditions, our biocide treatment typically remains effective for 3–5 years, significantly reducing moss and lichen regrowth during that period.' },
    ],
  },
  {
    slug: 'fleetwood',
    name: 'Fleetwood',
    county: 'Lancashire',
    region: 'Fylde Coast, North West England',
    population: '26,000',
    competition: 'very-low',
    metaTitle: 'Roof Cleaning Fleetwood | Local Roof Cleaning UK',
    metaDescription: 'Roof cleaning in Fleetwood, Lancashire. Salt air & coastal weather causes rapid algae growth — we specialise in Fylde Coast roof treatment. Free quotes today.',
    h1: 'Roof Cleaning in Fleetwood',
    intro: "Fleetwood's coastal position exposes roofs to salt air, heavy rainfall and accelerated algae growth. Local Roof Cleaning UK provides specialist roof cleaning across Fleetwood and the Fylde Coast, with treatments designed to withstand North West coastal conditions.",
    whySection: "Fleetwood's seafront location creates a uniquely aggressive environment for roofs. Salt-laden coastal air accelerates the growth of black algae and green lichen, while high winds deposit organic debris that moss feeds on. Standard cleaning methods used inland often fail within months in coastal conditions — our Fleetwood treatments use marine-grade biocides that outperform standard products in salt-air environments.",
    nearbyAreas: ['Cleveleys', 'Thornton', 'Poulton-le-Fylde', 'Blackpool', 'Preesall', 'Knott End'],
    primaryKeyword: 'roof cleaning Fleetwood',
    keywords: ['roof cleaning Fleetwood', 'moss removal Fleetwood', 'roof cleaner Fylde Coast', 'roof algae Fleetwood', 'coastal roof cleaning Lancashire', 'roof cleaning near Fleetwood'],
    faqs: [
      { question: 'Does coastal salt air make roof cleaning harder in Fleetwood?', answer: 'Yes — salt air accelerates algae and lichen growth significantly. Fleetwood roofs typically need cleaning more frequently than inland properties, and benefit from marine-grade biocide treatments.' },
      { question: 'How much does roof cleaning cost in Fleetwood?', answer: 'Roof cleaning in Fleetwood costs between £300–£700 for most residential properties. Coastal properties may require additional treatment — we assess this during our free quote visit.' },
      { question: 'Can you clean flat roofs in Fleetwood?', answer: 'We specialise in pitched tile and slate roofs. For flat roof cleaning or repairs, we can recommend trusted local specialists.' },
      { question: 'How quickly does moss return on Fleetwood roofs?', answer: 'Without biocide treatment, moss can return to Fleetwood roofs within 12–18 months due to coastal conditions. With our treatment, regrowth is significantly suppressed for 3–4 years.' },
    ],
  },
  {
    slug: 'morecambe',
    name: 'Morecambe',
    county: 'Lancashire',
    region: 'North Lancashire, North West England',
    population: '34,000',
    competition: 'low',
    metaTitle: 'Roof Cleaning Morecambe | Local Roof Cleaning UK',
    metaDescription: 'Professional roof cleaning in Morecambe, Lancashire. Coastal algae & moss removal specialists. 12 years experience. Call for a free no-obligation quote today.',
    h1: 'Roof Cleaning in Morecambe',
    intro: "Morecambe Bay's damp, coastal climate makes roof moss and algae growth one of the biggest maintenance challenges for local homeowners. Local Roof Cleaning UK delivers professional roof cleaning across Morecambe, combining 12 years of experience with treatments proven to work in North Lancashire's wet conditions.",
    whySection: "Morecambe's bay-side position means homes here face year-round dampness, onshore winds and the unique micro-climate of the Morecambe Bay coastline. This creates some of the fastest moss growth rates in Lancashire. Many Morecambe homeowners are surprised at how quickly their cleaned roof can re-green without a proper biocide treatment — our process eliminates this cycle.",
    nearbyAreas: ['Lancaster', 'Heysham', 'Bolton-le-Sands', 'Hest Bank', 'Carnforth', 'Bare'],
    primaryKeyword: 'roof cleaning Morecambe',
    keywords: ['roof cleaning Morecambe', 'moss removal Morecambe', 'roof cleaning Lancaster area', 'roof treatment Morecambe', 'local roof cleaner Morecambe', 'algae removal Morecambe'],
    faqs: [
      { question: 'Is roof cleaning in Morecambe worth it?', answer: "Absolutely. Morecambe's coastal climate means untreated moss and algae can shorten roof tile life by 5–15 years. Professional cleaning and treatment is significantly cheaper than premature roof replacement." },
      { question: 'Do you cover Heysham and surrounding villages?', answer: 'Yes — we cover Morecambe, Heysham, Bare, Bolton-le-Sands and all surrounding North Lancashire villages.' },
      { question: 'How much is roof cleaning in Morecambe?', answer: 'Pricing in Morecambe ranges from £280–£650 for most residential roofs, depending on size and condition. We provide free no-obligation quotes.' },
      { question: 'Can you combine roof cleaning and gutter clearing in Morecambe?', answer: 'Yes — this is our most popular combination service in Morecambe. We offer reduced rates when booking multiple services together.' },
    ],
  },
  {
    slug: 'congleton',
    name: 'Congleton',
    county: 'Cheshire East',
    region: 'North West England',
    population: '26,000',
    competition: 'very-low',
    metaTitle: 'Roof Cleaning Congleton | Local Roof Cleaning UK',
    metaDescription: 'Roof cleaning in Congleton, Cheshire East. Moss & algae removal, soft wash treatment. 12 years experience. Free no-obligation quotes — call today.',
    h1: 'Roof Cleaning in Congleton',
    intro: "Local Roof Cleaning UK serves homeowners across Congleton and Cheshire East with thorough, professional roof cleaning. From Victorian terraces to modern new-builds, we provide moss removal, soft-wash treatment and gutter clearing tailored to every property type in the Congleton area.",
    whySection: "Congleton sits at the foot of the Pennines, giving it high annual rainfall and frequent low cloud — conditions that accelerate moss and algae growth on rooftops. The town's mix of Victorian brick terraces and modern estate housing means we encounter a wide variety of tile types, and our team is experienced in treating them all correctly.",
    nearbyAreas: ['Macclesfield', 'Sandbach', 'Crewe', 'Alsager', 'Middlewich', 'Holmes Chapel'],
    primaryKeyword: 'roof cleaning Congleton',
    keywords: ['roof cleaning Congleton', 'moss removal Congleton', 'roof cleaning Cheshire East', 'roof treatment Congleton', 'soft wash roof Congleton', 'local roof cleaner Congleton'],
    faqs: [
      { question: 'How much does roof cleaning cost in Congleton?', answer: 'Roof cleaning in Congleton costs between £300–£700 for most residential properties. Exact pricing depends on roof size, pitch and moss levels — contact us for a free quote.' },
      { question: 'Do you cover surrounding Cheshire East villages?', answer: 'Yes — we cover Congleton and surrounding Cheshire East areas including Alsager, Holmes Chapel, Middlewich and Sandbach.' },
      { question: 'What type of roofs do you clean in Congleton?', answer: 'We clean all roof types in Congleton including concrete tiles, clay tiles, slate and flat roofing. Each material receives a tailored soft-wash treatment.' },
      { question: 'How long does roof cleaning last in Congleton?', answer: 'With our biocide post-treatment, most Congleton roofs remain clean for 3–5 years before requiring another clean.' },
    ],
  },
  {
    slug: 'ormskirk',
    name: 'Ormskirk',
    county: 'West Lancashire',
    region: 'North West England',
    population: '24,000',
    competition: 'low',
    metaTitle: 'Roof Cleaning Ormskirk | Local Roof Cleaning UK',
    metaDescription: 'Roof cleaning in Ormskirk, West Lancashire. Moss removal & algae treatment specialists. 12 years experience. Get your free no-obligation quote today.',
    h1: 'Roof Cleaning in Ormskirk',
    intro: "Serving Ormskirk and the wider West Lancashire area, Local Roof Cleaning UK provides reliable, professional roof cleaning for residential properties. Our team understands that West Lancashire's flat, damp landscape creates ideal conditions for moss and algae — and we have the specialist treatments to fix it.",
    whySection: "Ormskirk's low-lying West Lancashire position creates persistent dampness that fuels moss growth across the town's housing stock. Many Ormskirk properties — particularly older red-brick semis and terraced homes — develop significant biological growth within just a few years of the last clean. Our team works across the whole Ormskirk postcode area.",
    nearbyAreas: ['Skelmersdale', 'Burscough', 'Aughton', 'Maghull', 'Southport', 'Bickerstaffe'],
    primaryKeyword: 'roof cleaning Ormskirk',
    keywords: ['roof cleaning Ormskirk', 'moss removal Ormskirk', 'roof cleaning West Lancashire', 'roof cleaner Ormskirk', 'roof algae removal Ormskirk', 'gutter cleaning Ormskirk'],
    faqs: [
      { question: 'How much does roof cleaning cost in Ormskirk?', answer: 'Typical roof cleaning costs in Ormskirk range from £280–£600 depending on property size and roof condition. We provide free no-obligation site quotes.' },
      { question: 'Do you cover Aughton, Burscough and surrounding villages?', answer: 'Yes — we cover all of the Ormskirk area including Aughton, Burscough, Bickerstaffe and surrounding West Lancashire villages.' },
      { question: 'Why is my Ormskirk roof growing moss so fast?', answer: "West Lancashire's flat terrain and damp climate means reduced airflow and persistently wet roof surfaces — perfect moss growing conditions. Professional cleaning and biocide treatment breaks this cycle." },
      { question: 'Can you clean my gutters at the same time in Ormskirk?', answer: 'Yes — gutter clearing is available alongside roof cleaning across Ormskirk. Many customers combine both services for convenience and a better rate.' },
    ],
  },
  {
    slug: 'carnforth',
    name: 'Carnforth',
    county: 'Lancashire',
    region: 'North Lancashire, North West England',
    population: '5,000',
    competition: 'very-low',
    metaTitle: 'Roof Cleaning Carnforth | Local Roof Cleaning UK',
    metaDescription: 'Roof cleaning in Carnforth, North Lancashire. Specialist moss removal for rural properties. 12 years experience. Free no-obligation quotes — call today.',
    h1: 'Roof Cleaning in Carnforth',
    intro: 'Carnforth and the surrounding North Lancashire villages present some of the most challenging conditions for roof maintenance — heavy rainfall, rural damp and older stone properties all accelerate moss and lichen growth. Local Roof Cleaning UK brings 12 years of specialist experience to homeowners across Carnforth and the Bay area.',
    whySection: "Carnforth's position between Morecambe Bay and the Lake District fells exposes it to exceptionally high rainfall and persistent dampness. The area's older stone and slate buildings are particularly vulnerable to lichen — a more invasive organism than moss that bonds directly to roofing material. Our rural Lancashire treatment approach is specifically designed for these conditions.",
    nearbyAreas: ['Morecambe', 'Lancaster', 'Silverdale', 'Burton-in-Kendal', 'Milnthorpe', 'Warton'],
    primaryKeyword: 'roof cleaning Carnforth',
    keywords: ['roof cleaning Carnforth', 'moss removal Carnforth', 'roof cleaner North Lancashire', 'roof treatment Carnforth', 'lichen removal Carnforth', 'roof cleaning near Carnforth'],
    faqs: [
      { question: 'Do you travel to Carnforth for roof cleaning?', answer: 'Yes — Carnforth is within our standard service area. There are no additional travel charges for Carnforth or surrounding North Lancashire villages.' },
      { question: 'Can you clean slate roofs in the Carnforth area?', answer: 'Yes — we regularly clean traditional slate roofs throughout North Lancashire. Slate requires a particularly gentle soft-wash approach which our team is trained to deliver.' },
      { question: 'How bad is lichen in the Carnforth area?', answer: 'Lichen is widespread on older Carnforth properties due to the rural, high-rainfall environment. It requires specialist biocide treatment — our team carries the correct products for North Lancashire conditions.' },
      { question: 'Is roof cleaning available in Silverdale and Warton?', answer: 'Yes — we cover the full North Lancashire area including Silverdale, Warton, Bolton-le-Sands and other surrounding villages.' },
    ],
  },
]

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug)
}

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }))
}
