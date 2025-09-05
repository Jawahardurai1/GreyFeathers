'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  color: string;
  size: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeFromCart: (id: number, color: string, size: string) => void;
  updateQuantity: (id: number, color: string, size: string, quantity: number) => void;
  clearCart: () => void;
  getSubtotal: () => number;
  getTotal: () => number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      
      addToCart: (item) => {
        const { quantity = 1, ...itemWithoutQuantity } = item;
        set((state) => {
          const existingItemIndex = state.items.findIndex(
            (cartItem) =>
              cartItem.id === item.id &&
              cartItem.color === item.color &&
              cartItem.size === item.size
          );

          if (existingItemIndex > -1) {
            const updatedItems = [...state.items];
            updatedItems[existingItemIndex].quantity += quantity;
            return { items: updatedItems };
          } else {
            return {
              items: [...state.items, { ...itemWithoutQuantity, quantity }],
            };
          }
        });
      },

      removeFromCart: (id, color, size) => {
        set((state) => ({
          items: state.items.filter(
            (item) => !(item.id === id && item.color === color && item.size === size)
          ),
        }));
      },

      updateQuantity: (id, color, size, quantity) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id && item.color === color && item.size === size
              ? { ...item, quantity }
              : item
          ),
        }));
      },

      clearCart: () => {
        set({ items: [] });
      },

      getSubtotal: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
      },

      getTotal: () => {
        const subtotal = get().getSubtotal();
        const discount = subtotal * 0.2; // 20% discount
        const deliveryFee = 15;
        return Math.round(subtotal - discount + deliveryFee);
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);