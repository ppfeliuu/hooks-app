import React, { useReducer } from "react";
import "./styles.css";
import { todoReducer } from "./todoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    desc: "Aprender react",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos] = useReducer(todoReducer, initialState);

  console.log(todos);

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
