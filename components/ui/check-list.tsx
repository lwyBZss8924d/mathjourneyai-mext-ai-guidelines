import React, { useState } from 'react'

interface CheckListProps {
  items: string[]
  title: string
}

export function CheckList({ items, title }: CheckListProps) {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(items.length).fill(false));

  const toggleCheck = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  return (
    <div className="bg-[var(--background-white)] p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 animate-fade-in">
      <h3 className="text-xl font-bold text-[var(--brand-blue-mid)] mb-6">
        {title}
      </h3>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li 
            key={index} 
            className="flex items-start gap-4 group animate-slide-up" 
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="relative flex-shrink-0 mt-1">
              <button
                onClick={() => toggleCheck(index)}
                className="relative w-5 h-5 rounded border-2 border-[var(--brand-blue-start)] 
                         hover:border-[var(--brand-blue-mid)] focus:outline-none
                         focus:ring-2 focus:ring-[var(--brand-blue-mid)] focus:ring-offset-2
                         transition-colors duration-200 cursor-pointer
                         group/checkbox"
                aria-checked={checkedItems[index]}
                role="checkbox"
              >
                <div className={`
                  absolute inset-0 rounded-sm gradient-blue opacity-0 
                  transition-opacity duration-200 ease-in-out
                  ${checkedItems[index] ? 'opacity-100' : 'group-hover/checkbox:opacity-10'}
                `} />
                <svg 
                  className={`
                    absolute inset-0 h-4 w-4 m-auto text-[var(--text-white)]
                    transform transition-all duration-200 ease-in-out
                    ${checkedItems[index] ? 'scale-100' : 'scale-0'}
                  `}
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <span className={`
              text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] 
              transition-colors duration-200 leading-relaxed
              ${checkedItems[index] ? 'text-[var(--text-primary)]' : ''}
            `}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

