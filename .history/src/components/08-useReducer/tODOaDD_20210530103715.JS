import React from "react";

export const TodoAdd = ({}) => {
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
