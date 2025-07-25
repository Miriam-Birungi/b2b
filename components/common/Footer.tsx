import React from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Separator } from '../../components/ui/separator';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Globe
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter */}
      <div className="bg-orange-600 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl mb-2">Stay Connected with TAfrika</h3>
              <p className="text-orange-100">Get the latest deals and supplier updates directly in your inbox</p>
            </div>
            <div className="flex space-x-2 w-full md:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-gray-900 border-0 flex-1 md:w-64"
              />
              <Button variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-orange-600 text-white px-2 py-1 rounded">T</div>
                <span className="text-xl">TAfrika</span>
              </div>
              <p className="text-gray-400 mb-4">
                Africa's leading B2B marketplace connecting millions of buyers and suppliers across the continent.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            {/* For Buyers */}
            <div>
              <h4 className="text-lg mb-4">For Buyers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Browse Products</a></li>
                <li><a href="#" className="hover:text-white">Find Suppliers</a></li>
                <li><a href="#" className="hover:text-white">Request for Quotation</a></li>
                <li><a href="#" className="hover:text-white">Trade Assurance</a></li>
                <li><a href="#" className="hover:text-white">Buyer Protection</a></li>
                <li><a href="#" className="hover:text-white">Payment &amp; Shipping</a></li>
              </ul>
            </div>

            {/* For Suppliers */}
            <div>
              <h4 className="text-lg mb-4">For Suppliers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Start Selling</a></li>
                <li><a href="#" className="hover:text-white">Supplier Membership</a></li>
                <li><a href="#" className="hover:text-white">Learning Center</a></li>
                <li><a href="#" className="hover:text-white">Success Stories</a></li>
                <li><a href="#" className="hover:text-white">Advertising</a></li>
                <li><a href="#" className="hover:text-white">Partner Program</a></li>
              </ul>
            </div>

            {/* Support & Contact */}
            <div>
              <h4 className="text-lg mb-4">Support &amp; Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+27 11 123 4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>support@tafrika.com</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-1" />
                  <span>123 Business District<br />Johannesburg, South Africa</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Globe className="w-4 h-4" />
                  <span>24/7 Customer Support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Footer */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 TAfrika. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Cookie Policy</a>
              <a href="#" className="hover:text-white">Intellectual Property</a>
              <a href="#" className="hover:text-white">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}