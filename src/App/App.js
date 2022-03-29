import React from "react";
/* import CompositionBracket from "../Components/InheritanceVsComposition/Composition/Bracket";
import CompositionEmoji from "../Components/InheritanceVsComposition/Composition/Emoji";
import CompositionText from "../Components/InheritanceVsComposition/Composition/Text";
import Inheritance from "./../Components/InheritanceVsComposition/Inheritance/Text"; */
// import Clock from "./../Components/Clock";
// import ClockList from "./../Components/ClockLIst";
// import FromHandling from "./../Components/FromHandling";
import ClockEventHandling from "./../Components/ClockEventHandling";
/* import ClickCounter from "./../Components/HigherOrderComponent/ClickCounter";
import HoverCounter from "./../Components/HigherOrderComponent/HoverCounter"; */
import Calculator from "./../Components/LiftingStateUp/Calculator";
import ClickCounter2 from "./../Components/RenderProps/ClickCounter";
import Counter from "./../Components/RenderProps/Counter";
import HoverCounter2 from "./../Components/RenderProps/HoverCounter";
import "./App.css";

// const myName = "Samiur Rahman Mukul";

const App = () => {
  // const quantities = [1, 2, 3];

  return (
    <div className="container">
      {/* <Clock locale="bn-BD" /> */}
      <ClockEventHandling />
      {/* <ClockList quantity={quantities} /> */}
      {/* <FromHandling /> */}
      <Calculator />
      {/* <Inheritance />
      <CompositionEmoji>
        {({ addEmoji }) => <CompositionText addEmoji={addEmoji} />}
        {({ addEmoji }) => (
          <CompositionBracket>
            {({ addBracket }) => (
              <CompositionText addEmoji={addEmoji} addBracket={addBracket} />
            )}
          </CompositionBracket>
        )}
      </CompositionEmoji> */}
      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* <User render={(isLoggedIn) => (isLoggedIn ? `${myName}` : "Guest")} /> */}
      {/* // ? render props
      <Counter
        render={(counter, incrementCount) => (
          <ClickCounter2 count={counter} incrementCount={incrementCount} />
        )}
      /> */}
      <Counter>{(counter, incrementCount) => <ClickCounter2 count={counter} incrementCount={incrementCount} />}</Counter>
      <Counter>{(counter, incrementCount) => <HoverCounter2 count={counter} incrementCount={incrementCount} />}</Counter>
    </div>
  );
};

export default App;
