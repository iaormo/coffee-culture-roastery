import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP'
    }).format(price);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <ShoppingBag className="h-24 w-24 text-balanced-gray mx-auto mb-6" />
            <h1 className="font-knewave text-3xl sm:text-4xl text-passion-red mb-4">
              YOUR CART IS EMPTY
            </h1>
            <p className="font-glacial text-lg text-balanced-gray mb-8">
              Looks like you haven't added any coffee to your cart yet. 
              Discover our amazing selection of premium coffee beans.
            </p>
            <Link to="/shop">
              <Button size="lg" className="bg-passion-red hover:bg-red-700 text-white font-glacial font-semibold px-8 py-4">
                Shop Coffee
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-knewave text-3xl sm:text-4xl lg:text-5xl text-passion-red mb-4">
              YOUR CART
            </h1>
            <p className="font-glacial text-lg text-balanced-gray">
              Review your items and proceed to checkout
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={item.id} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      {/* Product Image */}
                      <div className="w-20 h-20 bg-gradient-to-br from-passion-red/10 to-orange-roast/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <ShoppingBag className="h-8 w-8 text-passion-red" />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-knewave text-lg text-passion-red truncate">
                          {item.name}
                        </h3>
                        <p className="font-glacial text-sm text-balanced-gray">
                          {item.type}
                        </p>
                        <p className="font-glacial text-sm text-orange-roast">
                          {item.roastType}
                        </p>
                        <div className="flex flex-wrap gap-1 mt-2">
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

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="font-glacial font-medium text-foreground w-8 text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Price and Remove */}
                      <div className="text-right">
                        <p className="font-glacial font-bold text-lg text-passion-red">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                        <p className="font-glacial text-sm text-balanced-gray">
                          {formatPrice(item.price)} each
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 mt-2"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Clear Cart */}
              <div className="flex justify-end">
                <Button
                  variant="outline"
                  onClick={clearCart}
                  className="text-red-500 border-red-500 hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear Cart
                </Button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-lg sticky top-8">
                <CardContent className="p-6">
                  <h2 className="font-knewave text-xl text-passion-red mb-6">
                    ORDER SUMMARY
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between font-glacial">
                      <span className="text-balanced-gray">Subtotal</span>
                      <span className="text-foreground">{formatPrice(getCartTotal())}</span>
                    </div>
                    <div className="flex justify-between font-glacial">
                      <span className="text-balanced-gray">Shipping</span>
                      <span className="text-foreground">Free</span>
                    </div>
                    <div className="flex justify-between font-glacial">
                      <span className="text-balanced-gray">Tax</span>
                      <span className="text-foreground">{formatPrice(getCartTotal() * 0.12)}</span>
                    </div>
                    <hr className="border-border" />
                    <div className="flex justify-between font-glacial font-bold text-lg">
                      <span className="text-foreground">Total</span>
                      <span className="text-passion-red">{formatPrice(getCartTotal() * 1.12)}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link to="/checkout" className="block">
                      <Button className="w-full bg-passion-red hover:bg-red-700 text-white font-glacial font-semibold py-3">
                        Proceed to Checkout
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link to="/shop" className="block">
                      <Button variant="outline" className="w-full border-passion-red text-passion-red hover:bg-passion-red hover:text-white font-glacial">
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>

                  {/* Shipping Info */}
                  <div className="mt-6 p-4 bg-sunshine-yellow/10 rounded-lg">
                    <h3 className="font-glacial font-semibold text-sm text-foreground mb-2">
                      Free Shipping
                    </h3>
                    <p className="font-glacial text-xs text-balanced-gray">
                      Enjoy free shipping on all orders within Metro Manila. 
                      Provincial shipping rates apply for other areas.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

