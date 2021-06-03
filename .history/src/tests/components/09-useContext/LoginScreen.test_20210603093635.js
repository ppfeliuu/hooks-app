import { mount, shallow } from "enzyme";
import { LoginScreen } from "../../../components/09-useContext/LoginScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe("test login screen", () => {
  const setUser = jest.fn();
  const wrapper = mount(
    <UserContext.Provider
      value={{
        setUser,
      }}
    >
      <LoginScreen />
    </UserContext.Provider>
  );

  test("should show component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should execute button", () => {
    wrapper.find("button").prop("onClick")();

    expect(setUser).toHaveBeenNthCalledWith({
      id: 1,
      name: "Pedro",
    });
  });
});
