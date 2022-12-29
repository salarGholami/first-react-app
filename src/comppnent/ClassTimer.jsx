import React, { Component } from "react";
class ClassTimer extends Component {
  state = { count: 0 };
  componentDidMount() {
    this.myState = setInterval(() => {
      console.log("hi salar");
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.myState);
  }
  render() {
    return <div>Class interval</div>;
  }
}

export default ClassTimer;
