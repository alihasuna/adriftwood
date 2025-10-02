'use client'

import { Category } from '@/lib/products'
import { cn } from '@/lib/cn'

const categories: { value: Category | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'chairs', label: 'Chairs' },
  { value: 'tables', label: 'Tables' },
  { value: 'lamps', label: 'Lamps' },
  { value: 'shelves', label: 'Shelves' },
]

interface CategoryChipsProps {
  selected: Category | 'all'
  onChange: (category: Category | 'all') => void
}

export function CategoryChips({ selected, onChange }: CategoryChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => onChange(category.value)}
          className={cn(
            'px-4 py-2 rounded-full text-sm font-body font-medium transition-all ease-smooth',
            selected === category.value
              ? 'bg-brand-pine text-neutral-50'
              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
          )}
        >
          {category.label}
        </button>
      ))}
    </div>
  )
}
