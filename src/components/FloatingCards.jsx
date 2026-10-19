import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

export function EventCard({ className = '' }) {
  return (
    <div
      className={`glass-panel rounded-2xl p-3 sm:p-3.5 shadow-[0_24px_50px_rgba(0,0,0,0.9)] border border-white/12 hover:border-[#F45132]/40 transition-all duration-300 hover:scale-[1.02] group cursor-pointer ${className}`}
      role="article"
      aria-label="Live show highlight: Indie Night at The Piano Man, Noida"
      tabIndex={0}
    >
      <div className="flex items-center gap-3">
        {/* Event Thumbnail with Stage Lighting */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-black">
          <img
            src="/artists/event.jpg"
            alt="Warm acoustic stage lighting"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        {/* Event Details */}
        <div className="flex-1 min-w-0 pr-1">
          <div className="flex items-center gap-1.5 mb-0.5">
            <MapPin className="w-3 h-3 text-[#F45132] shrink-0" aria-hidden="true" />
            <span className="text-[10px] sm:text-[11px] font-semibold text-[#F45132]">
              Live Show Near You
            </span>
          </div>

          <h4 className="font-display font-bold text-sm sm:text-base text-white truncate leading-tight">
            Indie Night
          </h4>

          <div className="mt-1 flex flex-col gap-0.5 text-[11px] text-[#B3B3B3]">
            <span>Sat, 18 Oct · 8:00 PM</span>
            <div className="flex items-center gap-1 text-[#B3B3B3] truncate">
              <MapPin className="w-2.5 h-2.5 text-neutral-400 shrink-0" aria-hidden="true" />
              <span className="truncate">The Piano Man, Noida</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ArtistConnectionCard({ className = '' }) {
  return (
    <div
      className={`glass-panel rounded-2xl p-2.5 sm:p-3 shadow-[0_24px_50px_rgba(0,0,0,0.9)] border border-white/12 hover:border-[#F45132]/40 transition-all duration-300 hover:scale-[1.02] group cursor-pointer ${className}`}
      role="article"
      aria-label="Creative connection card: Connect with 10,000+ Artists"
      tabIndex={0}
    >
      <div className="flex items-center gap-3">
        {/* Overlapping Artist Avatars */}
        <div className="flex -space-x-2 overflow-hidden shrink-0 py-0.5" aria-label="Profiles of matching artists">
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-[#101010] object-cover"
            src="/artists/avatar1.jpg"
            alt="Artist profile"
          />
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-[#101010] object-cover"
            src="/artists/avatar2.jpg"
            alt="Artist profile"
          />
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-[#101010] object-cover"
            src="/artists/avatar3.jpg"
            alt="Artist profile"
          />
          <div className="inline-flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-[#101010] bg-white/10 text-white text-xs font-semibold">
            +
          </div>
        </div>

        {/* Text Details */}
        <div className="flex-1 min-w-0">
          <p className="text-[11px] text-[#B3B3B3] leading-tight">
            Connect with
          </p>
          <p className="text-xs sm:text-[13px] font-bold text-white leading-tight">
            10,000+ Artists
          </p>
        </div>

        {/* Action Indicator Arrow in Dark Circle */}
        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center shrink-0 group-hover:bg-[#F45132] group-hover:border-[#F45132] transition-colors duration-200">
          <ArrowRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
