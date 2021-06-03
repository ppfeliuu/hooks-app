import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "./counter.css";

export const CounterWithCustomHook = () => {
  const { state, increment, decrement } = useCounter();
  return (
    <>
      <h1>Counter with Hooks: {state}</h1>
      <hr />

      <button className="btn" onClick={() => increment(2)}>
        +1
      </button>
      <button onClick={reset} className="btn">
        Reset
      </button>
      <button className="btn" onClick={() => decrement(2)}>
        -1
      </button>
    </>
  );
};
