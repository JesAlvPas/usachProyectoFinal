'use client';

import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //CRUD DEL CARRITO
  // GET DEL CARRITO

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, count: (item.count || 1) + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, count: 1 }];
    });
  };


  // PUT DEL CARRITO 

  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === id) {
          const newCount = (item.count || 1) + delta;
          return { ...item, count: newCount > 0 ? newCount : 1 };
        }
        return item;
      })
    );
  };


  // DELETE DEL CARRITO

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};