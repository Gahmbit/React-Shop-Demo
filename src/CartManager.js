import { useState } from "react";

export const useCartItems = () => {
  const [cartItems, setCartItems] = useState([]);

  function setAddToCart(productID) {
    console.log(productID);
    let thisCart = [...cartItems];
    thisCart.push(productID);
    setCartItems(thisCart);
  }
  // function setAddToCart

  return {
    cartItems,
    setAddToCart,
  };
};
