import { shallow } from "enzyme";
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";

describe("Test un Real Ref", () => {
  const wrapper = shallow(<RealExampleRef />);

  test("should show component", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(false);
  });

  test("should test component MultipleHooks", () => {});
});
