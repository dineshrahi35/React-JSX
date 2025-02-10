import React, { Component } from "react";
import "./Style.css";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello, What's Up Buddy!",
    };
  }

  handleClick = () => {
    this.setState({ message: "You clicked the button!" });
  };

  render() {
    return (
      <div className="class-component">
        <p>{this.state.message}</p>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default ClassComponent;
