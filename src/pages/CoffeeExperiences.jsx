import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Coffee, Leaf, Award, Calendar, Clock, MapPin, Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CoffeeExperiences = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleBooking = (service) => {
    setSelectedService(service);
    setShowBookingModal(true);
  };

  const handleSubmitBooking = () => {
    // Demo booking submission
    alert(`Booking submitted for ${selectedService} on ${selectedDate} at ${selectedTime}! We'll contact you soon to confirm.`);
    setShowBookingModal(false);
    setSelectedDate('');
    setSelectedTime('');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-passion-red to-orange-roast">
        <div className="absolute inset-0 bg-black-coffee/30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center mb-6">
            <Link to="/">
              <Button variant="ghost" className="text-black-coffee hover:bg-black-coffee/20 mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          <h1 className="font-knewave text-4xl sm:text-5xl lg:text-6xl mb-6 text-passion-red">
            COFFEE EXPERIENCES
          </h1>
          <p className="font-glacial text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-black-coffee">
            Immerse yourself in the world of coffee through our educational programs, 
            tasting experiences, and hands-on training sessions.
          </p>
        </div>
      </section>

      {/* Coffee Cupping & Training Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-knewave text-3xl sm:text-4xl text-passion-red mb-4">
              EDUCATIONAL PROGRAMS
            </h2>
            <p className="font-glacial text-lg text-black-coffee max-w-2xl mx-auto">
              Discover the art of coffee through our expert-led programs designed for coffee enthusiasts and professionals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Coffee Cupping Schedule */}
            <Card className="border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-gradient-to-r from-passion-red to-orange-roast p-6">
                <h3 className="font-knewave text-2xl mb-2 text-black-coffee">Coffee Cupping Sessions</h3>
                <p className="font-glacial text-black-coffee">
                  Discover the art of coffee tasting with our expert-led cupping sessions
                </p>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-glacial font-semibold text-black-coffee">Weekly Cupping</h4>
                      <p className="font-glacial text-sm text-black-coffee">Every Saturday, 2:00 PM</p>
                    </div>
                    <span className="bg-passion-red text-white px-3 py-1 rounded-full text-xs font-glacial font-bold">₱800</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-glacial font-semibold text-black-coffee">Premium Cupping</h4>
                      <p className="font-glacial text-sm text-black-coffee">First Sunday, 10:00 AM</p>
                    </div>
                    <span className="bg-passion-red text-white px-3 py-1 rounded-full text-xs font-glacial font-bold">₱1,200</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-glacial font-semibold text-black-coffee">Private Cupping</h4>
                      <p className="font-glacial text-sm text-black-coffee">By appointment</p>
                    </div>
                    <span className="bg-passion-red text-white px-3 py-1 rounded-full text-xs font-glacial font-bold">₱2,000</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-6 bg-passion-red hover:bg-red-700 text-white font-glacial font-semibold"
                  onClick={() => handleBooking('Coffee Cupping Session')}
                >
                  Book Cupping Session
                </Button>
              </CardContent>
            </Card>

            {/* Barista Training */}
            <Card className="border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-gradient-to-r from-passion-red to-orange-roast p-6">
                <h3 className="font-knewave text-2xl mb-2 text-black-coffee">Barista Training Programs</h3>
                <p className="font-glacial text-black-coffee">
                  Master the craft of coffee preparation with our comprehensive training programs
                </p>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-glacial font-semibold text-black-coffee">Basic Barista</h4>
                      <p className="font-glacial text-sm text-black-coffee">3-day intensive course</p>
                    </div>
                    <span className="bg-passion-red text-white px-3 py-1 rounded-full text-xs font-glacial font-bold">₱5,000</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-glacial font-semibold text-black-coffee">Advanced Barista</h4>
                      <p className="font-glacial text-sm text-black-coffee">5-day comprehensive course</p>
                    </div>
                    <span className="bg-passion-red text-white px-3 py-1 rounded-full text-xs font-glacial font-bold">₱8,500</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-glacial font-semibold text-black-coffee">Latte Art Masterclass</h4>
                      <p className="font-glacial text-sm text-black-coffee">2-day specialized course</p>
                    </div>
                    <span className="bg-passion-red text-white px-3 py-1 rounded-full text-xs font-glacial font-bold">₱3,500</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-6 bg-passion-red hover:bg-red-700 text-white font-glacial font-semibold"
                  onClick={() => handleBooking('Barista Training Program')}
                >
                  Enroll in Training
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-knewave text-3xl sm:text-4xl text-passion-red mb-4">
              ADDITIONAL SERVICES
            </h2>
            <p className="font-glacial text-lg text-black-coffee max-w-2xl mx-auto">
              Explore our range of coffee education and experience programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="bg-passion-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="h-8 w-8 text-passion-red" />
                </div>
                <h3 className="font-knewave text-lg text-black-coffee mb-2">Brewing Workshops</h3>
                <p className="font-glacial text-sm text-black-coffee">
                  Learn different brewing methods and techniques
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="bg-passion-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-passion-red" />
                </div>
                <h3 className="font-knewave text-lg text-black-coffee mb-2">Sustainability Tours</h3>
                <p className="font-glacial text-sm text-black-coffee">
                  Explore our eco-friendly practices and initiatives
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="bg-passion-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-passion-red" />
                </div>
                <h3 className="font-knewave text-lg text-black-coffee mb-2">Coffee Culture</h3>
                <p className="font-glacial text-sm text-black-coffee">
                  Explore the rich traditions and modern innovations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-knewave text-3xl sm:text-4xl text-passion-red mb-4">
              GET IN TOUCH
            </h2>
            <p className="font-glacial text-lg text-black-coffee max-w-2xl mx-auto">
              Ready to start your coffee journey? Contact us to book your experience or learn more about our programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-passion-red mr-3" />
                  <h3 className="font-knewave text-xl text-black-coffee">Visit Our Roastery</h3>
                </div>
                <p className="font-glacial text-black-coffee">
                  Coffee Culture Roastery<br />
                  Bacolod City, Negros Occidental<br />
                  Philippines 6100
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Phone className="h-6 w-6 text-passion-red mr-3" />
                  <h3 className="font-knewave text-xl text-black-coffee">Contact Us</h3>
                </div>
                <p className="font-glacial text-black-coffee">
                  +63 123 456 7890<br />
                  +63 987 654 3210<br />
                  hello@coffeeculture.ph
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-knewave text-xl text-passion-red">Book {selectedService}</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowBookingModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block font-glacial text-sm font-semibold text-black-coffee mb-2">
                  Select Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-passion-red/50 focus:border-passion-red font-glacial"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              
              <div>
                <label className="block font-glacial text-sm font-semibold text-black-coffee mb-2">
                  Select Time
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-passion-red/50 focus:border-passion-red font-glacial"
                >
                  <option value="">Choose a time</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                </select>
              </div>
              
              <div className="flex gap-3 pt-4">
                <Button 
                  variant="outline" 
                  onClick={() => setShowBookingModal(false)}
                  className="flex-1 font-glacial"
                >
                  Cancel
                </Button>
                <Button 
                  onClick={handleSubmitBooking}
                  disabled={!selectedDate || !selectedTime}
                  className="flex-1 bg-passion-red hover:bg-red-700 text-white font-glacial font-semibold disabled:opacity-50"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoffeeExperiences; 