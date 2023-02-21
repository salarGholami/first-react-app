import React from "react";
import "./App.css";
import SearchBar from "./common/search/Search";
import Filter from "./comppnent/Filter/Filter";
import Wrapper from "./comppnent/hoc/Wrapper";
import NavBar from "./comppnent/NavBar/NavBar";
import ProductList from "./comppnent/productList/ProductList";
import ProductProvider from "./comppnent/Provider/ProductProvider";

const App = () => {
  return (
    <>
      <ProductProvider>
        <NavBar />
        <SearchBar />
        <Filter />
        <ProductList />
      </ProductProvider>
    </>
  );
};

export default Wrapper(App, "container");
