// components/AboutSection/AboutCard.tsx
import React from "react"
import { AboutCardData } from "./aboutData"

const AboutCard: React.FC<AboutCardData> = ({ title, description, icon, bgFrom, bgTo, iconBg }) => {
  return (
    <div
      className={`text-center p-6 rounded-xl bg-gradient-to-br ${bgFrom} ${bgTo} hover:shadow-lg transition-all duration-300`}
    >
      <div className={`w-16 h-16 ${iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default AboutCard
