import React from 'react';
import { Calendar, Clock, MapPin, ArrowUpRight } from 'lucide-react';

export default function UpcomingEventCard({ event, onSelect }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (onSelect) onSelect(event);
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={`${event.title}, ${event.categoryLabel} in ${event.city}. Click to view event details.`}
      onClick={() => onSelect && onSelect(event)}
      onKeyDown={handleKeyDown}
      className="group relative h-[380px] sm:h-[400px] rounded-3xl overflow-hidden bg-[#101010] border border-white/12 hover:border-[#F45132]/60 transition-all duration-300 hover:-translate-y-1.5 shadow-[0_20px_45px_rgba(0,0,0,0.85)] hover:shadow-[0_25px_60px_-10px_rgba(244,81,50,0.25)] flex flex-col justify-between p-5 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F45132]"
    >
      {/* Background Photography with Zoom Hover Effect */}
      <img
        src={event.image}
        alt={`Visual for ${event.title}`}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.80] group-hover:brightness-90"
        loading="lazy"
      />

      {/* Multi-Stop Gradients for Readability */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Row: Category Pill & City Badge */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/12 text-[11px] font-semibold text-white shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F45132]" aria-hidden="true" />
          <span>{event.categoryLabel}</span>
        </span>

        <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-[10px] font-medium text-[#B3B3B3]">
          {event.city}
        </span>
      </div>

      {/* Bottom Content Information Block */}
      <div className="relative z-10 space-y-2 pt-4">
        {/* Date and Time Line */}
        <div className="flex items-center gap-2 text-[11px] text-[#B3B3B3]">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3 text-[#F45132] shrink-0" aria-hidden="true" />
            <span>{event.date}</span>
          </div>
          <span className="text-white/30" aria-hidden="true">·</span>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-white/50 shrink-0" aria-hidden="true" />
            <span>{event.time}</span>
          </div>
        </div>

        {/* Event Title */}
        <h4 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-white leading-tight transition-colors">
          {event.title}
        </h4>

        {/* Venue Location */}
        <div className="flex items-center gap-1.5 text-xs text-[#B3B3B3] truncate">
          <MapPin className="w-3 h-3 text-[#F45132] shrink-0" aria-hidden="true" />
          <span className="truncate">{event.venue}</span>
        </div>

        {/* Short Description */}
        <p className="text-xs text-[#B3B3B3] line-clamp-2 leading-relaxed font-normal">
          {event.description}
        </p>

        {/* View Details Affordance Row */}
        <div className="pt-2 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-semibold text-white/90 group-hover:text-[#F45132] flex items-center gap-1 transition-colors">
            <span>View Details</span>
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
