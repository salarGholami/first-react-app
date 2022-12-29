import style from "./Product.module.css";
import { BiTrash } from "react-icons/bi";
import { useEffect } from "react";

const Product = ({
  product,
  changeHandler,
  onIncrementHandler,
  onDencremntHandler,
  onDelete,
  click,
}) => {
  console.log("Product.js rerender");
  useEffect(() => {
    console.log("Product.js useEffect");
  });
  return (
    <div className={style.product} onClick={click}>
      <p>Product Name:{product.title}</p>
      <p>Product price:{product.price}</p>
      <span className={style.value}>{product.quantity}</span>
      <input
        className={style.input}
        type="text"
        onChange={changeHandler}
        value={product.title}
      />
      <button
        className={`${style.button} ${style.inc}`}
        onClick={onIncrementHandler}
      >
        +
      </button>
      <button
        className={`${style.button} ${
          product.quantity === 1 && style.removeTrash
        }`}
        onClick={onDencremntHandler}
      >
        {product.quantity > 1 ? "-" : <BiTrash />}
      </button>
      <button className={style.button} onClick={onDelete}>
        delete
      </button>
    </div>
  );
};
export default Product;
