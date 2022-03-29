import React from "react";

export default function BoilingVerdict({ celsius = 0 }) {
  if (celsius >= 100) {
    return <p>RESULT: The water would boil.</p>;
  } else {
    return <p>RESULT: Water could not boil.</p>;
  }
}
