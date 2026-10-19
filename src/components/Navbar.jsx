import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';

export default function Navbar({ onOpenAuth, onOpenNavNotice, onOpenSearch }) {
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
          ? 'bg-[#000000]/95 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.9)] py-3'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo matching reference */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F45132] rounded-md transition-transform active:scale-95"
            aria-label="Films Unfiltered - Back to homepage"
          >
            <div className="flex flex-col items-start leading-none select-none">
              <span className="font-display font-black text-lg sm:text-xl tracking-[0.06em] text-white">
                FILMS
              </span>
              <span className="font-display font-black text-sm sm:text-[15px] tracking-[0.14em] text-white/90">
                UNFILTERED
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-6 lg:gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href || `#${link.key}`}
                onClick={(e) => handleLinkClick(e, link)}
                className={`relative py-1 text-xs lg:text-[13px] font-medium tracking-wide transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:text-[#F45132] ${
                  link.current
                    ? 'text-white'
                    : 'text-[#B3B3B3] hover:text-white'
                }`}
                aria-current={link.current ? 'page' : undefined}
              >
                {link.name}
                {link.current && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#F45132] rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons matching reference */}
          <div className="hidden md:flex items-center gap-3">
            {/* Search Icon Trigger */}
            <button
              type="button"
              onClick={() => onOpenSearch ? onOpenSearch() : window.scrollTo({ top: 300, behavior: 'smooth' })}
              className="p-2 text-white/80 hover:text-white transition-colors cursor-pointer rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F45132]"
              aria-label="Search site"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Log In Button */}
            <button
              type="button"
              onClick={() => handleAuthClick('login')}
              className="px-4 py-1.5 text-xs lg:text-[13px] font-medium text-white/90 hover:text-white border border-white/20 hover:border-white/40 transition-colors rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F45132] cursor-pointer"
            >
              Log In
            </button>

            {/* Sign Up Button in Brand Orange */}
            <button
              type="button"
              onClick={() => handleAuthClick('signup')}
              className="px-5 py-1.5 rounded-lg text-xs lg:text-[13px] font-semibold text-white bg-[#F45132] hover:bg-[#E04326] shadow-md shadow-[#F45132]/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#000000] focus-visible:ring-[#F45132] cursor-pointer"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#101010] border border-white/10 text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F45132] cursor-pointer"
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
        <div className="bg-[#101010]/98 backdrop-blur-2xl border border-white/15 rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.95)] space-y-4">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href || `#${link.key}`}
                onClick={(e) => handleLinkClick(e, link)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                  link.current
                    ? 'text-white bg-white/10 font-semibold'
                    : 'text-[#B3B3B3] hover:text-white hover:bg-white/5'
                }`}
                aria-current={link.current ? 'page' : undefined}
              >
                <span>{link.name}</span>
                {link.current && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F45132]" />
                )}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => handleAuthClick('login')}
              className="w-full py-2.5 text-center text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors cursor-pointer"
            >
              Log In
            </button>
            <button
              type="button"
              onClick={() => handleAuthClick('signup')}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-[#F45132] hover:bg-[#E04326] rounded-xl shadow-lg shadow-[#F45132]/25 transition-transform active:scale-[0.98] cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
