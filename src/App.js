import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import ProgressBar from './components/Layout/ProgressBar';
import ServiceSelection from './components/BookingSteps/ServiceSelection';
import DateSelection from './components/BookingSteps/DateSelection';
import TimeSelection from './components/BookingSteps/TimeSelection';
import CustomerInfo from './components/BookingSteps/CustomerInfo';
import SuccessModal from './components/Common/SuccessModal';
import { generateDates } from './utils/dateUtils';
import './App.css';

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isBooked, setIsBooked] = useState(false);
  const [availableDates] = useState(generateDates());

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleBooking = () => {
    const bookingData = {
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      customer: customerInfo,
      bookingId: `WS-${Date.now()}`,
      timestamp: new Date().toISOString()
    };

    console.log('Booking Data:', bookingData);
    
    // In real app, this would be an API call
    // await bookingAPI.createBooking(bookingData);
    
    setIsBooked(true);
    
    // Auto-reset after 4 seconds
    setTimeout(() => {
      resetBooking();
    }, 4000);
  };

  const resetBooking = () => {
    setIsBooked(false);
    setCurrentStep(1);
    setSelectedService(null);
    setSelectedDate('');
    setSelectedTime('');
    setCustomerInfo({ name: '', email: '', phone: '' });
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return selectedService !== null;
      case 2:
        return selectedDate !== '';
      case 3:
        return selectedTime !== '';
      case 4:
        return customerInfo.name && customerInfo.email && customerInfo.phone;
      default:
        return false;
    }
  };

  if (isBooked) {
    return (
      <SuccessModal
        selectedService={selectedService}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        availableDates={availableDates}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-6">
        <ProgressBar currentStep={currentStep} />
        
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
          {currentStep === 1 && (
            <ServiceSelection
              selectedService={selectedService}
              onServiceSelect={setSelectedService}
              onNext={nextStep}
              canProceed={canProceed()}
            />
          )}

          {currentStep === 2 && (
            <DateSelection
              selectedDate={selectedDate}
              onDateSelect={setSelectedDate}
              availableDates={availableDates}
              selectedService={selectedService}
              onNext={nextStep}
              onPrev={prevStep}
              canProceed={canProceed()}
            />
          )}

          {currentStep === 3 && (
            <TimeSelection
              selectedTime={selectedTime}
              onTimeSelect={setSelectedTime}
              selectedDate={selectedDate}
              availableDates={availableDates}
              onNext={nextStep}
              onPrev={prevStep}
              canProceed={canProceed()}
            />
          )}

          {currentStep === 4 && (
            <CustomerInfo
              customerInfo={customerInfo}
              onInfoChange={setCustomerInfo}
              selectedService={selectedService}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              availableDates={availableDates}
              onPrev={prevStep}
              onBooking={handleBooking}
              canProceed={canProceed()}
            />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;