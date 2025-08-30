import React from 'react';
import { Check } from 'lucide-react';

const ProgressBar = ({ currentStep }) => {
  const steps = [
    { number: 1, title: 'Service', description: 'Choose your service' },
    { number: 2, title: 'Date', description: 'Pick your date' },
    { number: 3, title: 'Time', description: 'Select time slot' },
    { number: 4, title: 'Details', description: 'Enter information' }
  ];

  return (
    <div className="mb-8">
      {/* Desktop Progress Bar */}
      <div className="hidden md:flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            {/* Step Circle */}
            <div className="flex flex-col items-center">
              <div className={`
                w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 transform
                ${step.number < currentStep 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white scale-110 shadow-lg' 
                  : step.number === currentStep
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white scale-110 shadow-xl ring-4 ring-pink-400/30'
                    : 'bg-white/20 text-white/60 hover:bg-white/30'
                }
              `}>
                {step.number < currentStep ? (
                  <Check className="w-5 h-5" />
                ) : (
                  step.number
                )}
              </div>
              
              {/* Step Info */}
              <div className="text-center mt-3">
                <p className={`font-semibold text-sm transition-colors duration-300 ${
                  step.number <= currentStep ? 'text-white' : 'text-white/60'
                }`}>
                  {step.title}
                </p>
                <p className={`text-xs mt-1 transition-colors duration-300 ${
                  step.number <= currentStep ? 'text-white/80' : 'text-white/40'
                }`}>
                  {step.description}
                </p>
              </div>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className={`w-24 h-1 mx-4 mt-[-40px] transition-all duration-500 ${
                step.number < currentStep 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                  : 'bg-white/20'
              }`} />
            )}
          </div>
        ))}
      </div>

      {/* Mobile Progress Bar */}
      <div className="md:hidden">
        <div className="flex items-center justify-center space-x-2 mb-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                step.number < currentStep
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                  : step.number === currentStep
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 scale-125'
                    : 'bg-white/30'
              }`}
            />
          ))}
        </div>
        
        {/* Current Step Info */}
        <div className="text-center">
          <p className="text-white font-semibold">
            Step {currentStep} of {steps.length}: {steps[currentStep - 1]?.title}
          </p>
          <p className="text-white/80 text-sm">
            {steps[currentStep - 1]?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;