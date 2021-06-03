import React from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    handleAddTodo(action);
    reset();
  };

  return (
    <>
      <h4>ADD TODO</h4>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          className="form-control"
          placeholder="add todo"
          autoComplete="off"
          value={description}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-outline-primary mt-1 d-block">
          Add
        </button>
      </form>
    </>
  );
};
