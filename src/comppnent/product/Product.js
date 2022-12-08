import styles from "./Product.module.css";

const Product = (props) => {
  return (
    <div className={styles.product} onClick={props.click}>
      <p>product name : {props.product.title} course</p>
      <p>product price : {props.product.price}</p>
      <span className={styles.value}>{props.product.quantity}</span>
      <input className={styles.input} type="text" onChange={props.onChange} value={props.product.title} />
      <button onClick={props.btnIncrement}>+</button>
      <button onClick={props.btnDecrement}>-</button>
      <button onClick={props.btnDelete}>delete</button>
    </div>
  );
};

export default Product;
