import React from "react";
import withCounter from "./withCounter";

const HoverCounter = (props) => {
  const { count, incrementCount } = props;

  return (
    <div className="container">
      <h1 className="header" onMouseOver={incrementCount}>
        Hovered {count} Times
      </h1>
    </div>
  );
};

export default withCounter(HoverCounter);

/* import React, { Component } from "react";

export default class HoverCounter extends Component {
  state = {
    hover: 0,
  };

  incrementHover = () => {
    this.setState((prevSate) => ({
      hover: prevSate.hover + 1,
    }));
  };

  render() {
    const { hover } = this.state;

    return (
      <div className="container">
        <h1 className="header" onMouseOver={this.incrementHover}>
          Hovered {hover} Times
        </h1>
      </div>
    );
  }
} */
