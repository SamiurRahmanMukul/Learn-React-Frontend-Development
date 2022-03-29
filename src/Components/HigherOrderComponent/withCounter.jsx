import React, { Component } from "react";

const withCounter = (OriginalComponent) => {
  class NewComponent extends Component {
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
        <OriginalComponent count={count} incrementCount={this.incrementCount} />
      );
    }
  }
  return NewComponent;
};

export default withCounter;
