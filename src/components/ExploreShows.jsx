import React, { useState, useMemo, useRef, useEffect } from 'react';
import { MapPin, ChevronDown, Check, ArrowRight, Sparkles, Filter, Calendar, RotateCcw } from 'lucide-react';
import { SHOW_CATEGORIES, SHOW_LOCATIONS, ALL_SHOWS } from '../data/mockData';
import FeaturedEventCard from './FeaturedEventCard';
import UpcomingEventCard from './UpcomingEventCard';
import EventDetailModal from './EventDetailModal';

export default function ExploreShows({ onOpenNavNotice }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('Noida');
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [customLocationInput, setCustomLocationInput] = useState('');
  const [activeModalEvent, setActiveModalEvent] = useState(null);
  const dropdownRef = useRef(null);

  // Close location dropdown on click outside or Escape
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setLocationDropdownOpen(false);
      }
    }
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setLocationDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Filter shows based on both category and location
  const matchingShows = useMemo(() => {
    return ALL_SHOWS.filter((show) => {
      // Category match
      const categoryMatches = selectedCategory === 'all' || show.category === selectedCategory;

      // Location match
      const locationMatches =
        selectedLocation === 'All Locations' ||
        show.city.toLowerCase() === selectedLocation.toLowerCase() ||
        show.venue.toLowerCase().includes(selectedLocation.toLowerCase());

      return categoryMatches && locationMatches;
    });
  }, [selectedCategory, selectedLocation]);

  // Determine if there is a featured event matching the filter
  const featuredEvent = useMemo(() => {
    return matchingShows.find((show) => show.isFeatured) || null;
  }, [matchingShows]);

  // Upcoming non-featured shows (or remaining shows if featured is displayed)
  const upcomingShows = useMemo(() => {
    if (featuredEvent) {
      return matchingShows.filter((show) => show.id !== featuredEvent.id);
    }
    return matchingShows;
  }, [matchingShows, featuredEvent]);

  const handleLocationSelect = (loc) => {
    setSelectedLocation(loc);
    setLocationDropdownOpen(false);
  };

  const handleCustomLocationSubmit = (e) => {
    e.preventDefault();
    if (customLocationInput.trim()) {
      handleLocationSelect(customLocationInput.trim());
      setCustomLocationInput('');
    }
  };

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedLocation('Noida');
  };

  const handleViewAllClick = (e) => {
    e.preventDefault();
    if (onOpenNavNotice) {
      onOpenNavNotice('shows');
    }
  };

  return (
    <section
      id="shows"
      className="relative py-24 sm:py-32 bg-[#000000] text-white border-t border-white/10 overflow-hidden selection:bg-[#F45132] selection:text-white"
      aria-label="Explore Shows & Live Entertainment"
    >
      {/* Restrained Brand Orange Atmospheric Lighting */}
      <div
        className="absolute top-1/3 -left-36 w-[550px] h-[550px] rounded-full bg-[#F45132]/6 blur-[170px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-36 w-[500px] h-[500px] rounded-full bg-[#F45132]/5 blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle Background Grid Texture */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">

        {/* ================= 1. SECTION INTRODUCTION & LOCATION SELECTOR ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
          
          {/* Headline & Description */}
          <div className="space-y-3.5 max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45132]" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.24em] uppercase text-[#B3B3B3]">
                WHAT'S HAPPENING AROUND YOU
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-[46px] text-white tracking-tight leading-[1.12]">
              Find your next{' '}
              <span className="text-[#F45132] drop-shadow-[0_0_28px_rgba(244,81,50,0.35)]">
                unforgettable
              </span>{' '}
              night.
            </h2>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-[#B3B3B3] leading-relaxed font-normal max-w-2xl">
              From intimate acoustic sessions to underground DJ sets and live comedy, discover experiences worth stepping out for.
            </p>
          </div>

          {/* Interactive Location Selector */}
          <div className="relative shrink-0" ref={dropdownRef}>
            <div className="flex flex-col items-start lg:items-end gap-1.5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B3B3B3] select-none">
                Explore near
              </span>

              {/* Location Pill Button */}
              <button
                type="button"
                onClick={() => setLocationDropdownOpen(!locationDropdownOpen)}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl sm:rounded-full bg-[#121212] border border-white/15 hover:border-[#F45132]/60 hover:bg-[#181818] transition-all duration-200 cursor-pointer text-xs sm:text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F45132]"
                aria-expanded={locationDropdownOpen}
                aria-haspopup="listbox"
                aria-label={`Explore events near ${selectedLocation}. Click to change location.`}
              >
                <MapPin className="w-4 h-4 text-[#F45132] shrink-0" aria-hidden="true" />
                <span className="tracking-wide font-medium">{selectedLocation}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#B3B3B3] transition-transform duration-200 shrink-0 ${
                    locationDropdownOpen ? 'rotate-180 text-white' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
            </div>

            {/* Location Dropdown Menu */}
            {locationDropdownOpen && (
              <div
                role="listbox"
                aria-label="Filter events by city"
                className="absolute left-0 lg:left-auto lg:right-0 mt-2 w-72 bg-[#101010] text-white border border-white/15 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] p-3.5 z-40 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-150 space-y-3"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-[10px] font-bold text-[#B3B3B3] uppercase tracking-wider">
                    Select Event Location
                  </span>
                  <span className="text-[9px] text-[#F45132] font-semibold">Demo Filter</span>
                </div>

                {/* Custom City Input */}
                <form onSubmit={handleCustomLocationSubmit} className="flex gap-1.5">
                  <input
                    type="text"
                    value={customLocationInput}
                    onChange={(e) => setCustomLocationInput(e.target.value)}
                    placeholder="Enter city or neighborhood..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-2.5 py-1.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#F45132]"
                  />
                  <button
                    type="submit"
                    disabled={!customLocationInput.trim()}
                    className="px-2.5 py-1.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 disabled:opacity-40 text-white cursor-pointer transition-colors"
                  >
                    Set
                  </button>
                </form>

                {/* Preset Cities List */}
                <div className="pt-1 space-y-0.5 max-h-44 overflow-y-auto scrollbar-none">
                  {SHOW_LOCATIONS.map((loc) => (
                    <button
                      key={loc}
                      type="button"
                      role="option"
                      aria-selected={selectedLocation === loc}
                      onClick={() => handleLocationSelect(loc)}
                      className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs text-left transition-colors cursor-pointer ${
                        selectedLocation === loc
                          ? 'bg-[#F45132]/15 text-[#F45132] font-semibold'
                          : 'text-white hover:bg-white/8'
                      }`}
                    >
                      <span>{loc}</span>
                      {selectedLocation === loc && <Check className="w-3.5 h-3.5 text-[#F45132] shrink-0" />}
                    </button>
                  ))}
                </div>

                <div className="pt-1.5 border-t border-white/8 text-[9.5px] text-[#B3B3B3]/60 leading-tight">
                  * Fictional demonstration location filter.
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ================= 2. HORIZONTAL CATEGORY FILTERS ================= */}
        <div className="w-full">
          <div
            role="tablist"
            aria-label="Filter events by category"
            className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none snap-x -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {SHOW_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  role="tab"
                  id={`event-tab-${cat.id}`}
                  aria-selected={isSelected}
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

        {/* ================= 3. FEATURED EVENT CARD SPOTLIGHT ================= */}
        {featuredEvent && (
          <div className="space-y-3">
            <FeaturedEventCard
              event={featuredEvent}
              onSelect={(evt) => setActiveModalEvent(evt)}
            />
          </div>
        )}

        {/* ================= 4. UPCOMING EVENTS GRID ================= */}
        <div className="space-y-6 pt-4">
          {/* Header Row: Subheading + "View all events →" Link */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="space-y-0.5">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                More shows worth discovering
              </h3>
              <p className="text-xs text-[#B3B3B3]">
                {selectedLocation === 'All Locations'
                  ? 'Upcoming shows across all scenes'
                  : `Filtered by ${selectedLocation}`}
              </p>
            </div>

            <button
              type="button"
              onClick={handleViewAllClick}
              className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white/90 hover:text-[#F45132] transition-colors cursor-pointer py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F45132] rounded-md"
              aria-label="View all scheduled events"
            >
              <span>View all events</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </button>
          </div>

          {/* Grid of Upcoming Event Cards */}
          {upcomingShows.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
              {upcomingShows.map((show) => (
                <UpcomingEventCard
                  key={show.id}
                  event={show}
                  onSelect={(evt) => setActiveModalEvent(evt)}
                />
              ))}
            </div>
          ) : (
            /* Empty State if no upcoming cards match, but featured exists */
            !featuredEvent && (
              <div className="p-12 text-center rounded-3xl bg-[#101010] border border-white/12 space-y-4 max-w-xl mx-auto shadow-2xl">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-[#F45132]">
                  <Filter className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-lg text-white">
                    No shows match this combination
                  </h4>
                  <p className="text-xs text-[#B3B3B3] leading-relaxed">
                    No demo events found for <strong className="text-white capitalize">{selectedCategory.replace('-', ' ')}</strong> near <strong className="text-white">{selectedLocation}</strong>.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#F45132] hover:bg-[#E04326] cursor-pointer shadow-md shadow-[#F45132]/25 transition-all"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset to All Events & Locations</span>
                </button>
              </div>
            )
          )}
        </div>

      </div>

      {/* Interactive Accessible Event Detail Modal */}
      <EventDetailModal
        event={activeModalEvent}
        isOpen={Boolean(activeModalEvent)}
        onClose={() => setActiveModalEvent(null)}
      />
    </section>
  );
}
