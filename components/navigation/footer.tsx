import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground py-10 border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <p>&copy; {new Date().getFullYear()} JMDC Energy. All rights reserved.</p>
        <div className="flex gap-6 text-sm">
          <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
