import React from "react";
import "./App.css";
import Wrapper from "./comppnent/hoc/Wrapper";
import NavBar from "./comppnent/NavBar/NavBar";
import ProductList from "./comppnent/productList/ProductList";
import ProductProvider, {
  useProducts,
  useProductsActions,
} from "./comppnent/Provider/ProductProvider";

export const UserContext = React.createContext();

const App = () => {
  const products = useProducts();
  const setProducts = useProductsActions();
  const removeHandler = (id) => {
    console.log("click", id);
    const fillterProduct = products.filter((p) => p.id !== id);
    setProducts(fillterProduct);
  };

  const incrementHandler = (id) => {
    const index = products.findIndex((item) => item.id === id);
    console.log(index);

    const product = { ...products[index] };
    product.quantity++;

    const updateProducts = [...products];
    updateProducts[index] = product;

    setProducts(updateProducts);
  };

  const decrementHandler = (id) => {
    const index = products.findIndex((item) => item.id === id);
    const product = { ...products[index] };
    if (product.quantity === 1) {
      const fillterProduct = products.filter((p) => p.id !== id);

      setProducts(fillterProduct);
    } else {
      const updateProducts = [...products];
      product.quantity--;
      updateProducts[index] = product;
      setProducts(updateProducts);
    }
  };

  const changeHandler = (event, id) => {
    const index = products.findIndex((item) => item.id === id);
    const product = { ...products[index] };
    product.title = event.target.value;

    const updateProducts = [...products];
    updateProducts[index] = product;
    setProducts(updateProducts);
  };

  return (
    <>
      <ProductProvider>
        <NavBar />
        <ProductList
          products={products}
          onRemove={removeHandler}
          onIncrement={incrementHandler}
          onDecremnt={decrementHandler}
          onChange={changeHandler}
        />
      </ProductProvider>
    </>
  );
};

export default Wrapper(App, "container");
