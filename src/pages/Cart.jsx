import PropTypes from "prop-types";
import Product from "../Product";

const Cart = ({ cartItems }) => {
  const sortedCart = cartItems.sort((a, b) => a - b);
  const cartQty = [];
  return (
    <div className="cartWrapper">
      <h1>My Cart</h1>
      {sortedCart.map((i, index) => {
        cartQty[i] ? (cartQty[i] += 1) : (cartQty[i] = 1);
        // cartQty[i] = i;
        // console.log(index);
        console.log(cartQty);
        return (
          <Product
            key={index}
            productID={i}
            isPage={false}
            className="cartProducts"
            quantity={cartQty[i]}
            id={i}
          />
        );
      })}
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.array,
};

export default Cart;
