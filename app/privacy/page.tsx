import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Apps 1, LLC.',
}

const sections = [
  {
    heading: 'Information We Collect',
    body: 'We may collect basic information that you voluntarily submit through contact forms or email communications, such as your name, email address, and the content of your message.',
  },
  {
    heading: 'How We Use Information',
    body: 'We use submitted information only for the purpose of responding to inquiries, communicating about business matters, and operating this website.',
  },
  {
    heading: 'Third-Party Links',
    body: 'This website may include links to third-party websites, including websites for products owned or managed by Apps 1, LLC. We are not responsible for the privacy practices or content of third-party websites.',
  },
  {
    heading: 'Data Security',
    body: 'We take reasonable steps to protect information submitted through this website, but no method of transmission or storage is guaranteed to be completely secure.',
  },
  {
    heading: 'Changes to This Policy',
    body: 'Apps 1, LLC may update this Privacy Policy from time to time. Any updates will be posted on this page with a revised effective date.',
  },
]

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-400 mb-4">Effective Date: February 20, 2026</p>
      <div className="w-12 h-1 bg-navy-500 mb-8 rounded" />

      <p className="text-gray-600 leading-relaxed mb-10">
        Apps 1, LLC respects your privacy and is committed to protecting any information you may
        provide through this website.
      </p>

      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.heading}>
            <h2 className="text-lg font-bold text-navy-800 mb-2">{s.heading}</h2>
            <p className="text-gray-600 leading-relaxed">{s.body}</p>
          </div>
        ))}

        <div>
          <h2 className="text-lg font-bold text-navy-800 mb-2">Contact</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have questions about this Privacy Policy, please contact:{' '}
            <a
              href="mailto:michael@apps1llc.com"
              className="text-navy-600 hover:underline"
            >
              michael@apps1llc.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
