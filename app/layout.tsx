import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JMDC Energy',
  description: 'Next-gen solar solutions platform by JMDC Energy.',
  metadataBase: new URL('https://jmdcenergy.com'),
  openGraph: {
    title: 'JMDC Energy',
    description: 'Empowering the solar future with technology.',
    url: 'https://jmdcenergy.com',
    siteName: 'JMDC Energy',
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, 'min-h-screen bg-white dark:bg-[#0f172a] text-slate-900 dark:text-slate-100')}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {/* TODO: Add Navbar here */}
          {children}
          {/* TODO: Add Footer here */}
        </ThemeProvider>
      </body>
    </html>
  )
}
