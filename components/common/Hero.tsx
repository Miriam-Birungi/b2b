import React from 'react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Truck, Shield, Zap, Globe2 } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="inline-block bg-orange-400 px-4 py-2 rounded-full text-sm">
                Africa's #1 B2B Marketplace
              </span>
              <h1 className="text-5xl leading-tight">
                Connect with <span className="text-yellow-300">Millions</span> of Buyers &amp; Suppliers
              </h1>
              <p className="text-xl text-orange-100">
                Discover quality products from verified African suppliers. Trade with confidence on TAfrika's secure platform.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3">
                Start Buying
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3">
                Start Selling
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl">2M+</div>
                <div className="text-orange-200 text-sm">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl">500K+</div>
                <div className="text-orange-200 text-sm">Suppliers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl">54</div>
                <div className="text-orange-200 text-sm">Countries</div>
              </div>
            </div>
          </div>

          {/* Right content - Featured image */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
              alt="African marketplace"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-4 -left-4 bg-white text-gray-800 p-4 rounded-lg shadow-lg">
              <div className="text-sm text-gray-600">New suppliers daily</div>
              <div className="text-2xl text-orange-600">+1,200</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white text-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center border-0 shadow-sm">
              <Truck className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="mb-2">Fast Shipping</h3>
              <p className="text-gray-600 text-sm">Quick delivery across Africa with trusted logistics partners</p>
            </Card>
            <Card className="p-6 text-center border-0 shadow-sm">
              <Shield className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="mb-2">Trade Assurance</h3>
              <p className="text-gray-600 text-sm">Secure payments and quality guarantee for all transactions</p>
            </Card>
            <Card className="p-6 text-center border-0 shadow-sm">
              <Zap className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="mb-2">One-Stop Service</h3>
              <p className="text-gray-600 text-sm">From sourcing to shipping, we handle everything</p>
            </Card>
            <Card className="p-6 text-center border-0 shadow-sm">
              <Globe2 className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="mb-2">Global Reach</h3>
              <p className="text-gray-600 text-sm">Connect with buyers and suppliers worldwide</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}