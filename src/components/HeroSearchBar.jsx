import React, { useState, useRef, useEffect } from 'react';
import { Search, MapPin, ChevronDown, Check, Sparkles, X, Compass, AlertCircle, Loader2, ArrowRight } from 'lucide-react';
import { CITIES } from '../data/mockData';

export default function HeroSearchBar({
  onSearchSubmit,
  searchQuery = '',
  onQueryChange,
  selectedLocation = 'Noida',
  onLocationChange,
}) {
  const [internalQuery, setInternalQuery] = useState(searchQuery);
  const [customCityInput, setCustomCityInput] = useState('');
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [geoLoading, setGeoLoading] = useState(false);
  const [geoNotice, setGeoNotice] = useState(null);
  const [searchFeedback, setSearchFeedback] = useState(null);
  const dropdownRef = useRef(null);

  // Sync internal query with prop when changed externally (e.g. from category chips)
  useEffect(() => {
    setInternalQuery(searchQuery);
  }, [searchQuery]);

  // Close dropdown on click outside or Escape key
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCityDropdownOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setCityDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleQueryInputChange = (val) => {
    setInternalQuery(val);
    if (onQueryChange) {
      onQueryChange(val);
    }
  };

  const handleClearQuery = () => {
    setInternalQuery('');
    if (onQueryChange) {
      onQueryChange('');
    }
  };

  const handleCitySelect = (city) => {
    if (onLocationChange) {
      onLocationChange(city);
    }
    setCityDropdownOpen(false);
    setGeoNotice(null);
  };

  const handleCustomCitySubmit = (e) => {
    e.preventDefault();
    if (customCityInput.trim()) {
      handleCitySelect(customCityInput.trim());
      setCustomCityInput('');
    }
  };

  // Explicit user-triggered geolocation request only
  const handleDetectLocation = () => {
    if (!('geolocation' in navigator)) {
      setGeoNotice('Geolocation is not supported by your browser.');
      return;
    }

    setGeoLoading(true);
    setGeoNotice('Requesting browser location permission...');

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setGeoLoading(false);
        const lat = position.coords.latitude.toFixed(2);
        const lon = position.coords.longitude.toFixed(2);
        const detectedName = `Current Area (${lat}, ${lon})`;
        handleCitySelect(detectedName);
        setSearchFeedback('Location detected. Live nearby events will connect in upcoming backend release.');
        setTimeout(() => setSearchFeedback(null), 4000);
      },
      (error) => {
        setGeoLoading(false);
        if (error.code === error.PERMISSION_DENIED) {
          setGeoNotice('Location permission was denied. You can choose a city from the list below.');
        } else {
          setGeoNotice('Could not retrieve location. Please choose a city manually.');
        }
      },
      { timeout: 8000, enableHighAccuracy: false }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const activeQuery = internalQuery.trim();
    if (onSearchSubmit) {
      onSearchSubmit({
        query: activeQuery,
        location: selectedLocation === 'Choose location' ? '' : selectedLocation,
      });
    }
  };

  return (
    <div className="w-full relative" ref={dropdownRef}>
      <form
        onSubmit={handleSubmit}
        role="search"
        aria-label="Find artists, live shows and venues"
        className="relative flex flex-col sm:flex-row items-stretch sm:items-center bg-white text-neutral-900 rounded-2xl sm:rounded-full p-1.5 sm:p-2 shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#F45132]/50"
      >
        {/* Search Input Field */}
        <div className="flex-1 flex items-center px-3 py-2 sm:py-0 min-h-[44px]">
          <Search className="w-4 h-4 text-neutral-500 shrink-0 mr-3" aria-hidden="true" />
          <input
            type="text"
            value={internalQuery}
            onChange={(e) => handleQueryInputChange(e.target.value)}
            placeholder="Search artists, shows or venues..."
            className="w-full bg-transparent text-sm sm:text-base text-neutral-900 placeholder-neutral-400 focus:outline-none font-normal"
            aria-label="Search keywords for artists, live shows or venues"
          />
          {internalQuery && (
            <button
              type="button"
              onClick={handleClearQuery}
              className="p-1 rounded-full text-neutral-400 hover:text-neutral-800 hover:bg-neutral-100 transition-colors mr-1 cursor-pointer"
              aria-label="Clear search input"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Vertical Divider on Desktop */}
        <div className="hidden sm:block w-[1px] h-7 bg-neutral-200 mx-1.5" aria-hidden="true" />

        {/* Location Selector */}
        <div className="relative border-t sm:border-t-0 border-neutral-100 pt-1.5 sm:pt-0">
          <button
            type="button"
            onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
            className="w-full sm:w-auto h-10 flex items-center justify-between sm:justify-start gap-2 px-3 py-2 text-xs sm:text-sm font-medium text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 transition-colors rounded-xl sm:rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F45132]"
            aria-expanded={cityDropdownOpen}
            aria-haspopup="listbox"
            aria-label={`Location filter: ${selectedLocation}. Click to choose or enter location.`}
          >
            <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" aria-hidden="true" />
            <span className="truncate max-w-[120px] font-medium text-neutral-800">{selectedLocation}</span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-neutral-400 transition-transform duration-200 shrink-0 ${
                cityDropdownOpen ? 'rotate-180 text-neutral-800' : ''
              }`}
              aria-hidden="true"
            />
          </button>

          {/* Location Dropdown Menu */}
          {cityDropdownOpen && (
            <div
              role="listbox"
              aria-label="Location options"
              className="absolute left-0 sm:left-auto sm:right-0 mt-2 w-full sm:w-72 bg-[#101010] text-white border border-white/15 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] p-3.5 z-50 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-150 space-y-3"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-[10px] font-bold text-[#B3B3B3] uppercase tracking-wider">
                  Select or Enter Location
                </span>
                <span className="text-[9px] text-[#F45132] font-semibold">City Filter</span>
              </div>

              {/* Custom Location Input */}
              <div className="space-y-1">
                <div className="flex gap-1.5">
                  <input
                    type="text"
                    value={customCityInput}
                    onChange={(e) => setCustomCityInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleCustomCitySubmit(e);
                      }
                    }}
                    placeholder="Enter city or neighborhood..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-2.5 py-1.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#F45132]"
                  />
                  <button
                    type="button"
                    onClick={handleCustomCitySubmit}
                    disabled={!customCityInput.trim()}
                    className="px-2.5 py-1.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 disabled:opacity-40 text-white cursor-pointer transition-colors"
                  >
                    Set
                  </button>
                </div>
              </div>

              {/* Explicit Geolocation Action */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={handleDetectLocation}
                  disabled={geoLoading}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-white bg-white/5 hover:bg-[#F45132]/20 hover:text-[#F45132] border border-white/10 transition-colors cursor-pointer"
                >
                  {geoLoading ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Compass className="w-3.5 h-3.5 text-[#F45132]" />
                  )}
                  <span>Detect My Location (Browser GPS)</span>
                </button>
                {geoNotice && (
                  <p className="text-[10px] text-[#F45132] mt-1.5 leading-tight px-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{geoNotice}</span>
                  </p>
                )}
              </div>

              {/* Preset Popular Cities */}
              <div className="pt-1 border-t border-white/8">
                <p className="text-[10px] font-semibold text-[#B3B3B3] uppercase tracking-wider mb-1 px-1">
                  Popular Scenes
                </p>
                <div className="max-h-36 overflow-y-auto space-y-0.5 scrollbar-none">
                  {/* Default popular city from reference: Noida */}
                  {['Noida', 'Delhi NCR', 'Mumbai', 'Bengaluru', 'Goa'].map((city) => (
                    <button
                      key={city}
                      type="button"
                      role="option"
                      aria-selected={selectedLocation === city}
                      onClick={() => handleCitySelect(city)}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs text-left transition-colors cursor-pointer ${
                        selectedLocation === city
                          ? 'bg-[#F45132]/15 text-[#F45132] font-semibold'
                          : 'text-[#FFFFFF] hover:bg-white/8'
                      }`}
                    >
                      <span className="truncate">{city}</span>
                      {selectedLocation === city && <Check className="w-3.5 h-3.5 text-[#F45132] shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Disclaimer */}
              <div className="pt-2 border-t border-white/8 text-[9.5px] text-[#B3B3B3]/60 leading-tight">
                * Location selector demo.
              </div>
            </div>
          )}
        </div>

        {/* Circular Orange Submit Button with ArrowRight */}
        <div className="mt-2 sm:mt-0 sm:pl-1 flex justify-end">
          <button
            type="submit"
            className="w-full sm:w-11 sm:h-11 h-10 rounded-xl sm:rounded-full bg-[#F45132] hover:bg-[#E04326] flex items-center justify-center text-white shadow-lg shadow-[#F45132]/35 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F45132] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            aria-label="Submit search query"
          >
            <ArrowRight className="w-5 h-5 hidden sm:block shrink-0 stroke-[2.2]" aria-hidden="true" />
            <span className="sm:hidden text-xs font-semibold flex items-center justify-center gap-1.5 w-full">
              <span>Search Scene</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </span>
          </button>
        </div>
      </form>

      {/* Interactive feedback toast notification */}
      {searchFeedback && (
        <div
          role="status"
          aria-live="polite"
          className="absolute -bottom-9 left-2 flex items-center gap-2 text-xs text-[#F45132] font-medium bg-[#101010]/95 border border-white/10 px-3 py-1 rounded-full shadow-lg backdrop-blur-md animate-in fade-in"
        >
          <Sparkles className="w-3 h-3 text-[#F45132] shrink-0" aria-hidden="true" />
          <span className="truncate">{searchFeedback}</span>
        </div>
      )}
    </div>
  );
}
