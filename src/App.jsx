import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import NavigationNoticeModal from './components/NavigationNoticeModal';

export default function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState('signup');
  const [navNoticeOpen, setNavNoticeOpen] = useState(false);
  const [navNoticeKey, setNavNoticeKey] = useState('discover');

  const handleOpenAuth = (mode = 'signup') => {
    setAuthModalMode(mode);
    setAuthModalOpen(true);
  };

  const handleOpenNavNotice = (key = 'discover') => {
    setNavNoticeKey(key);
    setNavNoticeOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080B10] text-[#F7F7F8] selection:bg-[#FF3366] selection:text-white flex flex-col justify-between">
      {/* Responsive Navigation Bar with Functional Handlers */}
      <Navbar
        onOpenAuth={handleOpenAuth}
        onOpenNavNotice={handleOpenNavNotice}
      />

      {/* Main Hero Presentation */}
      <main className="flex-1 flex flex-col justify-center">
        <Hero />
      </main>

      {/* Premium, Modern, Fully Responsive Footer */}
      <Footer
        onOpenNavNotice={handleOpenNavNotice}
        onOpenAuth={handleOpenAuth}
      />

      {/* Accessible Authentication Dialog */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authModalMode}
      />

      {/* Accessible Destination Status Dialog */}
      <NavigationNoticeModal
        isOpen={navNoticeOpen}
        onClose={() => setNavNoticeOpen(false)}
        destinationKey={navNoticeKey}
      />
    </div>
  );
}
