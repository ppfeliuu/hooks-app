import { shallow } from "enzyme";
import { TodoAdd } from "../../../components/08-useReducer/tODOaDD.JS";

describe("test todo add", () => {
  const handleAddTodo = jest.fn();
  const wrapper = shallow(<TodoAdd handleAdd={handleAddTodo} />);

  test("should show component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should not to call add todo", () => {
    const formSubmit = wrapper.find("form").prop("onSubmit");

    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test("should call handleAddTodo", () => {
    const value = "React";
    wrapper
      .find("input")
      .at(0)
      .simulate("change", {
        target: {
          name: "description",
          value,
        },
      });

    const formSubmit = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault()=> {} });

    expect(handleAddTodo).toHaveBeenCalled();
  });
});
