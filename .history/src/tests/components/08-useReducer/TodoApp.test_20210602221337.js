import { mount, shallow } from "enzyme";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";

describe("test TodoApp", () => {
  const wrapper = shallow(<TodoApp />);
  test("should show component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should add todo", () => {
    const wrapper = mount(<TodoApp />);
  });
});
