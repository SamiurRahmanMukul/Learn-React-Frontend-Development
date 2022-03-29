import React from "react";

export default function ClickCounter({ count, incrementCount }) {
  return (
    <div className="container">
      <button className="my-btn" type="button" onClick={incrementCount}>
        Click {count} Times
      </button>
    </div>
  );
}

/* import React, { Component } from "react";

export default class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;

    return (
      <div className="container">
        <button className="my-btn" type="button" onClick={incrementCount}>
          Click {count} Times
        </button>
      </div>
    );
  }
} */
