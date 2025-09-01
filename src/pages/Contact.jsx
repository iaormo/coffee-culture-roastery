import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Coffee, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Roastery',
      details: [
        'Coffee Culture Roastery',
        'Bacolod City, Negros Occidental',
        'Philippines 6100'
      ]
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        '+63 123 456 7890',
        '+63 987 654 3210'
      ]
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'hello@coffeeculture.ph',
        'orders@coffeeculture.ph'
      ]
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      details: [
        'Monday - Friday: 6:00 AM - 9:00 PM',
        'Saturday - Sunday: 7:00 AM - 10:00 PM'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-passion-red to-orange-roast text-black-coffee">
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-knewave text-4xl sm:text-5xl lg:text-6xl mb-6">
            GET IN TOUCH
          </h1>
          <p className="font-glacial text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Have questions about our coffee? Want to visit our roastery? 
            We'd love to hear from you and share our passion for great coffee.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="bg-passion-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-passion-red" />
                  </div>
                  <h3 className="font-knewave text-lg text-passion-red mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="font-glacial text-sm text-passion-red">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-knewave text-2xl text-passion-red flex items-center">
                    <Coffee className="h-6 w-6 mr-2" />
                    Send Us a Message
                  </CardTitle>
                  <p className="font-glacial text-balanced-gray">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-glacial text-sm font-medium text-foreground mb-2 block">
                          Name *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="font-glacial text-sm font-medium text-foreground mb-2 block">
                          Email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-glacial text-sm font-medium text-foreground mb-2 block">
                          Phone
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+63 123 456 7890"
                        />
                      </div>
                      <div>
                        <label className="font-glacial text-sm font-medium text-foreground mb-2 block">
                          Subject *
                        </label>
                        <Input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="What's this about?"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="font-glacial text-sm font-medium text-foreground mb-2 block">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-passion-red hover:bg-red-700 text-white font-glacial font-semibold"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Location Info */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <Card className="border-0 shadow-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-passion-red/20 to-orange-roast/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-passion-red mx-auto mb-4" />
                    <h3 className="font-knewave text-xl text-passion-red mb-2">
                      Find Us in Bacolod
                    </h3>
                    <p className="font-glacial text-balanced-gray">
                      Interactive map coming soon
                    </p>
                  </div>
                </div>
              </Card>

              {/* Location Details */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-knewave text-xl text-passion-red">
                    Visit Our Roastery
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-glacial text-balanced-gray leading-relaxed">
                    Come experience the heart of Coffee Culture Roastery. Watch our master roasters 
                    at work, learn about our coffee journey, and taste the difference that passion makes.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-passion-red mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-glacial font-medium text-foreground">Address</p>
                        <p className="font-glacial text-sm text-balanced-gray">
                          Bacolod City, Negros Occidental, Philippines
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-passion-red mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-glacial font-medium text-foreground">Roastery Tours</p>
                        <p className="font-glacial text-sm text-balanced-gray">
                          Available by appointment<br />
                          Tuesday - Saturday, 10:00 AM - 4:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-sunshine-yellow hover:bg-yellow-500 text-black-coffee font-glacial font-semibold">
                    Schedule a Tour
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-knewave text-3xl sm:text-4xl text-passion-red mb-4">
              NEED HELP? CHAT WITH US!
            </h2>
            <p className="font-glacial text-lg text-balanced-gray max-w-2xl mx-auto">
              Our AI assistant is here to help answer your questions about coffee, orders, and more.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="bg-passion-red/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-10 w-10 text-passion-red" />
              </div>
              <h3 className="font-knewave text-2xl text-passion-red mb-4">
                Coffee Culture AI Assistant
              </h3>
              <p className="font-glacial text-balanced-gray mb-6 max-w-2xl mx-auto">
                Get instant answers about our coffee types, roasting process, shipping, subscriptions, 
                roastery visits, and much more. Our AI assistant is available 24/7 to help you!
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <span className="px-3 py-1 bg-passion-red/10 text-passion-red text-sm font-glacial rounded-full">
                  Coffee Types
                </span>
                <span className="px-3 py-1 bg-passion-red/10 text-passion-red text-sm font-glacial rounded-full">
                  Roasting Process
                </span>
                <span className="px-3 py-1 bg-passion-red/10 text-passion-red text-sm font-glacial rounded-full">
                  Shipping Info
                </span>
                <span className="px-3 py-1 bg-passion-red/10 text-passion-red text-sm font-glacial rounded-full">
                  Business Hours
                </span>
                <span className="px-3 py-1 bg-passion-red/10 text-passion-red text-sm font-glacial rounded-full">
                  Roastery Tours
                </span>
              </div>
              <p className="font-glacial text-sm text-balanced-gray">
                💡 <strong>Tip:</strong> Look for the chat bubble in the bottom-right corner of any page!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-knewave text-3xl sm:text-4xl text-passion-red mb-4">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="font-glacial text-lg text-balanced-gray max-w-2xl mx-auto">
              Quick answers to common questions about our coffee and services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Do you offer coffee subscriptions?",
                answer: "Yes! We offer flexible subscription plans with weekly, bi-weekly, or monthly deliveries. You can customize your selection and pause anytime."
              },
              {
                question: "Can I visit the roastery?",
                answer: "Absolutely! We offer roastery tours by appointment. You'll see our roasting process, learn about coffee origins, and enjoy tastings."
              },
              {
                question: "Do you ship nationwide?",
                answer: "Yes, we ship fresh roasted coffee throughout the Philippines. Orders are typically processed within 1-2 business days."
              },
              {
                question: "What's your return policy?",
                answer: "We stand behind our coffee quality. If you're not satisfied, contact us within 7 days for a full refund or replacement."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-glacial font-semibold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="font-glacial text-sm text-balanced-gray leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

