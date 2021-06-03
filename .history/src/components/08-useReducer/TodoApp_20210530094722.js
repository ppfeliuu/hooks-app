import React, { useReducer } from "react";
import "./styles.css";
import { todoReducer } from "./todoReducer";
import { useForm } from "../../hooks/useForm";

const initialState = [
  {
    id: new Date().getTime(),
    desc: "Aprender react",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [formValues, handleInputChange] = useForm({
    description: "",
  });

  console.log(todos);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      desc: "Aprender Angular",
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);
  };

  return (
    <div>
      <h1>Todo App: {todos.length}</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, index) => (
              <li key={todo.id} className="list-group-item">
                <p className="text-center">
                  {index + 1}. {todo.desc}
                </p>

                <button className="btn btn-danger">Delete</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-5">
          <h4>ADD TODO</h4>
          <hr />

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="add todo"
              autoComplete="off"
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn btn-outline-primary mt-1 d-block"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
