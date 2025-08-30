import React from 'react';
import { Crown, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/30 backdrop-blur-lg border-t border-white/10 mt-8">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Brand */}
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Crown className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Wizard Salon</h3>
            </div>
            <p className="text-white/80 text-sm">
              Transforming beauty with magical experiences since 2020. Your trusted destination for premium hair and beauty services.
            </p>
          </div>

          {/* Hours */}
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <Clock className="w-5 h-5 text-pink-400" />
              <h4 className="text-lg font-semibold text-white">Hours</h4>
            </div>
            <div className="space-y-2 text-white/80 text-sm">
              <p><span className="font-medium">Mon - Fri:</span> 9:00 AM - 7:00 PM</p>
              <p><span className="font-medium">Saturday:</span> 10:00 AM - 6:00 PM</p>
              <p><span className="font-medium">Sunday:</span> Closed</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-white/80 text-sm">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Mail className="w-4 h-4 text-pink-400" />
                <span>hello@wizardsalon.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Phone className="w-4 h-4 text-pink-400" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <MapPin className="w-4 h-4 text-pink-400" />
                <span>123 Beauty St, City</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <div className="space-y-2 text-white/80 text-sm">
              <p>Hair Cut & Style</p>
              <p>Hair Coloring</p>
              <p>Premium Treatments</p>
              <p>Quick Trims</p>
              <p>Consultations</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2025 Wizard Salon. All rights reserved. Made with ✨ magic
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;