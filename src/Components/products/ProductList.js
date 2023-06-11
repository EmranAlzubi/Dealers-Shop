import React, { useEffect, useContext } from "react";
import ProductItem from "./ProductItem";
import "./ProductList.css";
import { ShopContext } from "../../context/ShopContext";
const ProductList = () => {
  const { productfetch, data, search, visibleRows, setVisibleRows, loading } =
    useContext(ShopContext);

  useEffect(() => {
    productfetch();
  }, []);

  return (
    <div className="list-container">
      {loading && <p className="loading">Loading...</p>}
      {data
        .filter((pro) => {
          if (search === "") {
            return pro;
          } else if (pro.title.toLowerCase().includes(search.toLowerCase())) {
            return pro;
          }
        })
        .slice(0, visibleRows)
        .map((item) => (
          <ProductItem key={item.id} data={item} />
        ))}
      <div>
        {search === "" && !loading && (
          <button
            className="more-btn"
            onClick={() => setVisibleRows(visibleRows + 8)}
          >
            See More
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductList;
