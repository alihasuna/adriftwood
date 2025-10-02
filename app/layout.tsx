import type { Metadata, Viewport } from 'next'
import './globals.css'
import { createMetadata } from '@/lib/seo'
import { StructuredData } from '@/components/seo/structured-data'
import { getOrganizationSchema, getWebsiteSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  ...createMetadata({}),
  metadataBase: new URL('https://adriftwoodco.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual code
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#044002',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData data={getOrganizationSchema()} />
        <StructuredData data={getWebsiteSchema()} />
      </head>
      <body>{children}</body>
    </html>
  )
}
