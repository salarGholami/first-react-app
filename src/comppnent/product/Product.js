import style from "./Product.module.css";
import { BiTrash } from "react-icons/bi";

const Product = (props) => {
  return (
    <div className={style.product} onClick={props.click}>
      <p>Product Name:{props.product.title}</p>
      <p>Product price:{props.product.price}</p>
      <span className={style.value}>{props.product.quantity}</span>
      <input 
      className={style.input}
        type="text"
        onChange={props.changeHandler}
        value={props.product.title}
      />
      <button
        className={`${style.button} ${style.inc}`}
        onClick={props.onIncrementHandler}
      >
        +
      </button>
      <button
        className={`${style.button} ${
          props.product.quantity === 1 && style.removeTrash
        }`}
        onClick={props.onDencremntHandler}
      >
        {props.product.quantity > 1 ? "-" : <BiTrash />}
      </button>
      <button className={style.button} onClick={props.onDelete}>
        delete
      </button>
    </div>
  );
};
export default Product;
