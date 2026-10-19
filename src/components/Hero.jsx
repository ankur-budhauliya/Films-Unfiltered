import React, { useState } from 'react';
import HeroSearchBar from './HeroSearchBar';
import CategoryChips from './CategoryChips';
import ArtistCollage from './ArtistCollage';
import SearchResultsModal from './SearchResultsModal';
import { ARTIST_CATEGORIES, STATS } from '../data/mockData';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Noida');
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Category chip selection
  const handleCategorySelect = (cat) => {
    if (selectedCategoryId === cat.id) {
      setSelectedCategoryId(null);
      setSearchQuery('');
    } else {
      setSelectedCategoryId(cat.id);
      setSearchQuery(cat.queryTerm || cat.label);
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
    setSelectedLocation('Noida');
    setSearchModalOpen(false);
  };

  return (
    <section
      id="home"
      className="relative min-h-[850px] lg:h-[940px] max-h-[1050px] w-full pt-28 pb-16 lg:py-0 flex items-center overflow-hidden bg-[#000000]"
      aria-label="Films Unfiltered Hero Section"
    >
      {/* Restrained Brand Orange Atmospheric Lighting */}
      <div
        className="absolute top-1/4 -left-36 w-[450px] h-[450px] rounded-full bg-[#F45132]/8 blur-[160px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -right-24 w-[550px] h-[550px] rounded-full bg-[#101010] blur-[150px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 left-1/3 w-[600px] h-[350px] rounded-full bg-[#F45132]/6 blur-[170px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle Texture & Vignette */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#ffffff06_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center w-full">
          
          {/* ================= LEFT COLUMN (approx 48% / 6 cols on lg) ================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-7 z-10">
            
            {/* Small uppercase eyebrow badge */}
            <div className="select-none">
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] uppercase text-[#B3B3B3]">
                ARTISTS · EVENTS · COMMUNITY
              </span>
            </div>

            {/* Bold, Cinematic Main Headline */}
            <div className="space-y-1">
              <h1 className="font-display font-black text-[42px] leading-[1.08] sm:text-5xl md:text-6xl xl:text-[66px] tracking-[-0.035em] text-white">
                Discover Artists.
                <br />
                Find <span className="text-[#F45132] drop-shadow-[0_0_35px_rgba(244,81,50,0.35)]">Your Scene.</span>
                <br />
                Make Connections.
              </h1>
            </div>

            {/* Supporting Paragraph matching reference */}
            <p className="text-sm sm:text-base text-[#B3B3B3] max-w-xl leading-relaxed font-normal">
              Films Unfiltered is a platform where artists connect, discover shows near them, and collaborate on new opportunities — across music, film, comedy, dance and more.
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

            {/* Category Chips with "Popular searches:" */}
            <div className="max-w-xl">
              <CategoryChips
                categories={ARTIST_CATEGORIES}
                selectedCategoryId={selectedCategoryId}
                onSelectCategory={handleCategorySelect}
              />
            </div>

            {/* Statistics Row with vertical dividers matching reference */}
            <div className="pt-4 max-w-xl">
              <div className="flex items-center gap-6 sm:gap-9">
                {STATS.map((stat, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <div className="h-8 w-[1px] bg-white/15" aria-hidden="true" />}
                    <div className="flex flex-col">
                      <span className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight leading-none">
                        {stat.value}
                      </span>
                      <span className="text-[11px] sm:text-xs text-[#B3B3B3] font-medium mt-1">
                        {stat.label}
                      </span>
                    </div>
                  </React.Fragment>
                ))}
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
