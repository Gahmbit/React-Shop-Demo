// import React from "react";
import { Navbar } from "./Navbar";
import { Home } from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import { Error } from "./pages/Error";
import Products from "./pages/Products";
import { Route, Routes } from "react-router-dom";
// import { useState } from "react";
import { useCartItems } from "./CartManager";

export const App = () => {
  const { cartItems, setUpdateCart } = useCartItems();
  return (
    <>
      <Navbar cartItems={cartItems} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/products"
            element={<Products setUpdateCart={setUpdateCart} />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
        {/* <div>App</div> */}
      </div>
    </>
  );
};
