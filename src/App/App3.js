import React, { useCallback, useMemo, useState } from "react";
import Form from "../Components/Hooks/useRef&forwardRef/Form";
import Time from "../Components/Hooks/useRef&forwardRef/Time";
/* import TodoClass from './../Components/Hooks/useState/TodoClass'
import Todo from './../Components/Hooks/useState/Todo'
import Counter from './../Components/Hooks/useState/Counter' */
/* import MyComponentClass from "../Components/Hooks/useEffect/MyComponentClass";
import MyComponents from "./../Components/Hooks/useEffect/MyComponents"; */
import Button from "./../Components/Hooks/useCallback&useMemo/Button";
import ShowCount from "./../Components/Hooks/useCallback&useMemo/ShowCount";
import Title from "./../Components/Hooks/useCallback&useMemo/Title";
import "./Style.css";

export default function App3() {
  // const [show, setShow] = useState(true);

  // ? useCallback&useMemo components functionality
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);

  const incrementByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5);
  }, []);

  const isEvenOrOdd = useMemo(() => {
    // let i = 0;
    // while (i < 1000000000) i += 1; // costly operation
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <div className="container">
      <div className="useSate-hooks">
        {/* <TodoClass />
      <Todo />
      <Counter /> */}
      </div>
      <div className="useEffect-hooks">
        {/* <div>
        <div>{show && <MyComponentClass />}</div>
        <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>
          {show ? "Hide Post" : "Show Post"}
        </button>
      </div>
      <MyComponents /> */}
      </div>
      <div className="useCallback-useMemo-hooks">
        <Title />
        <ShowCount count={count1} title="Counter 1" />
        <span>{isEvenOrOdd ? "Even" : "Odd"}</span>
        <Button handleClick={incrementByOne}>Increment by one</Button>
        <hr />
        <ShowCount count={count2} title="Counter 2" />
        <Button handleClick={incrementByFive}>Increment by five</Button>
        <hr />
      </div>
      <div className="useRef-hooks">
        <Form />
        <Time />
      </div>
    </div>
  );
}
