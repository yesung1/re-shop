import React, { useState, useEffect } from "react";

export const CartContext = React.createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  function addToCart(product) {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // If the item already exists in the cart, increment its quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If the item is new to the cart, add it with a quantity of 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  }

  function removeFromCart(product) {
    setCartItems((prev) => prev.filter((item) => item.id !== product.id));
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
