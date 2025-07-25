import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Separator } from '../../components/ui/separator';
import { Trash2, Plus, Minus, ShoppingBag, CreditCard, Truck } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import type { Product, User } from '../base';

interface CartProps {
  items: (Product & { quantity: number })[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  user: User | null;
}

export function Cart({ items, onUpdateQuantity, onRemoveItem, user }: CartProps) {
  const [promoCode, setPromoCode] = useState('');

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 500 ? 0 : 25; // Free shipping over $500
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const handleCheckout = () => {
    // Mock checkout process
    alert('Checkout functionality would be implemented with Supabase backend!');
  };

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Card className="text-center py-12">
          <CardContent>
            <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Start shopping to add items to your cart</p>
            <Button>Continue Shopping</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl">Shopping Cart</h1>
            <span className="text-gray-600">{items.length} items</span>
          </div>

          {items.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg mb-1">{item.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">{item.supplier}</p>
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant={item.isB2B ? 'default' : 'secondary'} className="text-xs">
                            {item.isB2B ? 'B2B' : 'B2C'}
                          </Badge>
                          {item.isB2B && (
                            <span className="text-xs text-gray-500">Min: {item.minOrder} pcs</span>
                          )}
                        </div>
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-gray-600">Quantity:</span>
                        <div className="flex items-center border rounded">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= (item.minOrder || 1)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <Input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value) || 1)}
                            className="w-16 text-center border-0 focus:ring-0"
                            min={item.minOrder || 1}
                          />
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-lg">${(item.price * item.quantity).toFixed(2)}</div>
                        <div className="text-sm text-gray-500">${item.price} each</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="flex items-center space-x-1">
                  <Truck className="w-4 h-4" />
                  <span>Shipping</span>
                </span>
                <span className={shipping === 0 ? 'text-green-600' : ''}>
                  {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              
              <Separator />
              
              <div className="flex justify-between text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              
              {shipping > 0 && (
                <p className="text-sm text-gray-600">
                  Add ${(500 - subtotal).toFixed(2)} more for free shipping
                </p>
              )}
            </CardContent>
          </Card>

          {/* Promo Code */}
          <Card>
            <CardContent className="p-4">
              <div className="flex space-x-2">
                <Input
                  placeholder="Promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <Button variant="outline">Apply</Button>
              </div>
            </CardContent>
          </Card>

          {/* Checkout Button */}
          <Button 
            className="w-full h-12" 
            onClick={handleCheckout}
            disabled={!user}
          >
            <CreditCard className="w-5 h-5 mr-2" />
            Proceed to Checkout
          </Button>
          
          {!user && (
            <p className="text-sm text-gray-600 text-center">
              Please sign in to proceed with checkout
            </p>
          )}

          {/* Security badges */}
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
              <span className="flex items-center space-x-1">
                <Truck className="w-4 h-4" />
                <span>Fast shipping</span>
              </span>
              <span className="flex items-center space-x-1">
                <CreditCard className="w-4 h-4" />
                <span>Secure payment</span>
              </span>
            </div>
            <p className="text-xs text-gray-500">
              256-bit SSL encryption • Secure checkout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}