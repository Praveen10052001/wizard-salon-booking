import React from 'react'; // Keep this line
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';

const DateSelection = ({ 
  selectedDate, 
  onDateSelect, 
  availableDates, 
  selectedService, 
  onNext, 
  onPrev, 
  canProceed 
}) => {
  return (
    <div className="text-center">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center space-x-3">
          <Calendar className="w-10 h-10 text-pink-400" />
          <span>Pick Your Date</span>
        </h2>
        <p className="text-white/80 text-lg">
          When would you like your{" "}
          <span className="text-pink-300 font-semibold">
            {selectedService?.name}
          </span>
          ?
        </p>
      </div>
      
      {/* Date Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
        {availableDates.map((dateObj) => {
          const isSelected = selectedDate === dateObj.date;
          const isToday =
            new Date().toDateString() === new Date(dateObj.date).toDateString();

          return (
            <button
              key={dateObj.date}
              onClick={() => onDateSelect(dateObj.date)}
              className={`
                p-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105
                min-h-[80px] flex flex-col items-center justify-center space-y-1
                ${isSelected
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-xl scale-105 ring-4 ring-pink-400/30"
                  : "bg-white/20 text-white hover:bg-white/30 hover:shadow-lg"}
                ${isToday ? "ring-2 ring-yellow-400/50" : ""}
              `}
            >
              <span className="text-sm font-bold">{dateObj.display}</span>
              {isToday && <span className="text-xs text-yellow-200">Today</span>}
              {isSelected && <span className="text-xs">✨ Selected</span>}
            </button>
          );
        })}
      </div>

      {/* Selected Date Info */}
      {selectedDate && (
        <div className="bg-white/10 rounded-xl p-4 mb-6 backdrop-blur-sm">
          <p className="text-white/80 text-sm mb-2">Selected Date:</p>
          <p className="text-white font-bold text-lg">
            {availableDates.find((d) => d.date === selectedDate)?.fullDate}
          </p>
        </div>
      )}

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
          <span>Back to Services</span>
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
            <span>Choose Time</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        ) : (
          <div className="text-white/60 text-sm">
            Please select a date to continue
          </div>
        )}
      </div>
    </div>
  );
};

export default DateSelection;
