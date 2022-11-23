import React, { Component } from "react";
import Product from "../product/Product";

class ProductList extends Component {
  state = {
    products: [
      { title: "React.js", price: "8$", id: 1 },
      { title: "Next.js", price: "10$", id: 2 },
      { title: "Node.js", price: "7$", id: 3 },
    ],
  };
  render() {
    return (
      <div>
        {this.state.products.map((product) => {
          return (
            <Product
              name={product.title}
              price={product.price}
              key={product.id}
              click={() => this.clickHandler("new DataClicked")}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
