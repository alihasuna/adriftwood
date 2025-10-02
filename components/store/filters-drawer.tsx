'use client'

import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

interface FiltersDrawerProps {
  isOpen: boolean
  onClose: () => void
  priceRange: [number, number]
  setPriceRange: (range: [number, number]) => void
  selectedMaterials: string[]
  setSelectedMaterials: (materials: string[]) => void
}

const materials = ['Oak', 'Walnut', 'Maple', 'Ash', 'Ceramic', 'Steel']

export function FiltersDrawer({
  isOpen,
  onClose,
  priceRange,
  setPriceRange,
  selectedMaterials,
  setSelectedMaterials,
}: FiltersDrawerProps) {
  const toggleMaterial = (material: string) => {
    if (selectedMaterials.includes(material)) {
      setSelectedMaterials(selectedMaterials.filter((m) => m !== material))
    } else {
      setSelectedMaterials([...selectedMaterials, material])
    }
  }

  const resetFilters = () => {
    setPriceRange([0, 2000])
    setSelectedMaterials([])
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>

        <div className="mt-8 space-y-8">
          {/* Price Range */}
          <div>
            <Label className="text-base font-display font-semibold mb-4 block">
              Price Range
            </Label>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="flex-1 px-3 py-2 border border-neutral-300 rounded-sm text-sm font-body"
                  min={0}
                  max={priceRange[1]}
                />
                <span className="text-neutral-500">-</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="flex-1 px-3 py-2 border border-neutral-300 rounded-sm text-sm font-body"
                  min={priceRange[0]}
                  max={2000}
                />
              </div>
            </div>
          </div>

          {/* Materials */}
          <div>
            <Label className="text-base font-display font-semibold mb-4 block">
              Materials
            </Label>
            <div className="space-y-3">
              {materials.map((material) => (
                <label
                  key={material}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedMaterials.includes(material)}
                    onChange={() => toggleMaterial(material)}
                    className="h-4 w-4 rounded border-neutral-300 text-brand-pine focus:ring-brand-pine"
                  />
                  <span className="text-sm font-body text-neutral-700">
                    {material}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t border-neutral-200">
            <Button
              variant="outline"
              onClick={resetFilters}
              className="flex-1"
            >
              Reset
            </Button>
            <Button
              onClick={onClose}
              className="flex-1"
            >
              Apply
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
