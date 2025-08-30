import React from 'react';
import { Crown, MapPin, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-black/20 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
            <Crown className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Wizard Salon</h1>
            <p className="text-xs text-white/60">Magical Beauty Transformations</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-6 text-white/80">
          <div className="flex items-center space-x-2 hover:text-white transition-colors duration-300">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">123 Beauty St, City</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-white transition-colors duration-300">
            <Phone className="w-4 h-4" />
            <span className="text-sm">(555) 123-4567</span>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-white/80 hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;