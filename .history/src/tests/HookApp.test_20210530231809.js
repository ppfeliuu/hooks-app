import React from "react";
import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe("Test en <Ho />", () => {
  test("should show component", () => {
    const wrapper = shallow(<HookApp />);

    expect(wrapper).toMatchSnapshot();
  });
});
