import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RefreshCw, Clock, Package, CheckCircle } from "lucide-react";

const ReturnsPolicy = () => {
  return (
    <div className="min-h-screen bg-background font-montserrat">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Returns Policy
            </h1>
            <p className="text-xl text-muted-foreground">
              We want you to be completely satisfied with your purchase. Learn about our hassle-free return process.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <RefreshCw className="h-6 w-6 mr-3 text-accent" />
                  30-Day Return Policy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  At Ryno, we stand behind the quality of our products. If you're not completely satisfied 
                  with your purchase, you can return it within 30 days of delivery for a full refund or exchange. 
                  We believe shopping should be risk-free, and our return policy reflects that commitment.
                </p>
              </CardContent>
            </Card>

            {/* Return Conditions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-6 w-6 mr-3 text-accent" />
                  Return Conditions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Eligible Items</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Items must be in original, unworn condition</li>
                    <li>All original tags and labels must be attached</li>
                    <li>Items must be returned in original packaging</li>
                    <li>Proof of purchase (receipt or order confirmation) required</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Non-Returnable Items</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Personalized or customized items</li>
                    <li>Intimate apparel and swimwear</li>
                    <li>Items damaged by normal wear and tear</li>
                    <li>Items returned after 30 days from delivery</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Return Process */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="h-6 w-6 mr-3 text-accent" />
                  How to Return Items
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Initiate Return</h3>
                      <p className="text-muted-foreground">
                        Contact our customer service team at hello@ryno.com or call +1 (555) 123-4567 
                        to initiate your return. Provide your order number and reason for return.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Receive Return Label</h3>
                      <p className="text-muted-foreground">
                        We'll email you a prepaid return shipping label within 24 hours. 
                        Print the label and attach it to your return package.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Package & Ship</h3>
                      <p className="text-muted-foreground">
                        Securely package your items in the original packaging (if available) 
                        and drop off at any authorized shipping location.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Receive Refund</h3>
                      <p className="text-muted-foreground">
                        Once we receive and inspect your return, we'll process your refund 
                        within 3-5 business days to your original payment method.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Processing Times */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-6 w-6 mr-3 text-accent" />
                  Processing Times
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Return Processing</h3>
                    <p className="text-muted-foreground">
                      Returns are typically processed within 2-3 business days of receipt at our warehouse.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Refund Timeline</h3>
                    <p className="text-muted-foreground">
                      Refunds are issued within 3-5 business days after processing. Bank processing may take additional time.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Exchange Processing</h3>
                    <p className="text-muted-foreground">
                      Exchanges are processed immediately upon receipt, with new items shipped within 1-2 business days.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Store Credit</h3>
                    <p className="text-muted-foreground">
                      Store credit is issued immediately upon return processing and never expires.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Exchanges */}
            <Card>
              <CardHeader>
                <CardTitle>Exchanges</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We're happy to exchange items for a different size or color, subject to availability. 
                  The exchange process follows the same steps as returns, but please specify that you'd 
                  like an exchange when contacting customer service.
                </p>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="text-sm text-foreground">
                    <strong>Note:</strong> If the new item costs more than the original, you'll be charged 
                    the difference. If it costs less, we'll refund the difference to your original payment method.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Damaged Items */}
            <Card>
              <CardHeader>
                <CardTitle>Damaged or Defective Items</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you receive a damaged or defective item, please contact us immediately. We'll arrange 
                  for a replacement or full refund at no cost to you, including return shipping.
                </p>
                <p className="text-muted-foreground">
                  Please take photos of the damaged item and packaging to help us improve our shipping process.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our customer service team is here to help with any questions about returns or exchanges.
                </p>
                <div className="space-y-2">
                  <p className="text-foreground"><strong>Email:</strong> hello@ryno.com</p>
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

export default ReturnsPolicy;