import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Coffee, Leaf, Heart, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '../context/CartContext';
import NewsletterPopup from '../components/NewsletterPopup';

const Home = () => {
  const { addToCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);
  
  // Show popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const featuredCoffees = [
    {
      id: 1,
      name: 'Unleashed',
      type: '100% Arabica',
      description: 'Balanced medium-body with silky finish and delicate sweetness',
      flavorNotes: ['Sweet Caramel', 'Milk Chocolate'],
      price: 450,
      image: '/api/placeholder/300/300'
    },
    {
      id: 2,
      name: 'Black Magic',
      type: '100% Arabica',
      description: 'Full-body, low-acidity with smooth finish',
      flavorNotes: ['Dark Chocolate', 'Roasted Nuts'],
      price: 480,
      image: '/api/placeholder/300/300'
    },
    {
      id: 3,
      name: 'Negros Blend',
      type: '80% Robusta | 20% Arabica',
      description: 'Bold and robust with complex flavor profile',
      flavorNotes: ['Chocolate', 'Nuts', 'Stone Fruit'],
      price: 420,
      image: '/api/placeholder/300/300'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-black-coffee via-passion-red/90 to-orange-roast/80">
        <div className="absolute inset-0 bg-black-coffee/40"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h1 className="font-knewave text-4xl sm:text-6xl lg:text-7xl text-passion-red leading-tight">
              WHERE EVERY BEAN
              <br />
              <span className="text-sunshine-yellow">TELLS A TALE</span>
            </h1>
            <p className="font-glacial text-lg sm:text-xl text-passion-red max-w-2xl mx-auto leading-relaxed">
              From the outset, we envisioned Coffee Culture Roastery as more than just a coffee shop; 
              we saw it as a conduit for a deeper, more meaningful connection between the earth and the espresso cup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/shop">
                <Button size="lg" className="bg-passion-red hover:bg-red-700 text-white font-glacial font-semibold px-8 py-4 text-lg hover-lift shadow-lg">
                  Shop Our Coffee
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="border-2 border-white text-black-coffee bg-white hover:bg-gray-100 font-glacial font-semibold px-8 py-4 text-lg shadow-lg">
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Coffee Highlight */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-knewave text-3xl sm:text-4xl lg:text-5xl text-passion-red mb-4">
              OUR SIGNATURE BLENDS
            </h2>
            <p className="font-glacial text-lg text-balanced-gray max-w-2xl mx-auto">
              Each blend tells a story of craftsmanship, from bean selection to the perfect roast. 
              Discover flavors that spark conversations and create connections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCoffees.map((coffee) => (
              <Card key={coffee.id} className="hover-lift border-0 shadow-lg overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-passion-red/10 to-orange-roast/10 flex items-center justify-center">
                  <Coffee className="h-24 w-24 text-passion-red" />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-knewave text-xl text-passion-red">{coffee.name}</h3>
                      <p className="font-glacial text-sm text-balanced-gray">{coffee.type}</p>
                    </div>
                    <p className="font-glacial text-sm text-foreground leading-relaxed">
                      {coffee.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {coffee.flavorNotes.map((note, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-sunshine-yellow/20 text-orange-roast text-xs font-glacial font-medium rounded-full"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <span className="font-glacial font-bold text-lg text-passion-red">
                        ₱{coffee.price}
                      </span>
                      <Button 
                        size="sm" 
                        className="bg-passion-red hover:bg-red-700 text-white"
                        onClick={() => addToCart(coffee)}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Statement */}
      <section className="py-20 bg-passion-red text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white/20 p-4 rounded-full">
                <Leaf className="h-12 w-12 text-sunshine-yellow" />
              </div>
            </div>
            <h2 className="font-knewave text-3xl sm:text-4xl lg:text-5xl mb-6">
              FARM TO CUP PHILOSOPHY
            </h2>
            <p className="font-glacial text-lg leading-relaxed mb-8">
              This farm-to-cup philosophy has been the backbone of our enterprise since day one, 
              guiding every decision and defining every relationship. With a passion that transcends mere business, 
              we have tirelessly worked to forge partnerships with farmers, ensuring that every bean is not only 
              of the highest quality but also ethically sourced.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Heart className="h-8 w-8 text-sunshine-yellow mx-auto mb-4" />
                <h3 className="font-knewave text-lg mb-2">ETHICAL SOURCING</h3>
                <p className="font-glacial text-sm opacity-90">
                  Direct partnerships with farmers ensuring fair trade and sustainable practices
                </p>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-sunshine-yellow mx-auto mb-4" />
                <h3 className="font-knewave text-lg mb-2">QUALITY FIRST</h3>
                <p className="font-glacial text-sm opacity-90">
                  Every bean is carefully selected and roasted to perfection by our master roasters
                </p>
              </div>
              <div className="text-center">
                <Coffee className="h-8 w-8 text-sunshine-yellow mx-auto mb-4" />
                <h3 className="font-knewave text-lg mb-2">COMMUNITY FOCUSED</h3>
                <p className="font-glacial text-sm opacity-90">
                  Building connections between coffee lovers and the stories behind every cup
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-sunshine-yellow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-knewave text-3xl sm:text-4xl lg:text-5xl text-black-coffee mb-6">
            READY TO TASTE THE DIFFERENCE?
          </h2>
          <p className="font-glacial text-lg text-black-coffee/80 mb-8 max-w-2xl mx-auto">
            Join thousands of coffee lovers who have discovered the authentic taste of Coffee Culture Roastery. 
            Order online and have our premium coffee delivered to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button size="lg" className="bg-passion-red hover:bg-red-700 text-white font-glacial font-semibold px-12 py-4 text-lg hover-lift">
                Start Your Coffee Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-black-coffee text-black-coffee hover:bg-black-coffee hover:text-white font-glacial font-semibold px-8 py-4 text-lg"
              onClick={() => setShowPopup(true)}
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
      
      {/* Newsletter Popup */}
      <NewsletterPopup 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)} 
      />
    </div>
  );
};

export default Home;

