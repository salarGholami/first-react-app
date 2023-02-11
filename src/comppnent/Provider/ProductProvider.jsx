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

export const useProductsActions = () => useContext(ProductContextDispatcher);
