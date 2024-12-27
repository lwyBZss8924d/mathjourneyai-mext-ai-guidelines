import React, { useState } from 'react';

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export function Collapsible({ title, children, defaultOpen = false, className = '' }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`bg-[var(--background-white)] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-[var(--background-light)] transition-colors duration-200 group focus-ring"
      >
        <h3 className="font-bold text-lg text-[var(--text-primary)] group-hover:text-[var(--brand-blue-mid)] transition-colors">
          {title}
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 text-[var(--text-tertiary)] group-hover:text-[var(--brand-blue-mid)] transform transition-all duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="p-5 border-t border-[var(--text-tertiary)]/10">
          {children}
        </div>
      </div>
    </div>
  );
} 