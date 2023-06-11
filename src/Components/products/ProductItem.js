import React, { useContext } from "react";
import "./ProductItem.css";
import { ShopContext } from "../../context/ShopContext";

const ProductItem = ({ data }) => {
  const { addtocart, CartItems } = useContext(ShopContext);
  const { image, title, price, id } = data;
  return (
    <div className="item-contanier">
      <img className="img" src={image} alt="" />
      <div className="title"> {title}</div>
      <div>
        <button className="add" onClick={() => addtocart(id)}>
          Add to cart
          {CartItems[id] > 0 && <span> ({CartItems[id]})</span>}
        </button>
      </div>
      <span>${price}</span>
    </div>
  );
};

export default ProductItem;
