import React, { useEffect, useState } from "react";

function MyComponents() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("updating document title");
    document.title = `Clicked ${count} Times`;
  }, [count]); // ? if use define value then component update that's values times

  useEffect(() => {
    console.log("starting time");
    const interval = setInterval(tick, 1000);

    // * do the cleanup - stop the time
    return () => {
      clearInterval(interval);
      console.log("component unmount");
    };
  }, []); // ? if use [] blank array then component update only 1 time

  const addClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const tick = () => {
    setDate(new Date());
  };

  const handleChange = (e) => {
    e.preventDefault();
    const myText = e.target.value;
    setText(myText);
    console.log(myText);
  };

  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>
      <input type="text" value={text} onChange={handleChange} />
      <p>
        <button type="button" onClick={addClick}>
          Click
        </button>
      </p>
    </div>
  );
}

export default MyComponents;
