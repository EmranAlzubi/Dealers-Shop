import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Layout from "./pages/Layout";
import ShopContextProvider from "./context/ShopContext";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return (
    <ShopContextProvider>
      <RouterProvider router={route} />
    </ShopContextProvider>
  );
}

export default App;
