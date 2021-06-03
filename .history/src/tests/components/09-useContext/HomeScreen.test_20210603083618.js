import { shallow } from "enzyme";
import { HomeScreen } from "../../../components/09-useContext/HomeScreen";

describe("Test home screen", () => {
  const wrapper = shallow(<HomeScreen />);
  test("should show component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
