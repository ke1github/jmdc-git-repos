import Image from 'next/image';
import React from 'react';

const projectData = [
  {
    title: 'Solar Rooftop Projects',
    images: [
      '/images/solar-rooftop-1.jpg',
      '/images/solar-rooftop-2.jpg',
      '/images/solar-rooftop-4.jpg',
    ],
  },
  {
    title: 'Solar Pumping Systems',
    images: [
      '/images/solar-pumping-1.jpg',
      '/images/solar-pumping-2.jpg',
    ],
  },
  {
    title: 'Solar Street Lighting Systems',
    images: [
      '/images/solar-street-light-1.jpg',
      '/images/solar-street-light-2.jpg',
    ],
  },
  {
    title: 'Prestigious Projects',
    images: [
      '/images/solar-prestigious-1.jpg',
      '/images/solar-prestigious-2.jpg',
    ],
  },
  {
    title: 'Other EPC Projects',
    images: [
      '/images/solar-others-1.jpg',
      '/images/solar-others-2.jpg',
    ],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="py-12 px-6 md:px-16">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-10">Our EPC Projects</h1>
        <div className="space-y-12">
          {projectData.map((category, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-2xl font-semibold text-orange-700">
                {category.title}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.images.map((img, i) => (
                  <div
                    key={i}
                    className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-gray-50"
                  >
                    <div className="relative h-60 w-full">
                      <Image
                        src={img}
                        alt={`${category.title} ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
