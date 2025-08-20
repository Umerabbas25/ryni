import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Menu, X, Search, User, Heart, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { user, signOut } = useAuth();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setIsSearchOpen(false);
      setIsMenuOpen(false);
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      // Focus on search input after it opens
      setTimeout(() => {
        const searchInput = document.getElementById('navbar-search');
        if (searchInput) searchInput.focus();
      }, 100);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-montserrat font-bold text-foreground">
            RYNO
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/men" className="text-foreground hover:text-accent transition-colors">
              Men
            </Link>
            <Link to="/women" className="text-foreground hover:text-accent transition-colors">
              Women
            </Link>
            <Link to="/watches" className="text-foreground hover:text-accent transition-colors">
              Watches
            </Link>
            <Link to="/new-arrivals" className="text-foreground hover:text-accent transition-colors">
              New Arrivals
            </Link>
            <Link to="/about" className="text-foreground hover:text-accent transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </Link>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleSearch}>
              <Search className="h-5 w-5" />
            </Button>
            
            {user ? (
              <>
                <Button variant="ghost" size="icon" asChild className="relative">
                  <Link to="/wishlist">
                    <Heart className="h-5 w-5" />
                    {wishlistCount > 0 && (
                      <Badge 
                        variant="destructive" 
                        className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
                      >
                        {wishlistCount > 99 ? '99+' : wishlistCount}
                      </Badge>
                    )}
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild className="relative">
                  <Link to="/cart">
                    <ShoppingBag className="h-5 w-5" />
                    {cartCount > 0 && (
                      <Badge 
                        variant="destructive" 
                        className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
                      >
                        {cartCount > 99 ? '99+' : cartCount}
                      </Badge>
                    )}
                  </Link>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <User className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem className="font-medium">
                      Hello, {user.user_metadata?.display_name || user.email}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={signOut}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <Button variant="ghost" size="icon" asChild>
                <Link to="/auth">
                  <User className="h-5 w-5" />
                </Link>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Desktop Search Bar */}
        {isSearchOpen && (
          <div className="hidden md:block py-4 border-t border-border">
            <form onSubmit={handleSearch} className="flex gap-2 max-w-md mx-auto">
              <Input
                id="navbar-search"
                type="text"
                placeholder="Search products, categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
                autoComplete="off"
              />
              <Button type="submit" size="icon">
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link to="/men" className="text-foreground hover:text-accent transition-colors">
                Men
              </Link>
              <Link to="/women" className="text-foreground hover:text-accent transition-colors">
                Women
              </Link>
              <Link to="/watches" className="text-foreground hover:text-accent transition-colors">
                Watches
              </Link>
              <Link to="/new-arrivals" className="text-foreground hover:text-accent transition-colors">
                New Arrivals
              </Link>
              <Link to="/about" className="text-foreground hover:text-accent transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-foreground hover:text-accent transition-colors">
                Contact
              </Link>
              
              {user ? (
                <div className="pt-4 space-y-3">
                  <p className="text-sm font-medium text-foreground">
                    Hello, {user.user_metadata?.display_name || user.email}
                  </p>
                  <div className="flex items-center space-x-4">
                     <Button variant="ghost" size="icon" onClick={toggleSearch}>
                       <Search className="h-5 w-5" />
                     </Button>
                    <Button variant="ghost" size="icon" asChild className="relative">
                      <Link to="/wishlist" onClick={() => setIsMenuOpen(false)}>
                        <Heart className="h-5 w-5" />
                        {wishlistCount > 0 && (
                          <Badge 
                            variant="destructive" 
                            className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
                          >
                            {wishlistCount > 99 ? '99+' : wishlistCount}
                          </Badge>
                        )}
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild className="relative">
                      <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
                        <ShoppingBag className="h-5 w-5" />
                        {cartCount > 0 && (
                          <Badge 
                            variant="destructive" 
                            className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
                          >
                            {cartCount > 99 ? '99+' : cartCount}
                          </Badge>
                        )}
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" onClick={signOut}>
                      <LogOut className="h-4 w-4 mr-1" />
                      Sign Out
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="pt-4">
                  <Button variant="outline" size="sm" asChild onClick={() => setIsMenuOpen(false)}>
                    <Link to="/auth">Sign In</Link>
                  </Button>
                </div>
              )}
            </div>

            {/* Mobile Search Bar */}
            {isSearchOpen && (
              <div className="pt-4 border-t border-border">
                <form onSubmit={handleSearch} className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Search products, categories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1"
                    autoComplete="off"
                  />
                  <Button type="submit" size="icon">
                    <Search className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;