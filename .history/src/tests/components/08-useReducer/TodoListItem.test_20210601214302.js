import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe("test todo List Item", () => {
  const handleDelete = jest.fn();
  const handleToogle = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos}
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
    expect(handleDelete).toHaveBeenLastCalledWith(100);
  });
});
