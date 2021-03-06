import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "./counter.css";

export const CounterWithCustomHook = () => {
  const { state, increment, decrement } = useCounter();
  return (
    <>
      <h1>Counter with Hooks {0}</h1>
      <hr />

      <button className="btn">+1</button>
      <button className="btn">-1</button>
    </>
  );
};
