import React from "react";
import ClickCounter from "./../Components/ContextAPI/ClickCounter";
import Counter from "./../Components/ContextAPI/Counter";
import Section from "./../Components/ContextAPI/Section";
import ThemeContext from "./../Components/ContextAPI/themeContext";
import "./Style.css";

export default class App extends React.Component {
  state = {
    theme: "light",
    switchTheme: () => {
      this.setState(({ theme }) => {
        if (theme === "dark") {
          return {
            theme: "light",
          };
        }
        return {
          theme: "dark",
        };
      });
    },
  };

  render() {
    return (
      <div className="app">
        <Counter>{(counter, incrementCount) => <ClickCounter count={counter} incrementCount={incrementCount} />}</Counter>
        <ThemeContext.Provider value={this.state}>
          <Section />
        </ThemeContext.Provider>
      </div>
    );
  }
}
