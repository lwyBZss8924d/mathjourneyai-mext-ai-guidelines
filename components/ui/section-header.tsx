import React from 'react'

interface SectionHeaderProps {
  number: string
  title: string
  color?: 'blue' | 'orange' | 'accent'
}

export function SectionHeader({ number, title, color = 'blue' }: SectionHeaderProps) {
  const colorMap = {
    blue: 'from-[var(--brand-blue-start)] via-[var(--brand-blue-mid)] to-[var(--brand-blue-end)]',
    orange: 'from-[var(--brand-orange-start)] via-[var(--brand-orange-mid)] to-[var(--brand-orange-end)]',
    accent: 'from-[var(--brand-accent-start)] via-[var(--brand-accent-mid)] to-[var(--brand-accent-end)]'
  }

  return (
    <div className={`relative bg-gradient-to-r ${colorMap[color]} text-[var(--text-white)] px-6 py-5 flex items-center gap-4 rounded-t-xl group animate-fade-in`}>
      <span className="text-2xl lg:text-3xl font-bold opacity-90 min-w-[2ch] text-center transition-opacity group-hover:opacity-100">
        {number}
      </span>
      <div className="w-px h-8 bg-[var(--text-white)]/20 group-hover:bg-[var(--text-white)]/30 transition-colors" />
      <h2 className="text-xl lg:text-2xl font-medium tracking-tight">
        {title}
      </h2>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-t-xl" />
    </div>
  )
}

