import React from "react";

export const TodoList = ({ todos, handleDelete, handleToogle }) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo, index) => (
        <li key={todo.id} className="list-group-item">
          <p
            className={todo.done ? "complete" : ""}
            onClick={() => handleToogle(todo.id)}
          >
            {index + 1}. {todo.desc}
          </p>

          <button
            className="btn btn-danger"
            onClick={() => handleDelete(todo.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
