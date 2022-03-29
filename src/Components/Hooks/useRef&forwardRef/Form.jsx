import React, { useEffect, useRef } from "react";
import Input from "./Input";

export default function Form() {
  const inputRef = useRef(null);

  useEffect(() => {
    // ! component did load
    // console.log(inputRef.current);
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <p>
        {/* <input ref={inputRef} type="text" placeholder="enter something" /> */}
        <Input ref={inputRef} type="text" placeholder="enter something" />
      </p>
    </div>
  );
}
