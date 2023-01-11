import { Component } from "react";

class RegComp extends Component {
  render() {
    console.log("Reg Component ");
    return <div> reg comp - {this.props.name}</div>;
  }
}

export default RegComp;
