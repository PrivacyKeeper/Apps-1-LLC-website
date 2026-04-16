import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Apps 1, LLC portfolio — BarrelConnect and BullRider.',
}

const products = [
  {
    name: 'BarrelConnect',
    description:
      'BarrelConnect is a dedicated platform for the barrel racing community, built to support connection, visibility, and a focused digital experience for its users.',
    url: 'https://www.barrelconnect.pro/',
    email: 'support@barrelconnect.pro',
  },
  {
    name: 'BullRider',
    description:
      'BullRider is a dedicated platform for the bull riding community, created to support a focused user base through its own product ecosystem and brand identity.',
    url: 'https://www.bullrider.pro/',
    email: 'support@bullrider.pro',
  },
]

export default function ProductsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">Products</h1>
      <div className="w-12 h-1 bg-navy-500 mb-8 rounded" />

      <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-12">
        Apps 1, LLC supports a growing portfolio of app-based products and digital platforms.
        Current products include:
      </p>

      <div className="space-y-8">
        {products.map((product) => (
          <div
            key={product.name}
            className="border border-gray-200 rounded-xl p-8 bg-white shadow-sm"
          >
            <h2 className="text-2xl font-bold text-navy-800 mb-4">{product.name}</h2>
            <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
            <div className="flex flex-wrap gap-6 items-center">
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-navy-600 text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-navy-700 transition"
              >
                Website ↗
              </a>
              <a
                href={`mailto:${product.email}`}
                className="text-sm text-gray-500 hover:text-navy-600 transition"
              >
                {product.email}
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-12 text-gray-500 text-sm leading-relaxed">
        Apps 1, LLC functions as the parent company behind these products and may expand its
        portfolio over time.
      </p>
    </div>
  )
}
