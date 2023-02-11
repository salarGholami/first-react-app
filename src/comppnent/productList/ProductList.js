import React from "react";
import Product from "../product/Product";
import { useProducts} from "../Provider/ProductProvider";

const ProductList = (props) => {
  const products = useProducts();
  // const setProducts = useProductsActions();

  const renderProdact = () => {
    const {  onChange, onIncrement, onDecremnt, onRemove } = props;

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
  return (
    <div className="container">
      {!products.length && <div>برگرد ب فروشگاه پسر</div>}
      {renderProdact()}
    </div>
  );
};

export default ProductList;
