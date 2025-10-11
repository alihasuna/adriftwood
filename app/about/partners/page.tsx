import { createMetadata } from '@/lib/seo'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, MapPin } from 'lucide-react'

export const metadata = createMetadata({
  title: 'Our Partnership with Resthouse Sleep',
  description: 'Adriftwood Co. partners with Resthouse Sleep to create the perfect foundation for restorative rest. Learn about our shared values of quality, comfort, and community.',
  path: '/about/partners',
})

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-brand-pine to-brand-pine/90 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/hero-forest.jpg"
            alt="Forest background"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Partnership with Resthouse Sleep
            </h1>
            <div className="h-1 w-32 bronze-gradient mx-auto mb-8" />
            <p className="text-xl lg:text-2xl font-body leading-relaxed text-white/90">
              A natural fit rooted in shared values of quality, comfort, community, and friendship
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl font-body text-neutral-700 leading-relaxed mb-8">
                Our partnership with Resthouse Sleep is a natural fit. Rooted in the shared values of quality, 
                comfort, community and friendship. We are both passionate about creating well-crafted, sustainable 
                products that do good and feel good.
              </p>
              
              <p className="text-lg font-body text-neutral-700 leading-relaxed mb-8">
                This collaboration allows us to combine our locally handmade woodwork with Resthouse&apos;s dedication 
                to healthy, restorative sleep. Bringing together thoughtful design and natural comfort. It&apos;s more 
                than the products—it&apos;s about building community through care, connection, the art of furniture 
                and restorative rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Values */}
      <section className="py-24 bg-neutral-100">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-pine text-center mb-16">
            Our Shared Values
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { title: 'Quality', description: 'Uncompromising standards in materials and craftsmanship' },
              { title: 'Comfort', description: 'Creating spaces and products that nurture wellbeing' },
              { title: 'Community', description: 'Building relationships through care and connection' },
              { title: 'Sustainability', description: 'Honoring the environment in everything we do' },
            ].map((value, index) => (
              <div 
                key={value.title}
                className="bg-white p-8 rounded-xl shadow-sm border border-brand-sage/20 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-brand-bronze/20 flex items-center justify-center mb-4">
                  <span className="text-brand-bronze font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-brand-pine mb-3">
                  {value.title}
                </h3>
                <p className="text-base font-body text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Resthouse */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-pine mb-12">
              About Resthouse Sleep
            </h2>
            
            <div className="space-y-8 text-base lg:text-lg font-body text-neutral-700 leading-relaxed">
              <p>
                Chris&apos;s passion for sleep began early and grew with him as he understood the value of sleep more and more. 
                Driven by a desire to provide lasting, personal sleep solutions, he set out to create something better than 
                what the industry was offering.
              </p>
              
              <p>
                Resthouse began in 2014 in Chris&apos;s garage of just 450 square feet. Over 10 years later, with two showrooms 
                in Duncan and Victoria, Resthouse remains guided by the fundamental mission: to create sleep solutions that truly work.
              </p>
              
              <p>
                The entire team is hands-on in educating people with care and curiosity. They are all embedded in Resthouse&apos;s 
                commitment to help each individual build a sleep space that feels truly restful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Store Locations */}
      <section className="py-24 bg-gradient-to-b from-neutral-100 to-neutral-50">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-pine text-center mb-16">
            Visit Resthouse Showrooms
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Victoria Location */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-brand-sage/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-bronze/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-brand-bronze" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-semibold text-brand-pine mb-2">
                    Victoria
                  </h3>
                  <p className="text-sm font-body text-neutral-600 mb-4">
                    Upper Level, near Whole Foods
                  </p>
                </div>
              </div>
              
              <div className="space-y-3 text-base font-body text-neutral-700">
                <p>3561 Blanshard Street #113</p>
                <p>Victoria, BC V8Z 0B9</p>
                <p>Canada</p>
              </div>
            </div>

            {/* Duncan Location */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-brand-sage/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-bronze/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-brand-bronze" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-semibold text-brand-pine mb-2">
                    Duncan
                  </h3>
                  <p className="text-sm font-body text-neutral-600 mb-4">
                    Nestled in the Cowichan Valley
                  </p>
                </div>
              </div>
              
              <div className="space-y-3 text-base font-body text-neutral-700">
                <p>3008 Boys Road</p>
                <p>Duncan, BC V9L 6W4</p>
                <p>Canada</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-lg font-body text-neutral-700 mb-6">
              Find your perfect sleep online or visit the wonderful team of sleep consultants at either location
            </p>
            <Link
              href="http://resthousesleep.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-pine text-white rounded-lg font-body font-semibold hover:bg-brand-pine/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Visit Resthouse Sleep
              <ExternalLink className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Back to About CTA */}
      <section className="py-16 bg-white border-t border-neutral-200">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-base font-body font-medium text-brand-bronze hover:text-brand-pine transition-colors"
          >
            ← Back to About Us
          </Link>
        </div>
      </section>
    </div>
  )
}

