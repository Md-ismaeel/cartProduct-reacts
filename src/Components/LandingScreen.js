import Navbar from "./Navbar";
import { Cart } from "./Cart";
import { useState } from "react";
import "../Components/LandingScreen.css";
import data from "../Components/data.json"

const LandingScreen = () => {
  const [products, setProducts] = useState(data.phoneData);
  // console.log(phoneData);

  const [quantity, setQuantity] = useState(0);
  return (
    <>
      <Navbar quantity={quantity} setQuantity={setQuantity} />
      <p className="your-bag">
        Your Bags
      </p>
      <Cart
        products={products}
        setProducts={setProducts}
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </>
  );
};

export default LandingScreen;
