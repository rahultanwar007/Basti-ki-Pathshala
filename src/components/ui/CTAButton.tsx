import Link from "next/link"
import React from "react"

const variants = {
  yellow: {
    solid: "bg-yellow-500 hover:bg-yellow-600 text-black shadow-lg",
    outline: "border-2 border-white text-white hover:bg-white hover:text-black",
  },
  white: {
    solid: "bg-white text-orange-600 hover:bg-gray-100 shadow-lg",
    outline: "border-2 border-white text-white hover:bg-white hover:text-orange-600",
  },
  orange: {
    solid: "bg-orange-500 hover:bg-orange-600 text-white shadow-lg",
    outline: "border-2 border-white text-white hover:bg-white hover:text-orange-600",
  },
} as const

type VariantColor = keyof typeof variants
type VariantType = keyof typeof variants["yellow"]

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: VariantType
  color?: VariantColor
}

const CTAButton: React.FC<CTAButtonProps> = ({
  href,
  children,
  variant = "solid",
  color = "yellow",
}) => {
  const baseStyle =
    "w-full sm:w-auto font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-center"

  return (
    <Link href={href} className={`${baseStyle} ${variants[color][variant]}`}>
      {children}
    </Link>
  )
}

export default CTAButton
