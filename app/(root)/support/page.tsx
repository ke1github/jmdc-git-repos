// app/(root)/support/page.tsx

import { Mail, Phone } from 'lucide-react'
import React from 'react'

export default function SupportPage() {
  return (
    <section className="min-h-screen w-full bg-white text-gray-800 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Customer Support</h1>
        <p className="text-lg text-gray-600 mb-10">
          Need help with installation, product queries, or warranty? Our support team is here for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-xl shadow p-6">
            <Phone className="w-6 h-6 mb-2 text-yellow-600 mx-auto" />
            <h3 className="text-xl font-semibold mb-1">Call Us</h3>
            <p className="text-gray-700">+91 99584 93272</p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow p-6">
            <Mail className="w-6 h-6 mb-2 text-yellow-600 mx-auto" />
            <h3 className="text-xl font-semibold mb-1">Email Support</h3>
            <p className="text-gray-700">support@jmdcenergy.com</p>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-10">
          Our service hours are 9:00 AM – 6:00 PM IST (Mon–Sat). We aim to respond within 24 hours.
        </p>
      </div>
    </section>
  )
}
