import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../../components/ui/dialog';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Building, User, Mail, Lock, Eye, EyeOff } from 'lucide-react';

interface AuthModalProps {
  onClose: () => void;
  onLogin: (email: string, password: string, userType: 'buyer' | 'supplier') => void;
}

export function AuthModal({ onClose, onLogin }: AuthModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    userType: 'buyer' as 'buyer' | 'supplier'
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(formData.email, formData.password, formData.userType);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd validate passwords match, etc.
    onLogin(formData.email, formData.password, formData.userType);
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl text-orange-600">Welcome to TAfrika</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Sign In</TabsTrigger>
            <TabsTrigger value="register">Join Free</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Sign In</CardTitle>
                <CardDescription>Enter your credentials to access your account</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="login-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="pl-10 pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Account Type</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        type="button"
                        variant={formData.userType === 'buyer' ? 'default' : 'outline'}
                        className="justify-start"
                        onClick={() => setFormData({ ...formData, userType: 'buyer' })}
                      >
                        <User className="w-4 h-4 mr-2" />
                        Buyer
                      </Button>
                      <Button
                        type="button"
                        variant={formData.userType === 'supplier' ? 'default' : 'outline'}
                        className="justify-start"
                        onClick={() => setFormData({ ...formData, userType: 'supplier' })}
                      >
                        <Building className="w-4 h-4 mr-2" />
                        Supplier
                      </Button>
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    Sign In
                  </Button>

                  <div className="text-center text-sm text-gray-600">
                    <a href="#" className="text-orange-600 hover:underline">Forgot password?</a>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Create Account</CardTitle>
                <CardDescription>Join thousands of buyers and suppliers on TAfrika</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label>Account Type</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        type="button"
                        variant={formData.userType === 'buyer' ? 'default' : 'outline'}
                        className="justify-start"
                        onClick={() => setFormData({ ...formData, userType: 'buyer' })}
                      >
                        <User className="w-4 h-4 mr-2" />
                        Buyer
                      </Button>
                      <Button
                        type="button"
                        variant={formData.userType === 'supplier' ? 'default' : 'outline'}
                        className="justify-start"
                        onClick={() => setFormData({ ...formData, userType: 'supplier' })}
                      >
                        <Building className="w-4 h-4 mr-2" />
                        Supplier
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="register-email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  {formData.userType === 'supplier' && (
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="company"
                          type="text"
                          placeholder="Enter your company name"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="register-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="register-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="pl-10 pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="confirm-password"
                        type="password"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    Create Account
                  </Button>

                  <div className="text-xs text-gray-600 text-center">
                    By creating an account, you agree to our{' '}
                    <a href="#" className="text-orange-600 hover:underline">Terms of Service</a>{' '}
                    and{' '}
                    <a href="#" className="text-orange-600 hover:underline">Privacy Policy</a>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}