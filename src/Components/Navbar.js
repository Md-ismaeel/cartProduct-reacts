import React from "react";
import "../Components/Navbar.css";
import { FaCartPlus } from "react-icons/fa";

const Navbar = ({ quantity, setQuantity }) => {
  return (
    <div className="nav-container">
      <div>
        <p>Cart</p>
      </div>
      <div className="icon-container">
        <FaCartPlus id="cartIcon" />
        <sup className="sub">{quantity}</sup>
      </div>
    </div>
  );
};

export default Navbar;
