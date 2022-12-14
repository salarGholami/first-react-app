import React, { Component } from "react";
import Product from  "../product/Product";

class ProductList extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("ProductList.js componentDidUpdate");
  }

  renderProdact = () => {
    const { products, onChange, onIncrement, onDecremnt, onRemove } =
      this.props;

    if (products.length === 0) return <div>سبد خرید شما خالی میباشد</div>;

    return products.map((product, index) => {
      return (
        <Product
          product={product}
          key={index}
          onDelete={() => onRemove(product.id)}
          onIncrementHandler={() => onIncrement(product.id)}
          onDencremntHandler={() => onDecremnt(product.id)}
          changeHandler={(e) => onChange(e, product.id)}
        />
      );
    });
  };
  render() {
    console.log("ProductList.js render");
    const { products } = this.props;
    return (
      <div className="container">
        {!products.length && <div>برگرد ب فروشگاه پسر</div>}
        {this.renderProdact()}
      </div>
    );
  }
}

export default ProductList;
