import React, { useReducer } from "react";
import "./styles.css";

const initialState = [
  {
    id: new Date().getTime(),
    desc: "Aprender react",
    done: false,
  },
];

export const TodoApp = () => {
  const [state] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Todo App</h1>
      <hr />

      <ul>
        <li>Hola</li>
        <li>Mundo</li>
        <li>Jaja</li>
      </ul>
    </div>
  );
};
