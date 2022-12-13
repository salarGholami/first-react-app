import React, { Component } from "react";
import Product from "../product/Product";

class ProductList extends Component {
  renderProdact = () => {
    if (this.props.products.length === 0)
      return <div>سبد خرید شما خالی میباشد</div>;

    return this.props.products.map((product, index) => {
      return (
        <Product
          product={product}
          key={index}
          onDelete={() => this.props.onRemove(product.id)}
          onIncrementHandler={() => this.props.onIncrement(product.id)}
          onDencremntHandler={() => this.props.onDecremnt(product.id)}
          changeHandler={(e) => this.props.onChenge(e, product.id)}
        />
      );
    });
  };
  render() {
    return (
      <div className="container">
        {!this.props.products.length && <div>برگرد ب فروشگاه پسر</div>}
        {this.renderProdact()}
      </div>
    );
  }
}

export default ProductList;
