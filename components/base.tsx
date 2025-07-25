"use client"

import React, { useState, useEffect } from 'react'
import { Header } from './common/Header/Header'
import { Hero } from './common/Hero'
import { ProductGrid } from './common/ProductGrid'
import { CategoryNav } from './common/CategoryNav'
import { Footer } from './common/Footer'
import { AuthModal } from './common/AuthModal'
import { ProductModal } from './common/ProductModal'
import { Cart } from './common/Cart'
import { UserDashboard } from './common/UserDashboard'

export interface Product {
    id: string
    name: string
    price: number
    minOrder: number
    supplier: string
    location: string
    category: string
    image: string
    description: string
    specifications: Record<string, string>
    isB2B: boolean
    rating: number
    reviews: number
}

export interface User {
    id: string
    name: string
    email: string
    type: 'buyer' | 'supplier'
    company?: string
    verified: boolean
}


export default function BasePage() {
    const [currentView, setCurrentView] = useState<'home' | 'dashboard' | 'cart'>('home')
    const [showAuthModal, setShowAuthModal] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
    const [user, setUser] = useState<User | null>(null)
    const [cart, setCart] = useState<(Product & { quantity: number })[]>([])
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

    // Mock authentication
    const handleLogin = (email: string, password: string, userType: 'buyer' | 'supplier') => {
        const mockUser: User = {
            id: '1',
            name: email.split('@')[0],
            email,
            type: userType,
            company: userType === 'supplier' ? 'Sample Company Ltd' : undefined,
            verified: true,
        }
        setUser(mockUser)
        setShowAuthModal(false)
    }

    const handleLogout = () => {
        setUser(null)
        setCurrentView('home')
    }

    const addToCart = (product: Product, quantity: number) => {
        setCart((prev) => {
            const existing = prev.find((p) => p.id === product.id)
            if (existing) {
                return prev.map((p) => (p.id === product.id ? { ...p, quantity: p.quantity + quantity } : p))
            }
            return [...prev, { ...product, quantity }]
        })
    }

    const removeFromCart = (productId: string) => {
        setCart((prev) => prev.filter((p) => p.id !== productId))
    }

    const updateCartQuantity = (productId: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(productId)
            return
        }
        setCart((prev) => prev.map((p) => (p.id === productId ? { ...p, quantity } : p)))
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Header
                user={user}
                cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
                onLoginClick={() => setShowAuthModal(true)}
                onLogout={handleLogout}
                onCartClick={() => setCurrentView('cart')}
                onDashboardClick={() => setCurrentView('dashboard')}
                onHomeClick={() => setCurrentView('home')}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
            />

            {currentView === 'home' && (
                <>
                    <Hero />
                    <CategoryNav selectedCategory={selectedCategory} onCategorySelect={setSelectedCategory} />
                    <ProductGrid
                        searchTerm={searchTerm}
                        selectedCategory={selectedCategory}
                        onProductSelect={setSelectedProduct}
                    />
                </>
            )}

            {currentView === 'dashboard' && user && <UserDashboard user={user} />}

            {currentView === 'cart' && (
                <Cart items={cart} onUpdateQuantity={updateCartQuantity} onRemoveItem={removeFromCart} user={user} />
            )}

            <Footer />

            {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} onLogin={handleLogin} />}

            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                    onAddToCart={addToCart}
                    user={user}
                />
            )}
        </div>
    )
}


