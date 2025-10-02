import { Metadata } from 'next'

export const siteConfig = {
  name: 'Adriftwood Co.',
  description: 'Timeless, sustainable design in balance with nature. Handcrafted furniture and home goods from Victoria, BC.',
  url: 'https://adriftwoodco.com',
  ogImage: '/og-image.jpg',
  twitter: '@adriftwoodco',
}

export function createMetadata({
  title,
  description,
  image,
  path = '',
}: {
  title?: string
  description?: string
  image?: string
  path?: string
}): Metadata {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const metaDescription = description || siteConfig.description
  const metaImage = image || siteConfig.ogImage
  const url = `${siteConfig.url}${path}`

  return {
    title: metaTitle,
    description: metaDescription,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: 'website',
      url,
      title: metaTitle,
      description: metaDescription,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      siteName: siteConfig.name,
    },
    twitter: {
      card: 'summary_large_image',
      site: siteConfig.twitter,
      creator: siteConfig.twitter,
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
    },
  }
}
