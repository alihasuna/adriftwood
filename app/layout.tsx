import type { Metadata, Viewport } from 'next'
import './globals.css'
import { createMetadata } from '@/lib/seo'
import { StructuredData } from '@/components/seo/structured-data'
import { getOrganizationSchema, getWebsiteSchema } from '@/lib/structured-data'
import { Navbar } from '@/components/ui/navbar'
import { Footer } from '@/components/ui/footer'
import { CartDrawer } from '@/components/ui/cart-drawer'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { PageTransition, SunsetTransition } from '@/components/ui/page-transition'
import { CustomCursor } from '@/components/ui/custom-cursor'
import { CursorGlow } from '@/components/ui/cursor-glow'
import { AmbientGradient } from '@/components/ui/ambient-gradient'
import { LightBeams } from '@/components/ui/light-beams'

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
      <body>
        {/* Ambient Effects - Now available on all pages */}
        <AmbientGradient />
        <LightBeams />
        <CursorGlow />
        <CustomCursor />
        
        {/* UI Elements - Now available on all pages */}
        <ScrollProgress />
        <SunsetTransition />
        <Navbar />
        <main className="min-h-screen relative z-10">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
        <CartDrawer />
      </body>
    </html>
  )
}
