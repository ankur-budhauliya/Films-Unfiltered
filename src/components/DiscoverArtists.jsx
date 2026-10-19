import React, { useState, useMemo } from 'react';
import { ArrowRight, Sparkles, Filter } from 'lucide-react';
import { DISCOVER_FILTER_CATEGORIES, DISCOVER_ARTISTS } from '../data/mockData';
import ArtistCard from './ArtistCard';
import ArtistDetailModal from './ArtistDetailModal';

export default function DiscoverArtists({ onOpenNavNotice, onOpenAuth }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeArtistModal, setActiveArtistModal] = useState(null);

  // Filtered list of artists based on selected category tab
  const filteredArtists = useMemo(() => {
    if (selectedCategory === 'all') {
      return DISCOVER_ARTISTS;
    }
    return DISCOVER_ARTISTS.filter((artist) => artist.category === selectedCategory);
  }, [selectedCategory]);

  const handleCardClick = (artist) => {
    setActiveArtistModal(artist);
  };

  const handleExploreAllClick = (e) => {
    e.preventDefault();
    if (onOpenNavNotice) {
      onOpenNavNotice('discover');
    }
  };

  const handleCtaClick = () => {
    if (onOpenNavNotice) {
      onOpenNavNotice('discover');
    }
  };

  const handleConnectArtist = () => {
    if (onOpenAuth) {
      onOpenAuth('signup');
    } else if (onOpenNavNotice) {
      onOpenNavNotice('collaborate');
    }
  };

  return (
    <section
      id="discover"
      className="relative py-24 sm:py-32 bg-[#000000] text-white border-t border-white/10 overflow-hidden selection:bg-[#F45132] selection:text-white"
      aria-label="Discover Artists Directory"
    >
      {/* Restrained Brand Orange Atmospheric Ambient Lighting */}
      <div
        className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-[#F45132]/6 blur-[160px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-[#F45132]/5 blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle Background Radial Pattern */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* ================= 1. SECTION INTRODUCTION ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          
          <div className="space-y-3.5 max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45132]" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.24em] uppercase text-[#B3B3B3]">
                MEET YOUR CREATIVE COMMUNITY
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-[46px] text-white tracking-tight leading-[1.12]">
              Discover the people behind the{' '}
              <span className="text-[#F45132] drop-shadow-[0_0_28px_rgba(244,81,50,0.35)]">
                passion.
              </span>
            </h2>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-[#B3B3B3] leading-relaxed font-normal max-w-2xl">
              From the next voice you'll fall in love with to the filmmaker who brings your vision to life — find your people here.
            </p>
          </div>

          {/* Subtle "Explore all artists →" link: desktop on right, mobile below */}
          <div className="shrink-0 pt-1 md:pt-0">
            <button
              type="button"
              onClick={handleExploreAllClick}
              className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white/90 hover:text-[#F45132] transition-colors cursor-pointer py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F45132] rounded-md"
              aria-label="Explore all artists in the directory"
            >
              <span>Explore all artists</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* ================= 2. HORIZONTAL CATEGORY FILTERS ================= */}
        <div className="w-full">
          <div
            role="tablist"
            aria-label="Filter artists by discipline"
            className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none snap-x -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {DISCOVER_FILTER_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  role="tab"
                  id={`tab-${cat.id}`}
                  aria-selected={isSelected}
                  aria-controls={`panel-${cat.id}`}
                  tabIndex={0}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`snap-start shrink-0 px-4 py-2 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer border select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F45132] ${
                    isSelected
                      ? 'bg-[#F45132] text-white border-[#F45132] shadow-md shadow-[#F45132]/30 scale-[1.02]'
                      : 'bg-[#121212] text-[#B3B3B3] border-white/10 hover:border-white/25 hover:text-white hover:bg-[#181818]'
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= 3. ARTIST CARD GRID ================= */}
        <div
          id={`panel-${selectedCategory}`}
          role="region"
          aria-labelledby={`tab-${selectedCategory}`}
          className="space-y-6"
        >
          {/* Active Filter Status & Reset Affordance if filtered */}
          {selectedCategory !== 'all' && (
            <div className="flex items-center justify-between text-xs text-[#B3B3B3] pt-1">
              <span className="flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-[#F45132]" aria-hidden="true" />
                <span>
                  Showing {filteredArtists.length} {filteredArtists.length === 1 ? 'profile' : 'profiles'} for{' '}
                  <strong className="text-white capitalize font-medium">{selectedCategory}</strong>
                </span>
              </span>
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className="text-[#F45132] hover:underline cursor-pointer font-medium"
              >
                Reset to All Artists
              </button>
            </div>
          )}

          {/* The Responsive 6-Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {filteredArtists.map((artist) => (
              <ArtistCard
                key={artist.id}
                artist={artist}
                onClick={handleCardClick}
              />
            ))}
          </div>

          {/* Empty state safeguard (if custom filter returns 0) */}
          {filteredArtists.length === 0 && (
            <div className="p-12 text-center rounded-3xl bg-[#101010] border border-white/10 space-y-3">
              <p className="text-base text-white font-medium">No demonstration profiles in this category.</p>
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className="px-5 py-2 rounded-full text-xs font-semibold text-white bg-[#F45132] hover:bg-[#E04326] cursor-pointer transition-colors"
              >
                View All Artists
              </button>
            </div>
          )}
        </div>

        {/* ================= 4. BOTTOM CALL TO ACTION ================= */}
        <div className="pt-8 sm:pt-12">
          <div className="relative rounded-3xl overflow-hidden bg-[#101010] border border-white/12 p-8 sm:p-12 text-center shadow-[0_25px_60px_rgba(0,0,0,0.95)] max-w-4xl mx-auto">
            {/* Subtle glow behind CTA */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#F45132]/10 blur-[100px] pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10.5px] font-bold uppercase tracking-wider text-[#B3B3B3] mx-auto">
                <Sparkles className="w-3 h-3 text-[#F45132]" aria-hidden="true" />
                <span>Creative Collaboration</span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight">
                Your next creative connection starts here.
              </h3>

              <p className="text-sm sm:text-base text-[#B3B3B3] leading-relaxed max-w-xl mx-auto">
                Meet artists who share your passion and discover what you can create together.
              </p>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={handleCtaClick}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#F45132] hover:bg-[#E04326] shadow-lg shadow-[#F45132]/30 hover:shadow-[#F45132]/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F45132] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101010]"
                >
                  <span>Discover All Artists</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Accessible Interactive Artist Profile Preview Modal */}
      <ArtistDetailModal
        artist={activeArtistModal}
        isOpen={Boolean(activeArtistModal)}
        onClose={() => setActiveArtistModal(null)}
        onConnect={handleConnectArtist}
      />
    </section>
  );
}
