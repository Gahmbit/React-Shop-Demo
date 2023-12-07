// import React from "react";

import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Product = ({ productID, isPage }) => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productID}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        // console.log(data);
      })
      .catch((error) => console.log(error));
  }, [productID, isPage]);

  return product ? (
    <div className="productContainer">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <h3>${product.price}</h3>
      {isPage ? <p>{product.description}</p> : null}
    </div>
  ) : (
    <h1>THIS SHIT BROKEN FAM</h1>
  );
};

Product.propTypes = {
  productID: PropTypes.number,
  isPage: PropTypes.bool,
};

export default Product;
