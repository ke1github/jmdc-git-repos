'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function MaintenancePage() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-white text-gray-800 overflow-hidden px-4 text-center">
      
      {/* Background Branding Image */}
      <Image
        src="/images/jmdc-maintenance-bg.png"
        alt="JMDC Energy Background"
        fill
        className="object-cover object-center opacity-25 z-0"
        aria-hidden
      />

      {/* Radial white overlay */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-10" />

      {/* JMDC Logo */}
      <Image
        src="/logo.png"
        alt="JMDC Energy Logo"
        width={180}
        height={180}
        className="mb-6 z-20 drop-shadow-md"
        priority
      />

      {/* Main Text */}
      <div className="z-30">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-600 drop-shadow-md">
          We&apos;re Under Maintenance
        </h1>
        <p className="text-gray-700 max-w-xl mx-auto text-base md:text-lg mb-4">
          Our website is temporarily offline for upgrades. We&apos;ll be back in <strong className="text-black">48 hours</strong> with an ultra-modern solar experience.
        </p>

        <p className="text-gray-600">
          For urgent inquiries, call us at{' '}
          <a href="tel:9958493272" className="underline text-orange-500 hover:text-orange-600 transition">
            +91 99584 93272
          </a>
        </p>
        <p className="text-gray-600 mb-8">
          Or write to us at{' '}
          <a href="mailto:mehta.pawan@jmdcenergy.com" className="underline text-orange-500 hover:text-orange-600 transition">
             sales@jmdcenergy.com, mehta.pawan@jmdcenergy.com
          </a>
        </p>

        <Button asChild size="lg" variant="secondary" className="bg-orange-500 hover:bg-orange-600 text-white border-none shadow-lg hover:shadow-xl transition">
          <Link href="/">Back to Homepage</Link>
        </Button>
      </div>

      {/* Footer */}
      <p className="absolute bottom-6 text-sm text-gray-500 z-30">
        © {new Date().getFullYear()} JMDC Energy. All rights reserved.
      </p>
    </section>
  )
}
