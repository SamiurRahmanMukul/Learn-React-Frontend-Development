import React, { Component } from "react";

export default class FromHandling extends Component {
  state = {
    title: "Hello World | JSX",
    text: "Hello World | This is text",
    library: "React",
    isChecked: false,
  };

  handleChange = (e) => {
    /* this.setState({
      [e.target.name]: e.target.value,
    }); */

    if (e.target.type === "text") {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.type === "textarea") {
      this.setState({
        text: e.target.value,
      });
    } else if (e.target.type === "select-one") {
      this.setState({
        library: e.target.value,
      });
    } else if (e.target.type === "checkbox") {
      this.setState({
        isChecked: e.target.checked,
      });
    } else {
      console.log("Nothing here");
    }
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { title, text, library, isChecked } = this.state;
    console.log(title, text, library, isChecked);
  };

  render() {
    const { title, text, library, isChecked } = this.state;

    return (
      <div className="from-handle">
        <form action="" onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="Enter title here"
            value={title}
            onChange={this.handleChange}
          />{" "}
          <br /> <br />
          <textarea
            cols="30"
            rows="10"
            value={text}
            onChange={this.handleChange}
          />
          <br /> <br />
          <select value={library} onChange={this.handleChange}>
            <option value="Angular">Angular</option>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
          </select>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={this.handleChange}
          />
          <br /> <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
