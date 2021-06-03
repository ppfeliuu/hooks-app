import React, { useState } from "react";
import "./counter.css";

export const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Counter {0}</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +1
      </button>
      <button>Reset</button>
      <button>-1</button>
    </>
  );
};
