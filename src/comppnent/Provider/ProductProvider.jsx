import React, { useReducer } from "react";
import { useContext } from "react";
import { productsData } from "../db/product";

const ProductContext = React.createContext(); //state
const ProductContextDispatcher = React.createContext(); //setState
// const initialState = [
//   { title: "node.js", price: "75 $", id: "1", quantity: 1 },
//   { title: "react.js", price: "85 $", id: "2", quantity: 2 },
//   { title: "vue.js", price: "95 $", id: "3", quantity: 3 },
// ];

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
    case "filter":
      console.log(action.event.target.value);
      return state;
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
