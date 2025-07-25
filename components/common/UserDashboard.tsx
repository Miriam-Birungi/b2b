import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Avatar, AvatarFallback } from '../../components/ui/avatar';
import { 
  User, 
  Package, 
  Heart, 
  Settings, 
  Bell, 
  ShoppingBag, 
  TrendingUp,
  Star,
  MapPin,
  Calendar,
  DollarSign
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import type { User as UserType } from '../base';

interface UserDashboardProps {
  user: UserType;
}

// Mock data for demonstration
const mockOrders = [
  {
    id: 'ORD-001',
    date: '2024-01-15',
    status: 'delivered',
    total: 425.50,
    items: 3,
    supplier: 'Lagos Textiles Ltd'
  },
  {
    id: 'ORD-002',
    date: '2024-01-10',
    status: 'shipped',
    total: 1250.00,
    items: 1,
    supplier: 'Cairo Solar Solutions'
  },
  {
    id: 'ORD-003',
    date: '2024-01-05',
    status: 'processing',
    total: 89.99,
    items: 2,
    supplier: 'Accra Natural Products'
  }
];

const mockWishlist = [
  {
    id: '1',
    name: 'Premium Cotton T-Shirts',
    price: 8.50,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=150&h=150&fit=crop',
    supplier: 'Lagos Textiles Ltd'
  },
  {
    id: '2',
    name: 'Solar Panel 300W',
    price: 120.00,
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=150&h=150&fit=crop',
    supplier: 'Cairo Solar Solutions'
  }
];

export function UserDashboard({ user }: UserDashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'shipped': return 'bg-blue-100 text-blue-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center space-x-4 mb-8">
        <Avatar className="w-16 h-16">
          <AvatarFallback className="text-xl">
            {user.name.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl">Welcome back, {user.name}!</h1>
          <p className="text-gray-600">
            {user.type === 'supplier' ? 'Supplier Account' : 'Buyer Account'}
            {user.company && ` • ${user.company}`}
          </p>
          {user.verified && (
            <Badge className="mt-1 bg-green-100 text-green-800">
              Verified Account
            </Badge>
          )}
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Orders</p>
                    <p className="text-2xl">23</p>
                  </div>
                  <ShoppingBag className="w-8 h-8 text-orange-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Spent</p>
                    <p className="text-2xl">$3,456</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-green-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Wishlist Items</p>
                    <p className="text-2xl">12</p>
                  </div>
                  <Heart className="w-8 h-8 text-red-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Saved Amount</p>
                    <p className="text-2xl">$234</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockOrders.slice(0, 3).map((order) => (
                    <div key={order.id} className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm">#{order.id}</span>
                          <Badge 
                            variant="outline" 
                            className={getStatusColor(order.status)}
                          >
                            {order.status}
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">{order.supplier}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm">${order.total}</div>
                        <div className="text-xs text-gray-600">{order.items} items</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Orders
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommended for You</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockWishlist.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm truncate">{item.name}</p>
                        <p className="text-xs text-gray-600">{item.supplier}</p>
                      </div>
                      <div className="text-sm">${item.price}</div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View Recommendations
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="orders" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Order History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockOrders.map((order) => (
                  <div key={order.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-4">
                        <div>
                          <div className="flex items-center space-x-2">
                            <span>#{order.id}</span>
                            <Badge 
                              variant="outline" 
                              className={getStatusColor(order.status)}
                            >
                              {order.status}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                            <span className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>{order.date}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <MapPin className="w-3 h-3" />
                              <span>{order.supplier}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg">${order.total}</div>
                        <div className="text-sm text-gray-600">{order.items} items</div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        Track Order
                      </Button>
                      {order.status === 'delivered' && (
                        <Button variant="outline" size="sm">
                          Review
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wishlist" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>My Wishlist</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mockWishlist.map((item) => (
                  <div key={item.id} className="border rounded-lg p-4">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-32 object-cover rounded mb-3"
                    />
                    <h3 className="text-sm mb-1 truncate">{item.name}</h3>
                    <p className="text-xs text-gray-600 mb-2">{item.supplier}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg text-orange-600">${item.price}</span>
                      <Button size="sm">Add to Cart</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>Account Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm text-gray-600">Name</label>
                  <p className="text-lg">{user.name}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Email</label>
                  <p className="text-lg">{user.email}</p>
                </div>
                {user.company && (
                  <div>
                    <label className="text-sm text-gray-600">Company</label>
                    <p className="text-lg">{user.company}</p>
                  </div>
                )}
                <div>
                  <label className="text-sm text-gray-600">Account Type</label>
                  <p className="text-lg capitalize">{user.type}</p>
                </div>
                <Button>Edit Profile</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="w-5 h-5" />
                  <span>Preferences</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p>Email Notifications</p>
                    <p className="text-sm text-gray-600">Receive updates about your orders</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Bell className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p>Marketing Emails</p>
                    <p className="text-sm text-gray-600">Promotional offers and news</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Bell className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p>SMS Notifications</p>
                    <p className="text-sm text-gray-600">Order updates via SMS</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Bell className="w-4 h-4" />
                  </Button>
                </div>
                <Button>Save Preferences</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}