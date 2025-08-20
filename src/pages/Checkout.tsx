import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ShoppingBag, ArrowLeft } from "lucide-react";
import { getCartItems, createOrder, clearCart } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const checkoutSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  shippingAddress: z.string().min(10, "Please enter a complete shipping address"),
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  notes: z.string().optional(),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

const Checkout = () => {
  const { user, loading: authLoading } = useAuth();
  const { updateCartCount } = useCart();
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [orderLoading, setOrderLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      email: user?.email || "",
    },
  });

  useEffect(() => {
    if (user) {
      fetchCartItems();
    } else if (!authLoading) {
      setLoading(false);
    }
  }, [user, authLoading]);

  const fetchCartItems = async () => {
    if (!user) return;
    
    try {
      const data = await getCartItems(user.id);
      setCartItems(data || []);
      
      // If cart is empty, redirect back to cart page
      if (!data || data.length === 0) {
        navigate('/cart');
      }
    } catch (error) {
      console.error('Error fetching cart items:', error);
      toast({
        title: "Error",
        description: "Failed to load cart items. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (formData: CheckoutFormData) => {
    if (!user || cartItems.length === 0) return;

    setOrderLoading(true);
    try {
      const orderItems = cartItems.map(item => ({
        product_id: item.product_id,
        name: item.products.name,
        price: item.products.price,
        quantity: item.quantity,
        size: item.size,
      }));

      // Create order with customer details
      const orderData = {
        ...formData,
        items: orderItems,
        total,
        subtotal,
        shipping,
      };

      await createOrder(user.id, orderItems, total);
      await clearCart(user.id);
      
      toast({
        title: "Order placed successfully!",
        description: "Your order has been confirmed and will be processed soon.",
      });
      
      updateCartCount();
      navigate('/');
    } catch (error) {
      console.error('Error creating order:', error);
      toast({
        title: "Error",
        description: "Failed to place order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setOrderLoading(false);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.products.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + shipping;

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-background font-montserrat">
        <Navbar />
        <div className="pt-24 pb-12">
          <div className="container mx-auto px-4">
            <div className="animate-pulse space-y-6">
              <div className="h-8 bg-muted rounded w-1/4"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="h-32 bg-muted rounded"></div>
                  <div className="h-32 bg-muted rounded"></div>
                </div>
                <div className="h-64 bg-muted rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="min-h-screen bg-background font-montserrat">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate('/cart')}
              className="p-2"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <ShoppingBag className="h-6 w-6 text-accent" />
            <h1 className="text-3xl font-bold text-foreground">Checkout</h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Customer Details Form */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Customer Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        {...register("fullName")}
                        placeholder="Enter your full name"
                        className={errors.fullName ? "border-red-500" : ""}
                      />
                      {errors.fullName && (
                        <p className="text-sm text-red-500 mt-1">{errors.fullName.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phoneNumber">Phone Number *</Label>
                      <Input
                        id="phoneNumber"
                        {...register("phoneNumber")}
                        placeholder="Enter your phone number"
                        className={errors.phoneNumber ? "border-red-500" : ""}
                      />
                      {errors.phoneNumber && (
                        <p className="text-sm text-red-500 mt-1">{errors.phoneNumber.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email">Email (Optional)</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="Enter your email"
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="shippingAddress">Shipping Address *</Label>
                      <Textarea
                        id="shippingAddress"
                        {...register("shippingAddress")}
                        placeholder="Enter your complete shipping address"
                        rows={3}
                        className={errors.shippingAddress ? "border-red-500" : ""}
                      />
                      {errors.shippingAddress && (
                        <p className="text-sm text-red-500 mt-1">{errors.shippingAddress.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="notes">Order Notes (Optional)</Label>
                      <Textarea
                        id="notes"
                        {...register("notes")}
                        placeholder="Any special instructions for your order"
                        rows={2}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center space-x-3 py-2 border-b border-border last:border-b-0">
                          <img
                            src={item.products.image_url}
                            alt={item.products.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">{item.products.name}</h4>
                            {item.size && (
                              <p className="text-xs text-muted-foreground">Size: {item.size}</p>
                            )}
                            <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-sm">
                              ${(item.products.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2 pt-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Subtotal</span>
                          <span>${subtotal.toFixed(2)}</span>
                        </div>
                        
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Shipping</span>
                          <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                        </div>
                        
                        {subtotal < 100 && (
                          <p className="text-xs text-muted-foreground">
                            Add ${(100 - subtotal).toFixed(2)} more for free shipping
                          </p>
                        )}
                        
                        <div className="border-t pt-2">
                          <div className="flex justify-between font-semibold text-lg">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Button 
                  type="submit"
                  className="w-full" 
                  size="lg"
                  disabled={orderLoading}
                >
                  {orderLoading ? "Processing Order..." : "Confirm Order"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By placing this order, you agree to our terms and conditions.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;