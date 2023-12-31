import PropTypes from "prop-types";
import Product from "../Product";
// import { Navbar } from "../Navbar";

const Products = ({ setAddToCart, setRemoveCart }) => {
  const myProducts = [];

  for (let i = 1; i <= 20; i++) {
    myProducts.push(
      <Product
        key={`Product${i}`}
        productID={i}
        isPage={false}
        className="smallerProducts"
        setAddToCart={setAddToCart}
        setRemoveCart={setRemoveCart}
      />
    );
  }
  // console.log(setRemoveCart);

  // console.log(myProducts);

  return (
    <div className="productPage">
      <h1>Products</h1>
      <div className="productGrid">{myProducts}</div>
    </div>
  );
};

Products.propTypes = {
  setAddToCart: PropTypes.func,
  setRemoveCart: PropTypes.func,
};

export default Products;
