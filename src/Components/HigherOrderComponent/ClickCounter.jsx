import React from "react";
import withCounter from "./withCounter";

const ClickCounter = (props) => {
  const { count, incrementCount } = props;
  return (
    <div className="container">
      <button className="my-btn" type="button" onClick={incrementCount}>
        Click {count} Times
      </button>
    </div>
  );
};

export default withCounter(ClickCounter);

/* import React, { Component } from "react";

export default class ClickCounter extends Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState((prevSate) => ({
      count: prevSate.count + 1,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div className="container">
        <button className="my-btn" type="button" onClick={this.incrementCount}>
          Click {count} Times
        </button>
      </div>
    );
  }
} */
