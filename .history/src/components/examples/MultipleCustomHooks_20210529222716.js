import React from "react";
import { useFetch } from "../../hooks/useFetch";
import "../02-useEffect/effects.css";
export const MultipleCustomHooks = () => {
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/1`
  );
  // console.log(state);

  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-2">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button className="btn btn-primary">Next</button>
    </div>
  );
};
