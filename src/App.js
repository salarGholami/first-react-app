import React, { Component } from "react";
import "./App.css";
import ProductList from "./comppnent/productList/ProductList";
import NavBar from "./comppnent/NavBar/NavBar";
import ClassCounter from "./comppnent/ClassCounter";
import FunctionalCounter from "./comppnent/FunctionalCounter";

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
    const index = this.state.products.findIndex((item) => item.id === id);
    console.log(index);

    const product = { ...this.state.products[index] };
    product.quantity++;

    const products = [...this.state.products];
    products[index] = product;

    this.setState({ products });
  };

  decrementHandler = (id) => {
    const index = this.state.products.findIndex((item) => item.id === id);
    const product = { ...this.state.products[index] };
    if (product.quantity === 1) {
      const fillterProduct = this.state.products.filter((p) => p.id !== id);

      this.setState({ products: fillterProduct });
    } else {
      const products = [...this.state.products];
      product.quantity--;
      products[index] = product;
      this.setState({ products });
    }
  };

  changeHandler = (event, id) => {
    const index = this.state.products.findIndex((item) => item.id === id);
    const product = { ...this.state.products[index] };
    product.title = event.target.value;

    const products = [...this.state.products];
    products[index] = product;
    this.setState({ products });
  };

  componentDidMount() {
    console.log("App.js componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("App.js componentDidUpdate");
    console.log("App.js", prevState);
  }

  render() {
    console.log("App.js render");
    return (
      <div className="container">
        <FunctionalCounter/>
        {/* <ClassCounter/> */}
        {/* <NavBar
          totalItem={this.state.products.filter((p) => p.quantity > 0).length}
        />
        <ProductList
          products={this.state.products}
          onRemove={this.removeHandler}
          onIncrement={this.incrementHandler}
          onDecremnt={this.decrementHandler}
          onChange={this.changeHandler}
        /> */}
      </div>
    );
  }
}

export default app;
