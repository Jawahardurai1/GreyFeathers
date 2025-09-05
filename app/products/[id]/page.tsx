'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Star, Minus, Plus, ShoppingCart, User, Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/hooks/use-cart';

const product = {
  id: 1,
  name: 'ONE LIFE GRAPHIC T-SHIRT',
  price: 260,
  originalPrice: 300,
  rating: 4.5,
  reviews: 451,
  description: 'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
  images: [
    'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=800'
  ],
  colors: ['Green', 'Navy', 'Black'],
  sizes: ['Small', 'Medium', 'Large', 'X-Large']
};

const reviews = [
  {
    id: 1,
    name: 'Samantha D.',
    rating: 5,
    comment: 'I absolutely love this t-shirt! The fabric is so soft and the fit is perfect. I\'m definitely getting more colors.',
    date: 'Posted on August 14, 2023'
  },
  {
    id: 2,
    name: 'Alex M.',
    rating: 4,
    comment: 'Great quality and fast shipping. The graphic is really cool and hasn\'t faded after washing.',
    date: 'Posted on August 15, 2023'
  },
  {
    id: 3,
    name: 'Ethan R.',
    rating: 4,
    comment: 'Nice t-shirt, fits true to size. The material is comfortable and breathable.',
    date: 'Posted on August 16, 2023'
  }
];

const relatedProducts = [
  {
    id: 2,
    name: 'Polo with Contrast Trims',
    price: 212,
    originalPrice: 242,
    rating: 4.0,
    image: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 3,
    name: 'Gradient Graphic T-shirt',
    price: 145,
    originalPrice: null,
    rating: 3.5,
    image: 'https://images.pexels.com/photos/1656685/pexels-photo-1656685.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 4,
    name: 'Polo with Tipping Details',
    price: 180,
    originalPrice: null,
    rating: 4.5,
    image: 'https://images.pexels.com/photos/1656686/pexels-photo-1656686.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 5,
    name: 'Black Striped T-shirt',
    price: 120,
    originalPrice: 160,
    rating: 5.0,
    image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('Green');
  const [selectedSize, setSelectedSize] = useState('Large');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');
  
  const { addToCart } = useCart();

  const colorClasses: { [key: string]: string } = {
    Green: 'bg-green-600',
    Navy: 'bg-blue-900',
    Black: 'bg-black'
  };

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

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      color: selectedColor,
      size: selectedSize,
      quantity
    });
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
        <div className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-black">Home</Link>
          {' > '}
          <Link href="/products" className="hover:text-black">Shop</Link>
          {' > '}
          <Link href="/products" className="hover:text-black">Men</Link>
          {' > '}
          <span>T-shirts</span>
        </div>

        {/* Product Detail */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-50 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-black' : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">{product.name}</h1>
              <div className="flex items-center gap-1 mb-4">
                {renderStars(product.rating)}
                <span className="text-sm text-gray-500 ml-2">{product.rating}/5</span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold">${product.price}</span>
                <span className="text-2xl text-gray-400 line-through">${product.originalPrice}</span>
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                  -{Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)}%
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold mb-3">Select Colors</h3>
              <div className="flex gap-3">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 ${colorClasses[color]} ${
                      selectedColor === color ? 'border-black scale-110' : 'border-gray-200'
                    } transition-all`}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold mb-3">Choose Size</h3>
              <div className="grid grid-cols-4 gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-3 text-sm rounded-md border ${
                      selectedSize === size
                        ? 'bg-black text-white border-black'
                        : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-300'
                    } transition-all`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex gap-4">
              <div className="flex items-center border rounded-full bg-gray-50">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-gray-100 rounded-full"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-3 font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-gray-100 rounded-full"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <Button 
                onClick={handleAddToCart}
                className="flex-1 bg-black text-white hover:bg-gray-800 py-6 rounded-full text-lg font-semibold"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b mb-8">
          <div className="flex space-x-8">
            {['Product Details', 'Rating & Reviews', 'FAQs'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase().replace(' ', '-').replace('&-', ''))}
                className={`py-4 px-2 border-b-2 transition-colors ${
                  activeTab === tab.toLowerCase().replace(' ', '-').replace('&-', '')
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-500 hover:text-black'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold">
              All Reviews ({reviews.length})
            </h3>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="rounded-full">
                Latest
              </Button>
              <Button className="bg-black text-white hover:bg-gray-800 rounded-full">
                Write a Review
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map(review => (
              <div key={review.id} className="border rounded-lg p-6">
                <div className="flex items-center gap-1 mb-3">
                  {renderStars(review.rating)}
                </div>
                <h4 className="font-semibold mb-2">{review.name}</h4>
                <p className="text-gray-600 mb-3 leading-relaxed">{review.comment}</p>
                <p className="text-sm text-gray-400">{review.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* You Might Also Like */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">YOU MIGHT ALSO LIKE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`} className="group">
                <div className="bg-gray-50 rounded-lg overflow-hidden mb-4 aspect-square">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-gray-600 transition-colors">
                  {relatedProduct.name}
                </h3>
                <div className="flex items-center gap-1 mb-2">
                  {renderStars(relatedProduct.rating)}
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xl">${relatedProduct.price}</span>
                  {relatedProduct.originalPrice && (
                    <span className="text-gray-400 line-through">${relatedProduct.originalPrice}</span>
                  )}
                  {relatedProduct.originalPrice && (
                    <span className="text-red-500 text-sm">
                      -{Math.round(((relatedProduct.originalPrice - relatedProduct.price) / relatedProduct.originalPrice) * 100)}%
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
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