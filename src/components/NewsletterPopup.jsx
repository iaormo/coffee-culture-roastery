import React, { useState, useEffect } from 'react';
import { X, Coffee, Mail, Heart, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NewsletterPopup = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Mock newsletter signup
      console.log('Newsletter signup:', email);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
        setEmail('');
      }, 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Popup Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-passion-red to-orange-roast text-white p-6 rounded-t-2xl text-center">
          <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Coffee className="h-8 w-8 text-white" />
          </div>
          <h2 className="font-knewave text-2xl mb-2">COFFEE CULTURE</h2>
          <p className="font-glacial text-sm opacity-90">Where every bean tells a tale</p>
        </div>

        {/* Content */}
        <div className="p-6">
          {!isSubmitted ? (
            <>
              {/* Coffee Culture Info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Heart className="h-5 w-5 text-passion-red mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-glacial font-semibold text-gray-900">Authentic Coffee Experience</h3>
                    <p className="font-glacial text-sm text-gray-600">
                      From farm to cup, we bring you the finest Philippine coffee beans
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Award className="h-5 w-5 text-passion-red mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-glacial font-semibold text-gray-900">Master Roasters</h3>
                    <p className="font-glacial text-sm text-gray-600">
                      Certified Q Arabica & Robusta graders with years of expertise
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Coffee className="h-5 w-5 text-passion-red mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-glacial font-semibold text-gray-900">Fresh Roasted Daily</h3>
                    <p className="font-glacial text-sm text-gray-600">
                      Small-batch roasting for maximum freshness and flavor
                    </p>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-knewave text-lg text-passion-red mb-3 text-center">
                  STAY CONNECTED
                </h3>
                <p className="font-glacial text-sm text-gray-600 text-center mb-4">
                  Get exclusive coffee updates, brewing tips, and special offers delivered to your inbox
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="flex items-center space-x-2 border border-gray-300 rounded-lg px-3 py-2 focus-within:border-passion-red focus-within:ring-2 focus-within:ring-passion-red/20">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-0 focus:ring-0 p-0 text-sm"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-passion-red hover:bg-red-700 text-white font-glacial font-semibold"
                  >
                    Subscribe to Newsletter
                  </Button>
                </form>
                
                <p className="font-glacial text-xs text-gray-500 text-center mt-3">
                  By subscribing, you agree to receive marketing emails from Coffee Culture Roastery
                </p>
              </div>
            </>
          ) : (
            /* Success Message */
            <div className="text-center py-8">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-knewave text-xl text-green-800 mb-2">Welcome to Coffee Culture!</h3>
              <p className="font-glacial text-green-600">
                Thank you for subscribing. You'll receive our first coffee story soon!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup; 