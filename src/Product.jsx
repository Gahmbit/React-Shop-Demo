// import React from "react";

import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Product = ({
  productID,
  isPage,
  className = "productContainer",
  setUpdateCart,
}) => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productID}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.log(error));
  }, [productID, isPage]);

  return product ? (
    <div className={className}>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <span>
        <h3>${product.price}</h3>
        <button
          onClick={() => {
            return setUpdateCart(1);
          }}
        >
          Add To Cart
        </button>
      </span>
      {isPage ? <p>{product.description}</p> : null}
    </div>
  ) : (
    <h1>THIS SH*T BROKEN FAM, PLEASE WAIT!</h1>
  );
};

Product.propTypes = {
  productID: PropTypes.number,
  isPage: PropTypes.bool,
  className: PropTypes.string,
  setUpdateCart: PropTypes.func,
};

export default Product;
