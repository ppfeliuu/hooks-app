import React, { useMemo, useState } from "react";
import { procesoPesado } from "../../helpers/ProcesoPesado";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/effects.css";

export const MemoHook = () => {
  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado, [counter]);

  return (
    <div>
      <h1>Memo Hook</h1>
      <h3>Counter: {counter}</h3>
      <hr />

      <p>{procesoPesado(counter)}</p>

      <button className="btn btn-primary mr-3" onClick={increment}>
        +1
      </button>

      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
