import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, User, MapPin, Phone, Mail, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getCartTotal, clearCart } = useCart();
  
  const [formData, setFormData] = useState({
    // Customer Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Shipping Address
    address: '',
    city: '',
    province: '',
    postalCode: '',
    
    // Payment Information
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    
    // Order Notes
    orderNotes: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP'
    }).format(price);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      // Create order object
      const order = {
        id: Date.now().toString(),
        items: items,
        customer: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone
        },
        shipping: {
          address: formData.address,
          city: formData.city,
          province: formData.province,
          postalCode: formData.postalCode
        },
        total: getCartTotal() * 1.12,
        status: 'confirmed',
        date: new Date().toISOString(),
        orderNotes: formData.orderNotes
      };

      // Save order to localStorage (in real app, this would be sent to backend)
      const existingOrders = JSON.parse(localStorage.getItem('coffee-culture-orders') || '[]');
      existingOrders.push(order);
      localStorage.setItem('coffee-culture-orders', JSON.stringify(existingOrders));

      // Clear cart and redirect to confirmation
      clearCart();
      navigate('/order-confirmation', { state: { order } });
    }, 2000);
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-knewave text-3xl sm:text-4xl lg:text-5xl text-passion-red mb-4">
              CHECKOUT
            </h1>
            <p className="font-glacial text-lg text-balanced-gray">
              Complete your order in just a few steps
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              {[
                { step: 1, title: 'Information', icon: User },
                { step: 2, title: 'Shipping', icon: Truck },
                { step: 3, title: 'Payment', icon: CreditCard }
              ].map(({ step, title, icon: Icon }) => (
                <div key={step} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    currentStep >= step ? 'bg-passion-red text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className={`ml-2 font-glacial text-sm ${
                    currentStep >= step ? 'text-passion-red' : 'text-gray-500'
                  }`}>
                    {title}
                  </span>
                  {step < 3 && <div className="w-8 h-0.5 bg-gray-200 ml-4"></div>}
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2">
                {/* Step 1: Customer Information */}
                {currentStep === 1 && (
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="font-knewave text-xl text-passion-red flex items-center">
                        <User className="h-5 w-5 mr-2" />
                        Customer Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="font-glacial text-sm font-medium text-foreground mb-2 block">
                            First Name *
                          </label>
                          <Input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="John"
                            required
                          />
                        </div>
                        <div>
                          <label className="font-glacial text-sm font-medium text-foreground mb-2 block">
                            Last Name *
                          </label>
                          <Input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Doe"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="font-glacial text-sm font-medium text-foreground mb-2 block">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="font-glacial text-sm font-medium text-foreground mb-2 block">
                          Phone Number *
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+63 123 456 7890"
                          required
                        />
                      </div>
                      
                      <div className="flex justify-end">
                        <Button 
                          type="button" 
                          onClick={nextStep}
                          className="bg-passion-red hover:bg-red-700 text-white"
                        >
                          Continue to Shipping
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Step 2: Shipping Information */}
                {currentStep === 2 && (
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="font-knewave text-xl text-passion-red flex items-center">
                        <MapPin className="h-5 w-5 mr-2" />
                        Shipping Address
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="font-glacial text-sm font-medium text-foreground mb-2 block">
                          Street Address *
                        </label>
                        <Input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="123 Main Street, Barangay Name"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="font-glacial text-sm font-medium text-foreground mb-2 block">
                            City *
                          </label>
                          <Input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="Bacolod City"
                            required
                          />
                        </div>
                        <div>
                          <label className="font-glacial text-sm font-medium text-foreground mb-2 block">
                            Province *
                          </label>
                          <Input
                            type="text"
                            name="province"
                            value={formData.province}
                            onChange={handleInputChange}
                            placeholder="Negros Occidental"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="font-glacial text-sm font-medium text-foreground mb-2 block">
                          Postal Code *
                        </label>
                        <Input
                          type="text"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          placeholder="6100"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="font-glacial text-sm font-medium text-foreground mb-2 block">
                          Order Notes (Optional)
                        </label>
                        <Textarea
                          name="orderNotes"
                          value={formData.orderNotes}
                          onChange={handleInputChange}
                          placeholder="Special delivery instructions, preferred delivery time, etc."
                          rows={3}
                        />
                      </div>
                      
                      <div className="flex justify-between">
                        <Button 
                          type="button" 
                          variant="outline"
                          onClick={prevStep}
                        >
                          Back
                        </Button>
                        <Button 
                          type="button" 
                          onClick={nextStep}
                          className="bg-passion-red hover:bg-red-700 text-white"
                        >
                          Continue to Payment
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Step 3: Payment Information */}
                {currentStep === 3 && (
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="font-knewave text-xl text-passion-red flex items-center">
                        <CreditCard className="h-5 w-5 mr-2" />
                        Payment Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-sunshine-yellow/10 p-4 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Lock className="h-4 w-4 text-passion-red" />
                          <span className="font-glacial text-sm font-medium text-foreground">
                            Secure Payment
                          </span>
                        </div>
                        <p className="font-glacial text-xs text-balanced-gray">
                          Your payment information is encrypted and secure. We accept all major credit cards.
                        </p>
                      </div>
                      
                      <div>
                        <label className="font-glacial text-sm font-medium text-foreground mb-2 block">
                          Card Number *
                        </label>
                        <Input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="font-glacial text-sm font-medium text-foreground mb-2 block">
                            Expiry Date *
                          </label>
                          <Input
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            placeholder="MM/YY"
                            required
                          />
                        </div>
                        <div>
                          <label className="font-glacial text-sm font-medium text-foreground mb-2 block">
                            CVV *
                          </label>
                          <Input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            placeholder="123"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="font-glacial text-sm font-medium text-foreground mb-2 block">
                          Cardholder Name *
                        </label>
                        <Input
                          type="text"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      
                      <div className="flex justify-between">
                        <Button 
                          type="button" 
                          variant="outline"
                          onClick={prevStep}
                        >
                          Back
                        </Button>
                        <Button 
                          type="submit"
                          disabled={isProcessing}
                          className="bg-passion-red hover:bg-red-700 text-white"
                        >
                          {isProcessing ? 'Processing...' : `Complete Order - ${formatPrice(getCartTotal() * 1.12)}`}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="border-0 shadow-lg sticky top-8">
                  <CardContent className="p-6">
                    <h2 className="font-knewave text-xl text-passion-red mb-6">
                      ORDER SUMMARY
                    </h2>

                    {/* Items */}
                    <div className="space-y-3 mb-6">
                      {items.map((item) => (
                        <div key={item.id} className="flex justify-between items-center">
                          <div className="flex-1">
                            <p className="font-glacial text-sm font-medium text-foreground">
                              {item.name}
                            </p>
                            <p className="font-glacial text-xs text-balanced-gray">
                              Qty: {item.quantity}
                            </p>
                          </div>
                          <p className="font-glacial text-sm font-medium text-foreground">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                      ))}
                    </div>

                    <hr className="border-border mb-4" />

                    {/* Totals */}
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between font-glacial text-sm">
                        <span className="text-balanced-gray">Subtotal</span>
                        <span className="text-foreground">{formatPrice(getCartTotal())}</span>
                      </div>
                      <div className="flex justify-between font-glacial text-sm">
                        <span className="text-balanced-gray">Shipping</span>
                        <span className="text-foreground">Free</span>
                      </div>
                      <div className="flex justify-between font-glacial text-sm">
                        <span className="text-balanced-gray">Tax (12%)</span>
                        <span className="text-foreground">{formatPrice(getCartTotal() * 0.12)}</span>
                      </div>
                      <hr className="border-border" />
                      <div className="flex justify-between font-glacial font-bold text-lg">
                        <span className="text-foreground">Total</span>
                        <span className="text-passion-red">{formatPrice(getCartTotal() * 1.12)}</span>
                      </div>
                    </div>

                    {/* Security Badge */}
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <Lock className="h-5 w-5 text-passion-red mx-auto mb-2" />
                      <p className="font-glacial text-xs text-balanced-gray">
                        256-bit SSL encryption
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

