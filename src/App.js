import { Component } from "react";
import "./App.css";
import Navbar from "./comppnent/NavBar/NavBar";
import ProductList from "./comppnent/productList/ProductList.js";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="container" id="title">
        <h1>shopping App</h1>
        <Navbar />
        <ProductList />
      </div>
    );
  }
}

export default App;
