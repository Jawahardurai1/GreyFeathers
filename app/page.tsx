'use client';

import Link from 'next/link';
import { Star, ArrowRight, Menu, X, Search, ShoppingCart, User } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const brands = ['VERSACE', 'ZARA', 'GUCCI', 'PRADA', 'Calvin Klein'];
  
  const featuredProducts = [
    {
      id: 1,
      name: 'Gradient Graphic T-shirt',
      price: 145,
      originalPrice: null,
      rating: 3.5,
      reviews: 78,
      image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Polo with Tipping Details',
      price: 180,
      originalPrice: null,
      rating: 4.5,
      reviews: 92,
      image: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Black Striped T-shirt',
      price: 120,
      originalPrice: 160,
      rating: 5.0,
      reviews: 65,
      image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      name: 'Skinny Fit Jeans',
      price: 240,
      originalPrice: 260,
      rating: 3.5,
      reviews: 112,
      image: 'https://images.pexels.com/photos/1598509/pexels-photo-1598509.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : i < rating
            ? 'text-yellow-400 fill-current opacity-50'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        {/* Top banner */}
        <div className="bg-black text-white text-center py-2 text-sm relative">
          Sign up and get 20% off to your first order.{' '}
          <Link href="#" className="underline">
            Sign Up Now
          </Link>
          <button className="absolute right-4 top-2">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Main navigation */}
        <nav className="px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Logo */}
            <Link href="/" className="text-3xl font-bold">
              SHOP.CO
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/shop" className="hover:text-gray-600 transition-colors">
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

            {/* Search bar */}
            <div className="hidden md:flex items-center flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <Input 
                  placeholder="Search for products..." 
                  className="pl-10 bg-gray-50 border-0 rounded-full"
                />
              </div>
            </div>

            {/* User actions */}
            <div className="flex items-center space-x-4">
              <button className="lg:hidden">
                <Search className="w-5 h-5" />
              </button>
              <Link href="/cart">
                <ShoppingCart className="w-5 h-5" />
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

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <Link href="/shop" className="hover:text-gray-600 transition-colors">
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
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Browse through our diverse range of meticulously crafted garments, designed 
                to bring out your individuality and cater to your sense of style.
              </p>
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg rounded-full">
                Shop Now
              </Button>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl lg:text-4xl font-bold">200+</div>
                  <div className="text-gray-600 text-sm">International Brands</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold">2,000+</div>
                  <div className="text-gray-600 text-sm">High-Quality Products</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold">30,000+</div>
                  <div className="text-gray-600 text-sm">Happy Customers</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Fashion models"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-black rounded-full opacity-10"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-black rounded-full opacity-5"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand logos */}
      <section className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {brands.map((brand) => (
              <div key={brand} className="text-white text-xl lg:text-2xl font-bold text-center">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">NEW ARRIVALS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="group">
                <div className="bg-gray-50 rounded-lg overflow-hidden mb-4 aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-gray-600 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mb-2">
                  {renderStars(product.rating)}
                  <span className="text-sm text-gray-500">({product.reviews})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xl">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through">${product.originalPrice}</span>
                  )}
                  {product.originalPrice && (
                    <span className="text-red-500 text-sm">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" className="px-8 py-3 rounded-full">
              View All
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <div className="max-w-md mx-auto space-y-4">
            <Input 
              placeholder="Enter your email address"
              className="bg-white text-black rounded-full px-6 py-3"
            />
            <Button className="w-full bg-white text-black hover:bg-gray-100 rounded-full py-3">
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="text-3xl font-bold mb-4">SHOP.CO</div>
              <p className="text-gray-600 mb-6">
                We have clothes that suit your style and which you're proud to wear. 
                From women to men.
              </p>
              <div className="flex space-x-4">
                {/* Social icons would go here */}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">COMPANY</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-600 hover:text-black transition-colors">About</Link>
                <Link href="#" className="block text-gray-600 hover:text-black transition-colors">Features</Link>
                <Link href="#" className="block text-gray-600 hover:text-black transition-colors">Works</Link>
                <Link href="#" className="block text-gray-600 hover:text-black transition-colors">Career</Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">HELP</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-600 hover:text-black transition-colors">Customer Support</Link>
                <Link href="#" className="block text-gray-600 hover:text-black transition-colors">Delivery Details</Link>
                <Link href="#" className="block text-gray-600 hover:text-black transition-colors">Terms & Conditions</Link>
                <Link href="#" className="block text-gray-600 hover:text-black transition-colors">Privacy Policy</Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">FAQ</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-600 hover:text-black transition-colors">Account</Link>
                <Link href="#" className="block text-gray-600 hover:text-black transition-colors">Manage Deliveries</Link>
                <Link href="#" className="block text-gray-600 hover:text-black transition-colors">Orders</Link>
                <Link href="#" className="block text-gray-600 hover:text-black transition-colors">Payments</Link>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-16 pt-8 text-center text-gray-600">
            <p>Shop.co © 2000-2023, All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}