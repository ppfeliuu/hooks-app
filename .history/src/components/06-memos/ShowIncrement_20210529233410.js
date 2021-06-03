import React from "react";

export const ShowIncrement = ({ increment }) => {
  console.log("Show Increment");
  return (
    <button className="btn btn-primary" onClick={() => increment()}>
      Increment
    </button>
  );
};
