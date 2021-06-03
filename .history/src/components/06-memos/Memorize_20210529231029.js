import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/effects.css";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);

  return (
    <div>
      <h1>Memorize</h1>
      <hr />
    </div>
  );
};
