import React, { useEffect, useRef } from 'react';
import { X, Calendar, Clock, MapPin, Sparkles, ShieldCheck, Bookmark, Check } from 'lucide-react';

export default function EventDetailModal({ event, isOpen, onClose }) {
  const modalRef = useRef(null);
  const [saved, setSaved] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    setSaved(false);
  }, [event]);

  if (!isOpen || !event) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="event-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-xl bg-[#101010] border border-white/15 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden my-auto"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 text-[#B3B3B3] hover:text-white hover:bg-black/95 border border-white/10 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F45132]"
          aria-label="Close event details modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Cinematic Header Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-[#101010]/40 to-transparent" />

          {/* Top Category and Status Badges */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#F45132] text-xs font-semibold text-white shadow-md">
              {event.categoryLabel}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/12 text-[10px] font-semibold text-[#B3B3B3]">
              Demo Listing
            </span>
          </div>

          {/* Event Title Overlaid */}
          <div className="absolute bottom-4 left-5 right-5">
            <h2 id="event-modal-title" className="font-display font-extrabold text-2xl sm:text-3xl text-white leading-tight">
              {event.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-4">
          
          {/* Key Event Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/8 text-xs">
            <div className="flex items-center gap-2 text-[#B3B3B3]">
              <Calendar className="w-4 h-4 text-[#F45132] shrink-0" />
              <div>
                <span className="block text-[10px] uppercase font-bold text-[#B3B3B3]/70">Date</span>
                <span className="text-white font-medium">{event.date}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[#B3B3B3]">
              <Clock className="w-4 h-4 text-[#F45132] shrink-0" />
              <div>
                <span className="block text-[10px] uppercase font-bold text-[#B3B3B3]/70">Time</span>
                <span className="text-white font-medium">{event.time}</span>
              </div>
            </div>

            <div className="sm:col-span-2 flex items-start gap-2 text-[#B3B3B3] pt-1 border-t border-white/6">
              <MapPin className="w-4 h-4 text-[#F45132] shrink-0 mt-0.5" />
              <div>
                <span className="block text-[10px] uppercase font-bold text-[#B3B3B3]/70">Venue & City</span>
                <span className="text-white font-medium">{event.venue}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B3B3B3]">About This Show</h4>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
              {event.longDescription || event.description}
            </p>
          </div>

          {/* Demonstration Notice */}
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5 text-xs text-[#B3B3B3]">
            <ShieldCheck className="w-4 h-4 text-[#F45132] shrink-0 mt-0.5" />
            <p className="text-[11px] leading-relaxed">
              <strong>Demonstration Notice:</strong> This event listing is a simulated frontend showcase. Ticket booking and live RSVP pipelines will connect when ticketing partner integrations are active.
            </p>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
            <button
              type="button"
              onClick={() => setSaved(!saved)}
              className={`w-full sm:flex-1 py-3 px-5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F45132] ${
                saved
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#F45132] hover:bg-[#E04326] text-white shadow-md shadow-[#F45132]/25'
              }`}
            >
              {saved ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Saved to Demo Schedule</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-4 h-4" />
                  <span>Save to Schedule (Demo)</span>
                </>
              )}
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
