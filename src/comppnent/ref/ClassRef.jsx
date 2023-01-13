import React, { Component } from "react";
import { createRef } from "react";
class ClassRef extends Component {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus();
  }
  render() {
    return <input type="text" ref={this.inputRef} />;
  }
}

export default ClassRef;
