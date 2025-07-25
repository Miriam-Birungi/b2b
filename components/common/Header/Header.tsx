import React from 'react'
import { Search, ShoppingCart, User, Menu, Globe } from 'lucide-react'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { User as UserType } from '../../base'
import TopBar from './items/top-bar'

interface HeaderProps {
    user: UserType | null
    cartCount: number
    onLoginClick: () => void
    onLogout: () => void
    onCartClick: () => void
    onDashboardClick: () => void
    onHomeClick: () => void
    searchTerm: string
    onSearchChange: (term: string) => void
}

export function Header({
    user,
    cartCount,
    onLoginClick,
    onLogout,
    onCartClick,
    onDashboardClick,
    onHomeClick,
    searchTerm,
    onSearchChange,
}: HeaderProps) {
    return (
        <header className="bg-white shadow-sm border-b">
            {/* Top bar */}
            <TopBar/>

            {/* Main header */}
            <div className="max-w-7xl mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div
                        className="text-2xl text-orange-600 cursor-pointer flex items-center space-x-2"
                        onClick={onHomeClick}
                    >
                        <div className="bg-orange-600 text-white px-2 py-1 rounded">T</div>
                        <span>Trade Afrika</span>
                    </div>

                    {/* Search */}
                    <div className="flex-1 max-w-2xl mx-8 relative">
                        <Input
                            type="text"
                            placeholder="Search products, suppliers, categories..."
                            value={searchTerm}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="pl-4 pr-12 h-12 text-base border-2 border-orange-200 focus:border-orange-500"
                        />
                        <Button className="absolute right-0 top-0 h-12 px-6 bg-orange-500 hover:bg-orange-600">
                            <Search className="w-5 h-5" />
                        </Button>
                    </div>

                    {/* Right navigation */}
                    <div className="flex items-center space-x-4">
                        {user ? (
                            <div className="flex items-center space-x-4">
                                <Button
                                    variant="ghost"
                                    onClick={onDashboardClick}
                                    className="flex items-center space-x-2"
                                >
                                    <User className="w-5 h-5" />
                                    <span>{user.name}</span>
                                </Button>
                                <Button
                                    variant="ghost"
                                    onClick={onCartClick}
                                    className="relative flex items-center space-x-2"
                                >
                                    <ShoppingCart className="w-5 h-5" />
                                    {cartCount > 0 && (
                                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                            {cartCount}
                                        </span>
                                    )}
                                </Button>
                                <Button variant="outline" onClick={onLogout}>
                                    Sign Out
                                </Button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-2">
                                <Button variant="outline" onClick={onLoginClick}>
                                    Sign In
                                </Button>
                                <Button onClick={onLoginClick}>Join Free</Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Navigation menu */}
            <nav className="bg-gray-50 border-t">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center space-x-8 py-3">
                        <Button variant="ghost" className="flex items-center space-x-1">
                            <Menu className="w-4 h-4" />
                            <span>All Categories</span>
                        </Button>
                        <a href="#" className="text-gray-700 hover:text-orange-600">
                            Electronics
                        </a>
                        <a href="#" className="text-gray-700 hover:text-orange-600">
                            Machinery
                        </a>
                        <a href="#" className="text-gray-700 hover:text-orange-600">
                            Textiles
                        </a>
                        <a href="#" className="text-gray-700 hover:text-orange-600">
                            Agriculture
                        </a>
                        <a href="#" className="text-gray-700 hover:text-orange-600">
                            Chemicals
                        </a>
                        <a href="#" className="text-gray-700 hover:text-orange-600">
                            Construction
                        </a>
                        <div className="ml-auto">
                            <Button variant="ghost" className="text-orange-600">
                                Become a Supplier
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
