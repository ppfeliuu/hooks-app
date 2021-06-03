import { shallow, mount } from "enzyme";
import { HomeScreen } from "../../../components/09-useContext/HomeScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe("Test home screen", () => {
  const user = {
    name: "Pedro",
    email: "pedro@gmail.com",
  };

  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <HomeScreen />
    </UserContext.Provider>
  );
  test("should show component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
