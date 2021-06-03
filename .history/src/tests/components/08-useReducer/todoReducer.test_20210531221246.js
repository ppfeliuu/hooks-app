import { todoReducer } from "../../../components/08-useReducer/todoReducer";

const demoTodos = [
  {
    id: 1,
    desc: "React",
    done: false,
  },
  {
    id: 2,
    desc: "Angular",
    done: false,
  },
];

describe("Reducers test", () => {
  test("should return default state", () => {
    const state = todoReducer();
  });
});
