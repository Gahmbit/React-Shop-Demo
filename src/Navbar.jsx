import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// import React from "react";

export const Navbar = ({ cartItems }) => {
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
          <Link to="/cart">Cart ({cartItems})</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  cartItems: PropTypes.number,
};
