'use client'

import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Image from 'next/image'

const navItems = [
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Projects', href: '/projects' },
 // { label: 'News', href: '/news' },
  { label: 'Support', href: '/support' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-[999] bg-white/90 backdrop-blur-md border-b shadow-sm">
      <div className="max-w-[90rem] mx-auto flex items-center justify-between px-4 py-3 md:px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
           src="/logo.png"
           alt="JMDC Energy Logo"
           width={48}
           height={48}
           className="drop-shadow-md"
           priority
          />

          <span className="text-lg font-bold text-orange-500 tracking-wide">JMDC Energy</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Toggle menu">
                <Menu className="h-6 w-6 text-gray-800" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 bg-white">
              <div className="flex flex-col gap-4 mt-10 px-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-base text-gray-800 hover:text-orange-500 transition font-medium"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
