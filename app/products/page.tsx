'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Star, Filter, ChevronDown, Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';

const products = [
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
  },
  {
    id: 5,
    name: 'Checkered Shirt',
    price: 180,
    originalPrice: null,
    rating: 4.5,
    reviews: 89,
    image: 'https://images.pexels.com/photos/1656685/pexels-photo-1656685.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 6,
    name: 'Sleeve Striped T-shirt',
    price: 130,
    originalPrice: 160,
    rating: 4.5,
    reviews: 67,
    image: 'https://images.pexels.com/photos/1656686/pexels-photo-1656686.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export default function Products() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([50, 300]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('Most Popular');

  const colors = ['Green', 'Red', 'Yellow', 'Orange', 'Blue', 'Purple', 'Pink', 'Black'];
  const colorClasses: { [key: string]: string } = {
    Green: 'bg-green-500',
    Red: 'bg-red-500',
    Yellow: 'bg-yellow-500',
    Orange: 'bg-orange-500',
    Blue: 'bg-blue-500',
    Purple: 'bg-purple-500',
    Pink: 'bg-pink-500',
    Black: 'bg-black'
  };
  
  const sizes = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'];

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

  const toggleColor = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) 
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

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
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-black">Home</Link>
          {' > '}
          <span>Casual</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${isFiltersOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="border rounded-lg p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Filters</h3>
                <Filter className="w-5 h-5" />
              </div>

              {/* Category Filters */}
              <div>
                <h4 className="font-semibold mb-3">Categories</h4>
                <div className="space-y-2">
                  {['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'].map(category => (
                    <div key={category} className="flex items-center justify-between">
                      <span className="text-gray-600">{category}</span>
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h4 className="font-semibold mb-4">Price</h4>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={500}
                  min={0}
                  step={10}
                  className="mb-4"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              {/* Colors Filter */}
              <div>
                <h4 className="font-semibold mb-4">Colors</h4>
                <div className="grid grid-cols-5 gap-3">
                  {colors.map(color => (
                    <button
                      key={color}
                      onClick={() => toggleColor(color)}
                      className={`w-10 h-10 rounded-full border-2 ${colorClasses[color]} ${
                        selectedColors.includes(color) ? 'border-black' : 'border-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div>
                <h4 className="font-semibold mb-4">Size</h4>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`px-3 py-2 text-sm rounded-md border ${
                        selectedSizes.includes(size)
                          ? 'bg-black text-white border-black'
                          : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-300'
                      } transition-all`}
                    >
                      {size.replace('X-', 'X')}
                    </button>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-full">
                Apply Filter
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">
                Casual <span className="text-gray-500 font-normal">Showing 1-10 of 100 Products</span>
              </h1>
              <div className="flex items-center gap-4">
                <button
                  className="lg:hidden"
                  onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                >
                  <Filter className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Sort by:</span>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="text-sm border rounded px-2 py-1"
                  >
                    <option>Most Popular</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {products.map((product) => (
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

            {/* Load More */}
            <div className="text-center">
              <Button variant="outline" className="px-8 py-3 rounded-full">
                Load More Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function renderStars(rating: number) {
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
  }
}