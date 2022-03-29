import { Component } from "react";

export class Counter extends Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState((prevSate) => ({
      count: prevSate.count + 1,
    }));
  };

  render() {
    /* // ? render props
    const { render } = this.props;
    const { count } = this.state;
    return render(count, this.incrementCount); */

    // ? children pass to render
    const { children } = this.props;
    const { count } = this.state;
    return children(count, this.incrementCount);
  }
}

export default Counter;
