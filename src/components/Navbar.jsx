import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenAuth, onOpenNavNotice }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', key: 'home', current: true },
    { name: 'Discover Artists', key: 'discover' },
    { name: 'Explore Shows', key: 'shows' },
    { name: 'Collaborate', key: 'collaborate' },
    { name: 'About', key: 'about' },
  ];

  const handleLinkClick = (e, link) => {
    if (link.key === 'home') {
      // Smooth scroll to top/home
      setMobileMenuOpen(false);
      return;
    }

    e.preventDefault();
    setMobileMenuOpen(false);
    if (onOpenNavNotice) {
      onOpenNavNotice(link.key);
    }
  };

  const handleAuthClick = (mode) => {
    setMobileMenuOpen(false);
    if (onOpenAuth) {
      onOpenAuth(mode);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080B10]/92 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Typographic Logo arranged across two lines */}
          <a
            href="#home"
            className="group flex flex-col items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3366] rounded-sm transition-transform active:scale-95"
            aria-label="Films Unfiltered - Back to homepage"
          >
            <div className="font-display font-black text-base sm:text-lg tracking-[0.28em] text-[#F7F7F8] leading-none uppercase group-hover:text-white transition-colors flex items-center gap-1.5">
              <span>FILMS</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FF3366] group-hover:scale-125 transition-transform" />
            </div>
            <div className="font-display font-medium text-[9px] sm:text-[10.5px] tracking-[0.42em] text-[#A5ACB8] leading-tight uppercase group-hover:text-[#F7F7F8] transition-colors">
              UNFILTERED
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#101722]/60 border border-white/8 backdrop-blur-md"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href || `#${link.key}`}
                onClick={(e) => handleLinkClick(e, link)}
                className={`relative px-3.5 py-1.5 text-xs lg:text-[13px] font-medium tracking-wide rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3366] cursor-pointer ${
                  link.current
                    ? 'text-white bg-white/10 shadow-inner'
                    : 'text-[#A5ACB8] hover:text-[#F7F7F8] hover:bg-white/5'
                }`}
                aria-current={link.current ? 'page' : undefined}
              >
                {link.name}
                {link.current && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#FF3366]" />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleAuthClick('login')}
              className="px-4 py-2 text-xs lg:text-sm font-medium text-[#A5ACB8] hover:text-[#F7F7F8] transition-colors rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3366] cursor-pointer"
            >
              Log In
            </button>
            <button
              type="button"
              onClick={() => handleAuthClick('signup')}
              className="relative group px-5 py-2 rounded-full text-xs lg:text-sm font-semibold text-white gradient-accent-bg hover:brightness-110 shadow-lg shadow-[#FF3366]/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080B10] focus-visible:ring-[#FF3366] cursor-pointer"
            >
              <span className="flex items-center gap-1.5">
                Sign Up
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#101722] border border-white/10 text-[#F7F7F8] hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3366] cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-[60px] bg-black/60 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-navigation-menu"
        className={`md:hidden fixed inset-x-0 top-[60px] p-4 z-50 transition-all duration-300 ease-out ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-[#101722]/98 backdrop-blur-2xl border border-white/15 rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.95)] space-y-4">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href || `#${link.key}`}
                onClick={(e) => handleLinkClick(e, link)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                  link.current
                    ? 'text-white bg-white/10 font-semibold'
                    : 'text-[#A5ACB8] hover:text-white hover:bg-white/5'
                }`}
                aria-current={link.current ? 'page' : undefined}
              >
                <span>{link.name}</span>
                {link.current && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF3366]" />
                )}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => handleAuthClick('login')}
              className="w-full py-2.5 text-center text-sm font-medium text-[#F7F7F8] bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors cursor-pointer"
            >
              Log In
            </button>
            <button
              type="button"
              onClick={() => handleAuthClick('signup')}
              className="w-full py-2.5 text-center text-sm font-semibold text-white gradient-accent-bg rounded-xl shadow-lg shadow-[#FF3366]/20 transition-transform active:scale-[0.98] cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
