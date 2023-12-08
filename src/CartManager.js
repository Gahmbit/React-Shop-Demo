import { useState } from "react";

export const useCartItems = () => {
  const [cartItems, setCartItems] = useState([]);

  function setAddToCart(productID) {
    let thisCart = [...cartItems];
    console.log(thisCart);
    thisCart.push(productID);
    // console.log(productID);
    setCartItems(thisCart);
  }

  function setRemoveCart(productID) {
    let thisCart = [...cartItems];
    console.log(cartItems);
    thisCart.splice(thisCart.indexOf(productID), 1);
    setCartItems(thisCart);
    // console.log(cartItems);
  }

  return {
    cartItems,
    setAddToCart,
    setRemoveCart,
  };
};
