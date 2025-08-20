import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Clock, MapPin, Package } from "lucide-react";

const ShippingInfo = () => {
  return (
    <div className="min-h-screen bg-background font-montserrat">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Shipping Information
            </h1>
            <p className="text-xl text-muted-foreground">
              Fast, reliable shipping to get your order to you quickly and safely.
            </p>
          </div>
        </div>
      </section>

      {/* Shipping Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Free Shipping */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="h-6 w-6 mr-3 text-accent" />
                  Free Shipping
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Enjoy free standard shipping on all orders over $100 within the United States. 
                  For orders under $100, standard shipping is just $10.
                </p>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="text-sm text-foreground">
                    <strong>Pro Tip:</strong> Add items to your cart to reach $100 and qualify for free shipping!
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Options */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-6 w-6 mr-3 text-accent" />
                  Shipping Options & Delivery Times
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 border border-border rounded-lg">
                      <Package className="h-8 w-8 text-accent mx-auto mb-2" />
                      <h3 className="font-semibold text-foreground mb-2">Standard Shipping</h3>
                      <p className="text-muted-foreground text-sm mb-2">5-7 business days</p>
                      <p className="font-semibold text-foreground">Free over $100</p>
                      <p className="text-muted-foreground text-sm">$10 under $100</p>
                    </div>
                    
                    <div className="text-center p-4 border border-border rounded-lg">
                      <Truck className="h-8 w-8 text-accent mx-auto mb-2" />
                      <h3 className="font-semibold text-foreground mb-2">Express Shipping</h3>
                      <p className="text-muted-foreground text-sm mb-2">2-3 business days</p>
                      <p className="font-semibold text-foreground">$15</p>
                    </div>
                    
                    <div className="text-center p-4 border border-border rounded-lg">
                      <Clock className="h-8 w-8 text-accent mx-auto mb-2" />
                      <h3 className="font-semibold text-foreground mb-2">Overnight Shipping</h3>
                      <p className="text-muted-foreground text-sm mb-2">1 business day</p>
                      <p className="font-semibold text-foreground">$25</p>
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> Delivery times are estimates and may vary based on location, 
                      weather conditions, and carrier delays. Orders placed after 2 PM EST will be 
                      processed the next business day.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Processing Time */}
            <Card>
              <CardHeader>
                <CardTitle>Order Processing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  All orders are processed within 1-2 business days. Orders placed on weekends or 
                  holidays will be processed on the next business day.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Business Days</h3>
                    <p className="text-muted-foreground text-sm">Monday - Friday, 9:00 AM - 5:00 PM EST</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Cut-off Time</h3>
                    <p className="text-muted-foreground text-sm">Orders placed by 2:00 PM EST ship same day</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Locations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-6 w-6 mr-3 text-accent" />
                  Shipping Locations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Domestic Shipping (United States)</h3>
                  <p className="text-muted-foreground mb-2">
                    We ship to all 50 states, including Alaska and Hawaii. We also ship to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>APO/FPO addresses</li>
                    <li>Puerto Rico</li>
                    <li>US Virgin Islands</li>
                    <li>Guam</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">International Shipping</h3>
                  <p className="text-muted-foreground mb-4">
                    We offer international shipping to over 100 countries worldwide. 
                    International shipping rates and delivery times vary by destination.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Canada & Mexico</h4>
                      <p className="text-muted-foreground text-sm">7-14 business days</p>
                      <p className="text-muted-foreground text-sm">Starting at $20</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Europe & Asia</h4>
                      <p className="text-muted-foreground text-sm">10-21 business days</p>
                      <p className="text-muted-foreground text-sm">Starting at $35</p>
                    </div>
                  </div>
                  
                  <div className="bg-accent/10 p-4 rounded-lg mt-4">
                    <p className="text-sm text-foreground">
                      <strong>International Orders:</strong> Customers are responsible for any customs 
                      duties, taxes, or fees imposed by their country. These charges are not included 
                      in our shipping costs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Tracking */}
            <Card>
              <CardHeader>
                <CardTitle>Order Tracking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Once your order ships, you'll receive a confirmation email with tracking information. 
                  You can track your package using the provided tracking number.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Tracking Your Order</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Check your email for shipping confirmation</li>
                      <li>Click the tracking link or visit the carrier's website</li>
                      <li>Enter your tracking number to see real-time updates</li>
                      <li>Sign up for delivery notifications from the carrier</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Delivery Attempts</h3>
                    <p className="text-muted-foreground">
                      If you're not available to receive your package, the carrier will typically 
                      make 2-3 delivery attempts. After failed attempts, packages may be held 
                      at a local facility for pickup or returned to us.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Special Circumstances */}
            <Card>
              <CardHeader>
                <CardTitle>Special Circumstances</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Holiday Shipping</h3>
                  <p className="text-muted-foreground">
                    During peak holiday seasons, shipping times may be extended due to increased 
                    volume. We recommend placing orders early to ensure timely delivery.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Weather Delays</h3>
                  <p className="text-muted-foreground">
                    Severe weather conditions may cause shipping delays beyond our control. 
                    We'll keep you updated if your order is affected by weather-related delays.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Address Changes</h3>
                  <p className="text-muted-foreground">
                    Once an order has shipped, we cannot change the delivery address. Please 
                    contact the carrier directly to arrange delivery to an alternate location 
                    or schedule redelivery.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Packaging */}
            <Card>
              <CardHeader>
                <CardTitle>Packaging & Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We're committed to sustainable packaging practices while ensuring your items 
                  arrive safely and in perfect condition.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Eco-Friendly Materials</h3>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                      <li>Recyclable shipping boxes</li>
                      <li>Biodegradable packing materials</li>
                      <li>Minimal packaging approach</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Protection</h3>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                      <li>Secure packaging for fragile items</li>
                      <li>Weather-resistant materials</li>
                      <li>Tamper-evident sealing</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Shipping Questions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have questions about shipping or need help with your order, our customer 
                  service team is here to help.
                </p>
                <div className="space-y-2">
                  <p className="text-foreground"><strong>Email:</strong> shipping@ryno.com</p>
                  <p className="text-foreground"><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p className="text-foreground"><strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM EST</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShippingInfo;