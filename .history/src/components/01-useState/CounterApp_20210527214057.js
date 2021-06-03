import React from "react";
import "./counter.css";

export const CounterApp = () => {
  return (
    <>
      <h1>{counter}</h1>
      <hr />

      <button className="btn btn-primary">+1</button>
      <button>Reset</button>
      <button>-1</button>
    </>
  );
};
