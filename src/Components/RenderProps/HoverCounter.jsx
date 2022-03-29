import React from "react";

export default function HoverCounter({ count, incrementCount }) {
  return (
    <div className="container">
      <h1 className="header" onMouseOver={incrementCount}>
        Hovered {count} Times
      </h1>
    </div>
  );
}

/* import React, { Component } from "react";

export default class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;

    return (
      <div className="container">
        <h1 className="header" onMouseOver={incrementCount}>
          Hovered {count} Times
        </h1>
      </div>
    );
  }
} */
