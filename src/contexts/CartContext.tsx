import React, { createContext, useContext, useState, useCallback } from "react";

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
  addToCart: (
    product: Product,
    size: string,
    color: string,
    quantity: number
  ) => void;
  removeFromCart: (id: number, size: string, color: string) => void;
  updateQuantity: (
    id: number,
    size: string,
    color: string,
    quantity: number
  ) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

// Create Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider Component
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = useCallback(
    (product: Product, size: string, color: string, quantity: number) => {
      setCartItems((prev) => {
        const existingItemIndex = prev.findIndex(
          (item) =>
            item.id === product.id && item.size === size && item.color === color
        );

        if (existingItemIndex !== -1) {
          const updatedCart = [...prev];
          updatedCart[existingItemIndex].quantity += quantity;
          return updatedCart;
        }

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
      });
    },
    []
  );

  const removeFromCart = useCallback(
    (id: number, size: string, color: string) => {
      setCartItems((prev) =>
        prev.filter(
          (item) =>
            !(item.id === id && item.size === size && item.color === color)
        )
      );
    },
    []
  );

  const updateQuantity = useCallback(
    (id: number, size: string, color: string, quantity: number) => {
      if (quantity <= 0) {
        removeFromCart(id, size, color);
        return;
      }

      setCartItems((prev) =>
        prev.map((item) =>
          item.id === id && item.size === size && item.color === color
            ? { ...item, quantity }
            : item
        )
      );
    },
    [removeFromCart]
  );

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const getTotalItems = useCallback(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  const getTotalPrice = useCallback(() => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace("$", ""));
      return total + price * item.quantity;
    }, 0);
  }, [cartItems]);

  const value: CartContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Custom Hook
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
