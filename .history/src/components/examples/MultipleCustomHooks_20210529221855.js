import React from "react";
import { useFetch } from "../../hooks/useFetch";
import "../02-useEffect/effects.css";
export const MultipleCustomHooks = () => {
  const state = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
  console.log(state);

  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      <div className="alert alert-info text-center"></div>
    </div>
  );
};
