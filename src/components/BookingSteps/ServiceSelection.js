import React from 'react';
import { services } from '../../data/services';
import { ArrowRight, Clock, DollarSign } from 'lucide-react';

const ServiceSelection = ({ selectedService, onServiceSelect, onNext, canProceed }) => {
  return (
    <div className="text-center">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-white mb-4">
          Choose Your Service ✨
        </h2>
        <p className="text-white/80 text-lg">
          Select the perfect treatment for your magical transformation
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {services.map((service) => {
          const IconComponent = service.icon;
          const isSelected = selectedService?.id === service.id;
          
          return (
            <div
              key={service.id}
              onClick={() => onServiceSelect(service)}
              className={`
                cursor-pointer transform transition-all duration-300 hover:scale-105
                ${isSelected ? 'scale-105 ring-4 ring-pink-400/50' : ''}
              `}
            >
              <div className={`
                bg-gradient-to-r ${service.color} rounded-2xl p-6 text-white shadow-xl
                hover:shadow-2xl transition-all duration-300
                ${isSelected ? 'shadow-2xl ring-2 ring-white/20' : ''}
              `}>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-5 h-5" />
                      <span className="text-2xl font-bold">{service.price}</span>
                    </div>
                  </div>
                </div>
                
                {/* Service Info */}
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-white/90 text-sm mb-3">{service.description}</p>
                  
                  {/* Duration */}
                  <div className="flex items-center space-x-2 mb-3">
                    <Clock className="w-4 h-4" />
                    <span className="text-white/90 text-sm">{service.duration}</span>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-1">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                        <span className="text-white/80 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Selection Indicator */}
                {isSelected && (
                  <div className="mt-4 p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                    <p className="text-white font-semibold text-sm flex items-center justify-center space-x-2">
                      <span>✨ Selected</span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Continue Button */}
      {canProceed && (
        <div className="animate-fadeIn">
          <button
            onClick={onNext}
            className="
              bg-gradient-to-r from-pink-500 to-purple-500 text-white 
              px-8 py-4 rounded-full font-bold text-lg
              transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
              flex items-center space-x-2 mx-auto
              ring-2 ring-pink-400/30 hover:ring-pink-400/50
            "
          >
            <span>Continue to Date Selection</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <p className="text-white/60 text-sm mt-3">
            Selected: <span className="text-white font-semibold">{selectedService.name}</span>
          </p>
        </div>
      )}
      
      {!canProceed && (
        <p className="text-white/60 text-sm">
          Please select a service to continue
        </p>
      )}
    </div>
  );
};

export default ServiceSelection;