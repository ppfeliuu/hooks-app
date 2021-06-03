import React from "react";
import "./counter.css";

export const CounterWithCustomHook = () => {
  return (
    <>
      <h1>Counter with Hooks {0}</h1>
      <hr />

      <button>+1</button>
      <button>-1</button>
    </>
  );
};
