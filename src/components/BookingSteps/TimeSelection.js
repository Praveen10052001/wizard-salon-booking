import React from 'react';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { timeSlots } from '../../data/services';

const TimeSelection = ({ 
  selectedTime, 
  onTimeSelect, 
  selectedDate, 
  availableDates, 
  onNext, 
  onPrev, 
  canProceed 
}) => {
  // Simulate some busy time slots (in real app, this would come from API)
  const busySlots = ['11:00 AM', '2:00 PM'];
  
  return (
    <div className="text-center">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center space-x-3">
          <Clock className="w-10 h-10 text-pink-400" />
          <span>Select Your Time</span>
        </h2>
        <p className="text-white/80 text-lg">
          Available time slots for{' '}
          <span className="text-pink-300 font-semibold">
            {availableDates.find(d => d.date === selectedDate)?.display}
          </span>
        </p>
      </div>
      
      {/* Time Slots Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {timeSlots.map((time) => {
          const isSelected = selectedTime === time;
          const isBusy = busySlots.includes(time);
          
          return (
            <button
              key={time}
              onClick={() => !isBusy && onTimeSelect(time)}
              disabled={isBusy}
              className={`
                p-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105
                min-h-[100px] flex flex-col items-center justify-center space-y-2
                ${isSelected
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-xl scale-105 ring-4 ring-pink-400/30'
                  : isBusy
                    ? 'bg-red-500/20 text-red-300 cursor-not-allowed'
                    : 'bg-white/20 text-white hover:bg-white/30 hover:shadow-lg'
                }
                ${!isBusy ? 'hover:scale-105' : 'hover:scale-100'}
              `}
            >
              <Clock className={`w-6 h-6 ${isSelected ? 'text-white' : isBusy ? 'text-red-400' : 'text-pink-300'}`} />
              <span className="text-lg font-bold">{time}</span>
              {isSelected && <span className="text-xs">✨ Selected</span>}
              {isBusy && <span className="text-xs">Unavailable</span>}
            </button>
          );
        })}
      </div>

      {/* Selected Time Info */}
      {selectedTime && (
        <div className="bg-white/10 rounded-xl p-4 mb-6 backdrop-blur-sm">
          <div className="flex items-center justify-center space-x-4 text-white">
            <div>
              <p className="text-white/80 text-sm">Selected Date:</p>
              <p className="font-semibold">
                {availableDates.find(d => d.date === selectedDate)?.display}
              </p>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div>
              <p className="text-white/80 text-sm">Selected Time:</p>
              <p className="font-semibold">{selectedTime}</p>
            </div>
          </div>
        </div>
      )}

      {/* Available Slots Info */}
      <div className="mb-6">
        <div className="flex items-center justify-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded"></div>
            <span className="text-white/80">Available</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500/50 rounded"></div>
            <span className="text-white/80">Unavailable</span>
          </div>
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
          <span>Back to Dates</span>
        </button>

        {canProceed ? (
          <button
            onClick={onNext}
            className="
              bg-gradient-to-r from-pink-500 to-purple-500 text-white 
              px-8 py-3 rounded-full font-bold
              transform transition-all duration-300 hover:scale-105 hover:shadow-xl
              flex items-center space-x-2
              ring-2 ring-pink-400/30 hover:ring-pink-400/50
            "
          >
            <span>Enter Details</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        ) : (
          <div className="text-white/60 text-sm">
            Please select a time slot to continue
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeSelection;