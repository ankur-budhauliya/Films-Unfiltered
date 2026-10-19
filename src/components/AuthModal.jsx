import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowRight, ShieldCheck, Mail, Lock, User, Sparkles } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, initialMode = 'signup' }) {
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    setMode(initialMode);
    setSubmitted(false);
  }, [initialMode, isOpen]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2400);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-md bg-[#101010] border border-white/15 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden my-auto p-6 sm:p-8"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#B3B3B3] hover:text-white hover:bg-white/10 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F45132]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Demo Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F45132]/20 text-[#F45132] border border-[#F45132]/30">
            Frontend Auth Demo
          </span>
          <span className="text-xs text-[#B3B3B3]">No backend connected</span>
        </div>

        {/* Title */}
        <h2 id="auth-modal-title" className="font-display font-extrabold text-2xl text-white mb-1">
          {mode === 'signup' ? 'Join Films Unfiltered' : 'Welcome Back'}
        </h2>
        <p className="text-xs text-[#B3B3B3] mb-5">
          {mode === 'signup'
            ? 'Connect with artists, discover live shows, and collaborate.'
            : 'Access your creative scene and collaboration requests.'}
        </p>

        {/* Tab Switcher */}
        <div className="flex p-1 rounded-xl bg-white/5 border border-white/10 mb-5">
          <button
            type="button"
            onClick={() => { setMode('login'); setSubmitted(false); }}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              mode === 'login'
                ? 'bg-white/15 text-white shadow-sm'
                : 'text-[#B3B3B3] hover:text-white'
            }`}
          >
            Log In
          </button>
          <button
            type="button"
            onClick={() => { setMode('signup'); setSubmitted(false); }}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              mode === 'signup'
                ? 'bg-[#F45132] text-white shadow-sm'
                : 'text-[#B3B3B3] hover:text-white'
            }`}
          >
            Sign Up
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3 animate-in fade-in">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-white">
              {mode === 'signup' ? 'Demo Account Created!' : 'Demo Login Successful!'}
            </h3>
            <p className="text-xs text-[#B3B3B3]">
              Authentication placeholder executed cleanly. Live backend OAuth / database authentication will plug in seamlessly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div>
                <label className="block text-xs font-medium text-[#B3B3B3] mb-1.5" htmlFor="auth-name">
                  Creator or Stage Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#B3B3B3] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    id="auth-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Maya Lin"
                    className="w-full pl-9 pr-3 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#F45132] focus:ring-1 focus:ring-[#F45132]"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-[#B3B3B3] mb-1.5" htmlFor="auth-email">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#B3B3B3] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  id="auth-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="creator@filmsunfiltered.com"
                  className="w-full pl-9 pr-3 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#F45132] focus:ring-1 focus:ring-[#F45132]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#B3B3B3] mb-1.5" htmlFor="auth-password">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#B3B3B3] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  id="auth-password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-3 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#F45132] focus:ring-1 focus:ring-[#F45132]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-[#F45132] hover:bg-[#E04326] shadow-lg shadow-[#F45132]/25 hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
            >
              <span>{mode === 'signup' ? 'Create Demo Profile' : 'Sign In'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <div className="mt-5 pt-4 border-t border-white/8 text-center text-[11px] text-[#A5ACB8]/70">
          Films Unfiltered Creator Network · Frontend Demonstration
        </div>
      </div>
    </div>
  );
}
