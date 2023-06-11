import React, { useContext, useEffect } from "react";
import { ShopContext } from "../../context/ShopContext";
import CartItem from "./CartItem";
import "./CartList.css";
const CartList = () => {
  const { data, CartItems, itemsSum } = useContext(ShopContext);

  const totalamount = itemsSum();

  return (
    <div className="item-list">
      {totalamount > 0 ? (
        data.map((pro) => {
          if (CartItems[pro.id] !== 0) {
            return <CartItem key={pro.id} data={pro} />;
          }
        })
      ) : (
        <h3 className="empty">Your Cart is Empty</h3>
      )}
    </div>
  );
};

export default CartList;
