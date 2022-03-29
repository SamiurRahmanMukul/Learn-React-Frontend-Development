import React from "react";

export default function HoverCounter({
  count,
  incrementCount,
  theme,
  switchTheme,
}) {
  const style =
    theme === "dark"
      ? { backgroundColor: "#000000", color: "#ffffff", padding: "5px" }
      : null;

  console.log("HoverCounter rendered");
  return (
    <div>
      <h3 onMouseOver={incrementCount} style={style}>
        Hovered {count} Times.
      </h3>
      <button type="button" onClick={switchTheme}>
        Change Theme
      </button>
    </div>
  );
}
