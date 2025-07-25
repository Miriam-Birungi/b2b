import React, { useState, useMemo } from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Star, MapPin, Truck, Shield } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import type { Product } from '../base';

interface ProductGridProps {
  searchTerm: string;
  selectedCategory: string | null;
  onProductSelect: (product: Product) => void;
}

// Mock product data
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Cotton T-Shirts (100 pcs minimum)',
    price: 8.50,
    minOrder: 100,
    supplier: 'Lagos Textiles Ltd',
    location: 'Lagos, Nigeria',
    category: 'textiles',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
    description: 'High-quality 100% cotton t-shirts perfect for retail or promotional use.',
    specifications: {
      'Material': '100% Cotton',
      'Weight': '180gsm',
      'Sizes': 'S, M, L, XL, XXL',
      'Colors': '12 colors available'
    },
    isB2B: true,
    rating: 4.8,
    reviews: 245
  },
  {
    id: '2',
    name: 'Solar Panel 300W Monocrystalline',
    price: 120.00,
    minOrder: 10,
    supplier: 'Cairo Solar Solutions',
    location: 'Cairo, Egypt',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=300&h=300&fit=crop',
    description: 'High-efficiency solar panels with 25-year warranty. Perfect for residential and commercial use.',
    specifications: {
      'Power': '300W',
      'Efficiency': '22.1%',
      'Warranty': '25 years',
      'Dimensions': '1956×992×35mm'
    },
    isB2B: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: '3',
    name: 'Premium Shea Butter (Organic)',
    price: 15.00,
    minOrder: 1,
    supplier: 'Accra Natural Products',
    location: 'Accra, Ghana',
    category: 'beauty',
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=300&h=300&fit=crop',
    description: 'Pure, unrefined shea butter sourced directly from Ghana cooperatives.',
    specifications: {
      'Type': 'Unrefined',
      'Origin': 'Ghana',
      'Certification': 'Organic',
      'Packaging': '500g containers'
    },
    isB2B: false,
    rating: 4.7,
    reviews: 89
  },
  {
    id: '4',
    name: 'Industrial Rice Mill Machine',
    price: 15000.00,
    minOrder: 1,
    supplier: 'Durban Agricultural Equipment',
    location: 'Durban, South Africa',
    category: 'machinery',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=300&fit=crop',
    description: 'Complete rice processing solution with husking, whitening, and grading capabilities.',
    specifications: {
      'Capacity': '1000kg/hour',
      'Power': '15kW',
      'Material': 'Stainless Steel',
      'Warranty': '2 years'
    },
    isB2B: true,
    rating: 4.6,
    reviews: 23
  },
  {
    id: '5',
    name: 'Arabica Coffee Beans (Premium Grade)',
    price: 6.50,
    minOrder: 50,
    supplier: 'Ethiopian Coffee Exporters',
    location: 'Addis Ababa, Ethiopia',
    category: 'agriculture',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop',
    description: 'Single-origin Ethiopian Arabica coffee beans, washed and sun-dried.',
    specifications: {
      'Grade': 'Premium',
      'Processing': 'Washed',
      'Altitude': '1800-2200m',
      'Packaging': '60kg jute bags'
    },
    isB2B: true,
    rating: 4.9,
    reviews: 178
  },
  {
    id: '6',
    name: 'Handwoven Kente Cloth',
    price: 85.00,
    minOrder: 1,
    supplier: 'Kumasi Weavers Collective',
    location: 'Kumasi, Ghana',
    category: 'textiles',
    image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=300&h=300&fit=crop',
    description: 'Authentic handwoven Kente cloth with traditional patterns and vibrant colors.',
    specifications: {
      'Material': 'Silk & Cotton',
      'Size': '2m x 1.2m',
      'Pattern': 'Traditional Ashanti',
      'Handmade': 'Yes'
    },
    isB2B: false,
    rating: 4.8,
    reviews: 67
  }
];

export function ProductGrid({ searchTerm, selectedCategory, onProductSelect }: ProductGridProps) {
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'newest'>('newest');

  const filteredProducts = useMemo(() => {
    let filtered = mockProducts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.supplier.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Sort products
    switch (sortBy) {
      case 'price':
        return [...filtered].sort((a, b) => a.price - b.price);
      case 'rating':
        return [...filtered].sort((a, b) => b.rating - a.rating);
      default:
        return filtered;
    }
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl text-gray-800">
              {selectedCategory ? `${selectedCategory} Products` : 'Featured Products'}
            </h2>
            <p className="text-gray-600 mt-1">{filteredProducts.length} products found</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="newest">Newest</option>
              <option value="price">Price: Low to High</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onProductSelect(product)}>
              <div className="relative">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2">
                  <Badge variant={product.isB2B ? 'default' : 'secondary'} className="text-xs">
                    {product.isB2B ? 'B2B' : 'B2C'}
                  </Badge>
                </div>
                <div className="absolute top-2 right-2 bg-white bg-opacity-90 px-2 py-1 rounded text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span>{product.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-sm mb-2 line-clamp-2">{product.name}</h3>
                
                <div className="flex items-baseline space-x-2 mb-2">
                  <span className="text-2xl text-orange-600">${product.price}</span>
                  {product.isB2B && (
                    <span className="text-xs text-gray-500">Min: {product.minOrder} pcs</span>
                  )}
                </div>
                
                <div className="flex items-center space-x-1 text-gray-600 text-xs mb-2">
                  <MapPin className="w-3 h-3" />
                  <span>{product.location}</span>
                </div>
                
                <div className="text-xs text-gray-700 mb-3">{product.supplier}</div>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Truck className="w-3 h-3" />
                    <span>Fast shipping</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Shield className="w-3 h-3" />
                    <span>Trade assured</span>
                  </div>
                </div>
                
                <Button className="w-full mt-3" size="sm">
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-xl mb-2">No products found</div>
            <p className="text-gray-600">Try adjusting your search terms or browse different categories</p>
          </div>
        )}
      </div>
    </section>
  );
}