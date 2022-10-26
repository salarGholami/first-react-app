import Product from "./comppnent/product/Product.js";
import React, { Component, useState } from "react";
class App extends Component {
  state = {
    products: [
      { title: "React.js", price: "89$" },
      { title: "Next.js", price: "109$" },
      { title: "Node.js", price: "7 9$" },
    ],
  };
  clickHandler = () => {
    this.setState({
      products: [
        { title: "React.js", price: "8$" },
        { title: "Next.js", price: "10$" },
        { title: "Node.js", price: "7$" },
      ],
    });
  };
  render() {
    return (
      <div className="container" id="title">
        <h1>shopping App</h1>
        <p>product #1 : book 1</p>
        {this.state.products.map((product) => {
          return <Product name={product.title} price={product.price} />;
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
//     { title: "Node.js", price: "7 9$" },
//   ]);
//   const clickHandler = () => {
//     setProducts([
//       { title: "React.js", price: "28$" },
//       { title: "Next.js", price: "30$" },
//       { title: "Node.js", price: "37$" },
//     ]);
//   };
//   return (
//     <div className="container" id="title">
//       <h1>shopping App</h1>
//       <p>product #1 : book 1</p>
//       {products.map((product) => {
//         return <Product name={product.title} price={product.price} />;
//       })}
//       <button onClick={clickHandler}>بده بزنیم</button>
//     </div>
//   );
// };

export default App;
