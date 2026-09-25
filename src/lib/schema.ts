import { site } from './site'

export type Faq = { question: string; answer: string }

/** Organization + LocalBusiness, tal y como estaban en la home original. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${site.url}/`,
        name: site.legalName,
        url: site.url,
        logo: {
          '@type': 'ImageObject',
          url: site.ogImage,
          width: 600,
          height: 60,
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: site.phone,
          contactType: 'customer service',
          email: site.email,
          areaServed: 'ES',
          availableLanguage: 'Spanish',
        },
      },
      {
        '@type': 'LocalBusiness',
        parentOrganization: { '@id': `${site.url}/` },
        name: site.legalName,
        image: site.ogImage,
        '@id': `${site.url}/#localbusiness`,
        url: site.url,
        telephone: site.phone,
        email: site.email,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: site.address.street,
          addressLocality: site.address.locality,
          postalCode: site.address.postalCode,
          addressRegion: site.address.region,
          addressCountry: site.address.country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: site.geo.latitude,
          longitude: site.geo.longitude,
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '20:00',
        },
        areaServed: { '@type': 'City', name: site.address.locality },
        sameAs: [],
      },
    ],
  }
}

export function faqSchema(faqs: readonly Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}
