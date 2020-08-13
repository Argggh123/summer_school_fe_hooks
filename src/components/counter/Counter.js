import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const countNumbHandler = (type, value) => {
    switch (type) {
      case "rise":
        setCounter(counter + value);
        break;
      case "sub":
        setCounter(counter - value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="counter">
      <h1>Counter component</h1>
      <p>Counter value: {counter}</p>
      <div className="counter__buttons--row-around">
        <button onClick={() => countNumbHandler("sub", 1)}>отнять 1</button>
        <button onClick={() => countNumbHandler("rise", 1)}>прибавить 1</button>
      </div>
    </div>
  );
};

export default Counter;
