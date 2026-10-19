import React, { useEffect, useRef } from 'react';
import { X, MapPin, Sparkles, ShieldCheck, CheckCircle2, UserPlus, Tag } from 'lucide-react';

export default function OpportunityDetailModal({ opportunity, isOpen, onClose, onSignUp }) {
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

  if (!isOpen || !opportunity) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="opp-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-[#101010] border border-white/15 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden my-auto"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 text-[#B3B3B3] hover:text-white hover:bg-black/95 border border-white/10 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F45132]"
          aria-label="Close opportunity modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Visual Header */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-black">
          <img
            src={opportunity.image}
            alt={opportunity.title}
            className="w-full h-full object-cover filter brightness-[0.80]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-[#101010]/40 to-transparent" />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#F45132] text-xs font-semibold text-white shadow-md">
              {opportunity.categoryLabel}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/12 text-[10px] font-semibold text-[#B3B3B3]">
              Demo Open Call
            </span>
          </div>

          {/* Title Overlaid */}
          <div className="absolute bottom-4 left-5 right-5">
            <div className="flex items-center gap-1.5 text-xs text-[#B3B3B3] mb-1">
              <MapPin className="w-3.5 h-3.5 text-[#F45132] shrink-0" />
              <span>{opportunity.location}</span>
              <span className="text-white/30">·</span>
              <span className="text-white/90 font-medium">By {opportunity.creator}</span>
            </div>
            <h2 id="opp-modal-title" className="font-display font-extrabold text-2xl sm:text-3xl text-white leading-tight">
              {opportunity.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-4">
          
          {/* Overview Description */}
          <div className="space-y-1.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B3B3B3]">Project Overview</h4>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
              {opportunity.fullDescription || opportunity.description}
            </p>
          </div>

          {/* Requirements List */}
          {opportunity.requirements && opportunity.requirements.length > 0 && (
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/8 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                <Sparkles className="w-3.5 h-3.5 text-[#F45132]" />
                <span>What We Are Looking For</span>
              </div>
              <ul className="space-y-1.5 text-xs text-[#B3B3B3]">
                {opportunity.requirements.map((req, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F45132] shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {opportunity.tags && opportunity.tags.map((t, i) => (
              <span key={i} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/8 text-[11px] text-[#B3B3B3]">
                #{t}
              </span>
            ))}
          </div>

          {/* Demonstration Notice */}
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5 text-xs text-[#B3B3B3]">
            <ShieldCheck className="w-4 h-4 text-[#F45132] shrink-0 mt-0.5" />
            <p className="text-[11px] leading-relaxed">
              <strong>Demonstration Opportunity:</strong> This is a sample collaboration call to preview Films Unfiltered's creative networking features. No live application or submission is submitted to a third party.
            </p>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
            <button
              type="button"
              onClick={() => {
                onClose();
                if (onSignUp) onSignUp();
              }}
              className="w-full sm:flex-1 py-3 px-5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#F45132] hover:bg-[#E04326] shadow-md shadow-[#F45132]/25 transition-all cursor-pointer flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F45132]"
            >
              <UserPlus className="w-4 h-4" />
              <span>Sign Up to Collaborate</span>
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
