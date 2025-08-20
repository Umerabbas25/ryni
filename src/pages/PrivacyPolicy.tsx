import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Users } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background font-montserrat">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Last Updated */}
            <div className="text-center">
              <p className="text-muted-foreground">Last updated: January 1, 2024</p>
            </div>

            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 mr-3 text-accent" />
                  Our Commitment to Privacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  At Ryno, we are committed to protecting your privacy and ensuring the security of your 
                  personal information. This Privacy Policy explains how we collect, use, disclose, and 
                  safeguard your information when you visit our website or make a purchase from us.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="h-6 w-6 mr-3 text-accent" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Personal Information</h3>
                  <p className="text-muted-foreground mb-2">
                    We collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Create an account on our website</li>
                    <li>Make a purchase or attempt to make a purchase</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Contact us for customer support</li>
                    <li>Participate in surveys or promotions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Types of Personal Information</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Name and contact information (email, phone, address)</li>
                    <li>Payment information (credit card details, billing address)</li>
                    <li>Account credentials (username, password)</li>
                    <li>Purchase history and preferences</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Automatically Collected Information</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>IP address and browser information</li>
                    <li>Device information and operating system</li>
                    <li>Website usage data and analytics</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Referral sources and page views</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card>
              <CardHeader>
                <CardTitle>How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Processing and fulfilling orders</li>
                    <li>Managing your account and preferences</li>
                    <li>Providing customer support</li>
                    <li>Sending order confirmations and updates</li>
                    <li>Processing payments and preventing fraud</li>
                  </ul>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Personalizing your shopping experience</li>
                    <li>Sending marketing communications (with consent)</li>
                    <li>Improving our website and services</li>
                    <li>Conducting analytics and research</li>
                    <li>Complying with legal obligations</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-6 w-6 mr-3 text-accent" />
                  How We Share Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except in the following circumstances:
                </p>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Service Providers</h3>
                  <p className="text-muted-foreground">
                    We may share information with trusted third-party service providers who assist us in 
                    operating our website, conducting business, or serving you (payment processors, 
                    shipping companies, email service providers).
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Legal Requirements</h3>
                  <p className="text-muted-foreground">
                    We may disclose information when required by law, court order, or government request, 
                    or to protect our rights, property, or safety.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Business Transfers</h3>
                  <p className="text-muted-foreground">
                    In the event of a merger, acquisition, or sale of assets, your information may be 
                    transferred as part of the business transaction.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="h-6 w-6 mr-3 text-accent" />
                  Data Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational security measures to protect 
                  your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Security Measures Include:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>SSL encryption for data transmission</li>
                    <li>Secure payment processing systems</li>
                    <li>Regular security audits and updates</li>
                    <li>Access controls and authentication</li>
                    <li>Employee training on data protection</li>
                  </ul>
                </div>

                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="text-sm text-foreground">
                    <strong>Important:</strong> While we strive to protect your information, no method of 
                    transmission over the internet or electronic storage is 100% secure. We cannot guarantee 
                    absolute security.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card>
              <CardHeader>
                <CardTitle>Your Privacy Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Access & Portability</h3>
                    <p className="text-muted-foreground text-sm">
                      Request access to your personal information and receive a copy in a portable format.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Correction</h3>
                    <p className="text-muted-foreground text-sm">
                      Request correction of inaccurate or incomplete personal information.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Deletion</h3>
                    <p className="text-muted-foreground text-sm">
                      Request deletion of your personal information, subject to legal requirements.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Opt-Out</h3>
                    <p className="text-muted-foreground text-sm">
                      Opt out of marketing communications and certain data processing activities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card>
              <CardHeader>
                <CardTitle>Cookies and Tracking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We use cookies and similar tracking technologies to enhance your browsing experience, 
                  analyze website traffic, and personalize content.
                </p>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Types of Cookies We Use:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                    <li><strong>Performance Cookies:</strong> Help us analyze website usage</li>
                    <li><strong>Functional Cookies:</strong> Remember your preferences</li>
                    <li><strong>Marketing Cookies:</strong> Deliver relevant advertisements</li>
                  </ul>
                </div>
                
                <p className="text-muted-foreground">
                  You can control cookies through your browser settings, but disabling certain cookies 
                  may affect website functionality.
                </p>
              </CardContent>
            </Card>

            {/* Children's Privacy */}
            <Card>
              <CardHeader>
                <CardTitle>Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our website is not intended for children under 13 years of age. We do not knowingly 
                  collect personal information from children under 13. If we become aware that we have 
                  collected personal information from a child under 13, we will take steps to delete 
                  such information.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Policy */}
            <Card>
              <CardHeader>
                <CardTitle>Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time to reflect changes in our practices 
                  or legal requirements. We will notify you of any material changes by posting the updated 
                  policy on our website and updating the "Last Updated" date. Your continued use of our 
                  services after such changes constitutes acceptance of the updated policy.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-foreground"><strong>Email:</strong> privacy@ryno.com</p>
                  <p className="text-foreground"><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p className="text-foreground"><strong>Address:</strong> 123 Fashion Street, Style District, NY 10001</p>
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

export default PrivacyPolicy;