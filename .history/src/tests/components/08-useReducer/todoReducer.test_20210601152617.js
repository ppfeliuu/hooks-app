import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Reducers test", () => {
  test("should return default state", () => {
    const state = todoReducer(demoTodos, {});

    expect(state).toEqual(demoTodos);
  });

  test("should add todo", () => {
    const newTodo = {
      id: 3,
      desc: "Vue",
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    const state = todoReducer(demoTodos, action);
    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, newTodo]);
  });

  test("should delete a todo", () => {
    const action = {
      type: "delete",
      payload: 1,
    };

    const state = todoReducer(demoTodos, action);

    expect(state.length).toBe(1);
    expect(state).toEqual([demoTodos[1]]);
  });

  test("should do a toogle a todo", () => {
    const action = {
      type: "toogle",
      payload: 1,
    };
  });
});
