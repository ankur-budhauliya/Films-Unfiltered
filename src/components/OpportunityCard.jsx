import React from 'react';
import { MapPin, ArrowUpRight, Sparkles } from 'lucide-react';

export default function OpportunityCard({ opportunity, onSelect }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (onSelect) onSelect(opportunity);
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={`${opportunity.title}, ${opportunity.categoryLabel} in ${opportunity.location}. Click to view opportunity details.`}
      onClick={() => onSelect && onSelect(opportunity)}
      onKeyDown={handleKeyDown}
      className="group relative h-[380px] sm:h-[400px] rounded-3xl overflow-hidden bg-[#101010] border border-white/12 hover:border-[#F45132]/60 transition-all duration-300 hover:-translate-y-1.5 shadow-[0_20px_45px_rgba(0,0,0,0.85)] hover:shadow-[0_25px_60px_-10px_rgba(244,81,50,0.25)] flex flex-col justify-between p-5 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F45132]"
    >
      {/* Background Visual with Subtle Hover Zoom */}
      <img
        src={opportunity.image}
        alt={`Visual preview for ${opportunity.title}`}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.78] group-hover:brightness-[0.88]"
        loading="lazy"
      />

      {/* Multi-Stop Contrast Gradients */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Header Row: Category Badge & Demo Tag */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/12 text-[11px] font-semibold text-white shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F45132]" aria-hidden="true" />
          <span>{opportunity.categoryLabel}</span>
        </span>

        <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-[9.5px] font-medium uppercase tracking-wider text-[#B3B3B3]">
          {opportunity.demoTag || 'Demo Call'}
        </span>
      </div>

      {/* Bottom Content Information Block */}
      <div className="relative z-10 space-y-2 pt-4">
        {/* Location & Creator Tag */}
        <div className="flex items-center gap-1.5 text-xs text-[#B3B3B3]">
          <MapPin className="w-3.5 h-3.5 text-[#F45132] shrink-0" aria-hidden="true" />
          <span className="font-medium tracking-wide">{opportunity.location}</span>
          <span className="text-white/30" aria-hidden="true">·</span>
          <span className="text-[11px] text-[#B3B3B3] truncate">{opportunity.creator}</span>
        </div>

        {/* Opportunity Title */}
        <h4 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-white leading-tight transition-colors">
          {opportunity.title}
        </h4>

        {/* Brief Description */}
        <p className="text-xs text-[#B3B3B3] line-clamp-2 leading-relaxed font-normal">
          {opportunity.description}
        </p>

        {/* Action Row */}
        <div className="pt-2 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-semibold text-white/90 group-hover:text-[#F45132] flex items-center gap-1 transition-colors">
            <span>View Opportunity</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </span>

          <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white group-hover:bg-[#F45132] group-hover:border-[#F45132] transition-all duration-300 shadow-sm">
            <ArrowUpRight className="w-4 h-4 text-white" aria-hidden="true" />
          </div>
        </div>
      </div>
    </article>
  );
}
