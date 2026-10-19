import React, { useState } from 'react';
import { ARTIST_COLLAGE } from '../data/mockData';
import { EventCard, ArtistConnectionCard } from './FloatingCards';

function ScriptLabel({ label, className = '' }) {
  return (
    <div className={`inline-flex flex-col items-start select-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)] z-20 pointer-events-none ${className}`}>
      <span className="font-handwriting text-2xl sm:text-3xl text-white font-bold tracking-wide leading-none">
        {label}
      </span>
      <svg className="w-11 h-2 text-[#F45132] mt-0.5 overflow-visible" viewBox="0 0 50 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 5C14 2 36 2 48 5" stroke="#F45132" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function ArtistCollage({ onSelectDemoArtist }) {
  const [hoveredArtist, setHoveredArtist] = useState(null);

  const singer = ARTIST_COLLAGE.find((a) => a.id === 'singer');
  const filmmaker = ARTIST_COLLAGE.find((a) => a.id === 'filmmaker');
  const dj = ARTIST_COLLAGE.find((a) => a.id === 'dj');
  const actor = ARTIST_COLLAGE.find((a) => a.id === 'actor');
  const dancer = ARTIST_COLLAGE.find((a) => a.id === 'dancer');
  const comedian = ARTIST_COLLAGE.find((a) => a.id === 'comedian');

  const handleCardClick = (artist) => {
    if (onSelectDemoArtist && artist) {
      onSelectDemoArtist(artist);
    }
  };

  return (
    <div className="relative w-full h-full min-h-[500px] sm:min-h-[580px] lg:min-h-[660px] flex items-center justify-center select-none overflow-visible">
      {/* Subtle Orange Atmospheric Glows */}
      <div
        className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-[#F45132]/12 blur-[130px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-[#F45132]/8 blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      {/* ================= DESKTOP EDITORIAL COMPOSITION (lg+) ================= */}
      <div className="hidden lg:block w-full max-w-[620px] xl:max-w-[660px] relative py-4">
        
        {/* Tilted Collage Container */}
        <div 
          className="grid grid-cols-3 gap-3.5 w-full transition-transform duration-700 ease-out"
          style={{ transform: 'rotate(-2.5deg)' }}
        >
          
          {/* Column 1: Singer (top) + Comedian (bottom) */}
          <div className="flex flex-col gap-3.5 pt-4">
            {/* Card 1: Singer */}
            {singer && (
              <div
                className="relative h-[320px] rounded-2xl overflow-hidden border border-white/12 shadow-[0_20px_45px_rgba(0,0,0,0.85)] bg-[#101010] group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-[#F45132]/60 hover:z-20"
                onClick={() => handleCardClick(singer)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') handleCardClick(singer); }}
                aria-label={`Explore profile for ${singer.title}`}
              >
                <img
                  src={singer.image}
                  alt="Singer on stage"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Handwritten Label in bottom-left */}
                <ScriptLabel label="Singers" className="absolute bottom-4 left-4" />
              </div>
            )}

            {/* Card 2: Stand-up Comedian */}
            {comedian && (
              <div
                className="relative h-[270px] rounded-2xl overflow-hidden border border-white/12 shadow-[0_20px_45px_rgba(0,0,0,0.85)] bg-[#101010] group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-[#F45132]/60 hover:z-20"
                onClick={() => handleCardClick(comedian)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') handleCardClick(comedian); }}
                aria-label={`Explore profile for ${comedian.title}`}
              >
                <img
                  src={comedian.image}
                  alt="Stand-up comedian holding microphone"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Handwritten Label in top-left */}
                <ScriptLabel label="Comedians" className="absolute top-4 left-4" />
              </div>
            )}
          </div>

          {/* Column 2: DJ (top) + Dancer (bottom) */}
          <div className="flex flex-col gap-3.5 -mt-3">
            {/* Card 3: DJ */}
            {dj && (
              <div
                className="relative h-[270px] rounded-2xl overflow-hidden border border-white/12 shadow-[0_20px_45px_rgba(0,0,0,0.85)] bg-[#101010] group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-[#F45132]/60 hover:z-20"
                onClick={() => handleCardClick(dj)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') handleCardClick(dj); }}
                aria-label={`Explore profile for ${dj.title}`}
              >
                <img
                  src={dj.image}
                  alt="DJ performing live"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Handwritten Label in top-right */}
                <ScriptLabel label="DJs" className="absolute top-4 right-4" />
              </div>
            )}

            {/* Card 4: Dancer */}
            {dancer && (
              <div
                className="relative h-[320px] rounded-2xl overflow-hidden border border-white/12 shadow-[0_20px_45px_rgba(0,0,0,0.85)] bg-[#101010] group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-[#F45132]/60 hover:z-20"
                onClick={() => handleCardClick(dancer)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') handleCardClick(dancer); }}
                aria-label={`Explore profile for ${dancer.title}`}
              >
                <img
                  src={dancer.image}
                  alt="Contemporary dancer in motion"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Handwritten Label in middle-left */}
                <ScriptLabel label="Dancers" className="absolute top-1/3 left-4" />
              </div>
            )}
          </div>

          {/* Column 3: Actor (top) + Filmmaker (bottom) */}
          <div className="flex flex-col gap-3.5 pt-2">
            {/* Card 5: Actor */}
            {actor && (
              <div
                className="relative h-[320px] rounded-2xl overflow-hidden border border-white/12 shadow-[0_20px_45px_rgba(0,0,0,0.85)] bg-[#101010] group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-[#F45132]/60 hover:z-20"
                onClick={() => handleCardClick(actor)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') handleCardClick(actor); }}
                aria-label={`Explore profile for ${actor.title}`}
              >
                <img
                  src={actor.image}
                  alt="Actor portrait in dark cinematic lighting"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Handwritten Label in bottom-right */}
                <ScriptLabel label="Actors" className="absolute bottom-6 right-4" />
              </div>
            )}

            {/* Card 6: Filmmaker */}
            {filmmaker && (
              <div
                className="relative h-[270px] rounded-2xl overflow-hidden border border-white/12 shadow-[0_20px_45px_rgba(0,0,0,0.85)] bg-[#101010] group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-[#F45132]/60 hover:z-20"
                onClick={() => handleCardClick(filmmaker)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') handleCardClick(filmmaker); }}
                aria-label={`Explore profile for ${filmmaker.title}`}
              >
                <img
                  src={filmmaker.image}
                  alt="Filmmaker operating cinema camera"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Handwritten Label in bottom-right */}
                <ScriptLabel label="Filmmakers" className="absolute bottom-4 right-4" />
              </div>
            )}
          </div>
        </div>

        {/* Floating Card 1: Event Card - positioned in center bridging Singer & DJ columns */}
        <div
          className="absolute top-[42%] left-[12%] z-30 max-w-[320px] xl:max-w-[340px]"
          onClick={() => handleCardClick({ title: 'Indie Night' })}
        >
          <EventCard />
        </div>

        {/* Floating Card 2: Artist Connection Card - positioned in bottom-right bridging Dancer & Filmmaker */}
        <div
          className="absolute -bottom-2 right-2 z-30 max-w-[280px]"
          onClick={() => handleCardClick({ title: 'Artists Community' })}
        >
          <ArtistConnectionCard />
        </div>
      </div>

      {/* ================= TABLET COMPOSITION (md to lg) ================= */}
      <div className="hidden md:flex lg:hidden flex-col gap-4 w-full p-2 relative">
        <div className="grid grid-cols-3 gap-3 w-full">
          {ARTIST_COLLAGE.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="relative h-64 rounded-2xl overflow-hidden border border-white/12 shadow-xl group bg-[#101010] cursor-pointer"
              onClick={() => handleCardClick(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <ScriptLabel label={item.label || item.id.charAt(0).toUpperCase() + item.id.slice(1) + 's'} className="absolute bottom-3 left-3" />
            </div>
          ))}
        </div>

        {/* Floating cards on tablet */}
        <div className="grid grid-cols-2 gap-3 mt-1">
          <div onClick={() => handleCardClick({ title: 'Indie Night' })}>
            <EventCard />
          </div>
          <div onClick={() => handleCardClick({ title: 'Artists Community' })}>
            <ArtistConnectionCard />
          </div>
        </div>
      </div>

      {/* ================= MOBILE COMPOSITION (< md) ================= */}
      <div className="md:hidden w-full space-y-4 pt-2">
        {/* Horizontal Snap Carousel */}
        <div className="relative">
          <div className="flex gap-3 overflow-x-auto pb-3 px-1 scrollbar-none snap-x snap-mandatory">
            {ARTIST_COLLAGE.map((item) => (
              <div
                key={item.id}
                className="relative shrink-0 w-[240px] h-[310px] rounded-2xl overflow-hidden border border-white/15 shadow-2xl snap-center bg-[#101010] cursor-pointer"
                onClick={() => handleCardClick(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <ScriptLabel label={item.id.charAt(0).toUpperCase() + item.id.slice(1) + 's'} className="absolute bottom-4 left-4" />
              </div>
            ))}
          </div>
          <div className="text-center mt-1">
            <span className="text-[10px] text-[#B3B3B3]/70 font-medium">Swipe to explore artists →</span>
          </div>
        </div>

        {/* Stacked floating cards on Mobile */}
        <div className="space-y-3 pt-1">
          <div onClick={() => handleCardClick({ title: 'Indie Night' })}>
            <EventCard />
          </div>
          <div onClick={() => handleCardClick({ title: 'Artists Community' })}>
            <ArtistConnectionCard />
          </div>
        </div>
      </div>
    </div>
  );
}
