import { shallow } from "enzyme";
import { TodoList } from "../../../components/08-useReducer/TodoList";
import { demoTodos } from "../../fixtures/demoTodos";

describe("test todo list", () => {
  const handleDelete = jest.fn();
  const handleToogle = jest.fn();

  const wrapper = shallow(
    <TodoList
      todos={demoTodos}
      handleDelete={handleDelete}
      handleToggle={handleToogle}
    />
  );

  test("should show component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should have 2 todo list item", () => {
    expect(wrapper.find("TodoListItem").length).toBe(demoTodos.length);

    expect(wrapper.find("TodoListItem").at(0).prop("handleDelete")).toEqual(
      expect.any(Function)
    );
  });
});
