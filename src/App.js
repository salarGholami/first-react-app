import React from "react";
import "./App.css";
import Wrapper from "./comppnent/hoc/Wrapper";
import NavBar from "./comppnent/NavBar/NavBar";
import ProductList from "./comppnent/productList/ProductList";
import ProductProvider from "./comppnent/Provider/ProductProvider";

const App = () => {
  return (
    <>
      <ProductProvider>
        <NavBar />
        <ProductList />
      </ProductProvider>
    </>
  );
};

export default Wrapper(App, "container");
