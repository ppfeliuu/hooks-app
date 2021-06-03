import React from "react";
import { useFetch } from "../../hooks/useFetch";
import "../02-useEffect/effects.css";
export const MultipleCustomHooks = () => {
  const { loading } = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
  // console.log(state);

  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0">Hi</p>
          <footer className="blockquote-footer">Pedro</footer>
        </blockquote>
      )}
    </div>
  );
};
