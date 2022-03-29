// * class components
import React, { Component } from "react";

export default class Clock extends Component {
  /* constructor(props) {
      super(props);
      this.state = { date: new Date() };
    } */

  // * if not use any props then - state use directly
  state = { date: new Date() };

  /* componentsDidMount() runs after
       components has been rendered the DOM */
  componentDidMount() {
    /* setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000); */

    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <h1 className="heading">
        <span className="text">
          Hello World! Now Time At -{" "}
          {this.state.date.toLocaleTimeString(this.props.locale)}
        </span>
      </h1>
    );
  }
}

// * functional components
/* import React from "react";

function Clock({ local }) {
  return (
    <h1 className="heading">
      <span className="text">
        Hello World! {new Date().toLocaleTimeString(local)}
      </span>
    </h1>
  );
}

export default Clock; */
