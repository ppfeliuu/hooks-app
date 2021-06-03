import { shallow } from "enzyme";
import { TodoAdd } from "../../../components/08-useReducer/tODOaDD.JS";

describe("test todo add", () => {
  const handleAddTodo = jest.fn();
  const wrapper = shallow(<TodoAdd handleAdd={handleAddTodo} />);
  test("should show component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
