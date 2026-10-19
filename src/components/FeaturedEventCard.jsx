import React from 'react';
import { Calendar, Clock, MapPin, ArrowRight, Sparkles } from 'lucide-react';

export default function FeaturedEventCard({ event, onSelect }) {
  if (!event) return null;

  return (
    <article
      role="article"
      aria-label={`Featured event: ${event.title} in ${event.city}`}
      className="group relative rounded-3xl overflow-hidden bg-[#101010] border border-white/12 hover:border-[#F45132]/50 transition-all duration-300 shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
    >
      <div className="relative min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] w-full flex flex-col justify-end p-6 sm:p-10 lg:p-12 overflow-hidden">
        {/* Cinematic Wide Background Image with Subtle Hover Zoom */}
        <img
          src={event.image}
          alt={`Stage atmosphere for ${event.title}`}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.75] group-hover:brightness-[0.82]"
          loading="lazy"
        />

        {/* Multi-Stop Gradients for Maximum Text Contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none hidden sm:block"
          aria-hidden="true"
        />

        {/* Top Badges Row */}
        <div className="absolute top-6 left-6 sm:left-10 right-6 sm:right-10 flex items-center justify-between z-10 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F45132] text-xs font-bold text-white shadow-md">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{event.badge || 'Featured Showcase'}</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-xs font-semibold text-white">
              {event.categoryLabel}
            </span>
          </div>

          <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm border border-white/10 text-[10px] font-semibold uppercase tracking-wider text-[#B3B3B3]">
            {event.demoTag || 'Fictional Demo'}
          </span>
        </div>

        {/* Content Block */}
        <div className="relative z-10 space-y-4 max-w-3xl">
          {/* Metadata Row: Date, Time & Venue */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-[13px] text-[#B3B3B3]">
            <div className="flex items-center gap-1.5 text-white font-medium">
              <Calendar className="w-4 h-4 text-[#F45132] shrink-0" aria-hidden="true" />
              <span>{event.date}</span>
            </div>
            <span className="text-white/30" aria-hidden="true">·</span>
            <div className="flex items-center gap-1.5 text-white font-medium">
              <Clock className="w-4 h-4 text-[#F45132] shrink-0" aria-hidden="true" />
              <span>{event.time}</span>
            </div>
            <span className="text-white/30 hidden sm:inline" aria-hidden="true">·</span>
            <div className="flex items-center gap-1.5 text-white font-medium truncate">
              <MapPin className="w-4 h-4 text-[#F45132] shrink-0" aria-hidden="true" />
              <span className="truncate">{event.venue}</span>
            </div>
          </div>

          {/* Event Title */}
          <h3 className="font-display font-black text-2xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            {event.title}
          </h3>

          {/* Short Description */}
          <p className="text-xs sm:text-base text-[#B3B3B3] leading-relaxed max-w-2xl font-normal">
            {event.description}
          </p>

          {/* Action Row */}
          <div className="pt-2 flex items-center gap-4">
            <button
              type="button"
              onClick={() => onSelect && onSelect(event)}
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#F45132] hover:bg-[#E04326] shadow-lg shadow-[#F45132]/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F45132] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <span>View Event</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>
            <span className="text-[11px] text-[#B3B3B3]/70 hidden sm:inline">
              * Demonstration event listing in {event.city}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
