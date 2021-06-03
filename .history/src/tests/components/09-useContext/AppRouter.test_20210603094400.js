import { mount } from "enzyme";
import { AppRouter } from "../../../components/09-useContext/AppRouter";

describe("Test App Router", () => {
  const wrapper = mount(<AppRouter />);

  test("should show component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
