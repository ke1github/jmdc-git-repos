'use client'

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo + Description */}
        <div>
          <Link href="/" className="flex items-center gap-2 mb-4">
            <Image src="/logo.png" alt="JMDC Logo" width={36} height={36} />
            <span className="text-lg font-bold text-orange-600">JMDC Energy</span>
          </Link>
          <p className="text-sm text-gray-600 leading-relaxed">
            Empowering India&apos;s solar transition with advanced, certified inverter technologies and unmatched support.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-orange-500">About Us</Link></li>
            <li><Link href="/products" className="hover:text-orange-500">Products</Link></li>
            <li><Link href="/solutions" className="hover:text-orange-500">Projects</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/support" className="hover:text-orange-500">Customer Support</Link></li>
            <li><Link href="/contact" className="hover:text-orange-500">Contact Us</Link></li>
            <li><a href="mailto:support@jmdcenergy.com" className="hover:text-orange-500">Email Support</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Contact</h4>
          <p className="text-sm mb-2">📞 +91 99584 93272</p>
          <p className="text-sm mb-2">📧 mehta.pawan@jmdcenergy.com</p>
          <p className="text-sm">📍 Ranchi, Jharkhand, India</p>
        </div>
      </div>

      <div className="bg-gray-200 text-center py-4 text-xs text-gray-600">
        © {new Date().getFullYear()} JMDC Energy. All rights reserved.
      </div>
    </footer>
  )
}
