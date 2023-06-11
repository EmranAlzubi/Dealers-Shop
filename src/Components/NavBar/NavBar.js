import React, { useContext } from "react";
import "./NavBar.css";
import Container from "./Container";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { ShoppingCart } from "phosphor-react";
import { ShopContext } from "../../context/ShopContext";
const NavBar = () => {
  const { itemsSum } = useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="ccontainer">
        <Container />
      </div>
      <div className="bar-content">
        <div className="Categories">
          <ul>
            <Link to="/">
              <b>Home</b>
            </Link>
            <Link> Promo</Link>
            <Link> About</Link>
            <Link> Blog</Link>
          </ul>
        </div>
        <div className="Searchbar">
          <SearchBar />
        </div>
        <div className="Cart-lo">
          <Link to="cart">
            <ShoppingCart size={32} />
            {itemsSum() > 0 && (
              <span className="total-items">{itemsSum()}</span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
