import React, { useState } from 'react';
import { ARTIST_COLLAGE } from '../data/mockData';
import { EventCard, ArtistConnectionCard } from './FloatingCards';
import { Sparkles } from 'lucide-react';

export default function ArtistCollage({ onSelectDemoArtist }) {
  const [hoveredArtist, setHoveredArtist] = useState(null);

  // Group artists for the desktop 3-column editorial arrangement
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
    <div className="relative w-full h-full min-h-[480px] sm:min-h-[580px] lg:min-h-[660px] flex items-center justify-center select-none">
      {/* Layered Multi-Stop Ambient Glows */}
      <div
        className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-[#FF3366]/15 blur-[130px] pointer-events-none animate-glow"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-[#FF7048]/12 blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#101722]/80 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      {/* ================= DESKTOP EDITORIAL COMPOSITION (lg+) ================= */}
      <div className="hidden lg:grid grid-cols-3 gap-4 w-full max-w-[620px] xl:max-w-[660px] relative py-4">
        
        {/* Column 1: Singer (Tall) + Comedian */}
        <div className="flex flex-col gap-4 pt-4">
          {/* Card 1: Singer */}
          {singer && (
            <div
              className="relative h-[340px] rounded-2xl overflow-hidden border border-white/12 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.8)] bg-[#101722] group cursor-pointer transition-all duration-500 ease-out hover:z-20 hover:scale-[1.03] hover:border-[#FF3366]/50 animate-float-slow"
              style={{ transform: 'rotate(-2.5deg)', '--rot': '-2.5deg' }}
              onClick={() => handleCardClick(singer)}
              onMouseEnter={() => setHoveredArtist(singer.id)}
              onMouseLeave={() => setHoveredArtist(null)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') handleCardClick(singer); }}
              aria-label={`Explore artist profile for ${singer.title}`}
            >
              <img
                src={singer.image}
                alt="Singer performing under stage spotlight"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-[#080B10]/40 to-transparent" />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-semibold text-white flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF3366] animate-pulse"></span>
                <span>Live Stage</span>
              </div>
              <div className="absolute bottom-3.5 left-3.5 right-3.5">
                <span className="text-[10px] font-bold tracking-wider uppercase text-[#FF7048]">
                  Singer & Songwriter
                </span>
                <h4 className="font-display font-bold text-base text-white leading-tight">
                  {singer.title}
                </h4>
                <p className="text-[11px] text-[#A5ACB8]">{singer.genre}</p>
              </div>
            </div>
          )}

          {/* Card 6: Stand-up Comedian */}
          {comedian && (
            <div
              className="relative h-[250px] rounded-2xl overflow-hidden border border-white/12 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.8)] bg-[#101722] group cursor-pointer transition-all duration-500 ease-out hover:z-20 hover:scale-[1.03] hover:border-[#FF7048]/50"
              style={{ transform: 'rotate(1.5deg)' }}
              onClick={() => handleCardClick(comedian)}
              onMouseEnter={() => setHoveredArtist(comedian.id)}
              onMouseLeave={() => setHoveredArtist(null)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') handleCardClick(comedian); }}
              aria-label={`Explore artist profile for ${comedian.title}`}
            >
              <img
                src={comedian.image}
                alt="Stand-up comedian holding microphone"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-[#080B10]/40 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-[10px] font-bold tracking-wider uppercase text-[#FF7048]">
                  Stand-up Comic
                </span>
                <h4 className="font-display font-bold text-sm text-white leading-tight">
                  {comedian.title}
                </h4>
                <p className="text-[10px] text-[#A5ACB8]">{comedian.genre}</p>
              </div>
            </div>
          )}
        </div>

        {/* Column 2: DJ + Actor */}
        <div className="flex flex-col gap-4 -mt-2">
          {/* Card 3: DJ */}
          {dj && (
            <div
              className="relative h-[260px] rounded-2xl overflow-hidden border border-white/12 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.8)] bg-[#101722] group cursor-pointer transition-all duration-500 ease-out hover:z-20 hover:scale-[1.03] hover:border-[#FF3366]/50 animate-float-reverse"
              style={{ transform: 'rotate(1deg)', '--rot': '1deg' }}
              onClick={() => handleCardClick(dj)}
              onMouseEnter={() => setHoveredArtist(dj.id)}
              onMouseLeave={() => setHoveredArtist(null)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') handleCardClick(dj); }}
              aria-label={`Explore artist profile for ${dj.title}`}
            >
              <img
                src={dj.image}
                alt="DJ mixing tracks in neon club atmosphere"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-[#080B10]/40 to-transparent" />
              <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-semibold text-white">
                Club Resident
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-[10px] font-bold tracking-wider uppercase text-[#FF3366]">
                  DJ / Producer
                </span>
                <h4 className="font-display font-bold text-sm text-white leading-tight">
                  {dj.title}
                </h4>
                <p className="text-[10px] text-[#A5ACB8]">{dj.genre}</p>
              </div>
            </div>
          )}

          {/* Card 4: Actor */}
          {actor && (
            <div
              className="relative h-[330px] rounded-2xl overflow-hidden border border-white/12 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.8)] bg-[#101722] group cursor-pointer transition-all duration-500 ease-out hover:z-20 hover:scale-[1.03] hover:border-white/30"
              style={{ transform: 'rotate(-2deg)' }}
              onClick={() => handleCardClick(actor)}
              onMouseEnter={() => setHoveredArtist(actor.id)}
              onMouseLeave={() => setHoveredArtist(null)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') handleCardClick(actor); }}
              aria-label={`Explore artist profile for ${actor.title}`}
            >
              <img
                src={actor.image}
                alt="Dramatic portrait of actor in rim lighting"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-[#080B10]/40 to-transparent" />
              <div className="absolute bottom-3.5 left-3.5 right-3.5">
                <span className="text-[10px] font-bold tracking-wider uppercase text-[#FF7048]">
                  Stage & Film Actor
                </span>
                <h4 className="font-display font-bold text-base text-white leading-tight">
                  {actor.title}
                </h4>
                <p className="text-[11px] text-[#A5ACB8]">{actor.genre}</p>
              </div>
            </div>
          )}
        </div>

        {/* Column 3: Filmmaker + Dancer */}
        <div className="flex flex-col gap-4 pt-2">
          {/* Card 2: Filmmaker */}
          {filmmaker && (
            <div
              className="relative h-[270px] rounded-2xl overflow-hidden border border-white/12 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.8)] bg-[#101722] group cursor-pointer transition-all duration-500 ease-out hover:z-20 hover:scale-[1.03] hover:border-[#FF7048]/50"
              style={{ transform: 'rotate(2deg)' }}
              onClick={() => handleCardClick(filmmaker)}
              onMouseEnter={() => setHoveredArtist(filmmaker.id)}
              onMouseLeave={() => setHoveredArtist(null)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') handleCardClick(filmmaker); }}
              aria-label={`Explore artist profile for ${filmmaker.title}`}
            >
              <img
                src={filmmaker.image}
                alt="Filmmaker operating a cinema camera rig"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-[#080B10]/40 to-transparent" />
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-semibold text-white">
                4K Cinema
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-[10px] font-bold tracking-wider uppercase text-[#FF7048]">
                  Cinematographer
                </span>
                <h4 className="font-display font-bold text-sm text-white leading-tight">
                  {filmmaker.title}
                </h4>
                <p className="text-[10px] text-[#A5ACB8]">{filmmaker.genre}</p>
              </div>
            </div>
          )}

          {/* Card 5: Dancer */}
          {dancer && (
            <div
              className="relative h-[320px] rounded-2xl overflow-hidden border border-white/12 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.8)] bg-[#101722] group cursor-pointer transition-all duration-500 ease-out hover:z-20 hover:scale-[1.03] hover:border-[#FF3366]/50 animate-float-slow"
              style={{ transform: 'rotate(-1.5deg)', '--rot': '-1.5deg' }}
              onClick={() => handleCardClick(dancer)}
              onMouseEnter={() => setHoveredArtist(dancer.id)}
              onMouseLeave={() => setHoveredArtist(null)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') handleCardClick(dancer); }}
              aria-label={`Explore artist profile for ${dancer.title}`}
            >
              <img
                src={dancer.image}
                alt="Contemporary dancer in mid-motion jump"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-[#080B10]/40 to-transparent" />
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-semibold text-white">
                Choreography
              </div>
              <div className="absolute bottom-3.5 left-3.5 right-3.5">
                <span className="text-[10px] font-bold tracking-wider uppercase text-[#FF7048]">
                  Contemporary Dancer
                </span>
                <h4 className="font-display font-bold text-base text-white leading-tight">
                  {dancer.title}
                </h4>
                <p className="text-[11px] text-[#A5ACB8]">{dancer.genre}</p>
              </div>
            </div>
          )}
        </div>

        {/* Floating Card 1: Event Card (Anchored bottom-left, bridging singer & comedian) */}
        <div
          className="absolute -bottom-2 -left-4 z-30 max-w-[320px] xl:max-w-[340px]"
          onClick={() => handleCardClick({ title: 'Indie Night: Acoustic Sessions' })}
        >
          <EventCard />
        </div>

        {/* Floating Card 2: Artist Connection Card (Anchored top-right, bridging filmmaker & actor) */}
        <div
          className="absolute top-4 -right-4 z-30 max-w-[285px] xl:max-w-[300px]"
          onClick={() => handleCardClick({ title: 'Creative Collaborators' })}
        >
          <ArtistConnectionCard />
        </div>
      </div>

      {/* ================= TABLET COMPOSITION (md to lg) ================= */}
      <div className="hidden md:flex lg:hidden flex-col gap-4 w-full p-2 relative">
        <div className="grid grid-cols-3 gap-3 w-full">
          {ARTIST_COLLAGE.slice(0, 6).map((item, index) => (
            <div
              key={item.id}
              className="relative h-64 rounded-2xl overflow-hidden border border-white/12 shadow-xl group bg-[#101722] cursor-pointer"
              style={{ transform: `rotate(${index % 2 === 0 ? '-1.5deg' : '1.5deg'})` }}
              onClick={() => handleCardClick(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-[#080B10]/40 to-transparent" />
              <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[9px] text-white border border-white/10">
                {item.badge}
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-[10px] font-bold tracking-wider uppercase text-[#FF3366]">{item.role}</span>
                <h4 className="font-display font-bold text-sm text-white leading-tight">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Floating cards cleanly integrated on tablet */}
        <div className="grid grid-cols-2 gap-3 mt-1">
          <div onClick={() => handleCardClick({ title: 'Indie Night: Acoustic Sessions' })}>
            <EventCard />
          </div>
          <div onClick={() => handleCardClick({ title: 'Creative Collaborators' })}>
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
                className="relative shrink-0 w-[240px] h-[310px] rounded-2xl overflow-hidden border border-white/15 shadow-2xl snap-center bg-[#101722] cursor-pointer"
                onClick={() => handleCardClick(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover filter brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-[#080B10]/40 to-transparent" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold text-white border border-white/10 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF3366]"></span>
                  {item.badge}
                </div>
                <div className="absolute bottom-3.5 left-3.5 right-3.5">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-[#FF7048]">{item.role}</span>
                  <h4 className="font-display font-bold text-base text-white">{item.title}</h4>
                  <p className="text-[11px] text-[#A5ACB8]">{item.genre}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Scroll hint pill */}
          <div className="text-center mt-1">
            <span className="text-[10px] text-[#A5ACB8]/70 font-medium">Swipe to explore artists →</span>
          </div>
        </div>

        {/* Stacked floating cards on Mobile */}
        <div className="space-y-3 pt-1">
          <div onClick={() => handleCardClick({ title: 'Indie Night: Acoustic Sessions' })}>
            <EventCard />
          </div>
          <div onClick={() => handleCardClick({ title: 'Creative Collaborators' })}>
            <ArtistConnectionCard />
          </div>
        </div>
      </div>
    </div>
  );
}
