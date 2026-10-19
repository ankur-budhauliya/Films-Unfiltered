import React from 'react';
import { Mic, Disc3, Clapperboard, Sparkles, Activity, Video, Check } from 'lucide-react';

const iconMap = {
  Mic,
  Disc3,
  Clapperboard,
  Sparkles,
  Activity,
  Video,
};

export default function CategoryChips({ categories, selectedCategoryId, onSelectCategory }) {
  const handleKeyDown = (e, cat) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelectCategory(cat);
    }
  };

  return (
    <div className="w-full flex flex-wrap items-center gap-2 pt-1">
      <span className="text-xs text-[#B3B3B3] font-medium mr-1 select-none">
        Popular searches:
      </span>
      <div
        role="group"
        aria-label="Filter by popular creative discipline"
        className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none flex-wrap"
      >
        {categories.map((cat) => {
          const isSelected = selectedCategoryId === cat.id;

          return (
            <button
              key={cat.id}
              type="button"
              role="button"
              tabIndex={0}
              aria-pressed={isSelected}
              onClick={() => onSelectCategory(cat)}
              onKeyDown={(e) => handleKeyDown(e, cat)}
              className={`group flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer border focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F45132] ${
                isSelected
                  ? 'bg-[#F45132] text-white border-transparent shadow-md shadow-[#F45132]/30 scale-105'
                  : 'bg-[#141414] text-[#B3B3B3] border-white/10 hover:border-white/25 hover:text-white hover:bg-[#1C1C1C]'
              }`}
            >
              {isSelected && <Check className="w-3 h-3 text-white" aria-hidden="true" />}
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
