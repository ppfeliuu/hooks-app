import React, { useEffect, useState } from "react";
import "./effects.css";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log("hi");
  });

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Name"
          autoComplete="off"
          value={name}
          onChange={() => {}}
        />
      </div>
    </>
  );
};
