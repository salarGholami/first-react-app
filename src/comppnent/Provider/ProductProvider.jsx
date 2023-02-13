import React, { useState } from "react";
import { useContext } from "react";

const ProductContext = React.createContext(); //state
const ProductContextDispatcher = React.createContext(); //setState

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { title: "node.js", price: "75 $", id: "1", quantity: 1 },
    { title: "react.js", price: "85 $", id: "2", quantity: 2 },
    { title: "vue.js", price: "95 $", id: "3", quantity: 3 },
  ]);

  return (
    <div>
      <ProductContext.Provider value={products}>
        <ProductContextDispatcher.Provider value={setProducts}>
          {children}
        </ProductContextDispatcher.Provider>
      </ProductContext.Provider>
    </div>
  );
};

export default ProductProvider;

export const useProducts = () => useContext(ProductContext);

export const useProductsActions = () => {
  const setProducts = useContext(ProductContextDispatcher);
  const products = useProducts(ProductContext);

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
  return { removeHandler, incrementHandler, decrementHandler, changeHandler };
};
