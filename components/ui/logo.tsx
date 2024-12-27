import React from 'react'
import Image from 'next/image'

interface LogoProps {
  className?: string
  width?: number
  height?: number
}

export function Logo({ className = '', width = 40, height = 40 }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/logo.svg"
        alt="MJ f(x) Logo"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </div>
  )
}

