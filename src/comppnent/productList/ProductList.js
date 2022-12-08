import React, { Component } from "react";
import Product from "../product/Product";

class ProductList extends Component {
  state = {
    products: [
      { title: "React.js", price: "8$", id: 1, quantity: 1 },
      { title: "Next.js", price: "10$", id: 2, quantity: 3 },
      { title: "Node.js", price: "7$", id: 3, quantity: 2 },
    ],
  };

  deleteHandler = (id) => {
    console.log("delete", id);
    const filterProduct = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: filterProduct });
  };

  incrementHandler = (id) => {
    console.log("increment", id);
    const product = [...this.state.products];
    const selectedItem = product.find((p) => p.id === id);
    selectedItem.quantity++;
    this.setState({ products: product });
  };

  decrementHandler = (id) => {
    console.log("decrement", id);
    const product = [...this.state.products];
    const selectedItem = product.find((p) => p.id === id);
    if (selectedItem.quantity === 1) {
      const filterProduct = this.state.products.filter((p) => p.id !== id);
      this.setState({ products: filterProduct });
    } else {
      selectedItem.quantity--;
      this.setState({ products: product });
    }
  };

  changeHandler = (event, id) => {
    const product = [...this.state.products];
    const selectedItem = product.find((p) => p.id === id);
    selectedItem.title = event.target.value;
    this.setState({ products: product });
  };

  renderProduct = () => {
    if (this.state.products.length === 0)
      return <>there is no product in your card</>;

    return (
      <div>
        {this.state.products.map((product) => {
          return (
            <Product
              product={product}
              key={product.id}
              btnDelete={() => this.deleteHandler(product.id)}
              btnIncrement={() => this.incrementHandler(product.id)}
              btnDecrement={() => this.decrementHandler(product.id)}
              onChange={(e) => this.changeHandler(e, product.id)}
            />
          );
        })}
      </div>
    );
  };
  render() {
    return (
      <>
        {this.state.products.length === 0 && <>یه چی بخر دیگههههههه</>}
        <div>{this.renderProduct()}</div>
      </>
    );
  }
}

export default ProductList;
