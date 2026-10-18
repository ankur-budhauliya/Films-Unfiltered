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
    <div className="w-full">
      <div
        role="group"
        aria-label="Filter by creative discipline"
        className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none flex-wrap"
      >
        {categories.map((cat) => {
          const Icon = iconMap[cat.icon] || Sparkles;
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
              className={`group flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer border focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3366] ${
                isSelected
                  ? 'bg-gradient-to-r from-[#FF3366] to-[#FF7048] text-white border-transparent shadow-lg shadow-[#FF3366]/30 scale-105'
                  : 'bg-[#101722]/80 text-[#A5ACB8] border-white/10 hover:border-white/25 hover:text-[#F7F7F8] hover:bg-[#101722] hover:-translate-y-0.5'
              }`}
            >
              {isSelected ? (
                <Check className="w-3.5 h-3.5 text-white" aria-hidden="true" />
              ) : (
                <Icon
                  className="w-3.5 h-3.5 text-[#FF3366] group-hover:scale-110 transition-transform"
                  aria-hidden="true"
                />
              )}
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
