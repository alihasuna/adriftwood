import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Privacy Policy',
  description: 'Privacy policy for Adriftwood Co.',
  path: '/legal/privacy',
})

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-display font-normal text-brand-pine mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-neutral max-w-none font-body">
            <p className="text-sm text-neutral-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2 className="text-2xl font-display font-normal text-brand-pine mt-8 mb-4">
              Introduction
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              At Adriftwood Co., we respect your privacy and are committed to protecting your personal data. 
              This privacy policy explains how we collect, use, and safeguard your information when you visit 
              our website or make a purchase.
            </p>

            <h2 className="text-2xl font-display font-normal text-brand-pine mt-8 mb-4">
              Information We Collect
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              We collect information you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-4">
              <li>Name, email address, and contact information</li>
              <li>Shipping and billing addresses</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Order history and preferences</li>
              <li>Communications with our team</li>
            </ul>

            <h2 className="text-2xl font-display font-normal text-brand-pine mt-8 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-4">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders and inquiries</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our products and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-display font-normal text-brand-pine mt-8 mb-4">
              Data Security
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your personal data 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-display font-normal text-brand-pine mt-8 mb-4">
              Your Rights
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>

            <h2 className="text-2xl font-display font-normal text-brand-pine mt-8 mb-4">
              Contact Us
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              If you have questions about this privacy policy or our data practices, please contact us at:
            </p>
            <p className="text-neutral-700">
              Email: privacy@adriftwoodco.com<br />
              Phone: +1 (250) 555-1234
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
