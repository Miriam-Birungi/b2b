import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../../components/ui/dialog';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Badge } from '../../components/ui/badge';
import { Card, CardContent } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Star, MapPin, Truck, Shield, Heart, Share2, Minus, Plus, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import type { Product, User } from '../base';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  user: User | null;
}

export function ProductModal({ product, onClose, onAddToCart, user }: ProductModalProps) {
  const [quantity, setQuantity] = useState(product.minOrder || 1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock additional images
  const images = [product.image, product.image, product.image];

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  const handleQuantityChange = (delta: number) => {
    const newQuantity = Math.max(product.minOrder || 1, quantity + delta);
    setQuantity(newQuantity);
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">Product Details</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Images */}
          <div className="space-y-4">
            <div className="relative">
              <ImageWithFallback
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <Button variant="outline" size="sm" className="bg-white/80">
                  <Heart className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="bg-white/80">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div className="flex space-x-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded border-2 overflow-hidden ${
                    selectedImage === index ? 'border-orange-500' : 'border-gray-200'
                  }`}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`Product image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <Badge variant={product.isB2B ? 'default' : 'secondary'}>
                  {product.isB2B ? 'B2B' : 'B2C'}
                </Badge>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">{product.rating}</span>
                  <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                </div>
              </div>
              
              <h1 className="text-2xl mb-4">{product.name}</h1>
              
              <div className="flex items-baseline space-x-4 mb-4">
                <span className="text-3xl text-orange-600">${product.price}</span>
                {product.isB2B && (
                  <span className="text-gray-600">Minimum order: {product.minOrder} pieces</span>
                )}
              </div>
            </div>

            {/* Supplier Info */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500">Supplied by</div>
                    <div className="text-lg">{product.supplier}</div>
                    <div className="flex items-center space-x-1 text-gray-600 text-sm">
                      <MapPin className="w-3 h-3" />
                      <span>{product.location}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Label>Quantity:</Label>
                <div className="flex items-center border rounded">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= (product.minOrder || 1)}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <Input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(product.minOrder || 1, parseInt(e.target.value) || 1))}
                    className="w-20 text-center border-0 focus:ring-0"
                    min={product.minOrder || 1}
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleQuantityChange(1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="text-sm text-gray-600">
                Total: ${(product.price * quantity).toFixed(2)}
              </div>

              <div className="flex space-x-3">
                <Button className="flex-1" onClick={handleAddToCart} disabled={!user}>
                  Add to Cart
                </Button>
                <Button variant="outline" className="flex-1" disabled={!user}>
                  Buy Now
                </Button>
              </div>

              {!user && (
                <p className="text-sm text-gray-600 text-center">
                  Please sign in to purchase products
                </p>
              )}
            </div>

            {/* Features */}
            <div className="flex items-center justify-between text-sm text-gray-600 bg-gray-50 p-3 rounded">
              <div className="flex items-center space-x-1">
                <Truck className="w-4 h-4" />
                <span>Fast shipping</span>
              </div>
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4" />
                <span>Trade assured</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs for additional info */}
        <Tabs defaultValue="description" className="mt-8">
          <TabsList>
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-4">
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specifications" className="mt-4">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">{key}:</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-4">
            <Card>
              <CardContent className="p-6">
                <div className="text-center text-gray-600">
                  <div className="text-4xl mb-2">{product.rating}</div>
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 ${
                          star <= Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <div>Based on {product.reviews} reviews</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}