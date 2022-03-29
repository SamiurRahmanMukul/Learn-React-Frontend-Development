import { Component } from "react";

export default class Emoji extends Component {
  addEmoji = (text, emoji) => {
    return `${emoji} ${text} ${emoji}`;
  };

  render() {
    try {
      return this.props.children({ addEmoji: this.addEmoji });
    } catch (error) {
      console.log(error);
    } finally {
      return this.props.children;
    }
  }
}
