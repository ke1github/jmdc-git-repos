'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

import type { Attribute } from 'next-themes'

interface ThemeProviderProps {
  children: React.ReactNode
  attribute?: Attribute | Attribute[]
  defaultTheme?: string
  enableSystem?: boolean
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  attribute = 'class',
  defaultTheme = 'light',
  enableSystem = true,
}) => {
  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
    >
      {children}
    </NextThemesProvider>
  )
}

export default ThemeProvider