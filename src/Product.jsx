// import React from "react";

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import { useCartItems } from "./CartManager";

const Product = ({
  productID,
  isCart,
  className = "productContainer",
  setAddToCart,
  setRemoveCart,
  quantity,
  id,
}) => {
  // console.log(quantity);
  const [product, setProduct] = useState(null);
  // const { setRemoveCart } = useCartItems();
  // console.log(setRemoveCart);

  // const setAddToCart = props.setAddToCart;
  useEffect(() => {
    // console.log(productID);
    fetch(`https://fakestoreapi.com/products/${productID}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.log(error));
  }, [productID, isCart]);

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
      {isCart ? (
        <button onClick={() => setRemoveCart(productID)}>Remove</button>
      ) : null}
    </div>
  ) : (
    <h1>THIS SH*T BROKEN FAM, PLEASE WAIT!</h1>
  );
};

Product.propTypes = {
  productID: PropTypes.number,
  isCart: PropTypes.bool,
  className: PropTypes.string,
  setAddToCart: PropTypes.func,
  setRemoveCart: PropTypes.func,
  quantity: PropTypes.number,
  id: PropTypes.number,
};

export default Product;
