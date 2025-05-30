'use client'

import { Button } from '@/components/ui/button'
import { Construction } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white flex flex-col items-center justify-center px-6 text-center relative">
      {/* Faded Icon Background */}
      <Construction className="absolute text-white/10 w-[400px] h-[400px] top-12 rotate-12" />

      {/* Logo */}
      <Image
        src="/logo.png" // Place your JMDC logo in public/logo.png
        alt="JMDC Energy Logo"
        width={100}
        height={100}
        className="mb-6 drop-shadow-md"
        priority
      />

      {/* Main Content */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        We&apos;re Powering Up 🚧
      </h1>
      <p className="text-slate-300 text-lg max-w-xl mb-8">
        Our site is currently undergoing a scheduled maintenance upgrade to bring you a brand-new experience. Please check back in <strong>48 hours</strong>.
      </p>

      <Button variant="secondary" size="lg">
        Back to Homepage
      </Button>

      {/* Footer Text */}
      <p className="text-sm text-muted mt-20">
        © {new Date().getFullYear()} JMDC Energy. All rights reserved.
      </p>
    </div>
  )
}
