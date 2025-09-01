import React, { useState, useEffect } from 'react';
import { Eye, Package, User, Calendar, DollarSign, Lock, LogOut, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [error, setError] = useState('');

  const ADMIN_PASSWORD = '060912';

  useEffect(() => {
    // Check if already authenticated
    const authStatus = localStorage.getItem('coffee-admin-auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      loadOrders();
    }
  }, []);

  const loadOrders = () => {
    const savedOrders = JSON.parse(localStorage.getItem('coffee-culture-orders') || '[]');
    setOrders(savedOrders.sort((a, b) => new Date(b.date) - new Date(a.date)));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('coffee-admin-auth', 'true');
      loadOrders();
      setError('');
    } else {
      setError('Invalid password. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('coffee-admin-auth');
    setPassword('');
    setSelectedOrder(null);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP'
    }).format(price);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-PH', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getTotalRevenue = () => {
    return orders.reduce((total, order) => total + order.total, 0);
  };

  const exportOrders = () => {
    const csvContent = [
      ['Order ID', 'Date', 'Customer', 'Email', 'Phone', 'Total', 'Status', 'Items'],
      ...orders.map(order => [
        order.id,
        formatDate(order.date),
        `${order.customer.firstName} ${order.customer.lastName}`,
        order.customer.email,
        order.customer.phone,
        order.total,
        order.status,
        order.items.map(item => `${item.name} (${item.quantity})`).join('; ')
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `coffee-culture-orders-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="bg-passion-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-passion-red" />
                </div>
                <CardTitle className="font-knewave text-2xl text-passion-red">
                  ADMIN ACCESS
                </CardTitle>
                <p className="font-glacial text-sm text-balanced-gray">
                  Enter the admin password to access the order management system
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="font-glacial text-sm font-medium text-foreground mb-2 block">
                      Password
                    </label>
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter admin password"
                      required
                    />
                  </div>
                  
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <p className="font-glacial text-sm text-red-600">{error}</p>
                    </div>
                  )}
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-passion-red hover:bg-red-700 text-white font-glacial font-semibold"
                  >
                    Access Admin Panel
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-knewave text-3xl sm:text-4xl text-passion-red mb-2">
              ADMIN DASHBOARD
            </h1>
            <p className="font-glacial text-lg text-balanced-gray">
              Coffee Culture Roastery Order Management
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={exportOrders}
              className="border-passion-red text-passion-red hover:bg-passion-red hover:text-white"
            >
              <Download className="h-4 w-4 mr-2" />
              Export Orders
            </Button>
            <Button 
              variant="outline" 
              onClick={handleLogout}
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-glacial text-sm text-balanced-gray">Total Orders</p>
                  <p className="font-knewave text-2xl text-passion-red">{orders.length}</p>
                </div>
                <Package className="h-8 w-8 text-passion-red" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-glacial text-sm text-balanced-gray">Total Revenue</p>
                  <p className="font-knewave text-2xl text-passion-red">{formatPrice(getTotalRevenue())}</p>
                </div>
                <DollarSign className="h-8 w-8 text-passion-red" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-glacial text-sm text-balanced-gray">Avg Order Value</p>
                  <p className="font-knewave text-2xl text-passion-red">
                    {orders.length > 0 ? formatPrice(getTotalRevenue() / orders.length) : formatPrice(0)}
                  </p>
                </div>
                <Calendar className="h-8 w-8 text-passion-red" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-glacial text-sm text-balanced-gray">Customers</p>
                  <p className="font-knewave text-2xl text-passion-red">
                    {new Set(orders.map(order => order.customer.email)).size}
                  </p>
                </div>
                <User className="h-8 w-8 text-passion-red" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Orders List */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="font-knewave text-xl text-passion-red">
                  Recent Orders
                </CardTitle>
              </CardHeader>
              <CardContent>
                {orders.length === 0 ? (
                  <div className="text-center py-8">
                    <Package className="h-12 w-12 text-balanced-gray mx-auto mb-4" />
                    <p className="font-glacial text-balanced-gray">No orders found</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div 
                        key={order.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          selectedOrder?.id === order.id 
                            ? 'border-passion-red bg-passion-red/5' 
                            : 'border-gray-200 hover:border-passion-red/50'
                        }`}
                        onClick={() => setSelectedOrder(order)}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-glacial font-medium text-foreground">
                              Order #{order.id}
                            </p>
                            <p className="font-glacial text-sm text-balanced-gray">
                              {order.customer.firstName} {order.customer.lastName}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-glacial font-medium text-passion-red">
                              {formatPrice(order.total)}
                            </p>
                            <Badge variant="secondary" className="bg-green-100 text-green-800">
                              {order.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="font-glacial text-xs text-balanced-gray">
                            {formatDate(order.date)}
                          </p>
                          <p className="font-glacial text-xs text-balanced-gray">
                            {order.items.length} item{order.items.length !== 1 ? 's' : ''}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Details */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-lg sticky top-8">
              <CardHeader>
                <CardTitle className="font-knewave text-xl text-passion-red flex items-center">
                  <Eye className="h-5 w-5 mr-2" />
                  Order Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedOrder ? (
                  <div className="space-y-4">
                    {/* Customer Info */}
                    <div>
                      <h3 className="font-glacial font-medium text-foreground mb-2">Customer</h3>
                      <div className="space-y-1">
                        <p className="font-glacial text-sm text-balanced-gray">
                          {selectedOrder.customer.firstName} {selectedOrder.customer.lastName}
                        </p>
                        <p className="font-glacial text-sm text-balanced-gray">
                          {selectedOrder.customer.email}
                        </p>
                        <p className="font-glacial text-sm text-balanced-gray">
                          {selectedOrder.customer.phone}
                        </p>
                      </div>
                    </div>

                    {/* Shipping Address */}
                    <div>
                      <h3 className="font-glacial font-medium text-foreground mb-2">Shipping</h3>
                      <div className="space-y-1">
                        <p className="font-glacial text-sm text-balanced-gray">
                          {selectedOrder.shipping.address}
                        </p>
                        <p className="font-glacial text-sm text-balanced-gray">
                          {selectedOrder.shipping.city}, {selectedOrder.shipping.province}
                        </p>
                        <p className="font-glacial text-sm text-balanced-gray">
                          {selectedOrder.shipping.postalCode}
                        </p>
                      </div>
                    </div>

                    {/* Order Items */}
                    <div>
                      <h3 className="font-glacial font-medium text-foreground mb-2">Items</h3>
                      <div className="space-y-2">
                        {selectedOrder.items.map((item) => (
                          <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                            <div className="flex-1">
                              <p className="font-glacial text-sm font-medium text-foreground">
                                {item.name}
                              </p>
                              <p className="font-glacial text-xs text-balanced-gray">
                                Qty: {item.quantity} × {formatPrice(item.price)}
                              </p>
                            </div>
                            <p className="font-glacial text-sm font-medium text-foreground">
                              {formatPrice(item.price * item.quantity)}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Order Total */}
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="font-glacial font-medium text-foreground">Total</span>
                        <span className="font-glacial font-bold text-lg text-passion-red">
                          {formatPrice(selectedOrder.total)}
                        </span>
                      </div>
                    </div>

                    {/* Order Notes */}
                    {selectedOrder.orderNotes && (
                      <div>
                        <h3 className="font-glacial font-medium text-foreground mb-2">Notes</h3>
                        <p className="font-glacial text-sm text-balanced-gray bg-gray-50 p-3 rounded-lg">
                          {selectedOrder.orderNotes}
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Eye className="h-12 w-12 text-balanced-gray mx-auto mb-4" />
                    <p className="font-glacial text-balanced-gray">
                      Select an order to view details
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

