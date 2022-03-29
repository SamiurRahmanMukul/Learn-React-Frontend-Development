import React from "react";
import Content from "./Content";

export default class Section extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    console.log("Section rendered");
    return (
      <div>
        <h3>This is a section</h3>
        <Content />
      </div>
    );
  }
}
