import React, { useEffect } from "react";
import "./effects.css";

export const SimpleForm = () => {
  useEffect(() => {
    console.log("hi");
  });

  return (
    <>
      <h1>useEffect</h1>
      <hr />
    </>
  );
};
