import { mount, shallow } from "enzyme";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { demoTodos } from "../../fixtures/demoTodos";

describe("test TodoApp", () => {
  const wrapper = shallow(<TodoApp />);
  test("should show component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should add todo", () => {
    const wrapper = mount(<TodoApp />);

    wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[0]);
  });
});
