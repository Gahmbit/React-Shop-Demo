import Product from "../Product";

export const Home = () => {
  let featuredProduct = Math.floor(Math.random() * 20);
  console.log(featuredProduct);
  return (
    <>
      {/* <h1>Home</h1> */}
      <div className="homePanel">
        <h1>Welcome to The Store Shop!</h1>
        <h2>See our featured item of the week:</h2>
      </div>
      <Product productID={featuredProduct} isPage={false} />
      {/* max items is 20 lol */}
    </>
  );
};
