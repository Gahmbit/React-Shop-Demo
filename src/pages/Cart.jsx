import PropTypes from "prop-types";
import Product from "../Product";
// import { useEffect, useRef } from "react";

const Cart = ({ cartItems, setRemoveCart }) => {
  // let myCart = document.querySelector(".container");
  // console.log({ cartQuant });
  console.log(cartItems);
  // console.log(myCart.current.childNodes);
  const sortedCart = cartItems.sort((a, b) => a - b);

  //make new array without copies
  const uniqueCart = [...new Set(sortedCart)];
  //get count of duplicates in old array => object, where key is id
  let quantCount = {};
  //map new array, passing count fron object
  sortedCart.forEach((item) => {
    // console.log(item, quantCount);
    quantCount[item]
      ? (quantCount[item] = quantCount[item] + 1)
      : (quantCount[item] = 1);
  });

  // console.log(quantCount);
  // const cartQty = [];
  return (
    <div className="cartWrapper">
      <h1>My Cart</h1>
      {uniqueCart.map((i, index) => {
        // cartQty[i] ? (cartQty[i] += 1) : (cartQty[i] = 1);
        // cartQty[i] = i;
        // console.log(index);
        // console.log(cartQty);
        return (
          <Product
            key={index}
            productID={i}
            isCart={true}
            className="cartProducts"
            quantity={quantCount[i]}
            id={i}
            setRemoveCart={setRemoveCart}
          />
        );
      })}
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.array,
  cartQuant: PropTypes.object,
  setRemoveCart: PropTypes.func,
};

export default Cart;
