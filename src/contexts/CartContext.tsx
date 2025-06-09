// contexts/CartContext.tsx
import React, { createContext, useContext, useState } from 'react';

// Types
export interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

export interface Product {
  id: number;
  name: string;
  price: string;
  rating: number;
  image: string;
  colors: string[];
  category: string;
  sizes: string[];
  description: string;
  images: string[];
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, size: string, color: string, quantity: number) => void;
  removeFromCart: (id: number, size: string, color: string) => void;
  updateQuantity: (id: number, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

// Create Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider Component
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, size: string, color: string, quantity: number) => {
    setCartItems(prev => {
      // Check if item already exists in cart
      const existingItemIndex = prev.findIndex(
        item => item.id === product.id && item.size === size && item.color === color
      );

      if (existingItemIndex !== -1) {
        // Update quantity if item exists
        const updatedCart = [...prev];
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;
      } else {
        // Add new item to cart
        const newItem: CartItem = {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          size,
          color,
          quantity,
        };
        return [...prev, newItem];
      }
    });
  };

  const removeFromCart = (id: number, size: string, color: string) => {
    setCartItems(prev => 
      prev.filter(item => !(item.id === id && item.size === size && item.color === color))
    );
  };

  const updateQuantity = (id: number, size: string, color: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id, size, color);
      return;
    }

    setCartItems(prev => 
      prev.map(item => 
        item.id === id && item.size === size && item.color === color
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const value: CartContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};