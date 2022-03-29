import React, { useEffect, useRef, useState } from "react";

function Time() {
  const [date, setDate] = useState(new Date());
  const buttonRef = useRef(null);

  useEffect(() => {
    console.log("starting time");
    buttonRef.current = setInterval(tick, 1000);

    // * do the cleanup - stop the time
    return () => {
      clearInterval(buttonRef.current);
      console.log("component unmount");
    };
  }, []);

  const tick = () => {
    setDate(new Date());
  };

  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>
      <button type="button" onClick={() => clearInterval(buttonRef.current)}>
        Stop Clock
      </button>
    </div>
  );
}

export default Time;
