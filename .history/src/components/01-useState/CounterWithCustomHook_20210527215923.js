import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "./counter.css";

export const CounterWithCustomHook = () => {
  const { state, increment, decrement } = useCounter(100);
  return (
    <>
      <h1>Counter with Hooks: {state}</h1>
      <hr />

      <button className="btn">+1</button>
      <button className="btn">-1</button>
    </>
  );
};
