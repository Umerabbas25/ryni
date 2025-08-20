import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Award, Heart, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background font-montserrat">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              About Ryno
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We believe that style is a language that speaks before you do. 
              Ryno combines timeless fashion with precision timekeeping to create 
              a lifestyle that reflects elegance, sophistication, and modern sensibility.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Ryno, we're passionate about creating pieces that transcend trends and 
                become timeless expressions of personal style. Our mission is to bridge 
                the gap between fashion and function, offering carefully curated collections 
                that speak to the modern individual's desire for quality, elegance, and authenticity.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Every piece in our collection is selected with meticulous attention to detail, 
                ensuring that when you choose Ryno, you're not just buying clothing or accessories — 
                you're investing in a lifestyle that values craftsmanship, style, and timeless appeal.
              </p>
              <Link to="/new-arrivals">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Explore Our Collection
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-card rounded-lg">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Premium Quality</h3>
                <p className="text-sm text-muted-foreground">
                  Only the finest materials and craftsmanship
                </p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Sustainable</h3>
                <p className="text-sm text-muted-foreground">
                  Ethically sourced and environmentally conscious
                </p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Community</h3>
                <p className="text-sm text-muted-foreground">
                  Building connections through style
                </p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Constantly evolving with modern trends
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">What We Stand For</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our values guide everything we do, from the pieces we select to the 
              relationships we build with our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Authenticity</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe in genuine expression and authentic style that reflects 
                your unique personality and values.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every detail matters. We're committed to delivering excellence in 
                quality, service, and customer experience.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Innovation</h3>
              <p className="text-muted-foreground leading-relaxed">
                We embrace innovation while respecting timeless design principles 
                that make style truly enduring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Join the Ryno Community
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Discover how style can speak for you. Explore our curated collections 
              and find pieces that resonate with your unique aesthetic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/men">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Shop Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;