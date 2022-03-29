import React, { Component } from "react";

export default class Emoji extends Component {
  addEmoji = (text, emoji) => {
    return `${emoji} ${text} ${emoji}`;
  };

  render(override) {
    let text = "Hello, I am Emoji component";

    if (override) {
      text = override;
    }

    return <div>{text}</div>;
  }
}
