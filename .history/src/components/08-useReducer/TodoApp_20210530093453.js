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

      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, index) => (
              <li key={todo.id} className="list-group-item">
                <p className="text-center complete">
                  {index + 1}. {todo.desc}
                </p>

                <button className="btn btn-danger">Delete</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-5"></div>
      </div>
    </div>
  );
};
