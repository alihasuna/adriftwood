import type { Metadata } from 'next'
import './globals.css'
import { createMetadata } from '@/lib/seo'

export const metadata: Metadata = createMetadata({})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
