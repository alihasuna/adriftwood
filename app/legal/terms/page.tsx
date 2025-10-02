import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Terms of Service',
  description: 'Terms of service for Adriftwood Co.',
  path: '/legal/terms',
})

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-display font-normal text-brand-pine mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-neutral max-w-none font-body">
            <p className="text-sm text-neutral-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2 className="text-2xl font-display font-normal text-brand-pine mt-8 mb-4">
              Agreement to Terms
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              By accessing or using Adriftwood Co.&apos;s website and services, you agree to be bound by these 
              Terms of Service. If you disagree with any part of these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-display font-normal text-brand-pine mt-8 mb-4">
              Products and Services
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              All furniture and products are handcrafted to order. Product images are representative; 
              natural variations in wood grain and color are expected and celebrated as part of the craft.
            </p>

            <h2 className="text-2xl font-display font-normal text-brand-pine mt-8 mb-4">
              Orders and Payment
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-4">
              <li>All prices are in Canadian dollars (CAD)</li>
              <li>Payment is required in full before production begins</li>
              <li>We accept major credit cards and e-transfers</li>
              <li>Custom orders require a 50% deposit</li>
            </ul>

            <h2 className="text-2xl font-display font-normal text-brand-pine mt-8 mb-4">
              Shipping and Delivery
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Production times vary by product (typically 6-10 weeks). We offer free shipping across Canada. 
              International shipping is available upon request with additional fees.
            </p>

            <h2 className="text-2xl font-display font-normal text-brand-pine mt-8 mb-4">
              Returns and Refunds
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              We offer a 30-day return policy for stock items in original condition. Custom orders are 
              non-refundable. Damaged items must be reported within 7 days of delivery.
            </p>

            <h2 className="text-2xl font-display font-normal text-brand-pine mt-8 mb-4">
              Warranty
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              We warrant our products against defects in materials and workmanship for one year from date 
              of delivery. This warranty does not cover normal wear, misuse, or damage from improper care.
            </p>

            <h2 className="text-2xl font-display font-normal text-brand-pine mt-8 mb-4">
              Intellectual Property
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              All content on this website, including designs, images, and text, is the property of 
              Adriftwood Co. and protected by copyright law. Unauthorized use is prohibited.
            </p>

            <h2 className="text-2xl font-display font-normal text-brand-pine mt-8 mb-4">
              Limitation of Liability
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Adriftwood Co. shall not be liable for any indirect, incidental, or consequential damages 
              arising from the use of our products or services.
            </p>

            <h2 className="text-2xl font-display font-normal text-brand-pine mt-8 mb-4">
              Contact Us
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              If you have questions about these terms, please contact us at:
            </p>
            <p className="text-neutral-700">
              Email: hello@adriftwoodco.com<br />
              Phone: +1 (250) 555-1234
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
