import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/effects.css";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);

  return (
    <div>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />
    </div>
  );
};
