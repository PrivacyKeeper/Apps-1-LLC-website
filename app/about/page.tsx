import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Apps 1, LLC — a software holding and publishing company.',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">About Apps 1, LLC</h1>
      <div className="w-12 h-1 bg-navy-500 mb-8 rounded" />

      <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-12">
        Apps 1, LLC is a software holding and publishing company focused on building, owning, and
        supporting digital products. The company serves as the parent organization behind specialized
        app brands, each created for a distinct audience and use case.
      </p>

      <div className="space-y-10">
        <div>
          <h2 className="text-xl font-bold text-navy-800 mb-3">Our Role</h2>
          <div className="w-8 h-0.5 bg-navy-400 mb-4 rounded" />
          <p className="text-gray-600 leading-relaxed">
            Apps 1, LLC is responsible for the ownership, oversight, and support of its product
            portfolio. While individual apps may operate under their own names, websites, and
            branding, Apps 1, LLC provides the company structure behind those products.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-navy-800 mb-3">Current Portfolio</h2>
          <div className="w-8 h-0.5 bg-navy-400 mb-4 rounded" />
          <p className="text-gray-600 leading-relaxed">
            The current Apps 1, LLC portfolio includes{' '}
            <a
              href="https://www.barrelconnect.pro/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-600 hover:underline font-medium"
            >
              BarrelConnect
            </a>{' '}
            and{' '}
            <a
              href="https://www.bullrider.pro/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-600 hover:underline font-medium"
            >
              BullRider
            </a>
            , each of which maintains its own dedicated brand presence and website.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-navy-800 mb-3">Why This Website Exists</h2>
          <div className="w-8 h-0.5 bg-navy-400 mb-4 rounded" />
          <p className="text-gray-600 leading-relaxed">
            This website exists to provide a clear public-facing identity for Apps 1, LLC as the
            parent company behind its digital products. It serves as a central place for company
            information, portfolio links, and contact details.
          </p>
        </div>
      </div>
    </div>
  )
}
