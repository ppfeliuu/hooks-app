import React, { useEffect, useState } from "react";
import "./effects.css";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

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
