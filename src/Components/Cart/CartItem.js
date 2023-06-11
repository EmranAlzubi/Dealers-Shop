import React, { useContext } from "react";
import "./CartItem.css";
import { Trash } from "phosphor-react";
import { ShopContext } from "../../context/ShopContext";
const CartItem = ({ data }) => {
  const { addtocart, RemoveFromCart, CartItems, DeleteItem } =
    useContext(ShopContext);
  const { image, title, price, id } = data;
  return (
    <div className="cart-item-cont">
      <div>
        <img src={image} className="img1" alt=""></img>
      </div>
      <div className="item-des">
        <div>
          <h4>{title}</h4>
        </div>
        <div className="quntity">
          <button onClick={() => RemoveFromCart(id)}>-</button>
          <span>{CartItems[id]}</span>
          <button onClick={() => addtocart(id)}>+</button>
        </div>
        <div className="pri-dele">
          <p>${price}</p>
          <button onClick={() => DeleteItem(id)}>
            <Trash size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
