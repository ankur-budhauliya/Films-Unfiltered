import React from 'react';
import { MapPin, ArrowUpRight, Mic, Disc3, Clapperboard, Sparkles, Activity, Video } from 'lucide-react';

const categoryIconMap = {
  singers: Mic,
  djs: Disc3,
  actors: Clapperboard,
  comedians: Sparkles,
  dancers: Activity,
  filmmakers: Video,
};

export default function ArtistCard({ artist, onClick }) {
  const Icon = categoryIconMap[artist.category] || Sparkles;

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (onClick) onClick(artist);
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={`${artist.name}, ${artist.role} based in ${artist.location}. Click to view demonstration profile.`}
      onClick={() => onClick && onClick(artist)}
      onKeyDown={handleKeyDown}
      className="group relative h-[420px] sm:h-[450px] rounded-3xl overflow-hidden bg-[#101010] border border-white/12 hover:border-[#F45132]/60 transition-all duration-300 hover:-translate-y-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:shadow-[0_25px_60px_-10px_rgba(244,81,50,0.25)] flex flex-col justify-between p-5 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F45132]"
    >
      {/* Background Photography with Zoom Hover Effect */}
      <img
        src={artist.image}
        alt={`Portrait of ${artist.name}`}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.88] group-hover:brightness-95"
        loading="lazy"
      />

      {/* Multi-Stop Cinematic Vignette Overlays */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/70 to-transparent pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Top Header Row: Category Badge & Demo Tag */}
      <div className="relative z-10 flex items-center justify-between w-full">
        {/* Category Pill with Brand Orange Dot */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/12 text-[11px] font-semibold text-white shadow-sm">
          <Icon className="w-3 h-3 text-[#F45132]" aria-hidden="true" />
          <span>{artist.role}</span>
        </div>

        {/* Demo Indicator */}
        <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-[9.5px] font-medium uppercase tracking-wider text-[#B3B3B3]">
          Demo
        </span>
      </div>

      {/* Bottom Content Information Block */}
      <div className="relative z-10 space-y-2.5 pt-6">
        {/* Location with Pin Icon */}
        <div className="flex items-center gap-1.5 text-xs text-[#B3B3B3]">
          <MapPin className="w-3.5 h-3.5 text-[#F45132] shrink-0" aria-hidden="true" />
          <span className="font-medium tracking-wide">{artist.location}</span>
          <span className="text-white/30">·</span>
          <span className="text-[11px] text-[#B3B3B3]/80">{artist.specialty}</span>
        </div>

        {/* Artist Name */}
        <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-white leading-tight transition-colors">
          {artist.name}
        </h3>

        {/* Short Descriptive Line */}
        <p className="text-xs text-[#B3B3B3] line-clamp-2 leading-relaxed font-normal">
          {artist.bio}
        </p>

        {/* Profile-View Affordance Row */}
        <div className="pt-2 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-semibold text-white/90 group-hover:text-[#F45132] flex items-center gap-1.5 transition-colors">
            <span>View Profile</span>
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
