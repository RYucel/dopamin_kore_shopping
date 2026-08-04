import React from 'react';
import { Category } from '../types';
import { Sparkles, Shirt, Gem, Footprints, Layers, Flame } from 'lucide-react';

interface CategoryBarProps {
  selectedCategory: Category;
  onSelectCategory: (cat: Category) => void;
}

export const CATEGORIES: { id: Category; label: string; icon: React.ReactNode; badge?: string }[] = [
  { id: 'hepsi', label: 'Tüm Ürünler', icon: <Sparkles className="w-4 h-4 text-orange-500" /> },
  { id: 'kadin-giyim', label: 'Kadın Giyim', icon: <Shirt className="w-4 h-4 text-pink-500" />, badge: 'Flaş' },
  { id: 'taki-aksesuar', label: 'Takı & Aksesuar', icon: <Gem className="w-4 h-4 text-amber-500" />, badge: 'VIP' },
  { id: 'erkek-giyim', label: 'Erkek Giyim', icon: <Shirt className="w-4 h-4 text-blue-500" /> },
  { id: 'ayakkabi-canta', label: 'Ayakkabı & Çanta', icon: <Footprints className="w-4 h-4 text-emerald-500" /> },
  { id: 'trend-kombinler', label: 'Trend Kombinler', icon: <Layers className="w-4 h-4 text-purple-500" />, badge: 'Yeni' },
];

export const CategoryBar: React.FC<CategoryBarProps> = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-[69px] z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar py-2.5 flex items-center gap-2">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isSelected
                  ? 'bg-orange-500 text-white shadow-sm scale-102'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
              {cat.badge && !isSelected && (
                <span className="bg-orange-100 text-orange-600 text-[10px] font-extrabold px-1.5 py-0.2 rounded-full border border-orange-200">
                  {cat.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
