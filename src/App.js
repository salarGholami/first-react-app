import React, { Component } from "react";
import "./App.css";
import ProductList from "./comppnent/productList/ProductList";
import NavBar from "./comppnent/NavBar/NavBar";

class app extends Component {
  constructor(props) {
    super(props);
    console.log("App.js constructor");
  }

  state = {
    products: [
      { title: "node.js", price: "75 $", id: "1", quantity: 1 },
      { title: "react.js", price: "85 $", id: "2", quantity: 2 },
      { title: "vue.js", price: "95 $", id: "3", quantity: 3 },
    ],
  };

  removeHandler = (id) => {
    console.log("click", id);
    const fillterProduct = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: fillterProduct });
  };

  incrementHandler = (id) => {
    const product = [...this.state.products];
    const selectItem = product.find((p) => p.id === id);
    selectItem.quantity++;
    this.setState({ product });
  };

  decrementHandler = (id) => {
    const product = [...this.state.products];
    const selectItem = product.find((p) => p.id === id);
    if (selectItem.quantity === 1) {
      const fillterProduct = this.state.products.filter((p) => p.id !== id);
      this.setState({ products: fillterProduct });
    } else {
      selectItem.quantity--;
      this.setState({ product });
    }
  };

  changeHandler = (event, id) => {
    const product = [...this.state.products];
    const selectItem = product.find((p) => p.id === id);
    selectItem.title = event.target.value;
    this.setState({ product });
  };

  componentDidMount() {
    console.log("App.js componentDidMount");
  }

  render() {
    console.log("App.js render");
    return (
      <div className="container">
        <NavBar
          totalItem={this.state.products.filter((p) => p.quantity > 0).length}
        />
        <ProductList
          products={this.state.products}
          onRemove={this.removeHandler}
          onIncrement={this.incrementHandler}
          onDecremnt={this.decrementHandler}
          onChange={this.changeHandler}
        />
      </div>
    );
  }
}

export default app;
