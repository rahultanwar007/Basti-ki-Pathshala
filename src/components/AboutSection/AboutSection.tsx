// components/AboutSection/AboutSection.tsx
import React from "react"
import AboutCard from "./AboutCard"
import { aboutCards } from "./aboutData"

const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Empowering Communities Through Education
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            We believe every child deserves access to quality education. Our community-driven approach
            brings learning opportunities to underserved neighborhoods, creating brighter futures for all.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {aboutCards.map((card, index) => (
            <AboutCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
