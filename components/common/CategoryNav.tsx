import React from 'react';
import { Button } from '../../components/ui/button';
import { 
  Smartphone, 
  Cog, 
  Shirt, 
  Wheat, 
  TestTube, 
  HardHat,
  Car,
  Home,
  Palette,
  Heart
} from 'lucide-react';

interface CategoryNavProps {
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

const categories = [
  { id: 'electronics', name: 'Electronics', icon: Smartphone },
  { id: 'machinery', name: 'Machinery', icon: Cog },
  { id: 'textiles', name: 'Textiles & Apparel', icon: Shirt },
  { id: 'agriculture', name: 'Agriculture', icon: Wheat },
  { id: 'chemicals', name: 'Chemicals', icon: TestTube },
  { id: 'construction', name: 'Construction', icon: HardHat },
  { id: 'automotive', name: 'Automotive', icon: Car },
  { id: 'home', name: 'Home & Garden', icon: Home },
  { id: 'beauty', name: 'Beauty & Personal Care', icon: Palette },
  { id: 'health', name: 'Health & Medical', icon: Heart },
];

export function CategoryNav({ selectedCategory, onCategorySelect }: CategoryNavProps) {
  return (
    <section className="bg-white py-6 border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl text-gray-800">Shop by Category</h2>
          <Button 
            variant={selectedCategory === null ? 'default' : 'outline'}
            onClick={() => onCategorySelect(null)}
          >
            All Categories
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isSelected = selectedCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => onCategorySelect(category.id)}
                className={`p-4 rounded-lg border-2 transition-all hover:shadow-md ${
                  isSelected 
                    ? 'border-orange-500 bg-orange-50 text-orange-700' 
                    : 'border-gray-200 hover:border-orange-300 text-gray-700'
                }`}
              >
                <IconComponent className={`w-8 h-8 mx-auto mb-2 ${
                  isSelected ? 'text-orange-500' : 'text-gray-500'
                }`} />
                <div className="text-sm text-center">{category.name}</div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}