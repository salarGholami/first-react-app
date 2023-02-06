import React, { useState } from "react";
import "./App.css";
import Wrapper from "./comppnent/hoc/Wrapper";
import NavBar from "./comppnent/NavBar/NavBar";
import ProductList from "./comppnent/productList/ProductList";

export const UserContext = React.createContext();

// class app extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   console.log("App.js constructor");
//   // }

//   state = {
//     products: [
//       { title: "node.js", price: "75 $", id: "1", quantity: 1 },
//       { title: "react.js", price: "85 $", id: "2", quantity: 2 },
//       { title: "vue.js", price: "95 $", id: "3", quantity: 3 },
//     ],
//     isShow: true,
//   };

//   removeHandler = (id) => {
//     console.log("click", id);
//     const fillterProduct = products.filter((p) => p.id !== id);
//     setState({ products: fillterProduct });
//   };

//   incrementHandler = (id) => {
//     const index = products.findIndex((item) => item.id === id);
//     console.log(index);

//     const product = { ...products[index] };
//     product.quantity++;

//     const products = [...products];
//     products[index] = product;

//     setState({ products });
//   };

//   decrementHandler = (id) => {
//     const index = products.findIndex((item) => item.id === id);
//     const product = { ...products[index] };
//     if (product.quantity === 1) {
//       const fillterProduct = products.filter((p) => p.id !== id);

//       setState({ products: fillterProduct });
//     } else {
//       const products = [...products];
//       product.quantity--;
//       products[index] = product;
//       setState({ products });
//     }
//   };

//   changeHandler = (event, id) => {
//     const index = products.findIndex((item) => item.id === id);
//     const product = { ...products[index] };
//     product.title = event.target.value;

//     const products = [...products];
//     products[index] = product;
//     setState({ products });
//   };

//   componentDidMount() {
//     // console.log("App.js componentDidMount");
//   }

//   componentDidUpdate(prevProps, prevState) {
//     // console.log("App.js componentDidUpdate");
//     // console.log("App.js", prevState);
//   }

//   render() {
//     return (
//       <>
//         <UserContext.Provider value={"Salar"}>
//           <NavBar
//             totalItem={products.filter((p) => p.quantity > 0).length}
//           />
//           <ProductList
//             products={products}
//             onRemove={removeHandler}
//             onIncrement={incrementHandler}
//             onDecremnt={decrementHandler}
//             onChange={changeHandler}
//           />
//         </UserContext.Provider>
//       </>
//     );
//   }
// }

const App = () => {
  const [products, setProducts] = useState([
    { title: "node.js", price: "75 $", id: "1", quantity: 1 },
    { title: "react.js", price: "85 $", id: "2", quantity: 2 },
    { title: "vue.js", price: "95 $", id: "3", quantity: 3 },
  ]);

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
      <NavBar totalItem={products.filter((p) => p.quantity > 0).length} />
      <ProductList
        products={products}
        onRemove={removeHandler}
        onIncrement={incrementHandler}
        onDecremnt={decrementHandler}
        onChange={changeHandler}
      />
    </>
  );
};

export default Wrapper(App, "container");
