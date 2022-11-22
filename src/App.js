import Product from "./comppnent/product/Product.js";
import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    products: [
      { title: "React.js", price: "8$", id: 1 },
      { title: "Next.js", price: "10$", id: 2 },
      { title: "Node.js", price: "7$", id: 3 },
    ],
    count: 0,
  };

  countHandler(id) {
    console.log("count click ", id);
    this.setState({ count: this.state.count + 1 });
  }

  clickHandler = (newData) => {
    this.setState({
      products: [
        { title: "React.js", price: "89$", id: 1 },
        { title: newData, price: "109$", id: 2 },
        { title: "Node.js", price: "7 9$", id: 3 },
      ],
    });
  };

  render() {
    return (
      <div className="container" id="title">
        <h1>shopping App</h1>
        {this.state.products.map((product) => {
          return (
            <Product
              name={product.title}
              price={product.price}
              key={product.id}
              click={()=>this.clickHandler("new DataClicked")}
            />
          );
        })}
        {/* <button onClick={this.clickHandler}>بده بزنیم</button> */}
        <button onClick={this.countHandler.bind(this, 2)}>
          counter:{this.state.count}
        </button>
      </div>
    );
  }
}

export default App;
