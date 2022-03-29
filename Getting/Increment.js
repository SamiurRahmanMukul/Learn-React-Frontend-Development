/*Title: Learn React Fundamental - Increment.js
  Description: Learn basic & fundamental idea with React.js
  Author: Md. Samiur Rahman (Mukul) 
  Website: http://www.SamiurRahmanMukul.epizy.com
  Github: https://www.github.com/SamiurRahmanMukul
  Email: example2022@gmail.com [FAKE EMAIL]
  Date: 01/12/2021 */

const domContainer = document.querySelector("#root");

// create react element
/* const myElement = React.cloneElement("div", null, [
  React.createElement("p", null, "Hello world"),
  React.createElement("p", null, "Hello world"),
]); */

const Increment = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      <h1 id="display">{counter}</h1> {/* use variable in JSX called INTERPOLATION */}
      <div>
        <button id="button" onClick={() => setCounter(counter + 1)}>
          Increment +
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(
  <div className="container">
    <Increment />
  </div>,
  domContainer
);
