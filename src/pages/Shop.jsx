import React, { useState } from 'react';
import { Coffee, Plus, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useCart } from '../context/CartContext';

const Shop = () => {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Unleashed',
      roastType: 'Medium Roast',
      type: '100% Arabica',
      description: 'Balanced medium-body with silky finish and delicate sweetness. Perfect for those who appreciate subtle complexity.',
      flavorNotes: ['Sweet Caramel', 'Milk Chocolate', 'Vanilla'],
      price: 450,
      category: 'arabica',
      inStock: true,
      image: '/api/placeholder/300/300'
    },
    {
      id: 2,
      name: 'Black Magic',
      roastType: 'Dark Roast',
      type: '100% Arabica',
      description: 'Full-body, low-acidity with smooth finish. Bold flavors that awaken your senses.',
      flavorNotes: ['Dark Chocolate', 'Roasted Nuts', 'Caramel'],
      price: 480,
      category: 'arabica',
      inStock: true,
      image: '/api/placeholder/300/300'
    },
    {
      id: 3,
      name: 'Negros Blend',
      roastType: 'Medium-Dark Roast',
      type: '80% Robusta | 20% Arabica',
      description: 'Bold and robust with complex flavor profile. A tribute to our Negros heritage.',
      flavorNotes: ['Chocolate', 'Nuts', 'Stone Fruit'],
      price: 420,
      category: 'blend',
      inStock: true,
      image: '/api/placeholder/300/300'
    },
    {
      id: 4,
      name: 'Morning Glory',
      roastType: 'Light Roast',
      type: '100% Arabica',
      description: 'Bright and vibrant with floral notes. The perfect way to start your day.',
      flavorNotes: ['Citrus', 'Floral', 'Honey'],
      price: 460,
      category: 'arabica',
      inStock: true,
      image: '/api/placeholder/300/300'
    },
    {
      id: 5,
      name: 'Espresso Supreme',
      roastType: 'Dark Roast',
      type: '70% Arabica | 30% Robusta',
      description: 'Crafted specifically for espresso lovers. Rich crema and intense flavor.',
      flavorNotes: ['Dark Chocolate', 'Spices', 'Brown Sugar'],
      price: 520,
      category: 'espresso',
      inStock: true,
      image: '/api/placeholder/300/300'
    },
    {
      id: 6,
      name: 'Decaf Delight',
      roastType: 'Medium Roast',
      type: '100% Arabica (Decaffeinated)',
      description: 'All the flavor without the caffeine. Swiss water processed for purity.',
      flavorNotes: ['Milk Chocolate', 'Nuts', 'Caramel'],
      price: 490,
      category: 'decaf',
      inStock: true,
      image: '/api/placeholder/300/300'
    },
    {
      id: 7,
      name: 'Cold Brew Special',
      roastType: 'Medium Roast',
      type: '100% Arabica',
      description: 'Specially selected and roasted for cold brewing. Smooth and refreshing.',
      flavorNotes: ['Chocolate', 'Berry', 'Smooth'],
      price: 470,
      category: 'specialty',
      inStock: false,
      image: '/api/placeholder/300/300'
    },
    {
      id: 8,
      name: 'Single Origin Benguet',
      roastType: 'Light-Medium Roast',
      type: '100% Arabica',
      description: 'High-altitude grown beans from the mountains of Benguet. Unique terroir.',
      flavorNotes: ['Citrus', 'Wine', 'Floral'],
      price: 580,
      category: 'single-origin',
      inStock: true,
      image: '/api/placeholder/300/300'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Coffee' },
    { id: 'arabica', name: '100% Arabica' },
    { id: 'blend', name: 'Blends' },
    { id: 'espresso', name: 'Espresso' },
    { id: 'single-origin', name: 'Single Origin' },
    { id: 'decaf', name: 'Decaf' },
    { id: 'specialty', name: 'Specialty' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.flavorNotes.some(note => note.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-knewave text-4xl sm:text-5xl lg:text-6xl text-passion-red mb-4">
            COFFEE SHOP
          </h1>
          <p className="font-glacial text-lg text-balanced-gray max-w-2xl mx-auto">
            Discover our carefully curated selection of premium coffee beans, 
            each roasted to perfection and bursting with unique flavors.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-balanced-gray" />
            <Input
              type="text"
              placeholder="Search coffee or flavor notes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? 
                  "bg-passion-red hover:bg-red-700 text-white" : 
                  "border-passion-red text-passion-red hover:bg-passion-red hover:text-white"
                }
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="hover-lift border-0 shadow-lg overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-passion-red/10 to-orange-roast/10 flex items-center justify-center relative">
                <Coffee className="h-20 w-20 text-passion-red" />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black-coffee/50 flex items-center justify-center">
                    <span className="text-white font-glacial font-semibold">Out of Stock</span>
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-knewave text-lg text-passion-red">{product.name}</h3>
                    <p className="font-glacial text-xs text-balanced-gray">{product.type}</p>
                    <p className="font-glacial text-xs text-orange-roast font-medium">{product.roastType}</p>
                  </div>
                  
                  <p className="font-glacial text-sm text-foreground leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {product.flavorNotes.slice(0, 3).map((note, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-sunshine-yellow/20 text-orange-roast text-xs font-glacial rounded-full"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-glacial font-bold text-lg text-passion-red">
                      ₱{product.price}
                    </span>
                    <Button 
                      size="sm" 
                      onClick={() => handleAddToCart(product)}
                      disabled={!product.inStock}
                      className="bg-passion-red hover:bg-red-700 text-white disabled:bg-balanced-gray disabled:cursor-not-allowed"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Coffee className="h-16 w-16 text-balanced-gray mx-auto mb-4" />
            <h3 className="font-knewave text-xl text-balanced-gray mb-2">No Coffee Found</h3>
            <p className="font-glacial text-balanced-gray">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;

