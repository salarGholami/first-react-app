import Product from "../product/Product";
import { useProducts, useProductsActions } from "../Provider/ProductProvider";

const ProductList = (props) => {
  const products = useProducts();
  const { removeHandler, incrementHandler, decrementHandler, changeHandler } =
    useProductsActions();

  const renderProdact = () => {
    if (products.length === 0) return <div>سبد خرید شما خالی میباشد</div>;

    return products.map((product, index) => {
      return (
        <Product
          product={product}
          key={index}
          onDelete={() => removeHandler(product.id)}
          onIncrementHandler={() => incrementHandler(product.id)}
          onDencremntHandler={() => decrementHandler(product.id)}
          changeHandler={(e) => changeHandler(e, product.id)}
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
