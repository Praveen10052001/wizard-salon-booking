import React from 'react';
import { Sparkles } from 'lucide-react';

const LoadingSpinner = ({ message = "Loading magical experiences..." }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {/* Animated Spinner */}
      <div className="relative">
        <div className="w-16 h-16 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-pink-500 animate-pulse" />
        </div>
      </div>
      
      {/* Loading Message */}
      <p className="text-white/80 text-center animate-pulse">
        {message}
      </p>
      
      {/* Floating Sparkles */}
      <div className="relative w-32 h-8">
        <Sparkles className="absolute top-0 left-0 w-4 h-4 text-pink-300 animate-bounce" style={{animationDelay: '0s'}} />
        <Sparkles className="absolute top-0 left-1/2 w-4 h-4 text-purple-300 animate-bounce" style={{animationDelay: '0.5s'}} />
        <Sparkles className="absolute top-0 right-0 w-4 h-4 text-blue-300 animate-bounce" style={{animationDelay: '1s'}} />
      </div>
    </div>
  );
};

export default LoadingSpinner;