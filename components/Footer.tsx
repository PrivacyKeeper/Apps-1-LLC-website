import Link from 'next/link'

const internalLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Use' },
]

const productLinks = [
  { href: 'https://www.barrelconnect.pro/', label: 'BarrelConnect' },
  { href: 'https://www.bullrider.pro/', label: 'BullRider' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="text-white font-bold text-lg mb-2">Apps 1, LLC</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Software holding and publishing company behind BarrelConnect and BullRider.
            </p>
          </div>

          {/* Site Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Company</p>
            <ul className="space-y-2">
              {internalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-400 hover:text-white transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Our Products</p>
            <ul className="space-y-2">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-white transition"
                  >
                    {l.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-10 pt-6 text-sm text-gray-500">
          © 2026 Apps 1, LLC. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
