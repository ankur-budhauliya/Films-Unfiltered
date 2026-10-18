import React, { useEffect, useRef } from 'react';
import { X, Sparkles, Compass, Users, Calendar, Info, Shield, HelpCircle, Mail, FileText } from 'lucide-react';

const sectionDetails = {
  discover: {
    title: 'Discover Artists Hub',
    icon: Compass,
    badge: 'In Active Development',
    description: 'The Discover Artists portal will allow you to filter creators by discipline (actors, singers, DJs, filmmakers, dancers), review audio/visual portfolios, and contact verified talent directly.',
    upcomingFeatures: ['Multi-discipline portfolio player', 'Direct artist availability calendar', 'Verified credit badges'],
  },
  shows: {
    title: 'Live Shows & Event Discovery',
    icon: Calendar,
    badge: 'Coming Soon',
    description: 'Discover indie gigs, stand-up showcases, open mics, and stage performances near your current city. Venue RSVP and guestlist management will be integrated.',
    upcomingFeatures: ['Interactive venue map', 'Artist line-up breakdowns', 'Instant RSVP & ticket tiers'],
  },
  categories: {
    title: 'Creative Disciplines & Tags',
    icon: Compass,
    badge: 'Explore Catalog',
    description: 'Browse categorized artist pools across live vocalists, club DJs, method actors, stand-up comics, contemporary dancers, cinematographers, and sound designers.',
    upcomingFeatures: ['Sub-genre tagging', 'Regional style directories', 'Collaboration filter tags'],
  },
  venues: {
    title: 'Creative Venues & Stage Directory',
    icon: Calendar,
    badge: 'Venue Partner Program',
    description: 'Connecting live music clubs, intimate indie auditoriums, blackbox theaters, and comedy basements with performers looking to book their next gig.',
    upcomingFeatures: ['Venue tech spec sheets (audio/lighting)', 'Direct booking inquiries', 'Performer reviews'],
  },
  events: {
    title: 'Trending Shows & Festival Calendar',
    icon: Calendar,
    badge: 'Curated Stage Scene',
    description: 'An editorial calendar highlighting upcoming underground gigs, film festival screenings, and experimental theatrical productions across key creative hubs.',
    upcomingFeatures: ['Curator picks', 'Early access passes', 'Creator jam invites'],
  },
  collaborate: {
    title: 'Collaboration Matching',
    icon: Users,
    badge: 'Preview Mode',
    description: 'Post creative briefs for upcoming film productions, theater plays, studio jam sessions, or music video shoots. Find collaborators with complementary skillsets.',
    upcomingFeatures: ['Creative brief postings', 'Smart skill matching', 'Direct messaging with talent'],
  },
  resources: {
    title: 'Artist Resources & Toolkits',
    icon: Sparkles,
    badge: 'Creator Tools',
    description: 'Guides, production contract templates, rider checklists, and funding resources designed to support independent performers and filmmakers.',
    upcomingFeatures: ['Standard collaboration contracts', 'Stage rider templates', 'Grant & residency alerts'],
  },
  about: {
    title: 'About Films Unfiltered',
    icon: Info,
    badge: 'Our Mission',
    description: 'Films Unfiltered is an independent, editorial-style creative platform designed to celebrate raw artistic expression and foster uninhibited collaboration between performers, directors, and creators.',
    upcomingFeatures: ['Curated spotlight editorials', 'Creator grant programs', 'Live community jam sessions'],
  },
  contact: {
    title: 'Contact Films Unfiltered',
    icon: Mail,
    badge: 'Creator Inquiries',
    description: 'Have a question about partnerships, artist verification, press coverage, or venue onboarding? Our community team is here for you.',
    upcomingFeatures: ['Direct creator support channel', 'Venue onboarding team', 'Press & editorial inquiries'],
  },
  help: {
    title: 'Help Center & Community FAQ',
    icon: HelpCircle,
    badge: 'Support Desk',
    description: 'Learn how to build your profile, showcase your past works, verify your stage credentials, and safely collaborate with other artists.',
    upcomingFeatures: ['Profile setup tutorials', 'Safety & verification guidelines', 'Direct resolution tickets'],
  },
  privacy: {
    title: 'Privacy Policy & Data Protections',
    icon: Shield,
    badge: 'Legal & Privacy',
    description: 'Films Unfiltered is committed to protecting creator privacy and intellectual property. We do not sell creator contact information or private audition reels.',
    upcomingFeatures: ['Transparent data control', 'Private portfolio settings', 'GDPR & CCPA compliance'],
  },
  terms: {
    title: 'Terms of Service',
    icon: FileText,
    badge: 'Community Standards',
    description: 'Our community guidelines ensure a safe, respectful, and professional environment for artistic collaboration, fair credit attribution, and live show discovery.',
    upcomingFeatures: ['Intellectual property protection', 'Zero tolerance harassment policy', 'Verified credit attribution'],
  },
};

export default function NavigationNoticeModal({ isOpen, onClose, destinationKey = 'discover' }) {
  const modalRef = useRef(null);
  const details = sectionDetails[destinationKey] || sectionDetails.discover;
  const Icon = details.icon;

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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="nav-modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-[#101722] border border-white/15 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden my-auto p-6 sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#A5ACB8] hover:text-white hover:bg-white/10 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3366]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FF3366]/20 text-[#FF3366] border border-[#FF3366]/30">
            {details.badge}
          </span>
          <span className="text-xs text-[#A5ACB8]">Films Unfiltered Platform</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-[#FF7048]">
            <Icon className="w-6 h-6" />
          </div>
          <h2 id="nav-modal-title" className="font-display font-bold text-2xl text-white">
            {details.title}
          </h2>
        </div>

        <p className="text-sm text-[#A5ACB8] leading-relaxed mb-6">
          {details.description}
        </p>

        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/8 mb-6 space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-white flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#FF3366]" /> Key Inclusions
          </h4>
          <ul className="space-y-1.5 text-xs text-[#A5ACB8]">
            {details.upcomingFeatures.map((feat, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7048]" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/10 transition-colors cursor-pointer text-center"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}
