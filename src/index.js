import React from "react";
import ReactDOM from "react-dom";
// import App from "./App/App";
// import App2 from "./App/App2";
import App3 from "./App/App3";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App2 /> */}
    <App3 />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// * Lecture-5 | JSX elements & Render props
/* import React from "react";
import ReactDOM from "react-dom";

// const element = React.createElement("h1", null, "Hello World!");
// console.log(element);

const index = 0;

setInterval(() => {
  const element = (
    <h1 className="heading" tabIndex={index}>
      <span className="text">
        Hello World! {new Date().toLocaleTimeString()}
      </span>
      <img src="" alt="" />
    </h1>
  );

  // * render react element using 'react-dom'
  ReactDOM.render(element, document.getElementById("root"));
}, 1000); */

/* 
  ??? react simple javascript object types -->
  {
    type: "h1"
    props: {
      className: "heading",
      tabIndex: 0,
      children: [
        {
          type: "span",
          props: {
            className: "text"
          }
        },
        {
          type: "img",
          props: {
            src: "",
            alt: ""
          }
        }
      ]
    }
  }
 */
