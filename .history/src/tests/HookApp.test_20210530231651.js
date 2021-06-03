import { shallow } from "enzyme";
import React from "react";
import { HookApp } from "../HookApp";

describe("Test en <Ho />", () => {
  test("should show component", () => {
    const wrapper = shallow(<HookApp />);

    expect(wrapper).toMatchSnapshot();
  });
});
