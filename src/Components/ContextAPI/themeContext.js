import React from "react";

const themeContext = React.createContext();

export default themeContext;

/* // ? create a context then use it
import createContext from "./../lib/Context";

const themeContext = createContext({
  theme: "light",
});

export default themeContext; */
