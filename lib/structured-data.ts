import { Product } from './products'

/**
 * Generate Organization structured data for AI and search engines
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Adriftwood Co.',
    description: 'Timeless, sustainable design in balance with nature. Handcrafted furniture and home goods from Victoria, BC.',
    url: 'https://adriftwoodco.com',
    logo: 'https://adriftwoodco.com/logo.svg',
    image: 'https://adriftwoodco.com/og-image.jpg',
    email: 'hello@adriftwoodco.com',
    telephone: '+1-250-555-1234',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Victoria',
      addressRegion: 'BC',
      addressCountry: 'CA',
    },
    sameAs: [
      'https://instagram.com/adriftwoodco',
      'https://facebook.com/adriftwoodco',
      'https://linkedin.com/company/adriftwoodco',
    ],
    founder: {
      '@type': 'Person',
      name: 'Adriftwood Founders',
    },
    foundingDate: '2018',
    areaServed: {
      '@type': 'Country',
      name: 'Canada',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '16:00',
      },
    ],
  }
}

/**
 * Generate Product structured data for AI and search engines
 */
export function getProductSchema(product: Product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images.map((img) => `https://adriftwoodco.com${img}`),
    sku: product.id,
    brand: {
      '@type': 'Brand',
      name: 'Adriftwood Co.',
    },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'CAD',
      availability: product.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      url: `https://adriftwoodco.com/store/${product.slug}`,
      seller: {
        '@type': 'Organization',
        name: 'Adriftwood Co.',
      },
    },
    material: product.materials.join(', '),
    ...(product.dimensions && {
      width: {
        '@type': 'QuantitativeValue',
        value: product.dimensions.width,
        unitCode: product.dimensions.unit === 'cm' ? 'CMT' : 'INH',
      },
      depth: {
        '@type': 'QuantitativeValue',
        value: product.dimensions.depth,
        unitCode: product.dimensions.unit === 'cm' ? 'CMT' : 'INH',
      },
      height: {
        '@type': 'QuantitativeValue',
        value: product.dimensions.height,
        unitCode: product.dimensions.unit === 'cm' ? 'CMT' : 'INH',
      },
    }),
    category: product.category,
    additionalType: 'https://schema.org/Furniture',
  }
}

/**
 * Generate BreadcrumbList structured data for navigation context
 */
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://adriftwoodco.com${item.url}`,
    })),
  }
}

/**
 * Generate WebSite structured data for site search
 */
export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Adriftwood Co.',
    description: 'Timeless, sustainable design in balance with nature. Handcrafted furniture and home goods from Victoria, BC.',
    url: 'https://adriftwoodco.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://adriftwoodco.com/store?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

/**
 * Generate FAQPage structured data for AI assistants
 */
export function getFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where is Adriftwood Co. located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Adriftwood Co. is located in Victoria, British Columbia, Canada. Our workshop is where we handcraft all our sustainable furniture pieces.',
        },
      },
      {
        '@type': 'Question',
        name: 'What materials do you use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We use sustainably harvested hardwoods including white oak, bigleaf maple, black walnut, and ash. All materials are sourced responsibly from the Pacific Northwest region.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you ship across Canada?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We offer free shipping across Canada on all orders. International shipping is available upon request with additional fees.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does custom furniture take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Production times vary by product, typically 6-10 weeks. Each piece is handcrafted to order, ensuring the highest quality craftsmanship.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is your return policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer a 30-day return policy for stock items in original condition. Custom orders are non-refundable. Damaged items must be reported within 7 days of delivery.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are your products sustainable?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, sustainability is core to our practice. We use only sustainably harvested wood, natural finishes, and time-tested joinery techniques. Each piece is designed to last generations, reducing waste.',
        },
      },
    ],
  }
}

/**
 * Generate LocalBusiness structured data
 */
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://adriftwoodco.com',
    name: 'Adriftwood Co.',
    description: 'Handcrafted sustainable furniture and home goods',
    image: 'https://adriftwoodco.com/og-image.jpg',
    telephone: '+1-250-555-1234',
    email: 'hello@adriftwoodco.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Victoria',
      addressRegion: 'BC',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.4284,
      longitude: -123.3656,
    },
    url: 'https://adriftwoodco.com',
    priceRange: '$$-$$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '16:00',
      },
    ],
    sameAs: [
      'https://instagram.com/adriftwoodco',
      'https://facebook.com/adriftwoodco',
      'https://linkedin.com/company/adriftwoodco',
    ],
  }
}
