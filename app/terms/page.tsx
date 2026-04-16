import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use for Apps 1, LLC.',
}

const sections = [
  {
    heading: 'Website Purpose',
    body: 'This website is provided for general informational purposes regarding Apps 1, LLC and its related products and business presence.',
  },
  {
    heading: 'No Warranty',
    body: 'The content on this website is provided on an "as is" basis without warranties of any kind, either express or implied.',
  },
  {
    heading: 'Third-Party Links',
    body: 'This website may contain links to third-party websites, including websites associated with products owned or managed by Apps 1, LLC. We are not responsible for the content, services, or practices of those third-party websites.',
  },
  {
    heading: 'Limitation of Liability',
    body: 'Apps 1, LLC shall not be liable for any damages arising from the use of, or inability to use, this website.',
  },
  {
    heading: 'Changes',
    body: 'Apps 1, LLC may update these Terms of Use at any time by posting revised terms on this page.',
  },
]

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-2">Terms of Use</h1>
      <p className="text-sm text-gray-400 mb-4">Effective Date: February 20, 2026</p>
      <div className="w-12 h-1 bg-navy-500 mb-8 rounded" />

      <p className="text-gray-600 leading-relaxed mb-10">
        By accessing and using this website, you agree to these Terms of Use.
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
            For questions regarding these Terms of Use, contact:{' '}
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
