import React, { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    console.log("Message mounted");

    return () => {
      cleanup;
    };
  }, [input]);

  return (
    <div>
      <h3>Genial</h3>
    </div>
  );
};
