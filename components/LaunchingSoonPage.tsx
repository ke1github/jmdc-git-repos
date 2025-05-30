'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function LaunchingSoonPage() {
  return (
    //<section className="fixed inset-0 w-full h-full bg-gradient-to-br from-orange-50 via-white to-orange-100 text-gray-800 overflow-hidden flex flex-col items-center justify-center px-6 text-center">
      <section className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100 text-gray-800 flex flex-col items-center justify-center px-6 text-center">

      {/* Logo */}
      <Image
        src="/logo.png"
        alt="JMDC Energy"
        width={64}
        height={64}
        className="mb-6 drop-shadow"
      />

      {/* Headline */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-4 drop-shadow-md">
        Coming Soon...
      </h1>

      {/* Subheading */}
      <p className="text-lg md:text-xl max-w-xl mx-auto text-gray-600 mb-6">
        This section is under construction. We’ll launch it shortly with powerful solar features.
      </p>

      {/* Action */}
      <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white shadow-md px-6 py-3 rounded-2xl">
        <Link href="/">Back to Homepage</Link>
      </Button>

      {/* Glow background (visual only) */}
      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-orange-400 opacity-10 blur-3xl animate-pulse pointer-events-none" />
    </section>
  )
}
