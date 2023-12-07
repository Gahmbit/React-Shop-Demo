import { useState } from "react";

export const useCartItems = () => {
  const [cartItems, setCartItems] = useState(0);
  function setUpdateCart() {
    setCartItems((a) => a + 1);
  }
  return {
    cartItems,
    setUpdateCart,
  };
};
