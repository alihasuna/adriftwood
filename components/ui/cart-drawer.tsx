'use client'

import Image from 'next/image'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { useStore } from '@/lib/store'
import { formatPrice } from '@/lib/format'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './sheet'
import { Button } from './button'

export function CartDrawer() {
  const { cartItems, isCartOpen, setCartOpen, updateQuantity, removeFromCart } = useStore()

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <Sheet open={isCartOpen} onOpenChange={setCartOpen}>
      <SheetContent side="right" className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        {cartItems.length === 0 ? (
          <div className="flex flex-1 items-center justify-center">
            <p className="text-neutral-500 font-body">Your cart is empty</p>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto py-6 -mx-6 px-6">
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.size || ''}`} className="flex gap-4">
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-sm bg-neutral-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h4 className="text-sm font-body font-medium text-neutral-900">
                          {item.name}
                        </h4>
                        {item.size && (
                          <p className="mt-1 text-xs text-neutral-500">{item.size}</p>
                        )}
                        <p className="mt-1 text-sm font-body font-semibold text-neutral-900">
                          {formatPrice(item.price)}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="flex h-6 w-6 items-center justify-center rounded-sm border border-neutral-300 hover:bg-neutral-100 transition-colors ease-smooth"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-sm font-body font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="flex h-6 w-6 items-center justify-center rounded-sm border border-neutral-300 hover:bg-neutral-100 transition-colors ease-smooth"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-neutral-500 hover:text-red-600 transition-colors ease-smooth"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cart Footer */}
            <div className="border-t border-neutral-200 pt-6">
              <div className="flex justify-between mb-6">
                <span className="text-sm font-body font-medium text-neutral-600">
                  Subtotal
                </span>
                <span className="text-lg font-display font-semibold text-neutral-900">
                  {formatPrice(subtotal)}
                </span>
              </div>

              <Button className="w-full" size="lg">
                Proceed to Checkout
              </Button>

              <p className="mt-4 text-xs text-center text-neutral-500 font-body">
                Shipping and taxes calculated at checkout
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
