import React, { memo } from "react";

export const ShowIncrement = React.memo(({ increment }) => {
  console.log("Show Increment");
  return (
    <button className="btn btn-primary" onClick={() => increment()}>
      Increment
    </button>
  );
});
