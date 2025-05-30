// ✅ Always import first
import './globals.css'
import React from 'react'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/navigation/footer'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: {
    default: 'JMDC Energy',
    template: '%s | JMDC Energy',
  },
  description: 'OEM solar inverter solutions by FOXESS, customized for the Indian solar market.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        {/* 🌟 Main Layout */}
        <Navbar />
        {children}
        {/* 🦶 Footer */}
        <Footer />
      </body>
    </html>
  )
}
