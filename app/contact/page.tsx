'use client'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Apps 1, LLC for general inquiries and business matters.',
}

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">Contact</h1>
      <div className="w-12 h-1 bg-navy-500 mb-8 rounded" />

      <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
        For general company inquiries, business matters, partnerships, or other corporate
        communication, please contact Apps 1, LLC.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Details */}
        <div>
          <h2 className="text-lg font-bold text-navy-800 mb-4">Direct Contact</h2>
          <div className="space-y-3 mb-8">
            <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Company</p>
            <p className="text-gray-800 font-medium">Apps 1, LLC</p>
            <p className="text-sm text-gray-500 uppercase tracking-wider font-medium mt-4">Email</p>
            <a
              href="mailto:michael@apps1llc.com"
              className="text-navy-600 hover:underline font-medium"
            >
              michael@apps1llc.com
            </a>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <p className="text-sm text-gray-600 mb-3">
              For product-specific information, support, or updates, please visit the dedicated
              product websites:
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.barrelconnect.pro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-navy-600 hover:underline"
                >
                  BarrelConnect ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.bullrider.pro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-navy-600 hover:underline"
                >
                  BullRider ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form — UI only, ready for backend integration */}
        <div>
          <h2 className="text-lg font-bold text-navy-800 mb-4">Send a Message</h2>
          <p className="text-xs text-gray-400 mb-4 italic">
            Form integration coming soon — for immediate contact, email us directly.
          </p>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-400 transition"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-400 transition"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Your message..."
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-400 transition resize-none"
              />
            </div>
            <button
              type="submit"
              disabled
              className="w-full bg-navy-600 text-white text-sm font-semibold py-3 rounded-lg opacity-50 cursor-not-allowed transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
