import { Component } from "react";

export default class Bracket extends Component {
  addBracket = (text) => {
    return `[ ${text} ]`;
  };

  render() {
    return this.props.children({ addBracket: this.addBracket });
  }
}
