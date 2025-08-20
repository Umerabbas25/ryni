import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Scale, AlertTriangle, Users } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background font-montserrat">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground">
              Please read these terms carefully before using our website or services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Last Updated */}
            <div className="text-center">
              <p className="text-muted-foreground">Last updated: January 1, 2024</p>
            </div>

            {/* Agreement */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-6 w-6 mr-3 text-accent" />
                  Agreement to Terms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using the Ryno website ("Service"), you accept and agree to be bound 
                  by the terms and provision of this agreement. If you do not agree to abide by the 
                  above, please do not use this service.
                </p>
              </CardContent>
            </Card>

            {/* Use License */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scale className="h-6 w-6 mr-3 text-accent" />
                  Use License
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Permission is granted to temporarily download one copy of the materials on Ryno's 
                  website for personal, non-commercial transitory viewing only. This is the grant of 
                  a license, not a transfer of title, and under this license you may not:
                </p>
                
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                  <li>attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
                
                <p className="text-muted-foreground">
                  This license shall automatically terminate if you violate any of these restrictions 
                  and may be terminated by Ryno at any time. Upon terminating your viewing of these 
                  materials or upon the termination of this license, you must destroy any downloaded 
                  materials in your possession whether in electronic or printed format.
                </p>
              </CardContent>
            </Card>

            {/* Account Terms */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-6 w-6 mr-3 text-accent" />
                  Account Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Account Creation</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>You must be 18 years or older to create an account</li>
                    <li>You must provide accurate and complete information</li>
                    <li>You are responsible for maintaining the security of your account</li>
                    <li>You must notify us immediately of any unauthorized use</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Account Responsibilities</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Keep your login credentials confidential</li>
                    <li>Update your information when it changes</li>
                    <li>Use your account only for lawful purposes</li>
                    <li>Do not share your account with others</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Products and Services */}
            <Card>
              <CardHeader>
                <CardTitle>Products and Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Product Information</h3>
                  <p className="text-muted-foreground">
                    We strive to provide accurate product descriptions, images, and pricing. However, 
                    we do not warrant that product descriptions or other content is accurate, complete, 
                    reliable, current, or error-free.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Pricing</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>All prices are subject to change without notice</li>
                    <li>Prices are displayed in US dollars unless otherwise noted</li>
                    <li>We reserve the right to correct pricing errors</li>
                    <li>Promotional offers may have additional terms and conditions</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Availability</h3>
                  <p className="text-muted-foreground">
                    Product availability is subject to change. We reserve the right to discontinue 
                    any product at any time. In the event a product is unavailable after you place 
                    an order, we will notify you and provide a full refund.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Orders and Payment */}
            <Card>
              <CardHeader>
                <CardTitle>Orders and Payment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Order Acceptance</h3>
                  <p className="text-muted-foreground">
                    We reserve the right to refuse or cancel any order for any reason, including 
                    but not limited to product availability, errors in product or pricing information, 
                    or problems identified by our fraud detection systems.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Payment Terms</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Payment is due at the time of purchase</li>
                    <li>We accept major credit cards and other payment methods as displayed</li>
                    <li>You authorize us to charge your payment method for the total amount</li>
                    <li>You are responsible for any applicable taxes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Prohibited Uses */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-6 w-6 mr-3 text-accent" />
                  Prohibited Uses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  You may not use our service:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other type of malicious code</li>
                  <li>To collect or track the personal information of others</li>
                  <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                  <li>For any obscene or immoral purpose</li>
                  <li>To interfere with or circumvent the security features of the service</li>
                </ul>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card>
              <CardHeader>
                <CardTitle>Intellectual Property Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The service and its original content, features, and functionality are and will remain 
                  the exclusive property of Ryno and its licensors. The service is protected by copyright, 
                  trademark, and other laws.
                </p>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Trademarks</h3>
                  <p className="text-muted-foreground">
                    Ryno and related graphics, logos, service marks, and trade names used on our 
                    website are trademarks of Ryno and may not be used without permission.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Disclaimers */}
            <Card>
              <CardHeader>
                <CardTitle>Disclaimers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The information on this website is provided on an "as is" basis. To the fullest 
                  extent permitted by law, this Company:
                </p>
                
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>excludes all representations and warranties relating to this website and its contents</li>
                  <li>excludes all liability for damages arising out of or in connection with your use of this website</li>
                </ul>
                
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="text-sm text-foreground">
                    <strong>Important:</strong> Nothing in these terms of service shall exclude or 
                    limit our liability for death or personal injury caused by negligence, fraud, 
                    or any other liability that cannot be excluded by law.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card>
              <CardHeader>
                <CardTitle>Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  In no case shall Ryno, our directors, officers, employees, affiliates, agents, 
                  contractors, interns, suppliers, service providers, or licensors be liable for 
                  any injury, loss, claim, or any direct, indirect, incidental, punitive, special, 
                  or consequential damages of any kind, including, without limitation, lost profits, 
                  lost revenue, lost savings, loss of data, replacement costs, or any similar damages, 
                  whether based in contract, tort (including negligence), strict liability, or otherwise, 
                  arising from your use of any of the service or any products procured using the service.
                </p>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card>
              <CardHeader>
                <CardTitle>Governing Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  These terms and conditions are governed by and construed in accordance with the 
                  laws of New York, United States, and you irrevocably submit to the exclusive 
                  jurisdiction of the courts in that state or location.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card>
              <CardHeader>
                <CardTitle>Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We reserve the right, at our sole discretion, to modify or replace these Terms 
                  at any time. If a revision is material, we will try to provide at least 30 days 
                  notice prior to any new terms taking effect. What constitutes a material change 
                  will be determined at our sole discretion.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-foreground"><strong>Email:</strong> legal@ryno.com</p>
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

export default TermsOfService;