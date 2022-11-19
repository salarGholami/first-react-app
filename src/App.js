import Product from "./comppnent/product/Product.js";
// import React, { useState } from "react";
import { Component } from "react";
import "./App.css";
// import Counter from "./comppnent/counter";
// import HookObject from "./comppnent/HookObject";
// import HookArray from "./comppnent/HookArray";

class App extends Component {
  state = {
    products: [
      { title: "React.js", price: "8$", id: 1 },
      { title: "Next.js", price: "10$", id: 2 },
      { title: "Node.js", price: "7$", id: 3 },
    ],
  };
  clickHandler = () => {
    this.setState({
      products: [
        { title: "React.js", price: "89$", id: 1 },
        { title: "Next.js", price: "109$", id: 2 },
        { title: "Node.js", price: "7 9$", id: 3 },
      ],
    });
  };
  render() {
    return (
      <div className="container" id="title">
        <h1>shopping App</h1>
        <p>product #1 : book 1</p>
        {this.state.products.map((product) => {
          return (
            <Product
              name={product.title}
              price={product.price}
              key={product.id}
            />
          );
        })}
        <button onClick={this.clickHandler}>بده بزنیم</button>
      </div>
    );
  }
}

// const App = () => {
//   const [products, setProducts] = useState([
//     { title: "React.js", price: "89$" },
//     { title: "Next.js", price: "109$" },
//     { title: "Node.js", price: "79$" },
//   ]);

//   const [users, setUsers] = useState([
//     { userName: "Salar", family: "gholami" },
//     { userName: "Salar", family: "gholami" },
//     { userName: "Salar", family: "gholami" },
//   ]);

//   const clickHandler = () => {
//     setProducts([
//       { title: "React.js", price: "28$" },
//       { title: "Next.js", price: "30$" },
//       { title: "Node.js", price: "37$" },
//     ]);

//     setUsers([
//       { userName: "hasan", family: "gholami" },
//       { userName: "ali", family: "gholami" },
//       { userName: "MMad", family: "gholami" },
//     ]);
//   };

// return (
//   <>
//     {/* <HookObject/> */}

//     {/* <HookArray /> */}
//   </>
// <Counter />
// <div className="container" id="title">
//   <h1>shopping App</h1>
//   <p>product #1 : book 1</p>
//   {products.map((product, user) => {
//     return (
//       <Product
//        name={product.title}
//       userData={user}
//       price={product.price} />
//     );
//   })}
//   <button onClick={clickHandler}>بده بزنیم</button>
// </div>
//   );
// };

export default App;
