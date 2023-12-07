import { Link } from "react-router-dom";

// import React from "react";

export const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        The Store Shop
      </Link>
      <ul>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};
