"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="w-full bg-white text-gray-900">
      {/* 🛰️ Branded Welcome Banner */}
      <section className="relative w-full bg-gradient-to-br from-orange-50 via-white to-orange-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-orange-100">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/banner-jmdc-animation.png"
                alt="JMDC Energy Welcome Banner"
                width={1600}
                height={700}
                className="w-full h-auto object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🌞 Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100 min-h-screen flex items-center justify-center text-center px-6">
        <div className="max-w-7xl mx-auto">
          <Image
            src="/logo.png"
            alt="JMDC Energy Logo"
            width={64}
            height={64}
            className="mx-auto mb-6 drop-shadow"
          />

          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-500 drop-shadow-lg">
            Revolutionizing Solar Inverters in India
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mt-4 max-w-2xl mx-auto leading-relaxed">
            Reliable. Efficient. Smart. Powering homes, businesses, and
            industries with cutting-edge solar technology.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Button
              asChild
              className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg rounded-2xl px-6 py-3 text-base"
            >
              <Link href="/products">Explore Products</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-orange-500 text-orange-600 hover:bg-orange-50 rounded-2xl px-6 py-3 text-base"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        {/* Optional Background Image */}
        <Image
          src="/images/jmdc-maintenance-bg.png"
          alt="Solar Inverter Background"
          width={700}
          height={450}
          className="absolute right-0 bottom-0 opacity-20 object-contain"
        />
      </section>

      {/* ⚡ Why JMDC Energy */}
      <section className="py-20 bg-white relative">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
            Why Choose <span className="text-orange-500">JMDC Energy</span>?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "IP65 + BIS Certified",
                desc: "Durable & approved for Indian solar conditions.",
              },
              {
                title: "OEM of FoxESS",
                desc: "International quality with local support.",
              },
              {
                title: "Remote Monitoring",
                desc: "Real-time performance at your fingertips.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 shadow-md border bg-white hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-orange-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 CTA Section */}
      <section className="py-16 bg-orange-500 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to Power Up?
          </h2>
          <p className="mb-6 text-base md:text-lg">
            Join thousands of smart users who trust JMDC Energy for their solar
            solutions.
          </p>
          <Button
            asChild
            className="bg-white text-orange-600 hover:bg-orange-100 rounded-2xl px-6 py-3 text-base font-semibold shadow"
          >
            <Link href="/products">Get a Quote</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
