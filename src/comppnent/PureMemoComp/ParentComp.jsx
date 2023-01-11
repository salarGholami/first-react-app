import React, { Component } from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

class ParentComp extends Component {
  state = {
    name: "salar",
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "salar" });
    }, 1000);
  }
  render() {
    console.log("parent component ..................")
    return (
      <div>
        parent component
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
