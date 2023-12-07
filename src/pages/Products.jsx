import PropTypes from "prop-types";
import Product from "../Product";
// import { Navbar } from "../Navbar";

const Products = ({ setUpdateCart }) => {
  const myProducts = [];

  for (let i = 1; i <= 20; i++) {
    myProducts.push(
      <Product
        key={`Product${i}`}
        productID={i}
        isPage={false}
        className="smallerProducts"
        setUpdateCart={setUpdateCart}
      />
    );
  }

  // console.log(myProducts);

  return (
    <div className="productPage">
      <h1>Products</h1>
      <div className="productGrid">{myProducts.map((e) => e)}</div>
    </div>
  );
};

Products.propTypes = {
  setUpdateCart: PropTypes.func,
};

export default Products;
