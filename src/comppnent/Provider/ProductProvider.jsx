import _ from "lodash";
import React, { useReducer } from "react";
import { useContext } from "react";
import { productsData } from "../db/product";

const ProductContext = React.createContext(); //state
const ProductContextDispatcher = React.createContext(); //setState

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      const index = state.findIndex((item) => item.id === action.id);
      console.log(index);

      const product = { ...state[index] };
      product.quantity++;

      const updateProducts = [...state];
      updateProducts[index] = product;

      return updateProducts;
    }
    case "decrement": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      if (product.quantity === 1) {
        const fillterProduct = state.filter((p) => p.id !== action.id);

        return fillterProduct;
      } else {
        const updateProducts = [...state];
        product.quantity--;
        updateProducts[index] = product;
        return updateProducts;
      }
    }
    case "edit":
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.title = action.event.target.value;

      const updateProducts = [...state];
      updateProducts[index] = product;

      return updateProducts;
    case "remove":
      const fillterProduct = state.filter((p) => p.id !== action.id);
      return fillterProduct;
    case "filter": {
      const value = action.selectedOption.value;
      if (value === "") {
        return productsData;
      } else {
        const updatedProducts = productsData.filter(
          (p) => p.availablesSize.indexOf(value) >= 0
        );
        return updatedProducts;
      }
    }
    case "sort": {
      const value = action.selectedOption.value;
      const products = [...state];

      if (value === "lowest") {
        return _.orderBy(products, ["price"], ["asc"]);
      } else {
        return _.orderBy(products, ["price"], ["desc"]);
      }
    }
    case "search": {
      const value = action.event.target.value;
      if (value === "") {
        return state;
      } else {
        const filteredProducts = state.filter((p) =>
          p.title.toLowerCase().includes(value.toLowerCase())
        );
        return filteredProducts;
      }
    }
    default:
      return state;
  }
};

const ProductProvider = ({ children }) => {
  const [products, dipatch] = useReducer(reducer, productsData);

  return (
    <div>
      <ProductContext.Provider value={products}>
        <ProductContextDispatcher.Provider value={dipatch}>
          {children}
        </ProductContextDispatcher.Provider>
      </ProductContext.Provider>
    </div>
  );
};

export default ProductProvider;

export const useProducts = () => useContext(ProductContext);

export const useProductsActions = () => useContext(ProductContextDispatcher);
