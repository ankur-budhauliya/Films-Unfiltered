import React, { useEffect, useRef } from 'react';
import { X, MapPin, Sparkles, ArrowRight, ShieldCheck, Mail } from 'lucide-react';

export default function ArtistDetailModal({ artist, isOpen, onClose, onConnect }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !artist) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="artist-detail-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-[#101010] border border-white/15 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden my-auto"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-[#B3B3B3] hover:text-white hover:bg-black/90 border border-white/10 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F45132]"
          aria-label="Close profile modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Photo Header */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black">
          <img
            src={artist.image}
            alt={artist.name}
            className="w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-[#101010]/30 to-transparent" />
          
          {/* Top Pill Badges */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-xs font-semibold text-white">
              {artist.role}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-[#F45132]/25 border border-[#F45132]/40 text-[10.5px] font-semibold text-[#F45132]">
              Fictional Demo
            </span>
          </div>

          {/* Name & Location Overlaid */}
          <div className="absolute bottom-4 left-5 right-5">
            <div className="flex items-center gap-1.5 text-xs text-[#B3B3B3] mb-1">
              <MapPin className="w-3.5 h-3.5 text-[#F45132] shrink-0" />
              <span>{artist.location}</span>
              <span className="text-white/30">·</span>
              <span>{artist.specialty}</span>
            </div>
            <h2 id="artist-detail-title" className="font-display font-bold text-2xl sm:text-3xl text-white">
              {artist.name}
            </h2>
          </div>
        </div>

        {/* Profile Content Body */}
        <div className="p-5 sm:p-6 space-y-4">
          <div className="space-y-1.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B3B3B3]">About The Artist</h4>
            <p className="text-sm text-white/90 leading-relaxed font-normal">
              {artist.bio}
            </p>
          </div>

          {/* Collaboration Focus */}
          <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/8 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#F45132]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Collaboration Focus</span>
            </div>
            <p className="text-xs text-[#B3B3B3] leading-relaxed">
              {artist.collaborations}
            </p>
          </div>

          {/* Demonstration Notice */}
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2 text-xs text-[#B3B3B3]">
            <ShieldCheck className="w-4 h-4 text-[#F45132] shrink-0 mt-0.5" />
            <p className="text-[11px] leading-relaxed">
              <strong>Demonstration Profile:</strong> This is a fictional artist preview designed to showcase Films Unfiltered's upcoming artist community directory. No live user data is processed.
            </p>
          </div>

          {/* Modal Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
            <button
              type="button"
              onClick={() => {
                onClose();
                if (onConnect) onConnect(artist);
              }}
              className="w-full sm:flex-1 py-3 px-5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#F45132] hover:bg-[#E04326] shadow-md shadow-[#F45132]/25 transition-all cursor-pointer flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F45132]"
            >
              <Mail className="w-4 h-4" />
              <span>Connect with {artist.name.split(' ')[0]}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto py-3 px-5 rounded-full text-xs sm:text-sm font-medium text-[#B3B3B3] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer text-center"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
