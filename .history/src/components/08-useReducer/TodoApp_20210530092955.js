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
      <h1>Todo App: {todos.length}</h1>
      <hr />

      <ul className="list-group list-group-flush">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            {todo.desc}
          </li>
        ))}
      </ul>
    </div>
  );
};
