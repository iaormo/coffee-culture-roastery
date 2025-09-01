import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Package, Truck, Mail, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const OrderConfirmation = () => {
  const location = useLocation();
  const order = location.state?.order;

  if (!order) {
    return (
      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-knewave text-3xl sm:text-4xl text-passion-red mb-4">
              ORDER NOT FOUND
            </h1>
            <p className="font-glacial text-lg text-balanced-gray mb-8">
              We couldn't find your order information. Please check your email for confirmation details.
            </p>
            <Link to="/shop">
              <Button size="lg" className="bg-passion-red hover:bg-red-700 text-white font-glacial font-semibold px-8 py-4">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP'
    }).format(price);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-PH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="font-knewave text-3xl sm:text-4xl lg:text-5xl text-passion-red mb-4">
              ORDER CONFIRMED!
            </h1>
            <p className="font-glacial text-lg text-balanced-gray mb-2">
              Thank you for your order, {order.customer.firstName}!
            </p>
            <p className="font-glacial text-sm text-balanced-gray">
              Order #{order.id} • Placed on {formatDate(order.date)}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Details */}
            <div className="space-y-6">
              {/* Order Items */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-knewave text-xl text-passion-red flex items-center">
                    <Package className="h-5 w-5 mr-2" />
                    Order Items
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                      <div className="flex-1">
                        <h3 className="font-glacial font-medium text-foreground">
                          {item.name}
                        </h3>
                        <p className="font-glacial text-sm text-balanced-gray">
                          {item.type} • Qty: {item.quantity}
                        </p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {item.flavorNotes?.slice(0, 2).map((note, index) => (
                            <span 
                              key={index}
                              className="px-2 py-1 bg-sunshine-yellow/20 text-orange-roast text-xs font-glacial rounded-full"
                            >
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-glacial font-medium text-foreground">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                        <p className="font-glacial text-sm text-balanced-gray">
                          {formatPrice(item.price)} each
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-4 space-y-2">
                    <div className="flex justify-between font-glacial text-sm">
                      <span className="text-balanced-gray">Subtotal</span>
                      <span className="text-foreground">{formatPrice(order.total / 1.12)}</span>
                    </div>
                    <div className="flex justify-between font-glacial text-sm">
                      <span className="text-balanced-gray">Shipping</span>
                      <span className="text-foreground">Free</span>
                    </div>
                    <div className="flex justify-between font-glacial text-sm">
                      <span className="text-balanced-gray">Tax (12%)</span>
                      <span className="text-foreground">{formatPrice(order.total - (order.total / 1.12))}</span>
                    </div>
                    <hr className="border-border" />
                    <div className="flex justify-between font-glacial font-bold text-lg">
                      <span className="text-foreground">Total</span>
                      <span className="text-passion-red">{formatPrice(order.total)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Information */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-knewave text-xl text-passion-red flex items-center">
                    <Truck className="h-5 w-5 mr-2" />
                    Shipping Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-glacial font-medium text-foreground">
                      {order.customer.firstName} {order.customer.lastName}
                    </p>
                    <p className="font-glacial text-sm text-balanced-gray">
                      {order.shipping.address}
                    </p>
                    <p className="font-glacial text-sm text-balanced-gray">
                      {order.shipping.city}, {order.shipping.province} {order.shipping.postalCode}
                    </p>
                  </div>
                  
                  {order.orderNotes && (
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <p className="font-glacial text-sm font-medium text-foreground mb-1">
                        Order Notes:
                      </p>
                      <p className="font-glacial text-sm text-balanced-gray">
                        {order.orderNotes}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* What's Next */}
            <div className="space-y-6">
              {/* Next Steps */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-knewave text-xl text-passion-red">
                    What Happens Next?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-passion-red/10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="font-glacial text-sm font-bold text-passion-red">1</span>
                    </div>
                    <div>
                      <h3 className="font-glacial font-medium text-foreground">Order Processing</h3>
                      <p className="font-glacial text-sm text-balanced-gray">
                        We'll start roasting your coffee beans fresh to order within 24 hours.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-passion-red/10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="font-glacial text-sm font-bold text-passion-red">2</span>
                    </div>
                    <div>
                      <h3 className="font-glacial font-medium text-foreground">Packaging & Shipping</h3>
                      <p className="font-glacial text-sm text-balanced-gray">
                        Your coffee will be carefully packaged and shipped within 2-3 business days.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-passion-red/10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="font-glacial text-sm font-bold text-passion-red">3</span>
                    </div>
                    <div>
                      <h3 className="font-glacial font-medium text-foreground">Delivery</h3>
                      <p className="font-glacial text-sm text-balanced-gray">
                        Expect delivery within 3-5 business days for Metro Manila, 5-7 days for provinces.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-knewave text-xl text-passion-red">
                    Need Help?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-glacial text-sm text-balanced-gray">
                    We've sent a confirmation email to <strong>{order.customer.email}</strong>. 
                    If you have any questions about your order, don't hesitate to contact us.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-passion-red" />
                      <span className="font-glacial text-sm text-foreground">hello@coffeeculture.ph</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-passion-red" />
                      <span className="font-glacial text-sm text-foreground">+63 123 456 7890</span>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Link to="/contact">
                      <Button variant="outline" className="w-full border-passion-red text-passion-red hover:bg-passion-red hover:text-white">
                        Contact Support
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <div className="space-y-3">
                <Link to="/shop" className="block">
                  <Button className="w-full bg-passion-red hover:bg-red-700 text-white font-glacial font-semibold">
                    Continue Shopping
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.print()}
                >
                  Print Order Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;

