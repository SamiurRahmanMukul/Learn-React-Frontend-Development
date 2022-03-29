import React, { Component } from "react";
import Button from "./Button";

export default class ClockEventHandling extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date(), locale: "bn-BD" };

    // `this` key word problem solved to bind handleClick function
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  handleClick = () => {
    if (this.state.locale === "bn-BD") {
      this.setState({
        locale: "en-US",
      });
    } else if (this.state.locale === "en-US") {
      this.setState({
        locale: "bn-BD",
      });
    }

    /* this.setState({
      locale: "en-US",
    }); */
  };

  render() {
    const { time, locale } = this.state;

    return (
      <div className="container">
        <h1 className="heading">
          <span className="text">
            NOW TIME AT - {time.toLocaleTimeString(locale)}
          </span>
        </h1>

        {/* <button type="button" onClick={this.handleClick}>
          Click Here
        </button> */}

        {/* <Button change={this.handleClick.bind(this, "en-US")} /> */}
        {/* <Button change={() => this.handleClick("en-US")} /> */}
        <Button change={this.handleClick} locale="en-US" />

        {/* inline rendering clockHandling components */}
        {/* {locale === "bn-BD" ? (
          <Button change={this.handleClick} locale="en-US" />
        ) : (
          <Button change={this.handleClick} locale="bn-BD" />
        )} */}
      </div>
    );
  }
}
