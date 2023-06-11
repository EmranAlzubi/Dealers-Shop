import React, { useContext } from "react";
import "./ChaekOut.css";
import { ShopContext } from "../../context/ShopContext";
const CheakOut = () => {
  const { totalprice } = useContext(ShopContext);
  const total = totalprice();
  return (
    <div className="cheak-out-card">
      <div className="cart-total-cont">
        <h2>Cart Totals</h2>
      </div>
      <div className="shipping-cont">
        <p className="ship">Shipping</p>
        <p>Free Shipping</p>
      </div>

      <div className="total">
        <p>Total</p>
        <span> ${total}</span>
      </div>
      <div className="chek-out-con">
        <button> CheakOut</button>
      </div>
    </div>
  );
};

export default CheakOut;
