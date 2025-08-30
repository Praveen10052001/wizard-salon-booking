import React from 'react';
import { CheckCircle, Calendar, Clock, Sparkles, Mail } from 'lucide-react';

const SuccessModal = ({ selectedService, selectedDate, selectedTime, availableDates }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 text-center max-w-md w-full shadow-2xl transform animate-bounce">
        
        {/* Success Icon */}
        <div className="animate-bounce mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Success Message */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Booking Confirmed! ✨
          </h2>
          <div className="flex items-center justify-center space-x-2 text-pink-500 mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="text-lg font-semibold">Your magical transformation awaits</span>
            <Sparkles className="w-5 h-5" />
          </div>
          <p className="text-gray-600">
            Your appointment has been successfully booked. We'll send you a confirmation email shortly.
          </p>
        </div>

        {/* Booking Details */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 text-left mb-6">
          <h3 className="font-bold text-gray-800 mb-4 text-center">Appointment Details</h3>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Service</p>
                <p className="font-semibold text-gray-800">{selectedService?.name}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Date</p>
                <p className="font-semibold text-gray-800">
                  {availableDates.find(d => d.date === selectedDate)?.fullDate}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <Clock className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Time & Duration</p>
                <p className="font-semibold text-gray-800">
                  {selectedTime} ({selectedService?.duration})
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                <span className="text-pink-600 font-bold text-sm">$</span>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Total Price</p>
                <p className="font-semibold text-gray-800 text-lg">
                  ${selectedService?.price}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Mail className="w-4 h-4 text-blue-600" />
            <h4 className="font-semibold text-blue-800">What's Next?</h4>
          </div>
          <div className="text-blue-700 text-sm space-y-1">
            <p>✉️ Confirmation email sent</p>
            <p>📱 SMS reminder 24hrs before</p>
            <p>🎯 Arrive 10 minutes early</p>
          </div>
        </div>

        {/* Booking ID */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            Booking ID: <span className="font-mono font-semibold">WS-{Date.now().toString().slice(-6)}</span>
          </p>
        </div>

        {/* Animated Elements */}
        <div className="absolute top-4 left-4 animate-bounce" style={{animationDelay: '0.5s'}}>
          <Sparkles className="w-6 h-6 text-pink-300" />
        </div>
        <div className="absolute top-4 right-4 animate-bounce" style={{animationDelay: '1s'}}>
          <Sparkles className="w-6 h-6 text-purple-300" />
        </div>
        <div className="absolute bottom-4 left-4 animate-bounce" style={{animationDelay: '1.5s'}}>
          <Sparkles className="w-6 h-6 text-blue-300" />
        </div>
        <div className="absolute bottom-4 right-4 animate-bounce" style={{animationDelay: '2s'}}>
          <Sparkles className="w-6 h-6 text-green-300" />
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;