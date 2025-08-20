import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";
import { addToWishlist, removeFromWishlist, isInWishlist, addToCart } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  price: number;
  original_price?: number;
  image_url: string;
  category: string;
  is_new?: boolean;
  sizes?: string[] | null;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { incrementCartCount } = useCart();
  const { incrementWishlistCount, decrementWishlistCount } = useWishlist();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      checkWishlistStatus();
    }
  }, [user, product.id]);

  const checkWishlistStatus = async () => {
    if (!user) return;
    try {
      const inWishlist = await isInWishlist(user.id, product.id);
      setIsLiked(inWishlist);
    } catch (error) {
      console.error('Error checking wishlist:', error);
    }
  };

  const handleWishlistToggle = async () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please login to save products to your wishlist.",
        variant: "destructive",
      });
      return;
    }

    if (loading) return;

    setLoading(true);
    try {
      if (isLiked) {
        await removeFromWishlist(user.id, product.id);
        setIsLiked(false);
        decrementWishlistCount(1);
        toast({
          title: "Removed from wishlist",
          description: `${product.name} has been removed from your wishlist.`,
        });
      } else {
        await addToWishlist(user.id, product.id);
        setIsLiked(true);
        incrementWishlistCount(1);
        toast({
          title: "Added to wishlist",
          description: `${product.name} has been added to your wishlist.`,
        });
      }
    } catch (error) {
      console.error('Error updating wishlist:', error);
      toast({
        title: "Error",
        description: "Failed to update wishlist. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to add items to your cart.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      await addToCart(user.id, product.id, 1);
      incrementCartCount(1);
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      });
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast({
        title: "Error",
        description: "Failed to add item to cart. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
      <div className="relative overflow-hidden">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.is_new && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
            New
          </Badge>
        )}
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-3 right-3 z-10 ${
            isLiked ? "text-red-500" : "text-gray-600"
          } hover:text-red-500 bg-background/80 backdrop-blur-sm transition-colors`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleWishlistToggle();
          }}
          disabled={loading}
        >
          <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
        </Button>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Button 
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            onClick={handleAddToCart}
            disabled={loading}
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
        <h3 className="font-montserrat font-medium text-foreground mb-2 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center space-x-2">
          <span className="font-montserrat font-semibold text-foreground">
            ${product.price}
          </span>
          {product.original_price && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.original_price}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;