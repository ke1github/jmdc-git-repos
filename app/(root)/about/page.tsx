// app/(root)/about/page.tsx

import Image from 'next/image'
import React from 'react'

export default function AboutPage() {
  return (
    <section className="min-h-screen w-full bg-white text-gray-800 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About JMDC ENERGY</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Delivering innovation through solar inverter technology powered by FOXESS Co. Ltd — tailored to India’s growing clean energy needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              JMDC ENERGY is committed to empowering India’s energy future by offering high-performance, reliable, and cost-effective solar string inverters. We partner with global leaders to bring premium OEM solutions under our brand.
            </p>
          </div>

          <div>
            <Image
              src="/images/about-mission.png"
              alt="Mission Solar"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>

          <div className="order-2 md:order-1">
            <Image
              src="/images/about-vision.png"
              alt="Vision Solar"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-700">
              To be recognized as India’s most trusted solar inverter brand, providing sustainable technology through strong OEM partnerships, robust distribution networks, and consistent service excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
