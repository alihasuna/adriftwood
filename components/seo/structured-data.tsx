/**
 * StructuredData component for embedding JSON-LD schema
 * Optimized for both traditional SEO and AI search engines
 */
export function StructuredData({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
