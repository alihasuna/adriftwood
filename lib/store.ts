import { create } from 'zustand'

/**
 * Cart item interface
 */
export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  size?: string
}

/**
 * Store interface
 */
interface StoreState {
  // Cart state
  cartItems: CartItem[]
  isCartOpen: boolean
  addToCart: (item: Omit<CartItem, 'quantity'>) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  setCartOpen: (open: boolean) => void
  
  // UI state
  isMobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

/**
 * Global store using Zustand
 */
export const useStore = create<StoreState>((set) => ({
  // Cart initial state
  cartItems: [],
  isCartOpen: false,
  
  // Cart actions
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cartItems.find((i) => i.id === item.id && i.size === item.size)
      
      if (existingItem) {
        return {
          cartItems: state.cartItems.map((i) =>
            i.id === item.id && i.size === item.size
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
          isCartOpen: true,
        }
      }
      
      return {
        cartItems: [...state.cartItems, { ...item, quantity: 1 }],
        isCartOpen: true,
      }
    }),
    
  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),
    
  updateQuantity: (id, quantity) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    })),
    
  clearCart: () => set({ cartItems: [] }),
  
  setCartOpen: (open) => set({ isCartOpen: open }),
  
  // UI initial state
  isMobileMenuOpen: false,
  
  // UI actions
  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
}))
