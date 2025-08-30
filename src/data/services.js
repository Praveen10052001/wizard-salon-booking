import { Scissors, Palette, Crown, Star } from 'lucide-react';

export const services = [
  {
    id: 1,
    name: 'Hair Cut & Style',
    duration: '60 min',
    price: 50,
    description: 'Professional haircut with styling and finish',
    icon: Scissors,
    color: 'from-purple-500 to-pink-500',
    features: ['Consultation', 'Wash & Cut', 'Styling', 'Finish']
  },
  {
    id: 2,
    name: 'Hair Color',
    duration: '120 min',
    price: 120,
    description: 'Complete hair coloring with premium products',
    icon: Palette,
    color: 'from-blue-500 to-cyan-500',
    features: ['Color Consultation', 'Full Color', 'Toner', 'Styling']
  },
  {
    id: 3,
    name: 'Premium Treatment',
    duration: '90 min',
    price: 80,
    description: 'Luxury hair treatment with deep conditioning',
    icon: Crown,
    color: 'from-yellow-500 to-orange-500',
    features: ['Scalp Analysis', 'Deep Treatment', 'Massage', 'Styling']
  },
  {
    id: 4,
    name: 'Quick Trim',
    duration: '30 min',
    price: 25,
    description: 'Fast and efficient trim and touch-up',
    icon: Star,
    color: 'from-green-500 to-teal-500',
    features: ['Quick Trim', 'Basic Styling', 'Touch-up']
  }
];

export const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
];