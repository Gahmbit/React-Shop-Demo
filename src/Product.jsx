// import React from "react";

import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Product = ({
  productID,
  isPage,
  className = "productContainer",
  setAddToCart,
  quantity,
  id,
}) => {
  console.log(quantity);
  const [product, setProduct] = useState(null);
  // const setAddToCart = props.setAddToCart;
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productID}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.log(error));
  }, [productID, isPage]);

  return product ? (
    <div className={className} id={id}>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <span>
        <h3>${product.price}</h3>
        {setAddToCart ? (
          <button onClick={() => setAddToCart(productID)}>Add To Cart</button>
        ) : null}
      </span>
      {quantity ? <p>{quantity} in cart</p> : null}
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
  setAddToCart: PropTypes.func,
  quantity: PropTypes.number,
  id: PropTypes.number,
};

export default Product;
