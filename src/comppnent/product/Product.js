import style from "./Product.module.css";
import { BiTrash } from "react-icons/bi";
import { Component } from "react";

class Product extends Component {
  componentWillUnmount() {
    console.log("product.js componentWillUnmount")
  }
  render() {
    console.log("Product render");
    return (
      <div className={style.product} onClick={this.props.click}>
        <p>Product Name:{this.props.product.title}</p>
        <p>Product price:{this.props.product.price}</p>
        <span className={style.value}>{this.props.product.quantity}</span>
        <input
          className={style.input}
          type="text"
          onChange={this.props.changeHandler}
          value={this.props.product.title}
        />
        <button
          className={`${style.button} ${style.inc}`}
          onClick={this.props.onIncrementHandler}
        >
          +
        </button>
        <button
          className={`${style.button} ${
            this.props.product.quantity === 1 && style.removeTrash
          }`}
          onClick={this.props.onDencremntHandler}
        >
          {this.props.product.quantity > 1 ? "-" : <BiTrash />}
        </button>
        <button className={style.button} onClick={this.props.onDelete}>
          delete
        </button>
      </div>
    );
  }
}

// const Product = ({
//   this.props.product,
//   changeHandler,
//   onIncrementHandler,
//   onDencremntHandler,
//   onDelete,
//   click,
// }) => {
//   console.log("Product.js render")
//   return (
//     <div className={style.this.props.product} onClick={click}>
//       <p>Product Name:{this.props.product.title}</p>
//       <p>Product price:{this.props.product.price}</p>
//       <span className={style.value}>{this.props.product.quantity}</span>
//       <input
//         className={style.input}
//         type="text"
//         onChange={changeHandler}
//         value={this.props.product.title}
//       />
//       <button
//         className={`${style.button} ${style.inc}`}
//         onClick={onIncrementHandler}
//       >
//         +
//       </button>
//       <button
//         className={`${style.button} ${
//           this.props.product.quantity === 1 && style.removeTrash
//         }`}
//         onClick={onDencremntHandler}
//       >
//         {this.props.product.quantity > 1 ? "-" : <BiTrash />}
//       </button>
//       <button className={style.button} onClick={onDelete}>
//         delete
//       </button>
//     </div>
//   );
// }; 
export default Product;
