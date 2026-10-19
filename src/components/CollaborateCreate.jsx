import React, { useState, useMemo } from 'react';
import { ArrowRight, Sparkles, Users, Filter, RotateCcw, HeartHandshake } from 'lucide-react';
import { COLLABORATION_CATEGORIES, COLLABORATION_OPPORTUNITIES } from '../data/mockData';
import OpportunityCard from './OpportunityCard';
import OpportunityDetailModal from './OpportunityDetailModal';

export default function CollaborateCreate({ onOpenAuth, onOpenNavNotice }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeOpportunityModal, setActiveOpportunityModal] = useState(null);

  // Client-side filtering of opportunities based on category
  const filteredOpportunities = useMemo(() => {
    if (selectedCategory === 'all') {
      return COLLABORATION_OPPORTUNITIES;
    }
    return COLLABORATION_OPPORTUNITIES.filter((opp) => opp.category === selectedCategory);
  }, [selectedCategory]);

  const scrollToOpportunities = () => {
    const el = document.getElementById('opportunities-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFindCollaboratorsClick = () => {
    if (onOpenAuth) {
      onOpenAuth('signup');
    } else {
      scrollToOpportunities();
    }
  };

  const handleStartConnectingClick = () => {
    if (onOpenAuth) {
      onOpenAuth('signup');
    } else if (onOpenNavNotice) {
      onOpenNavNotice('collaborate');
    }
  };

  return (
    <section
      id="collaborate"
      className="relative py-24 sm:py-32 bg-[#000000] text-white border-t border-white/10 overflow-hidden selection:bg-[#F45132] selection:text-white"
      aria-label="Collaborate and Create"
    >
      {/* Restrained Brand Orange Ambient Lighting */}
      <div
        className="absolute top-1/4 -right-36 w-[550px] h-[550px] rounded-full bg-[#F45132]/6 blur-[170px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 -left-36 w-[500px] h-[500px] rounded-full bg-[#F45132]/5 blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle Background Radial Dots Pattern */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-24">

        {/* ================= 1 & 2. SECTION INTRODUCTION & COLLABORATION EDITORIAL VISUAL ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Introduction & CTA Buttons (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-7">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45132]" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.24em] uppercase text-[#B3B3B3]">
                GOOD THINGS HAPPEN TOGETHER
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-[46px] text-white tracking-tight leading-[1.12]">
              Your next big thing starts with a{' '}
              <span className="text-[#F45132] drop-shadow-[0_0_28px_rgba(244,81,50,0.35)]">
                connection.
              </span>
            </h2>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-[#B3B3B3] leading-relaxed font-normal">
              Find your creative people, build something unexpected, and turn ideas into experiences worth sharing.
            </p>

            {/* Two Action CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* Primary CTA */}
              <button
                type="button"
                onClick={handleFindCollaboratorsClick}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#F45132] hover:bg-[#E04326] shadow-lg shadow-[#F45132]/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F45132]"
              >
                <span>Find Collaborators</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              {/* Secondary CTA */}
              <button
                type="button"
                onClick={scrollToOpportunities}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#121212] hover:bg-white/10 border border-white/15 hover:border-white/30 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F45132]"
              >
                <span>Explore Opportunities</span>
              </button>
            </div>
          </div>

          {/* Right Column: Distinct Editorial Collage (7 cols on lg) */}
          <div className="lg:col-span-7 relative w-full select-none">
            <div className="relative grid grid-cols-12 gap-3.5 sm:gap-4 p-2 sm:p-4">
              
              {/* Panel 1: Large Primary Filmmaker & Cinematographer on Set (7 cols, tall) */}
              <div className="col-span-7 relative h-72 sm:h-96 rounded-3xl overflow-hidden border border-white/12 shadow-[0_20px_50px_rgba(0,0,0,0.9)] bg-[#101010] group">
                <img
                  src="/artists/filmmaker_prod.jpg"
                  alt="Director and cinematographer collaborating on film set"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F45132]">
                    Film & Cinematography
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                    Vision meets execution on set
                  </p>
                </div>
              </div>

              {/* Right Stack: Panel 2 & Panel 3 (5 cols) */}
              <div className="col-span-5 flex flex-col gap-3.5 sm:gap-4">
                
                {/* Panel 2: Music Producer / DJ in Studio */}
                <div className="relative h-[138px] sm:h-[184px] rounded-3xl overflow-hidden border border-white/12 shadow-[0_20px_50px_rgba(0,0,0,0.9)] bg-[#101010] group">
                  <img
                    src="/artists/dj.jpg"
                    alt="Producer mixing tracks at audio console"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#F45132]">
                      Music & Sound
                    </span>
                    <p className="text-xs font-bold text-white truncate leading-tight">
                      Producer & Vocalist sessions
                    </p>
                  </div>
                </div>

                {/* Panel 3: Stage Performer / Actors Rehearsing */}
                <div className="relative h-[138px] sm:h-[184px] rounded-3xl overflow-hidden border border-white/12 shadow-[0_20px_50px_rgba(0,0,0,0.9)] bg-[#101010] group">
                  <img
                    src="/artists/comedian_speaking.jpg"
                    alt="Performers preparing stage material together"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#F45132]">
                      Stage & Performance
                    </span>
                    <p className="text-xs font-bold text-white truncate leading-tight">
                      Writers & performers in flow
                    </p>
                  </div>
                </div>

              </div>

              {/* Integrated Distinct Floating Card */}
              <div className="absolute -bottom-4 sm:-bottom-5 left-4 sm:left-8 z-20 max-w-[310px] sm:max-w-[340px]">
                <div className="glass-panel rounded-2xl p-3.5 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.95)] border border-white/15 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F45132]/15 border border-[#F45132]/30 flex items-center justify-center shrink-0 text-[#F45132]">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h5 className="font-display font-bold text-xs sm:text-sm text-white leading-tight">
                      Better things happen together
                    </h5>
                    <p className="text-[11px] text-[#B3B3B3] truncate mt-0.5">
                      Meet your next creative collaborator
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ================= 3, 4 & 5. COLLABORATION OPPORTUNITY CARDS & FILTERS ================= */}
        <div id="opportunities-section" className="space-y-8 pt-6">
          
          {/* Section Subheading & Category Filters */}
          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                Opportunities worth showing up for
              </h3>
              <p className="text-sm text-[#B3B3B3]">
                Discover projects and find people who bring your ideas to life.
              </p>
            </div>

            {/* Horizontal Category Filters */}
            <div className="w-full pt-1">
              <div
                role="tablist"
                aria-label="Filter collaboration opportunities by discipline"
                className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none snap-x -mx-4 px-4 sm:mx-0 sm:px-0"
              >
                {COLLABORATION_CATEGORIES.map((cat) => {
                  const isSelected = selectedCategory === cat.id;

                  return (
                    <button
                      key={cat.id}
                      role="tab"
                      id={`collab-tab-${cat.id}`}
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
          </div>

          {/* Opportunities Cards Grid */}
          {filteredOpportunities.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
              {filteredOpportunities.map((opp) => (
                <OpportunityCard
                  key={opp.id}
                  opportunity={opp}
                  onSelect={(item) => setActiveOpportunityModal(item)}
                />
              ))}
            </div>
          ) : (
            /* Clean Empty State with Filter Reset */
            <div className="p-12 text-center rounded-3xl bg-[#101010] border border-white/12 space-y-4 max-w-xl mx-auto shadow-2xl">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-[#F45132]">
                <Filter className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-lg text-white">
                  No open calls in this category
                </h4>
                <p className="text-xs text-[#B3B3B3] leading-relaxed">
                  No sample opportunities currently match <strong className="text-white capitalize">{selectedCategory}</strong>.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#F45132] hover:bg-[#E04326] cursor-pointer shadow-md shadow-[#F45132]/25 transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to All Opportunities</span>
              </button>
            </div>
          )}

        </div>

        {/* ================= 6. BOTTOM CALL TO ACTION ================= */}
        <div className="pt-6 sm:pt-10">
          <div className="relative rounded-3xl overflow-hidden bg-[#101010] border border-white/12 p-8 sm:p-12 lg:p-14 text-center shadow-[0_25px_60px_rgba(0,0,0,0.95)] max-w-4xl mx-auto">
            {/* Ambient orange glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#F45132]/10 blur-[120px] pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10.5px] font-bold uppercase tracking-wider text-[#B3B3B3] mx-auto">
                <Sparkles className="w-3 h-3 text-[#F45132]" aria-hidden="true" />
                <span>Creative Synergy</span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight">
                Make something people haven't seen before.
              </h3>

              <p className="text-sm sm:text-base text-[#B3B3B3] leading-relaxed max-w-xl mx-auto">
                Your talent is one part of the story. Find the people who bring the rest to life.
              </p>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={handleStartConnectingClick}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#F45132] hover:bg-[#E04326] shadow-lg shadow-[#F45132]/30 hover:shadow-[#F45132]/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F45132] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101010]"
                >
                  <span>Start Connecting</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Opportunity Detail Modal */}
      <OpportunityDetailModal
        opportunity={activeOpportunityModal}
        isOpen={Boolean(activeOpportunityModal)}
        onClose={() => setActiveOpportunityModal(null)}
        onSignUp={() => {
          if (onOpenAuth) onOpenAuth('signup');
        }}
      />
    </section>
  );
}
