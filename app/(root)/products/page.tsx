'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import React from 'react'

const products = [
  {
    name: 'JMDC-L3300, 3.3KW',
    image: '/images/inverters/Inv_LSeries.png',
    features: ['Grid-tied', 'WiFi Enabled', 'IP65', 'BIS Certified'],
    datasheet: '/pdf/datasheets/jmdc-gt3kw.pdf',
    bg: 'bg-orange-50',
  },
  {
    name: 'JMDC-M5000, 5KW',
    image: '/images/inverters/Inv_MSeries.png',
    features: ['Grid-tied', 'WiFi Enabled', 'IP65', 'BIS Certified'],
    datasheet: '/pdf/datasheets/jmdc-gt3kw.pdf',
    bg: 'bg-orange-50',
  },
  {
   name: 'JMDC-N10K, 10KW',
    image: '/images/inverters/Inv_NSeries.png',
    features: ['Grid-tied', 'WiFi Enabled', 'IP65', 'BIS Certified'],
    datasheet: '/pdf/datasheets/jmdc-gt3kw.pdf',
    bg: 'bg-orange-50',
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-4 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-orange-600 mb-4">Our Solar Inverters</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
          Explore our range of high-efficiency, smart solar inverters built for Indian conditions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-6 shadow hover:shadow-xl transition-all duration-300 ${product.bg}`}
            >
              <div className="mb-4 rounded-xl overflow-hidden bg-white/80">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="mx-auto object-contain transition duration-300 hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">{product.name}</h3>
              <ul className="text-sm text-gray-700 mb-4 list-disc list-inside text-left px-2">
                {product.features.map((feat, idx) => (
                  <li key={idx}>{feat}</li>
                ))}
              </ul>
              <Button asChild className="w-full text-sm font-medium rounded-xl">
                <Link href={product.datasheet} target="_blank" rel="noopener noreferrer">
                  Download Datasheet
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
