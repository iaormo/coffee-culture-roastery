import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black-coffee text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-passion-red p-2 rounded-lg">
                <Coffee className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-knewave text-lg text-passion-red leading-none">
                  COFFEE CULTURE
                </span>
                <span className="font-knewave text-sm text-white leading-none">
                  ROASTERY
                </span>
              </div>
            </div>
            <p className="text-white text-sm leading-relaxed">
              Serving coffee that is authentically grounded, packaged in sincerity 
              served with a side of humor. From farm to cup, we're brewing unforgettable moments.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-knewave text-lg text-passion-red">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-white hover:text-passion-red transition-colors text-sm">
                Home
              </Link>
              <Link to="/shop" className="text-white hover:text-passion-red transition-colors text-sm">
                Shop Coffee
              </Link>
              <Link to="/about" className="text-white hover:text-passion-red transition-colors text-sm">
                Our Story
              </Link>
              <Link to="/contact" className="text-white hover:text-passion-red transition-colors text-sm">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-knewave text-lg text-passion-red">Visit Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-passion-red mt-1 flex-shrink-0" />
                <span className="text-white text-sm">
                  Bacolod City, Negros Occidental, Philippines
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-passion-red flex-shrink-0" />
                <span className="text-white text-sm">+63 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-passion-red flex-shrink-0" />
                <span className="text-white text-sm">hello@coffeeculture.ph</span>
              </div>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-knewave text-lg text-passion-red">Stay Connected</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-passion-red transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-passion-red transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-passion-red transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-white text-sm">
                Subscribe for coffee updates & special offers
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 text-white text-sm rounded-l-md border border-gray-700 focus:outline-none focus:border-passion-red"
                />
                <button className="px-4 py-2 bg-passion-red text-white text-sm rounded-r-md hover:bg-red-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm">
            © 2024 Coffee Culture Roastery. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-white hover:text-passion-red text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white hover:text-passion-red text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

