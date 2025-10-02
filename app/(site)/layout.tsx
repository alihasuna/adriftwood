// Site layout is now handled by the root layout
// This layout is kept for potential site-specific configurations
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
