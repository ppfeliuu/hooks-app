import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe("test todo List Item", () => {
  const handleDelete = jest.fn();
  const handleToogle = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      index={0}
      handleDelete={handleDelete}
      handleToogle={handleToogle}
    />
  );

  test("should show component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should call delete", () => {
    wrapper.find("button").simulate("click");
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test("should call toogle", () => {
    wrapper.find("p").simulate("click");
    expect(handleToogle).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test("should show text ok", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(`1. ${demoTodos[0].desc}`);
  });

  test("should show complete class", () => {
    const todo = demoTodos[0];
    todo.done = true;
    const wrapper = shallow(
      <TodoListItem
        todo={demoTodos[0]}
        index={0}
        handleDelete={handleDelete}
        handleToogle={handleToogle}
      />
    );
  });
});
