import React, { useReducer } from "react";
import "./styles.css";

export const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

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
