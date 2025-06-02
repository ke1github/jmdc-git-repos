// app/(root)/projects/page.tsx

import Image from 'next/image'
import React from 'react'

const projects = [
  {
    title: '3kW Residential Rooftop – Ranchi, Jharkhand',
    location: 'Ranchi, Jharkhand',
    image: '/projects/project1.jpg',
    description: 'Installed a 3kW on-grid solar system with JMDC inverter under net metering scheme for a residential customer.'
  },
  {
    title: '25kW Commercial Installation – Dhanbad',
    location: 'Dhanbad, Jharkhand',
    image: '/projects/project2.jpg',
    description: 'Executed for a petrol pump with commercial solar needs and remote monitoring support.'
  },
  {
    title: '100kW Industrial Project – Bokaro',
    location: 'Bokaro, Jharkhand',
    image: '/projects/project3.jpg',
    description: 'High-efficiency three-phase JMDC inverters deployed at an industrial facility to reduce grid dependency.'
  },
  {
    title: '3kW Residential_1 Rooftop – Ranchi, Jharkhand',
    location: 'Ranchi, Jharkhand',
    image: '/projects/project1.jpg',
    description: 'Installed a 3kW on-grid solar system with JMDC inverter under net metering scheme for a residential customer.'
  },
  {
    title: '25kW Commercial Installation_2 – Dhanbad',
    location: 'Dhanbad, Jharkhand',
    image: '/projects/project2.jpg',
    description: 'Executed for a petrol pump with commercial solar needs and remote monitoring support.'
  },
  {
    title: '100kW Industrial Project_2 – Bokaro',
    location: 'Bokaro, Jharkhand',
    image: '/projects/project3.jpg',
    description: 'High-efficiency three-phase JMDC inverters deployed at an industrial facility to reduce grid dependency.'
  }
]

export default function ProjectsPage() {
  return (
    <section className="min-h-screen w-full bg-gray-100 py-20 px-6 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Completed Projects</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our successfully completed solar installations across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{project.location}</p>
                <p className="text-gray-700 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
