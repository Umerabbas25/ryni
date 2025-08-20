import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getProductsByCategory } from "@/lib/supabase";
import { supabase } from "@/integrations/supabase/client";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import mensCollectionBg from "@/assets/mens-collection-bg.jpg";
import womensCollectionBg from "@/assets/womens-collection-bg.jpg";
import watchesCollectionBg from "@/assets/watches-collection-bg.jpg";
import newArrivalsBg from "@/assets/new-arrivals-bg.jpg";

interface Product {
  id: string;
  name: string;
  price: number;
  original_price?: number;
  image_url: string;
  category: string;
  description?: string;
  sizes?: string[];
  is_new?: boolean;
}

const categoryMap: Record<string, string> = {
  men: "Men's Fashion",
  women: "Women's Fashion", 
  watches: "Watches",
  "new-arrivals": "new-arrivals"
};

const CategoryPage = () => {
  const location = useLocation();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Extract category from pathname
  const category = location.pathname.substring(1); // Remove leading slash

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        let data;
        
        console.log("CategoryPage - category:", category);
        console.log("CategoryPage - categoryMap[category]:", categoryMap[category]);
        
        if (category === "new-arrivals") {
          // For new arrivals, get all products where is_new = true
          const { data: allProducts, error } = await supabase
            .from('products')
            .select('*')
            .eq('is_new', true)
            .order('created_at', { ascending: false });
          
          if (error) throw error;
          data = allProducts;
        } else if (category && categoryMap[category]) {
          console.log("Fetching products for category:", categoryMap[category]);
          data = await getProductsByCategory(categoryMap[category]);
          console.log("Fetched products:", data);
        } else {
          console.log("No valid category found, category:", category);
        }
        
        setProducts(data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    if (category) {
      fetchProducts();
    }
  }, [category]);

  const getPageTitle = () => {
    switch (category) {
      case "men": return "Men's Collection";
      case "women": return "Women's Collection";
      case "watches": return "Watch Collection";
      case "new-arrivals": return "New Arrivals";
      default: return "Products";
    }
  };

  const getPageDescription = () => {
    switch (category) {
      case "men": return "Discover our premium men's fashion collection";
      case "women": return "Explore elegant women's fashion and accessories";
      case "watches": return "Luxury timepieces for every occasion";
      case "new-arrivals": return "Latest additions to our collection";
      default: return "Browse our products";
    }
  };

  const getBackgroundImage = () => {
    switch (category) {
      case "men": return mensCollectionBg;
      case "women": return womensCollectionBg;
      case "watches": return watchesCollectionBg;
      case "new-arrivals": return newArrivalsBg;
      default: return "";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <div 
          className="relative py-32 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${getBackgroundImage()})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {getPageTitle()}
            </h1>
            <p className="text-xl text-white/90">
              {getPageDescription()}
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="container mx-auto px-4 py-16">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-muted h-64 rounded-lg mb-4"></div>
                  <div className="h-4 bg-muted rounded mb-2"></div>
                  <div className="h-4 bg-muted rounded w-2/3"></div>
                </div>
              ))}
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-muted-foreground mb-4">
                No products found
              </h3>
              <p className="text-muted-foreground">
                We're working on adding more products to this category.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;