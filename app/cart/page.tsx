'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Minus, Plus, Trash2, ShoppingCart, User, Menu, X, Search, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/hooks/use-cart';

export default function Cart() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items, updateQuantity, removeFromCart, getTotal, getSubtotal } = useCart();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="bg-black text-white text-center py-2 text-sm relative">
          Sign up and get 20% off to your first order.{' '}
          <Link href="#" className="underline">
            Sign Up Now
          </Link>
          <button className="absolute right-4 top-2">
            <X className="w-4 h-4" />
          </button>
        </div>

        <nav className="px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <Link href="/" className="text-3xl font-bold">
              SHOP.CO
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/products" className="hover:text-gray-600 transition-colors">
                Shop
              </Link>
              <Link href="/sale" className="hover:text-gray-600 transition-colors">
                On Sale
              </Link>
              <Link href="/arrivals" className="hover:text-gray-600 transition-colors">
                New Arrivals
              </Link>
              <Link href="/brands" className="hover:text-gray-600 transition-colors">
                Brands
              </Link>
            </div>

            <div className="hidden md:flex items-center flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <Input 
                  placeholder="Search for products..." 
                  className="pl-10 bg-gray-50 border-0 rounded-full"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="lg:hidden">
                <Search className="w-5 h-5" />
              </button>
              <Link href="/cart" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {items.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </Link>
              <User className="w-5 h-5" />
              <button
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-black">Home</Link>
          {' > '}
          <span>Cart</span>
        </div>

        <h1 className="text-3xl font-bold mb-8">YOUR CART</h1>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <div className="mb-8">
              <ShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">Your cart is empty</h2>
              <p className="text-gray-500">Looks like you haven't added anything to your cart yet.</p>
            </div>
            <Link href="/products">
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-full">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.color}-${item.size}`} className="border rounded-lg p-6">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg truncate pr-4">{item.name}</h3>
                        <button
                          onClick={() => removeFromCart(item.id, item.color, item.size)}
                          className="text-red-500 hover:text-red-700 transition-colors p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="text-sm text-gray-600 mb-3">
                        Color: {item.color} | Size: {item.size}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xl">${item.price}</span>
                        
                        <div className="flex items-center border rounded-full bg-gray-50">
                          <button
                            onClick={() => updateQuantity(item.id, item.color, item.size, Math.max(1, item.quantity - 1))}
                            className="p-2 hover:bg-gray-100 rounded-full"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 py-2 font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.color, item.size, item.quantity + 1)}
                            className="p-2 hover:bg-gray-100 rounded-full"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="border rounded-lg p-6 sticky top-8">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">${getSubtotal()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Discount (-20%)</span>
                    <span className="font-semibold text-red-500">-${Math.round(getSubtotal() * 0.2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span className="font-semibold">$15</span>
                  </div>
                  <hr />
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span>${getTotal()}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Add promo code"
                      className="flex-1 rounded-full bg-gray-50 border-0"
                    />
                    <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6">
                      Apply
                    </Button>
                  </div>
                  
                  <Button className="w-full bg-black text-white hover:bg-gray-800 py-6 rounded-full text-lg font-semibold flex items-center justify-center gap-2">
                    Go to Checkout
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}