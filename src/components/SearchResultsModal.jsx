import React, { useEffect, useRef } from 'react';
import { X, Search, MapPin, Sparkles, AlertCircle, ArrowUpRight, Music2, Clapperboard, Calendar } from 'lucide-react';
import { DEMO_SEARCH_CATALOG } from '../data/mockData';

export default function SearchResultsModal({ isOpen, onClose, query, location, onClear }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Filter demo items based on user's query and location
  const normalizedQuery = (query || '').toLowerCase().trim();
  const isDefaultLocation = !location || location === 'Choose location';

  const matches = DEMO_SEARCH_CATALOG.filter((item) => {
    const matchesQuery = !normalizedQuery || 
      item.name.toLowerCase().includes(normalizedQuery) ||
      item.category.toLowerCase().includes(normalizedQuery) ||
      item.venue.toLowerCase().includes(normalizedQuery) ||
      item.matches.toLowerCase().includes(normalizedQuery);

    const matchesLocation = isDefaultLocation || 
      item.location.toLowerCase().includes(location.toLowerCase());

    return matchesQuery && matchesLocation;
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl bg-[#101722] border border-white/15 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden my-auto"
      >
        {/* Header */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-white/10 bg-gradient-to-r from-white/[0.03] to-transparent">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FF3366]/20 text-[#FF3366] border border-[#FF3366]/30">
                Frontend Demo Preview
              </span>
              <span className="text-xs text-[#A5ACB8]">Simulated Search State</span>
            </div>
            <h2 id="search-modal-title" className="font-display font-bold text-xl sm:text-2xl text-white">
              {query ? `Search: "${query}"` : 'All Artists & Shows'}
            </h2>
            <div className="flex items-center gap-1.5 text-xs text-[#A5ACB8]">
              <MapPin className="w-3.5 h-3.5 text-[#FF7048] shrink-0" />
              <span>Location filter: <strong className="text-white font-medium">{location || 'Any location'}</strong></span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-[#A5ACB8] hover:text-white hover:bg-white/10 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3366]"
            aria-label="Close search results"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Demo Disclaimer Notice */}
        <div className="px-5 sm:px-6 py-2.5 bg-[#FF3366]/10 border-b border-[#FF3366]/20 flex items-start gap-2.5 text-xs text-[#F7F7F8]">
          <AlertCircle className="w-4 h-4 text-[#FF3366] shrink-0 mt-0.5" />
          <p className="text-[11.5px] text-[#F7F7F8]/90 leading-relaxed">
            <strong>Demonstration Notice:</strong> Real search indexing, live venue availability, and artist discovery will connect when backend API services are deployed. Below is an interactive frontend preview.
          </p>
        </div>

        {/* Results Body */}
        <div className="p-5 sm:p-6 max-h-[50vh] overflow-y-auto space-y-3">
          {matches.length > 0 ? (
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs text-[#A5ACB8] pb-1">
                <span>{matches.length} demo {matches.length === 1 ? 'match' : 'matches'} found</span>
                <span className="text-[11px] text-[#FF7048]">Frontend mock catalog</span>
              </div>
              {matches.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-white/20 transition-all flex items-start justify-between gap-3 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#FF3366] shrink-0">
                      {item.type === 'event' ? (
                        <Calendar className="w-4 h-4" />
                      ) : item.category.includes('Singer') ? (
                        <Music2 className="w-4 h-4" />
                      ) : (
                        <Clapperboard className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-[#FF7048] transition-colors">
                          {item.name}
                        </h4>
                        <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/10 text-[#A5ACB8]">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-[#A5ACB8] mt-0.5 flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-white/50" />
                        <span>{item.venue} ({item.location})</span>
                      </p>
                      <p className="text-[11px] text-[#A5ACB8]/70 mt-1">
                        Highlights: {item.matches}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => alert(`Demo interaction: Profile page for "${item.name}" will connect to live routes in the upcoming release.`)}
                    className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
                    aria-label={`View demo details for ${item.name}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 px-4 space-y-3">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-[#A5ACB8]">
                <Search className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-base text-white">No demo matches for "{query}"</h4>
                <p className="text-xs text-[#A5ACB8] max-w-sm mx-auto">
                  Try searching for demo keywords like <strong className="text-white">"Aria"</strong>, <strong className="text-white">"Singer"</strong>, <strong className="text-white">"DJ"</strong>, <strong className="text-white">"Comedy"</strong>, or choose another location.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-white/[0.02] flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClear}
            className="text-xs text-[#A5ACB8] hover:text-white transition-colors cursor-pointer focus:outline-none focus-visible:underline"
          >
            Clear Search
          </button>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-[#F7F7F8] bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
