// app/(root)/layout.tsx or app/layout.tsx

import '@/app/globals.css'
import React, { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
      
        {children}
    
      </body>
    </html>
  )
}
