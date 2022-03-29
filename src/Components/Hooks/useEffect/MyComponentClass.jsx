import React, { Component } from "react";

export default class MyComponentClass extends Component {
  state = {
    count: 0,
    date: new Date(),
  };

  // ? life-circle method
  componentDidMount() {
    const { count } = this.state;
    document.title = `Clicked ${count} Times`;
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }
  componentDidUpdate() {
    const { count } = this.state;
    document.title = `Clicked ${count} Times`;
  }
  componentWillUnmount() {
    clearInterval(this.clockTimer)
      ? clearInterval(this.clockTimer)
      : console.log("component will unmount");
  }

  addClick = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  tick = () => {
    this.setState(() => ({
      date: new Date(),
    }));
  };

  render() {
    const { date } = this.state;

    return (
      <div>
        <p>Time: {date.toLocaleTimeString()}</p>
        <p>
          <button type="button" onClick={this.addClick}>
            Click
          </button>
        </p>
      </div>
    );
  }
}
