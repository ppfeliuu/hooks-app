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

    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });
});
