import styles from "./Product.module.css"

const Product = (props) => {
  return (
    <div className={styles.product} onClick={props.click}>
      <p>product name : {props.name} course</p>
      <p>product price : {props.price}</p>
    </div>
  );
};

export default Product;
