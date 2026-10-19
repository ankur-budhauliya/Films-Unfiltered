import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Mail, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { FOOTER_SECTIONS, SOCIAL_LINKS } from '../data/mockData';

// Accessible, consistent Lucide-compatible vector paths for third-party social brands
function InstagramIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FacebookIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const socialIconMap = {
  Instagram: InstagramIcon,
  YouTube: YoutubeIcon,
  LinkedIn: LinkedinIcon,
  Facebook: FacebookIcon,
};

export default function Footer({ onOpenNavNotice, onOpenAuth }) {
  const currentYear = new Date().getFullYear();
  const [emailInput, setEmailInput] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState(null); // 'success' | 'error' | null
  const [newsletterMessage, setNewsletterMessage] = useState('');

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    if (link.action === 'signup') {
      if (onOpenAuth) onOpenAuth('signup');
      return;
    }
    if (link.action === 'login') {
      if (onOpenAuth) onOpenAuth('login');
      return;
    }
    if (onOpenNavNotice) {
      onOpenNavNotice(link.key || 'about');
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const trimmed = emailInput.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmed) {
      setNewsletterStatus('error');
      setNewsletterMessage('Please enter your email address.');
      return;
    }

    if (!emailRegex.test(trimmed)) {
      setNewsletterStatus('error');
      setNewsletterMessage('Please enter a valid email address.');
      return;
    }

    // Demo confirmation only
    setNewsletterStatus('success');
    setNewsletterMessage("You're on the list! (Frontend demo confirmation — no real emails sent).");
    setEmailInput('');
  };

  return (
    <footer
      className="relative bg-[#000000] text-[#FFFFFF] border-t border-white/10 pt-16 sm:pt-20 pb-12 overflow-hidden selection:bg-[#F45132] selection:text-white"
      aria-label="Films Unfiltered Site Footer"
    >
      {/* Restrained Orange Ambient Lighting */}
      <div
        className="absolute bottom-0 right-1/4 w-[450px] h-[450px] rounded-full bg-[#F45132]/6 blur-[160px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 left-10 w-[400px] h-[400px] rounded-full bg-[#F45132]/4 blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        {/* ================= 1. TOP CTA SECTION ================= */}
        <section
          className="relative rounded-3xl overflow-hidden bg-[#101010] border border-white/12 p-8 sm:p-12 lg:p-14 shadow-[0_30px_70px_rgba(0,0,0,0.95)]"
          aria-labelledby="footer-cta-headline"
        >
          {/* Subtle Orange Glow behind the CTA */}
          <div
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#F45132]/12 blur-[100px] pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-black/60 blur-[90px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* CTA Copy */}
            <div className="lg:col-span-8 space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 border border-white/10 w-fit backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#F45132]" aria-hidden="true" />
                <span className="text-[10.5px] font-bold tracking-[0.2em] uppercase text-[#B3B3B3]">
                  Join The Movement
                </span>
              </div>
              <h2
                id="footer-cta-headline"
                className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-[#FFFFFF] tracking-tight leading-[1.14]"
              >
                Your people. Your scene.{' '}
                <span className="text-[#F45132] block sm:inline drop-shadow-[0_0_25px_rgba(244,81,50,0.35)]">
                  Your next big moment.
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#B3B3B3] max-w-2xl leading-relaxed">
                Discover artists, find shows around you, and connect with the creative community shaping what's next.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-start lg:justify-end">
              {/* Primary Button: Orange with white text */}
              <button
                type="button"
                onClick={() => onOpenNavNotice ? onOpenNavNotice('discover') : null}
                className="group relative px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#F45132] hover:bg-[#e04326] shadow-lg shadow-[#F45132]/25 hover:shadow-[#F45132]/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F45132] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101010]"
              >
                <span>Explore Artists</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </button>
              {/* Secondary Button: Transparent black background, subtle white border, white text, orange hover */}
              <button
                type="button"
                onClick={() => onOpenNavNotice ? onOpenNavNotice('shows') : null}
                className="px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-black/60 hover:bg-[#F45132]/10 border border-white/15 hover:border-[#F45132]/60 hover:text-[#F45132] transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F45132]"
              >
                <span>Discover Shows</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>

        {/* ================= 2. MAIN FOOTER 4-COLUMN LAYOUT ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pt-2">
          
          {/* Column 1 — Brand with Official Logo (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Authoritative Brand Logo */}
            <a
              href="#home"
              className="group inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F45132] rounded-lg transition-transform active:scale-95"
              aria-label="Films Unfiltered - Back to top"
            >
              <img
                src="/films-unfiltered-logo.jpg"
                alt="Films Unfiltered official logo"
                className="h-20 sm:h-24 w-auto object-contain mix-blend-screen -ml-1.5 transition-opacity group-hover:opacity-90"
                loading="lazy"
              />
            </a>

            <p className="text-xs sm:text-sm text-[#B3B3B3] leading-relaxed max-w-sm">
              A home for artists, live experiences, and creative connections. Discover what's happening and find your place in the scene.
            </p>

            {/* Social Media Icon Links */}
            <div className="space-y-2 pt-2">
              <span className="text-[10px] font-semibold tracking-wider uppercase text-[#B3B3B3]">
                Follow Our Scene
              </span>
              <div className="flex items-center gap-2.5">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = socialIconMap[social.name] || InstagramIcon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.preventDefault();
                        alert(`Demo link: ${social.name} profile (${social.handle}) will link to official social channels in production.`);
                      }}
                      className="p-2.5 rounded-xl bg-[#101010] border border-white/10 hover:border-[#F45132]/60 hover:bg-[#F45132]/10 text-[#B3B3B3] hover:text-[#F45132] transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F45132]"
                      aria-label={`Follow Films Unfiltered on ${social.name}`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2 — Discover (2.5 cols on lg) */}
          <div className="lg:col-span-2 sm:col-span-1 space-y-4">
            <h3 className="font-display font-bold text-xs uppercase tracking-wider text-[#FFFFFF]">
              {FOOTER_SECTIONS.discover.heading}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              {FOOTER_SECTIONS.discover.links.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={(e) => handleLinkClick(e, link)}
                    className="text-[#B3B3B3] hover:text-[#FFFFFF] hover:translate-x-1 focus-visible:text-[#F45132] focus-visible:underline transition-all duration-200 cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — For Artists (2.5 cols on lg) */}
          <div className="lg:col-span-2 sm:col-span-1 space-y-4">
            <h3 className="font-display font-bold text-xs uppercase tracking-wider text-[#FFFFFF]">
              {FOOTER_SECTIONS.forArtists.heading}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              {FOOTER_SECTIONS.forArtists.links.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={(e) => handleLinkClick(e, link)}
                    className="text-[#B3B3B3] hover:text-[#FFFFFF] hover:translate-x-1 focus-visible:text-[#F45132] focus-visible:underline transition-all duration-200 cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Company (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display font-bold text-xs uppercase tracking-wider text-[#FFFFFF]">
              {FOOTER_SECTIONS.company.heading}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              {FOOTER_SECTIONS.company.links.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={(e) => handleLinkClick(e, link)}
                    className="text-[#B3B3B3] hover:text-[#FFFFFF] hover:translate-x-1 focus-visible:text-[#F45132] focus-visible:underline transition-all duration-200 cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ================= 3. NEWSLETTER SUBSCRIPTION SECTION ================= */}
        <section
          className="pt-10 border-t border-white/10"
          aria-labelledby="newsletter-heading"
        >
          <div className="rounded-2xl p-6 sm:p-8 bg-[#101010] border border-white/12 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <div className="space-y-1.5 max-w-md">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F45132]" />
                <h3 id="newsletter-heading" className="font-display font-bold text-lg sm:text-xl text-[#FFFFFF]">
                  Stay in the scene.
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#B3B3B3] leading-relaxed">
                Get updates on upcoming shows, new artists, and creative opportunities.
              </p>
            </div>

            {/* Newsletter Form */}
            <div className="w-full lg:max-w-md">
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <label htmlFor="newsletter-email" className="sr-only">
                      Your email address
                    </label>
                    <Mail className="w-4 h-4 text-[#B3B3B3] absolute left-3.5 top-1/2 -translate-y-1/2" aria-hidden="true" />
                    <input
                      id="newsletter-email"
                      type="email"
                      value={emailInput}
                      onChange={(e) => {
                        setEmailInput(e.target.value);
                        if (newsletterStatus) setNewsletterStatus(null);
                      }}
                      placeholder="Your email address"
                      className="w-full pl-10 pr-4 py-2.5 bg-[#000000] border border-white/15 rounded-xl text-xs sm:text-sm text-[#FFFFFF] placeholder-[#B3B3B3]/50 focus:outline-none focus:border-[#F45132] focus:ring-1 focus:ring-[#F45132] transition-colors"
                      aria-required="true"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#F45132] hover:bg-[#e04326] shadow-md shadow-[#F45132]/20 hover:shadow-[#F45132]/35 transition-all cursor-pointer shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F45132]"
                  >
                    Subscribe
                  </button>
                </div>

                {/* Validation Message */}
                {newsletterStatus === 'success' && (
                  <p
                    role="status"
                    aria-live="polite"
                    className="text-xs text-emerald-400 flex items-center gap-1.5 pt-0.5 animate-in fade-in"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{newsletterMessage}</span>
                  </p>
                )}
                {newsletterStatus === 'error' && (
                  <p
                    role="alert"
                    className="text-xs text-[#F45132] flex items-center gap-1.5 pt-0.5 animate-in fade-in"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{newsletterMessage}</span>
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* ================= 4. BOTTOM FOOTER BAR ================= */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B3B3B3]">
          <p className="text-center sm:text-left">
            © {currentYear} Films Unfiltered. All rights reserved.
          </p>
          <nav aria-label="Legal and contact links" className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onOpenNavNotice ? onOpenNavNotice('privacy') : null}
              className="hover:text-[#FFFFFF] transition-colors cursor-pointer focus:outline-none focus-visible:text-[#F45132]"
            >
              Privacy
            </button>
            <button
              type="button"
              onClick={() => onOpenNavNotice ? onOpenNavNotice('terms') : null}
              className="hover:text-[#FFFFFF] transition-colors cursor-pointer focus:outline-none focus-visible:text-[#F45132]"
            >
              Terms
            </button>
            <button
              type="button"
              onClick={() => onOpenNavNotice ? onOpenNavNotice('contact') : null}
              className="hover:text-[#FFFFFF] transition-colors cursor-pointer focus:outline-none focus-visible:text-[#F45132]"
            >
              Contact
            </button>
          </nav>
        </div>

      </div>
    </footer>
  );
}
