import { Navbar } from '@/components/ui/navbar'
import { Footer } from '@/components/ui/footer'
import { CartDrawer } from '@/components/ui/cart-drawer'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { PageTransition, SunsetTransition } from '@/components/ui/page-transition'
import { CustomCursor } from '@/components/ui/custom-cursor'
import { CursorGlow } from '@/components/ui/cursor-glow'
import { AmbientParticles } from '@/components/ui/ambient-particles'
import { AmbientGradient } from '@/components/ui/ambient-gradient'
import { LightBeams } from '@/components/ui/light-beams'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Ambient Effects */}
      <AmbientGradient />
      <LightBeams />
      <AmbientParticles />
      <CursorGlow />
      <CustomCursor />
      
      {/* UI Elements */}
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
    </>
  )
}
