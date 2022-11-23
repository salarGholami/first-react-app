import { Component } from "react";
import "./App.css";
import ProductList from "./comppnent/productList/ProductList.js";

class App extends Component {
  state = {
    
  };

  render() {
    return (
      <div className="container" id="title">
        <h1>shopping App</h1>
        <ProductList />
      </div>
    );
  }
}

export default App;
