import React, { useContext, useState } from "react";
import "./SearchBar.css";
import { ShopContext } from "../../context/ShopContext";

const SearchBar = () => {
  const { search, setsearch } = useContext(ShopContext);
  const handelchange = (e) => {
    setsearch(e.target.value);
    console.log(search);
  };

  return (
    <div>
      <input
        onChange={handelchange}
        value={search}
        className="search"
        name="search"
        type="text"
        placeholder={"Search what you need"}
      ></input>
    </div>
  );
};

export default SearchBar;
