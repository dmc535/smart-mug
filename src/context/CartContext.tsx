import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartContextType {
  isOpen: boolean;
  toggleCart: () => void;
  itemCount: number;
  addToCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [itemCount, setItemCount] = useState(0);

  const toggleCart = () => setIsOpen(!isOpen);
  const addToCart = () => setItemCount(prev => prev + 1);

  return (
    <CartContext.Provider value={{ isOpen, toggleCart, itemCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}