import { Globe } from 'lucide-react'

export default function TopBar() {
    return (
        <div className="bg-orange-500 text-white text-sm py-1">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <span>Welcome to TradeAfrika - Africa's Leading B2B Platform</span>
                </div>
                <div className="flex items-center space-x-4">
                    <Globe className="w-4 h-4" />
                    <span>English</span>
                    <span>Help</span>
                </div>
            </div>
        </div>
    )
}
