"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from "react";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen w-full bg-[#f7f9fc] text-gray-900">
      <section className="grid md:grid-cols-[400px_1fr] min-h-screen">
        {/* Sidebar */}
        <aside className="bg-white border border-gray-200 p-6 flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-orange-600">Projects</h1>

          <div className="flex items-center space-x-4">
            <div className="flex overflow-hidden rounded-tl-[12px] rounded-bl-[12px] rounded-tr-[0] rounded-br-[0] bg-white shadow">
              <Button className="bg-white text-black font-semibold px-6 py-2">
                EPC
              </Button>
              <Button className="bg-blue-400 text-white font-medium px-6 py-2">
                O&M
              </Button>
            </div>
            <Button className="text-black text-sm font-medium">More +</Button>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            {/* Petrochemical */}
            <Link
              href="#"
              className="group p-4 bg-orange-50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200"
            >
              <div className="flex flex-col items-start gap-2">
                <Image
                  src="/icons/oil-drop.svg"
                  alt="Petrochemical"
                  width={32}
                  height={32}
                />
                <span className="text-lg font-semibold text-orange-700 group-hover:underline">
                  Petrochemical
                </span>
              </div>
            </Link>

            {/* Cement & Ceramics */}
            <Link
              href="#"
              className="group p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200"
            >
              <div className="flex flex-col items-start gap-2">
                <Image
                  src="/icons/mountain.svg"
                  alt="Cement"
                  width={32}
                  height={32}
                />
                <span className="text-lg font-semibold">Cement & Ceramics</span>
              </div>
            </Link>

            {/* Sugar */}
            <Link
              href="#"
              className="group p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200"
            >
              <div className="flex flex-col items-start gap-2">
                <Image
                  src="/icons/candy.svg"
                  alt="Sugar"
                  width={32}
                  height={32}
                />
                <span className="text-lg font-semibold">Sugar</span>
              </div>
            </Link>

            {/* Water & Wastewater */}
            <Link
              href="#"
              className="group p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200"
            >
              <div className="flex flex-col items-start gap-2">
                <Image
                  src="/icons/water-filter.svg"
                  alt="Water"
                  width={32}
                  height={32}
                />
                <span className="text-lg font-semibold">
                  Water & Wastewater
                </span>
              </div>
            </Link>
          </div>
        </aside>

        {/* Hero Section */}
        <div className="relative h-full w-full">
          <Image
            src="/images/jmdc-petrochemical.jpg"
            alt="Petrochemical Plant"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start px-12">
            <h2 className="text-white text-5xl font-bold mb-4">
              Petrochemical
            </h2>
            <p className="text-white text-lg max-w-2xl">
              JMDC ENERGY offers integrated inverter & PLC solutions tailored
              for petrochemical industries, ensuring maximum energy efficiency,
              automation, and long-term stability.
            </p>
            <Button
              variant="secondary"
              className="mt-6 bg-white text-black hover:bg-orange-100"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
