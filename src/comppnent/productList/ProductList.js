import Product from "../product/Product";
import { useProducts, useProductsActions } from "../Provider/ProductProvider";

const ProductList = (props) => {
  const products = useProducts();
  const dispatch = useProductsActions();

  const renderProdact = () => {
    if (products.length === 0) return <div>سبد خرید شما خالی میباشد</div>;

    return products.map((product, index) => {
      return (
        <Product
          product={product}
          key={index}
          onDelete={() => dispatch({type : "remove" , id : product.id})}
          onIncrementHandler={() => dispatch({type : "increment" , id : product.id})}
          onDencremntHandler={() =>  dispatch({type : "decrement" , id : product.id})}
          changeHandler={(e) =>  dispatch({type : "edit" , id : product.id, event:e})}
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
