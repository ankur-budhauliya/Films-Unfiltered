import React, { useState } from 'react';
import HeroSearchBar from './HeroSearchBar';
import CategoryChips from './CategoryChips';
import ArtistCollage from './ArtistCollage';
import SearchResultsModal from './SearchResultsModal';
import { ARTIST_CATEGORIES, STATS } from '../data/mockData';
import { Compass, Sparkles } from 'lucide-react';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Choose location');
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [chipFeedback, setChipFeedback] = useState(null);

  // Category chip selection
  const handleCategorySelect = (cat) => {
    if (selectedCategoryId === cat.id) {
      // Deselect
      setSelectedCategoryId(null);
      setSearchQuery('');
      setChipFeedback(null);
    } else {
      // Select
      setSelectedCategoryId(cat.id);
      setSearchQuery(cat.queryTerm || cat.label);
      setChipFeedback(`Filtered scene by ${cat.label}`);
      setTimeout(() => setChipFeedback(null), 3000);
    }
  };

  // Search submission
  const handleSearchSubmit = ({ query, location }) => {
    setSearchQuery(query);
    if (location) {
      setSelectedLocation(location);
    }
    setSearchModalOpen(true);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSelectedCategoryId(null);
    setSelectedLocation('Choose location');
    setSearchModalOpen(false);
  };

  return (
    <section
      id="home"
      className="relative min-h-[850px] lg:h-[920px] max-h-[1050px] w-full pt-28 pb-16 lg:py-0 flex items-center overflow-hidden bg-[#080B10]"
      aria-label="Films Unfiltered Hero Section"
    >
      {/* Layered Cinematic Atmospheric Background Lighting */}
      <div
        className="absolute top-1/4 -left-36 w-[450px] h-[450px] rounded-full bg-[#FF3366]/10 blur-[160px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -right-24 w-[550px] h-[550px] rounded-full bg-[#101722] blur-[150px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 left-1/3 w-[600px] h-[350px] rounded-full bg-[#FF7048]/8 blur-[170px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle Texture & Vignette */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-50"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center w-full">
          
          {/* ================= LEFT COLUMN (approx 48% / 6 cols on lg) ================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-7 z-10">
            
            {/* Small uppercase eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101722]/90 border border-white/12 w-fit backdrop-blur-md shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF3366] animate-pulse" aria-hidden="true" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.22em] uppercase text-[#A5ACB8]">
                ARTISTS · EVENTS · COMMUNITY
              </span>
            </div>

            {/* Bold, Cinematic Main Headline */}
            <div className="space-y-1">
              <h1 className="font-display font-extrabold text-[40px] leading-[1.08] sm:text-5xl md:text-6xl xl:text-[64px] tracking-[-0.035em] text-[#F7F7F8]">
                Discover Artists.
                <br />
                <span className="gradient-accent-text inline-block drop-shadow-[0_0_40px_rgba(255,51,102,0.3)]">
                  Find Your Scene.
                </span>
                <br />
                Make Connections.
              </h1>
            </div>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#A5ACB8] max-w-xl leading-relaxed font-normal">
              Connect with artists, discover shows near you, and find your next
              creative collaboration — all in one place.
            </p>

            {/* Prominent Search Bar with Full Controlled State */}
            <div className="w-full max-w-xl pt-0.5">
              <HeroSearchBar
                searchQuery={searchQuery}
                onQueryChange={setSearchQuery}
                selectedLocation={selectedLocation}
                onLocationChange={setSelectedLocation}
                onSearchSubmit={handleSearchSubmit}
              />
            </div>

            {/* Category Chips */}
            <div className="space-y-2.5 max-w-xl">
              <div className="flex items-center justify-between text-xs text-[#A5ACB8]">
                <span className="font-medium flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#FF3366]" aria-hidden="true" />
                  Explore creative disciplines:
                </span>
                {chipFeedback && (
                  <span className="text-[11px] text-[#FF7048] flex items-center gap-1 animate-in fade-in">
                    <Sparkles className="w-3 h-3" />
                    <span>{chipFeedback}</span>
                  </span>
                )}
              </div>
              <CategoryChips
                categories={ARTIST_CATEGORIES}
                selectedCategoryId={selectedCategoryId}
                onSelectCategory={handleCategorySelect}
              />
            </div>

            {/* Subtle Illustrative Stats Row */}
            <div className="pt-4 border-t border-white/10 max-w-xl">
              <div className="grid grid-cols-4 gap-2 sm:gap-4">
                {STATS.map((stat, i) => (
                  <div key={i} className="flex flex-col relative">
                    <span className="font-display font-extrabold text-xl sm:text-2xl text-[#F7F7F8] tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-[10.5px] sm:text-xs text-[#A5ACB8] font-medium mt-0.5 tracking-wide">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-2 text-[10px] text-[#A5ACB8]/60 flex items-center gap-1">
                <span>* Illustrative platform community statistics</span>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN (approx 52% / 6 cols on lg) ================= */}
          <div className="lg:col-span-6 xl:col-span-6 relative w-full flex items-center justify-center">
            <ArtistCollage onSelectDemoArtist={(artist) => {
              setSearchQuery(artist.title);
              setSearchModalOpen(true);
            }} />
          </div>

        </div>
      </div>

      {/* Accessible Demo Search Results Dialog */}
      <SearchResultsModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        query={searchQuery}
        location={selectedLocation}
        onClear={handleClearSearch}
      />
    </section>
  );
}
