import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Apps 1, LLC — Software Holding Company',
  description:
    'Apps 1, LLC is the parent company behind BarrelConnect and BullRider — digital platforms built for specialized communities.',
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
            Apps 1, LLC
          </h1>
          <p className="text-xl md:text-2xl text-navy-100 font-medium mb-6 max-w-2xl">
            Parent company behind digital products built for specialized communities.
          </p>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed mb-10">
            Apps 1, LLC is a software holding and publishing company that owns and supports a growing
            portfolio of mobile applications and digital platforms. Our products are built to serve
            focused communities with tools, access, and connected digital experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="inline-block bg-white text-navy-700 font-semibold text-sm px-6 py-3 rounded hover:bg-gray-100 transition"
            >
              View Our Products
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-gray-400 text-gray-200 font-semibold text-sm px-6 py-3 rounded hover:border-white hover:text-white transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">What We Do</h2>
          <div className="w-12 h-1 bg-navy-500 mb-6 rounded" />
          <p className="text-gray-600 text-base md:text-lg max-w-3xl leading-relaxed">
            Apps 1, LLC develops, owns, operates, and supports app-based products through distinct
            product brands. Rather than serving as a consumer-facing app itself, the company
            functions as the parent organization behind its portfolio of digital products.
          </p>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Our Products</h2>
          <div className="w-12 h-1 bg-navy-500 mb-10 rounded" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* BarrelConnect */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold text-navy-800 mb-3">BarrelConnect</h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                BarrelConnect is a digital platform built for the barrel racing community. It provides
                a dedicated online destination centered around connection, visibility, and tools for
                people involved in the sport.
              </p>
              <a
                href="https://www.barrelconnect.pro/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy-600 hover:text-navy-800 transition"
              >
                Visit BarrelConnect
                <span aria-hidden>↗</span>
              </a>
            </div>

            {/* BullRider */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold text-navy-800 mb-3">BullRider</h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                BullRider is a digital platform created for the bull riding community. It is designed
                to support a focused audience through a dedicated product experience and brand presence.
              </p>
              <a
                href="https://www.bullrider.pro/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy-600 hover:text-navy-800 transition"
              >
                Visit BullRider
                <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Company Identity */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Built as a Parent Company</h2>
          <div className="w-12 h-1 bg-navy-500 mb-6 rounded" />
          <p className="text-gray-600 text-base md:text-lg max-w-3xl leading-relaxed">
            Apps 1, LLC exists to manage and support a portfolio of branded applications and digital
            products. Each product may maintain its own website, brand identity, and user-facing
            experience, while Apps 1, LLC serves as the underlying company behind those platforms.
          </p>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-8">
            For general company inquiries, partnership questions, or business-related contact, please
            reach out to Apps 1, LLC directly.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-navy-600 text-white font-semibold text-sm px-8 py-3 rounded hover:bg-navy-700 transition"
          >
            Contact Apps 1, LLC
          </Link>
        </div>
      </section>
    </>
  )
}
