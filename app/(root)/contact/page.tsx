'use client'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 text-gray-800 px-6 py-20">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Whether you&apos;re interested in our solar products, need support, or have a partnership inquiry — we’re here to help.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Contact Info */}
        <div className="space-y-6 text-sm md:text-base">
          <div>
            <h3 className="font-semibold text-gray-700 mb-1">📞 Phone</h3>
            <p className="text-gray-600">+91 99584 93272</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mb-1">📧 Email</h3>
            <p className="text-gray-600">info@jmdcenergy.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mb-1">📍 Address</h3>
            <p className="text-gray-600">JMDC Energy, Ramgarh, Jharkhand, India</p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form className="space-y-6">
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Textarea placeholder="Your Message" rows={5} required />
          <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
            Send Message
          </Button>
        </form>
      </div>
    </main>
  )
}
