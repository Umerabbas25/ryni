import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth } from './useAuth';
import { getCartItems } from '@/lib/supabase';

interface CartContextType {
  cartCount: number;
  updateCartCount: () => void;
  incrementCartCount: (quantity?: number) => void;
  decrementCartCount: (quantity?: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartCount, setCartCount] = useState(0);
  const { user } = useAuth();

  const updateCartCount = async () => {
    if (!user) {
      setCartCount(0);
      return;
    }

    try {
      const cartItems = await getCartItems(user.id);
      const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(totalCount);
    } catch (error) {
      console.error('Error fetching cart count:', error);
      setCartCount(0);
    }
  };

  const incrementCartCount = (quantity = 1) => {
    setCartCount(prev => prev + quantity);
  };

  const decrementCartCount = (quantity = 1) => {
    setCartCount(prev => Math.max(0, prev - quantity));
  };

  useEffect(() => {
    updateCartCount();
  }, [user]);

  return (
    <CartContext.Provider value={{
      cartCount,
      updateCartCount,
      incrementCartCount,
      decrementCartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};