import React, { useLayoutEffect, useRef } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./layout.css";

export const LayoutEffects = () => {
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote } = !!data && data[0];

  const pTag = useRef();

  useLayoutEffect(() => {}, []);

  return (
    <div>
      <h1>Layout Effects</h1>
      <hr />

      <blockquote className="blockquote d-flex justify-content-end">
        <p className="mb-2" ref={pTag}>
          {quote}
        </p>
      </blockquote>

      <button className="btn btn-primary" onClick={increment}>
        Next
      </button>
    </div>
  );
};
