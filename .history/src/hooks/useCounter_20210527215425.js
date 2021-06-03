import { useState } from "react";

export const useCounter = (initialState) => {
  const [state, setstate] = useState(initialState);

  const increment = () => {
    setstate(state + 1);
  };

  const decrement = () => {
    setstate(state - 1);
  };

  return {
    state,
    increment,
    decrement,
  };
};
