'use client'

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">Contact</h1>
      <div className="w-12 h-1 bg-navy-500 mb-8 rounded" />
      <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
        For general company inquiries, business matters, partnerships, or other corporate communication, please contact Apps 1, LLC.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-lg font-bold text-navy-800 mb-4">Direct Contact</h2>
          <p className="text-gray-800 font-medium">Apps 1, LLC</p>
          <a href="mailto:michael@apps1llc.com" className="text-navy-600 hover:underline font-medium">michael@apps1llc.com</a>
          <div className="border-t border-gray-100 pt-6 mt-6">
            <p className="text-sm text-gray-600 mb-3">For product-specific support:</p>
            <ul className="space-y-2">
              <li><a href="https://www.barrelconnect.pro/" target="_blank" rel="noopener noreferrer" className="text-sm text-navy-600 hover:underline">BarrelConnect ↗</a></li>
              <li><a href="https://www.bullrider.pro/" target="_blank" rel="noopener noreferrer" className="text-sm text-navy-600 hover:underline">BullRider ↗</a></li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold text-navy-800 mb-4">Send a Message</h2>
          <div className="space-y-4">
            <input type="text" placeholder="Your name" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm" />
            <input type="email" placeholder="your@email.com" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm" />
            <textarea rows={5} placeholder="Your message..." className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm resize-none" />
            <a href="mailto:michael@apps1llc.com" className="block w-full bg-navy-600 text-white text-sm font-semibold py-3 rounded-lg text-center hover:bg-navy-700">Send Message</a>
          </div>
        </div>
      </div>
    </div>
  )
}
