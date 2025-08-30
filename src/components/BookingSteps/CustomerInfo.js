import React from 'react';
import { ArrowLeft, User, Mail, Phone, Sparkles } from 'lucide-react';

const CustomerInfo = ({ 
  customerInfo, 
  onInfoChange, 
  selectedService, 
  selectedDate, 
  selectedTime, 
  availableDates, 
  onPrev, 
  onBooking, 
  canProceed 
}) => {
  const handleInputChange = (field, value) => {
    onInfoChange({
      ...customerInfo,
      [field]: value
    });
  };

  return (
    <div className="text-center">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center space-x-3">
          <User className="w-10 h-10 text-pink-400" />
          <span>Your Information</span>
        </h2>
        <p className="text-white/80 text-lg">
          Just a few details to complete your magical booking
        </p>
      </div>
      
      <div className="max-w-md mx-auto space-y-6 mb-8">
        {/* Name Input */}
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Full Name"
            value={customerInfo.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="
              w-full pl-12 pr-4 py-4 bg-white/90 rounded-xl 
              border-2 border-transparent focus:border-pink-400 focus:outline-none 
              transition-all duration-300 text-gray-800 placeholder-gray-500
              focus:shadow-lg focus:bg-white
            "
          />
        </div>
        
        {/* Email Input */}
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="email"
            placeholder="Email Address"
            value={customerInfo.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="
              w-full pl-12 pr-4 py-4 bg-white/90 rounded-xl 
              border-2 border-transparent focus:border-pink-400 focus:outline-none 
              transition-all duration-300 text-gray-800 placeholder-gray-500
              focus:shadow-lg focus:bg-white
            "
          />
        </div>
        
        {/* Phone Input */}
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="tel"
            placeholder="Phone Number"
            value={customerInfo.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="
              w-full pl-12 pr-4 py-4 bg-white/90 rounded-xl 
              border-2 border-transparent focus:border-pink-400 focus:outline-none 
              transition-all duration-300 text-gray-800 placeholder-gray-500
              focus:shadow-lg focus:bg-white
            "
          />
        </div>

        {/* Booking Summary */}
        <div className="bg-white/10 rounded-xl p-6 text-left backdrop-blur-sm border border-white/20">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-pink-400" />
            <span>Booking Summary</span>
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-white/80">Service:</span>
              <span className="text-white font-semibold">{selectedService?.name}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/80">Date:</span>
              <span className="text-white font-semibold">
                {availableDates.find(d => d.date === selectedDate)?.display}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/80">Time:</span>
              <span className="text-white font-semibold">{selectedTime}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/80">Duration:</span>
              <span className="text-white font-semibold">{selectedService?.duration}</span>
            </div>
            <div className="border-t border-white/20 pt-3">
              <div className="flex justify-between items-center">
                <span className="text-white/80">Total Price:</span>
                <span className="text-white font-bold text-xl">${selectedService?.price}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="text-left">
          <label className="flex items-start space-x-3 text-white/80 text-sm">
            <input 
              type="checkbox" 
              className="mt-1 rounded border-gray-300 text-pink-500 focus:ring-pink-500" 
            />
            <span>
              I agree to the{' '}
              <a href="#" className="text-pink-300 hover:text-pink-200 underline">
                terms and conditions
              </a>{' '}
              and{' '}
              <a href="#" className="text-pink-300 hover:text-pink-200 underline">
                cancellation policy
              </a>
            </span>
          </label>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center">
        <button
          onClick={onPrev}
          className="
            bg-white/20 text-white px-6 py-3 rounded-full font-bold
            hover:bg-white/30 transition-all duration-300
            flex items-center space-x-2 transform hover:scale-105
          "
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Time</span>
        </button>

        {canProceed ? (
          <button
            onClick={onBooking}
            className="
              bg-gradient-to-r from-green-500 to-emerald-500 text-white 
              px-8 py-4 rounded-full font-bold text-lg
              transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
              flex items-center space-x-2
              ring-2 ring-green-400/30 hover:ring-green-400/50
              animate-pulse hover:animate-none
            "
          >
            <Sparkles className="w-5 h-5" />
            <span>Confirm Booking</span>
            <Sparkles className="w-5 h-5" />
          </button>
        ) : (
          <div className="text-white/60 text-sm text-center">
            <p>Please fill in all fields to continue</p>
            <div className="flex items-center justify-center space-x-4 mt-2">
              {!customerInfo.name && <span className="text-red-300">Name</span>}
              {!customerInfo.email && <span className="text-red-300">Email</span>}
              {!customerInfo.phone && <span className="text-red-300">Phone</span>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerInfo;