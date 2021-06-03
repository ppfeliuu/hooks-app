import { mount, shallow } from "enzyme";
import { LoginScreen } from "../../../components/09-useContext/LoginScreen";

describe("test login screen", () => {
  const wrapper = mount(<LoginScreen />);

  test("should show component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
