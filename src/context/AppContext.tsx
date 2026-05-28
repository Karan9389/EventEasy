import React, { createContext, useContext, useState, useEffect } from 'react';
import { Vendor } from '../lib/data';

interface AppContextType {
  cart: Vendor[];
  wishlist: Vendor[];
  addToCart: (vendor: Vendor) => void;
  removeFromCart: (vendorId: string) => void;
  toggleWishlist: (vendor: Vendor) => void;
  isInWishlist: (vendorId: string) => boolean;
  isInCart: (vendorId: string) => boolean;
  user: any | null;
  login: (user: any) => void;
  logout: () => void;
  cartTotal: number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Vendor[]>([]);
  const [wishlist, setWishlist] = useState<Vendor[]>([]);
  const [user, setUser] = useState<any | null>(null);

  const addToCart = (vendor: Vendor) => {
    if (!cart.find(v => v.id === vendor.id)) {
      setCart([...cart, vendor]);
    }
  };

  const removeFromCart = (vendorId: string) => {
    setCart(cart.filter(v => v.id !== vendorId));
  };

  const toggleWishlist = (vendor: Vendor) => {
    if (wishlist.find(v => v.id === vendor.id)) {
      setWishlist(wishlist.filter(v => v.id !== vendor.id));
    } else {
      setWishlist([...wishlist, vendor]);
    }
  };

  const isInWishlist = (vendorId: string) => {
    return wishlist.some(v => v.id === vendorId);
  };

  const isInCart = (vendorId: string) => {
    return cart.some(v => v.id === vendorId);
  };

  const login = (userData: any) => setUser(userData);
  const logout = () => setUser(null);

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <AppContext.Provider value={{
      cart,
      wishlist,
      addToCart,
      removeFromCart,
      toggleWishlist,
      isInWishlist,
      isInCart,
      user,
      login,
      logout,
      cartTotal
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
