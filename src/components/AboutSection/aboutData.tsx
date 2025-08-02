import { JSX } from "react"

// components/AboutSection/aboutData.ts
export interface AboutCardData {
    title: string
    description: string
    icon: JSX.Element
    bgFrom: string
    bgTo: string
    iconBg: string
  }
  
  export const aboutCards: AboutCardData[] = [
    {
      title: "Quality Education",
      description: "Providing structured learning programs tailored to community needs.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      bgFrom: "from-blue-50",
      bgTo: "to-indigo-50",
      iconBg: "bg-blue-500",
    },
    {
      title: "Community Support",
      description: "Building strong partnerships with local communities and volunteers.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      bgFrom: "from-green-50",
      bgTo: "to-emerald-50",
      iconBg: "bg-green-500",
    },
    {
      title: "Sustainable Impact",
      description: "Creating lasting positive change through education and empowerment.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      bgFrom: "from-purple-50",
      bgTo: "to-pink-50",
      iconBg: "bg-purple-500",
    },
  ]
  