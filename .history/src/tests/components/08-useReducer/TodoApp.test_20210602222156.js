import { act } from "@testing-library/react";
import { mount, shallow } from "enzyme";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { demoTodos } from "../../fixtures/demoTodos";

describe("test TodoApp", () => {
  const wrapper = shallow(<TodoApp />);

  Storage.prototype.setItem = jest.fn(() => {});
  test("should show component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should add todo", () => {
    const wrapper = mount(<TodoApp />);

    act(() => {
      wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[0]);
      wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[1]);
    });

    expect(wrapper.find("h1").text().trim()).toBe("Todo App: 2");

    expect(localStorage.setItem).toHaveBeenLastCalledTimes(2);
  });

  test("should delete a todo", () => {
    wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[0]);
  });
});
