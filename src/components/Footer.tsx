import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { subscribeToNewsletter } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    try {
      await subscribeToNewsletter(email.trim());
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message?.includes("duplicate") 
          ? "You're already subscribed to our newsletter."
          : "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-montserrat font-bold">RYNO</h3>
            <p className="text-sm text-primary-foreground/80">
              Style That Speaks — Fashion & Time Combined
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-montserrat font-semibold">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/men" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Men's Collection
              </Link>
              <Link to="/women" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Women's Collection
              </Link>
              <Link to="/watches" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Watches
              </Link>
              <Link to="/new-arrivals" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                New Arrivals
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-montserrat font-semibold">Customer Service</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Contact Us
              </Link>
              <Link to="/returns" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Returns Policy
              </Link>
              <Link to="/privacy" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/shipping" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Shipping Info
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-montserrat font-semibold">Stay Updated</h4>
            <p className="text-sm text-primary-foreground/80">
              Subscribe to get special offers and updates
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-primary-foreground text-primary"
              />
              <Button variant="secondary" size="icon" type="submit" disabled={loading}>
                <Mail className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-primary-foreground/60">
              © 2024 Ryno. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;