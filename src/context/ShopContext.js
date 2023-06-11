import { createContext, useState } from "react";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState("");
  const [visibleRows, setVisibleRows] = useState(8);
  const [loading, setloading] = useState(false);
  const cartdefault = () => {
    let cart = {};
    for (let i = 1; i < 21; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  const [CartItems, setCartItems] = useState(cartdefault());

  const addtocart = (itemid) => {
    setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    // localStorage.setItem("cartItems", JSON.stringify(CartItems));
  };
  const RemoveFromCart = (itemid) => {
    setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };
  const DeleteItem = (itemid) => {
    setCartItems((prev) => ({
      ...prev,
      [itemid]: (prev[itemid] = 0),
    }));
  };
  async function productfetch() {
    setloading(true);
    const response = await fetch("https://fakestoreapi.com/products");
    const items = await response.json();
    setdata(items);
    setloading(false);
  }
  const itemsSum = () => {
    let totalamount = Object.values(CartItems);

    let sum = totalamount.reduce(function (a, b) {
      return a + b;
    });

    return sum;
  };
  const totalprice = () => {
    let totalamount = 0;
    for (const item in CartItems) {
      if (CartItems[item] > 0) {
        let iteminfo = data.find((product) => product.id === Number(item));
        totalamount += CartItems[item] * iteminfo.price;
      }
    }
    return totalamount.toFixed(2);
  };

  const value = {
    productfetch,
    addtocart,
    RemoveFromCart,
    itemsSum,
    totalprice,
    DeleteItem,
    data,
    CartItems,
    search,
    setsearch,
    visibleRows,
    setVisibleRows,
    loading,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
