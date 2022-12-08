import styles from "./Product.module.css";
import { BiTrash } from "react-icons/bi";

const Product = (props) => {
  return (
    <div className={styles.product} onClick={props.click}>
      <p>product name : {props.product.title} course</p>
      <p>product price : {props.product.price}</p>
      <span className={styles.value}>{props.product.quantity}</span>
      <input
        className={styles.input}
        type="text"
        onChange={props.onChange}
        value={props.product.title}
      />
      <button onClick={props.btnIncrement}>+</button>
      <button onClick={props.btnDecrement}>
        {props.product.quantity > 1 ? "-" : <BiTrash />}
      </button>
      <button onClick={props.btnDelete}>delete</button>
    </div>
  );
};

export default Product;
