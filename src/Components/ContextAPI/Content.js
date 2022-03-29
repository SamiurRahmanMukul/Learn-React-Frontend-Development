import { useContext } from "react";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "./themeContext";

export default function Content() {
  const context = useContext(ThemeContext);
  const { theme, switchTheme } = context;

  console.log("Content rendered");
  return (
    <div>
      <h3>This is a content.</h3>
      <Counter>
        {(counter, incrementCount) => (
          <HoverCounter
            count={counter}
            incrementCount={incrementCount}
            theme={theme}
            switchTheme={switchTheme}
          />
        )}
      </Counter>
    </div>
  );
}
