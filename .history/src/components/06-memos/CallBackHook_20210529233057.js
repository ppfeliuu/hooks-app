import React, { useState } from "react";
import "../02-useEffect/effects.css";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>useCallback hook</h1>
      <hr />
    </div>
  );
};
