import { shallow } from "enzyme";
import { HomeScreen } from "../../../components/09-useContext/HomeScreen";

describe("Test home screen", () => {
  test("should show component", () => {
    const wrapper = shallow(<HomeScreen />);
  });
});
