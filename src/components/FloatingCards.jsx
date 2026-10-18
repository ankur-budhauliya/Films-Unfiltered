import React from 'react';
import { MapPin, Calendar, ArrowRight, Music2, Users, Sparkles } from 'lucide-react';

export function EventCard({ className = '' }) {
  return (
    <div
      className={`glass-panel rounded-2xl p-3.5 sm:p-4 shadow-[0_24px_50px_-10px_rgba(0,0,0,0.85)] border border-white/15 hover:border-[#FF3366]/40 transition-all duration-300 hover:scale-[1.02] group cursor-pointer ${className}`}
      role="article"
      aria-label="Live show highlight: Indie Night at The Piano Man"
      tabIndex={0}
    >
      <div className="flex items-start gap-3">
        {/* Event Thumbnail with Stage Lighting */}
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border border-white/12 bg-[#080B10]">
          <img
            src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=300&q=80"
            alt="Warm acoustic stage lighting"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-95"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-1 right-1 p-1 bg-black/70 rounded-md backdrop-blur-xs">
            <Music2 className="w-3 h-3 text-[#FF3366]" aria-hidden="true" />
          </div>
        </div>

        {/* Event Details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF3366] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF3366]"></span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[#FF7048]">
              LIVE SHOW NEAR YOU
            </span>
          </div>

          <h4 className="font-display font-bold text-sm sm:text-base text-[#F7F7F8] truncate group-hover:text-white transition-colors">
            Indie Night
          </h4>

          <div className="mt-1 flex flex-col gap-0.5 text-xs text-[#A5ACB8]">
            <div className="flex items-center gap-1.5 text-[11px] text-[#A5ACB8]">
              <Calendar className="w-3 h-3 text-white/50 shrink-0" aria-hidden="true" />
              <span>Fri, Oct 24 · 8:30 PM</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-[#F7F7F8]/90 font-medium truncate">
              <MapPin className="w-3 h-3 text-[#FF3366] shrink-0" aria-hidden="true" />
              <span className="truncate">The Piano Man, Noida</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Micro-footer */}
      <div className="mt-2.5 pt-2 border-t border-white/8 flex items-center justify-between text-[11px] text-[#A5ACB8]">
        <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] text-[#A5ACB8]/90">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> 120 RSVP'd
        </span>
        <span className="text-white/70 group-hover:text-[#FF3366] font-medium flex items-center gap-1 text-[11px] transition-colors">
          View line-up <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </div>
  );
}

export function ArtistConnectionCard({ className = '' }) {
  return (
    <div
      className={`glass-panel rounded-2xl p-3 sm:p-3.5 shadow-[0_24px_50px_-10px_rgba(0,0,0,0.85)] border border-white/15 hover:border-[#FF7048]/40 transition-all duration-300 hover:scale-[1.02] group cursor-pointer ${className}`}
      role="article"
      aria-label="Creative connection card: Connect with Artists like you"
      tabIndex={0}
    >
      <div className="flex items-center gap-3">
        {/* Overlapping Artist Avatars */}
        <div className="flex -space-x-2.5 overflow-hidden shrink-0 py-0.5" aria-label="Profiles of matching artists">
          <img
            className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-[#101722] object-cover"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
            alt="Actress profile thumbnail"
          />
          <img
            className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-[#101722] object-cover"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
            alt="Musician profile thumbnail"
          />
          <img
            className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-[#101722] object-cover"
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"
            alt="Dancer profile thumbnail"
          />
          <div className="inline-flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-[#101722] bg-[#FF3366]/20 text-[#FF3366] text-[10px] font-bold">
            +48
          </div>
        </div>

        {/* Text Details */}
        <div className="flex-1 min-w-0">
          <p className="text-[11px] font-medium text-[#A5ACB8] leading-none mb-0.5">
            Connect with
          </p>
          <p className="text-xs sm:text-[13px] font-bold text-[#F7F7F8] group-hover:text-white transition-colors leading-tight">
            Artists like you
          </p>
          <p className="text-[10px] text-[#A5ACB8]/80 mt-0.5 truncate flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5 text-[#FF7048] shrink-0" aria-hidden="true" />
            <span>Sound & vision matches</span>
          </p>
        </div>

        {/* Action Indicator Arrow */}
        <div className="w-7 h-7 rounded-full bg-white/6 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#FF3366] group-hover:border-transparent transition-all duration-300">
          <ArrowRight className="w-3.5 h-3.5 text-[#F7F7F8] group-hover:text-white transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
