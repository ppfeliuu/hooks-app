import { shallow } from "enzyme";
import { HomeScreen } from "../../../components/09-useContext/HomeScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe("Test home screen", () => {
  const user = {
    name: "Pedro",
    email: "pedro@gmail.com",
  };

  const wrapper = shallow(
    <UserContext value={{ user }}>
      <HomeScreen />
    </UserContext>
  );
  test("should show component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
