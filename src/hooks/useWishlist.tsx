import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth } from './useAuth';
import { getWishlist } from '@/lib/supabase';

interface WishlistContextType {
  wishlistCount: number;
  updateWishlistCount: () => void;
  incrementWishlistCount: (quantity?: number) => void;
  decrementWishlistCount: (quantity?: number) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlistCount, setWishlistCount] = useState(0);
  const { user } = useAuth();

  const updateWishlistCount = async () => {
    if (!user) {
      setWishlistCount(0);
      return;
    }

    try {
      const wishlistItems = await getWishlist(user.id);
      setWishlistCount(wishlistItems.length);
    } catch (error) {
      console.error('Error fetching wishlist count:', error);
      setWishlistCount(0);
    }
  };

  const incrementWishlistCount = (quantity = 1) => {
    setWishlistCount(prev => prev + quantity);
  };

  const decrementWishlistCount = (quantity = 1) => {
    setWishlistCount(prev => Math.max(0, prev - quantity));
  };

  useEffect(() => {
    updateWishlistCount();
  }, [user]);

  return (
    <WishlistContext.Provider value={{
      wishlistCount,
      updateWishlistCount,
      incrementWishlistCount,
      decrementWishlistCount
    }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};